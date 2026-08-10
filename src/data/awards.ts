import type { LucideIcon } from "lucide-react";
import { Award, Globe, Network, Brain, Layers, Store, Home, ShieldCheck } from "lucide-react";
import heroAwards from "@/assets/award_hero.jpg";
import heroCity from "@/assets/hero-city.jpg";

export const heroImages = {
  awards: heroAwards,
  sponsorship: heroCity,
  nominate: heroCity,
} as const;

export const AWARDS_TAGLINE = "Recognising Excellence. Celebrating Vision. Inspiring the Future.";

export const EVENT_LOCATION = "Bengaluru, Karnataka";

export const NOMINATION_CONTACT = {
  emails: ["pro@fgco.in", "hitawards@fgco.in"],
  whatsapp: "+91 73820 98888",
  whatsappLink: "https://wa.me/917382098888",
};

export const signatureTiers = [
  {
    tier: 1,
    shortName: "Champion",
    title: "ViERA Champion of India Award 2026",
    subtitle: "The Highest Honour — National Grand Winner",
    cashAward: "₹5,00,000",
    featured: true,
    accent: "border-gold/50 bg-gold/[0.12]",
    benefits: [
      "Cash Award of ₹5,00,000",
      "Grand Crystal Trophy",
      "Gold Medal",
      "Certificate of National Excellence",
      "One-Year Corporate Sponsorship valued at ₹5,00,000",
      "National Media Recognition",
      "Exclusive Cover Feature",
      "Brand Ambassador Opportunities",
      "Lifetime Recognition in the HIT ViERA Hall of Excellence",
    ],
  },
  {
    tier: 2,
    shortName: "Pride",
    title: "ViERA Pride of India Award 2026",
    subtitle: "National Excellence Award",
    cashAward: "₹3,00,000",
    featured: false,
    accent: "border-gold/30 bg-gold/[0.05]",
    benefits: [
      "Cash Award of ₹3,00,000",
      "Premium Trophy",
      "Gold Medal",
      "Certificate of Excellence",
      "One-Year Corporate Sponsorship valued at ₹5,00,000",
      "National Media Promotion and Recognition",
    ],
  },
  {
    tier: 3,
    shortName: "Chakra",
    title: "ViERA Chakra Award 2026",
    subtitle: "Two National Winners",
    cashAward: "₹1,00,000",
    cashNote: "each",
    featured: false,
    accent: "border-gold/25 bg-gold/[0.04]",
    benefits: [
      "Cash Award of ₹1,00,000 per winner",
      "Premium Trophy",
      "Medal",
      "Certificate of Excellence",
      "One-Year Corporate Sponsorship valued at ₹5,00,000",
      "National Recognition across FG Media platforms",
    ],
  },
] as const;

export const excellenceAwards = [
  "ViERA Power Star Award 2026",
  "ViERA Best Entrepreneur Award 2026",
  "ViERA Innovation Excellence Award 2026",
  "ViERA Technology Visionary Award 2026",
  "ViERA AI & VI Excellence Award 2026",
  "ViERA Digital Leadership Award 2026",
  "ViERA Startup Excellence Award 2026",
  "ViERA Business Icon Award 2026",
  "ViERA Industrial Excellence Award 2026",
  "ViERA Wealth Creator Award 2026",
  "ViERA Education Excellence Award 2026",
  "ViERA Academic Leadership Award 2026",
  "ViERA Healthcare Excellence Award 2026",
  "ViERA Agricultural Excellence Award 2026",
  "ViERA Climate Leadership Award 2026",
  "ViERA Green Earth Award 2026",
  "ViERA Social Impact Award 2026",
  "ViERA Public Service Excellence Award 2026",
  "ViERA Governance Excellence Award 2026",
  "ViERA Women Leadership Award 2026",
  "ViERA Youth Icon Award 2026",
  "ViERA Lifetime Achievement Award 2026",
  "ViERA Global Indian Excellence Award 2026",
  "ViERA Media Excellence Award 2026",
  "ViERA Journalism Excellence Award 2026",
  "ViERA Arts & Culture Award 2026",
  "ViERA Sports Excellence Award 2026",
  "ViERA Cinema Excellence Award 2026",
  "ViERA Traditional Heritage Award 2026",
  "ViERA Excellence in Public Administration Award 2026",
];

