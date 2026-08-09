import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import heroOffice from "@/assets/hero_office.jpg";
import { MapPin } from "lucide-react";

export type CardVariant = "default" | "viera" | "featured" | "stat";
export type HeroTone = "gold" | "viera";
export type HeroSize = "standard" | "large" | "compact";

const cardVariantClass: Record<CardVariant, string> = {
  default: "fg-card",
  viera: "fg-card fg-card-viera",
  featured: "fg-card fg-card-featured",
  stat: "fg-card fg-card-stat",
};

const heroToneGlow: Record<HeroTone, string> = {
  gold: "bg-[radial-gradient(ellipse_at_50%_0%,rgba(209,176,117,0.12),transparent_60%)]",
  viera: "bg-[radial-gradient(ellipse_at_50%_0%,rgba(59,130,246,0.14),transparent_60%)]",
};

const heroToneBlur: Record<HeroTone, string> = {
  gold: "bg-gold/5",
  viera: "bg-viera/8",
};

const heroSizeClass: Record<HeroSize, { section: string; inner: string }> = {
  standard: {
    section: "min-h-[min(58vh,540px)]",
    inner: "min-h-[min(58vh,540px)] py-20 md:py-24",
  },
  large: {
    section: "min-h-[min(70vh,600px)]",
    inner: "min-h-[min(70vh,600px)] py-20 md:py-24",
  },
  compact: {
    section: "",
    inner: "py-10 md:py-14 lg:py-16",
  },
};

const heroTitleClass: Record<HeroSize, string> = {
  standard: "fg-hero-title text-4xl md:text-5xl lg:text-6xl",
  large: "fg-hero-title text-5xl md:text-6xl lg:text-7xl",
  compact: "fg-hero-title text-4xl md:text-5xl lg:text-6xl",
};

export function HeroAccent({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`fg-hero-accent ${className}`}>{children}</span>;
}

export function HeroBackdrop({
  image = heroOffice,
  imageOpacity = "opacity-20",
  tone = "gold",
  showPattern = true,
  showBlur = true,
}: {
  image?: string;
  imageOpacity?: string;
  tone?: HeroTone;
  showPattern?: boolean;
  showBlur?: boolean;
}) {
  return (
    <>
      <img
        src={image}
        alt=""
        aria-hidden
        width={1920}
        height={1080}
        className={`pointer-events-none absolute inset-0 h-full w-full object-cover ${imageOpacity}`}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background" />
      {showPattern && <div className="pointer-events-none absolute inset-0 fg-hero-pattern" />}
      <div className={`pointer-events-none absolute inset-0 ${heroToneGlow[tone]}`} />
      {showBlur && (
        <div
          className={`pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] ${heroToneBlur[tone]}`}
        />
      )}
    </>
  );
}

