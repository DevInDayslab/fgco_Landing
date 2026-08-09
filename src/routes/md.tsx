import { createFileRoute } from "@tanstack/react-router";
import { LeaderProfilePage } from "@/components/leadership/LeaderProfilePage";
import { getLeaderBySlug } from "@/data/leadership";

export const Route = createFileRoute("/md")({
  head: () => ({
    meta: [
      { title: "Roopa T — Founder & Managing Director, FG Media" },
      {
        name: "description",
        content:
          "Roopa T — Founder & Managing Director of FG Media, women empowerment advocate, and digital safety innovator behind InViGIL and ViERA.",
      },
      { property: "og:title", content: "Roopa T — MD, FG Media" },
    ],
  }),
  component: MdPage,
});

function MdPage() {
  const leader = getLeaderBySlug("md");
  if (!leader) return null;
  return <LeaderProfilePage leader={leader} />;
}