export const invigilFeatures = [
  {
    icon: Brain,
    color: "text-viera",
    title: "Core Engines",
    text: "Powered by ViERA (Virtual Intelligence Enabled Real Avatar) verification and a proprietary Fact Score Engine, ensuring deterministically calculated payouts every 5 minutes.",
  },
  {
    icon: Layers,
    color: "text-gold",
    title: "Spatial Evidentiary Journalism",
    text: "Integrates Augmented Reality (AR), WebXR, and multimodal RAG pipelines to project 3D investigative scenes directly into physical living environments.",
  },
  {
    icon: Store,
    color: "text-ka",
    title: "The Show Room & Events Engine",
    text: "A unique digital storefront equipped with an autonomous ViERA Business Manager, Tharangam audio podcasts, E-Papers, and C2PA-verified cryptographic event ticketing.",
  },
  {
    icon: Home,
    color: "text-te",
    title: "ViERA Family & Smart Home IoT",
    text: "Connects family micro-networks to smart home appliances and enables interactive Smart TV tuitions backed by real-time AR posture and focus telemetry.",
  },
  {
    icon: ShieldCheck,
    color: "text-en",
    title: "Comprehensive Governance",
    text: "Features an omni-channel Ads Manager, automated penalty loops for deepfakes, and a cascading legal defense matrix spanning up to the Supreme Court.",
  },
] as const;

export const influencerPerks: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Award,
    title: "HIT ViERA Influencer Medal",
    text: "National recognition medal for distinguished influencers.",
  },
  {
    icon: Globe,
    title: "National Media Coverage",
    text: "Featured across FG Media's national print and digital platforms.",
  },
  {
    icon: Network,
    title: "Corporate Networking Opportunities",
    text: "Access to exclusive leadership events and brand collaborations.",
  },
];

export const selectionTimeline = [
  {
    step: 1,
    title: "National Nominations",
    text: "Open call for nominations from individuals, organisations, startups and government departments across India. Profiles and supporting evidence are collected for Special Edition consideration and HIT ViERA Awards evaluation.",
  },
  {
    step: 2,
    title: "Achievement Verification",
    text: "Independent research, document review and professional due diligence on every submission — verifying claims, impact metrics and authenticity of achievements.",
  },
  {
    step: 3,
    title: "Expert Panel Evaluation",
    text: "A multi-disciplinary panel assesses impact, leadership, innovation and contribution to society. Public opinion surveys and social impact evaluation inform scoring.",
  },
  {
    step: 4,
    title: "National Jury Assessment",
    text: "The National Jury conducts the final review — innovation and leadership analysis, contribution to nation building, and overall excellence. Decisions of the Jury are final and binding.",
  },
];

export const evaluationCriteria = [
  "National Nominations",
  "Achievement Verification",
  "Independent Research",
  "Professional Due Diligence",
  "Public Opinion Surveys",
  "Expert Panel Evaluation",
  "National Jury Assessment",
  "Innovation and Leadership Analysis",
  "Social Impact Evaluation",
  "Contribution to Nation Building",
  "Overall Excellence Review",
] as const;

export const nomineeTypes = [
  "Individual",
  "Company / Organization",
  "Startup",
  "Government Official / Department",
] as const;

export const nominatorRelationshipOptions = [
  "Self (Nominee)",
  "Colleague",
  "Manager / Supervisor",
  "Client",
  "Family Member",
  "Friend",
  "Professional Associate",
  "Government Representative",
  "Other",
] as const;

export const nominationCategories = [
  "Remarkable Achievements",
  "Startup Ideas & Innovation",
  "Business Plans & Strategy",
  "Academic Excellence",
  "Excellence in Governance (Government Officials)",
  "Inspiring Life Stories",
  "Social Impact & Community Service",
  "Other Noteworthy Nominations",
] as const;

export const publicationOptions = [
  "India Times (Telugu)",
  "HIT NEWS (English)",
  "Kurukshetra News (Kannada)",
] as const;

export const mediaReachHighlights = [
  {
    title: "Print Media Dominance",
    text: "Collector's editions reaching 20,00,000 households with premium full-color advertising real estate.",
  },
  {
    title: "Tharangam Podcast Network",
    text: "Exclusive audio and video features broadcasted to a highly engaged global audience.",
  },
  {
    title: "Cinematic Promotional Teasers",
    text: "High-budget event teasers flooding social media, television, and digital platforms.",
  },
  {
    title: "Omni-Channel Digital Promotions",
    text: "Social media campaigns, influencer partnerships, and digital banners across InViGIL.",
  },
];

export type SponsorshipTierId = "super" | "power" | "golden" | "silver";

