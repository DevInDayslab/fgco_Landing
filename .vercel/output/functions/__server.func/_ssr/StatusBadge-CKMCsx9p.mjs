import { H as cn } from "./router-3RqzqqOd.mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/StatusBadge-CKMCsx9p.js
var import_jsx_runtime = require_jsx_runtime();
var variantStyles = {
	success: "bg-emerald-50 text-emerald-700 border-emerald-200",
	warning: "bg-amber-50 text-amber-700 border-amber-200",
	pending: "bg-sky-50 text-sky-700 border-sky-200",
	neutral: "bg-zinc-50 text-zinc-600 border-zinc-200",
	error: "bg-red-50 text-red-700 border-red-200"
};
function StatusBadge({ children, variant = "neutral", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold capitalize", variantStyles[variant], className),
		children
	});
}
function PaymentBadge({ paid }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
		variant: paid ? "success" : "warning",
		children: paid ? "Paid" : "Not paid"
	});
}
//#endregion
export { StatusBadge as n, PaymentBadge as t };
