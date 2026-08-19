import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, Globe, Heart, Shield, Sparkles, Target } from "lucide-react";
import { MediaWingSection } from "@/components/media/MediaWingSection";
import { LeaderCard } from "@/components/leadership/LeaderCard";
import {
  EcosystemPillarGrid,
  FG_ECOSYSTEM_PILLARS,
} from "@/components/about/EcosystemPillarGrid";
import {
  ChecklistGrid,
  FeatureList,
  PageSection,
  PullQuote,
  SitePageHero,
  StepFlow,
} from "@/components/site/PageLayout";
import { FgLogo } from "@/components/brand/FgLogo";
import { LEADERS, getLeaderPath } from "@/data/leadership";
import { SEO_PAGES } from "@/data/seo-pages";
import { buildPageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => buildPageHead(SEO_PAGES.about),
  component: About,
});

const timeline = [
  {
    tag: "Foundation",
    date: "14 Jan 2020",
    title: "FG Media Group Established",
    text: "Incorporated in Bengaluru as FG Media and Safety Technologies Pvt Ltd — supported by Startup India and Government of Karnataka.",
  },
  {
    tag: "Media",
    date: "2020–21",
    title: "Three Publications Launched",
    text: "HIT News (English), Happy India Times (Telugu), Kurukshetra (Kannada) launched as nationally respected news weeklies.",
  },
  {
    tag: "Technology",
    date: "2021",
    title: "ViERA & InViGIL Born",
    text: "Development of InViGIL — a next-generation digital security and intelligence platform powered by ViERA (Virtual Intelligence Enabled Real Avatar), unveiled by Hon'ble Vice President of India.",
  },
  {
    tag: "Expansion",
    date: "Present",
    title: "InViGIL & Global Expansion",
    text: "InViGIL expanding to 195+ countries across Android, iOS, and Web — with Automobile Wing, Supply Chain, and Cyber Commandos operations.",
  },
];

const values = [
  {
    title: "Innovation",
    text: "We challenge conventional thinking and explore what technology can become.",
  },
  {
    title: "Integrity",
    text: "Trust is the foundation of technology, media and long-term institutions.",
  },
  {
    title: "Humanity",
    text: "Technology must ultimately serve people.",
  },
  {
    title: "Safety",
    text: "Digital progress must be accompanied by digital protection.",
  },
  {
    title: "Excellence",
    text: "We pursue high standards in ideas, execution and impact.",
  },
  {
    title: "Inclusivity",
    text: "Innovation should create opportunities across social and economic boundaries.",
  },
];

const missionItems = [
  "Build intelligent digital platforms",
  "Advance Virtual Intelligence Technology",
  "Strengthen digital safety and security",
  "Create innovative media ecosystems",
  "Enable direct digital commerce",
  "Support entrepreneurs and emerging businesses",
  "Empower rural communities and creators",
  "Connect Indian talent with global opportunities",
  "Promote scientific and technological awareness",
  "Recognise excellence and meaningful contribution",
  "Build sustainable technology-driven institutions",
];

const visionTraits = [
  "Intelligent",
  "Secure",
  "Human-centred",
  "Inclusive",
  "Accessible",
  "Responsible",
  "Globally connected",
  "Socially meaningful",
];

