import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHeader } from "./PageHeader-B95mVO_B.mjs";
import { t as PaymentBadge } from "./StatusBadge-CKMCsx9p.mjs";
import { n as formatAdminDate, p as useSponsorships } from "./admin-api-CTn6nnID.mjs";
import { t as ExportCsvButton } from "./ExportCsvButton-BwrfTFmu.mjs";
import { i as DataTableShell, n as DataTableEmpty, r as DataTableRow, t as DataTableCell } from "./DataTable-DNQLuTVG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.sponsorships.index-hnQ03s4Y.js
var import_jsx_runtime = require_jsx_runtime();
function AdminSponsorships() {
	const navigate = useNavigate();
	function openRow(id) {
		navigate({
			to: "/admin/sponsorships/$id",
			params: { id }
		});
	}
	const { data, isLoading, error } = useSponsorships();
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-zinc-500",
		children: "Loading sponsorships…"
	});
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700",
		children: error.message
	});
	const items = data?.items ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Sponsorships",
		subtitle: "Sponsorship registrations and payment status from the awards portal.",
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportCsvButton, {
			filename: "sponsorships",
			rows: items
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableShell, {
		items,
		searchKeys: [
			"company",
			"contactName",
			"contactEmail",
			"tierName",
			"referenceId"
		],
		searchPlaceholder: "Company, contact, tier, or reference",
		entryLabel: "registrations",
		columns: [
			"Reference",
			"Company",
			"Tier",
			"Contact",
			"Payment",
			"Phone",
			"Submitted"
		],
		children: (rows) => rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableEmpty, {
			colSpan: 7,
			message: "No sponsorship registrations yet."
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
					children: row.company
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableCell, { children: row.tierName }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataTableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-semibold text-zinc-900",
					children: row.contactName
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-zinc-500",
					children: row.contactEmail
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentBadge, { paid: row.paymentPaid }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableCell, {
					className: "font-medium text-zinc-900",
					children: row.contactPhone
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableCell, {
					className: "text-zinc-500",
					children: formatAdminDate(row.createdAt)
				})
			]
		}, row.id))
	})] });
}
//#endregion
export { AdminSponsorships as component };
