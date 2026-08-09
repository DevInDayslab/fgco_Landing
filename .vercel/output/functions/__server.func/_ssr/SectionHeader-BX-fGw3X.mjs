import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { p as SitePageHero } from "./PageLayout-pd1GZ2pX.mjs";
import { t as siteHeroImages } from "./site-heroes-aSUPdp6v.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionHeader-BX-fGw3X.js
var import_jsx_runtime = require_jsx_runtime();
var variantImage = {
	awards: siteHeroImages.awards,
	sponsorship: siteHeroImages.city,
	nominate: siteHeroImages.city
};
function PageHero({ overline, title, subtitle, showEventBar = false, variant = "awards", align = "left", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SitePageHero, {
		overline,
		title,
		subtitle,
		image: variantImage[variant],
		align,
		size: "large",
		showEventBar,
		children
	});
}
function SectionHeader({ overline, title, description, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `max-w-2xl ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "section-label",
				children: overline
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-3xl leading-tight md:text-4xl lg:text-5xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `mt-4 h-1 w-24 rounded-full bg-gold ${className.includes("text-center") || className.includes("mx-auto") ? "mx-auto" : ""}` }),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-relaxed text-muted-foreground md:text-base",
				children: description
			})
		]
	});
}
//#endregion
export { SectionHeader as n, PageHero as t };
