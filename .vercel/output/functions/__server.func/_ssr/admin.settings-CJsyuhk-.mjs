import { i as __toESM } from "../_runtime.mjs";
import { w as logoutAdmin } from "./router-CgckvXdb.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { a as require_jsx_runtime, n as useQuery, t as useMutation } from "../_libs/react+tanstack__react-query.mjs";
import { j as LoaderCircle, k as Mail, y as RefreshCw } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-B95mVO_B.mjs";
import { t as adminFetch } from "./api-client-CkW4sA9s.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.settings-CJsyuhk-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MAIL_TEMPLATE_OPTIONS = [
	{
		id: "ping",
		label: "Simple ping (no template)"
	},
	{
		id: "ceo_letter",
		label: "CEO nomination letter"
	},
	{
		id: "application_ack",
		label: "Application acknowledgement (self-nomination)"
	},
	{
		id: "nominator_ack",
		label: "Nominator acknowledgement"
	},
	{
		id: "nominee_ack",
		label: "Nominee acknowledgement"
	},
	{
		id: "payment_receipt",
		label: "Payment receipt"
	},
	{
		id: "sponsorship_confirmation",
		label: "Sponsorship confirmation"
	}
];
function useMailStatus() {
	return useQuery({
		queryKey: [
			"admin",
			"mail",
			"status"
		],
		queryFn: () => adminFetch("/api/admin/mail/status"),
		retry: 1
	});
}
function useMailTest() {
	return useMutation({ mutationFn: (body) => adminFetch("/api/admin/mail/test", {
		method: "POST",
		body: JSON.stringify(body)
	}) });
}
function useMailVerify() {
	return useMutation({ mutationFn: () => adminFetch("/api/admin/mail/verify", { method: "POST" }) });
}
function StatusPill({ ok, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: ok ? "rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700" : "rounded-full bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700",
		children: label
	});
}
function MailDevTools() {
	const [to, setTo] = (0, import_react.useState)("");
	const [lastResult, setLastResult] = (0, import_react.useState)(null);
	const [activeTemplate, setActiveTemplate] = (0, import_react.useState)(null);
	const statusQuery = useMailStatus();
	const verifyMutation = useMailVerify();
	const testMutation = useMailTest();
	const status = statusQuery.data;
	const verify = verifyMutation.data ?? status?.verify;
	async function runVerify() {
		setLastResult(null);
		await verifyMutation.mutateAsync();
		await statusQuery.refetch();
	}
	async function sendTemplate(template) {
		if (!to.trim()) return;
		setActiveTemplate(template);
		setLastResult(null);
		try {
			const result = await testMutation.mutateAsync({
				to: to.trim(),
				template
			});
			setLastResult(result);
		} catch (err) {
			setLastResult({
				ok: false,
				sent: false,
				template,
				to: to.trim(),
				error: err instanceof Error ? err.message : "Request failed",
				durationMs: 0
			});
		} finally {
			setActiveTemplate(null);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-8 max-w-3xl space-y-5 rounded-xl border border-amber-200/80 bg-amber-50/30 p-6 shadow-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-amber-700" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold text-zinc-900",
						children: "Mail diagnostics (dev)"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-zinc-500",
					children: "Check SMTP config and send test emails without going through nomination forms."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => void statusQuery.refetch(),
					disabled: statusQuery.isFetching,
					className: "inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 disabled:opacity-60",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `h-4 w-4 ${statusQuery.isFetching ? "animate-spin" : ""}` }), "Refresh"]
				})]
			}),
			statusQuery.isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-zinc-500",
				children: "Loading mail status…"
			}),
			statusQuery.error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700",
				children: statusQuery.error.message
			}),
			status && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3 rounded-lg border border-zinc-200 bg-white p-4 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, {
								ok: status.configured,
								label: status.configured ? "SMTP configured" : "SMTP missing"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, {
								ok: status.passSet,
								label: status.passSet ? "Password set" : "Password missing"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, {
								ok: verify?.ok ?? false,
								label: verify?.ok ? "SMTP verify OK" : "SMTP verify failed"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, {
								ok: status.ceoImageExists,
								label: status.ceoImageExists ? "CEO image found" : "CEO image missing"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "grid gap-2 text-xs text-zinc-600 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-medium text-zinc-400",
								children: "Configured host"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-mono",
								children: status.host ?? "—"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-medium text-zinc-400",
								children: "Working host (verify)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "font-mono",
								children: [verify?.host ? `${verify.host}:${verify.port ?? "?"}` : "—", verify?.label ? ` (${verify.label})` : ""]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-medium text-zinc-400",
								children: "Port / secure"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "font-mono",
								children: [
									status.port ?? "—",
									" / ",
									String(status.secure)
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-medium text-zinc-400",
								children: "User"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-mono",
								children: status.user ?? "—"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-medium text-zinc-400",
								children: "From"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-mono",
								children: status.from ?? "—"
							})] }),
							status.missing.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-medium text-red-500",
									children: "Missing env"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-mono text-red-700",
									children: status.missing.join(", ")
								})]
							}),
							verify?.error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-medium text-red-500",
									children: "Verify error"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-mono text-red-700",
									children: verify.error
								})]
							}),
							(status.eaccesHint || verify?.hint) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2 rounded-md border border-amber-200 bg-amber-50 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-medium text-amber-800",
									children: "GoDaddy SMTP hint"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-amber-900",
									children: verify?.hint ?? status.eaccesHint
								})]
							}),
							status.transportProfiles && status.transportProfiles.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "mb-1 font-medium text-zinc-400",
									children: "Profiles tried (in order)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "space-y-1 font-mono text-[11px] text-zinc-600",
									children: status.transportProfiles.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										p.label,
										": ",
										p.host,
										":",
										p.port,
										" (tls=",
										p.tlsServername,
										")"
									] }, `${p.label}-${p.host}-${p.port}`))
								})]
							}),
							status.activeProfile && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-medium text-emerald-600",
									children: "Active profile"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "font-mono text-emerald-700",
									children: [
										status.activeProfile.label,
										" — ",
										status.activeProfile.host,
										":",
										status.activeProfile.port
									]
								})]
							}),
							verify?.smtp?.response && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-medium text-red-500",
									children: "SMTP response"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-mono text-red-700 break-all",
									children: verify.smtp.response
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => void runVerify(),
						disabled: verifyMutation.isPending,
						className: "rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100 disabled:opacity-60",
						children: verifyMutation.isPending ? "Verifying SMTP…" : "Re-run SMTP verify"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-xs leading-relaxed text-blue-900",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "SMTP accepted ≠ inbox delivered." }),
					" If tests show ok but Gmail is empty, check spam/promotions, wait 5–10 min, and in cPanel open",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Track Delivery" }),
					" for hitawards@fgco.in. Also ensure SPF/DKIM records exist for fgco.in. Try ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Simple ping" }),
					" first (plain text) before heavy HTML templates."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3 rounded-lg border border-zinc-200 bg-white p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "mailTestTo",
						className: "mb-2 block text-[10px] font-semibold uppercase tracking-wider text-zinc-400",
						children: "Send test to"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "mailTestTo",
						type: "email",
						placeholder: "you@example.com",
						value: to,
						onChange: (e) => setTo(e.target.value),
						className: "w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2 pt-1",
						children: MAIL_TEMPLATE_OPTIONS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: !to.trim() || testMutation.isPending,
							onClick: () => void sendTemplate(option.id),
							className: "rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-medium text-zinc-800 hover:bg-zinc-100 disabled:opacity-50",
							children: activeTemplate === option.id && testMutation.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" }), "Sending…"]
							}) : option.label
						}, option.id))
					})
				]
			}),
			lastResult && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "max-h-64 overflow-auto rounded-lg border border-zinc-200 bg-zinc-950 p-4 text-xs leading-relaxed text-emerald-300 whitespace-pre-wrap",
				children: JSON.stringify(lastResult, null, 2)
			})
		]
	});
}
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Settings",
			subtitle: "Update your admin password. Changing it signs out all active sessions."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
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
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MailDevTools, {})
	] });
}
//#endregion
export { AdminSettings as component };
