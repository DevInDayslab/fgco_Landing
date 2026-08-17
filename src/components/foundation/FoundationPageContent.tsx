import { ArrowRight, Heart } from "lucide-react";
import { GlowCard } from "@/components/site/GlowCard";
import { SiteLinkButton } from "@/components/site/SiteButton";
import {
  ChecklistGrid,
  HeroAccent,
  PageSection,
  PullQuote,
  SectionTitle,
  SitePageHero,
} from "@/components/site/PageLayout";
import {
  FOUNDATION_ACTION,
  FOUNDATION_APPROACH,
  FOUNDATION_BELIEF,
  FOUNDATION_BELIEF_BODY,
  FOUNDATION_CLOSING,
  FOUNDATION_COMMITMENT,
  FOUNDATION_ECOSYSTEM,
  FOUNDATION_FUTURE,
  FOUNDATION_INTRO,
  FOUNDATION_INTRO_EXTENDED,
  FOUNDATION_MISSION,
  FOUNDATION_NAME,
  FOUNDATION_PHILOSOPHY,
  FOUNDATION_PHILOSOPHY_SECTION,
  FOUNDATION_SUBTITLE,
  FOUNDATION_TAGLINE,
  FOUNDATION_VISION,
  foundationProgramSections,
} from "@/data/foundation";

function ProgramSection({
  section,
  tone,
}: {
  section: typeof foundationProgramSections[number];
  tone?: "default" | "band";
}) {
  return (
    <PageSection tone={tone === "band" ? "band" : "default"} id={section.id}>
      <SectionTitle overline={section.overline} title={section.title} />
      {section.paragraphs?.map((p) => (
        <p key={p} className="mb-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {p}
        </p>
      ))}
      {section.bullets ? (
        <ChecklistGrid items={section.bullets} className="mt-6" />
      ) : null}
      {section.pullQuote ? (
        <p className="mt-8 text-center text-lg font-semibold tracking-wide text-gold md:text-xl">
          {section.pullQuote}
        </p>
      ) : null}
      {section.closing ? (
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {section.closing}
        </p>
      ) : null}
    </PageSection>
  );
}

