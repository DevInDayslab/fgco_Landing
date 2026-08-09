import { f as SiteAnchorButton, p as SiteLinkButton } from "./router-CGLlFfYz.mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { K as ExternalLink, ut as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as HeroAccent, l as PageSection, p as SitePageHero } from "./PageLayout-pd1GZ2pX.mjs";
import { t as PublicationLogo } from "./PublicationLogo-BFPL6P_w.mjs";
import { o as publicationProfiles } from "./publications-CPJ4zEGm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/publications-B_IyPsMS.js
var import_jsx_runtime = require_jsx_runtime();
function Publications() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-fade-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SitePageHero, {
				overline: "Media Portfolio",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Our ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroAccent, { children: "Publications" })] }),
				subtitle: "Three highly respected news weeklies serving readers across India in English, Telugu, and Kannada — combined print run of 20 lakh+ copies."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection, {
				className: "pt-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-8",
					children: publicationProfiles.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "grid overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-[260px_1fr_260px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center justify-center border-border bg-background/50 p-8 lg:border-r lg:p-10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicationLogo, {
									id: p.id,
									size: "lg"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `rounded-full border px-3 py-1 text-[0.65rem] font-semibold tracking-widest ${p.badge}`,
											children: p.code
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[0.68rem] tracking-[0.2em] text-muted-foreground uppercase",
											children: p.kicker
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-5 text-4xl md:text-5xl",
										children: p.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-lg italic text-muted-foreground",
										children: p.native
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground",
										children: p.text
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 flex flex-wrap gap-3",
										children: p.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full border border-border bg-background px-4 py-1.5 text-xs text-muted-foreground",
											children: t
										}, t))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: `mt-6 text-sm font-medium italic ${p.accent}`,
										children: p.quote
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid border-border lg:border-l",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-b border-border p-10 text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-3xl text-gold",
										children: p.print
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase",
										children: "Print Run"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-10 text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-lg",
										children: p.coverage
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase",
										children: "Coverage"
									})]
								})]
							})
						]
					}, p.title))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection, {
				className: "pt-0 pb-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "fg-card fg-card-featured rounded-3xl p-10 text-center md:p-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "fg-card-inner",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-4xl md:text-5xl",
								children: "Advertise Across Our Network"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground",
								children: "Reach 20 lakh+ readers across India simultaneously in English, Telugu, and Kannada. Print from Hyderabad, Mumbai, Chennai, Bengaluru, Kolkata, and New Delhi."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap justify-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLinkButton, {
									to: "/contact",
									variant: "gold",
									size: "lg",
									children: ["Advertise With Us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteAnchorButton, {
									href: "https://www.fgco.in",
									target: "_blank",
									rel: "noreferrer",
									variant: "outline",
									size: "lg",
									children: ["Visit fgco.in ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" })]
								})]
							})
						]
					})
				})
			})
		]
	});
}
//#endregion
export { Publications as component };
