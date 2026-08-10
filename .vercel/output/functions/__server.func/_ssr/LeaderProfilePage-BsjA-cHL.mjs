import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { vt as ArrowLeft } from "../_libs/lucide-react.mjs";
import { c as NumberedItem, d as PullQuote, g as TagCloud, l as PageSection, p as SitePageHero, r as ContentCard } from "./PageLayout-pd1GZ2pX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LeaderProfilePage-BsjA-cHL.js
var import_jsx_runtime = require_jsx_runtime();
function LeaderSectionBlock({ section }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "border-t border-border/60 pt-12 first:border-t-0 first:pt-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-2xl font-semibold md:text-3xl",
				children: section.title
			}),
			section.paragraphs && section.paragraphs.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base",
				children: section.paragraphs.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph.slice(0, 48)))
			}) : null,
			section.roles && section.roles.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-8 divide-y divide-border border-y border-border",
				children: section.roles.map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2 py-5 sm:grid-cols-[10rem_1fr] sm:gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs font-semibold tracking-[0.15em] text-gold uppercase",
						children: role.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-foreground",
						children: role.organization
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: role.description
					})] })]
				}, role.title))
			}) : null,
			section.subsections && section.subsections.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-6 md:grid-cols-2",
				children: section.subsections.map((sub) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentCard, {
					variant: "featured",
					hover: false,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-label",
							children: sub.title
						}),
						sub.tagline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm font-medium text-gold",
							children: sub.tagline
						}) : null,
						sub.paragraphs?.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: p
						}, p.slice(0, 40))),
						sub.bullets && sub.bullets.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 grid gap-2",
							children: sub.bullets.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-viera" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
							}, item))
						}) : null
					]
				}, sub.title))
			}) : null,
			section.mediaOutlets && section.mediaOutlets.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2",
				children: section.mediaOutlets.map((outlet) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border/80 bg-background/40 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.65rem] tracking-[0.2em] text-gold uppercase",
							children: outlet.language
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-lg font-semibold",
							children: outlet.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: outlet.description
						})
					]
				}, outlet.name))
			}) : null,
			section.pillars && section.pillars.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-0 md:grid-cols-3",
				children: section.pillars.map((pillar, pillarIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberedItem, {
					index: pillarIndex + 1,
					title: pillar.title,
					description: pillar.description
				}, pillar.title))
			}) : null,
			section.bulletsIntro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm leading-relaxed text-muted-foreground md:text-base",
				children: section.bulletsIntro
			}) : null,
			section.bullets && section.bullets.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-2 sm:grid-cols-2",
				children: section.bullets.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-2 text-sm leading-relaxed text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
				}, item))
			}) : null
		]
	});
}
function LeaderProfile({ overline, name, role, organization, tags, tagline, credentials, headline, paragraphs, highlights, sections, quote, secondaryQuote, footer, image, imageAlt, imageClassName = "object-cover object-top", reverse = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "border-t border-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:items-start ${reverse ? "[&>*:first-child]:lg:order-2 [&>*:last-child]:lg:order-1" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "overflow-hidden rounded-3xl border border-border/80 bg-background/40 lg:sticky lg:top-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/5] max-h-[34rem] overflow-hidden bg-gradient-to-b from-accent/40 to-background",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: image,
							alt: imageAlt,
							className: `h-full w-full ${imageClassName}`
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "space-y-1 border-t border-border px-6 py-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-label",
								children: role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xl font-bold",
								children: name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: organization
							}),
							tags ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "pt-2 text-xs leading-relaxed text-muted-foreground",
								children: tags
							}) : null
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-label",
						children: overline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-4xl leading-tight md:text-5xl",
						children: headline
					}),
					tagline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base font-medium text-gold md:text-lg",
						children: tagline
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base",
						children: paragraphs.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph.slice(0, 40)))
					}),
					credentials && credentials.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-2 border-l-2 border-gold/30 pl-5",
						children: credentials.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-sm leading-relaxed text-muted-foreground",
							children: item
						}, item))
					}) : null,
					highlights && highlights.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-10 divide-y divide-border border-y border-border",
						children: highlights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs font-semibold tracking-[0.15em] text-gold uppercase",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-sm leading-relaxed text-muted-foreground",
								children: item.text
							})]
						}, item.title))
					}) : null,
					quote ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "mt-10 border-l-2 border-gold/50 pl-5 text-base leading-relaxed text-muted-foreground italic md:text-lg",
						children: [
							"“",
							quote,
							"”"
						]
					}) : null,
					footer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 text-sm text-muted-foreground",
						children: footer
					}) : null
				] })]
			}),
			sections && sections.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl space-y-12 px-6 pb-12 pt-4",
				children: sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeaderSectionBlock, { section }, section.title))
			}) : null,
			secondaryQuote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6 pb-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
					className: "fg-card rounded-2xl p-8 text-center md:p-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "fg-card-inner",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-lg leading-relaxed text-foreground italic md:text-xl",
							children: [
								"“",
								secondaryQuote,
								"”"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-xs tracking-[0.15em] text-gold uppercase",
							children: ["— ", name]
						})]
					})
				})
			}) : null
		]
	});
}
var CEO_TAGS = [
	"Technology",
	"Digital Transformation",
	"Virtual Intelligence",
	"Cybersecurity",
	"Media & Journalism",
	"Social Innovation"
];
function LeaderProfilePage({ leader }) {
	const isCeo = leader.id === "ramesh";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-fade-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SitePageHero, {
				overline: leader.overline,
				title: leader.name,
				subtitle: isCeo ? `${leader.role} — ${leader.organization}. ${leader.shortHeadline}` : `${leader.role} — ${leader.organization}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/team",
					className: "inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "Back to Team"]
				})
			}),
			leader.quote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection, {
				border: true,
				className: "bg-surface/30 py-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PullQuote, {
					tone: "gold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xl leading-relaxed text-foreground italic md:text-2xl",
						children: [
							"“",
							leader.quote,
							"”"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm tracking-[0.15em] text-gold uppercase",
						children: ["— ", leader.name]
					})]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeaderProfile, {
				overline: "About",
				name: leader.name,
				role: leader.role,
				organization: leader.organization,
				tags: leader.tags,
				tagline: leader.tagline,
				credentials: leader.credentials,
				headline: isCeo ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"A Rare Convergence of",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block italic fg-text-gradient-gold",
						children: "Vision"
					})
				] }) : leader.headline,
				paragraphs: leader.paragraphs,
				highlights: leader.highlights,
				sections: leader.sections,
				quote: void 0,
				secondaryQuote: leader.secondaryQuote,
				footer: leader.footer,
				image: leader.image,
				imageAlt: leader.imageAlt,
				imageClassName: leader.imageClassName,
				reverse: leader.id === "roopa"
			}),
			isCeo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection, {
				border: true,
				className: "bg-surface/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-label",
						children: "Focus Areas"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagCloud, {
						tags: CEO_TAGS,
						tone: "gold",
						className: "mt-6"
					})]
				})
			}) : null,
			(leader.closingTagline || leader.closingText) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection, {
				className: "pb-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "fg-card rounded-3xl p-10 text-center md:p-14",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "fg-card-inner",
						children: [
							leader.closingTagline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xl font-semibold leading-relaxed text-foreground md:text-2xl",
								children: leader.closingTagline
							}) : null,
							leader.closingText ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base",
								children: leader.closingText
							}) : null,
							!isCeo && leader.quote ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "mx-auto mt-8 max-w-3xl border-t border-border pt-8 text-base leading-relaxed text-muted-foreground italic md:text-lg",
								children: [
									"“",
									leader.quote,
									"”",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
										className: "mt-4 text-xs not-italic tracking-[0.15em] text-gold uppercase",
										children: ["— ", leader.name]
									})
								]
							}) : null
						]
					})
				})
			})
		]
	});
}
//#endregion
export { LeaderProfilePage as t };
