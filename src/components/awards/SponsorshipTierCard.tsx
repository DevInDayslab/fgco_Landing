import type { SponsorshipTierId } from "@/data/awards";
import { Check } from "lucide-react";

type Tier = {
  id: SponsorshipTierId;
  name: string;
  role: string;
  investment: string;
  spots: number;
  featured?: boolean;
  gradient: string;
  ring: string;
  benefits: string[];
};

type SponsorshipTierCardProps = {
  tier: Tier;
  selected: boolean;
  onSelect: (id: SponsorshipTierId) => void;
};

export function SponsorshipTierCard({ tier, selected, onSelect }: SponsorshipTierCardProps) {
  const featured = tier.featured;

  return (
    <button
      type="button"
      onClick={() => onSelect(tier.id)}
      className={`group relative flex h-full w-full flex-col rounded-2xl border p-6 text-left transition-all md:p-7 ${
        featured
          ? "border-gold/50 bg-gradient-to-b from-gold/[0.12] to-gold/[0.03]"
          : "border-border bg-card hover:border-gold/25"
      } ${selected ? "ring-2 ring-gold/50" : ""}`}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-0.5 text-[0.6rem] font-semibold tracking-[0.12em] text-primary-foreground uppercase">
          Title Sponsor
        </span>
      )}

      <div className="text-center">
        <p className="section-label">{tier.role}</p>
        <h3 className="mt-2 text-lg font-bold leading-snug md:text-xl">{tier.name}</h3>
        <p className="mt-4 text-3xl font-bold text-amber-400">{tier.investment}</p>
        <p className="mt-1 text-xs text-muted-foreground">
          {tier.spots} {tier.spots === 1 ? "Exclusive Spot" : "Spots"}
        </p>
      </div>

      <ul className="mt-6 flex-1 space-y-2.5 border-t border-border/50 pt-6">
        {tier.benefits.map((b) => (
          <li
            key={b}
            className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground"
          >
            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={2.5} />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <span
        className={`mt-6 block w-full rounded-xl py-3 text-center text-xs font-semibold transition-colors ${
          selected
            ? "bg-gold text-primary-foreground"
            : featured
              ? "border border-gold/50 text-gold group-hover:bg-gold/10"
              : "border border-border text-muted-foreground group-hover:border-gold/30 group-hover:text-gold"
        }`}
      >
        {selected ? "Selected" : "Select Tier"}
      </span>
    </button>
  );
}