function About() {
  return (
    <div className="animate-fade-in">
      <SitePageHero
        overline="FG Media and Safety Technologies Pvt. Ltd."
        leading={<FgLogo size="lg" showTagline align="center" className="mb-2" />}
        title="About Us"
        subtitle="Where Media Meets Technology. Where Intelligence Meets Safety. Where Innovation Creates Impact."
        size="compact"
      />

      <PageSection border className="bg-surface/30 !pt-8 md:!pt-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-lg leading-relaxed text-foreground md:text-xl">
            Building Intelligent, Secure and Human-Centred Ecosystems for a Digital World
          </p>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
            FG Media and Safety Technologies Pvt. Ltd. is an India-based technology and media
            enterprise working at the intersection of Media, Information Technology, Virtual
            Intelligence, Digital Safety, Innovation, Entrepreneurship and Social Impact.
          </p>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
            Founded around the vision of technology and media pioneer Ramesh Babu Pasupuleti, FG
            Media was created with a larger purpose: to develop meaningful, creative, secure and
            user-centric technology solutions while building powerful media platforms capable of
            informing, connecting and empowering society. The company was incorporated in Bengaluru
            in 2020 and is registered as a private limited company.
          </p>
        </div>
      </PageSection>

      <PageSection className="!pt-10 md:!pt-12">
        <p className="section-label text-center">Our Identity</p>
        <h2 className="mt-4 text-center text-4xl md:text-5xl">
          Not a Conventional <span className="italic fg-text-gradient-gold">Media or Tech Company</span>
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
          FG Media is envisioned as a converged ecosystem in which information becomes intelligence,
          intelligence becomes action, technology becomes empowerment, media becomes influence,
          safety becomes trust, and innovation becomes opportunity.
        </p>
        <StepFlow
          steps={[
            "Information → Intelligence",
            "Intelligence → Action",
            "Technology → Empowerment",
            "Media → Influence",
            "Safety → Trust",
            "Innovation → Opportunity",
          ]}
          className="mt-10"
        />
      </PageSection>

      <PageSection border className="bg-surface/40">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="fg-vision-block">
            <div className="flex items-center gap-3">
              <Eye className="h-6 w-6 text-viera" />
              <h2 className="text-2xl md:text-3xl">Our Vision</h2>
            </div>
            <p className="mt-2 text-sm font-medium text-gold">
              To Build a Smarter, Safer and More Connected World
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              FG Media envisions a future in which advanced technology is accessible not only to
              large corporations and technology professionals, but also to ordinary citizens,
              entrepreneurs, creators, farmers, professionals, institutions and communities.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Our long-term vision is to build an ecosystem where technology can help people discover
              opportunities, protect themselves, communicate effectively, conduct business, access
              information and participate in the global digital economy.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {visionTraits.map((trait) => (
                <span
                  key={trait}
                  className="rounded-full border border-viera/30 bg-viera/10 px-3 py-1 text-xs font-medium text-viera"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
          <div className="fg-mission-block">
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-gold" />
              <h2 className="text-2xl md:text-3xl">Our Mission</h2>
            </div>
            <p className="mt-2 text-sm font-medium text-gold">Technology With Purpose</p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              FG Media&apos;s mission is to develop and promote technology solutions that combine
              innovation with practical human value.
            </p>
            <ChecklistGrid items={missionItems} className="mt-6" />
          </div>
        </div>
      </PageSection>

      <PageSection border className="bg-surface/25">
        <p className="section-label text-center">The FG Media Ecosystem</p>
        <h2 className="mt-4 text-center text-4xl md:text-5xl">
          Integrated <span className="italic fg-text-gradient-gold">Vision</span>
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
          FG Media brings multiple disciplines together under one integrated vision — connecting
          media, technology, intelligence, safety, commerce, mobility, entrepreneurship and social
          impact.
        </p>
        <div className="mt-14">
          <EcosystemPillarGrid pillars={FG_ECOSYSTEM_PILLARS} />
        </div>
      </PageSection>

      <MediaWingSection />

      <PageSection border className="bg-surface/25">
        <p className="section-label text-center">Media Powered by Technology</p>
        <h2 className="mt-4 text-center text-3xl md:text-4xl">Informed Communities</h2>
        <StepFlow
          steps={[
            "Read",
            "Understand",
            "Interact",
            "Investigate",
            "Connect",
            "Participate",
            "Act",
          ]}
          className="mt-8"
        />
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
          The purpose is not simply to publish information. It is to create informed communities
          where journalism and technology work together.
        </p>
      </PageSection>

      <PageSection>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="section-label">A Global Ambition From India</p>
            <h2 className="mt-4 text-3xl md:text-4xl">
              Indian Foundations, <span className="italic fg-text-gradient-gold">Global Relevance</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              FG Media is headquartered in Bengaluru, Karnataka — one of India&apos;s most important
              technology centres. We believe India has the talent, creativity, scientific capability
              and entrepreneurial energy to develop technologies that can serve not only India, but
              the world.
            </p>
          </div>
          <FeatureList
            icon={Globe}
            items={[
              {
                title: "Intelligence",
                text: "Technology that understands context and assists people.",
              },
              {
                title: "Security",
                text: "Technology designed around trust, protection and responsible digital participation.",
              },
              {
                title: "Accessibility",
                text: "Advanced capabilities made understandable and usable by ordinary people.",
              },
              {
                title: "Opportunity",
                text: "Digital platforms that open markets, careers and entrepreneurial possibilities.",
              },
            ]}
          />
        </div>
      </PageSection>

      <PageSection border className="bg-surface/40" id="team">
        <div className="mb-12 text-center md:mb-14">
          <p className="section-label">Leadership</p>
          <h2 className="mt-4 text-4xl md:text-5xl">
            Our <span className="italic fg-text-gradient-gold">Team</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            The visionaries, innovators, and technical experts building FG Media&apos;s integrated
            ecosystem of media, technology, safety, and social impact. Tap any profile to read their
            full story.
          </p>
        </div>
        <div className="grid gap-8">
          {LEADERS.map((leader) => (
            <LeaderCard key={leader.id} leader={leader} variant="row" />
          ))}
        </div>

        <div className="fg-card mt-14 rounded-3xl p-8 md:p-12">
          <div className="fg-card-inner">
            <p className="section-label text-center">Direct Profile Links</p>
            <h3 className="mt-4 text-center text-2xl md:text-3xl">Connect With Our Leaders</h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {LEADERS.map((leader) => (
                <Link
                  key={leader.id}
                  to={getLeaderPath(leader)}
                  className="group rounded-xl border border-border/80 bg-background/40 p-5 text-center transition-colors hover:border-gold/40"
                >
                  <p className="font-semibold text-foreground group-hover:text-gold">{leader.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{leader.role}</p>
                  <p className="mt-3 font-mono text-xs text-gold">fgco.in/{leader.slug}</p>
                  {leader.aliases.length > 0 ? (
                    <p className="mt-1 font-mono text-[0.65rem] text-muted-foreground">
                      fgco.in/{leader.aliases[0]}
                    </p>
                  ) : null}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <h2 className="text-center text-4xl md:text-5xl">
          Our <span className="italic fg-text-gradient-gold">Values</span>
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="fg-card rounded-2xl p-6">
              <div className="fg-card-inner">
                <span className="fg-icon-badge h-10 w-10 rounded-lg">
                  <Heart className="h-4 w-4 text-gold" />
                </span>
                <h3 className="mt-4 text-xl">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection border className="bg-surface/30">
        <p className="section-label">Our Journey</p>
        <h2 className="mt-4 text-4xl md:text-5xl">Building Something Lasting</h2>

        <ol className="mt-14 space-y-10 border-l border-border pl-8">
          {timeline.map((t) => (
            <li key={t.title} className="relative">
              <span className="absolute -left-[2.6rem] flex h-6 w-6 items-center justify-center rounded-full border border-gold/40 bg-background">
                <span className="h-2 w-2 rounded-full bg-gold" />
              </span>
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-[0.65rem] tracking-[0.2em] text-gold uppercase">{t.tag}</span>
                <span className="text-xs text-muted-foreground">{t.date}</span>
              </div>
              <h3 className="mt-2 text-2xl">{t.title}</h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                {t.text}
              </p>
            </li>
          ))}
        </ol>
      </PageSection>

      <PageSection className="pb-28">
        <PullQuote tone="gold">
          <div className="flex items-start gap-4">
            <Sparkles className="mt-1 h-6 w-6 shrink-0 text-gold" />
            <div>
              <p className="section-label">FG Media — Our Promise</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                We aspire to build technology that people can trust. Media that people can depend
                upon. Platforms that create opportunity. Intelligence that empowers. Innovation that
                protects. And institutions that leave a lasting positive impact.
              </p>
              <p className="mt-4 text-sm font-medium text-foreground">
                We are building more than products. We are building an ecosystem for the future.
              </p>
              <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                <Shield className="h-4 w-4 text-gold" />
                FG Media and Safety Technologies Pvt. Ltd. · Bengaluru, Karnataka, India
              </p>
            </div>
          </div>
        </PullQuote>
      </PageSection>
    </div>
  );
}
