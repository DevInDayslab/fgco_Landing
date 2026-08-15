import { SITE_SOCIALS } from "@/data/social";
import { SPONSORSHIP_TIERS_HASH } from "@/data/awards";

export type FooterLink = {
  label: string;
  hash?: string;
  to:
    | "/"
    | "/about"
    | "/media"
    | "/publications"
    | "/technology"
    | "/viera"
    | "/automobiles"
    | "/operations"
    | "/awards"
    | "/sponsorship"
    | "/nominate"
    | "/contact"
    | "/terms"
    | "/privacy"
    | "/refund-policy"
    | "/cancellation-policy"
    | "/ceo"
    | "/md"
    | "/director";
};

export const FOOTER_LINKS = {
  company: [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Publications", to: "/publications" },
    { label: "Contact Us", to: "/contact" },
  ] satisfies FooterLink[],
  platforms: [
    { label: "InViGIL", to: "/technology" },
    { label: "ViERA", to: "/viera" },
    { label: "Media Wing", to: "/media" },
    { label: "Publications", to: "/publications" },
    { label: "Automobiles", to: "/automobiles" },
    { label: "Operations", to: "/operations" },
  ] satisfies FooterLink[],
  awards: [
    { label: "HIT ViERA Awards", to: "/awards" },
    { label: "Nominate", to: "/nominate" },
    { label: "Sponsorship", to: "/sponsorship", hash: SPONSORSHIP_TIERS_HASH },
  ] satisfies FooterLink[],
  legal: [
    { label: "Terms & Conditions", to: "/terms" },
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Refund Policy", to: "/refund-policy" },
    { label: "Cancellation Policy", to: "/cancellation-policy" },
  ] satisfies FooterLink[],
} as const;

export const FOOTER_SOCIALS = SITE_SOCIALS;

export const CERTIFICATION_TAGS = [
  "ISO/IEC 27001:2013",
  "Certificate of Registration",
  "Trademark Act, 1999",
  "Government of Karnataka",
  "Startup India",
  "MCA — Ministry of Corporate Affairs",
] as const;
