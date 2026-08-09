import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/chandrashekhar")({
  beforeLoad: () => {
    throw redirect({ to: "/director" });
  },
});
