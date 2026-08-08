import { createFileRoute, Outlet, redirect, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { isAdminAuthenticated, logoutAdmin } from "@/lib/admin-auth";

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

  useEffect(() => {
    if (pathname === "/admin/login") return;

    if (!isAdminAuthenticated()) {
      logoutAdmin("Your session has expired. Please sign in again.");
      return;
    }

    function onStorage(event: StorageEvent) {
      if (event.key === "admin_token" && !event.newValue) {
        logoutAdmin("Your session has expired. Please sign in again.");
      }
    }

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [pathname]);

  if (pathname === "/admin/login") {
    return <Outlet />;
  }

  if (!isAdminAuthenticated()) {
    return null;
  }

  return <AdminShell />;
}
