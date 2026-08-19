import type { PageSeoConfig } from "@/lib/seo";
import {
  AWARD_COMES_TO_YOU_DESCRIPTION,
  AWARD_COMES_TO_YOU_KEYWORDS,
  AWARD_COMES_TO_YOU_PATH,
  AWARD_COMES_TO_YOU_TITLE,
} from "@/data/award-comes-to-you";
import { AUTOMOBILE_HERO } from "@/data/automobiles";
import { FOUNDATION_INTRO, FOUNDATION_TAGLINE } from "@/data/foundation";
import { AWARDS_TAGLINE } from "@/data/awards";
import { INVIGIL_INTRO, INVIGIL_TAGLINE } from "@/data/invigil-content";
import { SEO_OG_IMAGE_ALT, SEO_OG_IMAGES } from "@/data/seo-og-images";
import { TEASER_INTRO, TEASER_TAGLINE } from "@/data/teaser-content";
import { VIERA_HERO } from "@/data/viera-content";

const VIERA_DESCRIPTION =
  "ViERA creates your intelligent digital replica — personalized Virtual Intelligence that protects, empowers, and guides you across InViGIL and the digital world.";

export const SEO_PAGES = {
  home: {
    path: "/",
    title: "FG Media Group — Recognising Excellence. Celebrating Vision.",
    description:
      "FG Media Group unites trusted multilingual journalism, InViGIL digital security, ViERA virtual intelligence, and national recognition from Bengaluru, India.",
    ogTitle: "FG Media Group — Media · Technology · India",
    ogDescription:
      "Empowering India through world-class media, InViGIL security, ViERA intelligence, TEASER short-video, and HIT ViERA National Awards.",
    keywords: [
      "FG Media Group",
      "InViGIL",
      "ViERA",
      "TEASER",
      "HIT ViERA Awards",
      "media India",
      "Bengaluru",
    ],
    changefreq: "weekly",
    priority: 1.0,
  },
  about: {
    path: "/about",
    title: "About FG Media — Our Story, Vision & Mission",
    description:
      "FG Media and Safety Technologies Pvt. Ltd. builds intelligent, secure, and human-centred media and technology ecosystems across India and beyond.",
    ogTitle: "About FG Media Group",
    ogDescription:
      "Discover FG Media's vision — connecting journalism, digital security, virtual intelligence, and social impact under one national enterprise.",
    changefreq: "monthly",
    priority: 0.8,
  },
  ceo: {
    path: "/ceo",
    title: "Ramesh Babu Pasupuleti — Founder & CEO, FG Media",
    description:
      "Ramesh Babu Pasupuleti — Global Technology Visionary, Founder & CEO of FG Media, pioneer of ViERA, InViGIL, and Virtual Intelligence Technology.",
    ogTitle: "Ramesh Babu Pasupuleti — Founder & CEO, FG Media",
    ogDescription:
      "Meet Ramesh Babu Pasupuleti, the visionary behind ViERA, InViGIL, TEASER, and FG Media's technology-led media ecosystem.",
    changefreq: "monthly",
    priority: 0.7,
  },
  md: {
    path: "/md",
    title: "Roopa T — Founder & Managing Director, FG Media",
    description:
      "Roopa T — Founder & Managing Director of FG Media, women empowerment advocate, and digital safety innovator behind InViGIL and ViERA.",
    ogTitle: "Roopa T — Founder & Managing Director, FG Media",
    ogDescription:
      "Roopa T leads FG Media's mission in women empowerment, digital safety, and human-centred technology innovation across India.",
    changefreq: "monthly",
    priority: 0.7,
  },
  director: {
    path: "/director",
    title: "Chandra Shekhar Pasupuleti — Director, FG Media",
    description:
      "Chandra Shekhar Pasupuleti — Director and Senior Automobile Technical & Safety Expert at FG Media with 25+ years of automotive expertise.",
    ogTitle: "Chandra Shekhar Pasupuleti — Director, FG Media",
    ogDescription:
      "Automobile technical authority supporting FitGaadi, FitGarage, and FG Media's next-generation mobility and safety initiatives.",
    changefreq: "monthly",
    priority: 0.7,
  },
  media: {
    path: "/media",
    title: "Media Wing — FG Media Publications | HIT News, Happy India Times, Kurukshetra",
    description:
      "FG Media Publications — HIT NEWS, Happy India Times, and Kurukshetra reach 20 lakh+ readers weekly across English, Telugu, and Kannada.",
    ogTitle: "FG Media Publications — Media Wing",
    ogDescription:
      "HIT NEWS, Happy India Times, and Kurukshetra — trusted national weeklies with 20 lakh+ weekly reach across India.",
    keywords: [
      "HIT News",
      "Happy India Times",
      "Kurukshetra",
      "FG Media Publications",
      "multilingual journalism India",
    ],
    changefreq: "monthly",
    priority: 0.8,
  },
  publications: {
    path: "/publications",
    title: "Our Publications — HIT News, Happy India Times, Kurukshetra",
    description:
      "Three national news weeklies in English, Telugu, and Kannada with a combined print run of 20 lakh+ copies distributed across India.",
    ogTitle: "FG Media Group Publications",
    ogDescription:
      "Explore HIT News, Happy India Times, and Kurukshetra — FG Media's flagship publications reaching millions nationwide.",
    changefreq: "monthly",
    priority: 0.6,
  },
  technology: {
    path: "/technology",
    title: "InViGIL — Digital Security & Intelligence Platform | FG Media",
    description: INVIGIL_INTRO,
    ogTitle: `InViGIL — ${INVIGIL_TAGLINE}`,
    ogDescription: INVIGIL_INTRO,
    ogImage: SEO_OG_IMAGES.invigil,
    ogImageAlt: SEO_OG_IMAGE_ALT.invigil,
    keywords: [
      "InViGIL",
      "digital security",
      "intelligence platform",
      "ViERA",
      "investigation",
      "vigilance",
      "FG Media",
    ],
    changefreq: "monthly",
    priority: 0.8,
  },
  teaser: {
    path: "/teaser",
    title: "TEASER — Intelligent Short-Video & Virtual Commerce | Powered by ViERA",
    description: TEASER_INTRO,
    ogTitle: `TEASER — ${TEASER_TAGLINE}`,
    ogDescription: TEASER_INTRO,
    ogImage: SEO_OG_IMAGES.teaser,
    ogImageAlt: SEO_OG_IMAGE_ALT.teaser,
    keywords: [
      "TEASER",
      "short video",
      "virtual commerce",
      "ViERA",
      "InViGIL",
      "AR",
      "content creation",
    ],
    changefreq: "monthly",
    priority: 0.8,
  },
  viera: {
    path: "/viera",
    title: "ViERA — Virtual Intelligence Enabled Real Actor | FG Media",
    description: VIERA_DESCRIPTION,
    ogTitle: "ViERA — Virtual Intelligence Enabled Real Actor",
    ogDescription: VIERA_HERO.subtitle,
    ogImage: SEO_OG_IMAGES.viera,
    ogImageAlt: SEO_OG_IMAGE_ALT.viera,
    keywords: [
      "ViERA",
      "virtual intelligence",
      "digital avatar",
      "InViGIL",
      "AI",
      "personalized intelligence",
    ],
    changefreq: "monthly",
    priority: 0.8,
  },
  automobiles: {
    path: "/automobiles",
    title: "Automobile Technologies — FitGaadi, FitGarage & FG EV | FG Media",
    description:
      "FitGaadi vehicle safety and 365° care, FitGarage global service network, and FG Electric Mobility — FG Media's integrated automobile ecosystem.",
    ogTitle: "FitGaadi — Vehicle Doctor | FG Media Automobiles",
    ogDescription: AUTOMOBILE_HERO.body,
    ogImage: SEO_OG_IMAGES.fitGaadi,
    ogImageAlt: SEO_OG_IMAGE_ALT.fitGaadi,
    keywords: [
      "FitGaadi",
      "FitGarage",
      "vehicle doctor",
      "automobile safety",
      "FG Media",
      "electric mobility",
    ],
    changefreq: "monthly",
    priority: 0.7,
  },
  operations: {
    path: "/operations",
    title: "Specialized Operations — FG Media Group",
    description:
      "FG Media specialized operations span automobiles, supply chain, investigations, and hyper-secure e-commerce across India.",
    ogTitle: "FG Media Specialized Operations",
    ogDescription:
      "Explore FG Media's operational divisions — automobiles, supply chain, investigations, and secure digital commerce.",
    changefreq: "monthly",
    priority: 0.6,
  },
  awards: {
    path: "/awards",
    title: "HIT ViERA National Awards 2026 — FG Media Group",
    description:
      "HIT ViERA National Awards 2026 and the InViGIL Global Launch Event in Bengaluru — recognising excellence and vision across India.",
    ogTitle: "HIT ViERA National Awards 2026",
    ogDescription: AWARDS_TAGLINE,
    ogImage: SEO_OG_IMAGES.awards,
    ogImageAlt: SEO_OG_IMAGE_ALT.awards,
    keywords: [
      "HIT ViERA Awards",
      "National Awards India 2026",
      "InViGIL launch",
      "Bengaluru",
      "FG Media",
    ],
    changefreq: "weekly",
    priority: 0.9,
  },
  awardComesToYou: {
    path: AWARD_COMES_TO_YOU_PATH,
    title: AWARD_COMES_TO_YOU_TITLE,
    description: AWARD_COMES_TO_YOU_DESCRIPTION,
    ogTitle: AWARD_COMES_TO_YOU_TITLE,
    ogDescription: AWARD_COMES_TO_YOU_DESCRIPTION,
    ogImage: SEO_OG_IMAGES.awards,
    ogImageAlt:
      "HIT ViERA National Award 2026 — Award Comes to You initiative bringing national recognition to achievers across India",
    keywords: AWARD_COMES_TO_YOU_KEYWORDS,
    changefreq: "weekly",
    priority: 0.85,
  },
  sponsorship: {
    path: "/sponsorship",
    title: "Sponsorship Proposal — HIT ViERA Awards 2026",
    description:
      "Exclusive sponsorship invitation for HIT ViERA National Awards 2026 and the InViGIL Global Launch Event in Bengaluru.",
    ogTitle: "HIT ViERA Awards 2026 Sponsorship",
    ogDescription:
      "Partner with HIT ViERA National Awards 2026 — an exclusive invitation to align your brand with national excellence.",
    ogImage: SEO_OG_IMAGES.awards,
    ogImageAlt: SEO_OG_IMAGE_ALT.awards,
    changefreq: "monthly",
    priority: 0.7,
  },
  nominate: {
    path: "/nominate",
    title: "Official Nomination Portal — HIT ViERA Awards 2026",
    description:
      "Submit your nomination for the HIT ViERA National Awards 2026. Official portal by FG Media Group — recognise excellence across India.",
    ogTitle: "HIT ViERA Awards 2026 — Nomination Portal",
    ogDescription:
      "Nominate outstanding achievers for the HIT ViERA National Awards 2026 through the official FG Media Group portal.",
    ogImage: SEO_OG_IMAGES.awards,
    ogImageAlt: SEO_OG_IMAGE_ALT.awards,
    changefreq: "weekly",
    priority: 0.8,
  },
  contact: {
    path: "/contact",
    title: "Contact FG Media Group — Advertising, Partnerships & Press",
    description:
      "Contact FG Media Group in Bengaluru — pro@fgco.in, hitawards@fgco.in, WhatsApp +91 73820 98888 for partnerships, press, and enquiries.",
    ogTitle: "Contact FG Media Group",
    ogDescription:
      "Reach FG Media in Bengaluru — email pro@fgco.in or WhatsApp +91 73820 98888 for advertising, partnerships, and press.",
    changefreq: "monthly",
    priority: 0.7,
  },
  foundation: {
    path: "/foundation",
    title: "AP MEDIA Foundation — Social Impact | FG Media Group",
    description: FOUNDATION_INTRO,
    ogTitle: `AP MEDIA Foundation — ${FOUNDATION_TAGLINE}`,
    ogDescription: FOUNDATION_INTRO,
    ogImage: SEO_OG_IMAGES.foundation,
    ogImageAlt: SEO_OG_IMAGE_ALT.foundation,
    keywords: [
      "AP MEDIA Foundation",
      "social impact",
      "FG Media",
      "community empowerment",
      "education support India",
    ],
    changefreq: "monthly",
    priority: 0.75,
  },
  terms: {
    path: "/terms",
    title: "Terms & Conditions — FG Media Group",
    description:
      "Terms governing use of FG Media websites, HIT ViERA Awards nominations, sponsorships, events, and related digital services.",
    ogTitle: "FG Media Terms & Conditions",
    ogDescription:
      "Read the terms and conditions for FG Media websites, awards nominations, sponsorships, and related services.",
    changefreq: "yearly",
    priority: 0.4,
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy — FG Media Group",
    description:
      "How FG Media collects, uses, stores, and protects personal data for nominations, sponsorships, events, and website services.",
    ogTitle: "FG Media Privacy Policy",
    ogDescription:
      "Learn how FG Media Group handles personal data for awards, sponsorships, events, and website interactions.",
    changefreq: "yearly",
    priority: 0.4,
  },
  refundPolicy: {
    path: "/refund-policy",
    title: "Refund Policy — FG Media Group",
    description:
      "Refund conditions for HIT ViERA Awards nomination fees, sponsorship payments, and related FG Media services and events.",
    ogTitle: "FG Media Refund Policy",
    ogDescription:
      "Review refund eligibility and procedures for HIT ViERA Awards nominations, sponsorships, and FG Media services.",
    changefreq: "yearly",
    priority: 0.4,
  },
  cancellationPolicy: {
    path: "/cancellation-policy",
    title: "Cancellation Policy — FG Media Group",
    description:
      "Cancellation rules for HIT ViERA Awards nominations, sponsorships, event participation, and related FG Media services.",
    ogTitle: "FG Media Cancellation Policy",
    ogDescription:
      "Understand cancellation terms for nominations, sponsorships, and HIT ViERA Awards event participation.",
    changefreq: "yearly",
    priority: 0.4,
  },
} as const satisfies Record<string, PageSeoConfig>;

export const SITEMAP_PAGES: PageSeoConfig[] = Object.values(SEO_PAGES);
