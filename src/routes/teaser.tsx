import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/teaser")({
  beforeLoad: () => {
    throw redirect({ to: "/viera" });
  },
});
