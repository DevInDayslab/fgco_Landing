import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  ExternalLink,
  Eye,
  Lightbulb,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { DigitalAvatarSection } from "@/components/viera/DigitalAvatarSection";
import { SiteAnchorButton, SiteLinkButton } from "@/components/site/SiteButton";
import {
  CompareTable,
  FeatureList,
  HeroAccent,
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
  invigilVieraStack,
  VIERA_HERO,
  vieraComparisonRows,
  vieraDifferentiators,
  vieraPrinciples,
} from "@/data/viera-content";

export const Route = createFileRoute("/viera")({
  head: () => ({
    meta: [
      { title: "ViERA — Virtual Intelligence Enabled Real Actor | FG Media" },
      {
        name: "description",
        content:
          "ViERA creates your intelligent digital replica — personalized Virtual Intelligence that protects, empowers, and guides you across InViGIL and the digital world.",
      },
    ],
  }),
  component: Viera,
});

const principleIcons = [Shield, Zap, Lightbulb];

function Viera() {
  return (
    <div className="animate-fade-in">
      <SitePageHero
        tone="viera"
        leading={
          <BrandLogo
            id="viera"
            className="mx-auto mb-6 h-40 max-w-[min(100%,40rem)] md:h-52 lg:h-60"
            size="xl"
          />
        }
        badge={
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-viera/40 bg-viera/15 px-5 py-2 text-[0.68rem] tracking-[0.22em]">
            <span className="h-1.5 w-1.5 rounded-full bg-viera" />
            {VIERA_HERO.overline}
          </span>
        }
        title={
          <>
            {VIERA_HERO.title}
            <br />
            <HeroAccent>{VIERA_HERO.accent}</HeroAccent>
          </>
        }
        subtitle={VIERA_HERO.subtitle}
      >
        <SiteLinkButton to="/technology" variant="viera" size="lg">
          Discover InViGIL <ArrowRight className="h-4 w-4" />
        </SiteLinkButton>
        <SiteAnchorButton
          href="https://teaser.live"
          target="_blank"
          rel="noreferrer"
          variant="outline"
          size="lg"
        >
          Visit teaser.live <ExternalLink className="h-4 w-4" />
        </SiteAnchorButton>
        <SiteLinkButton to="/contact" variant="outline" size="lg">
          Request Early Access
        </SiteLinkButton>
      </SitePageHero>

      <PageSection className="pt-0" border>
        <ProseBlock>
          <p className="text-lg font-semibold text-foreground md:text-xl">{VIERA_HERO.tagline}</p>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
            Imagine having a digital version of yourself that understands how you think, what you
            know, what you want to achieve, and how you want things to be done. Through Virtual
            Intelligence, your ViERA can be trained and personalized to reflect your knowledge,
            expertise, instructions, preferences, values, workflows, and objectives.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-medium text-viera">
            {["You train it.", "You personalize it.", "You empower it.", "ViERA works for you."].map(
              (line) => (
                <span key={line} className="rounded-full border border-viera/30 px-4 py-2">
                  {line}
                </span>
              ),
            )}
          </div>
        </ProseBlock>
      </PageSection>

      <PageSection tone="viera-band">
        <SectionTitle
          overline="Differentiation"
          title={
            <>
              What Makes <span className="italic text-viera">ViERA</span> Different?
            </>
          }
          description="Traditional digital assistants primarily respond to commands. ViERA is designed to become a persistent digital representation of the user."
        />
        <FeatureList
          items={vieraDifferentiators}
          icon={Brain}
          iconClass="text-viera"
          columns={2}
        />
      </PageSection>

      <PageSection>
        <SectionTitle
          overline="Digital Avatar"
          title="Your Digital Avatar in the Digital World"
          description="Your physical identity belongs to the real world. ViERA represents your intelligent presence in the digital world."
        />
        <DigitalAvatarSection />
      </PageSection>

      <PageSection tone="muted">
        <PullQuote tone="viera" className="mx-auto max-w-3xl">
          <Sparkles className="h-7 w-7 text-viera" aria-hidden />
          <h2 className="mt-5 text-2xl md:text-3xl">ViERA + The World&apos;s Knowledge</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            Your ViERA begins with you. Your training creates its personalized foundation. But ViERA
            combines your personalized intelligence with broader knowledge, advanced technologies,
            digital tools, and evolving information.
          </p>
          <p className="mt-6 text-lg font-semibold italic fg-text-gradient-gold">
            Your intelligence, amplified by technology.
          </p>
        </PullQuote>
      </PageSection>

      <PageSection>
        <SectionTitle overline="Core Principles" title="Protect. Empower. Guide." />
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {vieraPrinciples.map((p, i) => {
            const Icon = principleIcons[i];
            return (
              <div
                key={p.title}
                className={`${i === 0 ? "border-l-4 border-gold/50 pl-6" : "md:border-l md:border-border/50 md:pl-8"}`}
              >
                <Icon
                  className={`h-6 w-6 ${i === 0 ? "text-gold" : "text-viera"}`}
                  aria-hidden
                />
                <h3 className="mt-4 text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            );
          })}
        </div>
        <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-muted-foreground">
          ViERA is not intended to replace human judgment. It augments human capability and places
          advanced intelligence at the user&apos;s service.
        </p>
      </PageSection>

      <PageSection tone="viera-band">
        <SectionTitle
          overline="InViGIL Platform"
          title={
            <>
              ViERA on <span className="italic text-viera">InViGIL</span>
            </>
          }
          description="ViERA is initially being introduced through the InViGIL platform — intelligent digital security and information experiences."
        />
        <TagCloud tags={invigilVieraStack} tone="viera" />
        <div className="mt-12 flex flex-col items-center gap-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <BrandLogo id="invigil" size="md" />
            <span className="text-2xl font-light text-muted-foreground">+</span>
            <BrandLogo id="viera" size="md" />
          </div>
          <p className="text-sm font-semibold tracking-wide">InViGIL + ViERA</p>
          <p className="mt-3 text-muted-foreground">
            See More · Understand More · Think Smarter · Protect Better
          </p>
        </div>
      </PageSection>

      <PageSection>
        <SectionTitle
          overline="New Category"
          title="A New Category of Technology"
          description="Moving beyond conventional AI assistants toward personalized Virtual Intelligence."
        />
        <SplitColumns>
          <PullQuote tone="viera">
            <p className="text-sm text-muted-foreground">Rather than asking:</p>
            <p className="mt-2 text-xl font-semibold">&ldquo;What can technology do?&rdquo;</p>
            <p className="mt-8 text-sm text-muted-foreground">ViERA asks:</p>
            <p className="mt-2 text-xl font-semibold text-viera">
              &ldquo;What can technology do when it understands you?&rdquo;
            </p>
          </PullQuote>
          <div>
            <Eye className="h-6 w-6 text-viera" aria-hidden />
            <h3 className="mt-4 text-2xl">The ViERA Vision</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Our vision is to build a future where technology is not merely a tool that people
              operate, but an intelligent digital partner that understands the individual, adapts to
              the individual, and works alongside the individual.
            </p>
            <p className="mt-6 text-sm font-medium text-gold">Intelligence Beyond Vision.</p>
          </div>
        </SplitColumns>
      </PageSection>

      <PageSection className="pb-28">
        <SectionTitle
          title={
            <>
              ViERA vs. <span className="italic text-muted-foreground">Conventional AI</span>
            </>
          }
          accent={false}
        />
        <CompareTable
          headers={["Aspect", "ViERA", "Conventional AI"]}
          rows={vieraComparisonRows}
          highlightCol={1}
        />

        <div className="mt-16 border-t border-border pt-12 text-center">
          <p className="section-label">ViERA</p>
          <p className="mx-auto mt-4 max-w-2xl text-2xl font-bold md:text-3xl">
            Your Digital Replica. Your Virtual Intelligence. Your Digital Superpower.
          </p>
          <SiteLinkButton to="/technology" variant="viera" size="lg" className="mt-8">
            Explore InViGIL <ArrowRight className="h-4 w-4" />
          </SiteLinkButton>
        </div>
      </PageSection>
    </div>
  );
}