export const sponsorshipTiers = [
  {
    id: "super" as const,
    name: "Super ViERA Sponsor",
    role: "Title Sponsor",
    investment: "₹ 20,00,000",
    amountInr: 2000000,
    spots: 1,
    featured: true,
    gradient: "from-amber-200 via-yellow-400 to-amber-600",
    ring: "ring-gold/60",
    benefits: [
      "Title Integration across the entire event",
      "Present the ViERA Champion of India Award 2026",
      "Front Page Full-Color Ad in all three special editions",
      "Cinematic teaser integration with apex logo placement",
      "Exclusive 3-part Tharangam podcast series",
      "InViGIL Elite Package — 1-Year Free Subscription",
    ],
  },
  {
    id: "power" as const,
    name: "Power ViERA Sponsor",
    role: "Co-Sponsor",
    investment: "₹ 15,00,000",
    amountInr: 1500000,
    spots: 2,
    featured: false,
    gradient: "from-yellow-600 via-amber-500 to-yellow-700",
    ring: "ring-amber-500/50",
    benefits: [
      "Co-Sponsorship Status across all event collateral",
      "Present the Pride of India or Chakra Award",
      "Full Page Inside Color Ad in all three special editions",
      "High-impact co-branded promotional videos",
      "Dedicated Tharangam feature episode",
      "InViGIL Premium Package — 1-Year Free Subscription",
    ],
  },
  {
    id: "golden" as const,
    name: "Golden ViERA Sponsor",
    role: "Associate Sponsor",
    investment: "₹ 10,00,000",
    amountInr: 1000000,
    spots: 4,
    featured: false,
    gradient: "from-amber-700 via-yellow-600 to-amber-800",
    ring: "ring-amber-600/40",
    benefits: [
      "Associate Status on all digital and physical materials",
      "Present a prestigious category award",
      "Half-Page Color Ad in all three special editions",
      "Highlighted in collaborative social media campaigns",
      "InViGIL Business Package — 1-Year Free Subscription",
    ],
  },
  {
    id: "silver" as const,
    name: "Silver ViERA Sponsor",
    role: "Partner Sponsor",
    investment: "₹ 5,00,000",
    amountInr: 500000,
    spots: 10,
    featured: false,
    gradient: "from-slate-300 via-gray-200 to-slate-400",
    ring: "ring-slate-400/40",
    benefits: [
      "Official Partner of the HIT ViERA Awards",
      "Present an Excellence Award category",
      "Quarter-Page Color Ad in all three special editions",
      "Inclusion in sponsor shout-outs across social media",
      "InViGIL Starter Package — 1-Year Free Subscription",
    ],
  },
];

export const paymentDetails = {
  accountName: "FG Media and Safety Technologies Pvt Ltd",
  bankName: "[To be provided]",
  accountNumber: "[To be provided]",
  ifscCode: "[To be provided]",
  gst: "29AADCF9850F1ZC",
  gstRate: "18%",
  advancePercent: "50%",
  balanceDueDays: 15,
  nominationSelfFeeInr: 20_000,
  nominationOtherFeeInr: 5_000,
  /** @deprecated Use nominationSelfFeeInr / nominationOtherFeeInr */
  nominationFeeInr: 20_000,
};

export function isSelfNominationInput(params: {
  relationship?: string;
  nominatorEmail?: string;
  nomineeEmail?: string;
}) {
  if (params.relationship === "Self (Nominee)") return true;
  const nominator = params.nominatorEmail?.trim().toLowerCase();
  const nominee = params.nomineeEmail?.trim().toLowerCase();
  return Boolean(nominator && nominee && nominator === nominee);
}

export function getNominationFeeBreakdown(isSelfNomination: boolean) {
  const totalInr = isSelfNomination
    ? paymentDetails.nominationSelfFeeInr
    : paymentDetails.nominationOtherFeeInr;
  return {
    baseInr: totalInr,
    gstInr: 0,
    totalInr,
    isSelfNomination,
    feeLabel: isSelfNomination
      ? "Self-nomination — ₹20,000"
      : "Nominating another person — ₹5,000",
  };
}

export const INVIGIL_INTRO =
  "InViGIL is the world's first and most advanced decentralized media, commerce, spatial journalism, and event management ecosystem. By replacing opaque, clickbait-driven legacy models with an architecture anchored to the ViERA Engine Core and an immutable PostgreSQL ledger, InViGIL shifts economic incentives strictly toward high-integrity content generation based on Truth, Telemetry, and Real-World Impact.";

export const invigilPillars = ["Truth", "Telemetry", "Real-World Impact"] as const;

export const INFLUENCER_INTRO =
  "The HIT ViERA National Jury will identify and recognise the Top 100 Influencers of India 2026 across business, entrepreneurship, technology, governance, education, healthcare, media, arts, sports, innovation and social leadership.";
