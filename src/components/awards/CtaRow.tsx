import { ArrowRight } from "lucide-react";
import { SiteLinkButton } from "@/components/site/SiteButton";

type CtaRowProps = {
  primary?: { to: string; label: string; variant?: "gold" | "viera" };
  secondary?: { to: string; label: string };
  className?: string;
};

export function CtaRow({ primary, secondary, className = "" }: CtaRowProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {primary && (
        <SiteLinkButton
          to={primary.to}
          variant={primary.variant ?? "gold"}
          size="md"
        >
          {primary.label} <ArrowRight className="h-4 w-4" />
        </SiteLinkButton>
      )}
      {secondary && (
        <SiteLinkButton to={secondary.to} variant="outline" size="md">
          {secondary.label}
        </SiteLinkButton>
      )}
    </div>
  );
}
