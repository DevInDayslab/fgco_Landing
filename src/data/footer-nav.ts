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
    | "/hit-news"
    | "/happy-india-times"
    | "/kurukshetra"
    | "/technology"
    | "/teaser"
    | "/viera"
    | "/automobiles"
    | "/operations"
    | "/awards"
    | "/award-comes-to-you"
    | "/sponsorship"
    | "/nominate"
    | "/contact"
    | "/foundation"
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
    { label: "AP MEDIA Foundation", to: "/foundation" },
    { label: "Contact Us", to: "/contact" },
  ] satisfies FooterLink[],
  platforms: [
    { label: "HIT NEWS", to: "/hit-news" },
    { label: "Happy India Times", to: "/happy-india-times" },
    { label: "Kurukshetra", to: "/kurukshetra" },
    { label: "TEASER", to: "/teaser" },
    { label: "InViGIL", to: "/technology" },
    { label: "ViERA", to: "/viera" },
    { label: "Media Wing", to: "/media" },
    { label: "Publications", to: "/publications" },
    { label: "Automobiles", to: "/automobiles" },
    { label: "Operations", to: "/operations" },
  ] satisfies FooterLink[],
  awards: [
    { label: "HIT ViERA Awards", to: "/awards" },
    { label: "Award Comes to You", to: "/award-comes-to-you" },
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
