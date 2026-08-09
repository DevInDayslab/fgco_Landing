import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHeader-B95mVO_B.js
var import_jsx_runtime = require_jsx_runtime();
function PageHeader({ title, subtitle, actions }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-3xl font-extrabold tracking-tight text-zinc-900",
			children: title
		}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1.5 text-sm text-zinc-500",
			children: subtitle
		})] }), actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex shrink-0 items-center gap-2",
			children: actions
		})]
	});
}
//#endregion
export { PageHeader as t };
