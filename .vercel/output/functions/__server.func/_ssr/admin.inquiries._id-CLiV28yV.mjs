import { f as Route$6 } from "./router-CsP7Npso.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as useInquiry, m as useUpdateInquiry } from "./admin-api-C5QR29qV.mjs";
import { t as AdminEditableSection } from "./AdminEditableSection-eveQgjvQ.mjs";
import { i as DetailTimestamp, n as DetailGrid, t as DetailField } from "./DetailView-CnMmQrBK.mjs";
import { t as ExportCsvButton } from "./ExportCsvButton-BwrfTFmu.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.inquiries._id-CLiV28yV.js
var import_jsx_runtime = require_jsx_runtime();
function InquiryDetailPage() {
	const { id } = Route$6.useParams();
	const { data, isLoading, error } = useInquiry(id);
	const updateInquiry = useUpdateInquiry(id);
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-zinc-500",
		children: "Loading inquiry…"
	});
	if (error || !data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700",
		children: error?.message ?? "Inquiry not found."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin/inquiries",
					className: "text-sm font-medium text-zinc-500 hover:text-zinc-900",
					children: "← Back to inquiries"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-3xl font-extrabold tracking-tight text-zinc-900",
					children: data.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-zinc-500",
					children: data.email
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportCsvButton, {
				filename: `inquiry-${data.id}`,
				rows: [data]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminEditableSection, {
			title: "Inquiry details",
			saving: updateInquiry.isPending,
			fields: [
				{
					key: "name",
					label: "Name",
					value: data.name
				},
				{
					key: "email",
					label: "Email",
					value: data.email,
					type: "email"
				},
				{
					key: "company",
					label: "Company",
					value: data.company ?? ""
				},
				{
					key: "inquiryType",
					label: "Inquiry type",
					value: data.inquiryType ?? ""
				},
				{
					key: "message",
					label: "Message",
					value: data.message,
					type: "textarea"
				}
			],
			onSave: async (values) => {
				await updateInquiry.mutateAsync({
					...values,
					company: values.company || null,
					inquiryType: values.inquiryType || null
				});
				toast.success("Inquiry updated.");
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DetailGrid, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
					label: "Name",
					value: data.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
					label: "Email",
					value: data.email
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
					label: "Company",
					value: data.company
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
					label: "Inquiry type",
					value: data.inquiryType
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailTimestamp, {
					label: "Submitted",
					value: data.createdAt
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
					label: "Message",
					value: data.message
				})
			})]
		})]
	});
}
//#endregion
export { InquiryDetailPage as component };
