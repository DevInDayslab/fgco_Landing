import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, CheckCircle2, CreditCard, Star } from "lucide-react";
import { useState, type FormEvent } from "react";
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
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/sponsorship")({
  head: () => ({
    meta: [
      { title: "Sponsorship Proposal — HIT ViERA Awards 2026" },
      {
        name: "description",
        content:
          "Exclusive sponsorship invitation for HIT ViERA National Awards 2026 & InViGIL Global Launch Event.",
      },
      { property: "og:title", content: "HIT ViERA Awards 2026 Sponsorship" },
      {
        property: "og:description",
        content: "An exclusive invitation to align with global excellence.",
      },
    ],
  }),
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
  const [registrationReady, setRegistrationReady] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [registration, setRegistration] = useState<SponsorshipCheckoutInput | null>(null);

  const tier = sponsorshipTiers.find((t) => t.id === selectedTier);
  const advanceInr =
    tier
      ? Math.round(
          tier.amountInr * (Number.parseFloat(paymentDetails.advancePercent) / 100),
        )
      : null;

  async function startCheckout(input: SponsorshipCheckoutInput) {
    setCheckoutLoading(true);
    try {
      await openSponsorshipRazorpayCheckout(
        input,
        () => {
          setSubmitted(true);
          toast.success("Payment received — your sponsorship slot is reserved.");
        },
        () => toast.message("Payment window closed."),
      );
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Payment could not be completed.";
      if (!message.includes("cancelled")) {
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
    setRegistration(checkoutInput);
    setRegistrationReady(true);
    setSubmitting(false);
    toast.success("Registration submitted. Complete payment below to secure your sponsorship.");
  }

  async function handlePaymentCardClick() {
    if (!registration) return;
    await startCheckout(registration);
  }

  if (submitted) {
    return (
      <>
        <Toaster />
        <FormSuccessState
          title="Sponsorship Payment Successful"
          message="Thank you — your advance payment has been received and your sponsorship application is confirmed. Our corporate relations team will contact you shortly."
        />
      </>
    );
  }

  return (
    <>
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
      />

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
              </form>
            </FormPanel>

            {registrationReady && registration && tier && advanceInr && (
              <button
                type="button"
                onClick={handlePaymentCardClick}
                disabled={checkoutLoading}
                className="group w-full rounded-3xl border border-amber-500/30 bg-gradient-to-br from-[#0f172a] to-[#111a33] p-6 text-left shadow-[0_0_30px_rgba(217,119,6,0.12)] transition-all hover:border-amber-500/50 hover:shadow-[0_0_40px_rgba(217,119,6,0.2)] disabled:cursor-not-allowed disabled:opacity-60 md:p-10"
              >
                <p className="section-label">Next Step</p>
                <div className="mt-3 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                      Secure Your Sponsorship
                    </h3>
                    <p className="mt-2 text-sm text-gray-400">
                      Tap to open Razorpay checkout and pay the{" "}
                      {paymentDetails.advancePercent} advance for{" "}
                      <strong className="text-foreground">{tier.name}</strong>.
                    </p>
                    <p className="mt-4 text-3xl font-black text-amber-400">
                      ₹ {advanceInr.toLocaleString("en-IN")}
                      <span className="ml-2 text-sm font-normal text-gray-500">
                        ({paymentDetails.advancePercent} advance)
                      </span>
                    </p>
                  </div>
                  <div
                    className={`flex shrink-0 items-center justify-center gap-3 ${siteButtonClass("gold", "md")}`}
                  >
                    <CreditCard className="h-5 w-5" />
                    {checkoutLoading ? "Opening Razorpay..." : "Pay via Razorpay"}
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
