import { I as selectionTimeline, R as signatureTiers, S as influencerPerks, c as JsonLd, h as awardsEventSchema, m as SiteLinkButton, o as INFLUENCER_INTRO, v as evaluationCriteria, y as excellenceAwards } from "./router-CsP7Npso.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { K as Gavel, Y as FileSearch, _t as ArrowRight, a as Users, b as SearchCheck, c as Trophy, lt as Check, ot as CircleCheckBig, rt as ClipboardList } from "../_libs/lucide-react.mjs";
import { a as HeroAccent, r as ContentCard, s as IconBadge } from "./PageLayout-pd1GZ2pX.mjs";
import { t as BrandLogo } from "./BrandLogo-CgwpUbYQ.mjs";
import { n as SectionHeader, t as PageHero } from "./SectionHeader-BX-fGw3X.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/awards-DPXZ-_37.js
var import_jsx_runtime = require_jsx_runtime();
function AwardTierComparison({ showCta = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid items-stretch gap-6 lg:grid-cols-3",
		children: signatureTiers.map((tier) => {
			const featured = tier.featured;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
				className: `relative flex flex-col rounded-2xl p-6 md:p-8 ${featured ? "fg-card fg-card-featured fg-card-interactive lg:-mt-2 lg:mb-2 lg:scale-[1.02]" : "fg-card fg-card-interactive"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "fg-card-inner flex flex-col flex-1",
					children: [
						featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-[0.65rem] font-semibold tracking-[0.15em] text-primary-foreground uppercase shadow-[0_4px_16px_rgba(245,158,11,0.4)]",
							children: "Highest Honour"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "section-label",
									children: tier.shortName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 text-xl leading-snug md:text-2xl",
									children: tier.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-muted-foreground",
									children: tier.subtitle
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "my-6 border-t border-border/60 pt-6 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase",
									children: "Cash Award"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-4xl text-gold md:text-5xl",
									children: tier.cashAward
								}),
								"cashNote" in tier && tier.cashNote && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: tier.cashNote
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex-1 space-y-3",
							children: tier.benefits.map((benefit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2.5 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "mt-0.5 h-4 w-4 shrink-0 text-gold",
									strokeWidth: 2.5
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: benefit })]
							}, benefit))
						}),
						showCta && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/nominate",
							className: `mt-8 block w-full rounded-xl py-3.5 text-center text-sm font-semibold transition-all hover:opacity-90 ${featured ? "bg-gold text-primary-foreground shadow-[0_4px_20px_rgba(245,158,11,0.35)]" : "border border-gold/40 text-gold hover:bg-gold/10"}`,
							children: "Nominate Now"
						})
					]
				})
			}, tier.tier);
		})
	});
}
function SignatureSpotlight() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-surface/30 py-16 md:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-label",
							children: "National Recognition"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-3 text-3xl md:text-4xl",
							children: ["Signature Award ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic fg-text-gradient-gold",
								children: "Tiers"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground",
							children: "Three tiers of national honour — cash awards, trophies, and lifetime recognition across India."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 md:grid-cols-3",
					children: signatureTiers.map((tier) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
						className: `fg-card rounded-2xl p-6 md:p-8 ${tier.accent} ${tier.featured ? "fg-card-featured md:-translate-y-2" : ""}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "fg-card-inner text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[0.65rem] font-semibold tracking-widest text-gold uppercase",
									children: ["Tier ", tier.tier]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "mx-auto mt-4 h-8 w-8 text-gold drop-shadow-[0_0_12px_rgba(245,158,11,0.35)]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-xl",
									children: tier.shortName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: tier.subtitle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "fg-stat mt-5 text-3xl fg-text-gradient-gold md:text-4xl",
									children: [tier.cashAward, "cashNote" in tier && tier.cashNote && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-sm text-muted-foreground",
										children: [" ", tier.cashNote]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs tracking-widest text-muted-foreground uppercase",
									children: "Cash Award"
								})
							]
						})
					}, tier.shortName))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-center text-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/nominate",
						className: "font-semibold text-gold hover:underline",
						children: "Submit your nomination →"
					})
				})
			]
		})
	});
}
function CtaRow({ primary, secondary, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex flex-wrap gap-3 ${className}`,
		children: [primary && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLinkButton, {
			to: primary.to,
			variant: primary.variant ?? "gold",
			size: "md",
			children: [
				primary.label,
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
			]
		}), secondary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLinkButton, {
			to: secondary.to,
			variant: "outline",
			size: "md",
			children: secondary.label
		})]
	});
}
function ExcellenceMarquee() {
	const items = [...excellenceAwards, ...excellenceAwards];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden border-y border-border bg-surface py-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-track flex w-max gap-10 whitespace-nowrap",
			children: items.map((award, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-xs tracking-[0.15em] text-muted-foreground",
				children: ["· ", award]
			}, i))
		})
	});
}
function InfluencerBlock() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fg-card fg-card-featured rounded-3xl p-10 md:p-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fg-card-inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "section-label",
					children: "Top 100 Influencers of India 2026"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 text-3xl md:text-4xl",
					children: ["Celebrating ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-gold",
						children: "National Influence"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground",
					children: INFLUENCER_INTRO
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-3",
					children: influencerPerks.map((perk) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentCard, {
						hover: false,
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBadge, {
									icon: perk.icon,
									size: "md"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-sm font-semibold",
								children: perk.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs leading-relaxed text-muted-foreground",
								children: perk.text
							})
						]
					}, perk.title))
				})
			]
		})
	});
}
var stepIcons = [
	ClipboardList,
	FileSearch,
	SearchCheck,
	Users,
	Gavel
];
function ProcessTimeline() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden lg:grid lg:grid-cols-4 lg:gap-4",
				children: selectionTimeline.map((item, i) => {
					const Icon = stepIcons[i] ?? ClipboardList;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex flex-col",
						children: [i < selectionTimeline.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-9 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-gold/50 to-gold/20 lg:block",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentCard, {
							as: "article",
							className: "relative flex h-full flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-semibold text-primary-foreground shadow-[0_0_12px_rgba(245,158,11,0.35)]",
										children: item.step
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "fg-icon-badge h-10 w-10 rounded-xl",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-gold" })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 text-base font-semibold leading-snug text-foreground",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 flex-1 text-sm leading-relaxed text-muted-foreground",
									children: item.text
								})
							]
						})]
					}, item.step);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden gap-4 sm:grid sm:grid-cols-2 lg:hidden",
				children: selectionTimeline.map((item, i) => {
					const Icon = stepIcons[i] ?? ClipboardList;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentCard, {
						as: "article",
						className: "flex flex-col",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex h-9 w-9 items-center justify-center rounded-full bg-gold text-sm font-semibold text-primary-foreground",
									children: item.step
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-gold" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-base font-semibold",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: item.text
							})
						]
					}, item.step);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4 sm:hidden",
				children: selectionTimeline.map((item, i) => {
					const Icon = stepIcons[i] ?? ClipboardList;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-10 w-10 items-center justify-center rounded-full bg-gold text-sm font-semibold text-primary-foreground",
								children: item.step
							}), i < selectionTimeline.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-2 min-h-8 w-px flex-1 bg-gold/30" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentCard, {
							as: "article",
							className: "flex-1 p-5",
							hover: false,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-semibold",
									children: item.title
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: item.text
							})]
						})]
					}, item.step);
				})
			})
		]
	});
}
function Awards() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: awardsEventSchema() }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageHero, {
			variant: "awards",
			align: "center",
			overline: "HIT ViERA National Awards 2026",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Recognising Excellence. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroAccent, { children: "Celebrating Vision." })] }),
			subtitle: "HIT ViERA National Awards 2026 & InViGIL Global Launch Event — Bengaluru, Karnataka.",
			showEventBar: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex flex-wrap items-center justify-center gap-6 md:gap-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
						id: "hitNews",
						size: "sm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xl font-light text-muted-foreground",
						children: "×"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
						id: "viera",
						size: "sm"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaRow, {
				primary: {
					to: "/nominate",
					label: "Submit Nomination"
				},
				secondary: {
					to: "/sponsorship",
					label: "Sponsorship Tiers"
				},
				className: "justify-center"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignatureSpotlight, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface/50 py-20 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					overline: "Signature Awards",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Awards ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-gold",
						children: "Hierarchy"
					})] }),
					description: "Three tiers of national recognition — compare full benefits and nominate for the honour that fits your achievement.",
					className: "mx-auto text-center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 lg:mt-14",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AwardTierComparison, {})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "py-16 md:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					overline: "Excellence Awards",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["30 Categories of ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-gold",
						children: "Excellence"
					})] }),
					description: "From entrepreneurship and technology to healthcare, heritage, media and public service — excellence recognised across India.",
					className: "mx-auto max-w-7xl px-6 text-center"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExcellenceMarquee, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-3 px-6 sm:grid-cols-2 lg:grid-cols-3",
					children: excellenceAwards.map((award) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "fg-card fg-card-interactive rounded-xl px-4 py-3.5 text-sm text-muted-foreground transition-colors hover:text-gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "fg-card-inner",
							children: award
						})
					}, award))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-6 py-20 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfluencerBlock, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface/40 py-20 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
						overline: "Selection Process",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Transparent ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-gold",
							children: "Evaluation"
						})] }),
						description: "The HIT ViERA National Awards uphold the highest standards of transparency, integrity and credibility through a rigorous multi-stage evaluation process."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessTimeline, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "fg-card mt-14 rounded-3xl p-8 md:p-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "fg-card-inner",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl text-foreground md:text-3xl",
									children: "What the Assessment Includes"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground",
									children: "Every nomination is reviewed across the following dimensions. The decision of the National Jury is final and binding."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
									children: evaluationCriteria.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "fg-card rounded-xl px-4 py-3 text-sm text-muted-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "fg-card-inner flex items-start gap-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
										})
									}, item))
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "fg-card fg-card-featured mt-10 rounded-3xl p-8 md:p-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "fg-card-inner",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "section-label",
									children: "Grand Awards Ceremony"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "mt-3 text-2xl md:text-3xl",
									children: ["Hosted in ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-gold",
										children: "Bengaluru, Karnataka"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base",
									children: "The HIT ViERA National Awards 2026 brings together distinguished personalities from Government, Industry, Business, Academia, Science, Technology, Defence, Media, Arts, Sports and Civil Society — celebrating excellence, recognising transformative leadership and inspiring future generations of innovators and nation builders."
								})
							]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-6 pb-28 pt-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fg-card fg-card-featured rounded-3xl p-10 text-center md:p-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "fg-card-inner",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl md:text-4xl",
							children: "Nominate. Inspire. Lead."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground",
							children: "Join an inspiring community of exceptional leaders, innovators and changemakers who are shaping the future of India. Be Recognised."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaRow, {
							primary: {
								to: "/nominate",
								label: "Submit Nomination"
							},
							secondary: {
								to: "/sponsorship",
								label: "View Sponsorship"
							},
							className: "mt-8 justify-center"
						})
					]
				})
			})
		})
	] });
}
//#endregion
export { Awards as component };
