import { createFileRoute } from "@tanstack/react-router";
import { AwardTierComparison } from "@/components/awards/AwardTierComparison";
import { SignatureSpotlight } from "@/components/awards/SignatureSpotlight";
import { CtaRow } from "@/components/awards/CtaRow";
import { ExcellenceMarquee } from "@/components/awards/ExcellenceMarquee";
import { InfluencerBlock } from "@/components/awards/InfluencerBlock";
import { PageHero } from "@/components/awards/PageHero";
import { ProcessTimeline } from "@/components/awards/ProcessTimeline";
import { SectionHeader } from "@/components/awards/SectionHeader";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { AWARDS_TAGLINE, evaluationCriteria, excellenceAwards } from "@/data/awards";
import { HeroAccent } from "@/components/site/PageLayout";
import { CheckCircle } from "lucide-react";

export const Route = createFileRoute("/awards")({
  head: () => ({
    meta: [
      { title: "HIT ViERA National Awards 2026 — FG Media Group" },
      {
        name: "description",
        content:
          "HIT ViERA National Awards 2026 & InViGIL Global Launch Event in Bengaluru. Recognising excellence across India.",
      },
      { property: "og:title", content: "HIT ViERA National Awards 2026" },
      { property: "og:description", content: AWARDS_TAGLINE },
    ],
  }),
  component: Awards,
});

function Awards() {
  return (
    <>
      <PageHero
        variant="awards"
        align="center"
        overline="HIT ViERA National Awards 2026"
        title={
          <>
            Recognising Excellence. <HeroAccent>Celebrating Vision.</HeroAccent>
          </>
        }
        subtitle="HIT ViERA National Awards 2026 & InViGIL Global Launch Event — Bengaluru, Karnataka."
        showEventBar
      >
        <div className="mb-8 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          <BrandLogo id="hitNews" size="sm" />
          <span className="text-xl font-light text-muted-foreground">×</span>
          <BrandLogo id="viera" size="sm" />
        </div>
        <CtaRow
          primary={{ to: "/nominate", label: "Submit Nomination" }}
          secondary={{ to: "/sponsorship", label: "Sponsorship Tiers" }}
          className="justify-center"
        />
      </PageHero>

      <SignatureSpotlight />

      <section className="border-y border-border bg-surface/50 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            overline="Signature Awards"
            title={
              <>
                Awards <span className="italic text-gold">Hierarchy</span>
              </>
            }
            description="Three tiers of national recognition — compare full benefits and nominate for the honour that fits your achievement."
            className="mx-auto text-center"
          />
          <div className="mt-12 lg:mt-14">
            <AwardTierComparison />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <SectionHeader
          overline="Excellence Awards"
          title={
            <>
              30 Categories of <span className="italic text-gold">Excellence</span>
            </>
          }
          description="From entrepreneurship and technology to healthcare, heritage, media and public service — excellence recognised across India."
          className="mx-auto max-w-7xl px-6 text-center"
        />
        <div className="mt-10">
          <ExcellenceMarquee />
        </div>
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-3 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {excellenceAwards.map((award) => (
            <div
              key={award}
              className="fg-card fg-card-interactive rounded-xl px-4 py-3.5 text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              <div className="fg-card-inner">{award}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <InfluencerBlock />
      </section>

      <section className="border-y border-border bg-surface/40 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            overline="Selection Process"
            title={
              <>
                Transparent <span className="italic text-gold">Evaluation</span>
              </>
            }
            description="The HIT ViERA National Awards uphold the highest standards of transparency, integrity and credibility through a rigorous multi-stage evaluation process."
          />
          <div className="mt-10">
            <ProcessTimeline />
          </div>

          <div className="fg-card mt-14 rounded-3xl p-8 md:p-10">
            <div className="fg-card-inner">
            <h3 className="text-2xl text-foreground md:text-3xl">
              What the Assessment Includes
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Every nomination is reviewed across the following dimensions. The decision of the
              National Jury is final and binding.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {evaluationCriteria.map((item) => (
                <li key={item} className="fg-card rounded-xl px-4 py-3 text-sm text-muted-foreground">
                  <div className="fg-card-inner flex items-start gap-2.5">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{item}</span>
                  </div>
                </li>
              ))}
            </ul>
            </div>
          </div>

          <div className="fg-card fg-card-featured mt-10 rounded-3xl p-8 md:p-10">
            <div className="fg-card-inner">
            <p className="section-label">Grand Awards Ceremony</p>
            <h3 className="mt-3 text-2xl md:text-3xl">
              Hosted in <span className="italic text-gold">Bengaluru, Karnataka</span>
            </h3>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              The HIT ViERA National Awards 2026 brings together distinguished personalities from
              Government, Industry, Business, Academia, Science, Technology, Defence, Media, Arts,
              Sports and Civil Society — celebrating excellence, recognising transformative
              leadership and inspiring future generations of innovators and nation builders.
            </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28 pt-20">
        <div className="fg-card fg-card-featured rounded-3xl p-10 text-center md:p-14">
          <div className="fg-card-inner">
          <h2 className="text-3xl md:text-4xl">Nominate. Inspire. Lead.</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Join an inspiring community of exceptional leaders, innovators and changemakers who are
            shaping the future of India. Be Recognised.
          </p>
          <CtaRow
            primary={{ to: "/nominate", label: "Submit Nomination" }}
            secondary={{ to: "/sponsorship", label: "View Sponsorship" }}
            className="mt-8 justify-center"
          />
          </div>
        </div>
      </section>
    </>
  );
}
