import { Link } from "@tanstack/react-router";
import { Trophy } from "lucide-react";
import { signatureTiers } from "@/data/awards";

export function SignatureSpotlight() {
  return (
    <section className="border-b border-border bg-surface/30 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="section-label">National Recognition</p>
          <h2 className="mt-3 text-3xl md:text-4xl">
            Signature Award <span className="italic fg-text-gradient-gold">Tiers</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Three tiers of national honour — cash awards, trophies, and lifetime recognition across
            India.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {signatureTiers.map((tier) => (
            <article
              key={tier.shortName}
              className={`fg-card rounded-2xl p-6 md:p-8 ${tier.accent} ${
                tier.featured ? "fg-card-featured md:-translate-y-2" : ""
              }`}
            >
              <div className="fg-card-inner text-center">
                <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[0.65rem] font-semibold tracking-widest text-gold uppercase">
                  Tier {tier.tier}
                </span>
                <Trophy className="mx-auto mt-4 h-8 w-8 text-gold drop-shadow-[0_0_12px_rgba(245,158,11,0.35)]" />
                <h3 className="mt-4 text-xl">{tier.shortName}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{tier.subtitle}</p>
                <p className="fg-stat mt-5 text-3xl fg-text-gradient-gold md:text-4xl">
                  {tier.cashAward}
                  {"cashNote" in tier && tier.cashNote && (
                    <span className="text-sm text-muted-foreground"> {tier.cashNote}</span>
                  )}
                </p>
                <p className="mt-2 text-xs tracking-widest text-muted-foreground uppercase">
                  Cash Award
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm">
          <Link to="/nominate" className="font-semibold text-gold hover:underline">
            Submit your nomination →
          </Link>
        </p>
      </div>
    </section>
  );
}
