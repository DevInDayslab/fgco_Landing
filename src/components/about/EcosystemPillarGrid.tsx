import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Award,
  Car,
  Lock,
  Newspaper,
  Shield,
  ShoppingBag,
  Users,
} from "lucide-react";
import { cardLinkClass } from "@/components/site/PageLayout";
import { BrandLogo, type BrandLogoId } from "@/components/brand/BrandLogo";

export type EcosystemPillar = {
  title: string;
  tagline?: string;
  description: string;
  icon?: LucideIcon;
  brandLogoId?: BrandLogoId;
  to?: string;
  accent?: "gold" | "viera";
};

const accentClass = {
  gold: {
    icon: "text-gold",
    badge: "border-gold/30 bg-gold/10 text-gold",
    bar: "bg-gold/60",
    link: "text-gold",
    hover: "hover:border-gold/30 hover:shadow-[0_8px_32px_-12px_rgba(245,158,11,0.2)]",
  },
  viera: {
    icon: "text-viera",
    badge: "border-viera/30 bg-viera/10 text-viera",
    bar: "bg-viera/60",
    link: "text-viera",
    hover: "hover:border-viera/30 hover:shadow-[0_8px_32px_-12px_rgba(59,130,246,0.2)]",
  },
};

function PillarCard({
  index,
  pillar,
}: {
  index: number;
  pillar: EcosystemPillar;
}) {
  const accent = accentClass[pillar.accent ?? "gold"];
  const number = String(index).padStart(2, "0");
  const Icon = pillar.icon;

  const content = (
    <>
      <div className={`absolute inset-x-0 top-0 h-0.5 ${accent.bar} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
      <div className="fg-card-inner flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <span
            className={`inline-flex h-9 min-w-9 items-center justify-center rounded-lg border text-xs font-bold tabular-nums ${accent.badge}`}
          >
            {number}
          </span>
          {pillar.brandLogoId ? (
            <div className="flex h-14 items-center">
              <BrandLogo id={pillar.brandLogoId} size="sm" className="max-w-[7rem]" />
            </div>
          ) : Icon ? (
            <span className="fg-icon-badge flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
              <Icon className={`h-5 w-5 ${accent.icon}`} aria-hidden />
            </span>
          ) : null}
        </div>

        <h3 className="mt-5 text-lg font-bold leading-snug tracking-tight md:text-xl">
          {pillar.title}
        </h3>
        {pillar.tagline ? (
          <p className="mt-1.5 text-xs font-medium text-gold md:text-sm">{pillar.tagline}</p>
        ) : null}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {pillar.description}
        </p>

        {pillar.to ? (
          <span
            className={`mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide ${accent.link} transition-all group-hover:gap-2.5`}
          >
            Explore
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        ) : null}
      </div>
    </>
  );

  const className = `group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-background/40 transition-all duration-300 ${accent.hover}`;

  if (pillar.to) {
    return (
      <Link to={pillar.to} className={`${cardLinkClass()} ${className} !p-6 md:!p-7`}>
        {content}
      </Link>
    );
  }

  return <div className={`fg-card ${className} p-6 md:p-7`}>{content}</div>;
}

export function EcosystemPillarGrid({ pillars }: { pillars: EcosystemPillar[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {pillars.map((pillar, index) => (
        <PillarCard key={pillar.title} index={index + 1} pillar={pillar} />
      ))}
    </div>
  );
}

export const FG_ECOSYSTEM_PILLARS: EcosystemPillar[] = [
  {
    title: "Media & Journalism",
    description:
      "HIT NEWS, Happy India Times, Kurukshetra and AP MEDIA — multilingual platforms for news, knowledge, culture, civic issues, entrepreneurship and public engagement.",
    icon: Newspaper,
    to: "/media",
    accent: "gold",
  },
  {
    title: "Virtual Intelligence",
    tagline: "VIT & ViERA",
    description:
      "Human-centred digital intelligence in which a user's digital counterpart becomes an intelligent interface between the individual and the digital world.",
    brandLogoId: "viera",
    to: "/viera",
    accent: "viera",
  },
  {
    title: "InViGIL",
    tagline: "Intelligence Beyond Vision",
    description:
      "An emerging ecosystem for virtual intelligence, digital safety, security, investigation, intelligent interaction and virtual commerce.",
    icon: Shield,
    to: "/technology",
    accent: "viera",
  },
  {
    title: "Virtual Commerce",
    description:
      "Connecting creators, businesses, entrepreneurs and consumers through immersive and intelligent digital interactions — direct, transparent and accessible.",
    icon: ShoppingBag,
    to: "/technology",
    accent: "gold",
  },
  {
    title: "Social & Digital Empowerment",
    description:
      "Empowering farmers, rural entrepreneurs, creators and small businesses to present their products and capabilities to wider markets through digital platforms.",
    icon: Users,
    to: "/operations",
    accent: "gold",
  },
  {
    title: "Digital Safety & Cybersecurity",
    description:
      "Encryption, identity and facial-recognition concepts, fraud prevention, proactive threat detection and cyber-safety initiatives including Cyber Commandos.",
    icon: Lock,
    to: "/technology",
    accent: "viera",
  },
  {
    title: "Automotive & Safety Technologies",
    description:
      "Next-generation automotive technology integration, fleet tracking, virtual showrooms, and safety-oriented mobility solutions.",
    icon: Car,
    to: "/automobiles",
    accent: "gold",
  },
  {
    title: "Recognition & Excellence",
    tagline: "HIT ViERA National Awards",
    description:
      "Recognising extraordinary individuals and institutions and encouraging excellence across different fields.",
    icon: Award,
    to: "/awards",
    accent: "gold",
  },
];
