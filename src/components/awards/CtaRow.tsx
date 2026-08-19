import { ArrowRight } from "lucide-react";
import { SiteLinkButton } from "@/components/site/SiteButton";
import type { SiteButtonSize } from "@/lib/site-buttons";

type CtaRowProps = {
  primary?: { to: string; label: string; variant?: "gold" | "viera"; hash?: string };
  secondary?: { to: string; label: string; hash?: string };
  className?: string;
  size?: SiteButtonSize;
};

export function CtaRow({ primary, secondary, className = "", size = "md" }: CtaRowProps) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 ${className}`}>
      {primary && (
        <SiteLinkButton
          to={primary.to}
          hash={primary.hash}
          variant={primary.variant ?? "gold"}
          size={size}
          className="min-w-[10.5rem] justify-center"
        >
          {primary.label} <ArrowRight className="h-4 w-4" />
        </SiteLinkButton>
      )}
      {secondary && (
        <SiteLinkButton
          to={secondary.to}
          hash={secondary.hash}
          variant="outline"
          size={size}
          className="min-w-[10.5rem] justify-center"
        >
          {secondary.label}
        </SiteLinkButton>
      )}
    </div>
  );
}
