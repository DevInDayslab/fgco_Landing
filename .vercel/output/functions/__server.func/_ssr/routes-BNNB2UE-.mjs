import { i as FgLogo, m as SiteLinkButton, n as CERTIFICATION_TAGS } from "./router-BsC5ZfFx.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { D as MicVocal, H as Heart, I as Lightbulb, T as Newspaper, W as GraduationCap, _t as ArrowRight, a as Users, c as Trophy, ct as ChevronDown, et as Crown, gt as Award, h as Shield, mt as BookOpen, nt as Cpu, p as Sparkles, st as ChevronRight, ut as Car, w as Palette } from "../_libs/lucide-react.mjs";
import { t as ramesh_default } from "./ramesh-D7g6cAlc.mjs";
import { a as HeroAccent, d as PullQuote, f as SectionTitle, l as PageSection, v as hero_office_default } from "./PageLayout-pd1GZ2pX.mjs";
import { t as BrandLogo } from "./BrandLogo-CgwpUbYQ.mjs";
import { t as PublicationLogo } from "./PublicationLogo-DNu6J8zq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BNNB2UE-.js
var import_jsx_runtime = require_jsx_runtime();
var toneClass = {
	cyan: "fg-glow-card-cyan",
	gold: "fg-glow-card-gold",
	viera: "fg-glow-card-viera"
};
function glowCardClass(tone = "cyan", className = "") {
	return `fg-card fg-glow-card ${toneClass[tone]} rounded-2xl ${className}`.trim();
}
function GlowDecor() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "fg-glow-shine",
		"aria-hidden": true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "fg-glow-edge",
		"aria-hidden": true
	})] });
}
function GlowCard({ children, className = "", innerClassName = "", tone = "cyan", as: Tag = "div" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tag, {
		className: glowCardClass(tone, className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowDecor, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `fg-card-inner relative z-[1] ${innerClassName}`.trim(),
			children
		})]
	});
}
function GlowCardLink({ children, tone = "cyan", className = "", innerClassName = "", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		className: `block fg-card-interactive ${glowCardClass(tone, className)}`,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowDecor, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `fg-card-inner relative z-[1] ${innerClassName}`.trim(),
			children
		})]
	});
}
var certificate_default$1 = "/assets/certificate-CYhkom6W.jpg";
var certificate_default = "/assets/certificate-Gwou6PLC.webp";
var CERT_ALT = "FG Media registrations, licences, trademarks, copyrights, and ISO/IEC 27001:2013 certificate of registration";
function HomeCertifications() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden border-t border-border bg-surface/40 py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 fg-hero-pattern opacity-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute top-1/2 left-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-viera/5 blur-[120px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						overline: "Certifications & Registrations",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Registered, Certified & ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroAccent, { children: "Trademarked" })] }),
						subtitle: "Registrations, licences, trademarks, copyrights, and ISO certification — FG Media and Safety Technologies Pvt. Ltd."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "fg-home-cert-glow mx-auto mt-14 max-w-5xl overflow-hidden rounded-2xl border border-viera/20 bg-card/80 p-2 shadow-[0_0_60px_-20px_rgba(59,130,246,0.35)] transition-shadow duration-500 hover:shadow-[0_0_80px_-16px_rgba(59,130,246,0.45)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("picture", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
							srcSet: certificate_default,
							type: "image/webp"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: certificate_default$1,
							alt: CERT_ALT,
							width: 1e3,
							height: 750,
							className: "w-full rounded-xl object-contain",
							loading: "lazy",
							decoding: "async"
						})] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2.5",
						children: CERTIFICATION_TAGS.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "fg-cert-tag rounded-full border border-viera/25 bg-viera/5 px-4 py-2 text-[0.68rem] font-medium tracking-wide text-foreground/90 transition-all duration-300 hover:border-viera/50 hover:bg-viera/10 hover:text-viera hover:shadow-[0_0_24px_-6px_rgba(59,130,246,0.45)]",
							children: tag
						}, tag))
					})
				]
			})
		]
	});
}
var FOUNDATION_TAGLINE = "Empowering People. Enabling Opportunity. Transforming Society.";
var FOUNDATION_SUBTITLE = "A Social Initiative of FG Media Group";
var FOUNDATION_INTRO = "AP MEDIA Foundation is a social-impact organisation working for the welfare and advancement of society, with a special commitment to the downtrodden, underprivileged, needy, vulnerable and underserved sections of society.";
var FOUNDATION_PHILOSOPHY = "No person should be denied an opportunity to learn, grow, create, earn, lead or live with dignity because of poverty, lack of resources or lack of access.";
var FOUNDATION_BELIEF = [
	"Help should create hope.",
	"Hope should create opportunity.",
	"Opportunity should create independence."
];
var FOUNDATION_VISION = {
	title: "A More Empowered, Educated, Safe and Equitable Society",
	text: "We envision a society in which every individual—irrespective of economic background—has access to education, technology, knowledge, opportunity, safety and dignity. Social development is not merely about providing assistance—it is about creating the ability to become self-reliant."
};
var FOUNDATION_MISSION = [
	"Uplifting underprivileged and needy communities",
	"Promoting education and digital literacy",
	"Providing access to computers and digital equipment",
	"Empowering women and girls",
	"Promoting women and child safety",
	"Supporting journalists and investigative journalism",
	"Encouraging entrepreneurship and employment",
	"Recognising changemakers and community leaders"
];
var FOUNDATION_INITIATIVES = [
	{
		title: "Digital Empowerment",
		text: "Bridging the digital divide through laptops, digital literacy camps, and technology training."
	},
	{
		title: "Education",
		text: "Sponsorships, learning equipment, and institutional support so economic circumstances never limit dreams."
	},
	{
		title: "Journalism",
		text: "Supporting journalists, investigative reporting, and public-interest media initiatives."
	},
	{
		title: "Women Empowerment",
		text: "Education, entrepreneurship, leadership, and participation in technology and innovation."
	},
	{
		title: "Safety",
		text: "Women and child safety, cyber awareness, and community vigilance programmes."
	},
	{
		title: "Entrepreneurship",
		text: "Helping people move from seeking opportunities to creating opportunities."
	},
	{
		title: "Arts & Talent",
		text: "Platforms for artists, performers, and young creators to contribute to society."
	},
	{
		title: "Science & Technology",
		text: "Encouraging young minds to become creators—not just consumers—of technology."
	}
];
var FOUNDATION_APPROACH = [
	{
		step: "Identify",
		text: "Understand genuine community needs."
	},
	{
		step: "Connect",
		text: "Bring together people, institutions, and resources."
	},
	{
		step: "Empower",
		text: "Provide knowledge, equipment, and training."
	},
	{
		step: "Enable",
		text: "Help beneficiaries develop greater independence."
	},
	{
		step: "Recognise",
		text: "Celebrate people creating meaningful change."
	},
	{
		step: "Amplify",
		text: "Use media and technology to increase reach."
	}
];
var FOUNDATION_CLOSING = "For Society. For Humanity. For a Better Tomorrow. We don't just support people—we strive to empower them. We don't just recognise change—we strive to create more changemakers.";
var initiativeIcons = [
	Cpu,
	GraduationCap,
	MicVocal,
	Users,
	Shield,
	Lightbulb,
	Palette,
	BookOpen
];
function HomeFoundationSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageSection, {
		tone: "band",
		border: true,
		className: "relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-gold/5 blur-[100px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				overline: "Social Impact",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["AP MEDIA ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroAccent, { children: "Foundation" })] }),
				subtitle: FOUNDATION_TAGLINE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-2 max-w-3xl text-center text-xs font-medium tracking-[0.2em] text-gold uppercase",
				children: FOUNDATION_SUBTITLE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground md:text-base",
				children: [FOUNDATION_INTRO, " As part of FG Media Group, the Foundation brings together media, technology, education, awareness, and community participation to create opportunities for people who need support to move forward."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PullQuote, {
				tone: "gold",
				className: "mx-auto mt-12 max-w-3xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg font-medium text-foreground md:text-xl",
					children: FOUNDATION_PHILOSOPHY
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlowCard, {
					tone: "gold",
					className: "p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-label",
							children: "Our Vision"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "fg-glow-card-title mt-3 text-xl font-semibold leading-snug",
							children: FOUNDATION_VISION.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: FOUNDATION_VISION.text
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlowCard, {
					tone: "gold",
					className: "p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-label",
						children: "Our Mission"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2.5 text-sm text-muted-foreground",
						children: FOUNDATION_MISSION.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
								className: "mt-0.5 h-4 w-4 shrink-0 text-gold",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
						}, item))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-10 max-w-3xl rounded-2xl border border-gold/25 bg-gold/[0.06] px-6 py-5 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold tracking-wide text-gold md:text-base",
					children: FOUNDATION_BELIEF.join(" ")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-center text-2xl font-semibold md:text-3xl",
					children: ["What We ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic fg-text-gradient-gold",
						children: "Stand For"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: FOUNDATION_INITIATIVES.map((item, index) => {
						const Icon = initiativeIcons[index] ?? Heart;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlowCard, {
							as: "article",
							tone: "cyan",
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "fg-icon-badge flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "h-5 w-5 text-sky-400",
										"aria-hidden": true
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "fg-glow-card-title mt-4 text-base font-semibold",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: item.text
								})
							]
						}, item.title);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-label text-center",
						children: "Our Approach"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 text-center text-2xl font-semibold",
						children: "Inform → Educate → Train → Empower"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: FOUNDATION_APPROACH.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowCard, {
							tone: "cyan",
							className: "p-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-sky-400/30 bg-sky-400/10 text-sm font-bold text-sky-400 transition-colors duration-300",
									children: String(index + 1).padStart(2, "0")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "fg-glow-card-title font-semibold uppercase tracking-wide text-foreground",
									children: item.step
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: item.text
								})] })]
							})
						}, item.step))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fg-card fg-card-featured mx-auto mt-16 max-w-4xl rounded-3xl p-8 text-center md:p-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "fg-card-inner",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-muted-foreground md:text-base",
							children: FOUNDATION_CLOSING
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs tracking-[0.18em] text-gold uppercase",
							children: "Empowering the Needy · Educating Communities · Bridging the Digital Divide · Recognising Changemakers"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLinkButton, {
							to: "/contact",
							variant: "gold",
							size: "lg",
							className: "mt-8",
							children: "Partner With the Foundation"
						})
					]
				})
			})
		]
	});
}
var trustStats = [
	{
		value: "2020",
		label: "Founded"
	},
	{
		value: "ISO 27001",
		label: "Certified"
	},
	{
		value: "Startup India",
		label: "Recognised"
	},
	{
		value: "Bengaluru",
		label: "Headquarters"
	}
];
function TrustStrip({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `fg-trust-strip relative overflow-hidden border-y border-border/50 py-10 md:py-12 ${className}`,
		"aria-label": "Company credentials",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_100%_at_50%_50%,rgb(56_189_248/0.06),transparent_70%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-10 px-6 sm:gap-x-8 md:grid-cols-4 md:gap-y-0",
			children: trustStats.map(({ value, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "fg-trust-stat-value text-2xl font-bold tracking-tight text-sky-400 sm:text-3xl",
					children: value
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-[0.62rem] font-medium tracking-[0.22em] text-muted-foreground uppercase sm:text-[0.65rem]",
					children: label
				})]
			}, label))
		})]
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
function EcosystemCard({ icon, logo, title, desc, to, accent = "gold" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlowCardLink, {
		to,
		tone: accent === "viera" ? "viera" : "gold",
		className: `group p-6 md:p-8 ${accent === "viera" ? "fg-card-viera" : ""}`,
		children: [
			logo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-6 flex h-16 items-center",
				children: logo
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fg-icon-badge mb-6 flex h-14 w-14 items-center justify-center rounded-xl text-gold",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "fg-glow-card-title mb-3 text-xl",
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
	});
}
var heroPrimaryLinks = [{
	to: "/awards",
	label: "HIT ViERA Awards",
	icon: Award
}, {
	to: "/technology",
	label: "Explore InViGIL",
	icon: Shield
}];
var heroSecondaryLinks = [
	{
		to: "/viera",
		label: "ViERA",
		icon: Sparkles
	},
	{
		to: "/publications",
		label: "Publications",
		icon: Newspaper
	},
	{
		to: "/automobiles",
		label: "Automobiles",
		icon: Car
	}
];
var heroButtonClass = "min-h-[3.25rem] min-w-[11rem]";
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
								className: "mt-10 flex flex-col items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap items-stretch justify-center gap-3",
									children: heroPrimaryLinks.map(({ to, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLinkButton, {
										to,
										variant: "gold",
										size: "lg",
										className: heroButtonClass,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "h-4 w-4 shrink-0",
											"aria-hidden": true
										}), label]
									}, to))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap items-stretch justify-center gap-3",
									children: heroSecondaryLinks.map(({ to, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLinkButton, {
										to,
										variant: "outline",
										size: "lg",
										className: heroButtonClass,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "h-4 w-4 shrink-0",
											"aria-hidden": true
										}), label]
									}, to))
								})]
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
				className: "overflow-hidden border-t border-border bg-surface py-6",
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustStrip, { className: "mt-8 md:mt-12" }),
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
								to: "/technology",
								accent: "viera"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EcosystemCard, {
								logo: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
									id: "viera",
									size: "sm",
									className: "max-w-[11rem]"
								}),
								title: "ViERA",
								desc: "Virtual Intelligence Enabled Real Actor — your digital replica and intelligence layer.",
								to: "/viera",
								accent: "viera"
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
					children: ventures.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlowCard, {
						as: "article",
						tone: v.brandLogo === "viera" || v.brandLogo === "invigil" ? "viera" : "gold",
						className: `h-full p-8 ${v.brandLogo === "viera" || v.brandLogo === "invigil" ? "fg-card-viera" : ""}`,
						innerClassName: "flex h-full flex-col",
						children: [
							v.publicationId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-6 flex h-14 items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicationLogo, {
									id: v.publicationId,
									size: "sm"
								})
							}) : v.brandLogo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-6 flex h-20 items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
									id: v.brandLogo,
									size: "md",
									className: "max-w-[12rem]"
								})
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "fg-glow-card-title text-xl font-semibold",
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
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/about",
											className: "inline-flex items-center gap-2 text-sm font-medium text-gold hover:underline",
											children: ["Our full story ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/ceo",
											className: "inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-gold hover:underline",
											children: ["Meet our CEO ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
										})]
									})
								]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeFoundationSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeCertifications, {}),
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
