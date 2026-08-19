import { ArrowRight } from "lucide-react";
import { PublicationLogo } from "@/components/brand/PublicationLogo";
import { SiteLinkButton } from "@/components/site/SiteButton";
import { ContentCard, PageSection } from "@/components/site/PageLayout";
import { MEDIA_WING_INTRO, mediaStats, publicationProfiles } from "@/data/publications";

export function MediaWingSection() {
  return (
    <PageSection border className="bg-surface/30" id="media-wing">
      <p className="section-label text-center">Media Wing</p>
      <h2 className="mt-4 text-center text-3xl md:text-4xl">
        FG Media <span className="italic fg-text-gradient-gold">Publications</span>
      </h2>
      <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
        {MEDIA_WING_INTRO}
      </p>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {mediaStats.map((stat) => (
          <ContentCard key={stat.label} variant="stat" className="text-center">
            <p className="text-2xl text-gold md:text-3xl">{stat.value}</p>
            <p className="mt-2 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
              {stat.label}
            </p>
          </ContentCard>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {publicationProfiles.map((pub) => (
          <div key={pub.id} className="fg-card fg-card-interactive group flex flex-col rounded-xl p-1">
            <div className="fg-card-inner flex flex-1 flex-col">
              <div className="relative flex h-44 flex-shrink-0 flex-col items-center justify-center overflow-hidden rounded-t-xl border-b border-border/50 bg-gradient-to-br from-accent/80 to-card/50 p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/8 to-transparent" />
                <PublicationLogo id={pub.id} size="md" className="relative z-10" />
              </div>
              <div className="flex flex-grow flex-col justify-between p-6">
                <div>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[0.6rem] font-semibold tracking-widest ${pub.badge}`}
                  >
                    {pub.code}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-gold">{pub.cardTitle}</h3>
                  <p className="mt-1 text-xs italic text-muted-foreground">{pub.kicker}</p>
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

      <div className="mt-10 flex justify-center">
        <SiteLinkButton to="/media" variant="gold" size="lg">
          Explore the full Media Wing <ArrowRight className="h-4 w-4" />
        </SiteLinkButton>
      </div>
    </PageSection>
  );
}
