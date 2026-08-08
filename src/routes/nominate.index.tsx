import { createFileRoute, Link } from "@tanstack/react-router";
import { NominateBrief } from "@/components/awards/NominateBrief";
import { NominationWizard } from "@/components/awards/NominationWizard";
import { HeroBackdrop } from "@/components/site/PageLayout";
import { siteHeroImages } from "@/data/site-heroes";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/nominate/")({
  head: () => ({
    meta: [
      { title: "Official Nomination Portal — HIT ViERA Awards 2026" },
      {
        name: "description",
        content:
          "Submit your nomination for the HIT ViERA National Awards 2026. Official portal by FG Media Group.",
      },
      { property: "og:title", content: "HIT Awards Nomination Portal" },
      {
        property: "og:description",
        content: "HIT Awards & Special Edition — Official Nomination Portal by FG Media Group.",
      },
    ],
  }),
  component: NominateIndex,
});

function NominateIndex() {
  return (
    <>
      <Toaster />
      <section className="relative overflow-hidden border-b border-border">
        <HeroBackdrop image={siteHeroImages.city} showBlur={false} />

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:py-20">
          <Link
            to="/awards"
            className="mb-10 inline-flex items-center text-sm font-medium text-gold transition-opacity hover:opacity-80"
          >
            ← Back to Awards
          </Link>

          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,40rem)] lg:gap-14 xl:gap-16">
            <div className="min-w-0 max-w-xl">
              <NominateBrief />
            </div>

            <div className="min-w-0 w-full lg:max-w-[40rem]">
              <div className="lg:sticky lg:top-24 lg:self-start">
                <NominationWizard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