export function SitePageHero({
  overline,
  title,
  subtitle,
  image = heroOffice,
  imageOpacity = "opacity-20",
  tone = "gold",
  align = "center",
  size = "standard",
  leading,
  badge,
  showEventBar = false,
  showPattern = true,
  className = "",
  children,
}: {
  overline?: string;
  title?: ReactNode;
  subtitle?: string;
  image?: string;
  imageOpacity?: string;
  tone?: HeroTone;
  align?: "left" | "center";
  size?: HeroSize;
  leading?: ReactNode;
  badge?: ReactNode;
  showEventBar?: boolean;
  showPattern?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  const isCenter = align === "center";
  const sizeStyles = heroSizeClass[size];

  return (
    <section
      className={`relative overflow-hidden border-b border-border ${sizeStyles.section} ${className}`}
    >
      <HeroBackdrop
        image={image}
        imageOpacity={imageOpacity}
        tone={tone}
        showPattern={showPattern}
        showBlur={size !== "compact"}
      />

      <div
        className={`relative mx-auto flex max-w-7xl flex-col justify-center px-6 ${sizeStyles.inner} ${
          isCenter ? "items-center text-center" : ""
        }`}
      >
        {leading}
        {badge}
        {overline && <p className="section-label">{overline}</p>}
        {title && (
          <h1
            className={`${heroTitleClass[size]} ${overline ? "mt-4" : ""} ${
              isCenter ? "max-w-4xl" : "max-w-3xl"
            }`}
          >
            {title}
          </h1>
        )}
        {subtitle && (
          <p
            className={`mt-5 text-base leading-relaxed text-muted-foreground md:text-lg ${
              isCenter ? "max-w-2xl" : "max-w-xl"
            }`}
          >
            {subtitle}
          </p>
        )}
        {showEventBar && (
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-5 py-2 text-sm text-gold">
            <MapPin className="h-4 w-4" />
            Hosted in Bengaluru, Karnataka
          </div>
        )}
        {children && (
          <div className={`mt-8 ${isCenter ? "flex flex-wrap justify-center gap-4" : ""}`}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

export function SectionTitle({
  overline,
  title,
  description,
  centered = true,
  className = "",
  accent = true,
}: {
  overline?: string;
  title: ReactNode;
  description?: string;
  centered?: boolean;
  className?: string;
  accent?: boolean;
}) {
  return (
    <div className={`mb-12 md:mb-14 ${centered ? "text-center" : ""} ${className}`}>
      {overline && <p className="section-label">{overline}</p>}
      <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl">{title}</h2>
      {accent && (
        <div
          className={`mt-4 h-1 w-24 rounded-full bg-gold ${centered ? "mx-auto" : ""}`}
        />
      )}
      {description && (
        <p
          className={`mt-5 text-sm leading-relaxed text-muted-foreground md:text-base ${
            centered ? "mx-auto max-w-3xl" : "max-w-3xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export type SectionTone = "default" | "muted" | "band" | "viera-band";

const sectionToneClass: Record<SectionTone, string> = {
  default: "",
  muted: "bg-surface/35",
  band: "border-y border-border bg-gradient-to-b from-surface/60 to-transparent",
  "viera-band": "border-y border-border bg-gradient-to-b from-viera/[0.06] to-transparent",
};

export function PageSection({
  children,
  className = "",
  border = false,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  border?: boolean;
  tone?: SectionTone;
}) {
  return (
    <section
      className={`mx-auto max-w-7xl px-6 py-16 md:py-20 ${border ? "border-y border-border" : ""} ${sectionToneClass[tone]} ${className}`}
    >
      {children}
    </section>
  );
}

export function PageHeader({
  icon: Icon,
  iconClass = "text-gold",
  overline,
  title,
  subtitle,
  centered = true,
  children,
}: {
  icon?: LucideIcon;
  iconClass?: string;
  overline?: string;
  title: ReactNode;
  subtitle?: string;
  centered?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className={`mb-14 md:mb-16 ${centered ? "text-center" : ""}`}>
      {overline && <p className="section-label">{overline}</p>}
      {Icon && (
        <Icon
          className={`mx-auto mb-6 h-16 w-16 drop-shadow-[0_0_20px_rgba(209,176,117,0.3)] ${centered ? "" : "mb-4"} ${iconClass}`}
        />
      )}
      <h1
        className={`text-4xl leading-tight md:text-5xl lg:text-6xl ${overline ? "mt-4" : ""}`}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed text-muted-foreground md:text-lg ${centered ? "mx-auto max-w-3xl" : "max-w-3xl"}`}
        >
          {subtitle}
        </p>
      )}
      {children && <div className={`mt-8 ${centered ? "flex justify-center" : ""}`}>{children}</div>}
    </div>
  );
}

export function ContentCard({
  children,
  className = "",
  hover = true,
  variant = "default",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: CardVariant;
  as?: "div" | "article";
}) {
  return (
    <Tag
      className={`rounded-2xl p-6 md:p-8 ${cardVariantClass[variant]} ${hover ? "fg-card-interactive" : ""} ${className}`}
    >
      <div className="fg-card-inner">{children}</div>
    </Tag>
  );
}

export function IconBadge({
  icon: Icon,
  className = "text-gold",
  size = "md",
  variant = "default",
}: {
  icon: LucideIcon;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "viera";
}) {
  const sizeClass =
    size === "sm" ? "h-10 w-10 rounded-lg" : size === "lg" ? "h-16 w-16 rounded-xl" : "h-12 w-12 rounded-xl";
  const iconSize = size === "sm" ? "h-4 w-4" : size === "lg" ? "h-8 w-8" : "h-5 w-5";

  return (
    <span
      className={`fg-icon-badge ${variant === "viera" ? "fg-icon-badge-viera" : ""} ${sizeClass}`}
    >
      <Icon className={`${iconSize} ${className}`} />
    </span>
  );
}

/** Card shell for link-wrapped cards (ecosystem, operations, etc.) */
export function cardLinkClass(variant: CardVariant = "default") {
  return `block rounded-2xl p-6 md:p-8 ${cardVariantClass[variant]} fg-card-interactive`;
}

/** Open prose block — centered narrative without a card shell */
export function ProseBlock({
  children,
  className = "",
  centered = true,
}: {
  children: ReactNode;
  className?: string;
  centered?: boolean;
}) {
  return (
    <div
      className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {children}
    </div>
  );
}

/** Feature list row — icon + title + body, divider only */
export function FeatureList({
  items,
  icon: Icon,
  iconClass = "text-gold",
  columns = 1,
}: {
  items: { title: string; text: string }[];
  icon?: LucideIcon;
  iconClass?: string;
  columns?: 1 | 2;
}) {
  return (
    <div
      className={`divide-y divide-border/70 ${columns === 2 ? "md:grid md:grid-cols-2 md:divide-y-0 md:gap-x-10" : ""}`}
    >
      {items.map((item) => (
        <div
          key={item.title}
          className={`flex gap-4 py-5 md:py-6 ${columns === 2 ? "md:border-b md:border-border/50 md:last:border-0" : ""}`}
        >
          {Icon && (
            <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${iconClass}`} aria-hidden />
          )}
          <div>
            <h3 className="font-semibold text-foreground">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Minimal checklist — no card per item */
export function ChecklistGrid({
  items,
  icon: Icon,
  iconClass = "text-gold",
  columns = 2,
}: {
  items: string[];
  icon?: LucideIcon;
  iconClass?: string;
  columns?: 2 | 3;
}) {
  const colClass = columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2";
  return (
    <ul className={`grid gap-x-8 gap-y-3 ${colClass}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm text-muted-foreground">
          {Icon ? (
            <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${iconClass}`} aria-hidden />
          ) : (
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
          )}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Pull quote / highlight band without card chrome */
export function PullQuote({
  children,
  tone = "viera",
  className = "",
}: {
  children: ReactNode;
  tone?: "gold" | "viera";
  className?: string;
}) {
  const border = tone === "gold" ? "border-gold/50" : "border-viera/50";
  const glow = tone === "gold" ? "from-gold/8" : "from-viera/10";
  return (
    <div
      className={`relative border-l-4 ${border} pl-6 md:pl-10 py-2 ${className}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r ${glow} to-transparent`}
        aria-hidden
      />
      {children}
    </div>
  );
}

/** Horizontal step flow — open layout */
export function StepFlow({
  steps,
  className = "",
}: {
  steps: string[];
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-2 md:gap-3 ${className}`}>
      {steps.map((step, i) => (
        <span key={`${step}-${i}`} className="flex items-center gap-2">
          <span className="rounded-full border border-border/80 bg-background/40 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-foreground uppercase md:text-sm">
            {step}
          </span>
          {i < steps.length - 1 && (
            <span className="text-gold/40" aria-hidden>→</span>
          )}
        </span>
      ))}
    </div>
  );
}

/** Tag cloud — pills without wrapping section in a card */
export function TagCloud({
  tags,
  tone = "viera",
  className = "",
}: {
  tags: string[];
  tone?: "gold" | "viera";
  className?: string;
}) {
  const pill =
    tone === "gold"
      ? "border-gold/30 bg-gold/10 text-gold"
      : "border-viera/30 bg-viera/10 text-viera";
  return (
    <div className={`flex flex-wrap justify-center gap-2 md:gap-3 ${className}`}>
      {tags.map((tag) => (
        <span
          key={tag}
          className={`rounded-full border px-4 py-2 text-sm font-medium ${pill}`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

/** Split editorial columns */
export function SplitColumns({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`grid gap-10 lg:grid-cols-2 lg:gap-16 ${className}`}>
      {children}
    </div>
  );
}

/** Numbered pillar column — open, not a card */
export function NumberedItem({
  index,
  title,
  subtitle,
  tagline,
  description,
  highlight = false,
  logo,
}: {
  index: number;
  title: string;
  subtitle?: string;
  tagline?: string;
  description: string;
  highlight?: boolean;
  logo?: ReactNode;
}) {
  return (
    <div
      className={`border-t border-border pt-8 first:border-t-0 first:pt-0 md:border-t-0 md:pt-0 md:pl-8 md:first:pl-0 md:border-l ${highlight ? "md:border-gold/30" : "md:border-border/60"}`}
    >
      {logo ? <div className="mb-4 flex h-12 items-center">{logo}</div> : null}
      <span className="text-3xl font-bold tabular-nums text-muted-foreground/40">
        {String(index).padStart(2, "0")}
      </span>
      {subtitle && <p className="section-label mt-4">{subtitle}</p>}
      <h3 className="mt-2 text-2xl font-bold">{title}</h3>
      {tagline && <p className="mt-2 text-sm text-gold">{tagline}</p>}
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

/** Comparison table — light border, no heavy card shell */
export function CompareTable({
  headers,
  rows,
  highlightCol = 1,
}: {
  headers: string[];
  rows: string[][];
  highlightCol?: number;
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border/80">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-surface/50 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
            {headers.map((h, i) => (
              <th
                key={h}
                className={`px-5 py-4 font-medium md:px-6 ${i === highlightCol ? "text-viera" : ""}`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-b border-border/70 last:border-0">
              {row.map((cell, i) => (
                <td
                  key={i}
                  className={`px-5 py-4 md:px-6 ${i === 0 ? "text-muted-foreground" : i === highlightCol ? "text-foreground" : "text-muted-foreground"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
