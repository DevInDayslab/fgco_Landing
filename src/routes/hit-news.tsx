import { createFileRoute } from "@tanstack/react-router";
import { NewspaperPage } from "@/components/media/NewspaperPage";
import { HIT_NEWS_CONTENT } from "@/data/hit-news-content";
import { SEO_PAGES } from "@/data/seo-pages";
import { buildPageHead } from "@/lib/seo";

export const Route = createFileRoute("/hit-news")({
  head: () => buildPageHead(SEO_PAGES.hitNews),
  component: HitNews,
});

function HitNews() {
  return <NewspaperPage content={HIT_NEWS_CONTENT} />;
}
