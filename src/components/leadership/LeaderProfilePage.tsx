import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { LeaderProfile } from "@/components/leadership/LeaderProfile";
import { PageSection, PullQuote, SitePageHero, TagCloud } from "@/components/site/PageLayout";
import type { LeaderProfile as LeaderProfileData } from "@/data/leadership";

const CEO_TAGS = [
  "Technology",
  "Digital Transformation",
  "Virtual Intelligence",
  "Cybersecurity",
  "Media & Journalism",
  "Social Innovation",
];

export function LeaderProfilePage({ leader }: { leader: LeaderProfileData }) {
  const isCeo = leader.id === "ramesh";

  return (
    <div className="animate-fade-in">
      <SitePageHero
        overline={leader.overline}
        title={leader.name}
        subtitle={
          isCeo
            ? `${leader.role} — ${leader.organization}. ${leader.shortHeadline}`
            : `${leader.role} — ${leader.organization}`
        }
      >
        <Link
          to="/team"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Team
        </Link>
      </SitePageHero>

      {leader.quote ? (
        <PageSection border className="bg-surface/30 py-12">
          <PullQuote tone="gold">
            <p className="text-xl leading-relaxed text-foreground italic md:text-2xl">
              &ldquo;{leader.quote}&rdquo;
            </p>
            <p className="mt-4 text-sm tracking-[0.15em] text-gold uppercase">— {leader.name}</p>
          </PullQuote>
        </PageSection>
      ) : null}

      <LeaderProfile
        overline="About"
        name={leader.name}
        role={leader.role}
        organization={leader.organization}
        tags={leader.tags}
        tagline={leader.tagline}
        credentials={leader.credentials}
        headline={
          isCeo ? (
            <>
              A Rare Convergence of{" "}
              <span className="block italic fg-text-gradient-gold">Vision</span>
            </>
          ) : (
            leader.headline
          )
        }
        paragraphs={leader.paragraphs}
        highlights={leader.highlights}
        sections={leader.sections}
        quote={undefined}
        secondaryQuote={leader.secondaryQuote}
        footer={leader.footer}
        socialLinks={leader.socialLinks}
        image={leader.image}
        imageAlt={leader.imageAlt}
        imageClassName={leader.imageClassName}
        reverse={leader.id === "roopa"}
      />

      {isCeo ? (
        <PageSection border className="bg-surface/40">
          <div className="text-center">
            <p className="section-label">Focus Areas</p>
            <TagCloud tags={CEO_TAGS} tone="gold" className="mt-6" />
          </div>
        </PageSection>
      ) : null}

      {(leader.closingTagline || leader.closingText) && (
        <PageSection className="pb-28">
          <div className="fg-card rounded-3xl p-10 text-center md:p-14">
            <div className="fg-card-inner">
              {leader.closingTagline ? (
                <p className="text-xl font-semibold leading-relaxed text-foreground md:text-2xl">
                  {leader.closingTagline}
                </p>
              ) : null}
              {leader.closingText ? (
                <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  {leader.closingText}
                </p>
              ) : null}
              {!isCeo && leader.quote ? (
                <blockquote className="mx-auto mt-8 max-w-3xl border-t border-border pt-8 text-base leading-relaxed text-muted-foreground italic md:text-lg">
                  &ldquo;{leader.quote}&rdquo;
                  <footer className="mt-4 text-xs not-italic tracking-[0.15em] text-gold uppercase">
                    — {leader.name}
                  </footer>
                </blockquote>
              ) : null}
            </div>
          </div>
        </PageSection>
      )}
    </div>
  );
}
