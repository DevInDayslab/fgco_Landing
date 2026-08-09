import { f as SiteAnchorButton, p as SiteLinkButton } from "./router-DmhiZPli.mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { G as Eye, K as ExternalLink, M as Lightbulb, S as Palette, a as User, at as Briefcase, c as TrendingUp, f as Sparkles, it as Building2, ot as Brain, p as Shield, t as Zap, ut as ArrowRight, z as GraduationCap } from "../_libs/lucide-react.mjs";
import { a as HeroAccent, d as PullQuote, f as SectionTitle, g as TagCloud, i as FeatureList, l as PageSection, m as SplitColumns, n as CompareTable, p as SitePageHero, u as ProseBlock } from "./PageLayout-pd1GZ2pX.mjs";
import { t as BrandLogo } from "./BrandLogo-BRvmP1DV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/viera-24DUecd-.js
var import_jsx_runtime = require_jsx_runtime();
var VIERA_HERO = {
	title: "ViERA",
	accent: "Your Intelligence. Your Digital Replica. Your Superpower.",
	overline: "Virtual Intelligence Enabled Real Actor",
	subtitle: "ViERA is a next-generation Virtual Intelligence technology designed to create your own intelligent digital replica — an avatar that represents you in the digital world, learns from your training, preferences, goals, knowledge, and working style, and continuously expands its capabilities with the world's knowledge and advanced technologies.",
	tagline: "Your Digital Replica. Your Intelligence. Your Future."
};
var vieraDifferentiators = [
	{
		title: "Personalized Intelligence",
		text: "Learns from the user's training, instructions, expertise, preferences, and objectives."
	},
	{
		title: "Virtual Intelligence",
		text: "Combines personal intelligence with advanced computational and knowledge capabilities."
	},
	{
		title: "Digital Representation",
		text: "Functions as your intelligent avatar in the digital environment."
	},
	{
		title: "Continuous Learning",
		text: "Can evolve as the user's knowledge, requirements, and goals change."
	},
	{
		title: "Decision Support",
		text: "Helps analyze information and provide intelligent guidance."
	},
	{
		title: "Digital Productivity",
		text: "Assists with everyday work, communication, organization, research, and creation."
	},
	{
		title: "Protection & Awareness",
		text: "Can support digital safety, security awareness, risk recognition, and responsible decision-making."
	},
	{
		title: "Technology Integration",
		text: "Designed to work as an intelligent interface connecting people with emerging digital technologies."
	}
];
var digitalAvatarRoles = [
	{
		role: "Professionals",
		text: "A digital professional representative."
	},
	{
		role: "Entrepreneurs",
		text: "A digital business intelligence partner."
	},
	{
		role: "Educators",
		text: "A personalized knowledge companion."
	},
	{
		role: "Creators",
		text: "A creative intelligence assistant."
	},
	{
		role: "Organizations",
		text: "An intelligent digital workforce layer."
	},
	{
		role: "Individuals",
		text: "A personal digital intelligence companion."
	}
];
var vieraPrinciples = [
	{
		title: "Protect",
		text: "Help you become more aware of digital risks, information, security concerns, and potentially suspicious activities."
	},
	{
		title: "Empower",
		text: "Give you intelligent technological capabilities that can help you work, learn, create, communicate, analyze, and accomplish more."
	},
	{
		title: "Guide",
		text: "Help you understand information, explore possibilities, evaluate options, and make better-informed decisions."
	}
];
var invigilVieraStack = [
	"Investigations",
	"News",
	"Virtual Intelligence",
	"Guard Intelligence",
	"Live Technology"
];
var vieraComparisonRows = [
	[
		"Core approach",
		"Personalized Virtual Intelligence & digital replica",
		"Generic command-response AI"
	],
	[
		"Representation",
		"Intelligent digital avatar of the user",
		"Detached assistant"
	],
	[
		"Learning",
		"Evolves with user training and goals",
		"Limited personalization"
	],
	[
		"Platform",
		"InViGIL + ViERA integrated ecosystem",
		"Standalone tools"
	],
	[
		"Purpose",
		"Protect, empower, and guide the individual",
		"Task automation only"
	]
];
var roleMeta = {
	Professionals: {
		icon: Briefcase,
		accent: "gold",
		position: "left"
	},
	Entrepreneurs: {
		icon: TrendingUp,
		accent: "viera",
		position: "right",
		span: "wide"
	},
	Educators: {
		icon: GraduationCap,
		accent: "viera",
		position: "left"
	},
	Creators: {
		icon: Palette,
		accent: "gold",
		position: "right"
	},
	Organizations: {
		icon: Building2,
		accent: "gold",
		position: "left"
	},
	Individuals: {
		icon: User,
		accent: "viera",
		position: "right",
		span: "wide"
	}
};
var accentStyles = {
	gold: {
		border: "border-gold/35",
		glow: "from-gold/15",
		icon: "text-gold",
		iconBg: "bg-gold/10 border-gold/25",
		line: "bg-gold/50"
	},
	viera: {
		border: "border-viera/35",
		glow: "from-viera/15",
		icon: "text-viera",
		iconBg: "bg-viera/10 border-viera/25",
		line: "bg-viera/50"
	}
};
function RoleTile({ role, text, meta }) {
	const Icon = meta.icon;
	const a = accentStyles[meta.accent];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: `group relative overflow-hidden rounded-2xl border ${a.border} bg-gradient-to-br ${a.glow} to-transparent p-5 transition-all duration-300 hover:border-opacity-80 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.5)] md:p-6 ${meta.span === "wide" ? "sm:col-span-2" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${a.iconBg} transition-transform duration-300 group-hover:scale-105`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: `h-5 w-5 ${a.icon}`,
					"aria-hidden": true
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-semibold tracking-tight",
					children: role
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 text-sm leading-relaxed text-muted-foreground",
					children: text
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `mt-4 h-px w-full bg-gradient-to-r ${a.line} to-transparent opacity-60`,
			"aria-hidden": true
		})]
	});
}
function HubVisual({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative mx-auto flex aspect-square w-full max-w-[280px] items-center justify-center lg:max-w-none ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 rounded-full border border-viera/10",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-[12%] rounded-full border border-viera/20",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-[24%] rounded-full border border-dashed border-viera/25 animate-[spin_90s_linear_infinite]",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_65%)]",
				"aria-hidden": true
			}),
			[
				0,
				60,
				120,
				180,
				240,
				300
			].map((deg) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-1/2 top-1/2 h-px w-[42%] origin-left bg-gradient-to-r from-viera/30 to-transparent",
				style: { transform: `rotate(${deg}deg)` },
				"aria-hidden": true
			}, deg)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex flex-col items-center justify-center rounded-full border border-viera/40 bg-background/80 p-6 shadow-[0_0_60px_-12px_rgba(59,130,246,0.35)] backdrop-blur-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
					id: "viera",
					size: "md",
					className: "max-w-[10rem]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-2 text-[0.65rem] tracking-[0.18em] text-muted-foreground uppercase",
					children: "Your digital self"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
				className: "absolute right-[8%] top-[12%] h-4 w-4 text-gold/60",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
				className: "absolute bottom-[14%] left-[10%] h-3 w-3 text-viera/50",
				"aria-hidden": true
			})
		]
	});
}
function DigitalAvatarSection() {
	const leftRoles = digitalAvatarRoles.filter((r) => roleMeta[r.role]?.position === "left");
	const rightRoles = digitalAvatarRoles.filter((r) => roleMeta[r.role]?.position === "right");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mb-10 max-w-2xl text-center text-sm text-muted-foreground md:mb-14",
				children: "One intelligent avatar — shaped for how you work, create, teach, build and live online."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-10 lg:items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4",
						children: leftRoles.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoleTile, {
							role: item.role,
							text: item.text,
							meta: roleMeta[item.role]
						}, item.role))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HubVisual, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4",
						children: rightRoles.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoleTile, {
							role: item.role,
							text: item.text,
							meta: roleMeta[item.role]
						}, item.role))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HubVisual, { className: "mb-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: digitalAvatarRoles.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoleTile, {
						role: item.role,
						text: item.text,
						meta: roleMeta[item.role]
					}, item.role))
				})]
			})
		]
	});
}
var principleIcons = [
	Shield,
	Zap,
	Lightbulb
];
function Viera() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-fade-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SitePageHero, {
				tone: "viera",
				leading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
					id: "viera",
					className: "mx-auto mb-6 h-40 max-w-[min(100%,40rem)] md:h-52 lg:h-60",
					size: "xl"
				}),
				badge: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mb-6 inline-flex items-center gap-2 rounded-full border border-viera/40 bg-viera/15 px-5 py-2 text-[0.68rem] tracking-[0.22em]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-viera" }), VIERA_HERO.overline]
				}),
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					VIERA_HERO.title,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroAccent, { children: VIERA_HERO.accent })
				] }),
				subtitle: VIERA_HERO.subtitle,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLinkButton, {
						to: "/technology",
						variant: "viera",
						size: "lg",
						children: ["Discover InViGIL ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteAnchorButton, {
						href: "https://teaser.live",
						target: "_blank",
						rel: "noreferrer",
						variant: "outline",
						size: "lg",
						children: ["Visit teaser.live ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLinkButton, {
						to: "/contact",
						variant: "outline",
						size: "lg",
						children: "Request Early Access"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection, {
				className: "pt-0",
				border: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ProseBlock, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg font-semibold text-foreground md:text-xl",
						children: VIERA_HERO.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm leading-relaxed text-muted-foreground md:text-base",
						children: "Imagine having a digital version of yourself that understands how you think, what you know, what you want to achieve, and how you want things to be done. Through Virtual Intelligence, your ViERA can be trained and personalized to reflect your knowledge, expertise, instructions, preferences, values, workflows, and objectives."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-wrap justify-center gap-3 text-sm font-medium text-viera",
						children: [
							"You train it.",
							"You personalize it.",
							"You empower it.",
							"ViERA works for you."
						].map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-viera/30 px-4 py-2",
							children: line
						}, line))
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageSection, {
				tone: "viera-band",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					overline: "Differentiation",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"What Makes ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-viera",
							children: "ViERA"
						}),
						" Different?"
					] }),
					description: "Traditional digital assistants primarily respond to commands. ViERA is designed to become a persistent digital representation of the user."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureList, {
					items: vieraDifferentiators,
					icon: Brain,
					iconClass: "text-viera",
					columns: 2
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageSection, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				overline: "Digital Avatar",
				title: "Your Digital Avatar in the Digital World",
				description: "Your physical identity belongs to the real world. ViERA represents your intelligent presence in the digital world."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DigitalAvatarSection, {})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection, {
				tone: "muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PullQuote, {
					tone: "viera",
					className: "mx-auto max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
							className: "h-7 w-7 text-viera",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 text-2xl md:text-3xl",
							children: "ViERA + The World's Knowledge"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground md:text-base",
							children: "Your ViERA begins with you. Your training creates its personalized foundation. But ViERA combines your personalized intelligence with broader knowledge, advanced technologies, digital tools, and evolving information."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-lg font-semibold italic fg-text-gradient-gold",
							children: "Your intelligence, amplified by technology."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageSection, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					overline: "Core Principles",
					title: "Protect. Empower. Guide."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-10 md:grid-cols-3 md:gap-8",
					children: vieraPrinciples.map((p, i) => {
						const Icon = principleIcons[i];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `${i === 0 ? "border-l-4 border-gold/50 pl-6" : "md:border-l md:border-border/50 md:pl-8"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: `h-6 w-6 ${i === 0 ? "text-gold" : "text-viera"}`,
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-2xl",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: p.text
								})
							]
						}, p.title);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-12 max-w-2xl text-center text-sm text-muted-foreground",
					children: "ViERA is not intended to replace human judgment. It augments human capability and places advanced intelligence at the user's service."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageSection, {
				tone: "viera-band",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						overline: "InViGIL Platform",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["ViERA on ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-viera",
							children: "InViGIL"
						})] }),
						description: "ViERA is initially being introduced through the InViGIL platform — intelligent digital security and information experiences."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagCloud, {
						tags: invigilVieraStack,
						tone: "viera"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 flex flex-col items-center gap-6 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-center gap-8 md:gap-12",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
										id: "invigil",
										size: "md"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-2xl font-light text-muted-foreground",
										children: "+"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
										id: "viera",
										size: "md"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold tracking-wide",
								children: "InViGIL + ViERA"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground",
								children: "See More · Understand More · Think Smarter · Protect Better"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageSection, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				overline: "New Category",
				title: "A New Category of Technology",
				description: "Moving beyond conventional AI assistants toward personalized Virtual Intelligence."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SplitColumns, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PullQuote, {
				tone: "viera",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Rather than asking:"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xl font-semibold",
						children: "“What can technology do?”"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-sm text-muted-foreground",
						children: "ViERA asks:"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xl font-semibold text-viera",
						children: "“What can technology do when it understands you?”"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
					className: "h-6 w-6 text-viera",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-4 text-2xl",
					children: "The ViERA Vision"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted-foreground",
					children: "Our vision is to build a future where technology is not merely a tool that people operate, but an intelligent digital partner that understands the individual, adapts to the individual, and works alongside the individual."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm font-medium text-gold",
					children: "Intelligence Beyond Vision."
				})
			] })] })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageSection, {
				className: "pb-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["ViERA vs. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-muted-foreground",
							children: "Conventional AI"
						})] }),
						accent: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompareTable, {
						headers: [
							"Aspect",
							"ViERA",
							"Conventional AI"
						],
						rows: vieraComparisonRows,
						highlightCol: 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 border-t border-border pt-12 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-label",
								children: "ViERA"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-4 max-w-2xl text-2xl font-bold md:text-3xl",
								children: "Your Digital Replica. Your Virtual Intelligence. Your Digital Superpower."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLinkButton, {
								to: "/technology",
								variant: "viera",
								size: "lg",
								className: "mt-8",
								children: ["Explore InViGIL ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { Viera as component };
