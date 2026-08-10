import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SponsorshipPaymentSummaryPanel-DEP5LBy1.js
var import_jsx_runtime = require_jsx_runtime();
function formatInr(amount) {
	return `₹${amount.toLocaleString("en-IN")}`;
}
function SponsorshipPaymentSummaryPanel({ payment, paymentId, paymentPaid, compact = false }) {
	const rows = [
		{
			label: "Sponsorship package (ex-GST)",
			value: formatInr(payment.packageInr)
		},
		{
			label: "GST on package (18%)",
			value: formatInr(payment.packageGstInr)
		},
		{
			label: "Total commitment (incl. GST)",
			value: formatInr(payment.committedTotalInr),
			strong: true
		},
		{
			label: "Razorpay due (incl. GST)",
			value: formatInr(payment.razorpayTotalInr)
		},
		{
			label: "Razorpay taxable + GST",
			value: `${formatInr(payment.razorpayBaseInr)} + ${formatInr(payment.razorpayGstInr)}`,
			muted: true
		},
		{
			label: paymentPaid ? "Paid via Razorpay" : "Pending — Razorpay",
			value: paymentPaid ? formatInr(payment.paidViaRazorpayInr) : formatInr(payment.razorpayPendingInr),
			highlight: paymentPaid ? "paid" : "pending"
		},
		{
			label: "Balance — bank transfer (incl. GST)",
			value: formatInr(payment.balanceTotalInr),
			sub: `${formatInr(payment.balanceBaseInr)} + ${formatInr(payment.balanceGstInr)} GST`
		},
		{
			label: "Total outstanding",
			value: formatInr(payment.totalOutstandingInr),
			strong: true
		}
	];
	if (compact) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-xs text-zinc-600",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "font-semibold text-zinc-900",
				children: [formatInr(payment.committedTotalInr), " committed"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: paymentPaid ? "text-emerald-700" : "text-amber-700",
				children: paymentPaid ? `${formatInr(payment.paidViaRazorpayInr)} paid` : `${formatInr(payment.razorpayPendingInr)} Razorpay pending`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-zinc-500",
				children: [formatInr(payment.balanceTotalInr), " balance (bank)"]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-zinc-200 bg-white px-4 py-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] font-semibold uppercase tracking-wider text-zinc-500",
					children: "Payment breakdown"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "divide-y divide-zinc-200",
				children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-4 bg-white px-4 py-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: `${row.muted ? "text-zinc-400" : "text-zinc-600"}`,
						children: row.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
						className: "text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `tabular-nums ${row.strong ? "font-semibold text-zinc-900" : row.highlight === "paid" ? "font-semibold text-emerald-700" : row.highlight === "pending" ? "font-semibold text-amber-700" : "font-medium text-zinc-900"}`,
							children: row.value
						}), "sub" in row && row.sub ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-xs text-zinc-400",
							children: row.sub
						}) : null]
					})]
				}, row.label))
			}),
			(payment.razorpayPaymentId || paymentId) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-zinc-200 bg-zinc-50 px-4 py-3 text-xs text-zinc-500",
				children: [payment.razorpayPaymentId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Razorpay payment ID:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-zinc-700",
						children: payment.razorpayPaymentId
					})
				] }) : null, paymentId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin/payments/$id",
						params: { id: paymentId },
						className: "font-medium text-amber-700 hover:underline",
						children: "View payment record →"
					})
				}) : null]
			})
		]
	});
}
//#endregion
export { SponsorshipPaymentSummaryPanel as t };
