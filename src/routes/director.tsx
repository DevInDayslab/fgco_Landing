import { createFileRoute } from "@tanstack/react-router";
import { JsonLd } from "@/components/seo/JsonLd";
import { LeaderProfilePage } from "@/components/leadership/LeaderProfilePage";
import { getLeaderBySlug } from "@/data/leadership";
import { personSchema } from "@/data/seo-structured-data";
import { SEO_PAGES } from "@/data/seo-pages";
import { buildPageHead } from "@/lib/seo";

export const Route = createFileRoute("/director")({
  head: () => buildPageHead(SEO_PAGES.director),
  component: DirectorPage,
});

function DirectorPage() {
  const leader = getLeaderBySlug("director");
  if (!leader) return null;
  return (
    <>
      <JsonLd data={personSchema(leader)} />
      <LeaderProfilePage leader={leader} />
    </>
  );
}
