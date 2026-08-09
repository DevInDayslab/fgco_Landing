import { i as FgLogo, p as SiteLinkButton } from "./router-rKTGDRj6.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { C as Newspaper, J as Crown, et as ChevronRight, lt as Award, p as Shield, s as Trophy, tt as ChevronDown, ut as ArrowRight } from "../_libs/lucide-react.mjs";
import { _ as cardLinkClass, a as HeroAccent, f as SectionTitle, v as hero_office_default } from "./PageLayout-pd1GZ2pX.mjs";
import { t as ramesh_default } from "./ramesh-D7g6cAlc.mjs";
import { t as BrandLogo } from "./BrandLogo-BRvmP1DV.mjs";
import { t as PublicationLogo } from "./PublicationLogo-BFPL6P_w.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C4jJ-Ilq.js
var import_jsx_runtime = require_jsx_runtime();
var badges = [
	"Startup India Recognised",
	"ISO 27001 Certified",
	"Bengaluru · Karnataka",
	"Est. 14 January 2020"
];
function TrustStrip({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `flex flex-wrap justify-center gap-3 ${className}`,
		children: badges.map((badge) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "rounded-full border border-gold/25 bg-gold/[0.06] px-4 py-2 text-xs font-medium tracking-wide text-gold/90",
			children: badge
		}, badge))
	});
}
var marquee = [
	"HIT NEWS",
	"HAPPY INDIA TIMES",
	"KURUKSHETRA",
	"ViERA PLATFORM",
	"InViGIL",
	"VIRTUAL INTELLIGENCE",
	"FG MEDIA GROUP",
	"NATIONAL ENGLISH WEEKLY",
	"TELUGU NEWS WEEKLY",
	"KANNADA NEWS WEEKLY"
];
var stats = [
	["3", "News Publications"],
	["5+", "Ventures"],
	["10K+", "Features in ViERA"],
	["195+", "Countries"]
];
var ventures = [
	{
		tag: "EN",
		tagClass: "border-en/40 bg-en/10 text-en",
		title: "HIT News",
		subtitle: "National English Weekly",
		text: "Comprehensive national coverage — politics, technology, business, culture, and investigative journalism.",
		to: "/publications",
		publicationId: "hit-news"
	},
	{
		tag: "TE",
		tagClass: "border-te/40 bg-te/10 text-te",
		title: "Happy India Times",
		subtitle: "National Telugu Weekly",
		text: "Quality news for Telugu-speaking communities — progress, innovation, and human interest stories.",
		to: "/publications",
		publicationId: "happy-india-times"
	},
	{
		tag: "KA",
		tagClass: "border-ka/40 bg-ka/10 text-ka",
		title: "Kurukshetra",
		subtitle: "National Kannada Weekly",
		text: "Empowering Kannada-speaking audiences with quality news and promotional support.",
		to: "/publications",
		publicationId: "kurukshetra"
	},
	{
		tag: "ViERA",
		tagClass: "border-viera/50 bg-viera/15 text-viera",
		title: "ViERA",
		subtitle: "Virtual Intelligence Engine",
		text: "Virtual Intelligence Enabled Real Actor — powering InViGIL beyond conventional AI.",
		to: "/viera",
		brandLogo: "viera"
	},
	{
		tag: "INV",
		tagClass: "border-gold/40 bg-gold/10 text-gold",
		title: "InViGIL",
		subtitle: "Virtual Commerce Platform",
		text: "World's First Virtual Commerce Platform — built on ViERA intelligence and end-to-end security.",
		to: "/technology",
		brandLogo: "invigil"
	}
];
function EcosystemCard({ icon, logo, title, desc, to }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: `group ${cardLinkClass()}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fg-card-inner",
			children: [
				logo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-6 flex h-16 items-center",
					children: logo
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "fg-icon-badge mb-6 flex h-14 w-14 items-center justify-center rounded-xl text-gold",
					children: icon
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-3 text-xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-6 text-sm leading-relaxed text-muted-foreground",
					children: desc
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center text-sm font-semibold text-gold transition-transform duration-300 group-hover:translate-x-2",
					children: ["Explore ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
						size: 16,
						className: "ml-1"
					})]
				})
			]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-fade-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative flex min-h-[85vh] items-center justify-center overflow-hidden py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_office_default,
						alt: "",
						"aria-hidden": true,
						width: 1920,
						height: 1080,
						className: "pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-background via-background/85 to-background" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 fg-hero-pattern" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[100px]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 mx-auto max-w-5xl px-6 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-8 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 shadow-[0_0_15px_rgba(209,176,117,0.12)] backdrop-blur-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-medium tracking-widest text-gold uppercase sm:text-sm",
									children: "A Legacy of Excellence"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "fg-hero-title text-5xl md:text-6xl lg:text-7xl",
								children: [
									"Recognising Excellence. ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:block" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroAccent, { children: "Celebrating Vision." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-8 max-w-3xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl",
								children: "Empowering India through world-class Media, groundbreaking Virtual Intelligence (InViGIL), and National Recognition."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLinkButton, {
										to: "/technology",
										variant: "viera",
										size: "lg",
										className: "w-full sm:w-auto",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
											id: "invigil",
											size: "xs"
										}), " Discover InViGIL"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLinkButton, {
										to: "/awards",
										variant: "goldOutline",
										size: "lg",
										className: "w-full sm:w-auto",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-4 w-4" }), " HIT ViERA Awards"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLinkButton, {
										to: "/publications",
										variant: "outline",
										size: "lg",
										className: "w-full sm:w-auto",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newspaper, { className: "h-4 w-4" }), " Our Publications"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-16 flex flex-col items-center gap-2 text-[0.6rem] tracking-[0.3em] text-muted-foreground",
								children: ["SCROLL", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 animate-bounce" })]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden border-y border-border bg-surface py-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "marquee-track flex w-max items-center gap-8 whitespace-nowrap",
					children: [...marquee, ...marquee].map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "marquee-item",
							children: m
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold/50",
							children: "·"
						})]
					}, i))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-6 py-16 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: stats.map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `fg-card fg-card-stat fg-card-interactive rounded-2xl px-8 py-12 text-center`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "fg-card-inner",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "fg-stat text-5xl fg-text-gradient-gold",
								children: n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[0.68rem] tracking-[0.2em] text-muted-foreground uppercase",
								children: l
							})]
						})
					}, l))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustStrip, { className: "mt-10" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-surface/50 py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						overline: "Ecosystem",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex flex-col items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FgLogo, {
								size: "md",
								showTagline: true,
								align: "center"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["The ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroAccent, { children: "Ecosystem" })] })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EcosystemCard, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newspaper, { size: 28 }),
								title: "Media Wing",
								desc: "National News Weeklies including HIT NEWS, Happy India Times, InViGIL & Kurukshetra.",
								to: "/media"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EcosystemCard, {
								logo: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
									id: "invigil",
									size: "sm",
									className: "max-w-[11rem]"
								}),
								title: "InViGIL",
								desc: "The World's First Virtual Commerce Platform — built on ViERA intelligence and security.",
								to: "/technology"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EcosystemCard, {
								logo: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
									id: "viera",
									size: "sm",
									className: "max-w-[11rem]"
								}),
								title: "ViERA",
								desc: "Virtual Intelligence Enabled Real Actor — your digital replica and intelligence layer.",
								to: "/viera"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EcosystemCard, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { size: 28 }),
								title: "Excellence Awards",
								desc: "HIT ViERA National Awards recognizing extraordinary individuals & institutions.",
								to: "/awards"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EcosystemCard, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { size: 28 }),
								title: "Special Operations",
								desc: "Automobiles, Supply Chain, Investigations, and hyper-secure E-commerce.",
								to: "/operations"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-6 py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					overline: "Our Portfolio",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Ventures & ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic fg-text-gradient-gold",
						children: "Platforms"
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: ventures.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
						className: "fg-card fg-card-interactive flex flex-col rounded-2xl p-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "fg-card-inner flex flex-col flex-1",
							children: [
								v.publicationId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-6 flex h-14 items-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicationLogo, {
										id: v.publicationId,
										size: "sm"
									})
								}) : v.brandLogo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-6 flex h-14 items-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
										id: v.brandLogo,
										size: "sm",
										className: "max-w-[10rem]"
									})
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-semibold",
										children: v.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: v.subtitle
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `rounded-full border px-3 py-1 text-[0.65rem] font-semibold tracking-widest ${v.tagClass}`,
										children: v.tag
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 flex-1 text-sm leading-relaxed text-muted-foreground",
									children: v.text
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: v.to,
									className: "mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold hover:underline",
									children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
								})
							]
						})
					}, v.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-6 pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "fg-card rounded-3xl p-10 md:p-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "fg-card-inner grid gap-12 md:grid-cols-[auto_1fr_1fr] md:items-start",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto md:mx-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: ramesh_default,
									alt: "Mr. Ramesh Babu Pasupuleti — Founder",
									className: "h-28 w-28 rounded-2xl border border-gold/25 object-cover object-top shadow-[0_8px_32px_-8px_rgba(245,158,11,0.25)] md:h-32 md:w-32"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-3 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-border px-4 py-1.5",
										children: "Est. 14 Jan 2020"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-border px-4 py-1.5",
										children: "Bengaluru, Karnataka"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "section-label mt-8",
									children: "Who We Are"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "mt-4 text-4xl leading-tight md:text-5xl",
									children: ["Where Journalism ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic fg-text-gradient-gold",
										children: "Meets Innovation"
									})]
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-5 text-sm leading-relaxed text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Founded by Mr. Ramesh Babu Pasupuleti — a professional with a dual background in Media and Information Technology — FG Media Group bridges trusted journalism and frontier technology." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "From three respected news weeklies reaching millions of readers across India, to pioneering InViGIL — the world's first Virtual Commerce Platform powered by ViERA — we build solutions that are safe, user-friendly, and meaningful." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/about",
										className: "inline-flex items-center gap-2 text-sm font-medium text-gold hover:underline",
										children: ["Our full story ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
									})
								]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-6 pb-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "fg-card fg-card-featured rounded-3xl p-10 text-center md:p-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "fg-card-inner",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-4xl md:text-5xl",
									children: "Partner With"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FgLogo, {
									size: "md",
									showTagline: true,
									align: "center"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground",
								children: "Advertise across our print, digital, and virtual commerce network — reaching engaged readers and users across India and the globe."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLinkButton, {
								to: "/contact",
								variant: "gold",
								size: "lg",
								className: "mt-8",
								children: ["Get In Touch ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						]
					})
				})
			})
		]
	});
}
//#endregion
export { Index as component };