export function FoundationPageContent() {
  return (
    <div className="animate-fade-in">
      <SitePageHero
        tone="gold"
        overline="Social Impact"
        badge={
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/[0.08] px-5 py-2 text-[0.68rem] tracking-[0.22em] text-gold">
            <Heart className="h-3.5 w-3.5" aria-hidden />
            {FOUNDATION_SUBTITLE}
          </span>
        }
        title={
          <>
            AP MEDIA <HeroAccent>Foundation</HeroAccent>
          </>
        }
        subtitle={FOUNDATION_TAGLINE}
      >
        <SiteLinkButton to="/contact" variant="gold" size="lg">
          Partner With Us <ArrowRight className="h-4 w-4" />
        </SiteLinkButton>
      </SitePageHero>

      <PageSection className="pt-0">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{FOUNDATION_INTRO}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            {FOUNDATION_INTRO_EXTENDED}
          </p>
        </div>
        <PullQuote tone="gold" className="mx-auto mt-12 max-w-3xl">
          <p className="text-lg font-medium text-foreground md:text-xl">{FOUNDATION_PHILOSOPHY}</p>
        </PullQuote>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
          {FOUNDATION_ACTION}
        </p>
      </PageSection>

      <PageSection tone="band" border>
        <div className="grid gap-8 lg:grid-cols-2">
          <GlowCard tone="gold" className="p-8 md:p-10">
            <p className="section-label">Our Vision</p>
            <h2 className="fg-glow-card-title mt-3 text-2xl font-semibold leading-snug md:text-3xl">
              {FOUNDATION_VISION.title}
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">{FOUNDATION_VISION.intro}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {FOUNDATION_VISION.pillars.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-gold/25 bg-gold/[0.06] px-3 py-1 text-xs font-medium text-gold"
                >
                  {item}
                </span>
              ))}
            </div>
            {FOUNDATION_VISION.paragraphs.map((p) => (
              <p key={p} className="mt-4 text-sm leading-relaxed text-muted-foreground">{p}</p>
            ))}
          </GlowCard>
          <GlowCard tone="gold" className="p-8 md:p-10">
            <p className="section-label">Our Mission</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              AP MEDIA Foundation works to identify genuine needs within communities and create
              programmes that provide practical and sustainable support.
            </p>
            <ChecklistGrid items={[...FOUNDATION_MISSION]} className="mt-6" />
          </GlowCard>
        </div>
      </PageSection>

      <PageSection>
        <SectionTitle overline="OUR CORE BELIEF" title="Hope Creates Opportunity" />
        <div className="mx-auto max-w-3xl rounded-2xl border border-gold/25 bg-gold/[0.06] px-6 py-6 text-center md:px-10 md:py-8">
          <p className="text-sm font-semibold tracking-wide text-gold md:text-base">
            {FOUNDATION_BELIEF.join(" ")}
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          {FOUNDATION_BELIEF_BODY.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </PageSection>

      {foundationProgramSections.map((section, index) => (
        <ProgramSection
          key={section.id}
          section={section}
          tone={index % 2 === 1 ? "band" : "default"}
        />
      ))}

      <PageSection tone="band" border>
        <SectionTitle
          overline={FOUNDATION_ECOSYSTEM.overline}
          title={FOUNDATION_ECOSYSTEM.title}
        />
        <div className="mx-auto max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          {FOUNDATION_ECOSYSTEM.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionTitle overline="OUR APPROACH" title="From Need to Empowerment" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FOUNDATION_APPROACH.map((item, index) => (
            <GlowCard key={item.step} tone="gold" className="p-6">
              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-sm font-bold text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold uppercase tracking-wide text-foreground">{item.step}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </PageSection>

      <PageSection tone="muted">
        <SectionTitle
          overline={FOUNDATION_PHILOSOPHY_SECTION.overline}
          title={FOUNDATION_PHILOSOPHY_SECTION.title}
        />
        <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
          {FOUNDATION_PHILOSOPHY_SECTION.intro}
        </p>
        <ChecklistGrid items={FOUNDATION_PHILOSOPHY_SECTION.contributions} className="mt-10" />
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
          {FOUNDATION_PHILOSOPHY_SECTION.closing}
        </p>
      </PageSection>

      <PageSection>
        <SectionTitle overline={FOUNDATION_COMMITMENT.overline} title={FOUNDATION_COMMITMENT.title} />
        <div className="flex flex-wrap justify-center gap-2">
          {FOUNDATION_COMMITMENT.traits.map((trait) => (
            <span
              key={trait}
              className="rounded-full border border-border/70 bg-card/50 px-4 py-2 text-xs font-medium text-foreground md:text-sm"
            >
              {trait}
            </span>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
          {FOUNDATION_COMMITMENT.closing}
        </p>
      </PageSection>

      <PageSection tone="band">
        <SectionTitle overline={FOUNDATION_FUTURE.overline} title={FOUNDATION_FUTURE.title} />
        <ChecklistGrid items={FOUNDATION_FUTURE.visions} className="mx-auto max-w-4xl" />
      </PageSection>

      <PageSection>
        <PullQuote tone="gold" className="mx-auto max-w-3xl text-center">
          <p className="section-label">{FOUNDATION_NAME}</p>
          <h2 className="mt-4 text-2xl font-semibold md:text-3xl">{FOUNDATION_CLOSING.tagline}</h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            {FOUNDATION_CLOSING.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="mt-6 text-xs tracking-[0.16em] text-gold uppercase">
            {FOUNDATION_CLOSING.footerLine}
          </p>
          <p className="mt-4 text-sm font-medium text-foreground">{FOUNDATION_CLOSING.cta}</p>
          <SiteLinkButton to="/contact" variant="gold" size="lg" className="mt-8">
            Get In Touch <ArrowRight className="h-4 w-4" />
          </SiteLinkButton>
        </PullQuote>
      </PageSection>
    </div>
  );
}
