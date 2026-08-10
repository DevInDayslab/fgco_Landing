import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Battery,
  Car,
  Shield,
  Wrench,
} from "lucide-react";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { SiteLinkButton } from "@/components/site/SiteButton";
import {
  ChecklistGrid,
  HeroAccent,
  NumberedItem,
  PageSection,
  ProseBlock,
  PullQuote,
  SectionTitle,
  SitePageHero,
  SplitColumns,
  StepFlow,
  TagCloud,
} from "@/components/site/PageLayout";
import {
  AUTOMOBILE_HERO,
  automobilePillars,
  ecosystemFlow,
  evPortfolio,
  fitGaadiLifecycle,
  fitGaadiSafetyFocus,
  fitGarageServices,
  mobilityConnections,
} from "@/data/automobiles";
import { SEO_PAGES } from "@/data/seo-pages";
import { buildPageHead } from "@/lib/seo";

export const Route = createFileRoute("/automobiles")({
  head: () => buildPageHead(SEO_PAGES.automobiles),
  component: Automobiles,
});

function Automobiles() {
  return (
    <div className="animate-fade-in">
      <SitePageHero
        overline={AUTOMOBILE_HERO.overline}
        title={
          <>
            {AUTOMOBILE_HERO.titleLine}
            <br />
            <HeroAccent>{AUTOMOBILE_HERO.accent}</HeroAccent>
          </>
        }
        subtitle={AUTOMOBILE_HERO.intro}
      >
        <SiteLinkButton to="/contact" variant="gold" size="lg">
          Partner With Us <ArrowRight className="h-4 w-4" />
        </SiteLinkButton>
        <SiteLinkButton to="/technology" variant="vieraOutline" size="lg">
          InViGIL Technology
        </SiteLinkButton>
      </SitePageHero>

      <PageSection className="pt-0" border>
        <ProseBlock>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {AUTOMOBILE_HERO.body}
          </p>
          <p className="mt-6 text-sm font-medium text-gold">{AUTOMOBILE_HERO.closing}</p>
        </ProseBlock>
      </PageSection>

      <PageSection tone="band">
        <div className="mb-8 flex justify-center">
          <BrandLogo id="fitGaadi" size="xl" />
        </div>
        <SectionTitle
          overline="FitGaadi"
          title={
            <>
              Your Vehicle. Your Safety. Your{" "}
              <span className="italic text-gold">Intelligent Mobility Partner</span>
            </>
          }
          description="Advanced Automobile Safety Technologies and 365° Vehicle Service & Maintenance — safer, smarter ownership."
        />

        <SplitColumns>
          <div>
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-gold" aria-hidden />
              <h3 className="text-2xl font-bold">Automobile Safety Technologies</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              FitGaadi helps vehicle owners, families, businesses and fleet operators move towards a
              more intelligent safety environment.
            </p>
            <div className="mt-8">
              <ChecklistGrid items={fitGaadiSafetyFocus} columns={2} />
            </div>
          </div>

          <div className="lg:border-l lg:border-border/60 lg:pl-12">
            <div className="flex items-center gap-3">
              <Car className="h-6 w-6 text-gold" aria-hidden />
              <h3 className="text-2xl font-bold">365° Vehicle Care</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              From purchase to daily operation, maintenance, repairs and long-term care — one
              complete lifecycle ecosystem.
            </p>
            <StepFlow steps={fitGaadiLifecycle} className="mt-8" />
            <p className="mt-6 text-sm text-muted-foreground">
              One ecosystem for your vehicle&apos;s complete lifecycle.
            </p>
          </div>
        </SplitColumns>
      </PageSection>

      <PageSection>
        <SectionTitle
          overline="FitGarage"
          title={
            <>
              A Global Network of{" "}
              <span className="italic text-gold">Trusted Automotive Care</span>
            </>
          }
          description="A global chain of technologically enabled garages — global-standard service, repair and end-to-end maintenance."
        />

        <SplitColumns className="mb-12">
          <PullQuote tone="gold">
            <p className="section-label">Global Standard. Local Presence.</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A connected network of service centres across cities, regions and countries — common
              service principles, technology-enabled processes and consistent quality standards.
            </p>
          </PullQuote>
          <div>
            <p className="section-label">End-to-End Services</p>
            <p className="mt-4 text-lg font-semibold text-foreground">
              One Garage. Complete Care. Global Standards.
            </p>
          </div>
        </SplitColumns>

        <ChecklistGrid items={fitGarageServices} icon={Wrench} columns={3} />
      </PageSection>

      <PageSection tone="muted">
        <SectionTitle
          overline="FitGaadi + FitGarage"
          title="The Connected Vehicle-Care Ecosystem"
          description="Intelligence and digital care from FitGaadi. Physical service and expertise from FitGarage."
        />
        <p className="mb-6 text-center text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Connected journey
        </p>
        <StepFlow steps={ecosystemFlow} />
      </PageSection>

      <PageSection>
        <div className="mb-8 flex justify-center">
          <BrandLogo id="invigil" size="md" />
        </div>
        <SectionTitle
          overline="Intelligent Automotive Mobility"
          title={
            <>
              Powered by Technology. Designed for{" "}
              <span className="italic text-viera">Safety</span>
            </>
          }
          description="InViGIL brings virtual showrooms, fleet tracking and connected commerce to the automobile division."
        />
        <TagCloud tags={mobilityConnections} tone="viera" />
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
          Making automobile services more transparent, technology-enabled and accessible.
        </p>
      </PageSection>

      <PageSection tone="band">
        <SectionTitle
          overline="FG Electric Mobility"
          title={
            <>
              The Next Generation Is <span className="italic text-gold">Electric</span>
            </>
          }
          description="FG EV Cars, Commercial Vehicles and Bikes — planned for launch soon."
        />
        <div className="divide-y divide-border/70 md:grid md:grid-cols-3 md:divide-x md:divide-y-0">
          {evPortfolio.map((ev) => (
            <div key={ev.title} className="px-0 py-8 md:px-8 md:first:pl-0 md:last:pr-0">
              <Battery className="h-6 w-6 text-viera" aria-hidden />
              <h3 className="mt-4 text-xl font-bold">{ev.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ev.text}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionTitle overline="One Ecosystem. Every Journey." title="Three Powerful Pillars" />
        <div className="grid md:grid-cols-3 md:gap-0">
          {automobilePillars.map((pillar, i) => (
            <NumberedItem
              key={pillar.name}
              index={i + 1}
              title={pillar.name}
              subtitle={pillar.subtitle}
              tagline={pillar.tagline}
              description={pillar.description}
              highlight={i === 0}
              logo={
                "brandLogo" in pillar && pillar.brandLogo ? (
                  <BrandLogo id={pillar.brandLogo} size="sm" />
                ) : undefined
              }
            />
          ))}
        </div>
      </PageSection>

      <PageSection className="pb-28" tone="muted">
        <SectionTitle
          overline="Our Automobile Vision"
          title="Connected, Intelligent, Serviceable & Electric"
          description="The automobile of the future will be connected, intelligent, monitored, serviceable, secure and increasingly electric — from safety to maintenance, individual mobility to commercial fleets, conventional to electric."
          accent={false}
        />
        <p className="mx-auto max-w-xl text-center text-sm font-medium text-gold">
          FG Media Automobile Division — Driving Innovation. Protecting Mobility. Building the Future.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <SiteLinkButton to="/technology" variant="viera" size="lg">
            <BrandLogo id="invigil" size="xs" /> InViGIL Platform
          </SiteLinkButton>
          <SiteLinkButton to="/viera" variant="outline" size="lg">
            <BrandLogo id="viera" size="xs" /> ViERA Intelligence
          </SiteLinkButton>
        </div>
      </PageSection>
    </div>
  );
}
