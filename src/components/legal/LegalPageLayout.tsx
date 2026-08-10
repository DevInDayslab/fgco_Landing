import { Link } from "@tanstack/react-router";
import { PageSection, SitePageHero } from "@/components/site/PageLayout";
import type { LegalDocument } from "@/data/legal";
import { LEGAL_CONTACT, LEGAL_ENTITY } from "@/data/legal";

const legalLinks = [
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/refund-policy", label: "Refund Policy" },
  { to: "/cancellation-policy", label: "Cancellation Policy" },
] as const;

function LegalBody({ sections }: { sections: LegalDocument["sections"] }) {
  return (
    <div className="legal-prose mx-auto max-w-3xl space-y-10 text-sm leading-relaxed text-muted-foreground">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-28">
          <h2 className="text-lg font-semibold text-foreground">{section.title}</h2>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="mt-3">
              {paragraph}
            </p>
          ))}
          {section.bullets && (
            <ul className="mt-3 list-disc space-y-2 pl-5">
              {section.bullets.map((item) => (
                <li key={item.slice(0, 48)}>{item}</li>
              ))}
            </ul>
          )}
          {section.subsections?.map((subsection) => (
            <div key={subsection.title} className="mt-5">
              <h3 className="text-base font-medium text-foreground">{subsection.title}</h3>
              {subsection.paragraphs?.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="mt-2">
                  {paragraph}
                </p>
              ))}
              {subsection.bullets && (
                <ul className="mt-2 list-disc space-y-2 pl-5">
                  {subsection.bullets.map((item) => (
                    <li key={item.slice(0, 48)}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}

export function LegalPageLayout({ document }: { document: LegalDocument }) {
  return (
    <div className="animate-fade-in">
      <SitePageHero
        overline="Legal"
        title={document.title}
        subtitle={document.subtitle}
      />

      <PageSection className="pt-0">
        <p className="mx-auto mb-10 max-w-3xl text-xs text-muted-foreground">
          Last updated: {document.lastUpdated} · {LEGAL_ENTITY}
        </p>

        <nav
          aria-label="Legal policies"
          className="mx-auto mb-12 flex max-w-3xl flex-wrap gap-2"
        >
          {legalLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-gold/40 hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <LegalBody sections={document.sections} />

        <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-border bg-card/50 p-6 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">Questions about these policies?</p>
          <p className="mt-2">
            Contact {LEGAL_ENTITY} at{" "}
            <a href={`mailto:${LEGAL_CONTACT.email}`} className="text-gold hover:underline">
              {LEGAL_CONTACT.email}
            </a>
            {", "}
            <a href={`mailto:${LEGAL_CONTACT.awardsEmail}`} className="text-gold hover:underline">
              {LEGAL_CONTACT.awardsEmail}
            </a>
            , or call {LEGAL_CONTACT.phone}. Registered office: {LEGAL_CONTACT.address}.
          </p>
        </div>
      </PageSection>
    </div>
  );
}
