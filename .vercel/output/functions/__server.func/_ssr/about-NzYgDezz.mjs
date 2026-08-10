import { i as FgLogo } from "./router-BsC5ZfFx.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { G as Globe, H as Heart, N as Lock, T as Newspaper, Z as Eye, _t as ArrowRight, a as Users, gt as Award, h as Shield, m as ShoppingBag, p as Sparkles, u as Target, ut as Car } from "../_libs/lucide-react.mjs";
import { t as LEADERS } from "./leadership-BZ3zHOD8.mjs";
import { t as LeaderCard } from "./LeaderCard-Cf2_G1uj.mjs";
import { _ as cardLinkClass, d as PullQuote, h as StepFlow, i as FeatureList, l as PageSection, p as SitePageHero, t as ChecklistGrid } from "./PageLayout-pd1GZ2pX.mjs";
import { t as BrandLogo } from "./BrandLogo-CgwpUbYQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-NzYgDezz.js
var import_jsx_runtime = require_jsx_runtime();
var accentClass = {
	gold: {
		icon: "text-gold",
		badge: "border-gold/30 bg-gold/10 text-gold",
		bar: "bg-gold/60",
		link: "text-gold",
		hover: "hover:border-gold/30 hover:shadow-[0_8px_32px_-12px_rgba(245,158,11,0.2)]"
	},
	viera: {
		icon: "text-viera",
		badge: "border-viera/30 bg-viera/10 text-viera",
		bar: "bg-viera/60",
		link: "text-viera",
		hover: "hover:border-viera/30 hover:shadow-[0_8px_32px_-12px_rgba(59,130,246,0.2)]"
	}
};
function PillarCard({ index, pillar }) {
	const accent = accentClass[pillar.accent ?? "gold"];
	const number = String(index).padStart(2, "0");
	const Icon = pillar.icon;
	const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute inset-x-0 top-0 h-0.5 ${accent.bar} opacity-0 transition-opacity duration-300 group-hover:opacity-100` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fg-card-inner flex h-full flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `inline-flex h-9 min-w-9 items-center justify-center rounded-lg border text-xs font-bold tabular-nums ${accent.badge}`,
					children: number
				}), pillar.brandLogoId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-14 items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
						id: pillar.brandLogoId,
						size: "sm",
						className: "max-w-[7rem]"
					})
				}) : Icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "fg-icon-badge flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: `h-5 w-5 ${accent.icon}`,
						"aria-hidden": true
					})
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 text-lg font-bold leading-snug tracking-tight md:text-xl",
				children: pillar.title
			}),
			pillar.tagline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-xs font-medium text-gold md:text-sm",
				children: pillar.tagline
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
				children: pillar.description
			}),
			pillar.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: `mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide ${accent.link} transition-all group-hover:gap-2.5`,
				children: ["Explore", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" })]
			}) : null
		]
	})] });
	const className = `group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-background/40 transition-all duration-300 ${accent.hover}`;
	if (pillar.to) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: pillar.to,
		className: `${cardLinkClass()} ${className} !p-6 md:!p-7`,
		children: content
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `fg-card ${className} p-6 md:p-7`,
		children: content
	});
}
function EcosystemPillarGrid({ pillars }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-5 sm:grid-cols-2 xl:grid-cols-4",
		children: pillars.map((pillar, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillarCard, {
			index: index + 1,
			pillar
		}, pillar.title))
	});
}
var FG_ECOSYSTEM_PILLARS = [
	{
		title: "Media & Journalism",
		description: "HIT NEWS, Happy India Times, Kurukshetra and AP MEDIA — multilingual platforms for news, knowledge, culture, civic issues, entrepreneurship and public engagement.",
		icon: Newspaper,
		to: "/media",
		accent: "gold"
	},
	{
		title: "Virtual Intelligence",
		tagline: "VIT & ViERA",
		description: "Human-centred digital intelligence in which a user's digital counterpart becomes an intelligent interface between the individual and the digital world.",
		brandLogoId: "viera",
		to: "/viera",
		accent: "viera"
	},
	{
		title: "InViGIL",
		tagline: "Intelligence Beyond Vision",
		description: "An emerging ecosystem for virtual intelligence, digital safety, security, investigation, intelligent interaction and virtual commerce.",
		icon: Shield,
		to: "/technology",
		accent: "viera"
	},
	{
		title: "Virtual Commerce",
		description: "Connecting creators, businesses, entrepreneurs and consumers through immersive and intelligent digital interactions — direct, transparent and accessible.",
		icon: ShoppingBag,
		to: "/technology",
		accent: "gold"
	},
	{
		title: "Social & Digital Empowerment",
		description: "Empowering farmers, rural entrepreneurs, creators and small businesses to present their products and capabilities to wider markets through digital platforms.",
		icon: Users,
		to: "/operations",
		accent: "gold"
	},
	{
		title: "Digital Safety & Cybersecurity",
		description: "Encryption, identity and facial-recognition concepts, fraud prevention, proactive threat detection and cyber-safety initiatives including Cyber Commandos.",
		icon: Lock,
		to: "/technology",
		accent: "viera"
	},
	{
		title: "Automotive & Safety Technologies",
		description: "Next-generation automotive technology integration, fleet tracking, virtual showrooms, and safety-oriented mobility solutions.",
		icon: Car,
		to: "/automobiles",
		accent: "gold"
	},
	{
		title: "Recognition & Excellence",
		tagline: "HIT ViERA National Awards",
		description: "Recognising extraordinary individuals and institutions and encouraging excellence across different fields.",
		icon: Award,
		to: "/awards",
		accent: "gold"
	}
];
var timeline = [
	{
		tag: "Foundation",
		date: "14 Jan 2020",
		title: "FG Media Group Established",
		text: "Incorporated in Bengaluru as FG Media and Safety Technologies Pvt Ltd — supported by Startup India and Government of Karnataka."
	},
	{
		tag: "Media",
		date: "2020–21",
		title: "Three Publications Launched",
		text: "HIT News (English), Happy India Times (Telugu), Kurukshetra (Kannada) launched as nationally respected news weeklies."
	},
	{
		tag: "Technology",
		date: "2021",
		title: "ViERA & InViGIL Born",
		text: "Development of the world's first virtual commerce platform powered by ViERA (Virtual Intelligence Enabled Real Actor), unveiled by Hon'ble Vice President of India."
	},
	{
		tag: "Expansion",
		date: "Present",
		title: "InViGIL & Global Expansion",
		text: "InViGIL expanding to 195+ countries across Android, iOS, and Web — with Automobile Wing, Supply Chain, and Cyber Commandos operations."
	}
];
var values = [
	{
		title: "Innovation",
		text: "We challenge conventional thinking and explore what technology can become."
	},
	{
		title: "Integrity",
		text: "Trust is the foundation of technology, media and long-term institutions."
	},
	{
		title: "Humanity",
		text: "Technology must ultimately serve people."
	},
	{
		title: "Safety",
		text: "Digital progress must be accompanied by digital protection."
	},
	{
		title: "Excellence",
		text: "We pursue high standards in ideas, execution and impact."
	},
	{
		title: "Inclusivity",
		text: "Innovation should create opportunities across social and economic boundaries."
	}
];
var missionItems = [
	"Build intelligent digital platforms",
	"Advance Virtual Intelligence Technology",
	"Strengthen digital safety and security",
	"Create innovative media ecosystems",
	"Enable direct digital commerce",
	"Support entrepreneurs and emerging businesses",
	"Empower rural communities and creators",
	"Connect Indian talent with global opportunities",
	"Promote scientific and technological awareness",
	"Recognise excellence and meaningful contribution",
	"Build sustainable technology-driven institutions"
];
var visionTraits = [
	"Intelligent",
	"Secure",
	"Human-centred",
	"Inclusive",
	"Accessible",
	"Responsible",
	"Globally connected",
	"Socially meaningful"
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-fade-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SitePageHero, {
				overline: "FG Media and Safety Technologies Pvt. Ltd.",
				leading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FgLogo, {
					size: "lg",
					showTagline: true,
					align: "center",
					className: "mb-2"
				}),
				title: "About Us",
				subtitle: "Where Media Meets Technology. Where Intelligence Meets Safety. Where Innovation Creates Impact.",
				size: "compact"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection, {
				border: true,
				className: "bg-surface/30 !pt-8 md:!pt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-4xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg leading-relaxed text-foreground md:text-xl",
							children: "Building Intelligent, Secure and Human-Centred Ecosystems for a Digital World"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm leading-relaxed text-muted-foreground md:text-base",
							children: "FG Media and Safety Technologies Pvt. Ltd. is an India-based technology and media enterprise working at the intersection of Media, Information Technology, Virtual Intelligence, Digital Safety, Innovation, Entrepreneurship and Social Impact."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm leading-relaxed text-muted-foreground md:text-base",
							children: "Founded around the vision of technology and media pioneer Ramesh Babu Pasupuleti, FG Media was created with a larger purpose: to develop meaningful, creative, secure and user-centric technology solutions while building powerful media platforms capable of informing, connecting and empowering society. The company was incorporated in Bengaluru in 2020 and is registered as a private limited company."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageSection, {
				className: "!pt-10 md:!pt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-label text-center",
						children: "Our Identity"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 text-center text-4xl md:text-5xl",
						children: ["Not a Conventional ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic fg-text-gradient-gold",
							children: "Media or Tech Company"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground md:text-base",
						children: "FG Media is envisioned as a converged ecosystem in which information becomes intelligence, intelligence becomes action, technology becomes empowerment, media becomes influence, safety becomes trust, and innovation becomes opportunity."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepFlow, {
						steps: [
							"Information → Intelligence",
							"Intelligence → Action",
							"Technology → Empowerment",
							"Media → Influence",
							"Safety → Trust",
							"Innovation → Opportunity"
						],
						className: "mt-10"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection, {
				border: true,
				className: "bg-surface/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "fg-vision-block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-6 w-6 text-viera" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-2xl md:text-3xl",
									children: "Our Vision"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm font-medium text-gold",
								children: "To Build a Smarter, Safer and More Connected World"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm leading-relaxed text-muted-foreground md:text-base",
								children: "FG Media envisions a future in which advanced technology is accessible not only to large corporations and technology professionals, but also to ordinary citizens, entrepreneurs, creators, farmers, professionals, institutions and communities."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed text-muted-foreground md:text-base",
								children: "Our long-term vision is to build an ecosystem where technology can help people discover opportunities, protect themselves, communicate effectively, conduct business, access information and participate in the global digital economy."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex flex-wrap gap-2",
								children: visionTraits.map((trait) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-viera/30 bg-viera/10 px-3 py-1 text-xs font-medium text-viera",
									children: trait
								}, trait))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "fg-mission-block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "h-6 w-6 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-2xl md:text-3xl",
									children: "Our Mission"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm font-medium text-gold",
								children: "Technology With Purpose"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm leading-relaxed text-muted-foreground md:text-base",
								children: "FG Media's mission is to develop and promote technology solutions that combine innovation with practical human value."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChecklistGrid, {
								items: missionItems,
								className: "mt-6"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageSection, {
				border: true,
				className: "bg-surface/25",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-label text-center",
						children: "The FG Media Ecosystem"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 text-center text-4xl md:text-5xl",
						children: ["Integrated ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic fg-text-gradient-gold",
							children: "Vision"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground md:text-base",
						children: "FG Media brings multiple disciplines together under one integrated vision — connecting media, technology, intelligence, safety, commerce, mobility, entrepreneurship and social impact."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EcosystemPillarGrid, { pillars: FG_ECOSYSTEM_PILLARS })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageSection, {
				border: true,
				className: "bg-surface/30",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-label text-center",
						children: "Media Powered by Technology"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-center text-3xl md:text-4xl",
						children: "Informed Communities"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepFlow, {
						steps: [
							"Read",
							"Understand",
							"Interact",
							"Investigate",
							"Connect",
							"Participate",
							"Act"
						],
						className: "mt-8"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground md:text-base",
						children: "The purpose is not simply to publish information. It is to create informed communities where journalism and technology work together."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-label",
						children: "A Global Ambition From India"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 text-3xl md:text-4xl",
						children: ["Indian Foundations, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic fg-text-gradient-gold",
							children: "Global Relevance"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm leading-relaxed text-muted-foreground md:text-base",
						children: "FG Media is headquartered in Bengaluru, Karnataka — one of India's most important technology centres. We believe India has the talent, creativity, scientific capability and entrepreneurial energy to develop technologies that can serve not only India, but the world."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureList, {
					icon: Globe,
					items: [
						{
							title: "Intelligence",
							text: "Technology that understands context and assists people."
						},
						{
							title: "Security",
							text: "Technology designed around trust, protection and responsible digital participation."
						},
						{
							title: "Accessibility",
							text: "Advanced capabilities made understandable and usable by ordinary people."
						},
						{
							title: "Opportunity",
							text: "Digital platforms that open markets, careers and entrepreneurial possibilities."
						}
					]
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageSection, {
				border: true,
				className: "bg-surface/40",
				id: "leadership",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-12 text-center md:mb-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-label",
								children: "Our Leadership"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-4 text-4xl md:text-5xl",
								children: ["The People Behind ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic fg-text-gradient-gold",
									children: "FG Media"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base",
								children: "FG Media's vision is shaped by leaders spanning technology, media, safety, and automotive innovation. Tap any profile to read their full story."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 md:grid-cols-2 xl:grid-cols-3",
						children: LEADERS.map((leader) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeaderCard, {
							leader,
							variant: "portrait"
						}, leader.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/team",
							className: "inline-flex items-center gap-2 text-sm font-medium text-gold hover:underline",
							children: ["Meet the full team ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageSection, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "text-center text-4xl md:text-5xl",
				children: ["Our ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "italic fg-text-gradient-gold",
					children: "Values"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: values.map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "fg-card rounded-2xl p-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "fg-card-inner",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "fg-icon-badge h-10 w-10 rounded-lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4 text-gold" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-xl",
								children: value.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: value.text
							})
						]
					})
				}, value.title))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageSection, {
				border: true,
				className: "bg-surface/30",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-label",
						children: "Our Journey"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-4xl md:text-5xl",
						children: "Building Something Lasting"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-14 space-y-10 border-l border-border pl-8",
						children: timeline.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -left-[2.6rem] flex h-6 w-6 items-center justify-center rounded-full border border-gold/40 bg-background",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-gold" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[0.65rem] tracking-[0.2em] text-gold uppercase",
										children: t.tag
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: t.date
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 text-2xl",
									children: t.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground",
									children: t.text
								})
							]
						}, t.title))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection, {
				className: "pb-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PullQuote, {
					tone: "gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mt-1 h-6 w-6 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-label",
								children: "FG Media — Our Promise"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base leading-relaxed text-muted-foreground md:text-lg",
								children: "We aspire to build technology that people can trust. Media that people can depend upon. Platforms that create opportunity. Intelligence that empowers. Innovation that protects. And institutions that leave a lasting positive impact."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm font-medium text-foreground",
								children: "We are building more than products. We are building an ecosystem for the future."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 flex items-center gap-2 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-4 w-4 text-gold" }), "FG Media and Safety Technologies Pvt. Ltd. · Bengaluru, Karnataka, India"]
							})
						] })]
					})
				})
			})
		]
	});
}
//#endregion
export { About as component };
