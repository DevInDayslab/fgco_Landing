import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const siteButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        gold:
          "bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 text-primary-foreground shadow-[0_4px_24px_-6px_rgba(217,119,6,0.5)] hover:shadow-[0_8px_32px_-6px_rgba(217,119,6,0.55)] hover:brightness-[1.03]",
        viera:
          "bg-gradient-to-r from-blue-600 to-viera text-primary-foreground shadow-[0_4px_24px_-6px_rgba(59,130,246,0.45)] hover:shadow-[0_8px_32px_-6px_rgba(59,130,246,0.5)] hover:brightness-[1.03]",
        goldOutline:
          "border border-gold/45 bg-gold/10 text-gold backdrop-blur-sm hover:border-gold/65 hover:bg-gold/15",
        vieraOutline:
          "border border-viera/45 bg-viera/10 text-viera backdrop-blur-sm hover:border-viera/65 hover:bg-viera/15",
        outline:
          "border border-border/80 bg-card/80 text-foreground backdrop-blur-sm hover:border-gold/35 hover:bg-accent/40",
        ghost: "text-muted-foreground hover:bg-accent/30 hover:text-foreground",
        navSponsor:
          "rounded-xl border border-gold/45 text-gold hover:bg-gold/10 hover:border-gold/60",
        navNominate:
          "rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 text-primary-foreground shadow-[0_2px_16px_-4px_rgba(217,119,6,0.45)] hover:brightness-[1.03]",
      },
      size: {
        sm: "px-3.5 py-2 text-xs",
        md: "px-6 py-3",
        lg: "px-8 py-4",
        nav: "rounded-xl px-3 py-2 text-xs xl:px-4 xl:py-2.5 xl:text-sm",
        full: "w-full px-8 py-4",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "lg",
    },
  },
);

export type SiteButtonVariant = NonNullable<VariantProps<typeof siteButtonVariants>["variant"]>;
export type SiteButtonSize = NonNullable<VariantProps<typeof siteButtonVariants>["size"]>;

export function siteButtonClass(
  variant?: SiteButtonVariant,
  size?: SiteButtonSize,
  className?: string,
) {
  return cn(siteButtonVariants({ variant, size }), className);
}
