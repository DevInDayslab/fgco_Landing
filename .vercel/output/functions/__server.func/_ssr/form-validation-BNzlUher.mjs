import { L as siteButtonClass } from "./router-DmhiZPli.mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { a as stringType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/form-validation-BNzlUher.js
var import_jsx_runtime = require_jsx_runtime();
/** Reference-aligned form field styles (#111a33 inputs, amber focus) */
var fieldClass = "w-full rounded-lg border border-gray-700 bg-[#111a33] px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-gray-500 focus:border-amber-500 focus:outline-none md:text-base";
var selectClass = `${fieldClass} appearance-none`;
var textareaClass = `${fieldClass} resize-none leading-relaxed`;
var labelClass = "mb-2 block text-sm font-medium text-gray-400";
var formPanelClass = "rounded-3xl border border-gray-800 bg-[#0f172a] p-6 shadow-2xl md:p-8 lg:p-12";
var benefitsPanelClass = "rounded-xl border border-blue-800/50 bg-blue-900/20 p-6";
var fileDropzoneClass = "rounded-xl border border-dashed border-gray-600 bg-[#111a33]/50 p-6 text-center transition-colors hover:border-amber-500";
var submitButtonClass = `${siteButtonClass("gold", "full")} rounded-xl py-4 text-base md:text-lg font-bold`;
var secondaryButtonClass = `${siteButtonClass("outline", "md")} rounded-xl border-gray-700 bg-[#0f172a]/80 hover:border-amber-500/50 hover:bg-amber-500/5`;
var primaryInlineButtonClass = `${siteButtonClass("gold", "md")} rounded-xl font-bold`;
function radioCardClass(selected) {
	return `flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 transition-colors md:px-4 md:py-3 ${selected ? "border-amber-500 bg-[#111a33] text-foreground" : "border-gray-700 bg-[#111a33] text-gray-300 hover:border-amber-500"}`;
}
function selectedTierFieldClass(hasTier) {
	return `w-full rounded-lg border px-4 py-3 text-white outline-none transition-colors focus:outline-none ${hasTier ? "border-amber-500 bg-amber-900/20 font-bold text-amber-400" : "border-gray-700 bg-[#111a33] text-sm text-gray-500"}`;
}
function FormSectionHeader({ step, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
		className: "mb-6 flex items-center border-b border-gray-800 pb-2 text-lg font-bold text-foreground md:text-xl",
		children: [step != null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-black",
			children: step
		}), title]
	});
}
function FormSuccessState({ title, message, confirmationEmails, emailNotices, referenceId }) {
	const notices = emailNotices?.filter((notice) => notice.email.trim()) ?? (confirmationEmails ? (Array.isArray(confirmationEmails) ? confirmationEmails : [confirmationEmails]).filter(Boolean).map((email) => ({
		label: "Confirmation email",
		email
	})) : []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center px-4 py-20 text-center animate-fade-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-500/20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "h-12 w-12 text-green-500",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor",
					strokeWidth: 2,
					"aria-hidden": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						d: "M5 13l4 4L19 7"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-4 text-2xl font-bold text-foreground md:text-3xl",
				children: title
			}),
			referenceId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-3 text-sm font-medium text-gold",
				children: ["Reference: ", referenceId]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm text-gray-400",
				children: message
			}),
			notices.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 max-w-lg rounded-xl border border-gold/25 bg-gold/[0.06] px-5 py-4 text-left text-sm text-gray-300",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center font-medium text-foreground",
						children: "Email confirmations"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-3",
						children: notices.map((notice) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "leading-relaxed text-gray-400",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-foreground",
								children: notice.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-gold",
								children: notice.email
							})]
						}, `${notice.label}-${notice.email}`))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-center text-xs text-gray-500",
						children: "Please check inbox and spam folder for each address listed above."
					})
				]
			}) : null
		]
	});
}
function FormPanel({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `${formPanelClass} ${className}`,
		children
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
/** Strip formatting and optional +91 / leading 0 for Indian mobiles. */
function normalizePhoneDigits(value) {
	let digits = value.replace(/\D/g, "");
	if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2);
	if (digits.length === 11 && digits.startsWith("0")) digits = digits.slice(1);
	return digits;
}
function isValidIndianPhone(value) {
	return /^\d{10}$/.test(normalizePhoneDigits(value));
}
var phoneField = stringType().trim().min(1, "Phone number is required").refine(isValidIndianPhone, "Enter a valid 10-digit mobile number");
var emailField = stringType().trim().min(1, "Email address is required").email("Enter a valid email address");
var nameField = stringType().trim().min(1, "Full name is required").min(2, "Name must be at least 2 characters").max(100, "Name is too long");
function requiredTextField(label) {
	return stringType().trim().min(1, `${label} is required`);
}
var optionalUrlField = stringType().optional().refine((value) => {
	if (!value?.trim()) return true;
	try {
		new URL(value.trim());
		return true;
	} catch {
		return false;
	}
}, "Enter a valid URL (e.g. https://...)");
function fieldError(result) {
	if (result.success) return void 0;
	return result.error.errors[0]?.message;
}
function validateField(schema, value) {
	return fieldError(schema.safeParse(value));
}
//#endregion
export { selectClass as _, benefitsPanelClass as a, textareaClass as b, fileDropzoneClass as c, optionalUrlField as d, phoneField as f, secondaryButtonClass as g, requiredTextField as h, Toaster$1 as i, labelClass as l, radioCardClass as m, FormSectionHeader as n, emailField as o, primaryInlineButtonClass as p, FormSuccessState as r, fieldClass as s, FormPanel as t, nameField as u, selectedTierFieldClass as v, validateField as x, submitButtonClass as y };
