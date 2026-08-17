import { createFileRoute } from "@tanstack/react-router";
import { FoundationPageContent } from "@/components/foundation/FoundationPageContent";
import { SEO_PAGES } from "@/data/seo-pages";
import { buildPageHead } from "@/lib/seo";

export const Route = createFileRoute("/foundation")({
  head: () => buildPageHead(SEO_PAGES.foundation),
  component: Foundation,
});

function Foundation() {
  return <FoundationPageContent />;
}
