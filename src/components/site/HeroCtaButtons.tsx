import { Link } from "@tanstack/react-router";
import {
  Award,
  Briefcase,
  Car,
  Heart,
  Newspaper,
  Shield,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const heroLinks: {
  to: string;
  label: string;
  shortLabel: string;
  icon: LucideIcon;
  accent: "gold" | "viera";
}[] = [
  { to: "/awards", label: "HIT ViERA Awards", shortLabel: "Awards", icon: Award, accent: "gold" },
  {
    to: "/technology",
    label: "Explore InViGIL",
    shortLabel: "InViGIL",
    icon: Shield,
    accent: "viera",
  },
  { to: "/viera", label: "ViERA", shortLabel: "ViERA", icon: Sparkles, accent: "viera" },
  {
    to: "/publications",
    label: "Publications",
    shortLabel: "Publications",
    icon: Newspaper,
    accent: "gold",
  },
  {
    to: "/automobiles",
    label: "Automobiles",
    shortLabel: "Automobiles",
    icon: Car,
    accent: "gold",
  },
  {
    to: "/operations",
    label: "Operations",
    shortLabel: "Operations",
    icon: Briefcase,
    accent: "gold",
  },
  {
    to: "/foundation",
    label: "Foundation",
    shortLabel: "Foundation",
    icon: Heart,
    accent: "gold",
  },
];

const heroButtonClass =
  "min-h-[3rem] min-w-0 w-full px-3 py-2.5 text-xs sm:min-h-[3.125rem] sm:px-4 sm:text-sm md:w-auto md:min-w-[11rem] md:px-5";

export function HeroCtaButtons() {
  return (
    <div className="mx-auto mt-10 w-full max-w-md sm:max-w-2xl md:max-w-none">
      <div
        className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:flex md:flex-wrap md:items-stretch md:justify-center md:gap-3"
        role="navigation"
        aria-label="Explore FG Media"
      >
        {heroLinks.map(({ to, label, shortLabel, icon: Icon, accent }) => (
          <Link
            key={to}
            to={to}
            className={cn(
              "fg-hero-cta",
              accent === "viera" && "fg-hero-cta-viera",
              heroButtonClass,
            )}
          >
            <Icon className="relative z-[1] h-4 w-4 shrink-0" aria-hidden />
            <span className="relative z-[1] min-w-0 truncate md:hidden">{shortLabel}</span>
            <span className="relative z-[1] hidden min-w-0 md:inline">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
