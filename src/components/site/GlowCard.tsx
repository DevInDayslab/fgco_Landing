import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

type GlowTone = "cyan" | "gold" | "viera";

const toneClass: Record<GlowTone, string> = {
  cyan: "fg-glow-card-cyan",
  gold: "fg-glow-card-gold",
  viera: "fg-glow-card-viera",
};

export function glowCardClass(tone: GlowTone = "cyan", className = "") {
  return `fg-card fg-glow-card ${toneClass[tone]} rounded-2xl ${className}`.trim();
}

function GlowDecor() {
  return (
    <>
      <span className="fg-glow-shine" aria-hidden />
      <span className="fg-glow-edge" aria-hidden />
    </>
  );
}

type GlowCardProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  tone?: GlowTone;
  as?: "div" | "article";
};

export function GlowCard({
  children,
  className = "",
  innerClassName = "",
  tone = "cyan",
  as: Tag = "div",
}: GlowCardProps) {
  return (
    <Tag className={glowCardClass(tone, className)}>
      <GlowDecor />
      <div className={`fg-card-inner relative z-[1] ${innerClassName}`.trim()}>{children}</div>
    </Tag>
  );
}

type GlowCardLinkProps = ComponentProps<typeof Link> & {
  children: ReactNode;
  tone?: GlowTone;
  className?: string;
  innerClassName?: string;
};

export function GlowCardLink({
  children,
  tone = "cyan",
  className = "",
  innerClassName = "",
  ...props
}: GlowCardLinkProps) {
  return (
    <Link className={`block fg-card-interactive ${glowCardClass(tone, className)}`} {...props}>
      <GlowDecor />
      <div className={`fg-card-inner relative z-[1] ${innerClassName}`.trim()}>{children}</div>
    </Link>
  );
}
