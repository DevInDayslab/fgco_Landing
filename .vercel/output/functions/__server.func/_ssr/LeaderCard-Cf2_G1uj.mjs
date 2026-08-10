import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _t as ArrowRight } from "../_libs/lucide-react.mjs";
import { r as getLeaderPath } from "./leadership-BZ3zHOD8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LeaderCard-Cf2_G1uj.js
var import_jsx_runtime = require_jsx_runtime();
var accentStyles = {
	ramesh: {
		ring: "ring-gold/20 group-hover:ring-gold/45",
		glow: "shadow-[0_12px_40px_-12px_rgba(245,158,11,0.35)]",
		gradient: "from-gold/25 via-transparent to-transparent",
		badge: "border-gold/35 bg-gold/10 text-gold",
		pill: "border-gold/25 bg-gold/[0.07] text-gold/90",
		cta: "text-gold"
	},
	roopa: {
		ring: "ring-gold/20 group-hover:ring-gold/45",
		glow: "shadow-[0_12px_40px_-12px_rgba(245,158,11,0.3)]",
		gradient: "from-gold/20 via-transparent to-transparent",
		badge: "border-gold/35 bg-gold/10 text-gold",
		pill: "border-gold/25 bg-gold/[0.07] text-gold/90",
		cta: "text-gold"
	},
	chandra: {
		ring: "ring-viera/20 group-hover:ring-viera/45",
		glow: "shadow-[0_12px_40px_-12px_rgba(59,130,246,0.3)]",
		gradient: "from-viera/25 via-transparent to-transparent",
		badge: "border-viera/35 bg-viera/10 text-viera",
		pill: "border-viera/25 bg-viera/[0.07] text-viera/90",
		cta: "text-viera"
	}
};
function getAccent(id) {
	if (id === "chandra") return accentStyles.chandra;
	return accentStyles.ramesh;
}
function parseTags(tags, limit = 3) {
	if (!tags) return [];
	return tags.split("·").map((t) => t.trim()).filter(Boolean).slice(0, limit);
}
function LeaderCard({ leader, variant = "portrait" }) {
	const path = getLeaderPath(leader);
	const accent = getAccent(leader.id);
	const tagPills = parseTags(leader.tags, variant === "row" ? 4 : 3);
	if (variant === "row") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: path,
		className: `group fg-card fg-card-interactive relative block overflow-hidden rounded-3xl border border-border/60 transition-all duration-300 hover:-translate-y-0.5 ${accent.glow}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fg-card-inner grid gap-0 md:grid-cols-[minmax(13rem,16rem)_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden bg-gradient-to-b from-accent/30 to-background md:min-h-[18rem]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: leader.image,
						alt: leader.imageAlt,
						className: `h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] md:h-full md:min-h-[18rem] ${leader.imageClassName ?? "object-top"}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `pointer-events-none absolute inset-0 bg-gradient-to-t ${accent.gradient} via-background/10 to-transparent` }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `absolute bottom-4 left-4 rounded-full border px-3 py-1 text-[0.6rem] font-semibold tracking-[0.18em] uppercase backdrop-blur-sm ${accent.badge}`,
						children: leader.role
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center p-6 md:p-8 lg:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[0.65rem] tracking-wide text-muted-foreground/70",
						children: ["fgco.in/", leader.slug]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 text-2xl font-bold tracking-tight md:text-3xl",
						children: leader.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm font-medium italic text-gold md:text-base",
						children: leader.shortHeadline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground md:text-base",
						children: leader.shortBio
					}),
					tagPills.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex flex-wrap gap-2",
						children: tagPills.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `rounded-full border px-2.5 py-1 text-[0.65rem] font-medium ${accent.pill}`,
							children: tag
						}, tag))
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: `mt-6 inline-flex items-center gap-2 text-sm font-semibold ${accent.cta} transition-all group-hover:gap-3`,
						children: ["View full profile", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
					})
				]
			})]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: path,
		className: `group fg-card fg-card-interactive relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 transition-all duration-300 hover:-translate-y-1 ${accent.glow}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fg-card-inner flex h-full flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/5] overflow-hidden bg-gradient-to-b from-accent/40 to-background",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: leader.image,
							alt: leader.imageAlt,
							className: `h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] ${leader.imageClassName ?? "object-top"}`
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent` }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-x-0 bottom-0 p-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `inline-flex rounded-full border px-3 py-1 text-[0.6rem] font-semibold tracking-[0.18em] uppercase backdrop-blur-md ${accent.badge}`,
							children: leader.role
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col p-5 md:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[0.6rem] tracking-wide text-muted-foreground/60",
						children: ["fgco.in/", leader.slug]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 text-xl font-bold leading-tight tracking-tight md:text-2xl",
						children: leader.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm font-medium italic leading-snug text-gold",
						children: leader.shortHeadline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-4",
						children: leader.shortBio
					}),
					tagPills.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-1.5",
						children: tagPills.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `rounded-full border px-2 py-0.5 text-[0.6rem] font-medium leading-relaxed ${accent.pill}`,
							children: tag
						}, tag))
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `mt-5 flex items-center justify-between border-t border-border/60 pt-4 text-sm font-semibold ${accent.cta}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View profile" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
					})
				]
			})]
		})
	});
}
//#endregion
export { LeaderCard as t };
