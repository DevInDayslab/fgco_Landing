import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, CheckCircle2, CreditCard, RefreshCw, Star, XCircle } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { toast } from "sonner";
import {
  benefitsPanelClass,
  errorClass,
  fieldClass,
  labelClass,
  selectedTierFieldClass,
  submitButtonClass,
  textareaClass,
} from "@/components/awards/form-styles";
import { FormPanel, FormSectionHeader, FormSuccessState } from "@/components/awards/FormPrimitives";
import { PageHero } from "@/components/awards/PageHero";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { siteButtonClass } from "@/lib/site-buttons";
import { HeroAccent } from "@/components/site/PageLayout";
import { SectionHeader } from "@/components/awards/SectionHeader";
import { SponsorshipTierCard } from "@/components/awards/SponsorshipTierCard";
import { mediaReachHighlights, paymentDetails, sponsorshipTiers, type SponsorshipTierId } from "@/data/awards";
import {
  openSponsorshipRazorpayCheckout,
  type SponsorshipCheckoutInput,
} from "@/lib/razorpay-checkout";
import {
  emailField,
  nameField,
  phoneField,
  requiredTextField,
  validateField,
} from "@/lib/form-validation";
import { isApiConfigured, postSponsorshipRegister } from "@/lib/api-client";
import { Toaster } from "@/components/ui/sonner";
import { JsonLd } from "@/components/seo/JsonLd";
import { awardsEventSchema } from "@/data/seo-structured-data";
import { SEO_PAGES } from "@/data/seo-pages";
import { buildPageHead } from "@/lib/seo";

export const Route = createFileRoute("/sponsorship")({
  head: () => buildPageHead(SEO_PAGES.sponsorship),
  component: Sponsorship,
});

const sponsorshipBenefits = [
  "Sponsorship Coverage on all branding",
  "Electronic Media Coverage",
  "1 Year unlimited free usage of InViGIL App",
  "1 Year complete Promotion & Advertising",
  "Assured business leads",
  "Free Unlimited Video Conferences",
];

const invigilPerks = [
  "One-Year InViGIL Premium Subscription",
  "Omni-channel Ads Manager access",
  "InViGIL Social Security Support",
  "Credibility Rating Improvement Support",
];

