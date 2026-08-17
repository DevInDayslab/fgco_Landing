import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Crown,
  Newspaper,
  Shield,
  Trophy,
} from "lucide-react";
import type { ReactElement } from "react";
import heroOffice from "@/assets/hero_office.jpg";
import founderPhoto from "@/assets/ramesh.png";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { FgLogo } from "@/components/brand/FgLogo";
import { PublicationLogo } from "@/components/brand/PublicationLogo";
import { HeroCtaButtons } from "@/components/site/HeroCtaButtons";
import { SiteLinkButton } from "@/components/site/SiteButton";
import { GlowCard, GlowCardLink } from "@/components/site/GlowCard";
import { HomeCertifications } from "@/components/site/HomeCertifications";
import { HomeFoundationSection } from "@/components/site/HomeFoundationSection";
import { HeroAccent, SectionTitle } from "@/components/site/PageLayout";
import { TrustStrip } from "@/components/site/TrustStrip";
import type { BrandLogoId, PublicationId } from "@/data/brands";
import { SEO_PAGES } from "@/data/seo-pages";
import { buildPageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => buildPageHead(SEO_PAGES.home),
  component: Index,
});

const marquee = [
  "HIT NEWS",
  "HAPPY INDIA TIMES",
  "KURUKSHETRA",
  "ViERA PLATFORM",
  "InViGIL",
  "VIRTUAL INTELLIGENCE",
  "FG MEDIA GROUP",
  "NATIONAL ENGLISH WEEKLY",
  "TELUGU NEWS WEEKLY",
  "KANNADA NEWS WEEKLY",
];

const ventures: {
  tag: string;
  tagClass: string;
  title: string;
  subtitle: string;
  text: string;
  to: "/publications" | "/viera" | "/technology";
  publicationId?: PublicationId;
  brandLogo?: BrandLogoId;
}[] = [
  {
    tag: "EN",
    tagClass: "border-en/40 bg-en/10 text-en",
    title: "HIT News",
    subtitle: "National English Weekly",
    text: "Comprehensive national coverage — politics, technology, business, culture, and investigative journalism.",
    to: "/publications",
    publicationId: "hit-news",
  },
  {
    tag: "TE",
    tagClass: "border-te/40 bg-te/10 text-te",
    title: "Happy India Times",
    subtitle: "National Telugu Weekly",
    text: "Quality news for Telugu-speaking communities — progress, innovation, and human interest stories.",
    to: "/publications",
    publicationId: "happy-india-times",
  },
  {
    tag: "KA",
    tagClass: "border-ka/40 bg-ka/10 text-ka",
    title: "Kurukshetra",
    subtitle: "National Kannada Weekly",
    text: "Empowering Kannada-speaking audiences with quality news and promotional support.",
    to: "/publications",
    publicationId: "kurukshetra",
  },
  {
    tag: "ViERA",
    tagClass: "border-viera/50 bg-viera/15 text-viera",
    title: "ViERA",
    subtitle: "Virtual Intelligence Engine",
    text: "Virtual Intelligence Enabled Real Avatar — powering InViGIL beyond conventional AI.",
    to: "/viera",
    brandLogo: "viera",
  },
  {
    tag: "INV",
    tagClass: "border-gold/40 bg-gold/10 text-gold",
    title: "InViGIL",
    subtitle: "Digital Security & Intelligence Platform",
    text: "A next-generation Digital Security, Intelligence, Investigation and Vigilance platform — powered by ViERA.",
    to: "/technology",
    brandLogo: "invigil",
  },
];

function EcosystemCard({
  icon,
  logo,
  title,
  desc,
  to,
  accent = "gold",
}: {
  icon?: ReactElement<{ size?: number }>;
  logo?: ReactElement;
  title: string;
  desc: string;
  to: "/media" | "/technology" | "/viera" | "/awards" | "/operations";
  accent?: "gold" | "viera";
}) {
  return (
    <GlowCardLink
      to={to}
      tone={accent === "viera" ? "viera" : "gold"}
      className={`group p-6 md:p-8 ${accent === "viera" ? "fg-card-viera" : ""}`}
    >
      {logo ? (
        <div className="mb-6 flex h-16 items-center">{logo}</div>
      ) : (
        <div className="fg-icon-badge mb-6 flex h-14 w-14 items-center justify-center rounded-xl text-gold">
          {icon}
        </div>
      )}
      <h3 className="fg-glow-card-title mb-3 text-xl">{title}</h3>
      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      <div className="flex items-center text-sm font-semibold text-gold transition-transform duration-300 group-hover:translate-x-2">
        Explore <ChevronRight size={16} className="ml-1" />
      </div>
    </GlowCardLink>
  );
}

