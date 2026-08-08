import { createFileRoute } from "@tanstack/react-router";
import { Globe, Mail, MessageCircle, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { FgLogo } from "@/components/brand/FgLogo";
import {
  errorClass,
  fieldClass,
  labelClass,
  selectClass,
  submitButtonClass,
  textareaClass,
} from "@/components/awards/form-styles";
import { FormPanel } from "@/components/awards/FormPrimitives";
import { GoogleMapEmbed } from "@/components/site/GoogleMapEmbed";
import { HeroAccent, SitePageHero } from "@/components/site/PageLayout";
import { FG_CONTACT, inquiryTypes } from "@/data/contact";
import { Toaster } from "@/components/ui/sonner";
import { emailField, nameField, requiredTextField, validateField } from "@/lib/form-validation";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact FG Media Group — Advertising, Partnerships & Press" },
      {
        name: "description",
        content:
          "Contact FG Media Group in Bengaluru — pro@fgco.in, hitawards@fgco.in, WhatsApp +91 73820 98888.",
      },
      { property: "og:title", content: "Contact FG Media Group" },
      {
        property: "og:description",
        content: "Email pro@fgco.in or WhatsApp +91 73820 98888 — Bengaluru, Karnataka.",
      },
    ],
  }),
  component: Contact,
});

const details = [
  {
    icon: Globe,
    label: "Website",
    value: FG_CONTACT.websiteLabel,
    href: FG_CONTACT.website,
  },
  {
    icon: Mail,
    label: "Email",
    value: FG_CONTACT.email,
    href: `mailto:${FG_CONTACT.email}`,
  },
  {
    icon: Mail,
    label: "HIT ViERA Awards Contact",
    value: FG_CONTACT.awardsEmail,
    href: `mailto:${FG_CONTACT.awardsEmail}`,
  },
  {
    icon: Phone,
    label: "Mobile",
    value: FG_CONTACT.phone,
    href: `tel:${FG_CONTACT.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: FG_CONTACT.whatsappDisplay,
    href: FG_CONTACT.whatsappLink,
  },
];

function Contact() {
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLInputElement).value;

    const nextErrors: Record<string, string> = {};
    const nameError = validateField(nameField, name);
    const emailError = validateField(emailField, email);
    const messageError = validateField(requiredTextField("Message"), message);

    if (nameError) nextErrors.name = nameError;
    if (emailError) nextErrors.email = emailError;
    if (messageError) nextErrors.message = messageError;

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent — we'll get back to you shortly.");
      form.reset();
    }, 600);
  }

  return (
    <>
      <Toaster />
      <SitePageHero
        overline="Get In Touch"
        title={
          <>
            Contact <HeroAccent>Us</HeroAccent>
          </>
        }
        subtitle="InViGIL, ViERA, Media Wing, Automobiles, AP MEDIA Foundation, Videos, and HIT ViERA Awards — reach the right team in Bengaluru."
        size="compact"
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-28 lg:grid-cols-[1fr_1.15fr]">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl">Let&apos;s Connect</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Reach us for InViGIL, ViERA, publications, automobile wing, foundation initiatives,
              video content, awards, and partnerships.
            </p>
          </div>

          <ul className="space-y-4">
            {details.map((d) => (
              <li key={d.label} className="fg-card rounded-xl p-5">
                <div className="fg-card-inner flex items-start gap-4">
                  <span className="fg-icon-badge h-10 w-10 shrink-0 rounded-lg">
                    <d.icon className="h-4 w-4 text-gold" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{d.label}</p>
                    {d.href ? (
                      <a
                        href={d.href}
                        target={d.href.startsWith("http") ? "_blank" : undefined}
                        rel={d.href.startsWith("http") ? "noreferrer" : undefined}
                        className="mt-1 block text-sm text-foreground transition-colors hover:text-gold"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-foreground">{d.value}</p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="fg-card rounded-xl border-gold/20 p-6">
            <div className="fg-card-inner">
              <FgLogo size="sm" showTagline />
              <p className="mt-3 text-xs text-muted-foreground">
                InViGIL · ViERA · Media Wing · Automobiles · AP MEDIA Foundation · Videos
              </p>
            </div>
          </div>

          <GoogleMapEmbed />
        </div>

        <FormPanel className="!p-8 md:!p-12">
          <h2 className="text-2xl md:text-3xl">Send a Message</h2>

          <form onSubmit={onSubmit} className="mt-8 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="name">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="John Smith"
                  className={fieldClass}
                />
                {errors.name && <p className={errorClass}>{errors.name}</p>}
              </div>
              <div>
                <label className={labelClass} htmlFor="email">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="name@example.com"
                  className={fieldClass}
                />
                {errors.email && <p className={errorClass}>{errors.email}</p>}
              </div>
              <div>
                <label className={labelClass} htmlFor="company">
                  Company / Organisation
                </label>
                <input
                  id="company"
                  name="company"
                  placeholder="Your Organisation"
                  className={fieldClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="type">
                  Inquiry Type
                </label>
                <select id="type" name="type" className={selectClass} defaultValue="">
                  <option value="" disabled>Select type...</option>
                  {inquiryTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className={labelClass} htmlFor="message">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell us how we can help..."
                className={textareaClass}
              />
              {errors.message && <p className={errorClass}>{errors.message}</p>}
            </div>

            <button type="submit" disabled={sending} className={submitButtonClass}>
              <span className="inline-flex items-center justify-center gap-2">
                <Send className="h-4 w-4" />
                {sending ? "Sending..." : "Send Message"}
              </span>
            </button>
          </form>
        </FormPanel>
      </section>
    </>
  );
}
