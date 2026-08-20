import {
  ArrowRight,
  Brain,
  ChevronDown,
  Globe,
  MousePointer2,
  Play,
  Rocket,
  Scan,
  ShoppingCart,
  Sparkles,
  User,
  Video,
  Wand2,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import teaserGif from "@/assets/Teaser_GIF.gif";
import { SiteAnchorButton, SiteLinkButton } from "@/components/site/SiteButton";
import {
  TEASER_ACTION_WORDS,
  TEASER_AR_FLOW,
  TEASER_AR_USES,
  TEASER_CAPABILITIES,
  TEASER_CATEGORIES,
  TEASER_COMMERCE_FEATURES,
  TEASER_COMMERCE_FLOW,
  TEASER_CTA_LINES,
  TEASER_EQUATION,
  TEASER_FARM_PRODUCTS,
  TEASER_FORMATS,
  TEASER_GENERATION_COMPARE,
  TEASER_GENERATION_TRAITS,
  TEASER_MICRO_MEDIA,
  TEASER_PLATFORM_STACK,
  TEASER_PROFESSIONS,
} from "@/data/teaser-content";

const equationIcons = {
  user: User,
  brain: Brain,
  scan: Scan,
  video: Video,
  "mouse-pointer": MousePointer2,
} as const;

function TeaserCtaRow({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap justify-center gap-3 md:gap-4 ${className}`}>
      <SiteAnchorButton
        href="https://teaser.live"
        target="_blank"
        rel="noreferrer"
        className="teaser-btn-primary"
      >
        <Play className="h-4 w-4 fill-current" />
        Create Your Teaser
      </SiteAnchorButton>
      <SiteLinkButton to="/technology" variant="vieraOutline" size="lg" className="teaser-btn-invigil">
        Explore InViGIL <ArrowRight className="h-4 w-4" />
      </SiteLinkButton>
      <SiteLinkButton to="/viera" variant="vieraOutline" size="lg" className="border-cyan-400/40 text-cyan-300">
        Explore ViERA <ArrowRight className="h-4 w-4" />
      </SiteLinkButton>
    </div>
  );
}

function TeaserHero() {
  return (
    <section className="relative min-h-[min(88vh,760px)] overflow-hidden border-b border-white/8">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(168,85,247,0.22),transparent_50%),radial-gradient(ellipse_at_80%_30%,rgba(34,211,238,0.16),transparent_45%)]" />

      <div className="relative mx-auto flex min-h-[min(88vh,760px)] max-w-5xl flex-col items-center justify-center px-6 py-24 text-center">
        <SiteLinkButton to="/technology" className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/35 bg-violet-500/10 px-4 py-2 text-[0.65rem] tracking-[0.2em] text-violet-200 transition-colors hover:border-violet-300/50 hover:bg-violet-500/15">
          <Wand2 className="h-3.5 w-3.5" />
          INSIDE INVIGIL — INTELLIGENCE BEYOND VISION
        </SiteLinkButton>

        <img
          src={teaserGif}
          alt="TEASER — Global Talent Capital"
          width={256}
          height={256}
          className="h-40 w-40 rounded-3xl object-cover shadow-[0_0_70px_rgba(220,38,38,0.35)] md:h-52 md:w-52"
        />
        <p className="mt-5 text-2xl font-semibold fg-text-gradient-teaser md:text-3xl">
          Powered by ViERA
        </p>
        <p className="mt-4 max-w-2xl text-base text-white/65 md:text-lg">
          The Next-Generation Short-Video Engine
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-x-3 gap-y-2 text-sm font-medium md:text-base">
          {TEASER_ACTION_WORDS.map((word, i) => (
            <span
              key={word}
              className="teaser-action-word"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {word}
            </span>
          ))}
        </div>

        <div className="teaser-quote-box mt-10 max-w-3xl px-6 py-5 text-sm leading-relaxed text-violet-100/90 md:text-base">
          Your idea is the script. You are the actor. ViERA is the intelligence. TEASER is the
          stage.
        </div>

        <TeaserCtaRow className="mt-10" />

        <a href="#what-is-teaser" className="absolute bottom-8 text-white/35 transition-colors hover:text-white/70">
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

function SectionBadge({
  children,
  tone = "violet",
}: {
  children: ReactNode;
  tone?: "violet" | "cyan" | "green" | "orange";
}) {
  const tones = {
    violet: "border-violet-400/35 bg-violet-500/10 text-violet-200",
    cyan: "border-cyan-400/35 bg-cyan-500/10 text-cyan-200",
    green: "border-emerald-400/35 bg-emerald-500/10 text-emerald-200",
    orange: "border-orange-400/35 bg-orange-500/10 text-orange-200",
  };
  return (
    <span
      className={`mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.65rem] font-semibold tracking-[0.2em] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

function PlatformEcosystemSection() {
  return (
    <section className="relative border-b border-white/8 bg-black py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-[0.65rem] font-semibold tracking-[0.24em] text-white/40">
            THE INVIGIL ECOSYSTEM
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            One Platform. Three Powers.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {TEASER_PLATFORM_STACK.map((item) => {
            const card = (
              <div className={`teaser-ecosystem-card teaser-ecosystem-${item.tone}`}>
                <p className="text-[0.65rem] font-semibold tracking-[0.2em] text-white/45">
                  {item.role.toUpperCase()}
                </p>
                <h3 className="mt-2 text-xl font-bold text-white">{item.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{item.description}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-white/80">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            );

            if ("external" in item && item.external) {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-transform hover:-translate-y-1"
                >
                  {card}
                </a>
              );
            }

            return (
              <Link key={item.name} to={item.href} className="block transition-transform hover:-translate-y-1">
                {card}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhatIsSection() {
  return (
    <section id="what-is-teaser" className="scroll-mt-28 border-b border-white/8 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionBadge tone="violet">
          <Rocket className="h-3.5 w-3.5" />
          WHAT IS A TEASER?
        </SectionBadge>
        <h2 className="fg-hero-title text-4xl text-white md:text-5xl">
          Not Just Another <span className="fg-text-gradient-teaser">Short Video</span>
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-white/65 md:text-base">
          A Teaser is a <strong className="text-white">short, intelligent, purpose-driven visual experience</strong>.
          Just like a cinema teaser gives people a powerful preview before the full movie, a TEASER
          gives users a quick, compelling preview of an idea, product, service, event, talent,
          opportunity or message.
        </p>
        <p className="mt-4 text-sm text-violet-300">
          Don&apos;t just post.{" "}
          <SiteAnchorButton
            href="https://teaser.live"
            target="_blank"
            rel="noreferrer"
            className="!inline !border-0 !bg-transparent !p-0 !text-violet-300 underline-offset-4 hover:!text-violet-200 hover:underline"
          >
            Create a Teaser.
          </SiteAnchorButton>
        </p>

        <div className="mt-8 space-y-3 text-left">
          <div className="teaser-panel rounded-2xl px-5 py-4 text-sm text-white/55">
            A traditional post tells people something.
          </div>
          <div className="teaser-panel teaser-panel-accent rounded-2xl px-5 py-4 text-sm text-violet-100">
            A Teaser makes people see it, understand it, experience it and take action.
          </div>
        </div>

        <div className="teaser-panel mx-auto mt-8 max-w-sm rounded-2xl px-5 py-4 text-left">
          <p className="text-xs font-semibold text-cyan-300">One Format</p>
          <p className="text-sm text-white">Multiple Possibilities</p>
        </div>
      </div>
    </section>
  );
}

function VieraSection() {
  return (
    <section id="viera" className="scroll-mt-28 border-b border-white/8 bg-black py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <SectionBadge tone="cyan">
          <Globe className="h-3.5 w-3.5" />
          VIERA TECHNOLOGY
        </SectionBadge>
        <h2 className="fg-hero-title text-4xl text-white md:text-5xl">
          TEASER + <span className="fg-text-gradient-teaser">ViERA</span> + AR
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-sm text-white/65 md:text-base">
          Virtual Intelligence Enabled Real Actor — where Human Creativity Meets Virtual Intelligence
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-3xl px-6">
        <h3 className="text-center text-2xl font-semibold text-white">ViERA Virtual Intelligence</h3>
        <p className="mt-4 text-center text-sm leading-relaxed text-white/65 md:text-base">
          ViERA brings an intelligent layer to Teasers. Instead of simply uploading content, users
          can create richer experiences where real people remain at the centre of the story,
          supported by intelligent digital technology.
        </p>

        <div className="teaser-panel mt-8 rounded-2xl p-6 md:p-8">
          <p className="text-center text-[0.65rem] font-semibold tracking-[0.22em] text-cyan-300">
            THE NEW CREATIVE EQUATION
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {TEASER_EQUATION.map((item, i) => {
                const Icon = equationIcons[item.icon];
                return (
                  <div key={item.label} className="flex items-center gap-3">
                    {i > 0 && <span className="text-lg text-white/30">+</span>}
                    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                      <Icon className="h-4 w-4 text-cyan-300" />
                      <span className="text-xs font-medium text-white/80">{item.label}</span>
                    </div>
                  </div>
                );
              })}
              <span className="text-lg text-white/30">=</span>
              <span className="text-sm font-bold tracking-[0.14em] text-violet-300">TEASER</span>
            </div>
          </div>

          <div className="teaser-panel teaser-panel-accent mt-4 rounded-2xl px-5 py-4 text-sm text-violet-100">
            Technology should amplify people — not replace them. ViERA brings virtual intelligence
            while the Real Actor remains the human face and voice.
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <SiteLinkButton to="/viera" variant="vieraOutline" size="md" className="border-cyan-400/40 text-cyan-300">
              Explore ViERA <ArrowRight className="h-4 w-4" />
            </SiteLinkButton>
            <SiteLinkButton to="/technology" variant="vieraOutline" size="md" className="teaser-btn-invigil">
              Explore InViGIL <ArrowRight className="h-4 w-4" />
            </SiteLinkButton>
          </div>
      </div>
    </section>
  );
}

function CategoriesSection() {
  return (
    <section id="categories" className="relative scroll-mt-28 border-b border-white/8 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 h-[480px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(168,85,247,0.12),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <SectionBadge tone="orange">
          <Sparkles className="h-3.5 w-3.5" />
          CREATE FOR ANYTHING
        </SectionBadge>
        <h2 className="fg-hero-title text-4xl text-white md:text-5xl">
          Teasers For <span className="fg-text-gradient-teaser-warm">Every Purpose</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm text-white/65 md:text-base">
          With InViGiL, users can create Teasers for any industry, idea, or audience.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {TEASER_CATEGORIES.map((cat) => (
            <div key={cat.label} className="teaser-category-card group">
              <span className="text-2xl">{cat.icon}</span>
              <p className="mt-3 text-[0.7rem] leading-snug text-white/75">{cat.label}</p>
              <span
                className="mt-4 h-0.5 w-8 rounded-full opacity-80 transition-all group-hover:w-12"
                style={{ backgroundColor: cat.accent }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MoreThanVideoSection() {
  return (
    <section className="border-b border-white/8 bg-black py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="fg-hero-title text-4xl text-white md:text-5xl">
          Teaser Is <span className="fg-text-gradient-teaser">More Than Short Video</span>
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-sm text-white/65 md:text-base">
          Traditional short-video platforms are primarily designed for watching. TEASER expands the
          concept.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/55">
            Digital interaction
          </span>
          <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/55">
            Content creation
          </span>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2 md:gap-3">
          {TEASER_CAPABILITIES.map((cap) => (
            <span key={cap} className="teaser-cap-pill">
              {cap}
            </span>
          ))}
        </div>

        <p className="mt-12 text-lg font-medium text-white">One Format. Multiple Possibilities.</p>
        <p className="mt-2 text-sm text-white/55">A Teaser can be:</p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {TEASER_FORMATS.map((format) => (
            <span
              key={format}
              className="rounded-full border border-violet-400/20 bg-violet-500/8 px-3 py-1.5 text-xs text-violet-100/85"
            >
              {format}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommerceSection() {
  return (
    <section id="commerce" className="scroll-mt-28 border-b border-white/8 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <SectionBadge tone="green">
          <ShoppingCart className="h-3.5 w-3.5" />
          VIRTUAL COMMERCE
        </SectionBadge>
        <h2 className="fg-hero-title text-4xl text-white md:text-5xl">
          See It <span className="fg-text-gradient-commerce">Before</span> You Buy It
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-sm text-white/65 md:text-base">
          TEASER extends short-form video into Virtual Commerce. A seller creates a Teaser. A buyer
          discovers, understands, and moves toward a transaction.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-7xl gap-8 px-6 lg:grid-cols-2">
        <div className="teaser-panel rounded-[1.75rem] p-6">
          <p className="text-center text-sm font-semibold text-emerald-200">Virtual Commerce App</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-1 text-[0.65rem] text-emerald-300/80">
            {TEASER_COMMERCE_FLOW.map((step, i) => (
              <span key={step} className="flex items-center gap-1">
                {i > 0 && <ArrowRight className="h-3 w-3 text-white/25" />}
                {step}
              </span>
            ))}
          </div>
          <SiteAnchorButton
            href="https://teaser.live"
            target="_blank"
            rel="noreferrer"
            className="teaser-btn-commerce mt-6 w-full"
          >
            Sell
          </SiteAnchorButton>
        </div>

        <div className="teaser-panel rounded-[1.75rem] p-6">
          <h3 className="flex items-center gap-2 text-xl font-semibold text-white">
            <span>🌾</span> Example: A Farmer
          </h3>
          <p className="mt-2 text-sm text-white/55">No complicated digital marketing required</p>
          <p className="mt-4 text-sm text-white/65">
            A farmer can record a short video of:
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {TEASER_FARM_PRODUCTS.map((item) => (
              <span
                key={item}
                className="rounded-full border border-emerald-400/25 bg-emerald-500/8 px-3 py-1 text-xs text-emerald-100"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm font-medium text-emerald-300">
            The Teaser becomes a digital window from the farm to the marketplace.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {TEASER_COMMERCE_FEATURES.map((feat) => (
              <div
                key={feat.title}
                className="rounded-xl border border-emerald-400/15 bg-emerald-500/5 p-4 text-left"
              >
                <p className="text-xs font-semibold text-emerald-200">{feat.title}</p>
                <p className="mt-1 text-[0.7rem] text-white/55">{feat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl px-6">
        <div className="teaser-panel rounded-[1.75rem] p-6 md:p-8">
          <h3 className="text-xl font-semibold text-white">
            Turn Your Teaser Into a Digital Business Card
          </h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {TEASER_PROFESSIONS.map((prof) => (
              <span
                key={prof}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/75"
              >
                {prof}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ARSection() {
  return (
    <section id="ar" className="scroll-mt-28 border-b border-white/8 bg-black py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <SectionBadge tone="cyan">AUGMENTED REALITY</SectionBadge>
        <h2 className="fg-hero-title text-4xl text-white md:text-5xl">AR Teasers Bring It To Life</h2>
        <p className="mx-auto mt-5 max-w-3xl text-sm text-white/65 md:text-base">
          Imagine pointing your smartphone at a product, location, poster, QR code or physical object
          and unlocking a digital experience.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-xs text-cyan-300/80">
          {TEASER_AR_FLOW.map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              {i > 0 && <ArrowRight className="h-3 w-3 text-white/25" />}
              {step}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {TEASER_AR_USES.map((use) => (
            <div key={use} className="teaser-panel rounded-2xl px-4 py-5 text-sm text-white/70">
              {use}
            </div>
          ))}
        </div>

        <div className="teaser-panel mx-auto mt-10 max-w-md rounded-2xl px-6 py-8">
          <p className="text-3xl font-bold text-cyan-300">AR</p>
          <p className="mt-1 text-sm text-white/55">Immersive</p>
        </div>
      </div>
    </section>
  );
}

function MicroMediaSection() {
  return (
    <section className="border-b border-white/8 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="fg-hero-title text-4xl text-white md:text-5xl">
          Create Your Own <span className="fg-text-gradient-teaser">Micro-Media</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm text-white/65">
          Every user can become a Creator, Communicator, Promoter or Digital Actor.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TEASER_MICRO_MEDIA.map((item) => (
            <div key={item.title} className="teaser-panel rounded-2xl p-5 text-left">
              <p className="text-sm font-semibold text-violet-200">{item.title}</p>
              <p className="mt-2 text-sm italic text-white/55">&ldquo;{item.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewGenerationSection() {
  return (
    <section className="border-b border-white/8 bg-black py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="fg-hero-title text-4xl text-white md:text-5xl">
          Teaser For The <span className="fg-text-gradient-teaser">New Generation</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm text-white/65">
          The next generation doesn&apos;t want endless information. They want:
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {TEASER_GENERATION_TRAITS.map((trait) => (
            <span key={trait} className="teaser-trait-pill">
              {trait}
            </span>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl space-y-3">
          {TEASER_GENERATION_COMPARE.map((row) => (
            <div key={row.left} className="grid grid-cols-2 gap-3 text-sm">
              <div className="teaser-panel rounded-xl px-4 py-3 text-white/50">{row.left}</div>
              <div className="teaser-panel teaser-panel-accent rounded-xl px-4 py-3 text-violet-100">
                {row.right}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(168,85,247,0.2),transparent_55%),radial-gradient(ellipse_at_70%_50%,rgba(34,211,238,0.14),transparent_50%)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <SectionBadge tone="violet">YOUR DIGITAL MEGAPHONE</SectionBadge>
        <h2 className="fg-hero-title text-5xl text-white md:text-6xl">
          The TEASER
          <br />
          Generation
          <br />
          <span className="fg-text-gradient-teaser">Has Arrived.</span>
        </h2>

        <div className="mx-auto mt-10 max-w-xl space-y-2 text-sm text-white/65">
          {TEASER_CTA_LINES.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="mt-10 space-y-2 text-xs font-semibold tracking-[0.18em] text-violet-200/80">
          <p>CREATE YOUR TEASER.</p>
          <p>LET ViERA POWER IT.</p>
          <p>LET AR BRING IT TO LIFE.</p>
          <p>LET InViGiL PROTECT IT.</p>
        </div>

        <TeaserCtaRow className="mt-10" />
      </div>
    </section>
  );
}

export function TeaserPage() {
  return (
    <div className="teaser-page animate-fade-in bg-black text-white">
      <TeaserHero />
      <PlatformEcosystemSection />
      <WhatIsSection />
      <VieraSection />
      <CategoriesSection />
      <MoreThanVideoSection />
      <CommerceSection />
      <ARSection />
      <MicroMediaSection />
      <NewGenerationSection />
      <CtaSection />
    </div>
  );
}