function Index() {
  return (
    <div className="animate-fade-in">
      {/* Reference-style hero */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden py-20">
        <img
          src={heroOffice}
          alt=""
          aria-hidden
          width={1920}
          height={1080}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/85 to-background" />
        <div className="absolute inset-0 fg-hero-pattern" />
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 shadow-[0_0_15px_rgba(209,176,117,0.12)] backdrop-blur-sm">
            <Crown className="h-4 w-4 text-gold" />
            <span className="text-xs font-medium tracking-widest text-gold uppercase sm:text-sm">
              A Legacy of Excellence
            </span>
          </div>

          <h1 className="fg-hero-title text-5xl md:text-6xl lg:text-7xl">
            Recognising Excellence. <br className="hidden md:block" />
            <HeroAccent>Celebrating Vision.</HeroAccent>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
            Empowering India through world-class Media, groundbreaking Virtual Intelligence
            (InViGIL), and National Recognition.
          </p>

          <HeroCtaButtons />

          <div className="mt-16 flex flex-col items-center gap-2 text-[0.6rem] tracking-[0.3em] text-muted-foreground">
            SCROLL
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-t border-border bg-surface py-6">
        <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="marquee-item">{m}</span>
              <span className="text-gold/50">·</span>
            </span>
          ))}
        </div>
      </div>

      <TrustStrip className="mt-8 md:mt-12" />

      <section className="border-t border-border bg-surface/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            overline="Ecosystem"
            title={
              <span className="flex flex-col items-center gap-4">
                <FgLogo size="md" showTagline align="center" />
                <span>
                  The <HeroAccent>Ecosystem</HeroAccent>
                </span>
              </span>
            }
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <EcosystemCard
              icon={<Newspaper size={28} />}
              title="Media Wing"
              desc="National News Weeklies including HIT NEWS, Happy India Times, InViGIL & Kurukshetra."
              to="/media"
            />
            <EcosystemCard
              logo={<BrandLogo id="invigil" size="sm" className="max-w-[11rem]" />}
              title="InViGIL"
              desc="Digital Security, Intelligence, Investigation and Vigilance — powered by ViERA."
              to="/technology"
              accent="viera"
            />
            <EcosystemCard
              logo={<BrandLogo id="viera" size="sm" className="max-w-[11rem]" />}
              title="ViERA"
              desc="Virtual Intelligence Enabled Real Actor — your digital replica and intelligence layer."
              to="/viera"
              accent="viera"
            />
            <EcosystemCard
              icon={<Trophy size={28} />}
              title="Excellence Awards"
              desc="HIT ViERA National Awards recognizing extraordinary individuals & institutions."
              to="/awards"
            />
            <EcosystemCard
              icon={<Shield size={28} />}
              title="Special Operations"
              desc="Automobiles, Supply Chain, Investigations, and hyper-secure E-commerce."
              to="/operations"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle
          overline="Our Portfolio"
          title={
            <>
              Ventures & <span className="italic fg-text-gradient-gold">Platforms</span>
            </>
          }
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ventures.map((v) => (
            <GlowCard
              key={v.title}
              as="article"
              tone={v.brandLogo === "viera" || v.brandLogo === "invigil" ? "viera" : "gold"}
              className={`h-full p-8 ${
                v.brandLogo === "viera" || v.brandLogo === "invigil" ? "fg-card-viera" : ""
              }`}
              innerClassName="flex h-full flex-col"
            >
              {v.publicationId ? (
                <div className="mb-6 flex h-14 items-center">
                  <PublicationLogo id={v.publicationId} size="sm" />
                </div>
              ) : v.brandLogo ? (
                <div className="mb-6 flex h-20 items-center">
                  <BrandLogo id={v.brandLogo} size="md" className="max-w-[12rem]" />
                </div>
              ) : null}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="fg-glow-card-title text-xl font-semibold">{v.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.subtitle}</p>
                </div>
                <span
                  className={`rounded-full border px-3 py-1 text-[0.65rem] font-semibold tracking-widest ${v.tagClass}`}
                >
                  {v.tag}
                </span>
              </div>
              <p className="mt-6 flex-1 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              <Link
                to={v.to}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold hover:underline"
              >
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </GlowCard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="fg-card rounded-3xl p-10 md:p-16">
          <div className="fg-card-inner grid gap-12 md:grid-cols-[auto_1fr_1fr] md:items-start">
          <div className="mx-auto md:mx-0">
            <img
              src={founderPhoto}
              alt="Mr. Ramesh Babu Pasupuleti — Founder"
              className="h-28 w-28 rounded-2xl border border-gold/25 object-cover object-top shadow-[0_8px_32px_-8px_rgba(245,158,11,0.25)] md:h-32 md:w-32"
            />
          </div>
          <div>
            <div className="flex flex-wrap gap-3 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
              <span className="rounded-full border border-border px-4 py-1.5">Est. 14 Jan 2020</span>
              <span className="rounded-full border border-border px-4 py-1.5">
                Bengaluru, Karnataka
              </span>
            </div>
            <p className="section-label mt-8">Who We Are</p>
            <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
              Where Journalism <span className="italic fg-text-gradient-gold">Meets Innovation</span>
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
            <p>
              Founded by Mr. Ramesh Babu Pasupuleti — a professional with a dual background in Media
              and Information Technology — FG Media Group bridges trusted journalism and frontier
              technology.
            </p>
            <p>
              From three respected news weeklies reaching millions of readers across India, to
              pioneering InViGIL — a next-generation digital security and intelligence platform powered by ViERA — we
              build solutions that are safe, user-friendly, and meaningful.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:underline"
              >
                Our full story <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/ceo"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-gold hover:underline"
              >
                Meet our CEO <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
          </div>
        </div>
      </section>

      <HomeFoundationSection />

      <HomeCertifications />

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="fg-card fg-card-featured rounded-3xl p-10 text-center md:p-16">
          <div className="fg-card-inner">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-4xl md:text-5xl">Partner With</h2>
            <FgLogo size="md" showTagline align="center" />
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Advertise across our print, digital, and virtual commerce network — reaching engaged
            readers and users across India and the globe.
          </p>
          <SiteLinkButton to="/contact" variant="gold" size="lg" className="mt-8">
            Get In Touch <ArrowRight className="h-4 w-4" />
          </SiteLinkButton>
          </div>
        </div>
      </section>
    </div>
  );
}
