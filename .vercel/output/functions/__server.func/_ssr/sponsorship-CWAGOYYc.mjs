import { i as __toESM } from "../_runtime.mjs";
import { I as sponsorshipTiers, L as siteButtonClass, T as mediaReachHighlights, k as paymentDetails } from "./router-CMFhHr5r.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { Q as CircleCheck, Y as CreditCard, Z as CircleX, d as Star, it as Building2, nt as Check, y as RefreshCw } from "../_libs/lucide-react.mjs";
import { a as HeroAccent } from "./PageLayout-pd1GZ2pX.mjs";
import { o as isApiConfigured, p as postSponsorshipRegister } from "./api-client-ZqIyvxbQ.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as BrandLogo } from "./BrandLogo-BRvmP1DV.mjs";
import { n as SectionHeader, t as PageHero } from "./SectionHeader-BX-fGw3X.mjs";
import { a as benefitsPanelClass, b as textareaClass, f as phoneField, h as requiredTextField, i as Toaster$1, l as labelClass, n as FormSectionHeader, o as emailField, r as FormSuccessState, s as fieldClass, t as FormPanel, u as nameField, v as selectedTierFieldClass, x as validateField, y as submitButtonClass } from "./form-validation-BNzlUher.mjs";
import { n as openSponsorshipRazorpayCheckout } from "./razorpay-checkout-CTUgdQVu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sponsorship-CWAGOYYc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SponsorshipTierCard({ tier, selected, onSelect }) {
	const featured = tier.featured;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => onSelect(tier.id),
		className: `group relative flex h-full w-full flex-col rounded-2xl border p-6 text-left transition-all md:p-7 ${featured ? "border-gold/50 bg-gradient-to-b from-gold/[0.12] to-gold/[0.03]" : "border-border bg-card hover:border-gold/25"} ${selected ? "ring-2 ring-gold/50" : ""}`,
		children: [
			featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-0.5 text-[0.6rem] font-semibold tracking-[0.12em] text-primary-foreground uppercase",
				children: "Title Sponsor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-label",
						children: tier.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 text-lg font-bold leading-snug md:text-xl",
						children: tier.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-3xl font-bold text-amber-400",
						children: tier.investment
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: [
							tier.spots,
							" ",
							tier.spots === 1 ? "Exclusive Spot" : "Spots"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 flex-1 space-y-2.5 border-t border-border/50 pt-6",
				children: tier.benefits.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-2 text-xs leading-relaxed text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-gold",
						strokeWidth: 2.5
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b })]
				}, b))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `mt-6 block w-full rounded-xl py-3 text-center text-xs font-semibold transition-colors ${selected ? "bg-gold text-primary-foreground" : featured ? "border border-gold/50 text-gold group-hover:bg-gold/10" : "border border-border text-muted-foreground group-hover:border-gold/30 group-hover:text-gold"}`,
				children: selected ? "Selected" : "Select Tier"
			})
		]
	});
}
var sponsorshipBenefits = [
	"Sponsorship Coverage on all branding",
	"Electronic Media Coverage",
	"1 Year unlimited free usage of InViGIL App",
	"1 Year complete Promotion & Advertising",
	"Assured business leads",
	"Free Unlimited Video Conferences"
];
var invigilPerks = [
	"One-Year InViGIL Premium Subscription",
	"Omni-channel Ads Manager access",
	"InViGIL Social Security Support",
	"Credibility Rating Improvement Support"
];
function Sponsorship() {
	const [selectedTier, setSelectedTier] = (0, import_react.useState)(null);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [checkoutLoading, setCheckoutLoading] = (0, import_react.useState)(false);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [confirmationEmail, setConfirmationEmail] = (0, import_react.useState)(null);
	const [registrationReady, setRegistrationReady] = (0, import_react.useState)(false);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [registration, setRegistration] = (0, import_react.useState)(null);
	const [reservationId, setReservationId] = (0, import_react.useState)(null);
	const [referenceId, setReferenceId] = (0, import_react.useState)(null);
	const [paymentStatus, setPaymentStatus] = (0, import_react.useState)("idle");
	const [paymentError, setPaymentError] = (0, import_react.useState)(null);
	const autoCheckoutAttempted = (0, import_react.useRef)(false);
	const tier = sponsorshipTiers.find((t) => t.id === selectedTier);
	const advanceInr = tier ? Math.round(tier.amountInr * (Number.parseFloat(paymentDetails.advancePercent) / 100)) : null;
	const gstInr = advanceInr != null ? Math.round(advanceInr * .18) : null;
	const totalInr = advanceInr != null && gstInr != null ? advanceInr + gstInr : null;
	async function startCheckout(input, sponsorshipReservationId) {
		setCheckoutLoading(true);
		setPaymentStatus("idle");
		setPaymentError(null);
		try {
			await openSponsorshipRazorpayCheckout(input, sponsorshipReservationId, () => {
				setPaymentStatus("idle");
				setPaymentError(null);
				setConfirmationEmail(input.contactEmail);
				setSubmitted(true);
				toast.success("Payment received — your sponsorship slot is reserved.");
			}, () => {
				setPaymentStatus("cancelled");
				setPaymentError("The payment window was closed before completion.");
			});
		} catch (error) {
			const message = error instanceof Error ? error.message : "Payment could not be completed.";
			if (message.includes("cancelled")) {
				setPaymentStatus("cancelled");
				setPaymentError("The payment window was closed before completion.");
			} else {
				setPaymentStatus("failed");
				setPaymentError(message);
				toast.error(message);
			}
		} finally {
			setCheckoutLoading(false);
			setSubmitting(false);
		}
	}
	async function onInquirySubmit(e) {
		e.preventDefault();
		if (!selectedTier) {
			toast.error("Please select a sponsorship tier first.");
			return;
		}
		const form = e.currentTarget;
		const company = form.elements.namedItem("company").value.trim();
		const contactName = form.elements.namedItem("contactName").value.trim();
		const contactPhone = form.elements.namedItem("contactPhone").value.trim();
		const contactEmail = form.elements.namedItem("contactEmail").value.trim();
		const nextErrors = {};
		const companyError = validateField(requiredTextField("Company name"), company);
		const nameError = validateField(nameField, contactName);
		const phoneError = validateField(phoneField, contactPhone);
		const emailError = validateField(emailField, contactEmail);
		if (companyError) nextErrors.company = companyError;
		if (nameError) nextErrors.contactName = nameError;
		if (phoneError) nextErrors.contactPhone = phoneError;
		if (emailError) nextErrors.contactEmail = emailError;
		if (Object.keys(nextErrors).length > 0) {
			setErrors(nextErrors);
			return;
		}
		setErrors({});
		setSubmitting(true);
		const checkoutInput = {
			tierId: selectedTier,
			company,
			contactName,
			contactEmail,
			contactPhone
		};
		try {
			if (!isApiConfigured()) throw new Error("API is not configured. Set VITE_API_BASE_URL.");
			if (!tier) throw new Error("Selected tier not found.");
			const registrationResult = await postSponsorshipRegister({
				tierId: selectedTier,
				tierName: tier.name,
				company,
				contactName,
				contactEmail,
				contactPhone
			});
			setReservationId(registrationResult.id);
			setReferenceId(registrationResult.referenceId);
			setRegistration(checkoutInput);
			setRegistrationReady(true);
			toast.success("Registration saved — opening secure payment.");
		} catch (error) {
			toast.error(error instanceof Error ? error.message : "Registration failed.");
		} finally {
			setSubmitting(false);
		}
	}
	(0, import_react.useEffect)(() => {
		if (!registrationReady || !registration || !reservationId || submitted || autoCheckoutAttempted.current) return;
		autoCheckoutAttempted.current = true;
		startCheckout(registration, reservationId);
	}, [
		registrationReady,
		registration,
		reservationId,
		submitted
	]);
	async function handlePaymentCardClick() {
		if (!registration || !reservationId) return;
		await startCheckout(registration, reservationId);
	}
	if (submitted) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormSuccessState, {
		title: "Sponsorship Payment Successful",
		message: "Thank you — your advance payment has been received and your sponsorship slot is confirmed. A sponsorship confirmation email with your committed package value and amount paid has been sent to you. Our corporate relations team will contact you shortly.",
		confirmationEmails: confirmationEmail ?? registration?.contactEmail
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			variant: "sponsorship",
			align: "center",
			overline: "Sponsorship Proposal",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Align with ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroAccent, { children: "Global Excellence" })] }),
			subtitle: "Partner with the HIT ViERA National Awards 2026 and the official global launch of InViGIL — India's most prestigious national recognition platform.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex flex-wrap items-center justify-center gap-6 md:gap-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
						id: "hitNews",
						size: "sm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
						id: "viera",
						size: "sm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
						id: "invigil",
						size: "sm"
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 py-20 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				overline: "Media Reach",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Owning the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "italic text-gold",
					children: "Narrative"
				})] }),
				description: "Your brand will dominate the national conversation through FG Media Group's colossal distribution network — 20 lakh+ households across print, podcast, cinematic teasers, and omni-channel digital."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2",
				children: mediaReachHighlights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-gray-800 bg-[#111a33] p-6 transition-colors hover:border-amber-500/25 md:p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-foreground",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-gray-400",
						children: item.text
					})]
				}, item.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface/40 py-20 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					overline: "Sponsorship Tiers",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Choose Your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-gold",
						children: "Partnership Level"
					})] }),
					description: "Select a tier below. Spots are limited and awarded first-come, first-served.",
					className: "mx-auto text-center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4",
					children: sponsorshipTiers.map((tierItem) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorshipTierCard, {
						tier: tierItem,
						selected: selectedTier === tierItem.id,
						onSelect: setSelectedTier
					}, tierItem.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 pb-28 pt-12 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/awards",
					className: "mb-8 flex items-center text-sm font-medium text-amber-500 hover:underline",
					children: "← Back to Awards"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold text-foreground md:text-4xl",
						children: "Corporate Sponsorship"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-400 md:text-lg",
						children: "Partner with the World's Real Super App \"InViGIL\" Launch and the prestigious HIT Awards. Unlock unparalleled visibility, media dominance, and exclusive InViGIL ecosystem benefits."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 lg:grid-cols-12 lg:gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "space-y-6 lg:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-gray-800 bg-[#111a33] p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "border-b border-gray-800 pb-3 text-lg font-bold text-foreground",
									children: "Your Selection"
								}), tier ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold tracking-widest text-amber-500 uppercase",
											children: tier.role
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-xl font-bold text-foreground",
											children: tier.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-3xl font-black text-amber-400",
											children: tier.investment
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-2 text-xs text-gray-500",
											children: [
												tier.spots,
												" ",
												tier.spots === 1 ? "Exclusive Spot" : "Spots Available"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-6 space-y-2.5 border-t border-gray-800 pt-5",
											children: tier.benefits.slice(0, 4).map((benefit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-start gap-2 text-xs leading-relaxed text-gray-400",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: benefit })]
											}, benefit))
										})
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-sm text-gray-500",
									children: "Select a sponsorship tier above to view benefits and complete registration."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: benefitsPanelClass,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
									className: "mb-3 flex items-center font-bold text-blue-400",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
										size: 16,
										className: "mr-2"
									}), " Sponsorship Benefits"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-2 text-xs text-gray-300",
									children: sponsorshipBenefits.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["• ", item] }, item))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-amber-500/20 bg-amber-500/5 p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
									className: "flex items-center font-bold text-amber-400",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
										size: 16,
										className: "mr-2"
									}), " Exclusive InViGIL Perks"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 space-y-2 text-xs text-gray-300",
									children: invigilPerks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["• ", item] }, item))
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-8 lg:col-span-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormPanel, {
							className: "!p-6 md:!p-10",
							children: registrationReady && registration && tier && advanceInr && totalInr ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormSectionHeader, {
										title: "Complete Payment",
										subtitle: "Your registration is saved. Pay the advance below to secure your sponsorship slot."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-semibold text-foreground",
												children: "Registration submitted"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 text-sm text-gray-400",
												children: [
													registration.company,
													" · ",
													registration.contactName,
													referenceId ? ` · Ref ${referenceId}` : ""
												]
											})] })]
										})
									}),
									paymentStatus === "failed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-xl border border-red-500/30 bg-red-500/10 p-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "mt-0.5 h-5 w-5 shrink-0 text-red-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0 flex-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-semibold text-foreground",
														children: "Payment failed"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-1 text-sm text-gray-400",
														children: paymentError ?? "Your card or payment method was declined. Please try again."
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														type: "button",
														onClick: handlePaymentCardClick,
														disabled: checkoutLoading,
														className: `mt-4 ${siteButtonClass("gold", "md")} disabled:cursor-not-allowed disabled:opacity-60`,
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-4 w-4" }), checkoutLoading ? "Opening Razorpay..." : "Retry payment"]
													})
												]
											})]
										})
									}),
									paymentStatus === "cancelled" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-xl border border-amber-500/30 bg-amber-500/10 p-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "mt-0.5 h-5 w-5 shrink-0 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0 flex-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-semibold text-foreground",
														children: "Payment not completed"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-1 text-sm text-gray-400",
														children: paymentError ?? "The Razorpay window was closed. Your registration is saved — complete payment to secure your slot."
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														type: "button",
														onClick: handlePaymentCardClick,
														disabled: checkoutLoading,
														className: `mt-4 ${siteButtonClass("gold", "md")} disabled:cursor-not-allowed disabled:opacity-60`,
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-4 w-4" }), checkoutLoading ? "Opening Razorpay..." : "Continue to payment"]
													})
												]
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl border border-amber-500/30 bg-gradient-to-br from-[#0f172a] to-[#111a33] p-6 md:p-8",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-semibold tracking-widest text-amber-500 uppercase",
												children: tier.role
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-2 text-2xl font-bold text-foreground",
												children: tier.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-4 text-4xl font-black text-amber-400",
												children: [
													"₹ ",
													totalInr.toLocaleString("en-IN"),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "ml-2 text-sm font-normal text-gray-500",
														children: "(incl. GST)"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-2 text-sm text-gray-400",
												children: [
													paymentDetails.advancePercent,
													" advance ₹ ",
													advanceInr.toLocaleString("en-IN"),
													" ",
													"+ ",
													paymentDetails.gstRate,
													" GST ₹ ",
													gstInr?.toLocaleString("en-IN")
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-sm text-gray-400",
												children: paymentStatus === "idle" ? "Razorpay checkout opens automatically. If the window closed, tap below to pay again." : "Use the button above or below to open Razorpay and complete your payment."
											}),
											false,
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: handlePaymentCardClick,
												disabled: checkoutLoading,
												className: `mt-6 w-full sm:w-auto ${siteButtonClass("gold", "md")} disabled:cursor-not-allowed disabled:opacity-60`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-5 w-5" }), checkoutLoading ? "Opening Razorpay..." : paymentStatus === "failed" ? "Retry payment" : paymentStatus === "cancelled" ? "Continue to payment" : "Pay via Razorpay"]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-gray-500",
										children: [
											"GST ",
											paymentDetails.gstRate,
											" (",
											paymentDetails.gst,
											") · Balance due within",
											" ",
											paymentDetails.balanceDueDays,
											" days of the event."
										]
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormSectionHeader, { title: "Registration Form" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: onInquirySubmit,
								className: "space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 gap-6 md:grid-cols-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: labelClass,
													htmlFor: "company",
													children: "Company Name *"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: "company",
													name: "company",
													required: true,
													placeholder: "FG Media Group Pvt Ltd",
													className: fieldClass
												}),
												errors.company && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-xs text-en",
													children: errors.company
												})
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: labelClass,
													htmlFor: "contactName",
													children: "Contact Person *"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: "contactName",
													name: "contactName",
													required: true,
													placeholder: "Full name",
													className: fieldClass
												}),
												errors.contactName && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-xs text-en",
													children: errors.contactName
												})
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: labelClass,
													htmlFor: "contactEmail",
													children: "Official Email *"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: "contactEmail",
													name: "contactEmail",
													type: "email",
													autoComplete: "email",
													placeholder: "name@company.com",
													required: true,
													className: fieldClass
												}),
												errors.contactEmail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-xs text-en",
													children: errors.contactEmail
												})
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: labelClass,
													htmlFor: "contactPhone",
													children: "Phone Number *"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: "contactPhone",
													name: "contactPhone",
													type: "tel",
													inputMode: "numeric",
													autoComplete: "tel",
													placeholder: "+91 00000 00000",
													maxLength: 15,
													required: true,
													className: fieldClass
												}),
												errors.contactPhone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-xs text-en",
													children: errors.contactPhone
												})
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "md:col-span-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: labelClass,
													htmlFor: "website",
													children: "Company Website"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: "website",
													name: "website",
													type: "url",
													placeholder: "https://www.example.com",
													className: fieldClass
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: labelClass,
										htmlFor: "selectedTier",
										children: "Selected Sponsorship Tier *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "selectedTier",
										readOnly: true,
										type: "text",
										value: tier?.name ?? "Please select a tier from the grid above...",
										className: selectedTierFieldClass(Boolean(tier))
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: labelClass,
										htmlFor: "message",
										children: "Corporate Profile / Message"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										id: "message",
										name: "message",
										rows: 4,
										className: textareaClass,
										placeholder: "Briefly describe your organisation, industry leadership, and sponsorship objectives..."
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										disabled: !selectedTier || submitting,
										className: submitButtonClass,
										children: submitting ? "Submitting..." : "Submit Registration"
									})
								]
							})] })
						})
					})]
				})
			]
		})
	] });
}
//#endregion
export { Sponsorship as component };
