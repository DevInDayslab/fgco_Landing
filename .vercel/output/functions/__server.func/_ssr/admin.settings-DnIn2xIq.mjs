import { i as __toESM } from "../_runtime.mjs";
import { w as logoutAdmin } from "./router-By49rm8R.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHeader } from "./PageHeader-B95mVO_B.mjs";
import { t as adminFetch } from "./api-client-DjDX7UFL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.settings-DnIn2xIq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminSettings() {
	const [currentPassword, setCurrentPassword] = (0, import_react.useState)("");
	const [newPassword, setNewPassword] = (0, import_react.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	async function onSubmit(e) {
		e.preventDefault();
		setError("");
		if (newPassword.length < 8) {
			setError("New password must be at least 8 characters.");
			return;
		}
		if (newPassword !== confirmPassword) {
			setError("New password and confirmation do not match.");
			return;
		}
		setSubmitting(true);
		try {
			await adminFetch("/api/admin/change-password", {
				method: "POST",
				body: JSON.stringify({
					currentPassword,
					newPassword
				})
			});
			logoutAdmin("Password updated. Please sign in with your new password.");
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to change password");
			setSubmitting(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Settings",
		subtitle: "Update your admin password. Changing it signs out all active sessions."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "max-w-md space-y-5 rounded-xl border border-zinc-200/80 bg-white p-6 shadow-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-base font-semibold text-zinc-900",
				children: "Change password"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-zinc-500",
				children: "After a successful change you will be redirected to sign in again."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: "currentPassword",
				className: "mb-2 block text-[10px] font-semibold uppercase tracking-wider text-zinc-400",
				children: "Current password"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "currentPassword",
				type: "password",
				value: currentPassword,
				onChange: (e) => setCurrentPassword(e.target.value),
				autoComplete: "current-password",
				required: true,
				className: "w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: "newPassword",
				className: "mb-2 block text-[10px] font-semibold uppercase tracking-wider text-zinc-400",
				children: "New password"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "newPassword",
				type: "password",
				value: newPassword,
				onChange: (e) => setNewPassword(e.target.value),
				autoComplete: "new-password",
				minLength: 8,
				required: true,
				className: "w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: "confirmPassword",
				className: "mb-2 block text-[10px] font-semibold uppercase tracking-wider text-zinc-400",
				children: "Confirm new password"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "confirmPassword",
				type: "password",
				value: confirmPassword,
				onChange: (e) => setConfirmPassword(e.target.value),
				autoComplete: "new-password",
				minLength: 8,
				required: true,
				className: "w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
			})] }),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: submitting,
				className: "rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 disabled:opacity-60",
				children: submitting ? "Updating…" : "Update password"
			})
		]
	})] });
}
//#endregion
export { AdminSettings as component };
