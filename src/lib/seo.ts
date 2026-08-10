import { FG_CONTACT } from "@/data/contact";

export const SITE_URL = FG_CONTACT.website.replace(/\/$/, "");
export const SITE_NAME = "FG Media Group";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const THEME_COLOR = "#0f1f14";

export type PageSeoConfig = {
  path: string;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  noindex?: boolean;
  changefreq?: "weekly" | "monthly";
  priority?: number;
};

export type PageHeadOptions = PageSeoConfig;

function absoluteUrl(path: string): string {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path}`;
}

export function buildPageHead({
  path,
  title,
  description,
  ogTitle,
  ogDescription,
  noindex = false,
}: PageHeadOptions) {
  const canonical = absoluteUrl(path);
  const resolvedOgTitle = ogTitle ?? title;
  const resolvedOgDescription = ogDescription ?? description;

  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: resolvedOgTitle },
    { property: "og:description", content: resolvedOgDescription },
    { property: "og:type", content: "website" },
    { property: "og:url", content: canonical },
    { property: "og:image", content: DEFAULT_OG_IMAGE },
    { property: "og:site_name", content: SITE_NAME },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: resolvedOgTitle },
    { name: "twitter:description", content: resolvedOgDescription },
    { name: "twitter:image", content: DEFAULT_OG_IMAGE },
  ];

  if (noindex) {
    meta.push({ name: "robots", content: "noindex, nofollow" });
  }

  return {
    meta,
    links: [{ rel: "canonical", href: canonical }],
  };
}

export function buildNoIndexHead(title: string) {
  return buildPageHead({
    path: "/admin",
    title,
    description: "",
    noindex: true,
  });
}

export const FAVICON_LINKS = [
  { rel: "icon", href: "/favicon.ico", sizes: "any" },
  { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
  { rel: "icon", href: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
] as const;

export const ROOT_META = [
  { charSet: "utf-8" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  { title: `${SITE_NAME} — Media · Technology · India` },
  {
    name: "description",
    content:
      "FG Media Group: trusted multilingual journalism, InViGIL virtual commerce powered by ViERA, from Bengaluru, India.",
  },
  { name: "author", content: SITE_NAME },
  { name: "theme-color", content: THEME_COLOR },
  { property: "og:type", content: "website" },
  { property: "og:site_name", content: SITE_NAME },
  { property: "og:image", content: DEFAULT_OG_IMAGE },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:image", content: DEFAULT_OG_IMAGE },
] as const;
