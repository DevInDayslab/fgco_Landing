import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHeader } from "./PageHeader-B95mVO_B.mjs";
import { n as StatusBadge, t as PaymentBadge } from "./StatusBadge-CKMCsx9p.mjs";
import { c as useNominations, i as useInquiries, n as formatAdminDate, r as useDashboardMetrics, u as usePayments } from "./admin-api-C-TtyBAg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.index-BRywnh0W.js
var import_jsx_runtime = require_jsx_runtime();
function MetricCard({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-400",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-3xl font-bold tracking-tight text-zinc-900",
			children: value
		})]
	});
}
function AdminDashboard() {
	const metrics = useDashboardMetrics();
	const nominations = useNominations();
	const inquiries = useInquiries();
	const payments = usePayments();
	const isLoading = metrics.isLoading;
	const error = metrics.error;
	const paidPayments = payments.data?.items.filter((p) => p.status === "paid").length ?? 0;
	const recentNominations = nominations.data?.items.slice(0, 5) ?? [];
	const recentInquiries = inquiries.data?.items.slice(0, 5) ?? [];
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center justify-center py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-zinc-500",
			children: "Loading dashboard…"
		})
	});
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700",
		children: error.message
	});
	const data = metrics.data;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Dashboard",
			subtitle: "Live platform snapshot and incoming activity across nominations, sponsorships, and inquiries."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
					label: "Total Nominations",
					value: data?.nominations ?? 0
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
					label: "Total Revenue (INR)",
					value: `₹${(data?.revenueInr ?? 0).toLocaleString("en-IN")}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
					label: "Contact Inquiries",
					value: data?.inquiries ?? 0
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
					label: "Paid Transactions",
					value: paidPayments
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-zinc-200/80 bg-white p-6 shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-bold text-zinc-900",
						children: "Recent Nominations"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-zinc-500",
						children: "Latest submissions from the awards portal."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 divide-y divide-zinc-100",
						children: recentNominations.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "py-6 text-sm text-zinc-400",
							children: "No nominations yet."
						}) : recentNominations.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate font-semibold text-zinc-900",
									children: row.nomineeName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-zinc-500",
									children: [
										row.category,
										" · ",
										formatAdminDate(row.createdAt)
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentBadge, { paid: row.paymentPaid })]
						}, row.id))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-zinc-200/80 bg-white p-6 shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-bold text-zinc-900",
						children: "Recent Inquiries"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-zinc-500",
						children: "Contact form messages from the website."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 divide-y divide-zinc-100",
						children: recentInquiries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "py-6 text-sm text-zinc-400",
							children: "No inquiries yet."
						}) : recentInquiries.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate font-semibold text-zinc-900",
									children: row.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "truncate text-xs text-zinc-500",
									children: [
										row.email,
										" · ",
										row.inquiryType ?? "General"
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								variant: "pending",
								children: "New"
							})]
						}, row.id))
					})
				]
			})]
		})
	] });
}
//#endregion
export { AdminDashboard as component };
