import { Check, Sparkles } from "lucide-react";
import { SiteLinkButton } from "@/components/site/SiteButton";
import type { SponsorshipTierId } from "@/data/awards";
import {
  circleOfExcellenceBenefits,
  CIRCLE_OF_EXCELLENCE_HASH,
  leadershipMeets,
} from "@/data/circle-of-excellence";

type CircleOfExcellenceSectionProps = {
  circleTier: {
    id: SponsorshipTierId;
    name: string;
    role: string;
    investment: string;
    spots: number;
    benefits: string[];
  };
  selected: boolean;
  onSelect: (id: SponsorshipTierId) => void;
};

export function CircleOfExcellenceSection({
  circleTier,
  selected,
  onSelect,
}: CircleOfExcellenceSectionProps) {
  return (
    <section
      id={CIRCLE_OF_EXCELLENCE_HASH}
      className="scroll-mt-24 border-b border-border/60 py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label">Beyond Corporate Sponsorship</p>
          <h2 className="mt-3 text-3xl leading-tight md:text-4xl lg:text-5xl">
            Join the <span className="italic fg-text-gradient-gold">Circle of Excellence</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            A standalone path for leaders and organisations who want enduring connection with the
            HIT ViERA network — designed to encourage wider participation at a accessible entry
            level.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_minmax(280px,340px)] lg:items-start lg:gap-14">
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-viera" />
                <p className="text-xs font-semibold tracking-[0.18em] text-viera uppercase">
                  Enduring Connections
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Receiving a HIT ViERA National Award is not the end of the relationship — it is the
                beginning. Circle members gain access to leadership interaction, networking,
                mentorship and national visibility across the HIT ViERA ecosystem.
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {circleOfExcellenceBenefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-viera" strokeWidth={2.5} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">
                National Leadership Meets
              </p>
              <div className="mt-4 divide-y divide-border/60 border-y border-border/60">
                {leadershipMeets.map((meet) => (
                  <div
                    key={meet.city}
                    className="flex flex-col gap-0.5 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                  >
                    <span className="text-sm font-semibold text-viera">{meet.city}</span>
                    <span className="text-sm text-muted-foreground">{meet.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <SiteLinkButton to="/nominate" variant="vieraOutline" size="md">
                Nominate an Achiever
              </SiteLinkButton>
              <SiteLinkButton to="/awards" variant="outline" size="md">
                Explore Awards
              </SiteLinkButton>
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <div
              className={`rounded-2xl border p-6 md:p-8 transition-all ${
                selected
                  ? "border-viera/50 bg-viera/[0.08] ring-2 ring-viera/30"
                  : "border-viera/25 bg-gradient-to-b from-viera/[0.06] to-transparent"
              }`}
            >
              <p className="text-[0.65rem] font-semibold tracking-[0.2em] text-viera uppercase">
                {circleTier.role}
              </p>
              <h3 className="mt-2 text-xl font-bold leading-snug">{circleTier.name}</h3>

              <p className="mt-6 text-4xl font-black tracking-tight text-amber-400">
                {circleTier.investment}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {circleTier.spots} membership spots · separate from corporate tiers
              </p>

              <ul className="mt-6 space-y-2 border-t border-border/50 pt-6">
                {circleTier.benefits.slice(0, 4).map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={2.5} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => onSelect(circleTier.id)}
                className={`mt-8 w-full rounded-xl py-3.5 text-sm font-semibold transition-colors ${
                  selected
                    ? "bg-viera text-white"
                    : "border border-viera/40 text-viera hover:bg-viera/10"
                }`}
              >
                {selected ? "Selected — continue below" : "Join the Circle of Excellence"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
