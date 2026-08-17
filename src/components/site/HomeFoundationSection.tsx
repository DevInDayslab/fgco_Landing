import {
  BookOpen,
  Cpu,
  GraduationCap,
  Heart,
  Lightbulb,
  Mic2,
  Palette,
  Shield,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GlowCard } from "@/components/site/GlowCard";
import { SiteLinkButton } from "@/components/site/SiteButton";
import { HeroAccent, PageSection, PullQuote, SectionTitle } from "@/components/site/PageLayout";
import {
  FOUNDATION_APPROACH,
  FOUNDATION_BELIEF,
  FOUNDATION_CLOSING,
  FOUNDATION_INITIATIVES,
  FOUNDATION_INTRO,
  FOUNDATION_MISSION,
  FOUNDATION_PHILOSOPHY,
  FOUNDATION_SUBTITLE,
  FOUNDATION_TAGLINE,
  FOUNDATION_VISION,
} from "@/data/foundation";

const initiativeIcons: LucideIcon[] = [
  Cpu,
  GraduationCap,
  Mic2,
  Users,
  Shield,
  Lightbulb,
  Palette,
  BookOpen,
];

export function HomeFoundationSection() {
  return (
    <PageSection tone="band" border className="relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-gold/5 blur-[100px]" />

      <SectionTitle
        overline="Social Impact"
        title={
          <>
            AP MEDIA <HeroAccent>Foundation</HeroAccent>
          </>
        }
        subtitle={FOUNDATION_TAGLINE}
      />

      <p className="mx-auto mt-2 max-w-3xl text-center text-xs font-medium tracking-[0.2em] text-gold uppercase">
        {FOUNDATION_SUBTITLE}
      </p>

      <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
        {FOUNDATION_INTRO} As part of FG Media Group, the Foundation brings together media,
        technology, education, awareness, and community participation to create opportunities for
        people who need support to move forward.
      </p>

      <PullQuote tone="gold" className="mx-auto mt-12 max-w-3xl">
        <p className="text-lg font-medium text-foreground md:text-xl">{FOUNDATION_PHILOSOPHY}</p>
      </PullQuote>

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
        <GlowCard tone="gold" className="p-8">
          <p className="section-label">Our Vision</p>
          <h3 className="fg-glow-card-title mt-3 text-xl font-semibold leading-snug">
            {FOUNDATION_VISION.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {FOUNDATION_VISION.paragraphs[0]}
          </p>
        </GlowCard>
        <GlowCard tone="gold" className="p-8">
          <p className="section-label">Our Mission</p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {FOUNDATION_MISSION.slice(0, 8).map((item) => (
              <li key={item} className="flex gap-2">
                <Heart className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlowCard>
      </div>

      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-gold/25 bg-gold/[0.06] px-6 py-5 text-center">
        <p className="text-sm font-semibold tracking-wide text-gold md:text-base">
          {FOUNDATION_BELIEF.join(" ")}
        </p>
      </div>

      <div className="mt-16">
        <h3 className="text-center text-2xl font-semibold md:text-3xl">
          What We <span className="italic fg-text-gradient-gold">Stand For</span>
        </h3>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FOUNDATION_INITIATIVES.map((item, index) => {
            const Icon = initiativeIcons[index] ?? Heart;
            return (
              <GlowCard key={item.title} as="article" tone="cyan" className="p-6">
                <span className="fg-icon-badge flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300">
                  <Icon className="h-5 w-5 text-sky-400" aria-hidden />
                </span>
                <h4 className="fg-glow-card-title mt-4 text-base font-semibold">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </GlowCard>
            );
          })}
        </div>
      </div>

      <div className="mt-16">
        <p className="section-label text-center">Our Approach</p>
        <h3 className="mt-3 text-center text-2xl font-semibold">Inform → Educate → Train → Empower</h3>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FOUNDATION_APPROACH.map((item, index) => (
            <GlowCard key={item.step} tone="cyan" className="p-6">
              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-sky-400/30 bg-sky-400/10 text-sm font-bold text-sky-400 transition-colors duration-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="fg-glow-card-title font-semibold uppercase tracking-wide text-foreground">
                    {item.step}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>

      <div className="fg-card fg-card-featured mx-auto mt-16 max-w-4xl rounded-3xl p-8 text-center md:p-12">
        <div className="fg-card-inner">
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {FOUNDATION_CLOSING.tagline} {FOUNDATION_CLOSING.paragraphs[0]}
          </p>
          <p className="mt-4 text-xs tracking-[0.18em] text-gold uppercase">
            {FOUNDATION_CLOSING.footerLine}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <SiteLinkButton to="/foundation" variant="goldOutline" size="lg">
              Explore the Foundation
            </SiteLinkButton>
            <SiteLinkButton to="/contact" variant="gold" size="lg">
              Partner With the Foundation
            </SiteLinkButton>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
