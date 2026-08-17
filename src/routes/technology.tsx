import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { InvigilSection } from "@/components/awards/InvigilSection";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { SiteAnchorButton } from "@/components/site/SiteButton";
import { INVIGIL_HERO } from "@/data/invigil-content";
import { SEO_PAGES } from "@/data/seo-pages";
import { buildPageHead } from "@/lib/seo";
import { HeroAccent, SitePageHero } from "@/components/site/PageLayout";

export const Route = createFileRoute("/technology")({
  head: () => buildPageHead(SEO_PAGES.technology),
  component: Technology,
});

function Technology() {
  return (
    <div className="animate-fade-in">
      <SitePageHero
        tone="viera"
        overline={INVIGIL_HERO.overline}
        leading={
          <BrandLogo
            id="invigil"
            className="mx-auto mb-6 h-40 max-w-[min(100%,40rem)] md:h-52 lg:h-60"
            size="xl"
          />
        }
        badge={
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-viera/40 bg-viera/15 px-5 py-2 text-[0.68rem] tracking-[0.22em]">
            <span className="h-1.5 w-1.5 rounded-full bg-viera" />
            {INVIGIL_HERO.systemBadge}
          </span>
        }
        title={
          <>
            Intelligence Beyond <HeroAccent>Vision</HeroAccent>
          </>
        }
        subtitle={INVIGIL_HERO.subtitle}
      >
        <SiteAnchorButton href="#capabilities" variant="viera" size="lg">
          EXPLORE PLATFORM <ArrowRight className="h-4 w-4" />
        </SiteAnchorButton>
        <SiteAnchorButton href="#capabilities" variant="vieraOutline" size="lg">
          VIEW CAPABILITIES
        </SiteAnchorButton>
        <p className="mt-6 text-xs text-muted-foreground">{INVIGIL_HERO.vieraLabel}</p>
      </SitePageHero>

      <InvigilSection />
    </div>
  );
}
