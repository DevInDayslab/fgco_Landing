import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const siteButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        gold:
          "rounded-full border border-gold/40 bg-gold/[0.08] text-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-gold/60 hover:bg-gold/[0.14] hover:shadow-[0_4px_24px_-8px_rgba(217,119,6,0.35)]",
        viera:
          "rounded-full border border-viera/40 bg-viera/[0.08] text-viera shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-viera/60 hover:bg-viera/[0.14] hover:shadow-[0_4px_24px_-8px_rgba(59,130,246,0.35)]",
        goldOutline:
          "rounded-full border border-gold/40 bg-gold/[0.08] text-gold hover:border-gold/60 hover:bg-gold/[0.14]",
        vieraOutline:
          "rounded-full border border-viera/40 bg-viera/[0.08] text-viera hover:border-viera/60 hover:bg-viera/[0.14]",
        outline:
          "rounded-full border border-border/70 bg-card/40 text-foreground backdrop-blur-sm hover:border-gold/40 hover:bg-card/60 hover:text-gold",
        cta:
          "rounded-full border border-border/60 bg-card/35 text-foreground/90 backdrop-blur-md shadow-sm hover:border-gold/45 hover:bg-card/55 hover:text-gold max-sm:whitespace-normal max-sm:text-center max-sm:leading-snug",
        ghost:
          "rounded-full text-muted-foreground hover:bg-accent/30 hover:text-foreground",
        navSponsor:
          "rounded-lg border border-gold/40 bg-gold/[0.06] text-gold hover:border-gold/55 hover:bg-gold/[0.12]",
        navNominate:
          "rounded-lg border border-gold/50 bg-gold/[0.12] text-gold hover:border-gold/65 hover:bg-gold/[0.18]",
      },
      size: {
        sm: "px-4 py-2 text-xs",
        md: "px-5 py-2.5 text-sm",
        lg: "px-6 py-3 text-sm",
        nav: "px-3 py-2 text-xs xl:px-4 xl:py-2.5 xl:text-sm",
        full: "w-full px-6 py-3 text-sm",
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
