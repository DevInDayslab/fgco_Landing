import { fgBrand } from "@/data/brands";

type FgLogoProps = {
  size?: "sm" | "md" | "lg";
  /** Show MEDIA · TECHNOLOGY below the logo */
  showTagline?: boolean;
  align?: "start" | "center";
  className?: string;
};

const sizes = {
  sm: { img: "h-8", tagline: "text-[0.55rem]" },
  md: { img: "h-10", tagline: "text-[0.6rem]" },
  lg: { img: "h-12", tagline: "text-[0.65rem]" },
};

export function FgLogo({
  size = "md",
  showTagline = false,
  align = "start",
  className = "",
}: FgLogoProps) {
  const s = sizes[size];

  return (
    <span
      className={`flex flex-col gap-1.5 ${align === "center" ? "items-center" : "items-start"} ${className}`}
    >
      <img
        src={fgBrand.logo}
        alt={fgBrand.logoAlt}
        className={`${s.img} w-auto object-contain`}
      />
      {showTagline && (
        <span
          className={`${s.tagline} font-medium tracking-[0.22em] text-muted-foreground uppercase`}
        >
          {fgBrand.tagline}
        </span>
      )}
    </span>
  );
}
