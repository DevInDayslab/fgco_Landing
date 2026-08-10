import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { FileDropzone } from "@/components/awards/FileDropzone";
import {
  checkboxBoxClass,
  errorClass,
  fieldClass,
  labelClass,
  primaryInlineButtonClass,
  radioCardClass,
  secondaryButtonClass,
  selectClass,
  submitButtonClass,
  textareaClass,
} from "@/components/awards/form-styles";
import { FormPanel, FormSectionHeader, FormSuccessState } from "@/components/awards/FormPrimitives";
import { nominationCategories, nomineeTypes, nominatorRelationshipOptions, publicationOptions, getNominationFeeBreakdown, isSelfNominationInput } from "@/data/awards";
import {
  emailField,
  nameField,
  optionalUrlField,
  phoneField,
  requiredTextField,
} from "@/lib/form-validation";
import {
  checkNomineeEmail,
  isApiConfigured,
  postApplication,
  uploadNominationFile,
} from "@/lib/api-client";
import { openNominationRazorpayCheckout } from "@/lib/razorpay-checkout";
import { formatMaxUploadSize, UPLOAD_MAX_BYTES, VIDEO_MAX_DURATION_SEC } from "@/lib/upload-limits";
import { prepareNominationUpload } from "@/lib/file-compress";

const wordCount = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;

const schema = z.object({
  nominatorName: nameField,
  nominatorOrg: z.string().optional(),
  nominatorEmail: emailField,
  nominatorPhone: phoneField,
  relationship: z.string().min(1, "Select your relationship to the nominee"),
  nomineeType: z.enum(nomineeTypes, { message: "Select a nomination type" }),
  nomineeName: requiredTextField("Nominee name"),
  nomineeDesignation: z.string().optional(),
  nomineePhone: phoneField,
  nomineeEmail: emailField,
  nomineeLocation: requiredTextField("Location"),
  nomineeSocial: z.string().optional(),
  category: z.enum(nominationCategories, { message: "Select a category" }),
  publications: z.array(z.string()).min(1, "Select at least one publication"),
  executiveSummary: z.string().optional(),
  achievement: z.string().optional(),
  impact: z.string().optional(),
  futureGoals: z.string().optional(),
  altVideoLink: optionalUrlField,
  declaration: z.boolean().optional(),
});

type FormData = z.infer<typeof schema>;

const STEPS = [
  "Nominator Information",
  "Nominee Details",
  "Categories & Publications",
  "Justification",
  "Attachments",
  "Declaration",
] as const;

const stepFields: Record<number, (keyof FormData)[]> = {
  0: ["nominatorName", "nominatorEmail", "nominatorPhone", "relationship"],
  1: ["nomineeType", "nomineeName", "nomineePhone", "nomineeEmail", "nomineeLocation"],
  2: ["category", "publications"],
  3: ["executiveSummary", "achievement"],
  4: [],
  5: ["declaration"],
};

