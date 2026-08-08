import { publications, type PublicationId } from "@/data/brands";

type PublicationLogoProps = {
  id: PublicationId;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: "h-10 max-w-[120px]",
  md: "h-16 max-w-[180px]",
  lg: "h-24 max-w-[240px]",
};

export function PublicationLogo({ id, size = "md", className = "" }: PublicationLogoProps) {
  const pub = publications[id];

  return (
    <img
      src={pub.logo}
      alt={pub.logoAlt}
      className={`w-auto object-contain ${sizes[size]} ${className}`}
    />
  );
}
