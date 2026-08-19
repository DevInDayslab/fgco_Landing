import { createFileRoute } from "@tanstack/react-router";
import { NewspaperPage } from "@/components/media/NewspaperPage";
import { KURUKSHETRA_CONTENT } from "@/data/kurukshetra-content";
import { SEO_PAGES } from "@/data/seo-pages";
import { buildPageHead } from "@/lib/seo";

export const Route = createFileRoute("/kurukshetra")({
  head: () => buildPageHead(SEO_PAGES.kurukshetra),
  component: Kurukshetra,
});

function Kurukshetra() {
  return <NewspaperPage content={KURUKSHETRA_CONTENT} />;
}
