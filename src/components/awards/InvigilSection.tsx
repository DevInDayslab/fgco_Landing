import { ArrowRight, ChevronDown } from "lucide-react";
import { FeatureGrid } from "@/components/awards/FeatureGrid";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { SiteLinkButton } from "@/components/site/SiteButton";
import {
  ContentCard,
  PageSection,
  PullQuote,
  SectionTitle,
  TagCloud,
} from "@/components/site/PageLayout";
import {
  INVIGIL_FOOTER,
  INVIGIL_INTRO,
  INVIGIL_PRINCIPLE,
  invigilAudiences,
  invigilGeneration,
  invigilHighlights,
  invigilIntelligenceDimensions,
  invigilNavAnchors,
  invigilPurpose,
  invigilStats,
  invigilVieraAction,
} from "@/data/invigil-content";

function AnchorNav() {
  return (
    <nav
      className="flex flex-wrap items-center justify-center gap-2 md:gap-3"
      aria-label="InViGIL page sections"
    >
      {invigilNavAnchors.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="rounded-full border border-border/70 bg-background/60 px-4 py-2 text-xs font-medium tracking-wide text-muted-foreground transition-colors hover:border-viera/40 hover:text-viera"
        >
          {label}
        </a>
      ))}
      <SiteLinkButton to="/contact" variant="viera" size="sm" className="ml-1">
        GET ACCESS
      </SiteLinkButton>
    </nav>
  );
}

function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {invigilStats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-viera/20 bg-viera/[0.04] p-5 text-center"
        >
          <p className="text-3xl font-bold tracking-tight text-viera md:text-4xl">{stat.value}</p>
          <p className="mt-2 text-xs font-medium tracking-wide text-muted-foreground md:text-sm">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function VieraActionPanel() {
  return (
    <div className="fg-panel fg-card-viera rounded-3xl p-8 md:p-12">
      <div className="fg-card-inner grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="section-label text-viera">{invigilVieraAction.overline}</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">{invigilVieraAction.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            {invigilVieraAction.subtitle}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-viera/30 bg-viera/10 px-3 py-1 text-xs font-medium text-viera">
              {invigilVieraAction.liveLabel}
            </span>
            <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
              {invigilVieraAction.version}
            </span>
          </div>
          <SiteLinkButton to="/viera" variant="vieraOutline" size="md" className="mt-8">
            Explore ViERA <ArrowRight className="h-4 w-4" />
          </SiteLinkButton>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border border-viera/30 bg-card p-6 shadow-[0_0_30px_rgba(59,130,246,0.15)] md:h-72 md:w-72">
            <div className="absolute inset-0 animate-[spin_60s_linear_infinite] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <BrandLogo
              id="viera"
              className="relative z-10 h-full w-full max-w-none"
              size="lg"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2 text-[0.65rem] font-medium tracking-widest text-muted-foreground uppercase">
            {Object.values(invigilVieraAction.status).map((s) => (
              <span key={s} className="rounded border border-border/60 px-3 py-1">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PurposeCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {invigilPurpose.map((item) => (
        <ContentCard key={item.label} variant="viera" className="h-full p-6 md:p-8">
          <p className="section-label text-viera">{item.label}</p>
          <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
        </ContentCard>
      ))}
    </div>
  );
}

/** InViGIL Application body — used only on the /technology page */
export function InvigilSection() {
  return (
    <div>
      <div className="flex flex-col items-center gap-6 text-center">
        <AnchorNav />
        <div className="mt-2 flex flex-col items-center gap-2 text-[0.6rem] tracking-[0.3em] text-muted-foreground">
          SCROLL
          <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden />
        </div>
      </div>

      <PageSection id="about" className="pt-12 pb-16">
        <div className="max-w-3xl">
          <p className="section-label">About</p>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">{invigilGeneration.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            {INVIGIL_INTRO}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            {INVIGIL_PRINCIPLE}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {invigilHighlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full border border-gold/25 bg-gold/[0.06] px-4 py-1.5 text-xs font-medium tracking-wide text-gold"
            >
              {highlight}
            </span>
          ))}
        </div>

        <div className="mt-10">
          <StatsGrid />
        </div>
      </PageSection>

      <PageSection className="py-0">
        <VieraActionPanel />
      </PageSection>

      <PageSection id="capabilities" border>
        <SectionTitle
          overline="CORE SECURITY CAPABILITIES"
          title="Comprehensive Security Ecosystem"
          description="InViGIL goes beyond conventional security tools by bringing together multiple layers of intelligence and protection."
        />
        <FeatureGrid />
      </PageSection>

      <PageSection id="intelligence" tone="viera-band">
        <SectionTitle
          overline="FOUR INTELLIGENCE DIMENSIONS"
          title="The InViGIL Intelligence Framework"
          description="Each letter in InViGIL represents a distinct intelligence dimension, working in harmony to deliver complete security coverage."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {invigilIntelligenceDimensions.map((dim) => (
            <ContentCard key={dim.letter} variant="viera" className="p-6">
              <span className="text-2xl font-bold text-viera">{dim.letter}</span>
              <h3 className="mt-3 text-lg font-semibold">{dim.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{dim.text}</p>
            </ContentCard>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionTitle
          overline="BUILT FOR EVERYONE"
          title="A Security Ecosystem For All"
          description="InViGIL is designed for a broad security ecosystem serving individuals, families, professionals, private businesses, security agencies, investigation organisations, institutions and communities."
        />
        <TagCloud tags={invigilAudiences} tone="viera" />
      </PageSection>

      <PageSection id="vision">
        <SectionTitle
          overline="OUR PURPOSE"
          title="Vision, Mission & Promise"
        />
        <PurposeCards />
      </PageSection>

      <PageSection id="contact" tone="muted">
        <PullQuote tone="viera" className="mx-auto max-w-3xl text-center">
          <BrandLogo id="invigil" size="sm" className="mx-auto" />
          <h2 className="mt-6 text-3xl md:text-4xl">{INVIGIL_FOOTER.tagline}</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            {INVIGIL_FOOTER.subtitle}
          </p>
          <p className="mt-2 text-xs text-muted-foreground">{INVIGIL_FOOTER.vieraCredit}</p>
          <SiteLinkButton to="/contact" variant="viera" size="lg" className="mt-8">
            {INVIGIL_FOOTER.cta} <ArrowRight className="h-4 w-4" />
          </SiteLinkButton>
        </PullQuote>
      </PageSection>
    </div>
  );
}
