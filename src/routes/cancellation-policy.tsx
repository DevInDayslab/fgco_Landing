import { createFileRoute } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { cancellationPolicy } from "@/data/legal-content";
import { SEO_PAGES } from "@/data/seo-pages";
import { buildPageHead } from "@/lib/seo";

export const Route = createFileRoute("/cancellation-policy")({
  head: () => buildPageHead(SEO_PAGES.cancellationPolicy),
  component: CancellationPolicyPage,
});

function CancellationPolicyPage() {
  return <LegalPageLayout document={cancellationPolicy} />;
}
