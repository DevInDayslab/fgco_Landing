import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { Y as Download } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ExportCsvButton-BwrfTFmu.js
var import_jsx_runtime = require_jsx_runtime();
function escapeCsvCell(value) {
	if (value == null) return "";
	const str = typeof value === "object" ? JSON.stringify(value) : String(value);
	if (/[",\n\r]/.test(str)) return `"${str.replace(/"/g, "\"\"")}"`;
	return str;
}
function exportToCsv(filename, rows, columnKeys) {
	if (rows.length === 0) return;
	const keys = columnKeys ?? Object.keys(rows[0]);
	const header = keys.join(",");
	const body = rows.map((row) => keys.map((key) => escapeCsvCell(row[key])).join(",")).join("\n");
	const blob = new Blob([`${header}\n${body}`], { type: "text/csv;charset=utf-8;" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = filename.endsWith(".csv") ? filename : `${filename}.csv`;
	link.click();
	URL.revokeObjectURL(url);
}
function flattenForCsv(row) {
	const flat = {};
	for (const [key, value] of Object.entries(row)) if (value != null && typeof value === "object" && !Array.isArray(value)) flat[key] = JSON.stringify(value);
	else if (Array.isArray(value)) flat[key] = value.join("; ");
	else flat[key] = value;
	return flat;
}
function ExportCsvButton({ filename, rows, columns, label = "Export CSV" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		disabled: rows.length === 0,
		onClick: () => {
			exportToCsv(filename, rows.map((row) => flattenForCsv(row)), columns);
		},
		className: "inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3.5 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), label]
	});
}
//#endregion
export { ExportCsvButton as t };
