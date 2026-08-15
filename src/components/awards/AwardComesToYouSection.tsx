import { Link } from "@tanstack/react-router";
import { PullQuote, StepFlow, TagCloud } from "@/components/site/PageLayout";
import {
  AWARD_COMES_TO_YOU_CAMPAIGN_HASHTAGS,
  AWARD_COMES_TO_YOU_PATH,
  AWARD_COMES_TO_YOU_SEO_INTRO,
  HIT_VIERA_HONOURS_HASHTAG,
} from "@/data/award-comes-to-you";
import {
  achievementPlaces,
  awardDeliveryPlaces,
  awardDeliveryProcess,
  AWARD_COMES_TO_YOU_HASH,
  circleEvaluationCriteria,
  legacyPathSteps,
} from "@/data/circle-of-excellence";

type AwardComesToYouSectionProps = {
  variant?: "section" | "page";
};

export function AwardComesToYouSection({ variant = "section" }: AwardComesToYouSectionProps) {
  const isPage = variant === "page";

  return (
    <section
      id={isPage ? undefined : AWARD_COMES_TO_YOU_HASH}
      className="scroll-mt-24 border-b border-border/60 py-16 md:py-20"
    >
      <div className="mx-auto max-w-5xl px-6">
        {!isPage ? (
          <div className="text-center">
            <p className="section-label">The HIT ViERA Philosophy</p>
            <h2 className="mt-3 text-3xl leading-tight md:text-4xl lg:text-5xl">
              Award <span className="italic fg-text-gradient-gold">Comes to You</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              We don&apos;t ask excellence to come to us. HIT ViERA takes the honour to where
              excellence lives — home, office, factory, institution, laboratory, studio, farm or
              workplace.
            </p>
          </div>
        ) : (
          <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
            {AWARD_COMES_TO_YOU_SEO_INTRO}
          </p>
        )}

        <PullQuote tone="viera" className="mx-auto mt-10 max-w-3xl">
          <p className="text-base leading-relaxed text-foreground md:text-lg">
            Imagine your national award presented where you built your achievement — with family,
            colleagues and community witnessing the moment.
          </p>
        </PullQuote>

        <TagCloud tags={[...awardDeliveryPlaces]} tone="viera" className="mt-8" />

        <div className="mt-14 border-t border-border/50 pt-14">
          <p className="section-label text-center">How It Works</p>
          <ol className="mx-auto mt-8 max-w-3xl space-y-6">
            {awardDeliveryProcess.map((step) => (
              <li key={step.step} className="flex gap-4 md:gap-6">
                <span className="w-8 shrink-0 text-[0.65rem] font-bold tracking-[0.15em] text-gold">
                  {step.step}
                </span>
                <div className="min-w-0 border-l border-border/60 pl-4 md:pl-6">
                  <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 grid gap-10 border-t border-border/50 pt-14 md:grid-cols-2">
          <div>
            <p className="section-label">Standards of Distinction</p>
            <TagCloud tags={[...circleEvaluationCriteria]} tone="gold" className="mt-4 !justify-start" />
          </div>
          <div>
            <p className="section-label">Where Achievement Happens</p>
            <TagCloud tags={[...achievementPlaces]} tone="viera" className="mt-4 !justify-start" />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We honour achievement where it was created — not only on a distant award stage.
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-border/50 pt-14">
          <p className="section-label text-center">From Achievement to Legacy</p>
          <StepFlow steps={[...legacyPathSteps]} className="mt-6" />
        </div>

        <blockquote className="mx-auto mt-14 max-w-2xl text-center">
          <p className="text-sm text-muted-foreground">
            Most awards ask: &ldquo;Will you come and receive your award?&rdquo;
          </p>
          <p className="mt-3 text-lg font-medium text-foreground md:text-xl">
            HIT ViERA asks: &ldquo;Where did you create your achievement? Let us bring the honour
            there.&rdquo;
          </p>
        </blockquote>

        {isPage ? (
          <div className="mt-14 border-t border-border/50 pt-14">
            <p className="section-label text-center">Join the Conversation</p>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
              Share your journey with the dedicated {HIT_VIERA_HONOURS_HASHTAG} series and campaign
              hashtags celebrating excellence across India.
            </p>
            <TagCloud
              tags={[...AWARD_COMES_TO_YOU_CAMPAIGN_HASHTAGS]}
              tone="gold"
              className="mt-6"
            />
          </div>
        ) : (
          <p className="mx-auto mt-10 max-w-xl text-center text-sm">
            <Link to={AWARD_COMES_TO_YOU_PATH} className="font-medium text-gold hover:underline">
              Learn more about Award Comes to You →
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
