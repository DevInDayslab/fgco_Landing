import { createFileRoute } from "@tanstack/react-router";
import { LeaderProfilePage } from "@/components/leadership/LeaderProfilePage";
import { getLeaderBySlug } from "@/data/leadership";

export const Route = createFileRoute("/director")({
  head: () => ({
    meta: [
      { title: "Chandra Shekhar Pasupuleti — Director, FG Media" },
      {
        name: "description",
        content:
          "Chandra Shekhar Pasupuleti — Director and Senior Automobile Technical & Safety Expert at FG Media with 25+ years of automotive expertise.",
      },
      { property: "og:title", content: "Chandra Shekhar Pasupuleti — Director, FG Media" },
    ],
  }),
  component: DirectorPage,
});

function DirectorPage() {
  const leader = getLeaderBySlug("director");
  if (!leader) return null;
  return <LeaderProfilePage leader={leader} />;
}
