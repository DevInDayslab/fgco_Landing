import { BrandLogo } from "@/components/brand/BrandLogo";
import { AWARDS_TAGLINE } from "@/data/awards";

export function SponsorshipPresentationIntro() {
  return (
    <section className="border-b border-border/60 bg-surface/30 py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="section-label">HIT ViERA National Awards 2026</p>
        <p className="mt-2 text-[0.65rem] font-medium tracking-[0.28em] text-muted-foreground uppercase">
          FG Media Group Presentation
        </p>
        <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
          HiT ViERA <span className="italic fg-text-gradient-gold">National Awards</span> 2026
        </h2>
        <p className="mt-2 text-xs font-semibold tracking-[0.22em] text-gold uppercase">
          Elite Achievements
        </p>
        <p className="mt-5 text-lg leading-relaxed text-foreground md:text-xl">{AWARDS_TAGLINE}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          <BrandLogo id="hitNews" size="sm" />
          <BrandLogo id="viera" size="sm" />
          <BrandLogo id="invigil" size="sm" />
        </div>
      </div>
    </section>
  );
}
