import { i as __toESM } from "../_runtime.mjs";
import { R as setAdminToken, T as isAdminAuthenticated, b as getAdminLogoutMessage, g as clearAdminLogoutMessage } from "./router-BsC5ZfFx.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as apiFetch } from "./api-client-povPFUIH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.login-DrYxAEpH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminLogin() {
	const navigate = useNavigate();
	const [username, setUsername] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [sessionNotice, setSessionNotice] = (0, import_react.useState)("");
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const notice = getAdminLogoutMessage();
		if (notice) {
			setSessionNotice(notice);
			clearAdminLogoutMessage();
		}
		if (isAdminAuthenticated()) navigate({ to: "/admin" });
	}, [navigate]);
	async function onSubmit(e) {
		e.preventDefault();
		setError("");
		setSubmitting(true);
		try {
			const result = await apiFetch("/api/admin/login", {
				method: "POST",
				body: JSON.stringify({
					username: username.trim(),
					password
				})
			});
			setAdminToken(result.token);
			navigate({ to: "/admin" });
		} catch (err) {
			setError(err instanceof Error ? err.message : "Login failed");
		} finally {
			setSubmitting(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-[#F9FAFB] px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xl font-bold tracking-tight text-zinc-900",
					children: ["FG MEDIA HUB", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-zinc-400",
						children: "™"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[10px] font-medium uppercase tracking-wider text-zinc-400",
					children: "FG Media Group · Admin Panel"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "space-y-5 rounded-xl border border-zinc-200/80 bg-white p-8 shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-xl font-bold text-zinc-900",
						children: "Sign in"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-zinc-500",
						children: "Enter your admin username and password to continue."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "username",
						className: "mb-2 block text-[10px] font-semibold uppercase tracking-wider text-zinc-400",
						children: "Username"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "username",
						type: "text",
						placeholder: "admin",
						value: username,
						onChange: (e) => setUsername(e.target.value),
						autoComplete: "username",
						required: true,
						className: "w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "password",
						className: "mb-2 block text-[10px] font-semibold uppercase tracking-wider text-zinc-400",
						children: "Password"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "password",
						type: "password",
						placeholder: "Enter password",
						value: password,
						onChange: (e) => setPassword(e.target.value),
						autoComplete: "current-password",
						required: true,
						className: "w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
					})] }),
					sessionNotice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800",
						children: sessionNotice
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: submitting,
						className: "w-full rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 disabled:opacity-60",
						children: submitting ? "Signing in…" : "Sign in"
					})
				]
			})]
		})
	});
}
//#endregion
export { AdminLogin as component };
