import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { LeaderCard } from "@/components/leadership/LeaderCard";
import { PageSection, SitePageHero } from "@/components/site/PageLayout";
import { LEADERS, getLeaderPath } from "@/data/leadership";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — FG Media Leadership" },
      {
        name: "description",
        content:
          "Meet the leadership team of FG Media and Safety Technologies Pvt. Ltd. — technology visionaries, media leaders, and automotive safety experts.",
      },
      { property: "og:title", content: "FG Media Team" },
    ],
  }),
  component: Team,
});

function Team() {
  return (
    <div className="animate-fade-in">
      <SitePageHero
        overline="Leadership"
        title="Our Team"
        subtitle="The visionaries, innovators, and technical experts building FG Media's integrated ecosystem of media, technology, safety, and social impact."
      />

      <PageSection>
        <div className="grid gap-8">
          {LEADERS.map((leader) => (
            <LeaderCard key={leader.id} leader={leader} variant="row" />
          ))}
        </div>
      </PageSection>

      <PageSection border className="bg-surface/30 pb-28">
        <div className="fg-card rounded-3xl p-8 md:p-12">
          <div className="fg-card-inner">
            <p className="section-label text-center">Direct Profile Links</p>
            <h2 className="mt-4 text-center text-2xl md:text-3xl">Connect With Our Leaders</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {LEADERS.map((leader) => (
                <Link
                  key={leader.id}
                  to={getLeaderPath(leader)}
                  className="group rounded-xl border border-border/80 bg-background/40 p-5 text-center transition-colors hover:border-gold/40"
                >
                  <p className="font-semibold text-foreground group-hover:text-gold">{leader.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{leader.role}</p>
                  <p className="mt-3 font-mono text-xs text-gold">
                    fgco.in/{leader.slug}
                  </p>
                  {leader.aliases.length > 0 ? (
                    <p className="mt-1 font-mono text-[0.65rem] text-muted-foreground">
                      fgco.in/{leader.aliases[0]}
                    </p>
                  ) : null}
                </Link>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
              Learn more about our company vision on the{" "}
              <Link to="/about" className="text-gold hover:underline">
                About Us
              </Link>{" "}
              page.
              <ArrowRight className="ml-1 inline h-3.5 w-3.5" />
            </p>
          </div>
        </div>
      </PageSection>
    </div>
  );
}
