import { i as __toESM } from "../_runtime.mjs";
import { R as cn } from "./router-Cw3jv9DO.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Search } from "../_libs/lucide-react.mjs";
import { t as filterBySearch } from "./admin-api-BoZflmA9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/DataTable-BgFGMe96.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SearchField({ value, onChange, placeholder, label = "SEARCH" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "mb-2 block text-[10px] font-semibold uppercase tracking-wider text-zinc-400",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "search",
				value,
				onChange: (e) => onChange(e.target.value),
				placeholder,
				className: "w-full rounded-xl border border-zinc-200 bg-white py-2.5 pl-10 pr-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
			})]
		})]
	});
}
var PAGE_SIZE = 10;
function DataTableShell({ items, searchKeys, searchPlaceholder, entryLabel = "entries", columns, children }) {
	const [search, setSearch] = (0, import_react.useState)("");
	const [page, setPage] = (0, import_react.useState)(1);
	const filtered = (0, import_react.useMemo)(() => filterBySearch(items, search, searchKeys), [
		items,
		search,
		searchKeys
	]);
	const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
	const currentPage = Math.min(page, totalPages);
	const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchField, {
		value: search,
		onChange: (v) => {
			setSearch(v);
			setPage(1);
		},
		placeholder: searchPlaceholder
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-xl border border-zinc-200/80 bg-white shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full border-collapse",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
				className: "border-b border-zinc-200 bg-zinc-50/80",
				children: columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500",
					children: col
				}, col))
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: children(paginated) })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-t border-zinc-100 px-6 py-3.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-zinc-500",
				children: [
					"Page ",
					currentPage,
					" of ",
					totalPages,
					" · ",
					filtered.length,
					" ",
					entryLabel
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: currentPage <= 1,
					onClick: () => setPage((p) => Math.max(1, p - 1)),
					className: cn("rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors", currentPage <= 1 ? "cursor-not-allowed opacity-40" : "hover:bg-zinc-50"),
					children: "Previous"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: currentPage >= totalPages,
					onClick: () => setPage((p) => Math.min(totalPages, p + 1)),
					className: cn("rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors", currentPage >= totalPages ? "cursor-not-allowed opacity-40" : "hover:bg-zinc-50"),
					children: "Next"
				})]
			})]
		})]
	})] });
}
function DataTableRow({ children, className, onClick, onKeyDown }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
		className: cn("border-b border-zinc-100 transition-colors hover:bg-zinc-50/50", onClick && "cursor-pointer hover:bg-zinc-50", className),
		onClick,
		onKeyDown,
		role: onClick ? "link" : void 0,
		tabIndex: onClick ? 0 : void 0,
		children
	});
}
function DataTableCell({ children, className, mono }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
		className: cn("px-6 py-4 text-sm font-medium text-zinc-700", mono && "font-mono text-xs", className),
		children
	});
}
function DataTableEmpty({ colSpan, message }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
		colSpan,
		className: "px-6 py-10 text-center text-sm text-zinc-400",
		children: message
	}) });
}
//#endregion
export { DataTableShell as i, DataTableEmpty as n, DataTableRow as r, DataTableCell as t };
