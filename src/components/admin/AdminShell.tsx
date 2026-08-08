import { Outlet } from "@tanstack/react-router";
import { AdminSidebar, AdminTopbar } from "./AdminSidebar";

export function AdminShell() {
  return (
    <div className="flex min-h-screen bg-[#F9FAFB] text-zinc-900">
      <AdminSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <AdminTopbar />
        <main className="flex-1 px-8 py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
