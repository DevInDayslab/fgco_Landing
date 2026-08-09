import { createFileRoute, Link } from "@tanstack/react-router";
import { Briefcase, Car, ChevronRight, Image as ImageIcon, Search } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BrandLogo } from "@/components/brand/BrandLogo";
import type { BrandLogoId } from "@/data/brands";
import { ContentCard, HeroAccent, PageSection, SitePageHero, cardLinkClass } from "@/components/site/PageLayout";

export const Route = createFileRoute("/operations")({
  head: () => ({
    meta: [
      { title: "Specialized Operations — FG Media Group" },
      {
        name: "description",
        content:
          "Automobiles, Supply Chain, Investigations, and hyper-secure E-commerce.",
      },
    ],
  }),
  component: Operations,
});

const wings: {
  icon: LucideIcon;
  title: string;
  desc: string;
  to?: "/automobiles";
  brandLogo?: BrandLogoId;
}[] = [
  {
    icon: Car,
    title: "Automobile Wing",
    desc: "Next-generation automotive tech integration, fleet tracking, and virtual showrooms via InViGIL.",
    to: "/automobiles",
    brandLogo: "fitGaadi",
  },
  {
    icon: Briefcase,
    title: "Supply Chain",
    desc: "Transparent logistics, direct farmer-to-buyer agricultural supply, and encrypted ledger systems.",
  },
  {
    icon: Search,
    title: "Investigations",
    desc: "Cyber Commandos unit focusing on proactive crime detection, fraud prevention, and cyber security.",
  },
  {
    icon: ImageIcon,
    title: "E-Commerce",
    desc: "Hyper-secure, middleman-free Virtual Commerce enabling real-time test, engage, and buy.",
    brandLogo: "invigil",
  },
];

function WingVisual({
  icon: Icon,
  brandLogo,
}: {
  icon: LucideIcon;
  brandLogo?: BrandLogoId;
}) {
  if (brandLogo) {
    return (
      <div className="mb-4 flex h-16 w-16 shrink-0 items-center justify-center sm:mb-0">
        <BrandLogo id={brandLogo} size="sm" className="max-w-[4.5rem]" />
      </div>
    );
  }

  return (
    <div className="fg-icon-badge mb-4 flex h-16 w-16 shrink-0 items-center justify-center rounded-xl text-gold sm:mb-0">
      <Icon size={32} />
    </div>
  );
}

function Operations() {
  return (
    <div className="animate-fade-in">
      <SitePageHero
        overline="Operations"
        title={
          <>
            Specialized <HeroAccent>Operations</HeroAccent>
          </>
        }
        subtitle="Expanding the boundaries of industry through technology and innovation."
      />

      <PageSection className="pt-0">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {wings.map((wing) => {
            const inner = (
              <div className={`group ${cardLinkClass()}`}>
                <div className="fg-card-inner flex flex-col sm:flex-row sm:items-start sm:gap-6">
                <WingVisual icon={wing.icon} brandLogo={wing.brandLogo} />
                <div className="flex-1">
                  <h3 className="mb-3 text-2xl">{wing.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{wing.desc}</p>
                  {wing.to && (
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-gold">
                      Learn more <ChevronRight size={16} className="ml-1" />
                    </span>
                  )}
                </div>
                </div>
              </div>
            );

            return wing.to ? (
              <Link key={wing.title} to={wing.to} className="block">{inner}</Link>
            ) : (
              <ContentCard key={wing.title} className="group flex flex-col sm:flex-row sm:items-start sm:gap-6">
                <WingVisual icon={wing.icon} brandLogo={wing.brandLogo} />
                <div className="flex-1">
                  <h3 className="mb-3 text-2xl">{wing.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{wing.desc}</p>
                </div>
              </ContentCard>
            );
          })}
        </div>
      </PageSection>
    </div>
  );
}
