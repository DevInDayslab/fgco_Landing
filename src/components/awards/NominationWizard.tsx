import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";
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
import { nominationCategories, nomineeTypes, nominatorRelationshipOptions, publicationOptions } from "@/data/awards";
import {
  emailField,
  nameField,
  optionalUrlField,
  phoneField,
  requiredTextField,
} from "@/lib/form-validation";

const wordCount = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;

const schema = z.object({
  nominatorName: nameField,
  nominatorOrg: z.string().optional(),
  nominatorEmail: emailField,
  nominatorPhone: phoneField,
  relationship: z.string().optional(),
  nomineeType: z.enum(nomineeTypes, { message: "Select a nomination type" }),
  nomineeName: requiredTextField("Nominee name"),
  nomineeDesignation: z.string().optional(),
  nomineePhone: phoneField,
  nomineeEmail: emailField,
  nomineeLocation: requiredTextField("Location"),
  nomineeSocial: z.string().optional(),
  category: z.enum(nominationCategories, { message: "Select a category" }),
  publications: z.array(z.string()).min(1, "Select at least one publication"),
  executiveSummary: z
    .string()
    .trim()
    .min(1, "Executive summary is required")
    .refine((v) => wordCount(v) <= 100, "Maximum 100 words"),
  achievement: requiredTextField("Achievement description"),
  impact: z.string().optional(),
  futureGoals: z.string().optional(),
  altVideoLink: optionalUrlField,
  declaration: z.literal(true, {
    errorMap: () => ({ message: "You must accept the declaration" }),
  }),
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
  0: ["nominatorName", "nominatorEmail", "nominatorPhone"],
  1: ["nomineeType", "nomineeName", "nomineePhone", "nomineeEmail", "nomineeLocation"],
  2: ["category", "publications"],
  3: ["executiveSummary", "achievement"],
  4: [],
  5: ["declaration"],
};

export function NominationWizard() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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
  const executiveSummary = watch("executiveSummary") ?? "";
  const summaryWords = wordCount(executiveSummary);

  async function nextStep() {
    if (step === 4 && !profilePhoto) {
      toast.error("Profile photo or company logo is required.");
      return;
    }
    const fields = stepFields[step];
    const valid = fields.length === 0 || (await trigger(fields));
    if (valid) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  function prevStep() {
    setStep((s) => Math.max(s - 1, 0));
  }

  function togglePublication(pub: string) {
    const current = publications;
    const next = current.includes(pub) ? current.filter((p) => p !== pub) : [...current, pub];
    setValue("publications", next, { shouldValidate: true });
  }

  async function onSubmit(data: FormData) {
    if (!profilePhoto) {
      toast.error("Profile photo or company logo is required.");
      setStep(4);
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
    void data;
    void supportingDocs;
    void videoFile;
    setTimeout(() => {
      void navigate({ to: "/awards" });
    }, 4000);
  }

  if (submitted) {
    return (
      <FormSuccessState
        title="Nomination Submitted Successfully"
        message="Thank you for your submission. The National Jury will review the profile. You will be contacted at the provided email."
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
        <FormSectionHeader step={step + 1} title={STEPS[step]} />

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
                Relationship to Nominee
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
                hint="JPG, PNG up to 5MB"
                value={profilePhoto}
                onChange={setProfilePhoto}
              />
              <FileDropzone
                label="Supporting Documents"
                variant="document"
                accept=".pdf,.doc,.docx,.ppt,.pptx,application/pdf"
                hint="PDF, DOCX up to 10MB"
                value={supportingDocs}
                onChange={setSupportingDocs}
              />
            </div>
            <FileDropzone
              label="Introduction or Showcase Video (Max 3 minutes)"
              accept="video/mp4,video/quicktime"
              hint="MP4, MOV supported"
              value={videoFile}
              onChange={setVideoFile}
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
          <div>
            <label className={checkboxBoxClass}>
              <input
                type="checkbox"
                {...register("declaration")}
                className="mt-1 h-5 w-5 shrink-0 accent-amber-500"
              />
              <span className="text-xs leading-relaxed text-gray-300 md:text-sm">
                I confirm that the information provided is accurate and authentic. I grant FG
                MEDIA GROUP the rights to utilize the submitted details and media for publication
                and the HIT Awards consideration process.
              </span>
            </label>
            {errors.declaration && (
              <p className={`mt-2 ${errorClass}`}>{errors.declaration.message}</p>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-4">
          {step > 0 && (
            <button type="button" onClick={prevStep} className={secondaryButtonClass}>
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
          )}
          {step < STEPS.length - 1 ? (
            <button type="button" onClick={nextStep} className={primaryInlineButtonClass}>
              Next <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button type="submit" disabled={submitting} className={submitButtonClass}>
              <span className="inline-flex items-center justify-center gap-2">
                <Send className="h-4 w-4" />
                {submitting ? "Submitting..." : "Submit Nomination Officially"}
              </span>
            </button>
          )}
        </div>
      </form>
    </FormPanel>
  );
}
