import { i as __toESM, n as __exportAll$1 } from "../_runtime.mjs";
import { t as fgBrand } from "./brands-CXBaElg6.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { R as redirect, _ as createRootRouteWithContext, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, x as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime, r as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { B as Globe, D as Menu, E as MessageCircle, I as House, K as ExternalLink, O as MapPin, P as Layers, b as Phone, k as Mail, lt as Award, m as ShieldCheck, n as X, ot as Brain, u as Store, w as Network } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-C_uf36nf.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/site-buttons-Dkc7dAgR.js
var siteButtonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			gold: "bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 text-primary-foreground shadow-[0_4px_24px_-6px_rgba(217,119,6,0.5)] hover:shadow-[0_8px_32px_-6px_rgba(217,119,6,0.55)] hover:brightness-[1.03]",
			viera: "bg-gradient-to-r from-blue-600 to-viera text-primary-foreground shadow-[0_4px_24px_-6px_rgba(59,130,246,0.45)] hover:shadow-[0_8px_32px_-6px_rgba(59,130,246,0.5)] hover:brightness-[1.03]",
			goldOutline: "border border-gold/45 bg-gold/10 text-gold backdrop-blur-sm hover:border-gold/65 hover:bg-gold/15",
			vieraOutline: "border border-viera/45 bg-viera/10 text-viera backdrop-blur-sm hover:border-viera/65 hover:bg-viera/15",
			outline: "border border-border/80 bg-card/80 text-foreground backdrop-blur-sm hover:border-gold/35 hover:bg-accent/40",
			ghost: "text-muted-foreground hover:bg-accent/30 hover:text-foreground",
			navSponsor: "rounded-xl border border-gold/45 text-gold hover:bg-gold/10 hover:border-gold/60",
			navNominate: "rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 text-primary-foreground shadow-[0_2px_16px_-4px_rgba(217,119,6,0.45)] hover:brightness-[1.03]"
		},
		size: {
			sm: "px-3.5 py-2 text-xs",
			md: "px-6 py-3",
			lg: "px-8 py-4",
			nav: "rounded-xl px-3 py-2 text-xs xl:px-4 xl:py-2.5 xl:text-sm",
			full: "w-full px-8 py-4"
		}
	},
	defaultVariants: {
		variant: "gold",
		size: "lg"
	}
});
function siteButtonClass(variant, size, className) {
	return cn(siteButtonVariants({
		variant,
		size
	}), className);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-rKTGDRj6.js
var router_rKTGDRj6_exports = /* @__PURE__ */ __exportAll$1({
	A: () => setAdminToken,
	C: () => signatureTiers,
	D: () => isAdminAuthenticated,
	E: () => getAdminLogoutMessage,
	F: () => SiteLinkButton,
	I: () => FgLogo,
	M: () => FG_CONTACT,
	N: () => inquiryTypes,
	O: () => logoutAdmin,
	P: () => SiteAnchorButton,
	S: () => selectionTimeline,
	T: () => clearAdminLogoutMessage,
	_: () => nominationCategories,
	a: () => Route$6,
	b: () => paymentDetails,
	c: () => INFLUENCER_INTRO,
	d: () => excellenceAwards,
	f: () => getNominationFeeBreakdown,
	g: () => mediaReachHighlights,
	getRouter: () => getRouter,
	h: () => invigilPillars,
	i: () => Route$4,
	j: () => GoogleMapEmbed,
	k: () => requireAdminToken,
	l: () => INVIGIL_INTRO,
	m: () => invigilFeatures,
	n: () => Route,
	o: () => AWARDS_TAGLINE,
	p: () => influencerPerks,
	r: () => Route$2,
	s: () => EVENT_LOCATION,
	t: () => router_exports,
	u: () => evaluationCriteria,
	v: () => nominatorRelationshipOptions,
	w: () => sponsorshipTiers,
	x: () => publicationOptions,
	y: () => nomineeTypes
});
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-BqlWgrwp.css";
var favicon_default = "/assets/favicon-DNgImdV8.jpeg";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var sizes = {
	sm: {
		img: "h-8",
		tagline: "text-[0.55rem]"
	},
	md: {
		img: "h-10",
		tagline: "text-[0.6rem]"
	},
	lg: {
		img: "h-12",
		tagline: "text-[0.65rem]"
	}
};
function FgLogo({ size = "md", showTagline = false, align = "start", className = "" }) {
	const s = sizes[size];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `flex flex-col gap-1.5 ${align === "center" ? "items-center" : "items-start"} ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: fgBrand.logo,
			alt: fgBrand.logoAlt,
			className: `${s.img} w-auto object-contain`
		}), showTagline && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `${s.tagline} font-medium tracking-[0.22em] text-muted-foreground uppercase`,
			children: fgBrand.tagline
		})]
	});
}
function SiteButton({ variant, size, className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: siteButtonClass(variant, size, className),
		...props,
		children
	});
}
function SiteLinkButton({ variant, size, className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		className: cn(siteButtonClass(variant, size), className),
		...props,
		children
	});
}
function SiteAnchorButton({ variant, size, className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		className: siteButtonClass(variant, size, className),
		...props,
		children
	});
}
var links = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About Us"
	},
	{
		to: "/media",
		label: "Media Wing"
	},
	{
		to: "/technology",
		label: "InViGIL"
	},
	{
		to: "/viera",
		label: "ViERA"
	},
	{
		to: "/automobiles",
		label: "Automobiles"
	},
	{
		to: "/operations",
		label: "Operations"
	},
	{
		to: "/awards",
		label: "HIT ViERA Awards"
	}
];
function Nav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		className: "fixed inset-x-0 top-0 z-50 border-b border-gold/20 bg-background/90 shadow-[0_4px_30px_rgba(0,0,0,0.35)] backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-[100%] px-3 sm:px-4 lg:px-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid min-h-20 grid-cols-[auto_1fr_auto] items-center gap-2 py-2 lg:gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "flex shrink-0 items-center",
						onClick: () => setOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FgLogo, {
							size: "lg",
							showTagline: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden min-w-0 justify-center lg:flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-nowrap items-center gap-0.5 xl:gap-1",
							children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: l.to,
								activeOptions: { exact: l.to === "/" },
								className: "shrink-0 whitespace-nowrap border-b-2 border-transparent px-1.5 py-1.5 text-[0.6875rem] font-medium leading-none text-muted-foreground transition-all duration-300 hover:border-gold/50 hover:text-foreground data-[status=active]:border-gold data-[status=active]:text-gold xl:px-2 xl:text-xs",
								children: l.label
							}, l.to))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex shrink-0 items-center justify-end gap-2 sm:gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLinkButton, {
								to: "/sponsorship",
								variant: "navSponsor",
								size: "nav",
								className: "hidden lg:inline-flex",
								children: "Sponsor"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLinkButton, {
								to: "/nominate",
								variant: "navNominate",
								size: "nav",
								className: "hidden lg:inline-flex",
								children: "Nominate"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": "Toggle menu",
								onClick: () => setOpen((v) => !v),
								className: "text-gold lg:hidden",
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 28 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 28 })
							})
						]
					})
				]
			})
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-1 border-b border-border bg-surface px-2 pt-2 pb-3 shadow-2xl lg:hidden",
			children: [
				links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					onClick: () => setOpen(false),
					activeOptions: { exact: l.to === "/" },
					className: "block w-full rounded-lg px-3 py-3 text-left text-base font-medium text-muted-foreground hover:text-foreground data-[status=active]:bg-accent data-[status=active]:text-gold",
					children: l.label
				}, l.to)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLinkButton, {
					to: "/sponsorship",
					variant: "navSponsor",
					size: "md",
					className: "block w-full px-3 py-3 lg:hidden",
					onClick: () => setOpen(false),
					children: "Sponsor"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLinkButton, {
					to: "/nominate",
					variant: "navNominate",
					size: "md",
					className: "block w-full px-3 py-3 lg:hidden",
					onClick: () => setOpen(false),
					children: "Nominate"
				})
			]
		})]
	});
}
var FG_OFFICE = {
	line1: "#107, 2nd Main, MLA Layout",
	line2: "RT Nagar, Bengaluru, Karnataka — 560032",
	full: "#107, 2nd Main, MLA Layout, RT Nagar, Bengaluru, Karnataka 560032",
	mapsQuery: "FG Media MLA Layout RT Nagar Bengaluru Karnataka 560032",
	lat: 13.017661,
	lng: 77.5909819
};
var FG_CONTACT = {
	website: "https://www.fgco.in",
	websiteLabel: "www.fgco.in",
	email: "pro@fgco.in",
	awardsEmail: "hitawards@fgco.in",
	whatsappDisplay: "+91 73820 98888",
	whatsappLink: "https://wa.me/917382098888",
	phone: "+91 73820 98888"
};
/** Share link — FG Media corporate office on Google Maps */
var googleMapsShareUrl = "https://maps.app.goo.gl/851GMYsr9EseF1Sb7?g_st=ac";
var googleMapsEmbedUrl = `https://www.google.com/maps?q=${FG_OFFICE.lat},${FG_OFFICE.lng}&z=16&output=embed`;
var googleMapsOpenUrl = googleMapsShareUrl;
var inquiryTypes = [
	"General Inquiry",
	"InViGIL / Technology",
	"ViERA Platform",
	"Media Wing / Publications",
	"Automobile Wing",
	"AP MEDIA Foundation",
	"HIT ViERA Awards",
	"Videos & Content",
	"Advertising & Partnerships",
	"Press & Media"
];
function GoogleMapEmbed({ className = "", heightClass = "h-56 md:h-64", showHeader = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `fg-card overflow-hidden rounded-2xl ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fg-card-inner",
			children: [
				showHeader && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-border px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-label",
						children: "Corporate Office"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 flex items-start gap-2 text-sm text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							FG_OFFICE.line1,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							FG_OFFICE.line2
						] })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `relative w-full ${heightClass}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "FG Media Group — Corporate Office, Bengaluru",
						src: googleMapsEmbedUrl,
						className: "absolute inset-0 h-full w-full border-0",
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade",
						allowFullScreen: true
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border px-5 py-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: googleMapsOpenUrl,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-2 text-sm font-medium text-gold transition-opacity hover:opacity-80",
						children: ["Open in Google Maps", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" })]
					})
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FgLogo, {
							size: "md",
							showTagline: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm leading-relaxed text-muted-foreground",
							children: "A premium global initiative empowering communities through quality journalism, groundbreaking Virtual Intelligence (InViGIL), and national recognition of excellence."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-6 space-y-3 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: FG_CONTACT.website,
									target: "_blank",
									rel: "noreferrer",
									className: "transition-colors hover:text-gold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gold",
										children: FG_CONTACT.websiteLabel
									})
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${FG_CONTACT.email}`,
										className: "hover:text-gold",
										children: FG_CONTACT.email
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${FG_CONTACT.awardsEmail}`,
										className: "hover:text-gold",
										children: FG_CONTACT.awardsEmail
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:${FG_CONTACT.phone.replace(/\s/g, "")}`,
										className: "hover:text-gold",
										children: FG_CONTACT.phone
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: FG_CONTACT.whatsappLink,
										target: "_blank",
										rel: "noreferrer",
										className: "hover:text-gold",
										children: ["WhatsApp ", FG_CONTACT.whatsappDisplay]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										FG_OFFICE.line1,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										FG_OFFICE.line2
									] })]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "section-label font-sans",
					children: "Quick Links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-5 space-y-3 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "hover:text-gold",
							children: "Home"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "hover:text-gold",
							children: "About Us"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/media",
							className: "hover:text-gold",
							children: "Media Wing"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/technology",
							className: "hover:text-gold",
							children: "Technology"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/viera",
							className: "hover:text-gold",
							children: "ViERA"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/automobiles",
							className: "hover:text-gold",
							children: "Automobiles"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/awards",
							className: "hover:text-gold",
							children: "HIT ViERA Awards"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "hover:text-gold",
							children: "Contact Us"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "section-label font-sans",
					children: "Our Divisions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-4 text-sm",
					children: [
						[
							"InViGIL",
							"Virtual Commerce Platform",
							"/technology"
						],
						[
							"ViERA",
							"Virtual Intelligence Engine",
							"/viera"
						],
						[
							"Media Wing",
							"HIT News · Telugu · Kannada",
							"/media"
						],
						[
							"Automobiles",
							"Virtual showrooms & fleet",
							"/automobiles"
						],
						[
							"AP MEDIA Foundation",
							"Foundation initiatives",
							"/about"
						],
						[
							"Videos",
							"Content & productions",
							"/contact"
						]
					].map(([t, s, to]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to,
						className: "block text-foreground hover:text-gold",
						children: t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs text-muted-foreground",
						children: s
					})] }, t))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "section-label font-sans",
					children: "Find Us"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleMapEmbed, {
					className: "mt-5",
					heightClass: "h-48",
					showHeader: false
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 FG Media and Safety Technologies Pvt Ltd. All rights reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://www.devindays.com",
					target: "_blank",
					rel: "noreferrer",
					className: "mt-1.5 inline-block text-muted-foreground/70 transition-colors hover:text-gold",
					children: "Powered by DevInDays"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex flex-wrap gap-x-6 gap-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "GST: 29AADCF9850F1ZC" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tracking-[0.18em] text-gold",
						children: "ISO 27001 CERTIFIED"
					})]
				})]
			})
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLinkButton, {
						to: "/",
						variant: "gold",
						size: "md",
						className: "rounded-full",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteButton, {
						variant: "gold",
						size: "md",
						className: "rounded-full",
						onClick: () => {
							router.invalidate();
							reset();
						},
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLinkButton, {
						to: "/",
						variant: "outline",
						size: "md",
						className: "rounded-full",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$31 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "FG Media Group — Media · Technology · India" },
			{
				name: "description",
				content: "FG Media Group: trusted multilingual journalism, InViGIL virtual commerce powered by ViERA, from Bengaluru, India."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,500;1,600;1,700&display=swap"
			},
			{
				rel: "icon",
				href: favicon_default,
				type: "image/jpeg"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "font-sans antialiased",
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$31.useRouteContext();
	const isAdminRoute = useRouterState({ select: (s) => s.location.pathname }).startsWith("/admin");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			!isAdminRoute && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: isAdminRoute ? "" : "pt-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			!isAdminRoute && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var $$splitComponentImporter$28 = () => import("./routes-C4jJ-Ilq.mjs");
var Route$30 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "FG Media Group — Recognising Excellence. Celebrating Vision." },
		{
			name: "description",
			content: "Trusted multilingual journalism meets InViGIL and ViERA — pioneering media and technology from Bengaluru, India."
		},
		{
			property: "og:title",
			content: "FG Media Group — Media · Technology · India"
		},
		{
			property: "og:description",
			content: "Empowering India through world-class Media, groundbreaking Virtual Intelligence (InViGIL), and National Recognition."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$28, "component")
});
var $$splitComponentImporter$27 = () => import("./about-BZoFEG9B.mjs");
var Route$29 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About FG Media Group — Our Story & Founder" },
		{
			name: "description",
			content: "The story of FG Media Group, founded in Bengaluru on 14 January 2020 by Mr. Ramesh Babu Pasupuleti — media house and technology innovator."
		},
		{
			property: "og:title",
			content: "About FG Media Group"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$27, "component")
});
var ADMIN_TOKEN_KEY = "admin_token";
var LOGOUT_MESSAGE_KEY = "admin_logout_message";
var logoutInProgress = false;
function getAdminToken() {
	if (typeof window === "undefined") return null;
	return sessionStorage.getItem(ADMIN_TOKEN_KEY);
}
function setAdminToken(token) {
	sessionStorage.setItem(ADMIN_TOKEN_KEY, token);
}
function clearAdminToken() {
	sessionStorage.removeItem(ADMIN_TOKEN_KEY);
}
function isAdminAuthenticated() {
	return Boolean(getAdminToken());
}
function getAdminLogoutMessage() {
	if (typeof window === "undefined") return null;
	return sessionStorage.getItem(LOGOUT_MESSAGE_KEY);
}
function clearAdminLogoutMessage() {
	if (typeof window === "undefined") return;
	sessionStorage.removeItem(LOGOUT_MESSAGE_KEY);
}
function logoutAdmin(message) {
	if (typeof window === "undefined" || logoutInProgress) return;
	logoutInProgress = true;
	clearAdminToken();
	if (message) sessionStorage.setItem(LOGOUT_MESSAGE_KEY, message);
	const loginPath = "/admin/login";
	if (window.location.pathname !== loginPath) window.location.replace(loginPath);
	else logoutInProgress = false;
}
function requireAdminToken() {
	const token = getAdminToken();
	if (!token) {
		logoutAdmin("Your session has expired. Please sign in again.");
		throw new Error("Admin session expired");
	}
	return token;
}
var $$splitComponentImporter$26 = () => import("./admin-D5YP-flM.mjs");
var Route$28 = createFileRoute("/admin")({
	beforeLoad: ({ location }) => {
		if (location.pathname === "/admin/login") return;
		if (typeof window !== "undefined" && !isAdminAuthenticated()) throw redirect({ to: "/admin/login" });
	},
	component: lazyRouteComponent($$splitComponentImporter$26, "component")
});
var Route$27 = createFileRoute("/ap-media")({ beforeLoad: () => {
	throw redirect({ to: "/technology" });
} });
var $$splitComponentImporter$25 = () => import("./automobiles-91im2R5P.mjs");
var Route$26 = createFileRoute("/automobiles")({
	head: () => ({ meta: [{ title: "Automobile Technologies — FitGaadi, FitGarage & FG EV | FG Media" }, {
		name: "description",
		content: "FG Media Automobile Division — FitGaadi safety & 365° vehicle care, FitGarage global service network, and FG Electric Mobility."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$25, "component")
});
var AWARDS_TAGLINE = "Recognising Excellence. Celebrating Vision. Inspiring the Future.";
var EVENT_LOCATION = "Bengaluru, Karnataka";
var signatureTiers = [
	{
		tier: 1,
		shortName: "Champion",
		title: "ViERA Champion of India Award 2026",
		subtitle: "The Highest Honour — National Grand Winner",
		cashAward: "₹5,00,000",
		featured: true,
		accent: "border-gold/50 bg-gold/[0.12]",
		benefits: [
			"Cash Award of ₹5,00,000",
			"Grand Crystal Trophy",
			"Gold Medal",
			"Certificate of National Excellence",
			"One-Year Corporate Sponsorship valued at ₹5,00,000",
			"National Media Recognition",
			"Exclusive Cover Feature",
			"Brand Ambassador Opportunities",
			"Lifetime Recognition in the HIT ViERA Hall of Excellence"
		]
	},
	{
		tier: 2,
		shortName: "Pride",
		title: "ViERA Pride of India Award 2026",
		subtitle: "National Excellence Award",
		cashAward: "₹3,00,000",
		featured: false,
		accent: "border-gold/30 bg-gold/[0.05]",
		benefits: [
			"Cash Award of ₹3,00,000",
			"Premium Trophy",
			"Gold Medal",
			"Certificate of Excellence",
			"One-Year Corporate Sponsorship valued at ₹5,00,000",
			"National Media Promotion and Recognition"
		]
	},
	{
		tier: 3,
		shortName: "Chakra",
		title: "ViERA Chakra Award 2026",
		subtitle: "Two National Winners",
		cashAward: "₹1,00,000",
		cashNote: "each",
		featured: false,
		accent: "border-gold/25 bg-gold/[0.04]",
		benefits: [
			"Cash Award of ₹1,00,000 per winner",
			"Premium Trophy",
			"Medal",
			"Certificate of Excellence",
			"One-Year Corporate Sponsorship valued at ₹5,00,000",
			"National Recognition across FG Media platforms"
		]
	}
];
var excellenceAwards = [
	"ViERA Power Star Award 2026",
	"ViERA Best Entrepreneur Award 2026",
	"ViERA Innovation Excellence Award 2026",
	"ViERA Technology Visionary Award 2026",
	"ViERA AI & VI Excellence Award 2026",
	"ViERA Digital Leadership Award 2026",
	"ViERA Startup Excellence Award 2026",
	"ViERA Business Icon Award 2026",
	"ViERA Industrial Excellence Award 2026",
	"ViERA Wealth Creator Award 2026",
	"ViERA Education Excellence Award 2026",
	"ViERA Academic Leadership Award 2026",
	"ViERA Healthcare Excellence Award 2026",
	"ViERA Agricultural Excellence Award 2026",
	"ViERA Climate Leadership Award 2026",
	"ViERA Green Earth Award 2026",
	"ViERA Social Impact Award 2026",
	"ViERA Public Service Excellence Award 2026",
	"ViERA Governance Excellence Award 2026",
	"ViERA Women Leadership Award 2026",
	"ViERA Youth Icon Award 2026",
	"ViERA Lifetime Achievement Award 2026",
	"ViERA Global Indian Excellence Award 2026",
	"ViERA Media Excellence Award 2026",
	"ViERA Journalism Excellence Award 2026",
	"ViERA Arts & Culture Award 2026",
	"ViERA Sports Excellence Award 2026",
	"ViERA Cinema Excellence Award 2026",
	"ViERA Traditional Heritage Award 2026",
	"ViERA Excellence in Public Administration Award 2026"
];
var invigilFeatures = [
	{
		icon: Brain,
		color: "text-viera",
		title: "Core Engines",
		text: "Powered by ViERA (Virtual Intelligence Enabled Real Avatar) verification and a proprietary Fact Score Engine, ensuring deterministically calculated payouts every 5 minutes."
	},
	{
		icon: Layers,
		color: "text-gold",
		title: "Spatial Evidentiary Journalism",
		text: "Integrates Augmented Reality (AR), WebXR, and multimodal RAG pipelines to project 3D investigative scenes directly into physical living environments."
	},
	{
		icon: Store,
		color: "text-ka",
		title: "The Show Room & Events Engine",
		text: "A unique digital storefront equipped with an autonomous ViERA Business Manager, Tharangam audio podcasts, E-Papers, and C2PA-verified cryptographic event ticketing."
	},
	{
		icon: House,
		color: "text-te",
		title: "ViERA Family & Smart Home IoT",
		text: "Connects family micro-networks to smart home appliances and enables interactive Smart TV tuitions backed by real-time AR posture and focus telemetry."
	},
	{
		icon: ShieldCheck,
		color: "text-en",
		title: "Comprehensive Governance",
		text: "Features an omni-channel Ads Manager, automated penalty loops for deepfakes, and a cascading legal defense matrix spanning up to the Supreme Court."
	}
];
var influencerPerks = [
	{
		icon: Award,
		title: "HIT ViERA Influencer Medal",
		text: "National recognition medal for distinguished influencers."
	},
	{
		icon: Globe,
		title: "National Media Coverage",
		text: "Featured across FG Media's national print and digital platforms."
	},
	{
		icon: Network,
		title: "Corporate Networking Opportunities",
		text: "Access to exclusive leadership events and brand collaborations."
	}
];
var selectionTimeline = [
	{
		step: 1,
		title: "National Nominations",
		text: "Open call for nominations from individuals, organisations, startups and government departments across India. Profiles and supporting evidence are collected for Special Edition consideration and HIT ViERA Awards evaluation."
	},
	{
		step: 2,
		title: "Achievement Verification",
		text: "Independent research, document review and professional due diligence on every submission — verifying claims, impact metrics and authenticity of achievements."
	},
	{
		step: 3,
		title: "Expert Panel Evaluation",
		text: "A multi-disciplinary panel assesses impact, leadership, innovation and contribution to society. Public opinion surveys and social impact evaluation inform scoring."
	},
	{
		step: 4,
		title: "National Jury Assessment",
		text: "The National Jury conducts the final review — innovation and leadership analysis, contribution to nation building, and overall excellence. Decisions of the Jury are final and binding."
	}
];
var evaluationCriteria = [
	"National Nominations",
	"Achievement Verification",
	"Independent Research",
	"Professional Due Diligence",
	"Public Opinion Surveys",
	"Expert Panel Evaluation",
	"National Jury Assessment",
	"Innovation and Leadership Analysis",
	"Social Impact Evaluation",
	"Contribution to Nation Building",
	"Overall Excellence Review"
];
var nomineeTypes = [
	"Individual",
	"Company / Organization",
	"Startup",
	"Government Official / Department"
];
var nominatorRelationshipOptions = [
	"Self (Nominee)",
	"Colleague",
	"Manager / Supervisor",
	"Client",
	"Family Member",
	"Friend",
	"Professional Associate",
	"Government Representative",
	"Other"
];
var nominationCategories = [
	"Remarkable Achievements",
	"Startup Ideas & Innovation",
	"Business Plans & Strategy",
	"Academic Excellence",
	"Excellence in Governance (Government Officials)",
	"Inspiring Life Stories",
	"Social Impact & Community Service",
	"Other Noteworthy Nominations"
];
var publicationOptions = [
	"India Times (Telugu)",
	"HIT NEWS (English)",
	"Kurukshetra News (Kannada)"
];
var mediaReachHighlights = [
	{
		title: "Print Media Dominance",
		text: "Collector's editions reaching 20,00,000 households with premium full-color advertising real estate."
	},
	{
		title: "Tharangam Podcast Network",
		text: "Exclusive audio and video features broadcasted to a highly engaged global audience."
	},
	{
		title: "Cinematic Promotional Teasers",
		text: "High-budget event teasers flooding social media, television, and digital platforms."
	},
	{
		title: "Omni-Channel Digital Promotions",
		text: "Social media campaigns, influencer partnerships, and digital banners across InViGIL."
	}
];
var sponsorshipTiers = [
	{
		id: "super",
		name: "Super ViERA Sponsor",
		role: "Title Sponsor",
		investment: "₹ 20,00,000",
		amountInr: 2e6,
		spots: 1,
		featured: true,
		gradient: "from-amber-200 via-yellow-400 to-amber-600",
		ring: "ring-gold/60",
		benefits: [
			"Title Integration across the entire event",
			"Present the ViERA Champion of India Award 2026",
			"Front Page Full-Color Ad in all three special editions",
			"Cinematic teaser integration with apex logo placement",
			"Exclusive 3-part Tharangam podcast series",
			"InViGIL Elite Package — 1-Year Free Subscription"
		]
	},
	{
		id: "power",
		name: "Power ViERA Sponsor",
		role: "Co-Sponsor",
		investment: "₹ 15,00,000",
		amountInr: 15e5,
		spots: 2,
		featured: false,
		gradient: "from-yellow-600 via-amber-500 to-yellow-700",
		ring: "ring-amber-500/50",
		benefits: [
			"Co-Sponsorship Status across all event collateral",
			"Present the Pride of India or Chakra Award",
			"Full Page Inside Color Ad in all three special editions",
			"High-impact co-branded promotional videos",
			"Dedicated Tharangam feature episode",
			"InViGIL Premium Package — 1-Year Free Subscription"
		]
	},
	{
		id: "golden",
		name: "Golden ViERA Sponsor",
		role: "Associate Sponsor",
		investment: "₹ 10,00,000",
		amountInr: 1e6,
		spots: 4,
		featured: false,
		gradient: "from-amber-700 via-yellow-600 to-amber-800",
		ring: "ring-amber-600/40",
		benefits: [
			"Associate Status on all digital and physical materials",
			"Present a prestigious category award",
			"Half-Page Color Ad in all three special editions",
			"Highlighted in collaborative social media campaigns",
			"InViGIL Business Package — 1-Year Free Subscription"
		]
	},
	{
		id: "silver",
		name: "Silver ViERA Sponsor",
		role: "Partner Sponsor",
		investment: "₹ 5,00,000",
		amountInr: 5e5,
		spots: 10,
		featured: false,
		gradient: "from-slate-300 via-gray-200 to-slate-400",
		ring: "ring-slate-400/40",
		benefits: [
			"Official Partner of the HIT ViERA Awards",
			"Present an Excellence Award category",
			"Quarter-Page Color Ad in all three special editions",
			"Inclusion in sponsor shout-outs across social media",
			"InViGIL Starter Package — 1-Year Free Subscription"
		]
	}
];
var paymentDetails = {
	accountName: "FG Media and Safety Technologies Pvt Ltd",
	bankName: "[To be provided]",
	accountNumber: "[To be provided]",
	ifscCode: "[To be provided]",
	gst: "29AADCF9850F1ZC",
	gstRate: "18%",
	advancePercent: "50%",
	balanceDueDays: 15,
	nominationFeeInr: 2e4
};
function getNominationFeeBreakdown() {
	const baseInr = paymentDetails.nominationFeeInr;
	const gstRate = Number.parseFloat(paymentDetails.gstRate) / 100;
	const gstInr = Math.round(baseInr * gstRate);
	return {
		baseInr,
		gstInr,
		totalInr: baseInr + gstInr
	};
}
var INVIGIL_INTRO = "InViGIL is the world's first and most advanced decentralized media, commerce, spatial journalism, and event management ecosystem. By replacing opaque, clickbait-driven legacy models with an architecture anchored to the ViERA Engine Core and an immutable PostgreSQL ledger, InViGIL shifts economic incentives strictly toward high-integrity content generation based on Truth, Telemetry, and Real-World Impact.";
var invigilPillars = [
	"Truth",
	"Telemetry",
	"Real-World Impact"
];
var INFLUENCER_INTRO = "The HIT ViERA National Jury will identify and recognise the Top 100 Influencers of India 2026 across business, entrepreneurship, technology, governance, education, healthcare, media, arts, sports, innovation and social leadership.";
var $$splitComponentImporter$24 = () => import("./awards-KJzh9gid.mjs");
var Route$25 = createFileRoute("/awards")({
	head: () => ({ meta: [
		{ title: "HIT ViERA National Awards 2026 — FG Media Group" },
		{
			name: "description",
			content: "HIT ViERA National Awards 2026 & InViGIL Global Launch Event in Bengaluru. Recognising excellence across India."
		},
		{
			property: "og:title",
			content: "HIT ViERA National Awards 2026"
		},
		{
			property: "og:description",
			content: AWARDS_TAGLINE
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var $$splitComponentImporter$23 = () => import("./contact-Bfsqy-YD.mjs");
var Route$24 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact FG Media Group — Advertising, Partnerships & Press" },
		{
			name: "description",
			content: "Contact FG Media Group in Bengaluru — pro@fgco.in, hitawards@fgco.in, WhatsApp +91 73820 98888."
		},
		{
			property: "og:title",
			content: "Contact FG Media Group"
		},
		{
			property: "og:description",
			content: "Email pro@fgco.in or WhatsApp +91 73820 98888 — Bengaluru, Karnataka."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("./media-CZ1mjtn_.mjs");
var Route$23 = createFileRoute("/media")({
	head: () => ({ meta: [
		{ title: "Media Wing — FG Media Publications | HIT News, Happy India Times, Kurukshetra" },
		{
			name: "description",
			content: "FG Media Publications — HIT NEWS, Happy India Times, and Kurukshetra. 20 lakh+ weekly reach across English, Telugu, and Kannada."
		},
		{
			property: "og:title",
			content: "FG Media Publications — Media Wing"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var $$splitComponentImporter$21 = () => import("./nominate-YjpwfEPh.mjs");
var Route$22 = createFileRoute("/nominate")({ component: lazyRouteComponent($$splitComponentImporter$21, "component") });
var $$splitComponentImporter$20 = () => import("./operations-DrHKZ8z7.mjs");
var Route$21 = createFileRoute("/operations")({
	head: () => ({ meta: [{ title: "Specialized Operations — FG Media Group" }, {
		name: "description",
		content: "Automobiles, Supply Chain, Investigations, and hyper-secure E-commerce."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./publications-JeVw-szS.mjs");
var Route$20 = createFileRoute("/publications")({
	head: () => ({ meta: [
		{ title: "Our Publications — HIT News, Happy India Times, Kurukshetra" },
		{
			name: "description",
			content: "Three national news weeklies in English, Telugu and Kannada with a combined print run of 20 lakh+ copies across India."
		},
		{
			property: "og:title",
			content: "FG Media Group Publications"
		},
		{
			property: "og:description",
			content: "HIT News, Happy India Times and Kurukshetra — 20 lakh+ copies across India."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./sponsorship-nxUmeFEi.mjs");
var Route$19 = createFileRoute("/sponsorship")({
	head: () => ({ meta: [
		{ title: "Sponsorship Proposal — HIT ViERA Awards 2026" },
		{
			name: "description",
			content: "Exclusive sponsorship invitation for HIT ViERA National Awards 2026 & InViGIL Global Launch Event."
		},
		{
			property: "og:title",
			content: "HIT ViERA Awards 2026 Sponsorship"
		},
		{
			property: "og:description",
			content: "An exclusive invitation to align with global excellence."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var Route$18 = createFileRoute("/teaser")({ beforeLoad: () => {
	throw redirect({ to: "/viera" });
} });
var $$splitComponentImporter$17 = () => import("./technology-DkVnRhtV.mjs");
var Route$17 = createFileRoute("/technology")({
	head: () => ({ meta: [
		{ title: "InViGIL Application — World's First Virtual Commerce Platform | FG Media" },
		{
			name: "description",
			content: INVIGIL_INTRO
		},
		{
			property: "og:title",
			content: "InViGIL Application — Intelligence Beyond Vision"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./viera-DSaxuNf5.mjs");
var Route$16 = createFileRoute("/viera")({
	head: () => ({ meta: [{ title: "ViERA — Virtual Intelligence Enabled Real Actor | FG Media" }, {
		name: "description",
		content: "ViERA creates your intelligent digital replica — personalized Virtual Intelligence that protects, empowers, and guides you across InViGIL and the digital world."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./admin.index-CIH6QRQw.mjs");
var Route$15 = createFileRoute("/admin/")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("./admin.inquiries-0A3wjpIh.mjs");
var Route$14 = createFileRoute("/admin/inquiries")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./admin.login-CkAWtMQq.mjs");
var Route$13 = createFileRoute("/admin/login")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./admin.nominations-D1xssYkM.mjs");
var Route$12 = createFileRoute("/admin/nominations")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./admin.payments-J2xS1RcK.mjs");
var Route$11 = createFileRoute("/admin/payments")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./admin.settings-DsGr5_m_.mjs");
var Route$10 = createFileRoute("/admin/settings")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./admin.sponsorships-ly9Uv3Q0.mjs");
var Route$9 = createFileRoute("/admin/sponsorships")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./nominate.index-B9dvmaAj.mjs");
var Route$8 = createFileRoute("/nominate/")({
	head: () => ({ meta: [
		{ title: "Official Nomination Portal — HIT ViERA Awards 2026" },
		{
			name: "description",
			content: "Submit your nomination for the HIT ViERA National Awards 2026. Official portal by FG Media Group."
		},
		{
			property: "og:title",
			content: "HIT Awards Nomination Portal"
		},
		{
			property: "og:description",
			content: "HIT Awards & Special Edition — Official Nomination Portal by FG Media Group."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./admin.inquiries.index-udRy0aXb.mjs");
var Route$7 = createFileRoute("/admin/inquiries/")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./admin.inquiries._id-CSajgOTT.mjs");
var Route$6 = createFileRoute("/admin/inquiries/$id")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./admin.nominations.index-D9aovDXb.mjs");
var Route$5 = createFileRoute("/admin/nominations/")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./admin.nominations._id-LmhrOz2x.mjs");
var Route$4 = createFileRoute("/admin/nominations/$id")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./admin.payments.index-DNn_p0HP.mjs");
var Route$3 = createFileRoute("/admin/payments/")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./admin.payments._id-C8nibt_Z.mjs");
var Route$2 = createFileRoute("/admin/payments/$id")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./admin.sponsorships.index-hnQ03s4Y.mjs");
var Route$1 = createFileRoute("/admin/sponsorships/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./admin.sponsorships._id--CYNwf3P.mjs");
var Route = createFileRoute("/admin/sponsorships/$id")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$30.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$31
});
var AboutRoute = Route$29.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$31
});
var AdminRoute = Route$28.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$31
});
var ApMediaRoute = Route$27.update({
	id: "/ap-media",
	path: "/ap-media",
	getParentRoute: () => Route$31
});
var AutomobilesRoute = Route$26.update({
	id: "/automobiles",
	path: "/automobiles",
	getParentRoute: () => Route$31
});
var AwardsRoute = Route$25.update({
	id: "/awards",
	path: "/awards",
	getParentRoute: () => Route$31
});
var ContactRoute = Route$24.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$31
});
var MediaRoute = Route$23.update({
	id: "/media",
	path: "/media",
	getParentRoute: () => Route$31
});
var NominateRoute = Route$22.update({
	id: "/nominate",
	path: "/nominate",
	getParentRoute: () => Route$31
});
var OperationsRoute = Route$21.update({
	id: "/operations",
	path: "/operations",
	getParentRoute: () => Route$31
});
var PublicationsRoute = Route$20.update({
	id: "/publications",
	path: "/publications",
	getParentRoute: () => Route$31
});
var SponsorshipRoute = Route$19.update({
	id: "/sponsorship",
	path: "/sponsorship",
	getParentRoute: () => Route$31
});
var TeaserRoute = Route$18.update({
	id: "/teaser",
	path: "/teaser",
	getParentRoute: () => Route$31
});
var TechnologyRoute = Route$17.update({
	id: "/technology",
	path: "/technology",
	getParentRoute: () => Route$31
});
var VieraRoute = Route$16.update({
	id: "/viera",
	path: "/viera",
	getParentRoute: () => Route$31
});
var AdminIndexRoute = Route$15.update({
	id: "/",
	path: "/",
	getParentRoute: () => AdminRoute
});
var AdminInquiriesRoute = Route$14.update({
	id: "/inquiries",
	path: "/inquiries",
	getParentRoute: () => AdminRoute
});
var AdminLoginRoute = Route$13.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => AdminRoute
});
var AdminNominationsRoute = Route$12.update({
	id: "/nominations",
	path: "/nominations",
	getParentRoute: () => AdminRoute
});
var AdminPaymentsRoute = Route$11.update({
	id: "/payments",
	path: "/payments",
	getParentRoute: () => AdminRoute
});
var AdminSettingsRoute = Route$10.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => AdminRoute
});
var AdminSponsorshipsRoute = Route$9.update({
	id: "/sponsorships",
	path: "/sponsorships",
	getParentRoute: () => AdminRoute
});
var NominateIndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => NominateRoute
});
var AdminInquiriesIndexRoute = Route$7.update({
	id: "/",
	path: "/",
	getParentRoute: () => AdminInquiriesRoute
});
var AdminInquiriesIdRoute = Route$6.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => AdminInquiriesRoute
});
var AdminNominationsIndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => AdminNominationsRoute
});
var AdminNominationsIdRoute = Route$4.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => AdminNominationsRoute
});
var AdminPaymentsIndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => AdminPaymentsRoute
});
var AdminPaymentsIdRoute = Route$2.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => AdminPaymentsRoute
});
var AdminSponsorshipsIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => AdminSponsorshipsRoute
});
var AdminSponsorshipsIdRoute = Route.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => AdminSponsorshipsRoute
});
var AdminInquiriesRouteChildren = {
	AdminInquiriesIdRoute,
	AdminInquiriesIndexRoute
};
var AdminInquiriesRouteWithChildren = AdminInquiriesRoute._addFileChildren(AdminInquiriesRouteChildren);
var AdminNominationsRouteChildren = {
	AdminNominationsIdRoute,
	AdminNominationsIndexRoute
};
var AdminNominationsRouteWithChildren = AdminNominationsRoute._addFileChildren(AdminNominationsRouteChildren);
var AdminPaymentsRouteChildren = {
	AdminPaymentsIdRoute,
	AdminPaymentsIndexRoute
};
var AdminPaymentsRouteWithChildren = AdminPaymentsRoute._addFileChildren(AdminPaymentsRouteChildren);
var AdminSponsorshipsRouteChildren = {
	AdminSponsorshipsIdRoute,
	AdminSponsorshipsIndexRoute
};
var AdminRouteChildren = {
	AdminInquiriesRoute: AdminInquiriesRouteWithChildren,
	AdminLoginRoute,
	AdminNominationsRoute: AdminNominationsRouteWithChildren,
	AdminPaymentsRoute: AdminPaymentsRouteWithChildren,
	AdminSettingsRoute,
	AdminSponsorshipsRoute: AdminSponsorshipsRoute._addFileChildren(AdminSponsorshipsRouteChildren),
	AdminIndexRoute
};
var AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren);
var NominateRouteChildren = { NominateIndexRoute };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AdminRoute: AdminRouteWithChildren,
	ApMediaRoute,
	AutomobilesRoute,
	AwardsRoute,
	ContactRoute,
	MediaRoute,
	NominateRoute: NominateRoute._addFileChildren(NominateRouteChildren),
	OperationsRoute,
	PublicationsRoute,
	SponsorshipRoute,
	TeaserRoute,
	TechnologyRoute,
	VieraRoute
};
var routeTree = Route$31._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient({ defaultOptions: { queries: { retry: (failureCount, error) => {
		if (error instanceof Error && error.message.toLowerCase().includes("unauthorized")) return false;
		return failureCount < 1;
	} } } });
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { publicationOptions as A, isAdminAuthenticated as C, nominatorRelationshipOptions as D, nominationCategories as E, signatureTiers as F, sponsorshipTiers as I, siteButtonClass as L, router_rKTGDRj6_exports as M, selectionTimeline as N, nomineeTypes as O, setAdminToken as P, cn as R, invigilPillars as S, mediaReachHighlights as T, getAdminLogoutMessage as _, GoogleMapEmbed as a, inquiryTypes as b, Route as c, Route$6 as d, SiteAnchorButton as f, excellenceAwards as g, evaluationCriteria as h, FgLogo as i, requireAdminToken as j, paymentDetails as k, Route$2 as l, clearAdminLogoutMessage as m, EVENT_LOCATION as n, INFLUENCER_INTRO as o, SiteLinkButton as p, FG_CONTACT as r, INVIGIL_INTRO as s, AWARDS_TAGLINE as t, Route$4 as u, getNominationFeeBreakdown as v, logoutAdmin as w, invigilFeatures as x, influencerPerks as y };
