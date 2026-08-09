import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { O as MapPin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageLayout-pd1GZ2pX.js
var import_jsx_runtime = require_jsx_runtime();
var hero_office_default = "/assets/hero_office-ClSV7IDR.jpg";
var cardVariantClass = {
	default: "fg-card",
	viera: "fg-card fg-card-viera",
	featured: "fg-card fg-card-featured",
	stat: "fg-card fg-card-stat"
};
var heroToneGlow = {
	gold: "bg-[radial-gradient(ellipse_at_50%_0%,rgba(209,176,117,0.12),transparent_60%)]",
	viera: "bg-[radial-gradient(ellipse_at_50%_0%,rgba(59,130,246,0.14),transparent_60%)]"
};
var heroToneBlur = {
	gold: "bg-gold/5",
	viera: "bg-viera/8"
};
var heroSizeClass = {
	standard: {
		section: "min-h-[min(58vh,540px)]",
		inner: "min-h-[min(58vh,540px)] py-20 md:py-24"
	},
	large: {
		section: "min-h-[min(70vh,600px)]",
		inner: "min-h-[min(70vh,600px)] py-20 md:py-24"
	},
	compact: {
		section: "",
		inner: "py-10 md:py-14 lg:py-16"
	}
};
var heroTitleClass = {
	standard: "fg-hero-title text-4xl md:text-5xl lg:text-6xl",
	large: "fg-hero-title text-5xl md:text-6xl lg:text-7xl",
	compact: "fg-hero-title text-4xl md:text-5xl lg:text-6xl"
};
function HeroAccent({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `fg-hero-accent ${className}`,
		children
	});
}
function HeroBackdrop({ image = hero_office_default, imageOpacity = "opacity-20", tone = "gold", showPattern = true, showBlur = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: image,
			alt: "",
			"aria-hidden": true,
			width: 1920,
			height: 1080,
			className: `pointer-events-none absolute inset-0 h-full w-full object-cover ${imageOpacity}`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background" }),
		showPattern && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 fg-hero-pattern" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `pointer-events-none absolute inset-0 ${heroToneGlow[tone]}` }),
		showBlur && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] ${heroToneBlur[tone]}` })
	] });
}
function SitePageHero({ overline, title, subtitle, image = hero_office_default, imageOpacity = "opacity-20", tone = "gold", align = "center", size = "standard", leading, badge, showEventBar = false, showPattern = true, className = "", children }) {
	const isCenter = align === "center";
	const sizeStyles = heroSizeClass[size];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `relative overflow-hidden border-b border-border ${sizeStyles.section} ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroBackdrop, {
			image,
			imageOpacity,
			tone,
			showPattern,
			showBlur: size !== "compact"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `relative mx-auto flex max-w-7xl flex-col justify-center px-6 ${sizeStyles.inner} ${isCenter ? "items-center text-center" : ""}`,
			children: [
				leading,
				badge,
				overline && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "section-label",
					children: overline
				}),
				title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: `${heroTitleClass[size]} ${overline ? "mt-4" : ""} ${isCenter ? "max-w-4xl" : "max-w-3xl"}`,
					children: title
				}),
				subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `mt-5 text-base leading-relaxed text-muted-foreground md:text-lg ${isCenter ? "max-w-2xl" : "max-w-xl"}`,
					children: subtitle
				}),
				showEventBar && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-5 py-2 text-sm text-gold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }), "Hosted in Bengaluru, Karnataka"]
				}),
				children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `mt-8 ${isCenter ? "flex flex-wrap justify-center gap-4" : ""}`,
					children
				})
			]
		})]
	});
}
function SectionTitle({ overline, title, description, centered = true, className = "", accent = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `mb-12 md:mb-14 ${centered ? "text-center" : ""} ${className}`,
		children: [
			overline && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "section-label",
				children: overline
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-3xl md:text-4xl lg:text-5xl",
				children: title
			}),
			accent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `mt-4 h-1 w-24 rounded-full bg-gold ${centered ? "mx-auto" : ""}` }),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-5 text-sm leading-relaxed text-muted-foreground md:text-base ${centered ? "mx-auto max-w-3xl" : "max-w-3xl"}`,
				children: description
			})
		]
	});
}
var sectionToneClass = {
	default: "",
	muted: "bg-surface/35",
	band: "border-y border-border bg-gradient-to-b from-surface/60 to-transparent",
	"viera-band": "border-y border-border bg-gradient-to-b from-viera/[0.06] to-transparent"
};
function PageSection({ children, className = "", border = false, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: `mx-auto max-w-7xl px-6 py-16 md:py-20 ${border ? "border-y border-border" : ""} ${sectionToneClass[tone]} ${className}`,
		children
	});
}
function ContentCard({ children, className = "", hover = true, variant = "default", as: Tag = "div" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		className: `rounded-2xl p-6 md:p-8 ${cardVariantClass[variant]} ${hover ? "fg-card-interactive" : ""} ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fg-card-inner",
			children
		})
	});
}
function IconBadge({ icon: Icon, className = "text-gold", size = "md", variant = "default" }) {
	const sizeClass = size === "sm" ? "h-10 w-10 rounded-lg" : size === "lg" ? "h-16 w-16 rounded-xl" : "h-12 w-12 rounded-xl";
	const iconSize = size === "sm" ? "h-4 w-4" : size === "lg" ? "h-8 w-8" : "h-5 w-5";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `fg-icon-badge ${variant === "viera" ? "fg-icon-badge-viera" : ""} ${sizeClass}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `${iconSize} ${className}` })
	});
}
/** Card shell for link-wrapped cards (ecosystem, operations, etc.) */
function cardLinkClass(variant = "default") {
	return `block rounded-2xl p-6 md:p-8 ${cardVariantClass[variant]} fg-card-interactive`;
}
/** Open prose block — centered narrative without a card shell */
function ProseBlock({ children, className = "", centered = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`,
		children
	});
}
/** Feature list row — icon + title + body, divider only */
function FeatureList({ items, icon: Icon, iconClass = "text-gold", columns = 1 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `divide-y divide-border/70 ${columns === 2 ? "md:grid md:grid-cols-2 md:divide-y-0 md:gap-x-10" : ""}`,
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `flex gap-4 py-5 md:py-6 ${columns === 2 ? "md:border-b md:border-border/50 md:last:border-0" : ""}`,
			children: [Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: `mt-0.5 h-5 w-5 shrink-0 ${iconClass}`,
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-semibold text-foreground",
				children: item.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-sm leading-relaxed text-muted-foreground",
				children: item.text
			})] })]
		}, item.title))
	});
}
/** Minimal checklist — no card per item */
function ChecklistGrid({ items, icon: Icon, iconClass = "text-gold", columns = 2 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: `grid gap-x-8 gap-y-3 ${columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"}`,
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex gap-3 text-sm text-muted-foreground",
			children: [Icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: `mt-0.5 h-4 w-4 shrink-0 ${iconClass}`,
				"aria-hidden": true
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
		}, item))
	});
}
/** Pull quote / highlight band without card chrome */
function PullQuote({ children, tone = "viera", className = "" }) {
	const border = tone === "gold" ? "border-gold/50" : "border-viera/50";
	const glow = tone === "gold" ? "from-gold/8" : "from-viera/10";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative border-l-4 ${border} pl-6 md:pl-10 py-2 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r ${glow} to-transparent`,
			"aria-hidden": true
		}), children]
	});
}
/** Horizontal step flow — open layout */
function StepFlow({ steps, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `flex flex-wrap items-center justify-center gap-2 md:gap-3 ${className}`,
		children: steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "rounded-full border border-border/80 bg-background/40 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-foreground uppercase md:text-sm",
				children: step
			}), i < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gold/40",
				"aria-hidden": true,
				children: "→"
			})]
		}, `${step}-${i}`))
	});
}
/** Tag cloud — pills without wrapping section in a card */
function TagCloud({ tags, tone = "viera", className = "" }) {
	const pill = tone === "gold" ? "border-gold/30 bg-gold/10 text-gold" : "border-viera/30 bg-viera/10 text-viera";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `flex flex-wrap justify-center gap-2 md:gap-3 ${className}`,
		children: tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `rounded-full border px-4 py-2 text-sm font-medium ${pill}`,
			children: tag
		}, tag))
	});
}
/** Split editorial columns */
function SplitColumns({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `grid gap-10 lg:grid-cols-2 lg:gap-16 ${className}`,
		children
	});
}
/** Numbered pillar column — open, not a card */
function NumberedItem({ index, title, subtitle, tagline, description, highlight = false, logo }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `border-t border-border pt-8 first:border-t-0 first:pt-0 md:border-t-0 md:pt-0 md:pl-8 md:first:pl-0 md:border-l ${highlight ? "md:border-gold/30" : "md:border-border/60"}`,
		children: [
			logo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 flex h-12 items-center",
				children: logo
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-3xl font-bold tabular-nums text-muted-foreground/40",
				children: String(index).padStart(2, "0")
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "section-label mt-4",
				children: subtitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-2 text-2xl font-bold",
				children: title
			}),
			tagline && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-gold",
				children: tagline
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-relaxed text-muted-foreground",
				children: description
			})
		]
	});
}
/** Comparison table — light border, no heavy card shell */
function CompareTable({ headers, rows, highlightCol = 1 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto rounded-xl border border-border/80",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full min-w-[640px] text-left text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
				className: "border-b border-border bg-surface/50 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase",
				children: headers.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: `px-5 py-4 font-medium md:px-6 ${i === highlightCol ? "text-viera" : ""}`,
					children: h
				}, h))
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
				className: "border-b border-border/70 last:border-0",
				children: row.map((cell, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: `px-5 py-4 md:px-6 ${i === 0 ? "text-muted-foreground" : i === highlightCol ? "text-foreground" : "text-muted-foreground"}`,
					children: cell
				}, i))
			}, row[0])) })]
		})
	});
}
//#endregion
export { cardLinkClass as _, HeroAccent as a, NumberedItem as c, PullQuote as d, SectionTitle as f, TagCloud as g, StepFlow as h, FeatureList as i, PageSection as l, SplitColumns as m, CompareTable as n, HeroBackdrop as o, SitePageHero as p, ContentCard as r, IconBadge as s, ChecklistGrid as t, ProseBlock as u, hero_office_default as v };