export function NominationWizard() {
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [successInfo, setSuccessInfo] = useState<{
    referenceId: string;
    isSelfNomination: boolean;
    nominatorEmail: string;
    nomineeEmail: string;
  } | null>(null);
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [supportingDocs, setSupportingDocs] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      publications: [],
      declaration: undefined,
    },
    mode: "onChange",
  });

  const {
    register,
    watch,
    setValue,
    trigger,
    handleSubmit,
    formState: { errors },
  } = form;

  const publications = watch("publications") ?? [];
  const nomineeType = watch("nomineeType");
  const relationship = watch("relationship");
  const nominatorEmail = watch("nominatorEmail");
  const nomineeEmail = watch("nomineeEmail");
  const executiveSummary = watch("executiveSummary") ?? "";
  const summaryWords = wordCount(executiveSummary);
  const isSelfNomination = isSelfNominationInput({
    relationship,
    nominatorEmail,
    nomineeEmail,
  });
  const feeBreakdown = getNominationFeeBreakdown(isSelfNomination);

  const lastStepIndex = STEPS.length - 1;

  async function nextStep() {
    if (step === 4 && !profilePhoto) {
      toast.error("Profile photo or company logo is required.");
      return;
    }
    if (step === 3) {
      const summary = (watch("executiveSummary") ?? "").trim();
      const achievement = (watch("achievement") ?? "").trim();
      if (!summary) {
        toast.error("Executive summary is required.");
        return;
      }
      if (wordCount(summary) > 100) {
        toast.error("Executive summary must be 100 words or fewer.");
        return;
      }
      if (!achievement) {
        toast.error("Achievement description is required.");
        return;
      }
    }
    const fields = stepFields[step] ?? [];
    const valid = fields.length === 0 || (await trigger(fields));
    if (!valid) return;

    if (step === 1 && isApiConfigured()) {
      const nomineeEmail = watch("nomineeEmail")?.trim();
      if (nomineeEmail) {
        try {
          await checkNomineeEmail(nomineeEmail);
        } catch (err) {
          toast.error(
            err instanceof Error
              ? err.message
              : "This nominee email cannot be used for a new nomination.",
          );
          return;
        }
      }
    }

    setStep((s) => Math.min(s + 1, lastStepIndex));
  }

  function prevStep() {
    setStep((s) => Math.max(s - 1, 0));
  }

  function togglePublication(pub: string) {
    const current = publications;
    const next = current.includes(pub) ? current.filter((p) => p !== pub) : [...current, pub];
    setValue("publications", next, { shouldValidate: true });
  }

  async function processProfileUpload(file: File): Promise<File | null> {
    const prepared = await prepareNominationUpload(file, "profile");
    if (prepared.file.size > UPLOAD_MAX_BYTES.profile) {
      throw new Error(
        `Profile photo must be under ${formatMaxUploadSize(UPLOAD_MAX_BYTES.profile)}.`,
      );
    }
    return prepared.file;
  }

  async function processDocumentUpload(file: File): Promise<File | null> {
    const prepared = await prepareNominationUpload(file, "document");
    if (prepared.file.size > UPLOAD_MAX_BYTES.document) {
      throw new Error(
        `Supporting document must be under ${formatMaxUploadSize(UPLOAD_MAX_BYTES.document)}.`,
      );
    }
    return prepared.file;
  }

  async function processVideoUpload(file: File): Promise<File | null> {
    const previewUrl = URL.createObjectURL(file);
    const previewVideo = document.createElement("video");
    previewVideo.preload = "metadata";
    previewVideo.src = previewUrl;

    try {
      await new Promise<void>((resolve, reject) => {
        previewVideo.onloadedmetadata = () => resolve();
        previewVideo.onerror = () => reject(new Error("Could not read video file."));
      });

      if (previewVideo.duration > VIDEO_MAX_DURATION_SEC) {
        toast.message("Video is longer than 3 minutes. Only the first 3 minutes will be uploaded.");
      }
    } finally {
      URL.revokeObjectURL(previewUrl);
      previewVideo.removeAttribute("src");
      previewVideo.load();
    }

    const prepared = await prepareNominationUpload(file, "video");
    if (prepared.file.size > UPLOAD_MAX_BYTES.video) {
      throw new Error(
        `Video must be under ${formatMaxUploadSize(UPLOAD_MAX_BYTES.video)}. Please use a shorter clip or the alternative video link.`,
      );
    }
    return prepared.file;
  }

  async function onSubmit(data: FormData) {
    const selfNomination = isSelfNominationInput({
      relationship: data.relationship,
      nominatorEmail: data.nominatorEmail,
      nomineeEmail: data.nomineeEmail,
    });

    if (!isApiConfigured()) {
      toast.error("Nomination API is not configured. Set VITE_API_BASE_URL.");
      return;
    }

    if (!data.declaration) {
      toast.error("You must accept the declaration.");
      setStep(5);
      return;
    }

    const summary = (data.executiveSummary ?? "").trim();
    const achievement = (data.achievement ?? "").trim();
    if (!summary || wordCount(summary) > 100 || !achievement) {
      toast.error("Please complete the justification step before submitting.");
      setStep(3);
      return;
    }

    if (!profilePhoto) {
      toast.error("Profile photo or company logo is required.");
      setStep(4);
      return;
    }

    setSubmitting(true);
    try {
      const profileUpload = await uploadNominationFile(profilePhoto, "profile");

      let supportingUpload: Awaited<ReturnType<typeof uploadNominationFile>> | null = null;
      if (supportingDocs) {
        supportingUpload = await uploadNominationFile(supportingDocs, "document");
      }

      let videoUpload: Awaited<ReturnType<typeof uploadNominationFile>> | null = null;
      if (videoFile) {
        videoUpload = await uploadNominationFile(videoFile, "video");
      }

      const applicationPayload = {
        nominatorName: data.nominatorName,
        nominatorEmail: data.nominatorEmail,
        nominatorPhone: data.nominatorPhone,
        nomineeName: data.nomineeName,
        category: data.category,
        profilePhotoKey: profileUpload.key,
        formData: {
          ...data,
          attachments: {
            profilePhoto: {
              key: profileUpload.key,
              originalName: profileUpload.originalName,
              contentType: profileUpload.contentType,
              size: profileUpload.size,
              originalSize: profileUpload.originalSize,
              compressed: profileUpload.compressed,
              publicUrl: profileUpload.publicUrl,
            },
            supportingDocs: supportingUpload
              ? {
                  key: supportingUpload.key,
                  originalName: supportingUpload.originalName,
                  contentType: supportingUpload.contentType,
                  size: supportingUpload.size,
                  originalSize: supportingUpload.originalSize,
                  compressed: supportingUpload.compressed,
                  publicUrl: supportingUpload.publicUrl,
                }
              : null,
            videoFile: videoUpload
              ? {
                  key: videoUpload.key,
                  originalName: videoUpload.originalName,
                  contentType: videoUpload.contentType,
                  size: videoUpload.size,
                  originalSize: videoUpload.originalSize,
                  compressed: videoUpload.compressed,
                  publicUrl: videoUpload.publicUrl,
                }
              : null,
          },
        },
        ...(supportingUpload ? { supportingDocsKey: supportingUpload.key } : {}),
        ...(videoUpload ? { videoKey: videoUpload.key } : {}),
      };

      await openNominationRazorpayCheckout(
        {
          nominatorName: data.nominatorName,
          nominatorEmail: data.nominatorEmail,
          nominatorPhone: data.nominatorPhone,
          nomineeName: data.nomineeName,
          nomineeEmail: data.nomineeEmail,
          category: data.category,
          relationship: data.relationship,
        },
        async (paymentId) => {
          const result = await postApplication({ ...applicationPayload, paymentId });

          setSuccessInfo({
            referenceId: result.referenceId,
            isSelfNomination: selfNomination,
            nominatorEmail: data.nominatorEmail.trim(),
            nomineeEmail: data.nomineeEmail.trim(),
          });
          setSubmitted(true);
          toast.success(`Nomination submitted (ref ${result.referenceId}).`);
        },
        () => {
          toast.message("Payment was cancelled. Your uploads are saved — complete payment to submit.");
        },
      );
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to submit nomination.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted && successInfo) {
    const emailNotices = successInfo.isSelfNomination
      ? [
          {
            label: "CEO letter & application acknowledgement",
            email: successInfo.nomineeEmail,
          },
        ]
      : [
          { label: "Payment receipt & nominator acknowledgement", email: successInfo.nominatorEmail },
          { label: "CEO letter & nomination acknowledgement", email: successInfo.nomineeEmail },
        ];

    return (
      <FormSuccessState
        title="Nomination Submitted Successfully"
        referenceId={successInfo.referenceId}
        message="Thank you for your submission. The National Jury will review this nomination."
        emailNotices={emailNotices}
      />
    );
  }

  return (
    <FormPanel className="!p-6 md:!p-8 lg:!p-10">
      <div className="mb-8 text-center">
        <h2 className="fg-hero-title text-2xl md:text-3xl">HIT Awards & Special Edition</h2>
        <p className="mt-2 text-sm font-medium text-gold md:text-base">
          Official Comprehensive Nomination Portal
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <FormSectionHeader step={step + 1} title={STEPS[step] ?? STEPS[0]} />

        {step === 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="nominatorName">
                Full Name *
              </label>
              <input
                id="nominatorName"
                placeholder="John Doe"
                {...register("nominatorName")}
                className={fieldClass}
              />
              {errors.nominatorName && (
                <p className={errorClass}>{errors.nominatorName.message}</p>
              )}
            </div>
            <div>
              <label className={labelClass} htmlFor="nominatorOrg">
                Organization / Affiliation
              </label>
              <input
                id="nominatorOrg"
                placeholder="Company Inc."
                {...register("nominatorOrg")}
                className={fieldClass}
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="nominatorEmail">
                Email Address *
              </label>
              <input
                id="nominatorEmail"
                type="email"
                autoComplete="email"
                placeholder="john@example.com"
                {...register("nominatorEmail")}
                className={fieldClass}
              />
              {errors.nominatorEmail && (
                <p className={errorClass}>{errors.nominatorEmail.message}</p>
              )}
            </div>
            <div>
              <label className={labelClass} htmlFor="nominatorPhone">
                WhatsApp Number *
              </label>
              <input
                id="nominatorPhone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                placeholder="+91 00000 00000"
                maxLength={15}
                {...register("nominatorPhone")}
                className={fieldClass}
              />
              {errors.nominatorPhone && (
                <p className={errorClass}>{errors.nominatorPhone.message}</p>
              )}
            </div>
            <div>
              <label className={labelClass} htmlFor="relationship">
                Relationship to Nominee *
              </label>
              <select
                id="relationship"
                {...register("relationship")}
                className={selectClass}
                defaultValue=""
              >
                <option value="" disabled>Select relationship...</option>
                {nominatorRelationshipOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.relationship && (
                <p className={errorClass}>{errors.relationship.message}</p>
              )}
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label className={labelClass}>Type of Nomination *</label>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {nomineeTypes.map((type) => (
                  <label key={type} className={radioCardClass(nomineeType === type)}>
                    <input
                      type="radio"
                      value={type}
                      {...register("nomineeType")}
                      className="h-4 w-4 accent-amber-500"
                    />
                    <span className="text-xs md:text-sm">{type}</span>
                  </label>
                ))}
              </div>
              {errors.nomineeType && (
                <p className={errorClass}>{errors.nomineeType.message}</p>
              )}
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="nomineeName">
                  Nominee Name *
                </label>
                <input id="nomineeName" {...register("nomineeName")} className={fieldClass} />
                {errors.nomineeName && (
                  <p className={errorClass}>{errors.nomineeName.message}</p>
                )}
              </div>
              <div>
                <label className={labelClass} htmlFor="nomineeDesignation">
                  Designation / Job Title
                </label>
                <input
                  id="nomineeDesignation"
                  {...register("nomineeDesignation")}
                  className={fieldClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="nomineePhone">
                  Contact Number *
                </label>
                <input
                  id="nomineePhone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  placeholder="10-digit mobile number"
                  maxLength={15}
                  {...register("nomineePhone")}
                  className={fieldClass}
                />
                {errors.nomineePhone && (
                  <p className={errorClass}>{errors.nomineePhone.message}</p>
                )}
              </div>
              <div>
                <label className={labelClass} htmlFor="nomineeEmail">
                  Email Address *
                </label>
                <input
                  id="nomineeEmail"
                  type="email"
                  autoComplete="email"
                  placeholder="name@example.com"
                  {...register("nomineeEmail")}
                  className={fieldClass}
                />
                {errors.nomineeEmail && (
                  <p className={errorClass}>{errors.nomineeEmail.message}</p>
                )}
              </div>
              <div>
                <label className={labelClass} htmlFor="nomineeLocation">
                  Location *
                </label>
                <input
                  id="nomineeLocation"
                  placeholder="City, State, Country"
                  {...register("nomineeLocation")}
                  className={fieldClass}
                />
                {errors.nomineeLocation && (
                  <p className={errorClass}>{errors.nomineeLocation.message}</p>
                )}
              </div>
              <div className="md:col-span-2">
                <label className={labelClass} htmlFor="nomineeSocial">
                  Social Media Links
                </label>
                <textarea
                  id="nomineeSocial"
                  {...register("nomineeSocial")}
                  rows={3}
                  placeholder="LinkedIn, Twitter/X, Instagram, Website..."
                  className={textareaClass}
                />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <label className={labelClass} htmlFor="category">
                HIT Awards Nomination Category *
              </label>
              <select id="category" {...register("category")} className={selectClass} defaultValue="">
                <option value="" disabled>Select Category...</option>
                {nominationCategories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              {errors.category && <p className={errorClass}>{errors.category.message}</p>}
            </div>
            <div>
              <label className={labelClass}>Preferred Publication *</label>
              <div className="space-y-3">
                {publicationOptions.map((pub) => (
                  <label
                    key={pub}
                    className={radioCardClass(publications.includes(pub))}
                  >
                    <input
                      type="checkbox"
                      checked={publications.includes(pub)}
                      onChange={() => togglePublication(pub)}
                      className="h-4 w-4 accent-amber-500"
                    />
                    <span className="text-xs md:text-sm">{pub}</span>
                  </label>
                ))}
              </div>
              {errors.publications && (
                <p className={errorClass}>{errors.publications.message}</p>
              )}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className={labelClass} htmlFor="executiveSummary">
                  Executive Summary (Max 100 words) *
                </label>
                <span
                  className={`text-xs ${summaryWords > 100 ? "text-en" : "text-gray-500"}`}
                >
                  {summaryWords}/100 words
                </span>
              </div>
              <textarea
                id="executiveSummary"
                {...register("executiveSummary")}
                rows={4}
                placeholder="Briefly summarize why this nominee is being recommended..."
                className={textareaClass}
              />
              {errors.executiveSummary && (
                <p className={errorClass}>{errors.executiveSummary.message}</p>
              )}
            </div>
            <div>
              <label className={labelClass} htmlFor="achievement">
                Detailed Description of Achievement *
              </label>
              <textarea id="achievement" {...register("achievement")} rows={5} className={textareaClass} />
              {errors.achievement && (
                <p className={errorClass}>{errors.achievement.message}</p>
              )}
            </div>
            <div>
              <label className={labelClass} htmlFor="impact">
                Measurable Impact and Outcomes
              </label>
              <textarea id="impact" {...register("impact")} rows={4} className={textareaClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="futureGoals">
                Future Goals & Vision
              </label>
              <textarea
                id="futureGoals"
                {...register("futureGoals")}
                rows={4}
                className={textareaClass}
              />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FileDropzone
                label="Profile Photo / Logo"
                required
                accept="image/jpeg,image/png,image/webp"
                hint={`JPG, PNG · max ${formatMaxUploadSize(UPLOAD_MAX_BYTES.profile)}`}
                value={profilePhoto}
                onChange={setProfilePhoto}
                maxBytes={UPLOAD_MAX_BYTES.profile}
                processFile={processProfileUpload}
              />
              <FileDropzone
                label="Supporting Documents"
                variant="document"
                accept=".pdf,.doc,.docx,.ppt,.pptx,application/pdf,image/jpeg,image/png,image/webp"
                hint={`PDF or images · max ${formatMaxUploadSize(UPLOAD_MAX_BYTES.document)}`}
                value={supportingDocs}
                onChange={setSupportingDocs}
                maxBytes={UPLOAD_MAX_BYTES.document}
                processFile={processDocumentUpload}
              />
            </div>
            <FileDropzone
              label="Introduction or Showcase Video (Max 3 minutes)"
              variant="video"
              accept="video/mp4,video/quicktime,video/webm"
              hint={`MP4, MOV, WebM · max ${formatMaxUploadSize(UPLOAD_MAX_BYTES.video)} · compressed automatically`}
              value={videoFile}
              onChange={setVideoFile}
              maxBytes={UPLOAD_MAX_BYTES.video}
              processFile={processVideoUpload}
            />
            <div>
              <label className={labelClass} htmlFor="altVideoLink">
                Alternative Video Link
              </label>
              <input
                id="altVideoLink"
                type="url"
                placeholder="https://youtube.com/... or Google Drive link"
                {...register("altVideoLink")}
                className={fieldClass}
              />
              {errors.altVideoLink && (
                <p className={errorClass}>{errors.altVideoLink.message}</p>
              )}
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6">
            <div className="rounded-xl border border-gold/30 bg-gold/[0.06] p-4 md:p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">Nomination fee</p>
              <p className="mt-1 text-xs text-gray-400">{feeBreakdown.feeLabel}</p>
              <p className="mt-3 text-2xl font-semibold text-white">
                ₹{feeBreakdown.totalInr.toLocaleString("en-IN")}
              </p>
              <p className="mt-3 text-xs text-gray-400">
                Payment is collected securely via Razorpay when you submit. Your nomination is only
                finalized after successful payment.
              </p>
            </div>
            <div>
            <label className={checkboxBoxClass}>
              <input
                type="checkbox"
                {...register("declaration")}
                className="mt-1 h-5 w-5 shrink-0 accent-amber-500"
              />
              <span className="text-xs leading-relaxed text-gray-300 md:text-sm">
                I confirm that the information provided is accurate and authentic. I grant FG
                MEDIA GROUP the rights to utilise the submitted details and media for publication
                and the HIT Awards consideration process. I agree to the{" "}
                <Link to="/terms" className="text-gold hover:underline">
                  Terms & Conditions
                </Link>
                ,{" "}
                <Link to="/privacy" className="text-gold hover:underline">
                  Privacy Policy
                </Link>
                ,{" "}
                <Link to="/refund-policy" className="text-gold hover:underline">
                  Refund Policy
                </Link>
                , and{" "}
                <Link to="/cancellation-policy" className="text-gold hover:underline">
                  Cancellation Policy
                </Link>
                .
              </span>
            </label>
            {errors.declaration && (
              <p className={`mt-2 ${errorClass}`}>{errors.declaration.message}</p>
            )}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-4">
          {step > 0 && (
            <button type="button" onClick={prevStep} className={secondaryButtonClass}>
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
          )}
          {step < lastStepIndex ? (
            <button type="button" onClick={nextStep} className={primaryInlineButtonClass}>
              Next <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button type="submit" disabled={submitting} className={submitButtonClass}>
              <span className="inline-flex items-center justify-center gap-2">
                <Send className="h-4 w-4" />
                {submitting
                  ? "Processing..."
                  : `Pay ₹${feeBreakdown.totalInr.toLocaleString("en-IN")} & Submit`}
              </span>
            </button>
          )}
        </div>
      </form>
    </FormPanel>
  );
}
