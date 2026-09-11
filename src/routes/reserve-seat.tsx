import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, CheckCircle2, MapPin, Ticket } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import {
  errorClass,
  fieldClass,
  labelClass,
  submitButtonClass,
} from "@/components/awards/form-styles";
import { FormPanel, FormSectionHeader, FormSuccessState } from "@/components/awards/FormPrimitives";
import { PageHero } from "@/components/awards/PageHero";
import { HeroAccent } from "@/components/site/PageLayout";
import { SEO_PAGES } from "@/data/seo-pages";
import { buildPageHead } from "@/lib/seo";
import { emailField, nameField, phoneField, validateField } from "@/lib/form-validation";
import { isApiConfigured, postSeatReservationRegister } from "@/lib/api-client";
import { openSeatReservationRazorpayCheckout } from "@/lib/razorpay-checkout";

export const Route = createFileRoute("/reserve-seat")({
  head: () => buildPageHead(SEO_PAGES.reserveSeat),
  component: ReserveSeat,
});

const SEAT_FEE_INR = 1_000;

const highlights = [
  "Access to the Grand Awards Ceremony in Bengaluru",
  "Witness national recognition across 30+ categories",
  "Network with leaders from industry, media, and public life",
  "Be part of the InViGIL Global Launch Event",
];

function ReserveSeat() {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState<{ referenceId: string; email: string } | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fullName = (form.elements.namedItem("fullName") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
    const organization = (form.elements.namedItem("organization") as HTMLInputElement).value.trim();
    const city = (form.elements.namedItem("city") as HTMLInputElement).value.trim();

    const nextErrors: Record<string, string> = {};
    const fullNameError = validateField(nameField, fullName);
    const emailError = validateField(emailField, email);
    const phoneError = validateField(phoneField, phone);

    if (fullNameError) nextErrors.fullName = fullNameError;
    if (emailError) nextErrors.email = emailError;
    if (phoneError) nextErrors.phone = phoneError;

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});

    if (!isApiConfigured()) {
      toast.error("API is not configured. Set VITE_API_BASE_URL.");
      return;
    }

    setSubmitting(true);

    try {
      const registration = await postSeatReservationRegister({
        fullName,
        email,
        phone,
        organization: organization || undefined,
        city: city || undefined,
      });

      await openSeatReservationRazorpayCheckout(
        { fullName, email, phone },
        registration.id,
        () => {
          setSuccess({ referenceId: registration.referenceId, email });
          toast.success("Payment received — your seat is reserved.");
        },
        () => {
          toast.message("Payment was not completed. Your details are saved — you can try again.");
        },
      );
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Unable to complete reservation.");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <PageHero
        variant="awards"
        align="center"
        overline="HIT ViERA National Awards 2026"
        title={
          <>
            Seat <HeroAccent>Reserved</HeroAccent>
          </>
        }
        subtitle="Your place at the Grand Awards Ceremony is confirmed."
      >
        <FormPanel className="mx-auto max-w-2xl">
          <FormSuccessState
            title="You're All Set!"
            message="Thank you for reserving your seat. A confirmation email with your reference number has been sent."
            referenceId={success.referenceId}
            confirmationEmails={success.email}
          />
        </FormPanel>
      </PageHero>
    );
  }

  return (
    <>
      <PageHero
        variant="awards"
        align="center"
        overline="HIT ViERA National Awards 2026"
        title={
          <>
            Reserve Your <HeroAccent>Seat</HeroAccent>
          </>
        }
        subtitle="Secure your place at the Grand Awards Ceremony in Bengaluru, Karnataka."
      />

      <section className="mx-auto max-w-7xl px-6 pb-28 pt-8">
        <Link
          to="/awards"
          className="mb-8 inline-flex items-center text-sm font-medium text-amber-500 hover:underline"
        >
          ← Back to Awards
        </Link>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <aside className="space-y-6 lg:col-span-4">
            <div className="rounded-xl border border-gray-800 bg-[#111a33] p-6">
              <div className="flex items-center gap-3 border-b border-gray-800 pb-4">
                <Ticket className="h-6 w-6 text-amber-500" />
                <h3 className="text-lg font-bold text-foreground">Ceremony Seat</h3>
              </div>
              <p className="mt-4 text-3xl font-black text-amber-400">
                ₹{SEAT_FEE_INR.toLocaleString("en-IN")}
              </p>
              <p className="mt-2 text-sm text-gray-400">One seat per registration</p>
              <ul className="mt-6 space-y-3 border-t border-gray-800 pt-5">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-6">
              <div className="flex items-center gap-2 text-amber-400">
                <MapPin className="h-4 w-4" />
                <p className="font-semibold">Venue</p>
              </div>
              <p className="mt-2 text-sm text-gray-300">Bengaluru, Karnataka</p>
              <div className="mt-4 flex items-center gap-2 text-amber-400">
                <Calendar className="h-4 w-4" />
                <p className="font-semibold">Event</p>
              </div>
              <p className="mt-2 text-sm text-gray-300">
                HIT ViERA National Awards 2026 & InViGIL Global Launch
              </p>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <FormPanel>
              <FormSectionHeader title="Your Details" />
              <p className="mb-8 text-sm text-gray-400">
                Fill in your information below and proceed to pay ₹
                {SEAT_FEE_INR.toLocaleString("en-IN")} via Razorpay to confirm your seat.
              </p>

              <form onSubmit={onSubmit} className="space-y-6" noValidate>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <label htmlFor="fullName" className={labelClass}>Full Name *</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      className={fieldClass}
                      placeholder="Your full name"
                      disabled={submitting}
                    />
                    {errors.fullName ? <p className={errorClass}>{errors.fullName}</p> : null}
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={fieldClass}
                      placeholder="you@example.com"
                      disabled={submitting}
                    />
                    {errors.email ? <p className={errorClass}>{errors.email}</p> : null}
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelClass}>Phone *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className={fieldClass}
                      placeholder="10-digit mobile number"
                      disabled={submitting}
                    />
                    {errors.phone ? <p className={errorClass}>{errors.phone}</p> : null}
                  </div>

                  <div>
                    <label htmlFor="organization" className={labelClass}>Organization</label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      className={fieldClass}
                      placeholder="Company or institution (optional)"
                      disabled={submitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="city" className={labelClass}>City</label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      className={fieldClass}
                      placeholder="Your city (optional)"
                      disabled={submitting}
                    />
                  </div>
                </div>

                <button type="submit" className={submitButtonClass} disabled={submitting}>
                  {submitting ? "Processing…" : `Pay ₹${SEAT_FEE_INR.toLocaleString("en-IN")} & Reserve Seat`}
                </button>
              </form>
            </FormPanel>
          </div>
        </div>
      </section>
    </>
  );
}
