import { i as __toESM } from "../_runtime.mjs";
import { C as isAdminAuthenticated, R as cn, w as logoutAdmin } from "./router-CMFhHr5r.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { d as useRouterState, m as Outlet, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as LogOut, N as LayoutDashboard, R as Handshake, Y as CreditCard, h as Settings, k as Mail, s as Trophy } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-B9Az_2_B.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var navItems = [
	{
		to: "/admin",
		label: "Dashboard",
		icon: LayoutDashboard,
		end: true
	},
	{
		to: "/admin/nominations",
		label: "Nominations",
		icon: Trophy
	},
	{
		to: "/admin/sponsorships",
		label: "Sponsorships",
		icon: Handshake
	},
	{
		to: "/admin/payments",
		label: "Payments",
		icon: CreditCard
	},
	{
		to: "/admin/inquiries",
		label: "Inquiries",
		icon: Mail
	},
	{
		to: "/admin/settings",
		label: "Settings",
		icon: Settings
	}
];
function AdminSidebar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "flex w-64 shrink-0 flex-col border-r border-zinc-200 bg-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-zinc-100 px-5 py-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-lg font-bold tracking-tight text-zinc-900",
						children: ["FG MEDIA HUB", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-zinc-400",
							children: "™"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[10px] font-medium uppercase tracking-wider text-zinc-400",
						children: "Admin Panel"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-300",
						children: "FG Media Group"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex-1 space-y-1 px-3 py-4",
				children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: item.to,
					activeOptions: item.end ? { exact: true } : void 0,
					className: "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-500 transition-colors hover:bg-zinc-50 hover:text-zinc-900",
					activeProps: { className: "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-zinc-900 bg-zinc-100" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label })]
				}, item.to))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-zinc-100 px-4 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-zinc-900",
						children: "Admin"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-zinc-500",
						children: "FG Media Group"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => logoutAdmin(),
						className: cn("mt-3 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium", "text-zinc-500 transition-colors hover:bg-zinc-50 hover:text-red-600"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), "Logout"]
					})
				]
			})
		]
	});
}
function AdminTopbar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "flex items-center justify-end border-b border-zinc-200 bg-white px-8 py-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-right",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold text-zinc-900",
					children: "Admin"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-zinc-500",
					children: "pro@fgco.in"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-600",
				children: "Admin"
			})]
		})
	});
}
function AdminShell() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen bg-[#F9FAFB] text-zinc-900",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSidebar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 flex-1 flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminTopbar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 px-8 py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			})]
		})]
	});
}
function AdminLayout() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		if (pathname === "/admin/login") return;
		if (!isAdminAuthenticated()) {
			logoutAdmin("Your session has expired. Please sign in again.");
			return;
		}
		function onStorage(event) {
			if (event.key === "admin_token" && !event.newValue) logoutAdmin("Your session has expired. Please sign in again.");
		}
		window.addEventListener("storage", onStorage);
		return () => window.removeEventListener("storage", onStorage);
	}, [pathname]);
	if (pathname === "/admin/login") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	if (!isAdminAuthenticated()) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {});
}
//#endregion
export { AdminLayout as component };
