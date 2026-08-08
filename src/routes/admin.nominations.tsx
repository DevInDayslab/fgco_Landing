import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/nominations")({
  component: () => <Outlet />,
});
