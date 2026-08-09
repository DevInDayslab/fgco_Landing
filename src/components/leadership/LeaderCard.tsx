import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { LeaderProfile } from "@/data/leadership";
import { getLeaderPath } from "@/data/leadership";

const accentStyles = {
  ramesh: {
    ring: "ring-gold/20 group-hover:ring-gold/45",
    glow: "shadow-[0_12px_40px_-12px_rgba(245,158,11,0.35)]",
    gradient: "from-gold/25 via-transparent to-transparent",
    badge: "border-gold/35 bg-gold/10 text-gold",
    pill: "border-gold/25 bg-gold/[0.07] text-gold/90",
    cta: "text-gold",
  },
  roopa: {
    ring: "ring-gold/20 group-hover:ring-gold/45",
    glow: "shadow-[0_12px_40px_-12px_rgba(245,158,11,0.3)]",
    gradient: "from-gold/20 via-transparent to-transparent",
    badge: "border-gold/35 bg-gold/10 text-gold",
    pill: "border-gold/25 bg-gold/[0.07] text-gold/90",
    cta: "text-gold",
  },
  chandra: {
    ring: "ring-viera/20 group-hover:ring-viera/45",
    glow: "shadow-[0_12px_40px_-12px_rgba(59,130,246,0.3)]",
    gradient: "from-viera/25 via-transparent to-transparent",
    badge: "border-viera/35 bg-viera/10 text-viera",
    pill: "border-viera/25 bg-viera/[0.07] text-viera/90",
    cta: "text-viera",
  },
} as const;

function getAccent(id: string) {
  if (id === "chandra") return accentStyles.chandra;
  return accentStyles.ramesh;
}

function parseTags(tags?: string, limit = 3) {
  if (!tags) return [];
  return tags.split("·").map((t) => t.trim()).filter(Boolean).slice(0, limit);
}

export function LeaderCard({
  leader,
  variant = "portrait",
}: {
  leader: LeaderProfile;
  variant?: "portrait" | "row";
}) {
  const path = getLeaderPath(leader);
  const accent = getAccent(leader.id);
  const tagPills = parseTags(leader.tags, variant === "row" ? 4 : 3);

  if (variant === "row") {
    return (
      <Link
        to={path}
        className={`group fg-card fg-card-interactive relative block overflow-hidden rounded-3xl border border-border/60 transition-all duration-300 hover:-translate-y-0.5 ${accent.glow}`}
      >
        <div className="fg-card-inner grid gap-0 md:grid-cols-[minmax(13rem,16rem)_1fr]">
          <div className="relative overflow-hidden bg-gradient-to-b from-accent/30 to-background md:min-h-[18rem]">
            <img
              src={leader.image}
              alt={leader.imageAlt}
              className={`h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] md:h-full md:min-h-[18rem] ${leader.imageClassName ?? "object-top"}`}
            />
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${accent.gradient} via-background/10 to-transparent`}
            />
            <span
              className={`absolute bottom-4 left-4 rounded-full border px-3 py-1 text-[0.6rem] font-semibold tracking-[0.18em] uppercase backdrop-blur-sm ${accent.badge}`}
            >
              {leader.role}
            </span>
          </div>

          <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
            <p className="font-mono text-[0.65rem] tracking-wide text-muted-foreground/70">
              fgco.in/{leader.slug}
            </p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">{leader.name}</h3>
            <p className="mt-2 text-sm font-medium italic text-gold md:text-base">
              {leader.shortHeadline}
            </p>
            <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              {leader.shortBio}
            </p>

            {tagPills.length > 0 ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {tagPills.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full border px-2.5 py-1 text-[0.65rem] font-medium ${accent.pill}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            <span
              className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${accent.cta} transition-all group-hover:gap-3`}
            >
              View full profile
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={path}
      className={`group fg-card fg-card-interactive relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 transition-all duration-300 hover:-translate-y-1 ${accent.glow}`}
    >
      <div className="fg-card-inner flex h-full flex-col">
        <div className="relative overflow-hidden">
          <div className="aspect-[4/5] overflow-hidden bg-gradient-to-b from-accent/40 to-background">
            <img
              src={leader.image}
              alt={leader.imageAlt}
              className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] ${leader.imageClassName ?? "object-top"}`}
            />
          </div>
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent`}
          />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <span
              className={`inline-flex rounded-full border px-3 py-1 text-[0.6rem] font-semibold tracking-[0.18em] uppercase backdrop-blur-md ${accent.badge}`}
            >
              {leader.role}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5 md:p-6">
          <p className="font-mono text-[0.6rem] tracking-wide text-muted-foreground/60">
            fgco.in/{leader.slug}
          </p>
          <h3 className="mt-2 text-xl font-bold leading-tight tracking-tight md:text-2xl">
            {leader.name}
          </h3>
          <p className="mt-2 text-sm font-medium italic leading-snug text-gold">
            {leader.shortHeadline}
          </p>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-4">
            {leader.shortBio}
          </p>

          {tagPills.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {tagPills.map((tag) => (
                <span
                  key={tag}
                  className={`rounded-full border px-2 py-0.5 text-[0.6rem] font-medium leading-relaxed ${accent.pill}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          <div
            className={`mt-5 flex items-center justify-between border-t border-border/60 pt-4 text-sm font-semibold ${accent.cta}`}
          >
            <span>View profile</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
