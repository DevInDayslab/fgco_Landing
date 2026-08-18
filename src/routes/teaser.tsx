import { createFileRoute } from "@tanstack/react-router";
import { TeaserPage } from "@/components/teaser/TeaserPage";
import { SEO_PAGES } from "@/data/seo-pages";
import { buildPageHead } from "@/lib/seo";

export const Route = createFileRoute("/teaser")({
  head: () => buildPageHead(SEO_PAGES.teaser),
  component: Teaser,
});

function Teaser() {
  return <TeaserPage />;
}
