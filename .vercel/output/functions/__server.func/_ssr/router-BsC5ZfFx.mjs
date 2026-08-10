import { i as __toESM, n as __exportAll$1 } from "../_runtime.mjs";
import { t as fgBrand } from "./brands-CmIuEZ88.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { R as redirect, _ as createRootRouteWithContext, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, x as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime, r as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { A as MapPin, E as Network, F as Linkedin, G as Globe, O as MessageCircle, Q as ExternalLink, R as Layers, S as Phone, V as House, X as Facebook, d as Store, g as ShieldCheck, gt as Award, j as Mail, k as Menu, n as Youtube, pt as Brain, r as X, z as Instagram } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-iT_J2QnG.js
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
//#endregion
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
//#region node_modules/.nitro/vite/services/ssr/assets/router-BsC5ZfFx.js
var router_BsC5ZfFx_exports = /* @__PURE__ */ __exportAll$1({
	A: () => isSelfNominationInput,
	B: () => JsonLd,
	C: () => INVIGIL_INTRO,
	D: () => influencerPerks,
	E: () => getNominationFeeBreakdown,
	F: () => paymentDetails,
	I: () => publicationOptions,
	L: () => selectionTimeline,
	M: () => nominationCategories,
	N: () => nominatorRelationshipOptions,
	O: () => invigilFeatures,
	P: () => nomineeTypes,
	R: () => signatureTiers,
	S: () => INFLUENCER_INTRO,
	T: () => excellenceAwards,
	_: () => awardsEventSchema,
	a: () => Route$6,
	b: () => AWARDS_TAGLINE,
	c: () => isAdminAuthenticated,
	d: () => setAdminToken,
	f: () => CERTIFICATION_TAGS,
	g: () => FgLogo,
	getRouter: () => getRouter,
	h: () => SiteLinkButton,
	i: () => Route$4,
	j: () => mediaReachHighlights,
	k: () => invigilPillars,
	l: () => logoutAdmin,
	m: () => SiteAnchorButton,
	n: () => Route,
	o: () => clearAdminLogoutMessage,
	p: () => GoogleMapEmbed,
	r: () => Route$2,
	s: () => getAdminLogoutMessage,
	t: () => router_exports,
	u: () => requireAdminToken,
	v: () => contactPageSchema,
	w: () => evaluationCriteria,
	x: () => EVENT_LOCATION,
	y: () => personSchema,
	z: () => sponsorshipTiers
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
var styles_default = "/assets/styles-DJn9TG5z.css";
function JsonLd({ data }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
		type: "application/ld+json",
		dangerouslySetInnerHTML: { __html: JSON.stringify(data) }
	});
}
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
	nominationSelfFeeInr: 2e4,
	nominationOtherFeeInr: 5e3,
	/** @deprecated Use nominationSelfFeeInr / nominationOtherFeeInr */
	nominationFeeInr: 2e4
};
function isSelfNominationInput(params) {
	if (params.relationship === "Self (Nominee)") return true;
	const nominator = params.nominatorEmail?.trim().toLowerCase();
	const nominee = params.nomineeEmail?.trim().toLowerCase();
	return Boolean(nominator && nominee && nominator === nominee);
}
function getNominationFeeBreakdown(isSelfNomination) {
	const baseInr = isSelfNomination ? paymentDetails.nominationSelfFeeInr : paymentDetails.nominationOtherFeeInr;
	const gstRate = Number.parseFloat(paymentDetails.gstRate) / 100;
	const gstInr = Math.round(baseInr * gstRate);
	return {
		baseInr,
		gstInr,
		totalInr: baseInr + gstInr,
		isSelfNomination,
		feeLabel: isSelfNomination ? "Self-nomination fee" : "Nomination fee (nominating another person)"
	};
}
var INVIGIL_INTRO = "InViGIL is the world's first and most advanced decentralized media, commerce, spatial journalism, and event management ecosystem. By replacing opaque, clickbait-driven legacy models with an architecture anchored to the ViERA Engine Core and an immutable PostgreSQL ledger, InViGIL shifts economic incentives strictly toward high-integrity content generation based on Truth, Telemetry, and Real-World Impact.";
var invigilPillars = [
	"Truth",
	"Telemetry",
	"Real-World Impact"
];
var INFLUENCER_INTRO = "The HIT ViERA National Jury will identify and recognise the Top 100 Influencers of India 2026 across business, entrepreneurship, technology, governance, education, healthcare, media, arts, sports, innovation and social leadership.";
var SITE_URL = FG_CONTACT.website.replace(/\/$/, "");
var SITE_NAME = "FG Media Group";
var DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
var THEME_COLOR = "#0f1f14";
function absoluteUrl(path) {
	if (path === "/") return SITE_URL;
	return `${SITE_URL}${path}`;
}
function buildPageHead({ path, title, description, ogTitle, ogDescription, noindex = false }) {
	const canonical = absoluteUrl(path);
	const resolvedOgTitle = ogTitle ?? title;
	const resolvedOgDescription = ogDescription ?? description;
	const meta = [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: resolvedOgTitle
		},
		{
			property: "og:description",
			content: resolvedOgDescription
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			property: "og:url",
			content: canonical
		},
		{
			property: "og:image",
			content: DEFAULT_OG_IMAGE
		},
		{
			property: "og:site_name",
			content: SITE_NAME
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:title",
			content: resolvedOgTitle
		},
		{
			name: "twitter:description",
			content: resolvedOgDescription
		},
		{
			name: "twitter:image",
			content: DEFAULT_OG_IMAGE
		}
	];
	if (noindex) meta.push({
		name: "robots",
		content: "noindex, nofollow"
	});
	return {
		meta,
		links: [{
			rel: "canonical",
			href: canonical
		}]
	};
}
function buildNoIndexHead(title) {
	return buildPageHead({
		path: "/admin",
		title,
		description: "",
		noindex: true
	});
}
var FAVICON_LINKS = [
	{
		rel: "icon",
		href: "/favicon.ico",
		sizes: "any"
	},
	{
		rel: "icon",
		href: "/favicon-32x32.png",
		type: "image/png",
		sizes: "32x32"
	},
	{
		rel: "icon",
		href: "/favicon-16x16.png",
		type: "image/png",
		sizes: "16x16"
	},
	{
		rel: "apple-touch-icon",
		href: "/apple-touch-icon.png",
		sizes: "180x180"
	}
];
var ROOT_META = [
	{ charSet: "utf-8" },
	{
		name: "viewport",
		content: "width=device-width, initial-scale=1"
	},
	{ title: `${SITE_NAME} — Media · Technology · India` },
	{
		name: "description",
		content: "FG Media Group: trusted multilingual journalism, InViGIL virtual commerce powered by ViERA, from Bengaluru, India."
	},
	{
		name: "author",
		content: SITE_NAME
	},
	{
		name: "theme-color",
		content: THEME_COLOR
	},
	{
		property: "og:type",
		content: "website"
	},
	{
		property: "og:site_name",
		content: SITE_NAME
	},
	{
		property: "og:image",
		content: DEFAULT_OG_IMAGE
	},
	{
		name: "twitter:card",
		content: "summary_large_image"
	},
	{
		name: "twitter:image",
		content: DEFAULT_OG_IMAGE
	}
];
function organizationSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "FG Media and Safety Technologies Pvt. Ltd.",
		alternateName: SITE_NAME,
		url: SITE_URL,
		logo: `${SITE_URL}/apple-touch-icon.png`,
		email: FG_CONTACT.email,
		telephone: FG_CONTACT.phone,
		address: {
			"@type": "PostalAddress",
			streetAddress: FG_OFFICE.line1,
			addressLocality: "Bengaluru",
			addressRegion: "Karnataka",
			postalCode: "560032",
			addressCountry: "IN"
		},
		sameAs: [FG_CONTACT.website]
	};
}
function websiteSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: SITE_NAME,
		url: SITE_URL,
		publisher: {
			"@type": "Organization",
			name: "FG Media and Safety Technologies Pvt. Ltd."
		}
	};
}
function personSchema(leader) {
	return {
		"@context": "https://schema.org",
		"@type": "Person",
		name: leader.name,
		jobTitle: leader.role,
		worksFor: {
			"@type": "Organization",
			name: leader.organization
		},
		description: leader.shortBio,
		url: `${SITE_URL}/${leader.slug}`,
		image: leader.image.startsWith("http") ? leader.image : `${SITE_URL}${leader.image.startsWith("/") ? leader.image : `/${leader.image}`}`
	};
}
function awardsEventSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "Event",
		name: "HIT ViERA National Awards 2026",
		description: AWARDS_TAGLINE,
		eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
		eventStatus: "https://schema.org/EventScheduled",
		location: {
			"@type": "Place",
			name: EVENT_LOCATION,
			address: {
				"@type": "PostalAddress",
				addressLocality: "Bengaluru",
				addressRegion: "Karnataka",
				addressCountry: "IN"
			}
		},
		organizer: {
			"@type": "Organization",
			name: "FG Media and Safety Technologies Pvt. Ltd.",
			url: SITE_URL
		},
		url: `${SITE_URL}/awards`
	};
}
function contactPageSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "ContactPage",
		name: "Contact FG Media Group",
		url: `${SITE_URL}/contact`,
		mainEntity: {
			"@type": "Organization",
			name: "FG Media and Safety Technologies Pvt. Ltd.",
			email: [FG_CONTACT.email, FG_CONTACT.awardsEmail],
			telephone: FG_CONTACT.phone,
			url: SITE_URL,
			address: {
				"@type": "PostalAddress",
				streetAddress: FG_OFFICE.line1,
				addressLocality: "Bengaluru",
				addressRegion: "Karnataka",
				postalCode: "560032",
				addressCountry: "IN"
			}
		}
	};
}
function globalStructuredData() {
	return [organizationSchema(), websiteSchema()];
}
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
		to: "/team",
		label: "Team"
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
var FOOTER_LINKS = {
	company: [
		{
			label: "Home",
			to: "/"
		},
		{
			label: "About Us",
			to: "/about"
		},
		{
			label: "Our Team",
			to: "/team"
		},
		{
			label: "Publications",
			to: "/publications"
		},
		{
			label: "Contact Us",
			to: "/contact"
		}
	],
	platforms: [
		{
			label: "InViGIL",
			to: "/technology"
		},
		{
			label: "ViERA",
			to: "/viera"
		},
		{
			label: "Media Wing",
			to: "/media"
		},
		{
			label: "Publications",
			to: "/publications"
		},
		{
			label: "Automobiles",
			to: "/automobiles"
		},
		{
			label: "Operations",
			to: "/operations"
		}
	],
	awards: [
		{
			label: "HIT ViERA Awards",
			to: "/awards"
		},
		{
			label: "Nominate",
			to: "/nominate"
		},
		{
			label: "Sponsorship",
			to: "/sponsorship"
		}
	],
	legal: [
		{
			label: "Terms & Conditions",
			to: "/terms"
		},
		{
			label: "Privacy Policy",
			to: "/privacy"
		},
		{
			label: "Refund Policy",
			to: "/refund-policy"
		},
		{
			label: "Cancellation Policy",
			to: "/cancellation-policy"
		}
	]
};
var FOOTER_SOCIALS = [
	{
		label: "Facebook",
		href: "https://facebook.com/invigilapp"
	},
	{
		label: "Instagram",
		href: "https://instagram.com/invigilapp"
	},
	{
		label: "Threads",
		href: "https://threads.com/InvigilApp"
	},
	{
		label: "X",
		href: "https://x.com/invigilapp"
	},
	{
		label: "YouTube",
		href: "https://youtube.com/invigilapp"
	},
	{
		label: "LinkedIn",
		href: "https://linkedin.com/invigil"
	}
];
var CERTIFICATION_TAGS = [
	"ISO/IEC 27001:2013",
	"Certificate of Registration",
	"Trademark Act, 1999",
	"Government of Karnataka",
	"Startup India",
	"MCA — Ministry of Corporate Affairs"
];
function FooterLinkColumn({ title, links }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "section-label font-sans",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-5 space-y-2.5 text-sm text-muted-foreground",
		children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: link.to,
			className: "transition-colors hover:text-gold",
			children: link.label
		}) }, link.to))
	})] });
}
function SocialIcon({ label }) {
	const className = "h-4 w-4";
	switch (label) {
		case "Facebook": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, {
			className,
			"aria-hidden": true
		});
		case "Instagram": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {
			className,
			"aria-hidden": true
		});
		case "YouTube": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, {
			className,
			"aria-hidden": true
		});
		case "LinkedIn": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, {
			className,
			"aria-hidden": true
		});
		case "X": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			className,
			viewBox: "0 0 24 24",
			fill: "currentColor",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" })
		});
		case "Threads": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			className,
			viewBox: "0 0 24 24",
			fill: "currentColor",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717-1.447 1.802-2.181 4.387-2.181 7.633v.016c0 3.235.735 5.818 2.181 7.615 1.43 1.783 3.63 2.698 6.54 2.717 2.623-.02 4.358-.631 5.74-1.85 1.414-1.245 2.071-2.975 2.07-5.278v-2.032c-.001-1.8-.373-2.798-1.022-3.35-.73-.62-1.816-.94-3.28-.94-1.13 0-2.1.21-2.88.62-.79.42-1.35 1.02-1.66 1.78h-.01v-2.1h-2.13v10.1h2.2v-1.55c.45.75 1.08 1.34 1.88 1.76.81.43 1.78.65 2.89.65 1.96 0 3.48-.56 4.52-1.67 1.13-1.21 1.7-3.01 1.7-5.35 0-2.01-.52-3.59-1.55-4.7-1.11-1.2-2.73-1.81-4.82-1.81-1.35 0-2.52.27-3.49.81-.75.44-1.35 1.05-1.78 1.82h-.02v-6.52h2.13v2.05h.02c.41-.78 1.01-1.39 1.79-1.82.98-.55 2.16-.82 3.52-.82 2.1 0 3.73.62 4.85 1.84 1.04 1.12 1.57 2.71 1.57 4.73 0 2.35-.58 4.17-1.73 5.4-1.05 1.12-2.59 1.73-4.58 1.73-1.47 0-2.7-.32-3.67-.95-.86-.56-1.48-1.35-1.84-2.35h-.01v6.35c0 2.56.72 4.55 2.14 5.93 1.5 1.45 3.7 2.2 6.55 2.22h.007c3.58-.024 6.33-1.205 8.18-3.51 1.64-2.05 2.49-4.9 2.52-8.48v-.016c-.03-3.58-.88-6.43-2.52-8.48-1.85-2.305-4.6-3.486-8.18-3.51z" })
		});
		default: return null;
	}
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1.4fr_repeat(4,minmax(0,1fr))]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FgLogo, {
							size: "md",
							showTagline: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground",
							children: "A premium global initiative empowering communities through quality journalism, groundbreaking Virtual Intelligence (InViGIL), and national recognition of excellence."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-label font-sans",
								children: "Follow InViGIL"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex flex-wrap gap-2",
								children: FOOTER_SOCIALS.map((social) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: social.href,
									target: "_blank",
									rel: "noreferrer noopener",
									"aria-label": social.label,
									className: "flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/60 text-muted-foreground transition-all duration-300 hover:border-viera/40 hover:bg-viera/10 hover:text-viera hover:shadow-[0_0_20px_-6px_rgba(59,130,246,0.5)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcon, { label: social.label })
								}, social.label))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-8 space-y-3 text-sm text-muted-foreground",
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
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLinkColumn, {
						title: "Company",
						links: FOOTER_LINKS.company
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLinkColumn, {
						title: "Platforms",
						links: FOOTER_LINKS.platforms
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLinkColumn, {
						title: "Awards & Events",
						links: FOOTER_LINKS.awards
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLinkColumn, {
						title: "Legal",
						links: FOOTER_LINKS.legal
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "section-label font-sans",
					children: "Find Us"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleMapEmbed, {
					className: "mt-5 max-w-xl",
					heightClass: "h-48",
					showHeader: false
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between",
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
	(0, import_react.useEffect)(() => {
		document.title = "Page not found — FG Media Group";
		const robots = document.createElement("meta");
		robots.name = "robots";
		robots.content = "noindex, nofollow";
		document.head.appendChild(robots);
		return () => {
			robots.remove();
		};
	}, []);
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
var Route$41 = createRootRouteWithContext()({
	head: () => ({
		meta: [...ROOT_META],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/site.webmanifest"
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
			...FAVICON_LINKS
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
	const { queryClient } = Route$41.useRouteContext();
	const isAdminRoute = useRouterState({ select: (s) => s.location.pathname }).startsWith("/admin");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			!isAdminRoute && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: globalStructuredData() }),
			!isAdminRoute && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: isAdminRoute ? "" : "pt-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			!isAdminRoute && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var SEO_PAGES = {
	home: {
		path: "/",
		title: "FG Media Group — Recognising Excellence. Celebrating Vision.",
		description: "Trusted multilingual journalism meets InViGIL and ViERA — pioneering media and technology from Bengaluru, India.",
		ogTitle: "FG Media Group — Media · Technology · India",
		ogDescription: "Empowering India through world-class Media, groundbreaking Virtual Intelligence (InViGIL), and National Recognition.",
		changefreq: "weekly",
		priority: 1
	},
	about: {
		path: "/about",
		title: "About FG Media — Our Story, Vision & Mission",
		description: "FG Media and Safety Technologies Pvt. Ltd. — an India-based technology and media enterprise building intelligent, secure and human-centred ecosystems.",
		ogTitle: "About FG Media",
		ogDescription: "FG Media and Safety Technologies Pvt. Ltd. — an India-based technology and media enterprise building intelligent, secure and human-centred ecosystems.",
		changefreq: "monthly",
		priority: .8
	},
	team: {
		path: "/team",
		title: "Our Team — FG Media Leadership",
		description: "Meet the leadership team of FG Media and Safety Technologies Pvt. Ltd. — technology visionaries, media leaders, and automotive safety experts.",
		ogTitle: "FG Media Team",
		ogDescription: "Meet the leadership team of FG Media — technology visionaries, media leaders, and automotive safety experts.",
		changefreq: "monthly",
		priority: .7
	},
	ceo: {
		path: "/ceo",
		title: "Ramesh Babu Pasupuleti — Founder & CEO, FG Media",
		description: "Ramesh Babu Pasupuleti — Global Technology Visionary, Founder & CEO of FG Media, pioneer of ViERA, InViGIL, and Virtual Intelligence Technology.",
		ogTitle: "Ramesh Babu Pasupuleti — CEO, FG Media",
		changefreq: "monthly",
		priority: .7
	},
	md: {
		path: "/md",
		title: "Roopa T — Founder & Managing Director, FG Media",
		description: "Roopa T — Founder & Managing Director of FG Media, women empowerment advocate, and digital safety innovator behind InViGIL and ViERA.",
		ogTitle: "Roopa T — MD, FG Media",
		changefreq: "monthly",
		priority: .7
	},
	director: {
		path: "/director",
		title: "Chandra Shekhar Pasupuleti — Director, FG Media",
		description: "Chandra Shekhar Pasupuleti — Director and Senior Automobile Technical & Safety Expert at FG Media with 25+ years of automotive expertise.",
		ogTitle: "Chandra Shekhar Pasupuleti — Director, FG Media",
		changefreq: "monthly",
		priority: .7
	},
	media: {
		path: "/media",
		title: "Media Wing — FG Media Publications | HIT News, Happy India Times, Kurukshetra",
		description: "FG Media Publications — HIT NEWS, Happy India Times, and Kurukshetra. 20 lakh+ weekly reach across English, Telugu, and Kannada.",
		ogTitle: "FG Media Publications — Media Wing",
		ogDescription: "HIT NEWS, Happy India Times, and Kurukshetra — 20 lakh+ weekly reach across English, Telugu, and Kannada.",
		changefreq: "monthly",
		priority: .8
	},
	publications: {
		path: "/publications",
		title: "Our Publications — HIT News, Happy India Times, Kurukshetra",
		description: "Three national news weeklies in English, Telugu and Kannada with a combined print run of 20 lakh+ copies across India.",
		ogTitle: "FG Media Group Publications",
		ogDescription: "HIT News, Happy India Times and Kurukshetra — 20 lakh+ copies across India.",
		changefreq: "monthly",
		priority: .6
	},
	technology: {
		path: "/technology",
		title: "InViGIL Application — World's First Virtual Commerce Platform | FG Media",
		description: INVIGIL_INTRO,
		ogTitle: "InViGIL Application — Intelligence Beyond Vision",
		ogDescription: INVIGIL_INTRO,
		changefreq: "monthly",
		priority: .8
	},
	viera: {
		path: "/viera",
		title: "ViERA — Virtual Intelligence Enabled Real Actor | FG Media",
		description: "ViERA creates your intelligent digital replica — personalized Virtual Intelligence that protects, empowers, and guides you across InViGIL and the digital world.",
		ogTitle: "ViERA — Virtual Intelligence Enabled Real Actor",
		changefreq: "monthly",
		priority: .8
	},
	automobiles: {
		path: "/automobiles",
		title: "Automobile Technologies — FitGaadi, FitGarage & FG EV | FG Media",
		description: "FG Media Automobile Division — FitGaadi safety & 365° vehicle care, FitGarage global service network, and FG Electric Mobility.",
		ogTitle: "FG Media Automobile Technologies",
		changefreq: "monthly",
		priority: .7
	},
	operations: {
		path: "/operations",
		title: "Specialized Operations — FG Media Group",
		description: "Automobiles, Supply Chain, Investigations, and hyper-secure E-commerce.",
		ogTitle: "FG Media Specialized Operations",
		changefreq: "monthly",
		priority: .6
	},
	awards: {
		path: "/awards",
		title: "HIT ViERA National Awards 2026 — FG Media Group",
		description: "HIT ViERA National Awards 2026 & InViGIL Global Launch Event in Bengaluru. Recognising excellence across India.",
		ogTitle: "HIT ViERA National Awards 2026",
		ogDescription: AWARDS_TAGLINE,
		changefreq: "weekly",
		priority: .9
	},
	sponsorship: {
		path: "/sponsorship",
		title: "Sponsorship Proposal — HIT ViERA Awards 2026",
		description: "Exclusive sponsorship invitation for HIT ViERA National Awards 2026 & InViGIL Global Launch Event.",
		ogTitle: "HIT ViERA Awards 2026 Sponsorship",
		ogDescription: "An exclusive invitation to align with global excellence.",
		changefreq: "monthly",
		priority: .7
	},
	nominate: {
		path: "/nominate",
		title: "Official Nomination Portal — HIT ViERA Awards 2026",
		description: "Submit your nomination for the HIT ViERA National Awards 2026. Official portal by FG Media Group.",
		ogTitle: "HIT Awards Nomination Portal",
		ogDescription: "HIT Awards & Special Edition — Official Nomination Portal by FG Media Group.",
		changefreq: "weekly",
		priority: .8
	},
	contact: {
		path: "/contact",
		title: "Contact FG Media Group — Advertising, Partnerships & Press",
		description: "Contact FG Media Group in Bengaluru — pro@fgco.in, hitawards@fgco.in, WhatsApp +91 73820 98888.",
		ogTitle: "Contact FG Media Group",
		ogDescription: "Email pro@fgco.in or WhatsApp +91 73820 98888 — Bengaluru, Karnataka.",
		changefreq: "monthly",
		priority: .7
	},
	terms: {
		path: "/terms",
		title: "Terms & Conditions — FG Media Group",
		description: "Terms governing use of FG Media websites, HIT ViERA Awards nominations, sponsorships, and related services.",
		ogTitle: "FG Media Terms & Conditions",
		changefreq: "yearly",
		priority: .4
	},
	privacy: {
		path: "/privacy",
		title: "Privacy Policy — FG Media Group",
		description: "How FG Media collects, uses, and protects personal data for nominations, sponsorships, events, and website services.",
		ogTitle: "FG Media Privacy Policy",
		changefreq: "yearly",
		priority: .4
	},
	refundPolicy: {
		path: "/refund-policy",
		title: "Refund Policy — FG Media Group",
		description: "Refund conditions for HIT ViERA Awards nomination fees, sponsorship payments, and related FG Media services.",
		ogTitle: "FG Media Refund Policy",
		changefreq: "yearly",
		priority: .4
	},
	cancellationPolicy: {
		path: "/cancellation-policy",
		title: "Cancellation Policy — FG Media Group",
		description: "Cancellation rules for nominations, sponsorships, and HIT ViERA Awards event participation.",
		ogTitle: "FG Media Cancellation Policy",
		changefreq: "yearly",
		priority: .4
	}
};
Object.values(SEO_PAGES);
var $$splitComponentImporter$36 = () => import("./routes-BNNB2UE-.mjs");
var Route$40 = createFileRoute("/")({
	head: () => buildPageHead(SEO_PAGES.home),
	component: lazyRouteComponent($$splitComponentImporter$36, "component")
});
var $$splitComponentImporter$35 = () => import("./about-NzYgDezz.mjs");
var Route$39 = createFileRoute("/about")({
	head: () => buildPageHead(SEO_PAGES.about),
	component: lazyRouteComponent($$splitComponentImporter$35, "component")
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
var $$splitComponentImporter$34 = () => import("./admin-DrxFBbRe.mjs");
var Route$38 = createFileRoute("/admin")({
	head: () => buildNoIndexHead("Admin — FG Media Group"),
	beforeLoad: ({ location }) => {
		if (location.pathname === "/admin/login") return;
		if (typeof window !== "undefined" && !isAdminAuthenticated()) throw redirect({ to: "/admin/login" });
	},
	component: lazyRouteComponent($$splitComponentImporter$34, "component")
});
var Route$37 = createFileRoute("/ap-media")({ beforeLoad: () => {
	throw redirect({ to: "/technology" });
} });
var $$splitComponentImporter$33 = () => import("./automobiles-BzMdp1nC.mjs");
var Route$36 = createFileRoute("/automobiles")({
	head: () => buildPageHead(SEO_PAGES.automobiles),
	component: lazyRouteComponent($$splitComponentImporter$33, "component")
});
var $$splitComponentImporter$32 = () => import("./awards-DibVxvJ-.mjs");
var Route$35 = createFileRoute("/awards")({
	head: () => buildPageHead(SEO_PAGES.awards),
	component: lazyRouteComponent($$splitComponentImporter$32, "component")
});
var $$splitComponentImporter$31 = () => import("./cancellation-policy-tKz5SWjF.mjs");
var Route$34 = createFileRoute("/cancellation-policy")({
	head: () => buildPageHead(SEO_PAGES.cancellationPolicy),
	component: lazyRouteComponent($$splitComponentImporter$31, "component")
});
var $$splitComponentImporter$30 = () => import("./ceo-yFLhiK_5.mjs");
var Route$33 = createFileRoute("/ceo")({
	head: () => buildPageHead(SEO_PAGES.ceo),
	component: lazyRouteComponent($$splitComponentImporter$30, "component")
});
var Route$32 = createFileRoute("/chandrashekhar")({ beforeLoad: () => {
	throw redirect({ to: "/director" });
} });
var $$splitComponentImporter$29 = () => import("./contact-DUXT76mS.mjs");
var Route$31 = createFileRoute("/contact")({
	head: () => buildPageHead(SEO_PAGES.contact),
	component: lazyRouteComponent($$splitComponentImporter$29, "component")
});
var $$splitComponentImporter$28 = () => import("./director-ChJVIp3o.mjs");
var Route$30 = createFileRoute("/director")({
	head: () => buildPageHead(SEO_PAGES.director),
	component: lazyRouteComponent($$splitComponentImporter$28, "component")
});
var $$splitComponentImporter$27 = () => import("./md-CEgF6b11.mjs");
var Route$29 = createFileRoute("/md")({
	head: () => buildPageHead(SEO_PAGES.md),
	component: lazyRouteComponent($$splitComponentImporter$27, "component")
});
var $$splitComponentImporter$26 = () => import("./media-C2U83kmR.mjs");
var Route$28 = createFileRoute("/media")({
	head: () => buildPageHead(SEO_PAGES.media),
	component: lazyRouteComponent($$splitComponentImporter$26, "component")
});
var $$splitComponentImporter$25 = () => import("./nominate-YjpwfEPh.mjs");
var Route$27 = createFileRoute("/nominate")({ component: lazyRouteComponent($$splitComponentImporter$25, "component") });
var $$splitComponentImporter$24 = () => import("./operations-BLE6L5Jz.mjs");
var Route$26 = createFileRoute("/operations")({
	head: () => buildPageHead(SEO_PAGES.operations),
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var $$splitComponentImporter$23 = () => import("./privacy-p4O6AjiM.mjs");
var Route$25 = createFileRoute("/privacy")({
	head: () => buildPageHead(SEO_PAGES.privacy),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("./publications-B8T8fhqA.mjs");
var Route$24 = createFileRoute("/publications")({
	head: () => buildPageHead(SEO_PAGES.publications),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var Route$23 = createFileRoute("/rameshbabupasupuleti")({ beforeLoad: () => {
	throw redirect({ to: "/ceo" });
} });
var $$splitComponentImporter$21 = () => import("./refund-policy-BbXcG4K2.mjs");
var Route$22 = createFileRoute("/refund-policy")({
	head: () => buildPageHead(SEO_PAGES.refundPolicy),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var $$splitComponentImporter$20 = () => import("./sponsorship-N8ZXL0TN.mjs");
var Route$21 = createFileRoute("/sponsorship")({
	head: () => buildPageHead(SEO_PAGES.sponsorship),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./team-BaXJSxqL.mjs");
var Route$20 = createFileRoute("/team")({
	head: () => buildPageHead(SEO_PAGES.team),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var Route$19 = createFileRoute("/teaser")({ beforeLoad: () => {
	throw redirect({ to: "/viera" });
} });
var $$splitComponentImporter$18 = () => import("./technology-BFf9VT9e.mjs");
var Route$18 = createFileRoute("/technology")({
	head: () => buildPageHead(SEO_PAGES.technology),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./terms-4cECfZHM.mjs");
var Route$17 = createFileRoute("/terms")({
	head: () => buildPageHead(SEO_PAGES.terms),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./viera-EgZvTUdZ.mjs");
var Route$16 = createFileRoute("/viera")({
	head: () => buildPageHead(SEO_PAGES.viera),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./admin.index-DE3m4-IL.mjs");
var Route$15 = createFileRoute("/admin/")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("./admin.inquiries-0A3wjpIh.mjs");
var Route$14 = createFileRoute("/admin/inquiries")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./admin.login-DrYxAEpH.mjs");
var Route$13 = createFileRoute("/admin/login")({
	head: () => buildNoIndexHead("Admin Login — FG Media Group"),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./admin.nominations-D1xssYkM.mjs");
var Route$12 = createFileRoute("/admin/nominations")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./admin.payments-J2xS1RcK.mjs");
var Route$11 = createFileRoute("/admin/payments")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./admin.settings-DkrpUy5e.mjs");
var Route$10 = createFileRoute("/admin/settings")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./admin.sponsorships-ly9Uv3Q0.mjs");
var Route$9 = createFileRoute("/admin/sponsorships")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./nominate.index-PcQcleGJ.mjs");
var Route$8 = createFileRoute("/nominate/")({
	head: () => buildPageHead(SEO_PAGES.nominate),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./admin.inquiries.index-BYTW2WPC.mjs");
var Route$7 = createFileRoute("/admin/inquiries/")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./admin.inquiries._id-VEMvj1Mo.mjs");
var Route$6 = createFileRoute("/admin/inquiries/$id")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./admin.nominations.index-jJH8h9UU.mjs");
var Route$5 = createFileRoute("/admin/nominations/")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./admin.nominations._id-CBZWpiXp.mjs");
var Route$4 = createFileRoute("/admin/nominations/$id")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./admin.payments.index-4XT7iC4Q.mjs");
var Route$3 = createFileRoute("/admin/payments/")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./admin.payments._id-qoxnIPO4.mjs");
var Route$2 = createFileRoute("/admin/payments/$id")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./admin.sponsorships.index-Cdum4l7E.mjs");
var Route$1 = createFileRoute("/admin/sponsorships/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./admin.sponsorships._id-9sZQAryL.mjs");
var Route = createFileRoute("/admin/sponsorships/$id")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$40.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$41
});
var AboutRoute = Route$39.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$41
});
var AdminRoute = Route$38.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$41
});
var ApMediaRoute = Route$37.update({
	id: "/ap-media",
	path: "/ap-media",
	getParentRoute: () => Route$41
});
var AutomobilesRoute = Route$36.update({
	id: "/automobiles",
	path: "/automobiles",
	getParentRoute: () => Route$41
});
var AwardsRoute = Route$35.update({
	id: "/awards",
	path: "/awards",
	getParentRoute: () => Route$41
});
var CancellationPolicyRoute = Route$34.update({
	id: "/cancellation-policy",
	path: "/cancellation-policy",
	getParentRoute: () => Route$41
});
var CeoRoute = Route$33.update({
	id: "/ceo",
	path: "/ceo",
	getParentRoute: () => Route$41
});
var ChandrashekharRoute = Route$32.update({
	id: "/chandrashekhar",
	path: "/chandrashekhar",
	getParentRoute: () => Route$41
});
var ContactRoute = Route$31.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$41
});
var DirectorRoute = Route$30.update({
	id: "/director",
	path: "/director",
	getParentRoute: () => Route$41
});
var MdRoute = Route$29.update({
	id: "/md",
	path: "/md",
	getParentRoute: () => Route$41
});
var MediaRoute = Route$28.update({
	id: "/media",
	path: "/media",
	getParentRoute: () => Route$41
});
var NominateRoute = Route$27.update({
	id: "/nominate",
	path: "/nominate",
	getParentRoute: () => Route$41
});
var OperationsRoute = Route$26.update({
	id: "/operations",
	path: "/operations",
	getParentRoute: () => Route$41
});
var PrivacyRoute = Route$25.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$41
});
var PublicationsRoute = Route$24.update({
	id: "/publications",
	path: "/publications",
	getParentRoute: () => Route$41
});
var RameshbabupasupuletiRoute = Route$23.update({
	id: "/rameshbabupasupuleti",
	path: "/rameshbabupasupuleti",
	getParentRoute: () => Route$41
});
var RefundPolicyRoute = Route$22.update({
	id: "/refund-policy",
	path: "/refund-policy",
	getParentRoute: () => Route$41
});
var SponsorshipRoute = Route$21.update({
	id: "/sponsorship",
	path: "/sponsorship",
	getParentRoute: () => Route$41
});
var TeamRoute = Route$20.update({
	id: "/team",
	path: "/team",
	getParentRoute: () => Route$41
});
var TeaserRoute = Route$19.update({
	id: "/teaser",
	path: "/teaser",
	getParentRoute: () => Route$41
});
var TechnologyRoute = Route$18.update({
	id: "/technology",
	path: "/technology",
	getParentRoute: () => Route$41
});
var TermsRoute = Route$17.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$41
});
var VieraRoute = Route$16.update({
	id: "/viera",
	path: "/viera",
	getParentRoute: () => Route$41
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
	CancellationPolicyRoute,
	CeoRoute,
	ChandrashekharRoute,
	ContactRoute,
	DirectorRoute,
	MdRoute,
	MediaRoute,
	NominateRoute: NominateRoute._addFileChildren(NominateRouteChildren),
	OperationsRoute,
	PrivacyRoute,
	PublicationsRoute,
	RameshbabupasupuletiRoute,
	RefundPolicyRoute,
	SponsorshipRoute,
	TeamRoute,
	TeaserRoute,
	TechnologyRoute,
	TermsRoute,
	VieraRoute
};
var routeTree = Route$41._addFileChildren(rootRouteChildren)._addFileTypes();
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
export { nominatorRelationshipOptions as A, sponsorshipTiers as B, invigilFeatures as C, logoutAdmin as D, isSelfNominationInput as E, requireAdminToken as F, inquiryTypes as G, cn as H, router_BsC5ZfFx_exports as I, selectionTimeline as L, paymentDetails as M, personSchema as N, mediaReachHighlights as O, publicationOptions as P, setAdminToken as R, influencerPerks as S, isAdminAuthenticated as T, FG_CONTACT as U, siteButtonClass as V, FG_OFFICE as W, contactPageSchema as _, GoogleMapEmbed as a, getAdminLogoutMessage as b, JsonLd as c, Route$4 as d, Route$6 as f, clearAdminLogoutMessage as g, awardsEventSchema as h, FgLogo as i, nomineeTypes as j, nominationCategories as k, Route as l, SiteLinkButton as m, CERTIFICATION_TAGS as n, INFLUENCER_INTRO as o, SiteAnchorButton as p, EVENT_LOCATION as r, INVIGIL_INTRO as s, AWARDS_TAGLINE as t, Route$2 as u, evaluationCriteria as v, invigilPillars as w, getNominationFeeBreakdown as x, excellenceAwards as y, signatureTiers as z };
