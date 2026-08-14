import { logos, type BrandLogoId } from "@/data/brands";

export type { BrandLogoId };

type BrandLogoProps = {
  id: BrandLogoId;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
};

const altText: Record<BrandLogoId, string> = {
  fgGroup: "FG Media Group",
  fitGaadi: "FitGaadi — Vehicle Doctor",
  invigil: "InViGIL",
  viera: "ViERA",
  hitNews: "HIT News",
  happyIndiaTimes: "Happy India Times",
  kurukshetra: "Kurukshetra",
};

const sizes = {
  xs: "h-6 max-w-[72px]",
  sm: "h-10 max-w-[120px]",
  md: "h-16 max-w-[180px]",
  lg: "h-24 max-w-[240px]",
  xl: "h-32 max-w-[320px]",
};

const invigilSizes = {
  xs: "h-8 max-w-[88px]",
  sm: "h-12 max-w-[144px]",
  md: "h-20 max-w-[220px]",
  lg: "h-28 max-w-[300px]",
  xl: "h-36 max-w-[400px]",
};

export function BrandLogo({ id, size = "md", className = "" }: BrandLogoProps) {
  const sizeClass = id === "invigil" ? invigilSizes[size] : sizes[size];
  const shapeClass = id === "invigil" ? "rounded-xl" : "";

  return (
    <img
      src={logos[id]}
      alt={altText[id]}
      className={`w-auto object-contain ${sizeClass} ${shapeClass} ${className}`}
    />
  );
}
