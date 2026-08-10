import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHeader } from "./PageHeader-B95mVO_B.mjs";
import { i as useInquiries, n as formatAdminDate } from "./admin-api-Be6asTRJ.mjs";
import { t as ExportCsvButton } from "./ExportCsvButton-BwrfTFmu.mjs";
import { i as DataTableShell, n as DataTableEmpty, r as DataTableRow, t as DataTableCell } from "./DataTable-CQyGQm9c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.inquiries.index-BYTW2WPC.js
var import_jsx_runtime = require_jsx_runtime();
function AdminInquiries() {
	const navigate = useNavigate();
	function openRow(id) {
		navigate({
			to: "/admin/inquiries/$id",
			params: { id }
		});
	}
	const { data, isLoading, error } = useInquiries();
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-zinc-500",
		children: "Loading inquiries…"
	});
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700",
		children: error.message
	});
	const items = data?.items ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Inquiries",
		subtitle: "Contact form submissions from the FG Media Group website.",
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportCsvButton, {
			filename: "inquiries",
			rows: items
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableShell, {
		items,
		searchKeys: [
			"name",
			"email",
			"company",
			"inquiryType",
			"message"
		],
		searchPlaceholder: "Name, email, company, or message",
		entryLabel: "inquiries",
		columns: [
			"Submitted",
			"Name",
			"Email",
			"Type",
			"Message"
		],
		children: (rows) => rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableEmpty, {
			colSpan: 5,
			message: "No inquiries yet."
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
					className: "text-zinc-500",
					children: formatAdminDate(row.createdAt)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableCell, {
					className: "font-semibold text-zinc-900",
					children: row.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableCell, { children: row.email }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableCell, { children: row.inquiryType ?? "—" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableCell, {
					className: "max-w-md truncate text-zinc-600",
					children: row.message
				})
			]
		}, row.id))
	})] });
}
//#endregion
export { AdminInquiries as component };
