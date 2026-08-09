import { l as Route$2 } from "./router-CGLlFfYz.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as StatusBadge } from "./StatusBadge-CKMCsx9p.mjs";
import { l as usePayment } from "./admin-api-C-TtyBAg.mjs";
import { i as DetailTimestamp, n as DetailGrid, r as DetailSection, t as DetailField } from "./DetailView-DaXrwSRm.mjs";
import { t as ExportCsvButton } from "./ExportCsvButton-BwrfTFmu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.payments._id-B5cHHFRn.js
var import_jsx_runtime = require_jsx_runtime();
function paymentStatusVariant(status) {
	if (status === "paid") return "success";
	if (status === "failed") return "error";
	return "pending";
}
function PaymentDetailPage() {
	const { id } = Route$2.useParams();
	const { data, isLoading, error } = usePayment(id);
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-zinc-500",
		children: "Loading payment…"
	});
	if (error || !data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700",
		children: error?.message ?? "Payment not found."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin/payments",
					className: "text-sm font-medium text-zinc-500 hover:text-zinc-900",
					children: "← Back to payments"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-2 text-3xl font-extrabold tracking-tight text-zinc-900",
					children: ["₹", Number(data.amountInr).toLocaleString("en-IN")]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-zinc-500",
					children: data.razorpayOrderId
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportCsvButton, {
				filename: `payment-${data.id}`,
				rows: [data]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DetailSection, {
			title: "Payment details",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DetailGrid, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
					label: "Payment ID",
					value: data.id,
					mono: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
					label: "Razorpay order ID",
					value: data.razorpayOrderId,
					mono: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
					label: "Razorpay payment ID",
					value: data.razorpayPaymentId,
					mono: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
					label: "Payer name",
					value: typeof data.metadata?.contactName === "string" ? data.metadata.contactName : null
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
					label: "Payer phone",
					value: typeof data.metadata?.contactPhone === "string" ? data.metadata.contactPhone : null
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
					label: "Payer email",
					value: typeof data.metadata?.contactEmail === "string" ? data.metadata.contactEmail : null
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
					label: "Company",
					value: typeof data.metadata?.company === "string" ? data.metadata.company : null
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] font-semibold uppercase tracking-wider text-zinc-400",
					children: "Status"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						variant: paymentStatusVariant(data.status),
						children: data.status
					})
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
					label: "Type",
					value: data.type
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
					label: "Currency",
					value: data.currency
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
					label: "Amount (INR)",
					value: `₹${Number(data.amountInr).toLocaleString("en-IN")}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
					label: "Amount (paise)",
					value: data.amountPaise
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
					label: "Base (INR)",
					value: `₹${Number(data.baseInr).toLocaleString("en-IN")}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
					label: "GST (INR)",
					value: `₹${Number(data.gstInr).toLocaleString("en-IN")}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailTimestamp, {
					label: "Created",
					value: data.createdAt
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailTimestamp, {
					label: "Last updated",
					value: data.updatedAt
				})
			] }), data.metadata && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
					label: "Metadata",
					value: data.metadata
				})
			})]
		})]
	});
}
//#endregion
export { PaymentDetailPage as component };
