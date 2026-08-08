import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ap-media")({
  beforeLoad: () => {
    throw redirect({ to: "/technology" });
  },
});
