import { r as publications } from "./brands-CmIuEZ88.mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PublicationLogo-DNu6J8zq.js
var import_jsx_runtime = require_jsx_runtime();
var sizes = {
	sm: "h-10 max-w-[120px]",
	md: "h-16 max-w-[180px]",
	lg: "h-24 max-w-[240px]"
};
function PublicationLogo({ id, size = "md", className = "" }) {
	const pub = publications[id];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: pub.logo,
		alt: pub.logoAlt,
		className: `w-auto object-contain ${sizes[size]} ${className}`
	});
}
//#endregion
export { PublicationLogo as t };
