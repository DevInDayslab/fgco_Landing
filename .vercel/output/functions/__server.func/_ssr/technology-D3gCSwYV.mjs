import { S as invigilPillars, p as SiteLinkButton, s as INVIGIL_INTRO, x as invigilFeatures } from "./router-By49rm8R.mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { B as Globe, p as Shield } from "../_libs/lucide-react.mjs";
import { a as HeroAccent, l as PageSection, p as SitePageHero, r as ContentCard, s as IconBadge } from "./PageLayout-pd1GZ2pX.mjs";
import { t as BrandLogo } from "./BrandLogo-BRvmP1DV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/technology-D3gCSwYV.js
var import_jsx_runtime = require_jsx_runtime();
function FeatureGrid() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
		children: invigilFeatures.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentCard, {
			className: "group",
			variant: "viera",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBadge, {
					icon: f.icon,
					className: f.color,
					variant: "viera",
					size: "lg"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-5 text-lg font-semibold",
					children: f.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted-foreground",
					children: f.text
				})
			]
		}, f.title))
	});
}
/** InViGIL Application body — used only on the /technology page */
function InvigilSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "section-label",
				children: "Application Description"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted-foreground md:text-base",
				children: INVIGIL_INTRO
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 flex flex-wrap gap-2",
			children: invigilPillars.map((pillar) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "rounded-full border border-gold/25 bg-gold/[0.06] px-4 py-1.5 text-xs font-medium tracking-wide text-gold",
				children: pillar
			}, pillar))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureGrid, {})
		})
	] });
}
function Technology() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-fade-in",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SitePageHero, {
			tone: "viera",
			overline: "InViGIL Application",
			leading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
				id: "invigil",
				className: "mx-auto mb-6 h-36 max-w-[min(100%,36rem)] md:h-48 lg:h-56",
				size: "xl"
			}),
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Intelligence Beyond ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroAccent, { children: "Vision" })] }),
			subtitle: "Powered by ViERA (Virtual Intelligence Enabled Real Actor). The World's First Virtual Commerce Platform.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLinkButton, {
				to: "/viera",
				variant: "vieraOutline",
				size: "md",
				children: "Explore ViERA Engine →"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageSection, {
			className: "pt-0 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InvigilSection, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fg-panel fg-card-viera mt-16 rounded-3xl p-8 md:p-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "fg-card-inner relative z-[1] grid grid-cols-1 items-center gap-12 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 inline-flex items-center gap-2 rounded-full border border-viera/30 bg-viera/10 px-4 py-2 text-sm font-bold text-viera",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { size: 16 }), " SECURITY & INNOVATION"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-8 text-3xl",
							children: "Innovations for Progress of the Society (IPS)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
										className: "text-gold",
										size: 24
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "mb-2 text-xl font-semibold",
									children: "Empowering Rural Entrepreneurs"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-relaxed text-muted-foreground",
									children: "Farmers digitally empowered to auction crops globally right from their farmland. Just take a video, make an InViGIL post, and connect with global buyers directly."
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-viera/30 bg-viera/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
										className: "text-viera",
										size: 24
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "mb-2 text-xl font-semibold",
									children: "Cyber Commandos"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-relaxed text-muted-foreground",
									children: "A dedicated security program actively preventing fraudulent activities, online cheating, and cyberbullying. Commandos help users utilize InViGIL effectively and safely."
								})] })]
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex h-72 w-72 items-center justify-center overflow-hidden rounded-full border border-viera/30 bg-card p-6 shadow-[0_0_30px_rgba(59,130,246,0.15)] md:h-96 md:w-96 md:p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 animate-[spin_60s_linear_infinite] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
								id: "viera",
								className: "relative z-10 h-full w-full max-w-none",
								size: "lg"
							})]
						})
					})]
				})
			})]
		})]
	});
}
//#endregion
export { Technology as component };
