import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHeader } from "./PageHeader-B95mVO_B.mjs";
import { t as PaymentBadge } from "./StatusBadge-CKMCsx9p.mjs";
import { c as useNominations, n as formatAdminDate } from "./admin-api-Du3z4az8.mjs";
import { t as ExportCsvButton } from "./ExportCsvButton-BwrfTFmu.mjs";
import { i as DataTableShell, n as DataTableEmpty, r as DataTableRow, t as DataTableCell } from "./DataTable-DMEmlQSp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.nominations.index-BCM1U4ua.js
var import_jsx_runtime = require_jsx_runtime();
function formatStatus(status) {
	switch (status) {
		case "under_review": return "Under review";
		case "pending_payment": return "Pending payment";
		case "paid": return "Paid";
		case "draft": return "Draft";
		default: return status;
	}
}
function AdminNominations() {
	const navigate = useNavigate();
	function openRow(id) {
		navigate({
			to: "/admin/nominations/$id",
			params: { id }
		});
	}
	const { data, isLoading, error } = useNominations();
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-zinc-500",
		children: "Loading nominations…"
	});
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700",
		children: error.message
	});
	const items = data?.items ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Nominations",
		subtitle: "Award nomination submissions from the HIT ViERA portal.",
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportCsvButton, {
			filename: "nominations",
			rows: items
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableShell, {
		items,
		searchKeys: [
			"nomineeName",
			"nominatorName",
			"nominatorEmail",
			"category",
			"referenceId",
			"status"
		],
		searchPlaceholder: "Name, email, category, or reference",
		entryLabel: "nominations",
		columns: [
			"Reference",
			"Nominee",
			"Nominator",
			"Category",
			"Status",
			"Payment",
			"Submitted"
		],
		children: (rows) => rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableEmpty, {
			colSpan: 7,
			message: "No nominations yet."
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
					children: row.referenceId ?? "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableCell, {
					className: "font-semibold text-zinc-900",
					children: row.nomineeName
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataTableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-semibold text-zinc-900",
					children: row.nominatorName
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-zinc-500",
					children: row.nominatorEmail
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableCell, { children: row.category }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-zinc-800",
					children: formatStatus(row.status)
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentBadge, { paid: row.paymentPaid }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableCell, {
					className: "text-zinc-500",
					children: formatAdminDate(row.createdAt)
				})
			]
		}, row.id))
	})] });
}
//#endregion
export { AdminNominations as component };
