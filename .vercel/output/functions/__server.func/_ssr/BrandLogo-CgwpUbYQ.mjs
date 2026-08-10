import { n as logos } from "./brands-CmIuEZ88.mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/BrandLogo-CgwpUbYQ.js
var import_jsx_runtime = require_jsx_runtime();
var altText = {
	fgGroup: "FG Media Group",
	fitGaadi: "FitGaadi — Vehicle Doctor",
	invigil: "InViGIL",
	viera: "ViERA",
	hitNews: "HIT News",
	happyIndiaTimes: "Happy India Times",
	kurukshetra: "Kurukshetra"
};
var sizes = {
	xs: "h-6 max-w-[72px]",
	sm: "h-10 max-w-[120px]",
	md: "h-16 max-w-[180px]",
	lg: "h-24 max-w-[240px]",
	xl: "h-32 max-w-[320px]"
};
function BrandLogo({ id, size = "md", className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: logos[id],
		alt: altText[id],
		className: `w-auto object-contain ${sizes[size]} ${className}`
	});
}
//#endregion
export { BrandLogo as t };
