import { Link } from "@tanstack/react-router";
import {
  CreditCard,
  Handshake,
  LayoutDashboard,
  LogOut,
  Mail,
  Settings,
  Trophy,
} from "lucide-react";
import { logoutAdmin } from "@/lib/admin-auth";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/admin/nominations", label: "Nominations", icon: Trophy },
  { to: "/admin/sponsorships", label: "Sponsorships", icon: Handshake },
  { to: "/admin/payments", label: "Payments", icon: CreditCard },
  { to: "/admin/inquiries", label: "Inquiries", icon: Mail },
  { to: "/admin/settings", label: "Settings", icon: Settings },
] as const;

export function AdminSidebar() {
  return (
    <aside className="flex w-64 shrink-0 flex-col border-r border-zinc-200 bg-white">
      <div className="border-b border-zinc-100 px-5 py-6">
        <p className="text-lg font-bold tracking-tight text-zinc-900">
          FG MEDIA HUB<span className="text-zinc-400">™</span>
        </p>
        <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-zinc-400">
          Admin Panel
        </p>
        <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-300">
          FG Media Group
        </p>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            activeOptions={item.end ? { exact: true } : undefined}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-500 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
            activeProps={{
              className:
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-zinc-900 bg-zinc-100",
            }}
          >
            <item.icon className="h-4 w-4 shrink-0" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="border-t border-zinc-100 px-4 py-4">
        <p className="text-sm font-semibold text-zinc-900">Admin</p>
        <p className="text-xs text-zinc-500">FG Media Group</p>
        <button
          type="button"
          onClick={() => logoutAdmin()}
          className={cn(
            "mt-3 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium",
            "text-zinc-500 transition-colors hover:bg-zinc-50 hover:text-red-600",
          )}
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </aside>
  );
}

export function AdminTopbar() {
  return (
    <header className="flex items-center justify-end border-b border-zinc-200 bg-white px-8 py-4">
      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-semibold text-zinc-900">Admin</p>
          <p className="text-xs text-zinc-500">pro@fgco.in</p>
        </div>
        <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
          Admin
        </span>
      </div>
    </header>
  );
}
