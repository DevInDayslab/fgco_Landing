/** Shared social handle across FG Media / HIT NEWS channels */
export const SOCIAL_HANDLE = "hitnewsai";

export type SocialLink = {
  label: string;
  href: string;
};

export const SITE_SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/hitnewsai",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/hitnewsai",
  },
  {
    label: "Threads",
    href: "https://www.threads.net/@hitnewsai",
  },
  {
    label: "X",
    href: "https://x.com/hitnewsai",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@hitnewsai",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/hitnewsai",
  },
] as const satisfies readonly SocialLink[];

export const RAMESH_LINKEDIN_URL = "https://www.linkedin.com/in/rameshceo";
