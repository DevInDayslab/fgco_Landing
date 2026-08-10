import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as formatAdminDate } from "./admin-api-Dm2JEaYE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/DetailView-DBIArNyy.js
var import_jsx_runtime = require_jsx_runtime();
function formatDetailValue(value) {
	if (value == null || value === "") return "—";
	if (typeof value === "boolean") return value ? "Yes" : "No";
	if (Array.isArray(value)) return value.join(", ");
	if (typeof value === "object") return JSON.stringify(value, null, 2);
	return String(value);
}
function DetailSection({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl border border-zinc-200/80 bg-white p-6 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-sm font-bold uppercase tracking-wider text-zinc-500",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children
		})]
	});
}
function DetailGrid({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 sm:grid-cols-2",
		children
	});
}
function DetailField({ label, value, mono, prominent }) {
	const formatted = formatDetailValue(value);
	const isMultiline = formatted.includes("\n");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: prominent ? "text-base font-bold tracking-tight text-zinc-900 md:text-lg" : "text-[10px] font-semibold uppercase tracking-wider text-zinc-400",
		children: label
	}), isMultiline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
		className: `mt-2 whitespace-pre-wrap text-sm leading-relaxed text-zinc-700 ${mono ? "font-mono text-xs" : ""}`,
		children: formatted
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: `mt-1.5 text-sm leading-relaxed text-zinc-800 ${prominent ? "font-normal" : "font-medium text-zinc-900"} ${mono ? "font-mono text-xs" : ""}`,
		children: formatted
	})] });
}
function DetailTimestamp({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
		label,
		value: formatAdminDate(value)
	});
}
//#endregion
export { DetailTimestamp as i, DetailGrid as n, DetailSection as r, DetailField as t };
