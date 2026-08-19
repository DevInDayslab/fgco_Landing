import { createFileRoute } from "@tanstack/react-router";
import { NewspaperPage } from "@/components/media/NewspaperPage";
import { HAPPY_INDIA_TIMES_CONTENT } from "@/data/happy-india-times-content";
import { SEO_PAGES } from "@/data/seo-pages";
import { buildPageHead } from "@/lib/seo";

export const Route = createFileRoute("/happy-india-times")({
  head: () => buildPageHead(SEO_PAGES.happyIndiaTimes),
  component: HappyIndiaTimes,
});

function HappyIndiaTimes() {
  return <NewspaperPage content={HAPPY_INDIA_TIMES_CONTENT} />;
}