function Sponsorship() {
  const [selectedTier, setSelectedTier] = useState<SponsorshipTierId | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [confirmationEmail, setConfirmationEmail] = useState<string | null>(null);
  const [registrationReady, setRegistrationReady] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [registration, setRegistration] = useState<SponsorshipCheckoutInput | null>(null);
  const [reservationId, setReservationId] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "failed" | "cancelled">("idle");
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const autoCheckoutAttempted = useRef(false);

  const tier = sponsorshipTiers.find((t) => t.id === selectedTier);
  const advanceInr =
    tier
      ? Math.round(
          tier.amountInr * (Number.parseFloat(paymentDetails.advancePercent) / 100),
        )
      : null;
  const gstInr = advanceInr != null ? Math.round(advanceInr * 0.18) : null;
  const totalInr = advanceInr != null && gstInr != null ? advanceInr + gstInr : null;

  async function startCheckout(input: SponsorshipCheckoutInput, sponsorshipReservationId: string) {
    setCheckoutLoading(true);
    setPaymentStatus("idle");
    setPaymentError(null);

    try {
      await openSponsorshipRazorpayCheckout(
        input,
        sponsorshipReservationId,
        () => {
          setPaymentStatus("idle");
          setPaymentError(null);
          setConfirmationEmail(input.contactEmail);
          setSubmitted(true);
          toast.success("Payment received — your sponsorship slot is reserved.");
        },
        () => {
          setPaymentStatus("cancelled");
          setPaymentError("The payment window was closed before completion.");
        },
      );
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Payment could not be completed.";

      if (message.includes("cancelled")) {
        setPaymentStatus("cancelled");
        setPaymentError("The payment window was closed before completion.");
      } else {
        setPaymentStatus("failed");
        setPaymentError(message);
        toast.error(message);
      }
    } finally {
      setCheckoutLoading(false);
      setSubmitting(false);
    }
  }

  async function onInquirySubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!selectedTier) {
      toast.error("Please select a sponsorship tier first.");
      return;
    }

    const form = e.currentTarget;
    const company = (form.elements.namedItem("company") as HTMLInputElement).value.trim();
    const contactName = (form.elements.namedItem("contactName") as HTMLInputElement).value.trim();
    const contactPhone = (form.elements.namedItem("contactPhone") as HTMLInputElement).value.trim();
    const contactEmail = (form.elements.namedItem("contactEmail") as HTMLInputElement).value.trim();

    const nextErrors: Record<string, string> = {};
    const companyError = validateField(requiredTextField("Company name"), company);
    const nameError = validateField(nameField, contactName);
    const phoneError = validateField(phoneField, contactPhone);
    const emailError = validateField(emailField, contactEmail);

    if (companyError) nextErrors.company = companyError;
    if (nameError) nextErrors.contactName = nameError;
    if (phoneError) nextErrors.contactPhone = phoneError;
    if (emailError) nextErrors.contactEmail = emailError;

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    const checkoutInput: SponsorshipCheckoutInput = {
      tierId: selectedTier,
      company,
      contactName,
      contactEmail,
      contactPhone,
    };

    try {
      if (!isApiConfigured()) {
        throw new Error("API is not configured. Set VITE_API_BASE_URL.");
      }

      if (!tier) {
        throw new Error("Selected tier not found.");
      }

      const registrationResult = await postSponsorshipRegister({
        tierId: selectedTier,
        tierName: tier.name,
        company,
        contactName,
        contactEmail,
        contactPhone,
      });

      setReservationId(registrationResult.id);
      setReferenceId(registrationResult.referenceId);
      setRegistration(checkoutInput);
      setRegistrationReady(true);
      toast.success("Registration saved — opening secure payment.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Registration failed.");
    } finally {
      setSubmitting(false);
    }
  }

  // Auto-open Razorpay once registration is saved (popup over the payment step panel).
  useEffect(() => {
    if (
      !registrationReady ||
      !registration ||
      !reservationId ||
      submitted ||
      autoCheckoutAttempted.current
    ) {
      return;
    }

    autoCheckoutAttempted.current = true;
    void startCheckout(registration, reservationId);
  }, [registrationReady, registration, reservationId, submitted]);

  async function handlePaymentCardClick() {
    if (!registration || !reservationId) return;
    await startCheckout(registration, reservationId);
  }

  if (submitted) {
    return (
      <>
        <Toaster />
        <FormSuccessState
          title="Sponsorship Payment Successful"
          message="Thank you — your advance payment has been received and your sponsorship slot is confirmed. A sponsorship confirmation email with your committed package value and amount paid has been sent to you. Our corporate relations team will contact you shortly."
          confirmationEmails={confirmationEmail ?? registration?.contactEmail}
        />
      </>
    );
  }

  return (
    <>
      <JsonLd data={awardsEventSchema()} />
      <Toaster />
      <PageHero
        variant="sponsorship"
        align="center"
        overline="Sponsorship Proposal"
        title={
          <>
            Align with <HeroAccent>Global Excellence</HeroAccent>
          </>
        }
        subtitle="Partner with the HIT ViERA National Awards 2026 and the official global launch of InViGIL — India's most prestigious national recognition platform."
      >
        <div className="mb-2 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          <BrandLogo id="hitNews" size="sm" />
          <BrandLogo id="viera" size="sm" />
          <BrandLogo id="invigil" size="sm" />
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <SectionHeader
          overline="Media Reach"
          title={
            <>
              Owning the <span className="italic text-gold">Narrative</span>
            </>
          }
          description="Your brand will dominate the national conversation through FG Media Group's colossal distribution network — 20 lakh+ households across print, podcast, cinematic teasers, and omni-channel digital."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {mediaReachHighlights.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-gray-800 bg-[#111a33] p-6 transition-colors hover:border-amber-500/25 md:p-7"
            >
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface/40 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            overline="Sponsorship Tiers"
            title={
              <>
                Choose Your <span className="italic text-gold">Partnership Level</span>
              </>
            }
            description="Select a tier below. Spots are limited and awarded first-come, first-served."
            className="mx-auto text-center"
          />
          <div className="mt-12 grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {sponsorshipTiers.map((tierItem) => (
              <SponsorshipTierCard
                key={tierItem.id}
                tier={tierItem}
                selected={selectedTier === tierItem.id}
                onSelect={setSelectedTier}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-28 pt-12 sm:px-6">
        <Link
          to="/awards"
          className="mb-8 flex items-center text-sm font-medium text-amber-500 hover:underline"
        >
          ← Back to Awards
        </Link>

        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Corporate Sponsorship</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-400 md:text-lg">
            Partner with the World&apos;s Real Super App &quot;InViGIL&quot; Launch and the
            prestigious HIT Awards. Unlock unparalleled visibility, media dominance, and exclusive
            InViGIL ecosystem benefits.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <aside className="space-y-6 lg:col-span-4">
            <div className="rounded-xl border border-gray-800 bg-[#111a33] p-6">
              <h3 className="border-b border-gray-800 pb-3 text-lg font-bold text-foreground">
                Your Selection
              </h3>
              {tier ? (
                <div className="mt-5">
                  <p className="text-xs font-semibold tracking-widest text-amber-500 uppercase">
                    {tier.role}
                  </p>
                  <p className="mt-2 text-xl font-bold text-foreground">{tier.name}</p>
                  <p className="mt-3 text-3xl font-black text-amber-400">{tier.investment}</p>
                  <p className="mt-2 text-xs text-gray-500">
                    {tier.spots} {tier.spots === 1 ? "Exclusive Spot" : "Spots Available"}
                  </p>
                  <ul className="mt-6 space-y-2.5 border-t border-gray-800 pt-5">
                    {tier.benefits.slice(0, 4).map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2 text-xs leading-relaxed text-gray-400"
                      >
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="mt-5 text-sm text-gray-500">
                  Select a sponsorship tier above to view benefits and complete registration.
                </p>
              )}
            </div>

            <div className={benefitsPanelClass}>
              <h4 className="mb-3 flex items-center font-bold text-blue-400">
                <Star size={16} className="mr-2" /> Sponsorship Benefits
              </h4>
              <ul className="space-y-2 text-xs text-gray-300">
                {sponsorshipBenefits.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-6">
              <h4 className="flex items-center font-bold text-amber-400">
                <Building2 size={16} className="mr-2" /> Exclusive InViGIL Perks
              </h4>
              <ul className="mt-3 space-y-2 text-xs text-gray-300">
                {invigilPerks.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="space-y-8 lg:col-span-8">
            <FormPanel className="!p-6 md:!p-10">
              {registrationReady && registration && tier && advanceInr && totalInr ? (
                <div className="space-y-6">
                  <FormSectionHeader
                    title="Complete Payment"
                    subtitle="Your registration is saved. Pay the advance below to secure your sponsorship slot."
                  />

                  <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                      <div>
                        <p className="font-semibold text-foreground">Registration submitted</p>
                        <p className="mt-1 text-sm text-gray-400">
                          {registration.company} · {registration.contactName}
                          {referenceId ? ` · Ref ${referenceId}` : ""}
                        </p>
                      </div>
                    </div>
                  </div>

                  {paymentStatus === "failed" && (
                    <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4">
                      <div className="flex items-start gap-3">
                        <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-foreground">Payment failed</p>
                          <p className="mt-1 text-sm text-gray-400">
                            {paymentError ??
                              "Your card or payment method was declined. Please try again."}
                          </p>
                          <button
                            type="button"
                            onClick={handlePaymentCardClick}
                            disabled={checkoutLoading}
                            className={`mt-4 ${siteButtonClass("gold", "md")} disabled:cursor-not-allowed disabled:opacity-60`}
                          >
                            <RefreshCw className="h-4 w-4" />
                            {checkoutLoading ? "Opening Razorpay..." : "Retry payment"}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentStatus === "cancelled" && (
                    <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
                      <div className="flex items-start gap-3">
                        <CreditCard className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-foreground">Payment not completed</p>
                          <p className="mt-1 text-sm text-gray-400">
                            {paymentError ??
                              "The Razorpay window was closed. Your registration is saved — complete payment to secure your slot."}
                          </p>
                          <button
                            type="button"
                            onClick={handlePaymentCardClick}
                            disabled={checkoutLoading}
                            className={`mt-4 ${siteButtonClass("gold", "md")} disabled:cursor-not-allowed disabled:opacity-60`}
                          >
                            <RefreshCw className="h-4 w-4" />
                            {checkoutLoading ? "Opening Razorpay..." : "Continue to payment"}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-[#0f172a] to-[#111a33] p-6 md:p-8">
                    <p className="text-xs font-semibold tracking-widest text-amber-500 uppercase">
                      {tier.role}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-foreground">{tier.name}</h3>
                    <p className="mt-4 text-4xl font-black text-amber-400">
                      ₹ {totalInr.toLocaleString("en-IN")}
                      <span className="ml-2 text-sm font-normal text-gray-500">(incl. GST)</span>
                    </p>
                    <p className="mt-2 text-sm text-gray-400">
                      {paymentDetails.advancePercent} advance ₹ {advanceInr.toLocaleString("en-IN")}{" "}
                      + {paymentDetails.gstRate} GST ₹ {gstInr?.toLocaleString("en-IN")}
                    </p>
                    <p className="mt-3 text-sm text-gray-400">
                      {paymentStatus === "idle"
                        ? "Razorpay checkout opens automatically. If the window closed, tap below to pay again."
                        : "Use the button above or below to open Razorpay and complete your payment."}
                    </p>

                    {import.meta.env.DEV && (
                      <p className="mt-2 text-xs text-amber-500/80">
                        Test mode: high-tier advances may charge a small test amount (₹100) via
                        Razorpay test keys. Live keys charge the full advance.
                      </p>
                    )}

                    <button
                      type="button"
                      onClick={handlePaymentCardClick}
                      disabled={checkoutLoading}
                      className={`mt-6 w-full sm:w-auto ${siteButtonClass("gold", "md")} disabled:cursor-not-allowed disabled:opacity-60`}
                    >
                      <CreditCard className="h-5 w-5" />
                      {checkoutLoading
                        ? "Opening Razorpay..."
                        : paymentStatus === "failed"
                          ? "Retry payment"
                          : paymentStatus === "cancelled"
                            ? "Continue to payment"
                            : "Pay via Razorpay"}
                    </button>
                  </div>

                  <p className="text-xs text-gray-500">
                    GST {paymentDetails.gstRate} ({paymentDetails.gst}) · Balance due within{" "}
                    {paymentDetails.balanceDueDays} days of the event.
                  </p>
                </div>
              ) : (
                <>
                  <FormSectionHeader title="Registration Form" />

                  <form onSubmit={onInquirySubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label className={labelClass} htmlFor="company">
                          Company Name *
                        </label>
                        <input
                          id="company"
                          name="company"
                          required
                          placeholder="FG Media Group Pvt Ltd"
                          className={fieldClass}
                        />
                        {errors.company && <p className={errorClass}>{errors.company}</p>}
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="contactName">
                          Contact Person *
                        </label>
                        <input
                          id="contactName"
                          name="contactName"
                          required
                          placeholder="Full name"
                          className={fieldClass}
                        />
                        {errors.contactName && <p className={errorClass}>{errors.contactName}</p>}
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="contactEmail">
                          Official Email *
                        </label>
                        <input
                          id="contactEmail"
                          name="contactEmail"
                          type="email"
                          autoComplete="email"
                          placeholder="name@company.com"
                          required
                          className={fieldClass}
                        />
                        {errors.contactEmail && <p className={errorClass}>{errors.contactEmail}</p>}
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="contactPhone">
                          Phone Number *
                        </label>
                        <input
                          id="contactPhone"
                          name="contactPhone"
                          type="tel"
                          inputMode="numeric"
                          autoComplete="tel"
                          placeholder="+91 00000 00000"
                          maxLength={15}
                          required
                          className={fieldClass}
                        />
                        {errors.contactPhone && <p className={errorClass}>{errors.contactPhone}</p>}
                      </div>
                      <div className="md:col-span-2">
                        <label className={labelClass} htmlFor="website">
                          Company Website
                        </label>
                        <input
                          id="website"
                          name="website"
                          type="url"
                          placeholder="https://www.example.com"
                          className={fieldClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="selectedTier">
                        Selected Sponsorship Tier *
                      </label>
                      <input
                        id="selectedTier"
                        readOnly
                        type="text"
                        value={tier?.name ?? "Please select a tier from the grid above..."}
                        className={selectedTierFieldClass(Boolean(tier))}
                      />
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="message">
                        Corporate Profile / Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className={textareaClass}
                        placeholder="Briefly describe your organisation, industry leadership, and sponsorship objectives..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={!selectedTier || submitting}
                      className={submitButtonClass}
                    >
                      {submitting ? "Submitting..." : "Submit Registration"}
                    </button>
                    <p className="text-xs leading-relaxed text-gray-400">
                      By submitting, you agree to our{" "}
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
                    </p>
                  </form>
                </>
              )}
            </FormPanel>
          </div>
        </div>
      </section>
    </>
  );
}
