import { i as FgLogo } from "./router-CGLlFfYz.mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { G as Eye, L as Heart, l as Target } from "../_libs/lucide-react.mjs";
import { l as PageSection, p as SitePageHero } from "./PageLayout-pd1GZ2pX.mjs";
import { t as ramesh_default } from "./ramesh-D7g6cAlc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-9xuwQ6os.js
var import_jsx_runtime = require_jsx_runtime();
var Roopa_default = "/assets/Roopa-BcqXSn30.jpeg";
var Sekharphoto_default = "/assets/Sekharphoto-B-g6wC1Z.png";
var pillars = [
	{
		icon: Target,
		title: "Our Mission",
		text: "To provide the safest, most user-friendly, and productive information technology solutions that are creative and meaningful.",
		color: "text-gold"
	},
	{
		icon: Eye,
		title: "Our Vision",
		text: "To be a proactive, sustainable, and long-lasting leader in media and technology — delivering content and solutions that matter globally.",
		color: "text-viera"
	},
	{
		icon: Heart,
		title: "Our Values",
		text: "Truth, excellence, innovation, and community. We believe in journalism and technology that uplifts, empowers, and connects people across India and the world.",
		color: "text-en"
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
function LeaderProfile({ overline, name, role, organization, tags, headline, paragraphs, highlights, sections, quote, footer, image, imageAlt, imageClassName = "object-cover object-top", reverse = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "border-t border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base",
					children: paragraphs.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph.slice(0, 40)))
				}),
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
		}), sections && sections.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl space-y-12 border-t border-border/60 px-6 pb-20 pt-12",
			children: sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-semibold md:text-2xl",
					children: section.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base",
					children: section.paragraphs.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph.slice(0, 48)))
				}),
				section.bullets && section.bullets.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5",
					children: [section.bulletsIntro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted-foreground md:text-base",
						children: section.bulletsIntro
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-2 sm:grid-cols-2",
						children: section.bullets.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2 text-sm leading-relaxed text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
						}, item))
					})]
				}) : null
			] }, section.title))
		}) : null]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-fade-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SitePageHero, {
				overline: "Our Story",
				leading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FgLogo, {
					size: "lg",
					showTagline: true,
					align: "center",
					className: "mb-2"
				}),
				title: "About Us",
				subtitle: "Recognising Excellence. Creating Legends. Inspiring India."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeaderProfile, {
				overline: "The Founder",
				name: "Mr. Ramesh Babu Pasupuleti",
				role: "Founder, Editor-in-Chief & CEO",
				organization: "FG Media Group",
				headline: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"A Vision at the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block italic fg-text-gradient-gold",
						children: "Intersection of Two Worlds"
					})
				] }),
				paragraphs: [
					"Mr. Ramesh Babu Pasupuleti is a seasoned professional with a strong background in both Media and Information Technology. His rare dual expertise gave him a unique perspective — seeing the convergence of journalism and technology before it became inevitable.",
					"He founded FG Media Group on 14th January 2020 at Bengaluru with a clear mission: to provide the safest, most user-friendly, and productive information technology solutions that are both creative and meaningful.",
					"Under his leadership, the company has grown into a respected multilingual media house with three national publications and a technology innovator — pioneering the world's first Virtual Commerce Platform through InViGIL, powered by ViERA."
				],
				highlights: [
					{
						title: "Media Leadership",
						text: "Built FG Media Group into a nationally respected multilingual media house with HIT News, Happy India Times, and Kurukshetra."
					},
					{
						title: "Technology Vision",
						text: "Pioneered InViGIL and ViERA — advancing virtual intelligence, digital commerce, and innovation recognised at the highest levels."
					},
					{
						title: "Institutional Growth",
						text: "Guided the organisation from startup incorporation to a diversified ecosystem spanning media, technology, awards, and global expansion."
					}
				],
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-label",
						children: "Corporate Office"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: "#107, 2nd Main, MLA Layout, RT Nagar, Bengaluru City, Karnataka State — 560032"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3",
						children: "Mobile: +91 73820 98888"
					})
				] }),
				image: ramesh_default,
				imageAlt: "Mr. Ramesh Babu Pasupuleti — Founder, Editor-in-Chief & CEO of FG Media Group"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeaderProfile, {
				reverse: true,
				overline: "Leadership",
				name: "Roopa T",
				role: "Founder & Managing Director",
				organization: "FG Media and Safety Technologies Pvt. Ltd.",
				tags: "Women Empowerment Advocate · Technology Visionary · Digital Safety & Security Innovator · Social Development Contributor",
				headline: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Technology That",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block italic fg-text-gradient-gold",
						children: "Empowers & Protects"
					})
				] }),
				paragraphs: [
					"Roopa T is the Founder and Managing Director of FG Media and Safety Technologies Pvt. Ltd., and a key contributor to the organisation's vision of developing technology that is not only innovative, but also safe, inclusive, empowering and socially meaningful.",
					"Her vision has consistently centred on one fundamental principle: technology should empower people, protect them from emerging risks and create opportunities for every individual — especially women — to participate meaningfully in the mainstream economy.",
					"She believes that every woman is an economic contributor — whether as a homemaker, professional, entrepreneur, farmer, teacher, skilled worker, or community leader — and her mission is to help transform skills, knowledge, creativity and experience into economic opportunities and social impact."
				],
				highlights: [
					{
						title: "Women's Empowerment",
						text: "Creates environments where women's existing abilities are recognised, strengthened and connected to larger economic opportunities."
					},
					{
						title: "Safety & Security",
						text: "Champions technology-enabled safety so people can work, travel, communicate and conduct business with greater confidence."
					},
					{
						title: "InViGIL & ViERA",
						text: "Shapes human-centric virtual intelligence and security technology that protects, guides and empowers people in everyday life."
					}
				],
				sections: [
					{
						title: "Her Vision for Women's Economic Empowerment",
						paragraphs: ["As a woman entrepreneur, Roopa T understands the untapped potential of women across society. Her vision extends beyond conventional employment and entrepreneurship to building an ecosystem where technology becomes an enabling force.", "For Roopa, women's empowerment is not simply about giving women opportunities — it is about creating an environment where their existing abilities and contributions are recognised, strengthened and connected to larger economic opportunities."],
						bulletsIntro: "She envisions technology helping women:",
						bullets: [
							"Participate in the mainstream digital economy",
							"Discover employment and entrepreneurship opportunities",
							"Promote products, services and businesses",
							"Develop and showcase their skills",
							"Build professional and social networks",
							"Access information, technology and digital services",
							"Become financially and digitally empowered",
							"Contribute more effectively to their families and communities"
						]
					},
					{
						title: "Championing Women's Safety Through Technology",
						paragraphs: ["A central part of Roopa T's vision is technology-enabled safety and security for women. She believes that true empowerment cannot exist without security.", "This philosophy has influenced her vision for intelligent digital security solutions — helping individuals identify risks, maintain awareness, document incidents, communicate when assistance is required and create a stronger layer of digital and personal security."]
					},
					{
						title: "From TEASER to InViGIL",
						paragraphs: ["Roopa T has been instrumental in the evolution of the organisation's technology vision, including the development and advancement of InViGIL — Intelligence beyond Vision.", "Her contribution has helped shape the philosophy that security technology should not be limited to institutions or privileged sections of society, but should become accessible and useful to ordinary people in their everyday lives."]
					},
					{
						title: "Her Contribution to ViERA",
						paragraphs: ["Roopa T is an important contributor to the development and evolution of ViERA — Virtual Intelligence Enabled Real Actor. ViERA is envisioned as a digital intelligence companion capable of learning from the user's requirements, knowledge and interactions.", "Her contribution reflects her belief that advanced technology should not remain confined to laboratories — it should become a practical tool that protects, guides, assists and empowers people, bridging human intelligence, digital intelligence and real-world action."]
					},
					{
						title: "Active Contribution to AP Media Foundation",
						paragraphs: ["Roopa T is actively involved in the activities and initiatives of the AP Media Foundation, contributing to its broader social, media, technology and public-oriented objectives.", "Her vision aligns with the belief that modern media should not merely report what happens — it should also empower people, create awareness and contribute to positive social transformation."]
					}
				],
				quote: "Every woman has the power to contribute. The right technology can give her the opportunity, confidence and security to bring that power into the mainstream.",
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "section-label",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2",
					children: [
						"Roopa T · Founder & Managing Director",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"FG Media and Safety Technologies Pvt. Ltd.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:roopa@fgco.in",
							className: "text-gold hover:underline",
							children: "roopa@fgco.in"
						})
					]
				})] }),
				image: Roopa_default,
				imageAlt: "Roopa T — Founder & Managing Director, FG Media and Safety Technologies Pvt. Ltd."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeaderProfile, {
				name: "Chandra Shekhar Pasupuleti",
				overline: "Leadership",
				role: "Director",
				organization: "FG Media and Safety Technologies Pvt. Ltd.",
				tags: "Senior Automobile Technical & Safety Expert · Automotive Innovation Specialist · Vehicle Safety & Customisation Expert",
				headline: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"A Quarter Century of",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block italic fg-text-gradient-gold",
						children: "Automobile Excellence"
					})
				] }),
				paragraphs: ["Chandra Shekhar Pasupuleti is a highly experienced Automobile Technical and Safety Expert with more than 25 years of practical and field experience in the automobile industry. His expertise has been developed not merely through academic knowledge, but through decades of direct involvement in automobile servicing, safety technology implementation, vehicle fabrication, remodeling, customisation, troubleshooting and advanced technical solutions.", "As a Director of FG Media and Safety Technologies Pvt. Ltd., he brings a rare combination of technical knowledge, practical engineering capability, creative problem-solving and hands-on automobile expertise. His strength lies in understanding a vehicle from the ground level — how its systems function, how they can be improved, how safety can be enhanced and how innovative solutions can be implemented in real-world conditions."],
				highlights: [
					{
						title: "Hands-On Expertise",
						text: "Built through thousands of practical observations, countless technical challenges and decades of working directly with vehicles and mechanical systems."
					},
					{
						title: "Safety First",
						text: "Focuses on making vehicles not only functional and efficient, but safer, more reliable and better suited to the needs of their users."
					},
					{
						title: "FitGaadi & Mobility",
						text: "Supports FG's automobile initiatives including FitGaadi, FitGarage and upcoming electric mobility programmes."
					}
				],
				sections: [
					{
						title: "A Quarter Century of Automobile Expertise",
						paragraphs: ["With over 25 years in the automobile sector, Chandra Shekhar has accumulated extensive experience across multiple dimensions of vehicle technology and maintenance.", "His experience enables him to identify problems that may not be immediately visible through conventional inspection and to develop practical, reliable and technically viable solutions."],
						bulletsIntro: "His professional expertise includes:",
						bullets: [
							"Advanced automobile service and maintenance",
							"Vehicle safety technology implementation",
							"Automobile fabrication and structural modifications",
							"Vehicle remodeling and customised engineering solutions",
							"Technical troubleshooting and problem diagnosis",
							"Safety-oriented vehicle modifications",
							"Creative automobile design and technical innovation",
							"Restoration, modification and functional enhancement",
							"Practical implementation of emerging automobile technologies",
							"Development of customised technical solutions for complex vehicle requirements"
						]
					},
					{
						title: "More Than an Engineer — A Hands-On Problem Solver",
						paragraphs: ["What distinguishes Chandra Shekhar is his deep practical understanding of automobiles. He is not limited to theoretical engineering principles or conventional service procedures.", "He combines the precision of an engineer with the practical intelligence of an experienced automobile specialist and the creativity of an innovator. His approach is simple: understand the problem, examine the vehicle, identify the root cause, develop the right solution and implement it safely and effectively."]
					},
					{
						title: "Specialist in Automobile Safety & Technology",
						paragraphs: ["At FG Media and Safety Technologies Pvt. Ltd., Chandra Shekhar contributes to the organisation's vision of taking automobile safety and service technology to a higher global standard.", "He is particularly passionate about the practical implementation of Automobile Safety Technologies, where technology, engineering and human safety come together to create better mobility solutions."]
					},
					{
						title: "Creative Technical Mindset",
						paragraphs: ["One of his strongest professional qualities is his ability to approach automobile challenges creatively. Every vehicle and every technical problem can present a different challenge.", "Rather than depending exclusively on conventional solutions, he evaluates situations from multiple technical perspectives and develops solutions based on functionality, safety, durability and practical usability — making him an important technical pillar of the organisation."]
					},
					{
						title: "Building the Future of Mobility",
						paragraphs: ["As the automobile industry moves rapidly toward electric mobility, intelligent vehicles, advanced safety systems and technology-driven transportation, Chandra Shekhar's extensive practical experience provides a strong foundation for FG's future automobile initiatives.", "His contribution supports the development and implementation of next-generation automobile safety, service, maintenance and mobility solutions across FitGaadi, FitGarage and upcoming electric mobility programmes."]
					},
					{
						title: "A Trusted Technical Authority",
						paragraphs: ["For Chandra Shekhar Pasupuleti, an automobile is not simply a machine — it is a responsibility involving safety, reliability, mobility and human life.", "His professional philosophy is built around technical integrity, practical excellence, safety-first thinking and dependable service. At FG Media and Safety Technologies Pvt. Ltd., he stands as a senior technical authority contributing to a safer, smarter and more reliable future for mobility."]
					}
				],
				image: Sekharphoto_default,
				imageAlt: "Chandra Shekhar Pasupuleti — Director, FG Media and Safety Technologies Pvt. Ltd.",
				imageClassName: "object-cover object-center"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection, {
				border: true,
				className: "bg-surface/30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "fg-vision-block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl md:text-3xl",
							children: "Our Vision"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-base leading-relaxed text-muted-foreground md:text-lg",
							children: "To create a globally recognized ecosystem of positivity, competitiveness, and excellence that inspires future generations. We are committed to identifying India's finest achievers, celebrating their accomplishments, and inspiring a new generation of visionary leaders who will represent India with distinction on the global stage."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "fg-mission-block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl md:text-3xl",
							children: "Our Mission"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-base leading-relaxed text-muted-foreground md:text-lg",
							children: "To provoke and encourage the best in society by recognizing extraordinary individuals who drive human progress across Science, Technology, Agriculture, Innovations, Arts, Sports, and Social Work."
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageSection, {
				border: true,
				className: "bg-surface/40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-center text-4xl md:text-5xl",
					children: ["What We ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic fg-text-gradient-gold",
						children: "Stand For"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-3",
					children: pillars.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "fg-card fg-card-interactive rounded-2xl p-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "fg-card-inner",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "fg-icon-badge h-12 w-12 rounded-xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: `h-5 w-5 ${p.color}` })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 text-2xl",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm leading-relaxed text-muted-foreground",
									children: p.text
								})
							]
						})
					}, p.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageSection, { children: [
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
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection, {
				className: "pb-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "fg-card rounded-3xl p-10 text-center md:p-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "fg-card-inner",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-4xl md:text-5xl",
							children: "Trusted Across India & the Globe"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground",
							children: "From English professionals to Telugu and Kannada communities — FG Media Group serves diverse audiences with honesty, depth, and cultural respect, while pioneering Virtual Commerce for 195+ countries through InViGIL and ViERA."
						})]
					})
				})
			})
		]
	});
}
//#endregion
export { About as component };
