import { createFileRoute } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { refundPolicy } from "@/data/legal-content";
import { SEO_PAGES } from "@/data/seo-pages";
import { buildPageHead } from "@/lib/seo";

export const Route = createFileRoute("/refund-policy")({
  head: () => buildPageHead(SEO_PAGES.refundPolicy),
  component: RefundPolicyPage,
});

function RefundPolicyPage() {
  return <LegalPageLayout document={refundPolicy} />;
}
