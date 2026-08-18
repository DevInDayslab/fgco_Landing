import defaultOg from "@/assets/OG_img.png";
import foundationOg from "@/assets/AP MEDIA Foundation OG Image.png";
import awardsOg from "@/assets/Hit Awards OG Icon.png";
import invigilOg from "@/assets/InvigilOG.png";
import teaserOg from "@/assets/Teaser SEO OG.png";
import vieraOg from "@/assets/ViERA SEO OG Image.png";
import fitGaadiOg from "@/assets/Fit Gaadi SEO OG.png";
import { FG_CONTACT } from "@/data/contact";

const SITE_URL = FG_CONTACT.website.replace(/\/$/, "");

function assetUrl(asset: string): string {
  return `${SITE_URL}${asset}`;
}

export const SEO_OG_IMAGES = {
  default: assetUrl(defaultOg),
  invigil: assetUrl(invigilOg),
  teaser: assetUrl(teaserOg),
  viera: assetUrl(vieraOg),
  fitGaadi: assetUrl(fitGaadiOg),
  foundation: assetUrl(foundationOg),
  awards: assetUrl(awardsOg),
} as const;

export const DEFAULT_OG_IMAGE = SEO_OG_IMAGES.default;

export const SEO_OG_IMAGE_ALT = {
  default: "FG Media Group — Media, Technology and National Recognition from India",
  invigil: "InViGIL — Intelligence Beyond Vision. Digital security and intelligence platform powered by ViERA",
  teaser: "TEASER — Intelligent short-video and virtual commerce experience powered by ViERA",
  viera: "ViERA — Virtual Intelligence Enabled Real Actor empowering humanity through intelligence",
  fitGaadi: "FitGaadi — Vehicle Doctor. Automobile safety, monitoring and 365° vehicle care by FG Media",
  foundation:
    "AP MEDIA Foundation — Enlight, Empower and Engage. Social impact initiative of FG Media Group",
  awards:
    "HIT ViERA National Awards 2026 — Elite achievements and national recognition presented by FG Media Group",
} as const;
