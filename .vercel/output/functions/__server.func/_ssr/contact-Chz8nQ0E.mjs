import { i as __toESM } from "../_runtime.mjs";
import { a as GoogleMapEmbed, b as inquiryTypes, i as FgLogo, r as FG_CONTACT } from "./router-CMFhHr5r.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { B as Globe, E as MessageCircle, b as Phone, g as Send, k as Mail } from "../_libs/lucide-react.mjs";
import { a as HeroAccent, p as SitePageHero } from "./PageLayout-pd1GZ2pX.mjs";
import { c as postContact, o as isApiConfigured } from "./api-client-ZqIyvxbQ.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { _ as selectClass, b as textareaClass, h as requiredTextField, i as Toaster$1, l as labelClass, o as emailField, s as fieldClass, t as FormPanel, u as nameField, x as validateField, y as submitButtonClass } from "./form-validation-BNzlUher.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Chz8nQ0E.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var details = [
	{
		icon: Globe,
		label: "Website",
		value: FG_CONTACT.websiteLabel,
		href: FG_CONTACT.website
	},
	{
		icon: Mail,
		label: "Email",
		value: FG_CONTACT.email,
		href: `mailto:${FG_CONTACT.email}`
	},
	{
		icon: Mail,
		label: "HIT ViERA Awards Contact",
		value: FG_CONTACT.awardsEmail,
		href: `mailto:${FG_CONTACT.awardsEmail}`
	},
	{
		icon: Phone,
		label: "Mobile",
		value: FG_CONTACT.phone,
		href: `tel:${FG_CONTACT.phone.replace(/\s/g, "")}`
	},
	{
		icon: MessageCircle,
		label: "WhatsApp",
		value: FG_CONTACT.whatsappDisplay,
		href: FG_CONTACT.whatsappLink
	}
];
function Contact() {
	const [sending, setSending] = (0, import_react.useState)(false);
	const [errors, setErrors] = (0, import_react.useState)({});
	function onSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const name = form.elements.namedItem("name").value;
		const email = form.elements.namedItem("email").value;
		const message = form.elements.namedItem("message").value;
		const nextErrors = {};
		const nameError = validateField(nameField, name);
		const emailError = validateField(emailField, email);
		const messageError = validateField(requiredTextField("Message"), message);
		if (nameError) nextErrors.name = nameError;
		if (emailError) nextErrors.email = emailError;
		if (messageError) nextErrors.message = messageError;
		if (Object.keys(nextErrors).length > 0) {
			setErrors(nextErrors);
			return;
		}
		setErrors({});
		setSending(true);
		const company = form.elements.namedItem("company").value.trim();
		const inquiryType = form.elements.namedItem("type").value.trim();
		if (!isApiConfigured()) {
			setSending(false);
			toast.error("Contact API is not configured. Set VITE_API_BASE_URL.");
			return;
		}
		postContact({
			name,
			email,
			company: company || void 0,
			inquiryType: inquiryType || void 0,
			message
		}).then(() => {
			toast.success("Message sent — we'll get back to you shortly.");
			form.reset();
		}).catch((err) => {
			toast.error(err.message || "Failed to send message. Please try again.");
		}).finally(() => {
			setSending(false);
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SitePageHero, {
			overline: "Get In Touch",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Contact ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroAccent, { children: "Us" })] }),
			subtitle: "InViGIL, ViERA, Media Wing, Automobiles, AP MEDIA Foundation, Videos, and HIT ViERA Awards — reach the right team in Bengaluru.",
			size: "compact"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-7xl gap-12 px-6 pb-28 lg:grid-cols-[1fr_1.15fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl",
						children: "Let's Connect"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm leading-relaxed text-muted-foreground",
						children: "Reach us for InViGIL, ViERA, publications, automobile wing, foundation initiatives, video content, awards, and partnerships."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-4",
						children: details.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "fg-card rounded-xl p-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "fg-card-inner flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "fg-icon-badge h-10 w-10 shrink-0 rounded-lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d.icon, { className: "h-4 w-4 text-gold" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-muted-foreground",
									children: d.label
								}), d.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: d.href,
									target: d.href.startsWith("http") ? "_blank" : void 0,
									rel: d.href.startsWith("http") ? "noreferrer" : void 0,
									className: "mt-1 block text-sm text-foreground transition-colors hover:text-gold",
									children: d.value
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-foreground",
									children: d.value
								})] })]
							})
						}, d.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "fg-card rounded-xl border-gold/20 p-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "fg-card-inner",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FgLogo, {
								size: "sm",
								showTagline: true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs text-muted-foreground",
								children: "InViGIL · ViERA · Media Wing · Automobiles · AP MEDIA Foundation · Videos"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleMapEmbed, {})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormPanel, {
				className: "!p-8 md:!p-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl md:text-3xl",
					children: "Send a Message"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "mt-8 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: labelClass,
										htmlFor: "name",
										children: "Full Name *"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "name",
										name: "name",
										required: true,
										placeholder: "John Smith",
										className: fieldClass
									}),
									errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-en",
										children: errors.name
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: labelClass,
										htmlFor: "email",
										children: "Email Address *"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "email",
										name: "email",
										type: "email",
										autoComplete: "email",
										required: true,
										placeholder: "name@example.com",
										className: fieldClass
									}),
									errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-en",
										children: errors.email
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: labelClass,
									htmlFor: "company",
									children: "Company / Organisation"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "company",
									name: "company",
									placeholder: "Your Organisation",
									className: fieldClass
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: labelClass,
									htmlFor: "type",
									children: "Inquiry Type"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									id: "type",
									name: "type",
									className: selectClass,
									defaultValue: "",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										disabled: true,
										children: "Select type..."
									}), inquiryTypes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: t,
										children: t
									}, t))]
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: labelClass,
								htmlFor: "message",
								children: "Message *"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "message",
								name: "message",
								required: true,
								rows: 6,
								placeholder: "Tell us how we can help...",
								className: textareaClass
							}),
							errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-en",
								children: errors.message
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: sending,
							className: submitButtonClass,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center justify-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), sending ? "Sending..." : "Send Message"]
							})
						})
					]
				})]
			})]
		})
	] });
}
//#endregion
export { Contact as component };
