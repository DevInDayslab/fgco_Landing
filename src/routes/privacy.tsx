import { createFileRoute } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { privacyPolicy } from "@/data/legal-content";
import { SEO_PAGES } from "@/data/seo-pages";
import { buildPageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => buildPageHead(SEO_PAGES.privacy),
  component: PrivacyPage,
});

function PrivacyPage() {
  return <LegalPageLayout document={privacyPolicy} />;
}
