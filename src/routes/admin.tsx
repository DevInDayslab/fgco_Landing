import { createFileRoute, Outlet, redirect, useRouterState } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { isAdminAuthenticated } from "@/lib/api-client";

export const Route = createFileRoute("/admin")({
  beforeLoad: ({ location }) => {
    if (location.pathname === "/admin/login") {
      return;
    }
    if (typeof window !== "undefined" && !isAdminAuthenticated()) {
      throw redirect({ to: "/admin/login" });
    }
  },
  component: AdminLayout,
});

function AdminLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  if (pathname === "/admin/login") {
    return <Outlet />;
  }

  return <AdminShell />;
}
