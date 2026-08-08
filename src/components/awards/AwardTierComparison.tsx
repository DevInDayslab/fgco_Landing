import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { signatureTiers } from "@/data/awards";

export function AwardTierComparison({ showCta = true }: { showCta?: boolean }) {
  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-3">
      {signatureTiers.map((tier) => {
        const featured = tier.featured;

        return (
          <article
            key={tier.tier}
            className={`relative flex flex-col rounded-2xl p-6 md:p-8 ${
              featured
                ? "fg-card fg-card-featured fg-card-interactive lg:-mt-2 lg:mb-2 lg:scale-[1.02]"
                : "fg-card fg-card-interactive"
            }`}
          >
            <div className="fg-card-inner flex flex-col flex-1">
              {featured && (
                <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-[0.65rem] font-semibold tracking-[0.15em] text-primary-foreground uppercase shadow-[0_4px_16px_rgba(245,158,11,0.4)]">
                  Highest Honour
                </span>
              )}

              <div className="text-center">
                <p className="section-label">{tier.shortName}</p>
                <h3 className="mt-2 text-xl leading-snug md:text-2xl">{tier.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{tier.subtitle}</p>
              </div>

              <div className="my-6 border-t border-border/60 pt-6 text-center">
                <p className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                  Cash Award
                </p>
                <p className="mt-1 text-4xl text-gold md:text-5xl">{tier.cashAward}</p>
                {"cashNote" in tier && tier.cashNote && (
                  <p className="mt-1 text-xs text-muted-foreground">{tier.cashNote}</p>
                )}
              </div>

              <ul className="flex-1 space-y-3">
                {tier.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {showCta && (
                <Link
                  to="/nominate"
                  className={`mt-8 block w-full rounded-xl py-3.5 text-center text-sm font-semibold transition-all hover:opacity-90 ${
                    featured
                      ? "bg-gold text-primary-foreground shadow-[0_4px_20px_rgba(245,158,11,0.35)]"
                      : "border border-gold/40 text-gold hover:bg-gold/10"
                  }`}
                >
                  Nominate Now
                </Link>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
