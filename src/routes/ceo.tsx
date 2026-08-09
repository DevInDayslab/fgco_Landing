import { createFileRoute } from "@tanstack/react-router";
import { LeaderProfilePage } from "@/components/leadership/LeaderProfilePage";
import { getLeaderBySlug } from "@/data/leadership";

export const Route = createFileRoute("/ceo")({
  head: () => ({
    meta: [
      { title: "Ramesh Babu Pasupuleti — Founder & CEO, FG Media" },
      {
        name: "description",
        content:
          "Ramesh Babu Pasupuleti — Global Technology Visionary, Founder & CEO of FG Media, pioneer of ViERA, InViGIL, and Virtual Intelligence Technology.",
      },
      { property: "og:title", content: "Ramesh Babu Pasupuleti — CEO, FG Media" },
    ],
  }),
  component: CeoPage,
});

function CeoPage() {
  const leader = getLeaderBySlug("ceo");
  if (!leader) return null;
  return <LeaderProfilePage leader={leader} />;
}
