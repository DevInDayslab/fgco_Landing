import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/rameshbabupasupuleti")({
  beforeLoad: () => {
    throw redirect({ to: "/ceo" });
  },
});
