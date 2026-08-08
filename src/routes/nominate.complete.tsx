import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { FileDropzone } from "@/components/awards/FileDropzone";
import {
  checkboxBoxClass,
  errorClass,
  fieldClass,
  labelClass,
  primaryInlineButtonClass,
  radioCardClass,
  selectClass,
  submitButtonClass,
  textareaClass,
} from "@/components/awards/form-styles";
import { FormPanel, FormSectionHeader, FormSuccessState } from "@/components/awards/FormPrimitives";
import { HeroBackdrop } from "@/components/site/PageLayout";
import { Toaster } from "@/components/ui/sonner";
import {
  getNominationFeeBreakdown,
  nominationCategories,
  nomineeTypes,
  publicationOptions,
} from "@/data/awards";
import { siteHeroImages } from "@/data/site-heroes";
import {
  getApiBaseUrl,
  lookupNominationByEmail,
  postNominationComplete,
  uploadNominationFile,
  validateNominationToken,
} from "@/lib/api-client";
import { prepareNominationUpload } from "@/lib/file-compress";
import { openNominationRazorpayCheckout } from "@/lib/razorpay-checkout";
import { formatMaxUploadSize, UPLOAD_MAX_BYTES, VIDEO_MAX_DURATION_SEC } from "@/lib/upload-limits";

export const Route = createFileRoute("/nominate/complete")({
  validateSearch: (search: Record<string, unknown>) => ({
    token: typeof search["token"] === "string" ? search["token"] : "",
  }),
  head: () => ({
    meta: [
      { title: "Complete Your Nomination — HIT ViERA Awards 2026" },
      {
        name: "description",
        content:
          "Accept your HIT ViERA National Awards nomination, upload documents, and complete payment.",
      },
    ],
  }),
  component: NominateCompletePage,
});

type PrefillInfo = {
  nominatorName: string;
  nominatorEmail: string;
  nominatorOrg: string;
  relationship: string;
};

