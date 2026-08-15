import { createFileRoute, Link } from "@tanstack/react-router";
import { AwardComesToYouSection } from "@/components/awards/AwardComesToYouSection";
import { CtaRow } from "@/components/awards/CtaRow";
import { PageHero } from "@/components/awards/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { awardComesToYouPageSchema } from "@/data/seo-structured-data";
import { SEO_PAGES } from "@/data/seo-pages";
import { buildPageHead } from "@/lib/seo";
import { HeroAccent } from "@/components/site/PageLayout";

export const Route = createFileRoute("/award-comes-to-you")({
  head: () => buildPageHead(SEO_PAGES.awardComesToYou),
  component: AwardComesToYouPage,
});

function AwardComesToYouPage() {
  return (
    <>
      <JsonLd data={awardComesToYouPageSchema()} />
      <PageHero
        variant="awardComesToYou"
        align="center"
        overline="HIT ViERA National Awards 2026"
        title={
          <>
            Award <HeroAccent>Comes to You</HeroAccent>
          </>
        }
        subtitle="National award recognition delivered to achievers at home, office, factory, institution or workplace across India."
        showEventBar
      >
        <CtaRow
          primary={{ to: "/nominate", label: "Submit Nomination" }}
          secondary={{ to: "/awards", label: "Explore Awards" }}
          className="justify-center"
        />
      </PageHero>

      <AwardComesToYouSection variant="page" />

      <section className="border-t border-border/60 bg-surface/30 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl text-foreground md:text-3xl">
            Ready for <span className="italic text-gold">National Recognition</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Nominate an achiever for the HIT ViERA National Awards 2026 or explore the full awards
            programme and HIT ViERA Circle of Excellence.
          </p>
          <CtaRow
            primary={{ to: "/nominate", label: "Nominate Now" }}
            secondary={{ to: "/sponsorship", label: "Sponsorship" }}
            className="mt-8 justify-center"
          />
          <p className="mt-8 text-sm text-muted-foreground">
            <Link to="/awards" className="text-gold hover:underline">
              ← Back to HIT ViERA Awards
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
