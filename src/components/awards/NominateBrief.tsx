import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, MapPin, Sparkles } from "lucide-react";
import { HeroAccent } from "@/components/site/PageLayout";
import {
  AWARDS_TAGLINE,
  EVENT_LOCATION,
  excellenceAwards,
  selectionTimeline,
  signatureTiers,
} from "@/data/awards";

const champion = signatureTiers.find((t) => t.shortName === "Champion")!;
const pride = signatureTiers.find((t) => t.shortName === "Pride")!;
const chakra = signatureTiers.find((t) => t.shortName === "Chakra")!;

const processLabels = ["Nominations", "Verification", "Panel", "Jury"] as const;

const stats = [
  { value: "₹5L", label: "Top cash prize" },
  { value: `${excellenceAwards.length}+`, label: "Excellence awards" },
  { value: "4", label: "Review stages" },
] as const;

export function NominateBrief() {
  return (
    <div className="flex flex-col">
      <p className="section-label">Official Portal</p>
      <h1 className="fg-hero-title mt-4 text-3xl md:text-4xl lg:text-[2.75rem]">
        HIT Awards <HeroAccent>Nomination Portal</HeroAccent>
      </h1>

      <blockquote className="relative mt-8 border-l-4 border-gold/35 pl-6">
        <p className="text-lg leading-relaxed text-foreground/95 md:text-xl">
          {AWARDS_TAGLINE}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          National honours for individuals and organisations shaping India&apos;s future — reviewed
          by an independent jury in {EVENT_LOCATION}.
        </p>
      </blockquote>

      <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-4 py-2.5 text-xs text-gold">
        <MapPin className="h-3.5 w-3.5 shrink-0" />
        <span>HIT ViERA National Awards 2026 · {EVENT_LOCATION}</span>
      </div>

      {/* Tier podium */}
      <div className="relative mt-12">
        <div
          className="pointer-events-none absolute -inset-4 rounded-3xl bg-[radial-gradient(ellipse_at_50%_80%,rgba(209,176,117,0.12),transparent_70%)]"
          aria-hidden
        />
        <div className="relative flex flex-col items-center">
          <article className="w-full max-w-[220px] rounded-2xl border border-gold/45 bg-gradient-to-b from-gold/15 to-gold/[0.04] px-5 py-5 text-center shadow-[0_0_40px_-12px_rgba(209,176,117,0.35)]">
            <Sparkles className="mx-auto h-4 w-4 text-gold" />
            <p className="mt-2 text-[0.65rem] tracking-[0.2em] text-gold uppercase">Tier I</p>
            <p className="mt-1 text-xl font-bold">{champion.shortName}</p>
            <p className="mt-2 text-3xl font-bold text-gold">{champion.cashAward}</p>
          </article>

          <div className="mt-3 grid w-full grid-cols-2 gap-3">
            {[pride, chakra].map((tier) => (
              <article
                key={tier.tier}
                className="rounded-xl border border-border/80 bg-card/60 px-4 py-4 text-center backdrop-blur-sm"
              >
                <p className="text-[0.6rem] tracking-[0.18em] text-muted-foreground uppercase">
                  Tier {tier.tier === 2 ? "II" : "III"}
                </p>
                <p className="mt-1 text-base font-semibold">{tier.shortName}</p>
                <p className="mt-1 text-lg font-bold text-gold">
                  {tier.cashAward}
                  {tier.cashNote ? <span className="text-xs text-muted-foreground"> each</span> : null}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <dl className="mt-10 grid grid-cols-3 gap-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="fg-card rounded-xl px-3 py-4 text-center"
          >
            <div className="fg-card-inner">
            <dt className="text-xl font-bold text-gold md:text-2xl">{item.value}</dt>
            <dd className="mt-1 text-[0.65rem] leading-tight tracking-wide text-muted-foreground uppercase">
              {item.label}
            </dd>
            </div>
          </div>
        ))}
      </dl>

      {/* Process — minimal rail */}
      <div className="mt-10">
        <p className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
          From nomination to honour
        </p>
        <div className="mt-4 flex items-center gap-0">
          {selectionTimeline.map((item, i) => (
            <div key={item.step} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-[0.65rem] font-semibold text-gold">
                  {item.step}
                </span>
                <span className="max-w-[4.5rem] text-center text-[0.6rem] leading-tight text-muted-foreground">
                  {processLabels[i]}
                </span>
              </div>
              {i < selectionTimeline.length - 1 && (
                <div className="mx-1 h-px flex-1 bg-gradient-to-r from-gold/40 to-gold/10" aria-hidden />
              )}
            </div>
          ))}
        </div>
      </div>

      <Link
        to="/awards"
        className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-gold transition-opacity hover:opacity-80"
      >
        <Award className="h-4 w-4" />
        Explore the full awards programme
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
