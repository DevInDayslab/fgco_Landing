import { SitePageHero } from "@/components/site/PageLayout";
import { siteHeroImages } from "@/data/site-heroes";

type HeroVariant = "awards" | "sponsorship" | "nominate";

const variantImage: Record<HeroVariant, string> = {
  awards: siteHeroImages.awards,
  sponsorship: siteHeroImages.city,
  nominate: siteHeroImages.city,
};

type PageHeroProps = {
  overline: string;
  title: React.ReactNode;
  subtitle?: string;
  showEventBar?: boolean;
  variant?: HeroVariant;
  align?: "left" | "center";
  children?: React.ReactNode;
};

export function PageHero({
  overline,
  title,
  subtitle,
  showEventBar = false,
  variant = "awards",
  align = "left",
  children,
}: PageHeroProps) {
  return (
    <SitePageHero
      overline={overline}
      title={title}
      subtitle={subtitle}
      image={variantImage[variant]}
      align={align}
      size="large"
      showEventBar={showEventBar}
    >
      {children}
    </SitePageHero>
  );
}
