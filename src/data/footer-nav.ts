export type FooterLink = {
  label: string;
  to:
    | "/"
    | "/about"
    | "/team"
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
    { label: "Our Team", to: "/team" },
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
    { label: "Sponsorship", to: "/sponsorship" },
  ] satisfies FooterLink[],
  legal: [
    { label: "Terms & Conditions", to: "/terms" },
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Refund Policy", to: "/refund-policy" },
    { label: "Cancellation Policy", to: "/cancellation-policy" },
  ] satisfies FooterLink[],
} as const;

export const FOOTER_SOCIALS = [
  {
    label: "Facebook",
    href: "https://facebook.com/invigilapp",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/invigilapp",
  },
  {
    label: "Threads",
    href: "https://threads.com/InvigilApp",
  },
  {
    label: "X",
    href: "https://x.com/invigilapp",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/invigilapp",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/invigil",
  },
] as const;

export const CERTIFICATION_TAGS = [
  "ISO/IEC 27001:2013",
  "Certificate of Registration",
  "Trademark Act, 1999",
  "Government of Karnataka",
  "Startup India",
  "MCA — Ministry of Corporate Affairs",
] as const;
