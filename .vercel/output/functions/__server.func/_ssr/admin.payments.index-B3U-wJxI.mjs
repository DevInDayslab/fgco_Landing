import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHeader } from "./PageHeader-B95mVO_B.mjs";
import { n as StatusBadge } from "./StatusBadge-CKMCsx9p.mjs";
import { n as formatAdminDate, u as usePayments } from "./admin-api-B4HP16to.mjs";
import { t as ExportCsvButton } from "./ExportCsvButton-BwrfTFmu.mjs";
import { i as DataTableShell, n as DataTableEmpty, r as DataTableRow, t as DataTableCell } from "./DataTable-CV6g6TBE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.payments.index-B3U-wJxI.js
var import_jsx_runtime = require_jsx_runtime();
function AdminPayments() {
	const navigate = useNavigate();
	function openRow(id) {
		navigate({
			to: "/admin/payments/$id",
			params: { id }
		});
	}
	const { data, isLoading, error } = usePayments();
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-zinc-500",
		children: "Loading payments…"
	});
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700",
		children: error.message
	});
	const items = data?.items ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Payments",
		subtitle: "Razorpay transactions for nominations and sponsorship advance payments.",
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportCsvButton, {
			filename: "payments",
			rows: items
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableShell, {
		items,
		searchKeys: [
			"razorpayOrderId",
			"razorpayPaymentId",
			"type",
			"contactName",
			"contactPhone",
			"contactEmail",
			"company"
		],
		searchPlaceholder: "Order ID, payer name, phone, or company",
		entryLabel: "payments",
		columns: [
			"Order ID",
			"Payer",
			"Phone",
			"Amount (INR)",
			"Type",
			"Date"
		],
		children: (rows) => rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableEmpty, {
			colSpan: 6,
			message: "No payments yet."
		}) : rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataTableRow, {
			onClick: () => openRow(row.id),
			onKeyDown: (e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					openRow(row.id);
				}
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableCell, {
					mono: true,
					className: "text-zinc-500",
					children: row.razorpayOrderId
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataTableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-semibold text-zinc-900",
					children: row.contactName ?? "—"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-zinc-500",
					children: row.company ?? row.contactEmail ?? ""
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableCell, {
					className: "font-medium text-zinc-900",
					children: row.contactPhone ?? "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataTableCell, {
					className: "font-semibold text-zinc-900",
					children: ["₹", Number(row.amountInr).toLocaleString("en-IN")]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
					variant: "neutral",
					children: row.type
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableCell, {
					className: "text-zinc-500",
					children: formatAdminDate(row.createdAt)
				})
			]
		}, row.id))
	})] });
}
//#endregion
export { AdminPayments as component };
