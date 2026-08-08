import { INFLUENCER_INTRO, influencerPerks } from "@/data/awards";
import { ContentCard, IconBadge } from "@/components/site/PageLayout";

export function InfluencerBlock() {
  return (
    <div className="fg-card fg-card-featured rounded-3xl p-10 md:p-14">
      <div className="fg-card-inner">
        <p className="section-label">Top 100 Influencers of India 2026</p>
        <h2 className="mt-4 text-3xl md:text-4xl">
          Celebrating <span className="italic text-gold">National Influence</span>
        </h2>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {INFLUENCER_INTRO}
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {influencerPerks.map((perk) => (
            <ContentCard key={perk.title} hover={false} className="text-center">
              <div className="mx-auto">
                <IconBadge icon={perk.icon} size="md" />
              </div>
              <h3 className="mt-4 text-sm font-semibold">{perk.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{perk.text}</p>
            </ContentCard>
          ))}
        </div>
      </div>
    </div>
  );
}
