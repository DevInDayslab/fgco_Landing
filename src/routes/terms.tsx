import { createFileRoute } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { termsAndConditions } from "@/data/legal-content";
import { SEO_PAGES } from "@/data/seo-pages";
import { buildPageHead } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => buildPageHead(SEO_PAGES.terms),
  component: TermsPage,
});

function TermsPage() {
  return <LegalPageLayout document={termsAndConditions} />;
}
