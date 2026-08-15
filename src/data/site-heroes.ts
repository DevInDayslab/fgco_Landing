import awardHero from "@/assets/award_hero.jpg";
import ogImage from "@/assets/OG_img.png";
import heroCity from "@/assets/hero-city.jpg";
import heroOffice from "@/assets/hero_office.jpg";

export const siteHeroImages = {
  default: heroOffice,
  awards: awardHero,
  awardComesToYou: ogImage,
  city: heroCity,
} as const;
