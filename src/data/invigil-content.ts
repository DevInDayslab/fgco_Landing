import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  BadgeCheck,
  Bot,
  FileWarning,
  Radio,
  Search,
  Shield,
  Users,
} from "lucide-react";

export const INVIGIL_TAGLINE = "Intelligence Beyond Vision";

export const INVIGIL_HERO = {
  overline: "InViGIL",
  systemBadge: "SYSTEM ONLINE — POWERED BY ViERA",
  subtitle:
    "A next-generation Digital Security, Intelligence, Investigation and Vigilance platform. Combining virtual intelligence with human-oriented security services to create a more connected and responsive approach to safety.",
  vieraLabel: "ViERA — Virtual Intelligence Enabled Real Avatar",
};

export const INVIGIL_INTRO =
  "InViGIL is conceived as an intelligent digital security ecosystem for individuals, professionals, businesses, institutions and communities. It combines technology-driven vigilance with human-oriented security services to create a more connected and responsive approach to safety.";

export const INVIGIL_PRINCIPLE =
  "InViGIL is built around a simple principle: security should not only respond to threats — it should help users become aware of risks before they become serious problems.";

export const invigilHighlights = [
  "Global Coverage",
  "AI-Powered",
  "Enterprise Grade",
  "Beyond Vision",
] as const;

export const invigilStats = [
  { value: "4", label: "Intelligence Dimensions" },
  { value: "360°", label: "Security Coverage" },
  { value: "24/7", label: "Live Intelligence" },
  { value: "AI", label: "ViERA Powered" },
] as const;

export const invigilPillars = invigilHighlights;

export const invigilVieraAction = {
  overline: "VIERA IN ACTION",
  title: "Meet ViERA",
  subtitle:
    "Virtual Intelligence Enabled Real Avatar — the intelligent interface between users and security-related information, services and actions.",
  liveLabel: "● LIVE FEED",
  version: "VIERA-AI v2.0",
  status: {
    sys: "SYS: ONLINE",
    ai: "AI: ACTIVE",
    version: "VIERA v2.0",
    link: "SECURE LINK",
  },
};

export const invigilGeneration = {
  title: "A New Generation of Digital Security",
  paragraphs: [INVIGIL_INTRO, INVIGIL_PRINCIPLE],
};

export const invigilCapabilities: {
  icon: LucideIcon;
  color: string;
  title: string;
  text: string;
}[] = [
  {
    icon: Shield,
    color: "text-viera",
    title: "Digital Security & Cybersecurity",
    text: "Supports digital safety, security awareness and protection against evolving online risks.",
  },
  {
    icon: BadgeCheck,
    color: "text-gold",
    title: "Identity & Professional Verification",
    text: "Helps users access verification-oriented security services and build greater trust.",
  },
  {
    icon: Search,
    color: "text-ka",
    title: "Investigation & Vigilance",
    text: "Provides an organised digital environment for security-related reporting and investigation support.",
  },
  {
    icon: AlertTriangle,
    color: "text-te",
    title: "Risk Awareness & Alerts",
    text: "Helps users stay informed about potential risks, security events and important alerts.",
  },
  {
    icon: FileWarning,
    color: "text-en",
    title: "Incident Reporting",
    text: "Enables structured reporting of security concerns and incidents for appropriate follow-up.",
  },
  {
    icon: Bot,
    color: "text-viera",
    title: "Intelligent Security Assistance",
    text: "Brings security information and assistance together so users can make more informed decisions.",
  },
  {
    icon: Users,
    color: "text-gold",
    title: "Community & Organisational Security",
    text: "Designed to support security awareness and coordinated vigilance across organisations.",
  },
  {
    icon: Radio,
    color: "text-ka",
    title: "Live Intelligence",
    text: "Supporting timely awareness, alerts and live security information in real-time.",
  },
];

/** @deprecated Use invigilCapabilities */
export const invigilFeatures = invigilCapabilities;

export const invigilIntelligenceDimensions = [
  {
    letter: "In",
    title: "Investigations",
    text: "Supporting investigation-oriented security activities.",
  },
  {
    letter: "Vi",
    title: "Virtual Intelligence",
    text: "Applying virtual intelligence to security and awareness.",
  },
  {
    letter: "Gi",
    title: "Guard Intelligence",
    text: "Creating an intelligent layer of security vigilance and protection.",
  },
  {
    letter: "L",
    title: "Live Intelligence",
    text: "Supporting timely awareness, alerts and live security information.",
  },
] as const;

export const invigilAudiences = [
  "Individuals & Families",
  "Security Professionals",
  "Private Businesses",
  "Security Agencies",
  "Institutions",
  "Apartment Associations",
  "Investigation Organisations",
  "Communities & Clubs",
] as const;

export const invigilPurpose = [
  {
    label: "OUR VISION",
    title: "Trusted Digital Security Ecosystem",
    text: "To create a trusted digital security ecosystem where intelligent technology helps people, organisations and communities become safer, more aware and better prepared.",
  },
  {
    label: "OUR MISSION",
    title: "Unified Intelligence Platform",
    text: "To combine Digital Security, Cybersecurity, Virtual Intelligence, Investigation, Vigilance, Verification, Risk Awareness and Live Intelligence into an accessible and connected security platform.",
  },
  {
    label: "OUR PROMISE",
    title: "See Beyond the Visible",
    text: "InViGIL is designed to help users see beyond the visible, understand risks, verify what matters and act with greater awareness.",
  },
] as const;

export const INVIGIL_FOOTER = {
  tagline: INVIGIL_TAGLINE,
  subtitle: "Powered by ViERA. Built for a Safer, Smarter and More Secure World.",
  vieraCredit: "Powered by ViERA — Virtual Intelligence Enabled Real Avatar",
  cta: "REQUEST ACCESS TO InViGIL",
};

export const invigilNavAnchors = [
  { id: "about", label: "About" },
  { id: "capabilities", label: "Capabilities" },
  { id: "intelligence", label: "Intelligence" },
  { id: "vision", label: "Vision" },
  { id: "contact", label: "Contact" },
] as const;
