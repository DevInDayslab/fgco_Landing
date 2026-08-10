import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _t as ArrowRight } from "../_libs/lucide-react.mjs";
import { r as getLeaderPath, t as LEADERS } from "./leadership-BZ3zHOD8.mjs";
import { t as LeaderCard } from "./LeaderCard-Cf2_G1uj.mjs";
import { l as PageSection, p as SitePageHero } from "./PageLayout-pd1GZ2pX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/team-BaXJSxqL.js
var import_jsx_runtime = require_jsx_runtime();
function Team() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-fade-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SitePageHero, {
				overline: "Leadership",
				title: "Our Team",
				subtitle: "The visionaries, innovators, and technical experts building FG Media's integrated ecosystem of media, technology, safety, and social impact."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8",
				children: LEADERS.map((leader) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeaderCard, {
					leader,
					variant: "row"
				}, leader.id))
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection, {
				border: true,
				className: "bg-surface/30 pb-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "fg-card rounded-3xl p-8 md:p-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "fg-card-inner",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-label text-center",
								children: "Direct Profile Links"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 text-center text-2xl md:text-3xl",
								children: "Connect With Our Leaders"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid gap-4 sm:grid-cols-3",
								children: LEADERS.map((leader) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: getLeaderPath(leader),
									className: "group rounded-xl border border-border/80 bg-background/40 p-5 text-center transition-colors hover:border-gold/40",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold text-foreground group-hover:text-gold",
											children: leader.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: leader.role
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-3 font-mono text-xs text-gold",
											children: ["fgco.in/", leader.slug]
										}),
										leader.aliases.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 font-mono text-[0.65rem] text-muted-foreground",
											children: ["fgco.in/", leader.aliases[0]]
										}) : null
									]
								}, leader.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground",
								children: [
									"Learn more about our company vision on the",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/about",
										className: "text-gold hover:underline",
										children: "About Us"
									}),
									" ",
									"page.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 inline h-3.5 w-3.5" })
								]
							})
						]
					})
				})
			})
		]
	});
}
//#endregion
export { Team as component };
