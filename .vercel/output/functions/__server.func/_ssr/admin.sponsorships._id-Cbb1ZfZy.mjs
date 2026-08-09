import { c as Route } from "./router-CMFhHr5r.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as StatusBadge, t as PaymentBadge } from "./StatusBadge-CKMCsx9p.mjs";
import { f as useSponsorship, g as useUpdateSponsorship } from "./admin-api-Du3z4az8.mjs";
import { t as AdminEditableSection } from "./AdminEditableSection-eveQgjvQ.mjs";
import { i as DetailTimestamp, n as DetailGrid, r as DetailSection, t as DetailField } from "./DetailView-CJqCjTph.mjs";
import { t as ExportCsvButton } from "./ExportCsvButton-BwrfTFmu.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.sponsorships._id-Cbb1ZfZy.js
var import_jsx_runtime = require_jsx_runtime();
function SponsorshipDetailPage() {
	const { id } = Route.useParams();
	const { data, isLoading, error } = useSponsorship(id);
	const updateSponsorship = useUpdateSponsorship(id);
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-zinc-500",
		children: "Loading sponsorship…"
	});
	if (error || !data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700",
		children: error?.message ?? "Sponsorship not found."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin/sponsorships",
						className: "text-sm font-medium text-zinc-500 hover:text-zinc-900",
						children: "← Back to sponsorships"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-3xl font-extrabold tracking-tight text-zinc-900",
						children: data.company
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-zinc-500",
						children: ["Reference ", data.referenceId ?? data.id]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportCsvButton, {
					filename: `sponsorship-${data.referenceId ?? data.id}`,
					rows: [data]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailSection, {
				title: "Overview",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DetailGrid, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
						label: "Reference ID",
						value: data.referenceId,
						mono: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
						label: "Tier",
						value: data.tierName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
						label: "Tier ID",
						value: data.tierId,
						mono: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
						label: "Spots",
						value: data.spots
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] font-semibold uppercase tracking-wider text-zinc-400",
						children: "Payment"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentBadge, { paid: data.paymentPaid })
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] font-semibold uppercase tracking-wider text-zinc-400",
						children: "Status"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							variant: data.status === "confirmed" ? "success" : data.status === "cancelled" ? "error" : "warning",
							children: data.status
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
						label: "Payment ID",
						value: data.paymentId,
						mono: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailTimestamp, {
						label: "Submitted",
						value: data.createdAt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailTimestamp, {
						label: "Last updated",
						value: data.updatedAt
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminEditableSection, {
				title: "Contact & registration",
				saving: updateSponsorship.isPending,
				fields: [
					{
						key: "company",
						label: "Company",
						value: data.company
					},
					{
						key: "contactName",
						label: "Contact name",
						value: data.contactName
					},
					{
						key: "contactEmail",
						label: "Email",
						value: data.contactEmail,
						type: "email"
					},
					{
						key: "contactPhone",
						label: "Phone",
						value: data.contactPhone,
						type: "tel"
					},
					{
						key: "tierName",
						label: "Tier name",
						value: data.tierName
					},
					{
						key: "tierId",
						label: "Tier ID",
						value: data.tierId
					},
					{
						key: "status",
						label: "Status",
						value: data.status,
						type: "select",
						options: [
							{
								value: "pending",
								label: "Pending"
							},
							{
								value: "confirmed",
								label: "Confirmed"
							},
							{
								value: "cancelled",
								label: "Cancelled"
							}
						]
					},
					{
						key: "message",
						label: "Message",
						value: data.message ?? "",
						type: "textarea"
					}
				],
				onSave: async (values) => {
					await updateSponsorship.mutateAsync({
						...values,
						message: values.message || null
					});
					toast.success("Sponsorship details saved.");
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DetailGrid, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
						label: "Company",
						value: data.company
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
						label: "Contact name",
						value: data.contactName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
						label: "Email",
						value: data.contactEmail
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
						label: "Phone",
						value: data.contactPhone
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
						label: "Message",
						value: data.message
					})
				] })
			})
		]
	});
}
//#endregion
export { SponsorshipDetailPage as component };
