import type { BrandLogoId, PublicationId } from "@/data/brands";

export type PublicationProfile = {
  id: PublicationId;
  code: string;
  accent: string;
  badge: string;
  kicker: string;
  title: string;
  cardTitle: string;
  native: string;
  text: string;
  focus: string;
  tags: string[];
  quote: string;
  print: string;
  coverage: string;
};

export const publicationProfiles: PublicationProfile[] = [
  {
    id: "hit-news",
    code: "EN",
    accent: "text-en",
    badge: "border-en/40 bg-en/10 text-en",
    kicker: "National English Weekly",
    title: "HIT News",
    cardTitle: "HIT NEWS",
    native: "Happy India Techs News",
    focus: "Science, Technology, Culture, and Indian Heritage.",
    text: "FG Media Group's flagship English-language weekly. Research and Development, Science and Technology, Culture, Indian Heritage, Business, Women Empowerment, Urban Development, and Investigative Journalism.",
    tags: [
      "National & International News",
      "Business & Technology",
      "Science & Research",
      "Social Affairs",
    ],
    quote: '"Hit the Truth. Every Time."',
    print: "10 Lakh+",
    coverage: "Pan India",
  },
  {
    id: "happy-india-times",
    code: "TE",
    accent: "text-te",
    badge: "border-te/40 bg-te/10 text-te",
    kicker: "National Telugu Weekly",
    title: "Happy India Times",
    cardTitle: "Happy India Times",
    native: "హ్యాపీ ఇండియా టైమ్స్",
    focus: "Positivity, creativity, and explosive entrepreneurship.",
    text: "Quality news for Telugu-speaking communities — Positivity, Progressive, Creative, Innovative and healthy information for happy living. Encourages entrepreneurship, education, research, and women empowerment across Andhra Pradesh and Telangana.",
    tags: ["Progressive News", "Entrepreneurship", "Cultural Stories", "Community Focus"],
    quote: '"సంతోషమైన భారతానికి వార్తలు"',
    print: "5 Lakh+",
    coverage: "Andhra Pradesh & Telangana",
  },
  {
    id: "kurukshetra",
    code: "KA",
    accent: "text-ka",
    badge: "border-ka/40 bg-ka/10 text-ka",
    kicker: "National Kannada Weekly",
    title: "Kurukshetra",
    cardTitle: "Kurukshetra",
    native: "ಕುರುಕ್ಷೇತ್ರ ವರದ ವ್ಯಭವ",
    focus: "Empowering and connecting Kannada-speaking communities worldwide.",
    text: "Empowering Kannada-speaking communities with quality news and information. Kurukshetra provides necessary advertising and promotional support to subscribers across Karnataka — regional politics, Kannada culture, and local business at the forefront.",
    tags: ["Karnataka Focus", "Kannada Culture", "Regional Politics", "Local Business"],
    quote: '"ಕನ್ನಡ ನಾಡಿನ ದನಿ"',
    print: "5 Lakh+",
    coverage: "Karnataka State",
  },
];

export const mediaStats = [
  { value: "20 Lakh+", label: "Weekly Print Reach" },
  { value: "3", label: "National Languages" },
  { value: "6", label: "Print Hubs" },
  { value: "EST. 2017", label: "Publications Network" },
] as const;

export const printHubs = [
  "Hyderabad",
  "Mumbai",
  "Chennai",
  "Bengaluru",
  "Kolkata",
  "New Delhi",
] as const;

export const editorialPillars = [
  {
    title: "Investigative Journalism",
    text: "Deep-dive reporting that holds power accountable and surfaces truth with integrity.",
  },
  {
    title: "Science & R&D",
    text: "Coverage of research, innovation, and technology shaping India's future.",
  },
  {
    title: "Business & Economy",
    text: "Entrepreneurship, industry, markets, and the people building India's growth story.",
  },
  {
    title: "Culture & Heritage",
    text: "Indian heritage, arts, traditions, and the stories that connect generations.",
  },
  {
    title: "Women Empowerment",
    text: "Profiles, policy, and progress on leadership and opportunity for women nationwide.",
  },
  {
    title: "Urban Development",
    text: "Cities, infrastructure, civic life, and the transformation of modern India.",
  },
] as const;

export const digitalExtensions = [
  {
    title: "InViGIL Platform",
    text: "Decentralized media, commerce, and spatial journalism — the digital extension of FG Media's print legacy.",
    to: "/technology" as const,
    tag: "Digital Media",
    brandLogo: "invigil" as const satisfies BrandLogoId,
  },
  {
    title: "ViERA Engine",
    text: "Virtual Intelligence Enabled Real Actor — verification, Fact Score, and AI-assisted editorial workflows.",
    to: "/viera" as const,
    tag: "Technology",
    brandLogo: "viera" as const satisfies BrandLogoId,
  },
  {
    title: "Tharangam Podcasts",
    text: "Audio and video podcast network for deep-dive interviews, leadership stories, and national conversations.",
    to: "/contact" as const,
    tag: "Audio & Video",
  },
  {
    title: "E-Papers & Special Editions",
    text: "Collector's editions, award special issues, and digital editions across the publication network.",
    to: "/publications" as const,
    tag: "Print & Digital",
    brandLogo: "hitNews" as const satisfies BrandLogoId,
  },
] as const;

export const MEDIA_WING_INTRO =
  "The Media Wing of FG Media Group is a global premium initiative — empowering communities through quality journalism in English, Telugu, and Kannada. From flagship national weeklies to digital-first storytelling on InViGIL, we reach households and decision-makers across India with honesty, depth, and cultural respect.";
