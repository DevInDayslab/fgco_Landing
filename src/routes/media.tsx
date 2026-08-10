import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  ExternalLink,
  MapPin,
  Mic2,
  Newspaper,
} from "lucide-react";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { PublicationLogo } from "@/components/brand/PublicationLogo";
import { SiteAnchorButton, SiteLinkButton } from "@/components/site/SiteButton";
import { ContentCard, HeroAccent, PageSection, SitePageHero } from "@/components/site/PageLayout";
import {
  editorialPillars,
  digitalExtensions,
  MEDIA_WING_INTRO,
  mediaStats,
  printHubs,
  publicationProfiles,
} from "@/data/publications";
import { SEO_PAGES } from "@/data/seo-pages";
import { buildPageHead } from "@/lib/seo";

export const Route = createFileRoute("/media")({
  head: () => buildPageHead(SEO_PAGES.media),
  component: Media,
});

function Media() {
  return (
    <div className="animate-fade-in">
      <SitePageHero
        overline="Media Wing"
        title={
          <>
            FG Media <HeroAccent>Publications</HeroAccent>
          </>
        }
        subtitle="Empowering communities through quality journalism. A global premium initiative of FG Media Group — trusted multilingual news weeklies and digital media reaching 20 lakh+ readers across India."
      />

      <PageSection className="pt-0" border>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {mediaStats.map((stat) => (
            <ContentCard key={stat.label} variant="stat" className="text-center">
              <p className="text-3xl text-gold md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                {stat.label}
              </p>
            </ContentCard>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="section-label">Our Media Mission</p>
            <h2 className="mt-4 text-3xl md:text-4xl">
              Journalism that <span className="italic text-gold">uplifts & connects</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
              {MEDIA_WING_INTRO}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              Founded alongside FG Media Group in 2020, our publications have grown into nationally
              respected weeklies — combining rigorous reporting with regional language pride, while
              pioneering the bridge from print journalism to virtual commerce through InViGIL and
              ViERA.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <SiteLinkButton to="/publications" variant="gold" size="md">
                Full Publication Profiles <ArrowRight className="h-4 w-4" />
              </SiteLinkButton>
              <SiteLinkButton to="/contact" variant="outline" size="md">
                Advertise With Us
              </SiteLinkButton>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {editorialPillars.map((pillar) => (
              <ContentCard key={pillar.title} hover={false} className="p-5">
                <BookOpen className="mb-3 h-5 w-5 text-gold" />
                <h3 className="font-semibold">{pillar.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{pillar.text}</p>
              </ContentCard>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection border className="bg-surface/30">
        <p className="section-label text-center">Publication Portfolio</p>
        <h2 className="mt-4 text-center text-3xl md:text-4xl">
          Three National Weeklies · <span className="italic text-gold">One Trusted Network</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
          Color-coded by language and scope — each publication serves a distinct audience with the
          same commitment to truth, excellence, and community.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {publicationProfiles.map((pub) => (
            <div
              key={pub.id}
              className="fg-card fg-card-interactive group flex flex-col rounded-xl p-1"
            >
              <div className="fg-card-inner flex flex-col flex-1">
                <div
                  className={`relative flex h-52 flex-shrink-0 flex-col items-center justify-center overflow-hidden rounded-t-xl border-b border-border/50 bg-gradient-to-br from-accent/80 to-card/50 p-6`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/8 to-transparent" />
                  <PublicationLogo id={pub.id} size="md" className="relative z-10" />
                  <div className="relative z-10 mt-4 rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-xs font-bold text-gold">
                    EST. 2024
                  </div>
                </div>
                <div className="flex flex-grow flex-col justify-between p-6">
                  <div>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[0.6rem] font-semibold tracking-widest ${pub.badge}`}
                    >
                      {pub.code}
                    </span>
                    <h3 className="mt-3 text-lg font-bold text-gold">{pub.kicker}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pub.focus}</p>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border/50 pt-4 text-center">
                    <div>
                      <p className="text-xl text-gold">{pub.print}</p>
                      <p className="text-[0.6rem] tracking-widest text-muted-foreground uppercase">
                        Print Run
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{pub.coverage}</p>
                      <p className="text-[0.6rem] tracking-widest text-muted-foreground uppercase">
                        Coverage
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection className="pt-0">
        <p className="section-label">In Depth</p>
        <h2 className="mt-4 text-3xl md:text-4xl">
          Publication <span className="italic text-gold">Profiles</span>
        </h2>

        <div className="mt-12 space-y-8">
          {publicationProfiles.map((p) => (
            <article
              key={p.id}
              className="grid overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-[260px_1fr_260px]"
            >
              <div className="flex items-center justify-center border-border bg-background/50 p-8 lg:border-r lg:p-10">
                <PublicationLogo id={p.id} size="lg" />
              </div>

              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`rounded-full border px-3 py-1 text-[0.65rem] font-semibold tracking-widest ${p.badge}`}
                  >
                    {p.code}
                  </span>
                  <span className="text-[0.68rem] tracking-[0.2em] text-muted-foreground uppercase">
                    {p.kicker}
                  </span>
                </div>
                <h3 className="mt-5 text-3xl md:text-4xl">{p.title}</h3>
                <p className="mt-2 text-lg italic text-muted-foreground">{p.native}</p>
                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-background px-4 py-1.5 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className={`mt-6 text-sm font-medium italic ${p.accent}`}>{p.quote}</p>
              </div>

              <div className="grid border-border lg:border-l">
                <div className="border-b border-border p-8 text-center md:p-10">
                  <p className="text-3xl text-gold">{p.print}</p>
                  <p className="mt-2 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                    Print Run
                  </p>
                </div>
                <div className="p-8 text-center md:p-10">
                  <p className="text-lg">{p.coverage}</p>
                  <p className="mt-2 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                    Coverage
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection border className="bg-surface/40">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-bold text-gold">
              <MapPin size={16} /> Print Network
            </div>
            <h2 className="text-3xl md:text-4xl">
              National distribution from <span className="italic text-gold">six hubs</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              FG Media publications are printed and distributed from major metropolitan centres —
              ensuring timely delivery to subscribers, advertisers, and retail partners across India.
              Combined weekly circulation exceeds 20 lakh copies in English, Telugu, and Kannada.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {printHubs.map((city) => (
                <span
                  key={city}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>

          <ContentCard variant="featured" hover={false} className="p-8 md:p-10">
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <PublicationLogo id="hit-news" size="sm" />
              <PublicationLogo id="happy-india-times" size="sm" />
              <PublicationLogo id="kurukshetra" size="sm" />
            </div>
            <h3 className="text-2xl">Pan-India Reach</h3>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-gold">—</span>
                <span>
                  <strong className="text-foreground">HIT NEWS</strong> — National English weekly
                  with 10 lakh+ print run, pan-India coverage
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-te">—</span>
                <span>
                  <strong className="text-foreground">Happy India Times</strong> — Telugu weekly
                  across Andhra Pradesh & Telangana
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-ka">—</span>
                <span>
                  <strong className="text-foreground">Kurukshetra</strong> — Kannada weekly
                  empowering Karnataka communities
                </span>
              </li>
            </ul>
          </ContentCard>
        </div>
      </PageSection>

      <PageSection>
        <p className="section-label text-center">Beyond Print</p>
        <h2 className="mt-4 text-center text-3xl md:text-4xl">
          Digital <span className="italic text-gold">Media Extensions</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
          FG Media Group bridges traditional journalism with next-generation platforms — from
          spatial journalism on InViGIL to the Tharangam podcast network and award special editions.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {digitalExtensions.map((item) => (
            <Link key={item.title} to={item.to} className="block">
              <ContentCard className="h-full group">
                {"brandLogo" in item && item.brandLogo ? (
                  <div className="mb-4 flex h-12 items-center">
                    <BrandLogo id={item.brandLogo} size="sm" />
                  </div>
                ) : null}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="rounded-full border border-border bg-background px-3 py-1 text-[0.6rem] font-semibold tracking-widest text-muted-foreground uppercase">
                      {item.tag}
                    </span>
                    <h3 className="mt-4 text-xl font-semibold group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-gold" />
                </div>
              </ContentCard>
            </Link>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <ContentCard hover={false} className="text-center">
            <Mic2 className="mx-auto mb-4 h-8 w-8 text-gold" />
            <h3 className="font-semibold">Tharangam Network</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Deep-dive audio and video podcasts featuring leaders, innovators, and national
              conversations.
            </p>
          </ContentCard>
          <ContentCard hover={false} className="text-center">
            <div className="mx-auto mb-4 flex h-10 items-center justify-center">
              <BrandLogo id="invigil" size="sm" className="mx-auto" />
            </div>
            <h3 className="font-semibold">Electronic Media</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Television, social, and omni-channel digital promotions across the InViGIL network and
              award campaigns.
            </p>
          </ContentCard>
          <ContentCard hover={false} className="text-center">
            <Newspaper className="mx-auto mb-4 h-8 w-8 text-en" />
            <h3 className="font-semibold">Special Editions</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Collector's issues for HIT ViERA Awards, corporate features, and premium advertising
              real estate.
            </p>
          </ContentCard>
        </div>
      </PageSection>

      <PageSection className="pt-0 pb-28">
        <div className="fg-card rounded-3xl p-10 text-center md:p-16">
          <div className="fg-card-inner">
            <h2 className="text-4xl md:text-5xl">
              Advertise Across Our <span className="italic text-gold">Network</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Reach 20 lakh+ readers across India simultaneously in English, Telugu, and Kannada.
              Print from Hyderabad, Mumbai, Chennai, Bengaluru, Kolkata, and New Delhi — plus
              digital placement on InViGIL and award campaign media blitzes.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <SiteLinkButton to="/contact" variant="gold" size="lg">
                Advertise With Us <ArrowRight className="h-4 w-4" />
              </SiteLinkButton>
              <SiteLinkButton to="/awards" variant="outline" size="lg">
                HIT ViERA Awards Media Blitz
              </SiteLinkButton>
              <SiteAnchorButton
                href="https://www.fgco.in"
                target="_blank"
                rel="noreferrer"
                variant="outline"
                size="lg"
              >
                Visit fgco.in <ExternalLink className="h-4 w-4" />
              </SiteAnchorButton>
            </div>
          </div>
        </div>
      </PageSection>
    </div>
  );
}
