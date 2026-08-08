import { createFileRoute } from "@tanstack/react-router";
import { Activity, Globe, Shield } from "lucide-react";
import { InvigilSection } from "@/components/awards/InvigilSection";
import { SiteLinkButton } from "@/components/site/SiteButton";
import { INVIGIL_INTRO } from "@/data/awards";
import { PageSection, HeroAccent, SitePageHero } from "@/components/site/PageLayout";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "InViGIL Application — World's First Virtual Commerce Platform | FG Media" },
      {
        name: "description",
        content: INVIGIL_INTRO,
      },
      { property: "og:title", content: "InViGIL Application — Intelligence Beyond Vision" },
    ],
  }),
  component: Technology,
});

function Technology() {
  return (
    <div className="animate-fade-in">
      <SitePageHero
        tone="viera"
        overline="InViGIL Application"
        title={
          <>
            Intelligence Beyond <HeroAccent>Vision</HeroAccent>
          </>
        }
        subtitle="Powered by ViERA (Virtual Intelligence Enabled Real Actor). The World's First Virtual Commerce Platform."
      >
        <SiteLinkButton to="/viera" variant="vieraOutline" size="md">
          Explore ViERA Engine →
        </SiteLinkButton>
      </SitePageHero>

      <PageSection className="pt-0 pb-24">
        <InvigilSection />

        <div className="fg-panel fg-card-viera mt-16 rounded-3xl p-8 md:p-16">
          <div className="fg-card-inner relative z-[1] grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-viera/30 bg-viera/10 px-4 py-2 text-sm font-bold text-viera">
                <Shield size={16} /> SECURITY & INNOVATION
              </div>
              <h2 className="mb-8 text-3xl">
                Innovations for Progress of the Society (IPS)
              </h2>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                    <Globe className="text-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-semibold">Empowering Rural Entrepreneurs</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Farmers digitally empowered to auction crops globally right from their
                      farmland. Just take a video, make an InViGIL post, and connect with global
                      buyers directly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-viera/30 bg-viera/10">
                    <Shield className="text-viera" size={24} />
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-semibold">Cyber Commandos</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      A dedicated security program actively preventing fraudulent activities, online
                      cheating, and cyberbullying. Commandos help users utilize InViGIL effectively
                      and safely.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border border-viera/30 bg-card p-8 shadow-[0_0_30px_rgba(59,130,246,0.15)] md:h-80 md:w-80">
                <div className="absolute inset-0 animate-[spin_60s_linear_infinite] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="relative z-10 text-center">
                  <Activity className="mx-auto mb-4 h-20 w-20 text-viera md:mb-6 md:h-24 md:w-24" />
                  <h3 className="mb-2 text-2xl font-black tracking-widest uppercase md:text-3xl">
                    ViERA
                  </h3>
                  <p className="text-xs font-medium text-viera md:text-sm">
                    Virtual Intelligence Enabled Real Actor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </div>
  );
}
