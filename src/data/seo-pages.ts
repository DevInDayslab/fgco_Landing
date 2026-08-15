import type { PageSeoConfig } from "@/lib/seo";
import {
  AWARD_COMES_TO_YOU_DESCRIPTION,
  AWARD_COMES_TO_YOU_KEYWORDS,
  AWARD_COMES_TO_YOU_OG_IMAGE,
  AWARD_COMES_TO_YOU_PATH,
  AWARD_COMES_TO_YOU_TITLE,
} from "@/data/award-comes-to-you";
import { AWARDS_TAGLINE } from "@/data/awards";
import { INVIGIL_INTRO } from "@/data/awards";

export const SEO_PAGES = {
  home: {
    path: "/",
    title: "FG Media Group — Recognising Excellence. Celebrating Vision.",
    description:
      "Trusted multilingual journalism meets InViGIL and ViERA — pioneering media and technology from Bengaluru, India.",
    ogTitle: "FG Media Group — Media · Technology · India",
    ogDescription:
      "Empowering India through world-class Media, groundbreaking Virtual Intelligence (InViGIL), and National Recognition.",
    changefreq: "weekly",
    priority: 1.0,
  },
  about: {
    path: "/about",
    title: "About FG Media — Our Story, Vision & Mission",
    description:
      "FG Media and Safety Technologies Pvt. Ltd. — an India-based technology and media enterprise building intelligent, secure and human-centred ecosystems.",
    ogTitle: "About FG Media",
    ogDescription:
      "FG Media and Safety Technologies Pvt. Ltd. — an India-based technology and media enterprise building intelligent, secure and human-centred ecosystems.",
    changefreq: "monthly",
    priority: 0.8,
  },
  ceo: {
    path: "/ceo",
    title: "Ramesh Babu Pasupuleti — Founder & CEO, FG Media",
    description:
      "Ramesh Babu Pasupuleti — Global Technology Visionary, Founder & CEO of FG Media, pioneer of ViERA, InViGIL, and Virtual Intelligence Technology.",
    ogTitle: "Ramesh Babu Pasupuleti — CEO, FG Media",
    changefreq: "monthly",
    priority: 0.7,
  },
  md: {
    path: "/md",
    title: "Roopa T — Founder & Managing Director, FG Media",
    description:
      "Roopa T — Founder & Managing Director of FG Media, women empowerment advocate, and digital safety innovator behind InViGIL and ViERA.",
    ogTitle: "Roopa T — MD, FG Media",
    changefreq: "monthly",
    priority: 0.7,
  },
  director: {
    path: "/director",
    title: "Chandra Shekhar Pasupuleti — Director, FG Media",
    description:
      "Chandra Shekhar Pasupuleti — Director and Senior Automobile Technical & Safety Expert at FG Media with 25+ years of automotive expertise.",
    ogTitle: "Chandra Shekhar Pasupuleti — Director, FG Media",
    changefreq: "monthly",
    priority: 0.7,
  },
  media: {
    path: "/media",
    title: "Media Wing — FG Media Publications | HIT News, Happy India Times, Kurukshetra",
    description:
      "FG Media Publications — HIT NEWS, Happy India Times, and Kurukshetra. 20 lakh+ weekly reach across English, Telugu, and Kannada.",
    ogTitle: "FG Media Publications — Media Wing",
    ogDescription:
      "HIT NEWS, Happy India Times, and Kurukshetra — 20 lakh+ weekly reach across English, Telugu, and Kannada.",
    changefreq: "monthly",
    priority: 0.8,
  },
  publications: {
    path: "/publications",
    title: "Our Publications — HIT News, Happy India Times, Kurukshetra",
    description:
      "Three national news weeklies in English, Telugu and Kannada with a combined print run of 20 lakh+ copies across India.",
    ogTitle: "FG Media Group Publications",
    ogDescription: "HIT News, Happy India Times and Kurukshetra — 20 lakh+ copies across India.",
    changefreq: "monthly",
    priority: 0.6,
  },
  technology: {
    path: "/technology",
    title: "InViGIL Application — World's First Virtual Commerce Platform | FG Media",
    description: INVIGIL_INTRO,
    ogTitle: "InViGIL Application — Intelligence Beyond Vision",
    ogDescription: INVIGIL_INTRO,
    changefreq: "monthly",
    priority: 0.8,
  },
  viera: {
    path: "/viera",
    title: "ViERA — Virtual Intelligence Enabled Real Actor | FG Media",
    description:
      "ViERA creates your intelligent digital replica — personalized Virtual Intelligence that protects, empowers, and guides you across InViGIL and the digital world.",
    ogTitle: "ViERA — Virtual Intelligence Enabled Real Actor",
    changefreq: "monthly",
    priority: 0.8,
  },
  automobiles: {
    path: "/automobiles",
    title: "Automobile Technologies — FitGaadi, FitGarage & FG EV | FG Media",
    description:
      "FG Media Automobile Division — FitGaadi safety & 365° vehicle care, FitGarage global service network, and FG Electric Mobility.",
    ogTitle: "FG Media Automobile Technologies",
    changefreq: "monthly",
    priority: 0.7,
  },
  operations: {
    path: "/operations",
    title: "Specialized Operations — FG Media Group",
    description: "Automobiles, Supply Chain, Investigations, and hyper-secure E-commerce.",
    ogTitle: "FG Media Specialized Operations",
    changefreq: "monthly",
    priority: 0.6,
  },
  awards: {
    path: "/awards",
    title: "HIT ViERA National Awards 2026 — FG Media Group",
    description:
      "HIT ViERA National Awards 2026 & InViGIL Global Launch Event in Bengaluru. Recognising excellence across India.",
    ogTitle: "HIT ViERA National Awards 2026",
    ogDescription: AWARDS_TAGLINE,
    changefreq: "weekly",
    priority: 0.9,
  },
  awardComesToYou: {
    path: AWARD_COMES_TO_YOU_PATH,
    title: AWARD_COMES_TO_YOU_TITLE,
    description: AWARD_COMES_TO_YOU_DESCRIPTION,
    ogTitle: AWARD_COMES_TO_YOU_TITLE,
    ogDescription: AWARD_COMES_TO_YOU_DESCRIPTION,
    ogImage: AWARD_COMES_TO_YOU_OG_IMAGE,
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
      "Exclusive sponsorship invitation for HIT ViERA National Awards 2026 & InViGIL Global Launch Event.",
    ogTitle: "HIT ViERA Awards 2026 Sponsorship",
    ogDescription: "An exclusive invitation to align with global excellence.",
    changefreq: "monthly",
    priority: 0.7,
  },
  nominate: {
    path: "/nominate",
    title: "Official Nomination Portal — HIT ViERA Awards 2026",
    description:
      "Submit your nomination for the HIT ViERA National Awards 2026. Official portal by FG Media Group.",
    ogTitle: "HIT Awards Nomination Portal",
    ogDescription: "HIT Awards & Special Edition — Official Nomination Portal by FG Media Group.",
    changefreq: "weekly",
    priority: 0.8,
  },
  contact: {
    path: "/contact",
    title: "Contact FG Media Group — Advertising, Partnerships & Press",
    description:
      "Contact FG Media Group in Bengaluru — pro@fgco.in, hitawards@fgco.in, WhatsApp +91 73820 98888.",
    ogTitle: "Contact FG Media Group",
    ogDescription: "Email pro@fgco.in or WhatsApp +91 73820 98888 — Bengaluru, Karnataka.",
    changefreq: "monthly",
    priority: 0.7,
  },
  terms: {
    path: "/terms",
    title: "Terms & Conditions — FG Media Group",
    description:
      "Terms governing use of FG Media websites, HIT ViERA Awards nominations, sponsorships, and related services.",
    ogTitle: "FG Media Terms & Conditions",
    changefreq: "yearly",
    priority: 0.4,
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy — FG Media Group",
    description:
      "How FG Media collects, uses, and protects personal data for nominations, sponsorships, events, and website services.",
    ogTitle: "FG Media Privacy Policy",
    changefreq: "yearly",
    priority: 0.4,
  },
  refundPolicy: {
    path: "/refund-policy",
    title: "Refund Policy — FG Media Group",
    description:
      "Refund conditions for HIT ViERA Awards nomination fees, sponsorship payments, and related FG Media services.",
    ogTitle: "FG Media Refund Policy",
    changefreq: "yearly",
    priority: 0.4,
  },
  cancellationPolicy: {
    path: "/cancellation-policy",
    title: "Cancellation Policy — FG Media Group",
    description:
      "Cancellation rules for nominations, sponsorships, and HIT ViERA Awards event participation.",
    ogTitle: "FG Media Cancellation Policy",
    changefreq: "yearly",
    priority: 0.4,
  },
} as const satisfies Record<string, PageSeoConfig>;

export const SITEMAP_PAGES: PageSeoConfig[] = Object.values(SEO_PAGES);
