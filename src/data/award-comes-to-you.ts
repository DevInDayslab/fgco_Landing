import ogImageAsset from "@/assets/OG_img.png";
import { SITE_URL } from "@/lib/seo";

export const AWARD_COMES_TO_YOU_PATH = "/award-comes-to-you";

/** Absolute URL for Open Graph / Twitter cards (sourced from src/assets/OG_img.png). */
export const AWARD_COMES_TO_YOU_OG_IMAGE = `${SITE_URL}${ogImageAsset}`;

export const AWARD_COMES_TO_YOU_TITLE = "Award Comes to You | HIT ViERA National Awards 2026";

export const AWARD_COMES_TO_YOU_DESCRIPTION =
  "Discover the HIT ViERA Award Comes to You initiative, bringing national award recognition directly to achievers at their home, office, factory, institution or workplace across India.";

export const AWARD_COMES_TO_YOU_PRIMARY_KEYWORD = "Award Comes to You";

export const AWARD_COMES_TO_YOU_KEYWORDS = [
  AWARD_COMES_TO_YOU_PRIMARY_KEYWORD,
  "HIT ViERA National Awards 2026",
  "HIT ViERA Awards",
  "National Awards India 2026",
  "National Award for Excellence",
  "Awards for achievers in India",
  "Indian excellence awards",
  "Business excellence awards India",
  "Innovation awards India",
  "Leadership awards India",
  "Entrepreneur awards India",
  "National recognition awards",
  "Awards for entrepreneurs",
  "Awards for innovators",
  "Awards for professionals",
  "Awards for social impact",
  "Award nomination India",
  "National award nomination",
  "Excellence recognition India",
  "Award delivery at workplace",
  "Surprise award presentation",
  "Awards ceremony India",
  "HIT ViERA Circle of Excellence",
] as const;

/** Dedicated campaign hashtag series for HIT ViERA Honours. */
export const HIT_VIERA_HONOURS_HASHTAG = "#HITViERAHonours";

export const AWARD_COMES_TO_YOU_CAMPAIGN_HASHTAGS = [
  HIT_VIERA_HONOURS_HASHTAG,
  "#TheAwardComesToYou",
  "#HonourGoesHome",
  "#IndiaRecognisesExcellence",
  "#ViERA2026",
  "#CelebratingExcellence",
] as const;

export const AWARD_COMES_TO_YOU_SEO_INTRO =
  "The HIT ViERA Award Comes to You initiative redefines national recognition in India — honouring entrepreneurs, innovators, professionals and leaders with surprise award presentations at the workplace, factory, institution or home where their excellence was built. From business excellence and innovation awards to leadership and social-impact honours, HIT ViERA National Awards 2026 brings the ceremony to the achiever.";
