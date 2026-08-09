import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { L as Image, at as Car, nt as ChevronRight, st as Briefcase, v as Search } from "../_libs/lucide-react.mjs";
import { _ as cardLinkClass, a as HeroAccent, l as PageSection, p as SitePageHero, r as ContentCard } from "./PageLayout-pd1GZ2pX.mjs";
import { t as BrandLogo } from "./BrandLogo-BRvmP1DV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/operations-DrHKZ8z7.js
var import_jsx_runtime = require_jsx_runtime();
var wings = [
	{
		icon: Car,
		title: "Automobile Wing",
		desc: "Next-generation automotive tech integration, fleet tracking, and virtual showrooms via InViGIL.",
		to: "/automobiles",
		brandLogo: "fitGaadi"
	},
	{
		icon: Briefcase,
		title: "Supply Chain",
		desc: "Transparent logistics, direct farmer-to-buyer agricultural supply, and encrypted ledger systems."
	},
	{
		icon: Search,
		title: "Investigations",
		desc: "Cyber Commandos unit focusing on proactive crime detection, fraud prevention, and cyber security."
	},
	{
		icon: Image,
		title: "E-Commerce",
		desc: "Hyper-secure, middleman-free Virtual Commerce enabling real-time test, engage, and buy.",
		brandLogo: "invigil"
	}
];
function WingVisual({ icon: Icon, brandLogo }) {
	if (brandLogo) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-4 flex h-16 w-16 shrink-0 items-center justify-center sm:mb-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
			id: brandLogo,
			size: "sm",
			className: "max-w-[4.5rem]"
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fg-icon-badge mb-4 flex h-16 w-16 shrink-0 items-center justify-center rounded-xl text-gold sm:mb-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 32 })
	});
}
function Operations() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-fade-in",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SitePageHero, {
			overline: "Operations",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Specialized ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroAccent, { children: "Operations" })] }),
			subtitle: "Expanding the boundaries of industry through technology and innovation."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection, {
			className: "pt-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-6 md:grid-cols-2",
				children: wings.map((wing) => {
					const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `group ${cardLinkClass()}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "fg-card-inner flex flex-col sm:flex-row sm:items-start sm:gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WingVisual, {
								icon: wing.icon,
								brandLogo: wing.brandLogo
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mb-3 text-2xl",
										children: wing.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm leading-relaxed text-muted-foreground",
										children: wing.desc
									}),
									wing.to && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-4 inline-flex items-center text-sm font-medium text-gold",
										children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
											size: 16,
											className: "ml-1"
										})]
									})
								]
							})]
						})
					});
					return wing.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: wing.to,
						className: "block",
						children: inner
					}, wing.title) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentCard, {
						className: "group flex flex-col sm:flex-row sm:items-start sm:gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WingVisual, {
							icon: wing.icon,
							brandLogo: wing.brandLogo
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-3 text-2xl",
								children: wing.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-muted-foreground",
								children: wing.desc
							})]
						})]
					}, wing.title);
				})
			})
		})]
	});
}
//#endregion
export { Operations as component };