function NominateCompletePage() {
  const { token } = Route.useSearch();
  const [loading, setLoading] = useState(Boolean(token));
  const [error, setError] = useState<string | null>(null);
  const [prefillMeta, setPrefillMeta] = useState<PrefillInfo | null>(null);
  const [ready, setReady] = useState(false);
  const [lookupEmail, setLookupEmail] = useState("");
  const [lookingUp, setLookingUp] = useState(false);
  const [lookupSent, setLookupSent] = useState(false);

  const [nomineeName, setNomineeName] = useState("");
  const [nomineeType, setNomineeType] = useState("");
  const [nomineeDesignation, setNomineeDesignation] = useState("");
  const [nomineeEmail, setNomineeEmail] = useState("");
  const [nomineePhone, setNomineePhone] = useState("");
  const [nomineeLocation, setNomineeLocation] = useState("");
  const [nomineeSocial, setNomineeSocial] = useState("");
  const [category, setCategory] = useState("");
  const [publications, setPublications] = useState<string[]>([]);

  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [supportingDocs, setSupportingDocs] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [altVideoLink, setAltVideoLink] = useState("");
  const [executiveSummary, setExecutiveSummary] = useState("");
  const [achievement, setAchievement] = useState("");
  const [impact, setImpact] = useState("");
  const [futureGoals, setFutureGoals] = useState("");
  const [declaration, setDeclaration] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  const feeBreakdown = getNominationFeeBreakdown();
  const summaryWords = executiveSummary.trim().split(/\s+/).filter(Boolean).length;

  useEffect(() => {
    let cancelled = false;

    async function validate() {
      if (!token) {
        setLoading(false);
        setError(null);
        setPrefillMeta(null);
        setReady(false);
        return;
      }
      if (!getApiBaseUrl()) {
        setError("Nomination API is not configured. Set VITE_API_BASE_URL.");
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const result = await validateNominationToken(token);
        if (cancelled) return;
        setPrefillMeta({
          nominatorName: result.nominatorName,
          nominatorEmail: result.nominatorEmail,
          nominatorOrg: result.nominatorOrg,
          relationship: result.relationship,
        });
        setNomineeName(result.nomineeName || "");
        setNomineeType(result.nomineeType || "");
        setNomineeDesignation(result.nomineeDesignation || "");
        setNomineeEmail(result.nomineeEmail || "");
        setNomineePhone(result.nomineePhone || "");
        setNomineeLocation(result.nomineeLocation || "");
        setNomineeSocial(result.nomineeSocial || "");
        setCategory(result.category || "");
        setPublications(result.publications ?? []);
        setReady(true);
        setError(null);
      } catch (err) {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : "Invalid or expired completion link.");
        setPrefillMeta(null);
        setReady(false);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void validate();
    return () => {
      cancelled = true;
    };
  }, [token]);

  async function handleEmailLookup() {
    if (!lookupEmail.trim()) {
      toast.error("Enter the email address used for your nomination.");
      return;
    }
    if (!getApiBaseUrl()) {
      toast.error("Nomination API is not configured. Set VITE_API_BASE_URL.");
      return;
    }

    setLookingUp(true);
    try {
      const result = await lookupNominationByEmail(lookupEmail.trim());
      setLookupSent(true);
      toast.success(
        result.message ??
          `A secure completion link has been sent to continue ${result.nomineeName}'s nomination.`,
      );
    } catch (err) {
      setLookupSent(false);
      toast.error(err instanceof Error ? err.message : "Unable to find your nomination.");
    } finally {
      setLookingUp(false);
    }
  }

  function togglePublication(pub: string) {
    setPublications((current) =>
      current.includes(pub) ? current.filter((item) => item !== pub) : [...current, pub],
    );
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

  async function handleSubmit() {
    if (!ready || !token) return;

    const name = nomineeName.trim();
    const email = nomineeEmail.trim();
    const phone = nomineePhone.trim();
    const location = nomineeLocation.trim();
    const summary = executiveSummary.trim();
    const achievementText = achievement.trim();

    if (!name) {
      toast.error("Full name is required.");
      return;
    }
    if (!nomineeType) {
      toast.error("Please select a nomination type.");
      return;
    }
    if (!email || !email.includes("@")) {
      toast.error("A valid email address is required.");
      return;
    }
    if (!phone || phone.replace(/\D/g, "").length < 10) {
      toast.error("A valid mobile number is required for payment.");
      return;
    }
    if (!location) {
      toast.error("City / location is required.");
      return;
    }
    if (!category) {
      toast.error("Please select an award category.");
      return;
    }
    if (publications.length === 0) {
      toast.error("Select at least one preferred publication.");
      return;
    }
    if (!summary) {
      toast.error("Executive summary is required.");
      return;
    }
    if (summaryWords > 100) {
      toast.error("Executive summary must be 100 words or fewer.");
      return;
    }
    if (!achievementText) {
      toast.error("Achievement description is required.");
      return;
    }
    if (!profilePhoto) {
      toast.error("Profile photo or company logo is required.");
      return;
    }
    if (!declaration) {
      toast.error("You must accept the declaration.");
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

      await openNominationRazorpayCheckout(
        {
          nominatorName: name,
          nominatorEmail: email,
          nominatorPhone: phone,
          nomineeName: name,
          category,
        },
        async (paymentId) => {
          const result = await postNominationComplete({
            token,
            paymentId,
            profilePhotoKey: profileUpload.key,
            ...(supportingUpload ? { supportingDocsKey: supportingUpload.key } : {}),
            ...(videoUpload ? { videoKey: videoUpload.key } : {}),
            ...(altVideoLink.trim() ? { altVideoLink: altVideoLink.trim() } : {}),
            formData: {
              nomineeName: name,
              nomineeType,
              nomineeDesignation: nomineeDesignation.trim() || undefined,
              nomineeEmail: email,
              nomineePhone: phone,
              nomineeLocation: location,
              nomineeSocial: nomineeSocial.trim() || undefined,
              category,
              publications,
              executiveSummary: summary,
              achievement: achievementText,
              impact: impact.trim() || undefined,
              futureGoals: futureGoals.trim() || undefined,
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
          });

          setReferenceId(result.referenceId);
          setSubmitted(true);
          toast.success(`Nomination completed (ref ${result.referenceId}).`);
        },
        () => {
          toast.message("Payment was cancelled. Complete payment to finish your nomination.");
        },
      );
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to complete nomination.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Toaster />
      <section className="relative overflow-hidden border-b border-border">
        <HeroBackdrop image={siteHeroImages.city} showBlur={false} />
        <div className="relative mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
          <Link
            to="/nominate"
            className="mb-10 inline-flex items-center text-sm font-medium text-gold transition-opacity hover:opacity-80"
          >
            ← Back to nomination portal
          </Link>

          {loading ? (
            <FormPanel>
              <p className="text-sm text-gray-400">Validating your completion link…</p>
            </FormPanel>
          ) : !token ? (
            <FormPanel className="!p-6 md:!p-8">
              <h2 className="text-2xl font-bold text-foreground">Continue your nomination</h2>
              <p className="mt-3 text-sm text-gray-400">
                If you were nominated but do not have the email link, enter the nominee email address
                below. We will send a secure completion link to that inbox.
              </p>
              {lookupSent ? (
                <p className="mt-4 rounded-lg border border-gold/30 bg-gold/10 px-4 py-3 text-sm text-gold">
                  Check your email for the completion link, then open it to finish your nomination.
                </p>
              ) : null}
              <div className="mt-6 space-y-4">
                <div>
                  <label className={labelClass} htmlFor="lookupEmail">
                    Nominee email *
                  </label>
                  <input
                    id="lookupEmail"
                    type="email"
                    value={lookupEmail}
                    onChange={(e) => setLookupEmail(e.target.value)}
                    placeholder="name@example.com"
                    className={fieldClass}
                  />
                </div>
                <button
                  type="button"
                  disabled={lookingUp}
                  onClick={() => void handleEmailLookup()}
                  className={submitButtonClass}
                >
                  {lookingUp ? "Sending link…" : "Email me the completion link"}
                </button>
              </div>
            </FormPanel>
          ) : error ? (
            <FormPanel>
              <h2 className="text-2xl font-bold text-foreground">Link unavailable</h2>
              <p className={`mt-3 ${errorClass}`}>{error}</p>
              <p className="mt-4 text-sm text-gray-400">
                Enter your nominee email and we will send a fresh secure completion link.
              </p>
              {lookupSent ? (
                <p className="mt-4 rounded-lg border border-gold/30 bg-gold/10 px-4 py-3 text-sm text-gold">
                  Check your email for the completion link.
                </p>
              ) : null}
              <div className="mt-6 space-y-4">
                <input
                  type="email"
                  value={lookupEmail}
                  onChange={(e) => setLookupEmail(e.target.value)}
                  placeholder="Nominee email address"
                  className={fieldClass}
                />
                <button
                  type="button"
                  disabled={lookingUp}
                  onClick={() => void handleEmailLookup()}
                  className={primaryInlineButtonClass}
                >
                  {lookingUp ? "Sending link…" : "Email me a fresh link"}
                </button>
              </div>
            </FormPanel>
          ) : submitted ? (
            <FormSuccessState
              title="Nomination Completed"
              {...(referenceId ? { referenceId } : {})}
              message="Thank you for accepting your nomination. Your payment receipt and application acknowledgement have been emailed to you. Your nominator has also been notified."
              emailNotices={[
                {
                  label: "Payment receipt & application acknowledgement",
                  email: nomineeEmail,
                },
              ]}
            />
          ) : ready ? (
            <FormPanel className="!p-6 md:!p-8">
              <div className="mb-8 text-center">
                <h2 className="fg-hero-title text-2xl md:text-3xl">Complete Your Nomination</h2>
                <p className="mt-3 text-sm text-gray-300 md:text-base">
                  Welcome, <span className="font-semibold text-gold">{nomineeName || "Nominee"}</span>.
                  Review the details submitted by your nominator, correct anything if needed, then
                  complete your profile.
                </p>
                {prefillMeta?.nominatorName ? (
                  <p className="mt-2 text-sm text-gray-400">
                    Nominated by{" "}
                    <span className="font-semibold text-foreground">{prefillMeta.nominatorName}</span>
                    {prefillMeta.relationship ? ` (${prefillMeta.relationship})` : null}
                    {prefillMeta.nominatorOrg ? ` · ${prefillMeta.nominatorOrg}` : null}
                  </p>
                ) : null}
              </div>

              <div className="space-y-10">
                <div>
                  <FormSectionHeader step={1} title="Confirm Your Details" />
                  <p className="mb-6 text-sm text-gray-400">
                    These fields were filled by your nominator. Edit any incorrect information before
                    continuing.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <label className={labelClass}>Nomination type *</label>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {nomineeTypes.map((type) => (
                          <label key={type} className={radioCardClass(nomineeType === type)}>
                            <input
                              type="radio"
                              name="nomineeType"
                              value={type}
                              checked={nomineeType === type}
                              onChange={() => setNomineeType(type)}
                              className="mt-1 accent-amber-500"
                            />
                            <span className="text-sm text-foreground">{type}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="nomineeName">
                        Full name / organisation name *
                      </label>
                      <input
                        id="nomineeName"
                        value={nomineeName}
                        onChange={(e) => setNomineeName(e.target.value)}
                        className={fieldClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="nomineeDesignation">
                        Designation / role
                      </label>
                      <input
                        id="nomineeDesignation"
                        value={nomineeDesignation}
                        onChange={(e) => setNomineeDesignation(e.target.value)}
                        className={fieldClass}
                      />
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label className={labelClass} htmlFor="nomineeEmail">
                          Email *
                        </label>
                        <input
                          id="nomineeEmail"
                          type="email"
                          value={nomineeEmail}
                          onChange={(e) => setNomineeEmail(e.target.value)}
                          className={fieldClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="nomineePhone">
                          Mobile number *
                        </label>
                        <input
                          id="nomineePhone"
                          type="tel"
                          value={nomineePhone}
                          onChange={(e) => setNomineePhone(e.target.value)}
                          placeholder="10-digit mobile number"
                          className={fieldClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="nomineeLocation">
                        City / location *
                      </label>
                      <input
                        id="nomineeLocation"
                        value={nomineeLocation}
                        onChange={(e) => setNomineeLocation(e.target.value)}
                        className={fieldClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="nomineeSocial">
                        Website / LinkedIn / social profile
                      </label>
                      <input
                        id="nomineeSocial"
                        type="url"
                        value={nomineeSocial}
                        onChange={(e) => setNomineeSocial(e.target.value)}
                        placeholder="https://"
                        className={fieldClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="category">
                        Award category *
                      </label>
                      <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className={selectClass}
                      >
                        <option value="">Select category</option>
                        {nominationCategories.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className={labelClass}>Preferred publications *</label>
                      <div className="grid gap-3 sm:grid-cols-1">
                        {publicationOptions.map((pub) => (
                          <label key={pub} className={radioCardClass(publications.includes(pub))}>
                            <input
                              type="checkbox"
                              checked={publications.includes(pub)}
                              onChange={() => togglePublication(pub)}
                              className="mt-1 accent-amber-500"
                            />
                            <span className="text-sm text-foreground">{pub}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <FormSectionHeader step={2} title="Your Profile & Achievements" />
                  <div className="space-y-6">
                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <label className={labelClass} htmlFor="executiveSummary">
                          Executive Summary (Max 100 words) *
                        </label>
                        <span
                          className={`text-xs ${summaryWords > 100 ? "text-red-400" : "text-gray-500"}`}
                        >
                          {summaryWords}/100 words
                        </span>
                      </div>
                      <textarea
                        id="executiveSummary"
                        value={executiveSummary}
                        onChange={(e) => setExecutiveSummary(e.target.value)}
                        rows={4}
                        placeholder="Briefly summarize why you should be considered..."
                        className={textareaClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="achievement">
                        Detailed Description of Achievement *
                      </label>
                      <textarea
                        id="achievement"
                        value={achievement}
                        onChange={(e) => setAchievement(e.target.value)}
                        rows={5}
                        className={textareaClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="impact">
                        Measurable Impact and Outcomes
                      </label>
                      <textarea
                        id="impact"
                        value={impact}
                        onChange={(e) => setImpact(e.target.value)}
                        rows={4}
                        className={textareaClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="futureGoals">
                        Future Goals & Vision
                      </label>
                      <textarea
                        id="futureGoals"
                        value={futureGoals}
                        onChange={(e) => setFutureGoals(e.target.value)}
                        rows={4}
                        className={textareaClass}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <FormSectionHeader step={3} title="Upload Documents" />
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
                      hint={`MP4, MOV, WebM · max ${formatMaxUploadSize(UPLOAD_MAX_BYTES.video)}`}
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
                        value={altVideoLink}
                        onChange={(e) => setAltVideoLink(e.target.value)}
                        placeholder="https://youtube.com/... or Google Drive link"
                        className={fieldClass}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <FormSectionHeader step={4} title="Declaration & Payment" />
                  <div className="space-y-6">
                    <div className="rounded-xl border border-gold/30 bg-gold/[0.06] p-4 md:p-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                        Nomination fee
                      </p>
                      <div className="mt-3 space-y-1 text-sm text-gray-200">
                        <p className="flex justify-between gap-4">
                          <span>Application fee</span>
                          <span>₹{feeBreakdown.baseInr.toLocaleString("en-IN")}</span>
                        </p>
                        <p className="flex justify-between gap-4">
                          <span>GST (18%)</span>
                          <span>₹{feeBreakdown.gstInr.toLocaleString("en-IN")}</span>
                        </p>
                        <p className="flex justify-between gap-4 border-t border-gold/20 pt-2 font-semibold text-white">
                          <span>Total payable</span>
                          <span>₹{feeBreakdown.totalInr.toLocaleString("en-IN")}</span>
                        </p>
                      </div>
                    </div>

                    <label className={checkboxBoxClass}>
                      <input
                        type="checkbox"
                        checked={declaration}
                        onChange={(e) => setDeclaration(e.target.checked)}
                        className="mt-1 h-5 w-5 shrink-0 accent-amber-500"
                      />
                      <span className="text-xs leading-relaxed text-gray-300 md:text-sm">
                        I confirm that the information provided is accurate and authentic. I grant FG
                        MEDIA GROUP the rights to utilize the submitted details and media for
                        publication and the HIT Awards consideration process.
                      </span>
                    </label>

                    <button
                      type="button"
                      disabled={submitting}
                      onClick={() => void handleSubmit()}
                      className={submitButtonClass}
                    >
                      {submitting
                        ? "Processing..."
                        : `Pay ₹${feeBreakdown.totalInr.toLocaleString("en-IN")} & Accept Nomination`}
                    </button>
                  </div>
                </div>
              </div>
            </FormPanel>
          ) : null}
        </div>
      </section>
    </>
  );
}
