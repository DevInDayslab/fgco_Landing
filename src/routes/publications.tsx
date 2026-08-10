import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PublicationLogo } from "@/components/brand/PublicationLogo";
import { SiteAnchorButton, SiteLinkButton } from "@/components/site/SiteButton";
import { PageSection, HeroAccent, SitePageHero } from "@/components/site/PageLayout";
import { publicationProfiles } from "@/data/publications";
import { SEO_PAGES } from "@/data/seo-pages";
import { buildPageHead } from "@/lib/seo";

export const Route = createFileRoute("/publications")({
  head: () => buildPageHead(SEO_PAGES.publications),
  component: Publications,
});

function Publications() {
  return (
    <div className="animate-fade-in">
      <SitePageHero
        overline="Media Portfolio"
        title={
          <>
            Our <HeroAccent>Publications</HeroAccent>
          </>
        }
        subtitle="Three highly respected news weeklies serving readers across India in English, Telugu, and Kannada — combined print run of 20 lakh+ copies."
      />

      <PageSection className="pt-0">
        <div className="space-y-8">
        {publicationProfiles.map((p) => (
          <article
            key={p.title}
            className="grid overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-[260px_1fr_260px]"
          >
            <div className="flex items-center justify-center border-border bg-background/50 p-8 lg:border-r lg:p-10">
              <PublicationLogo id={p.id} size="lg" />
            </div>

            <div className="p-10">
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
              <h2 className="mt-5 text-4xl md:text-5xl">{p.title}</h2>
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
              <div className="border-b border-border p-10 text-center">
                <p className="text-3xl text-gold">{p.print}</p>
                <p className="mt-2 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                  Print Run
                </p>
              </div>
              <div className="p-10 text-center">
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

      <PageSection className="pt-0 pb-28">
        <div className="fg-card fg-card-featured rounded-3xl p-10 text-center md:p-16">
          <div className="fg-card-inner">
          <h2 className="text-4xl md:text-5xl">Advertise Across Our Network</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Reach 20 lakh+ readers across India simultaneously in English, Telugu, and Kannada.
            Print from Hyderabad, Mumbai, Chennai, Bengaluru, Kolkata, and New Delhi.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <SiteLinkButton to="/contact" variant="gold" size="lg">
              Advertise With Us <ArrowRight className="h-4 w-4" />
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
