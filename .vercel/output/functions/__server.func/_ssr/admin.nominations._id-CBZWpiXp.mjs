import { i as __toESM } from "../_runtime.mjs";
import { d as Route$4 } from "./router-BsC5ZfFx.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { $ as Download, J as FileText, s as Upload } from "../_libs/lucide-react.mjs";
import { t as PaymentBadge } from "./StatusBadge-CKMCsx9p.mjs";
import { i as buildApiUrl, m as uploadNominationFile, n as adminFetchBlob } from "./api-client-povPFUIH.mjs";
import { d as useSendNominationInvite, h as useUpdateNomination, o as useMarkNominationPaid, s as useNomination } from "./admin-api-Be6asTRJ.mjs";
import { t as AdminEditableSection } from "./AdminEditableSection-eveQgjvQ.mjs";
import { i as DetailTimestamp, n as DetailGrid, r as DetailSection, t as DetailField } from "./DetailView-CKx6u7uZ.mjs";
import { t as ExportCsvButton } from "./ExportCsvButton-BwrfTFmu.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.nominations._id-CBZWpiXp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminFileAttachment({ label, keyValue, meta }) {
	const [previewUrl, setPreviewUrl] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!keyValue) return;
		let objectUrl = null;
		let cancelled = false;
		if (meta?.publicUrl) {
			setPreviewUrl(meta.publicUrl);
			return;
		}
		adminFetchBlob(`/api/admin/files?key=${encodeURIComponent(keyValue)}`).then((blob) => {
			if (cancelled) return;
			objectUrl = URL.createObjectURL(blob);
			setPreviewUrl(objectUrl);
		}).catch((err) => {
			if (!cancelled) setError(err instanceof Error ? err.message : "Failed to load file");
		});
		return () => {
			cancelled = true;
			if (objectUrl) URL.revokeObjectURL(objectUrl);
		};
	}, [keyValue, meta?.publicUrl]);
	if (!keyValue) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-dashed border-zinc-200 p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[10px] font-semibold uppercase tracking-wider text-zinc-400",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-zinc-400",
			children: "Not provided"
		})]
	});
	const isImage = (meta?.contentType ?? "").startsWith("image/");
	const isVideo = (meta?.contentType ?? "").startsWith("video/");
	const downloadUrl = meta?.publicUrl ?? buildApiUrl(`/api/admin/files?key=${encodeURIComponent(keyValue)}`);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-zinc-200 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] font-semibold uppercase tracking-wider text-zinc-400",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm font-medium text-zinc-900",
				children: meta?.originalName ?? keyValue
			}),
			meta?.size != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-xs text-zinc-500",
				children: [
					(meta.size / 1024).toFixed(1),
					" KB",
					meta.compressed && meta.originalSize ? ` (compressed from ${(meta.originalSize / 1024).toFixed(1)} KB)` : ""
				]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-red-600",
				children: error
			}),
			previewUrl && isImage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: previewUrl,
				alt: meta?.originalName ?? label,
				className: "mt-3 max-h-64 rounded-lg border border-zinc-100 object-contain"
			}),
			previewUrl && isVideo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				src: previewUrl,
				controls: true,
				className: "mt-3 max-h-64 w-full rounded-lg border border-zinc-100"
			}),
			!isImage && !isVideo && keyValue && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-center gap-2 text-sm text-zinc-600",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: meta?.contentType ?? "Document" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: downloadUrl,
				target: "_blank",
				rel: "noreferrer",
				className: "mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-700 hover:text-zinc-900",
				onClick: (e) => {
					if (!meta?.publicUrl) {
						e.preventDefault();
						adminFetchBlob(`/api/admin/files?key=${encodeURIComponent(keyValue)}`).then((blob) => {
							const url = URL.createObjectURL(blob);
							const a = document.createElement("a");
							a.href = url;
							a.download = meta?.originalName ?? keyValue.split("/").pop() ?? "download";
							a.click();
							URL.revokeObjectURL(url);
						});
					}
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "Download"]
			})
		]
	});
}
function uploadMeta(result) {
	return {
		key: result.key,
		originalName: result.originalName,
		contentType: result.contentType,
		size: result.size,
		originalSize: result.originalSize,
		compressed: result.compressed,
		publicUrl: result.publicUrl
	};
}
function AdminAttachmentEditor({ label, purpose, keyValue, meta, accept, onUploaded }) {
	const inputRef = (0, import_react.useRef)(null);
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	async function handleFile(file) {
		setUploading(true);
		setError(null);
		try {
			const result = await uploadNominationFile(file, purpose);
			onUploaded(result.key, uploadMeta(result));
		} catch (err) {
			setError(err instanceof Error ? err.message : "Upload failed");
		} finally {
			setUploading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminFileAttachment, {
				label,
				keyValue,
				meta: meta ?? null
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: inputRef,
				type: "file",
				accept,
				className: "hidden",
				onChange: (e) => {
					const file = e.target.files?.[0];
					if (file) handleFile(file);
					e.target.value = "";
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				disabled: uploading,
				onClick: () => inputRef.current?.click(),
				className: "inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 disabled:opacity-50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-4 w-4" }), uploading ? "Uploading…" : keyValue ? "Replace file" : "Upload file"]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-red-600",
				children: error
			})
		]
	});
}
function NominationDetailPage() {
	const { id } = Route$4.useParams();
	const { data, isLoading, error } = useNomination(id);
	const markPaid = useMarkNominationPaid();
	const sendInvite = useSendNominationInvite();
	const updateNomination = useUpdateNomination(id);
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-zinc-500",
		children: "Loading nomination…"
	});
	if (error || !data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700",
		children: error?.message ?? "Nomination not found."
	});
	const formData = data.formData ?? {};
	const attachments = formData.attachments && typeof formData.attachments === "object" ? formData.attachments : {};
	const profileMeta = attachments.profilePhoto && typeof attachments.profilePhoto === "object" ? attachments.profilePhoto : { key: data.profilePhotoKey };
	const docsMeta = attachments.supportingDocs && typeof attachments.supportingDocs === "object" ? attachments.supportingDocs : { key: data.supportingDocsKey };
	const videoMeta = attachments.videoFile && typeof attachments.videoFile === "object" ? attachments.videoFile : { key: data.videoKey };
	const nomineeEmail = data.nomineeEmail || (typeof formData["nomineeEmail"] === "string" ? formData["nomineeEmail"] : "");
	const nomineePhone = typeof formData["nomineePhone"] === "string" ? formData["nomineePhone"] : "";
	const nomineeLocation = typeof formData["nomineeLocation"] === "string" ? formData["nomineeLocation"] : "";
	const relationship = typeof formData["relationship"] === "string" ? formData["relationship"] : "";
	const publications = Array.isArray(formData["publications"]) ? formData["publications"].filter((v) => typeof v === "string") : [];
	const executiveSummary = typeof formData["executiveSummary"] === "string" ? formData["executiveSummary"] : "";
	const achievement = typeof formData["achievement"] === "string" ? formData["achievement"] : "";
	const impact = typeof formData["impact"] === "string" ? formData["impact"] : "";
	const futureGoals = typeof formData["futureGoals"] === "string" ? formData["futureGoals"] : "";
	const hasApplicationNarrative = Boolean(executiveSummary || achievement || impact || futureGoals);
	async function saveAttachment(slot, keyField, key, meta) {
		await updateNomination.mutateAsync({
			[keyField]: key,
			formData: { attachments: {
				...attachments,
				[slot]: meta
			} }
		});
		toast.success("Attachment updated.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin/nominations",
						className: "text-sm font-medium text-zinc-500 hover:text-zinc-900",
						children: "← Back to nominations"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-3xl font-extrabold tracking-tight text-zinc-900",
						children: data.nomineeName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-zinc-500",
						children: ["Reference ", data.referenceId ?? data.id]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportCsvButton, {
							filename: `nomination-${data.referenceId ?? data.id}`,
							rows: [data]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: sendInvite.isPending || !nomineeEmail,
							onClick: () => {
								sendInvite.mutate(data.id, {
									onSuccess: (result) => {
										if (result.sent) toast.success("Formal invitation sent to nominee.");
										else toast.error("Invite could not be sent. Check SMTP configuration.");
									},
									onError: (err) => toast.error(err.message)
								});
							},
							className: "rounded-lg border border-amber-200 bg-amber-50 px-3.5 py-2 text-sm font-medium text-amber-800 hover:bg-amber-100 disabled:opacity-50",
							children: sendInvite.isPending ? "Sending…" : "Approve & Send Formal Invite"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "w-full text-xs text-zinc-500",
							children: "Sends the Official Nominee Communication (CEO letter) to the nominee's email."
						}),
						!data.paymentPaid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: markPaid.isPending,
							onClick: () => markPaid.mutate(data.id),
							className: "rounded-lg border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-100 disabled:opacity-50",
							children: "Mark paid"
						})
					]
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
						label: "Category",
						value: data.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
						label: "Status",
						value: data.status
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
						label: "Review status",
						value: data.reviewStatus
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] font-semibold uppercase tracking-wider text-zinc-400",
						children: "Payment"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentBadge, { paid: data.paymentPaid })
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
				title: "Nominator",
				saving: updateNomination.isPending,
				fields: [
					{
						key: "nominatorName",
						label: "Name",
						value: data.nominatorName
					},
					{
						key: "nominatorEmail",
						label: "Email",
						value: data.nominatorEmail,
						type: "email"
					},
					{
						key: "nominatorPhone",
						label: "Phone",
						value: data.nominatorPhone,
						type: "tel"
					}
				],
				onSave: async (values) => {
					await updateNomination.mutateAsync(values);
					toast.success("Nominator details saved.");
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DetailGrid, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
						label: "Name",
						value: data.nominatorName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
						label: "Email",
						value: data.nominatorEmail
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
						label: "Phone",
						value: data.nominatorPhone
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminEditableSection, {
				title: "Nominee",
				saving: updateNomination.isPending,
				fields: [
					{
						key: "nomineeName",
						label: "Name",
						value: data.nomineeName
					},
					{
						key: "category",
						label: "Category",
						value: data.category
					},
					{
						key: "nomineeEmail",
						label: "Email",
						value: nomineeEmail,
						type: "email"
					},
					{
						key: "nomineePhone",
						label: "Phone",
						value: nomineePhone,
						type: "tel"
					},
					{
						key: "nomineeLocation",
						label: "Location",
						value: nomineeLocation
					},
					{
						key: "status",
						label: "Status",
						value: data.status,
						type: "select",
						options: [
							{
								value: "draft",
								label: "Draft"
							},
							{
								value: "pending_payment",
								label: "Pending payment"
							},
							{
								value: "paid",
								label: "Paid"
							},
							{
								value: "under_review",
								label: "Under review"
							}
						]
					},
					{
						key: "reviewStatus",
						label: "Review status",
						value: data.reviewStatus,
						type: "select",
						options: [{
							value: "pending",
							label: "Pending"
						}, {
							value: "approved",
							label: "Approved"
						}]
					}
				],
				onSave: async (values) => {
					const { nomineeEmail: email, nomineePhone: phone, nomineeLocation: location, ...top } = values;
					await updateNomination.mutateAsync({
						nomineeName: top.nomineeName,
						category: top.category,
						status: top.status,
						reviewStatus: top.reviewStatus,
						nomineeEmail: email,
						formData: {
							nomineeEmail: email,
							nomineePhone: phone,
							nomineeLocation: location
						}
					});
					toast.success("Nominee details saved.");
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DetailGrid, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
						label: "Name",
						value: data.nomineeName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
						label: "Category",
						value: data.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
						label: "Email",
						value: nomineeEmail
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
						label: "Phone",
						value: nomineePhone
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
						label: "Location",
						value: nomineeLocation
					})
				] })
			}),
			hasApplicationNarrative ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailSection, {
				title: "Application answers",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-7",
					children: [
						relationship ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
							prominent: true,
							label: "Relationship",
							value: relationship
						}) : null,
						publications.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
							prominent: true,
							label: "Preferred publications",
							value: publications.join(", ")
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
							prominent: true,
							label: "Executive summary",
							value: executiveSummary || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
							prominent: true,
							label: "Achievement",
							value: achievement || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
							prominent: true,
							label: "Impact & outcomes",
							value: impact || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailField, {
							prominent: true,
							label: "Future goals & vision",
							value: futureGoals || "—"
						})
					]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailSection, {
				title: "Attachments",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminAttachmentEditor, {
							label: "Profile photo",
							purpose: "profile",
							keyValue: data.profilePhotoKey ?? profileMeta?.key,
							meta: profileMeta,
							accept: "image/jpeg,image/png,image/webp",
							onUploaded: (key, meta) => void saveAttachment("profilePhoto", "profilePhotoKey", key, meta)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminAttachmentEditor, {
							label: "Supporting documents",
							purpose: "document",
							keyValue: data.supportingDocsKey ?? docsMeta?.key,
							meta: docsMeta,
							accept: ".pdf,.doc,.docx,image/jpeg,image/png,image/webp",
							onUploaded: (key, meta) => void saveAttachment("supportingDocs", "supportingDocsKey", key, meta)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminAttachmentEditor, {
							label: "Video",
							purpose: "video",
							keyValue: data.videoKey ?? videoMeta?.key,
							meta: videoMeta,
							accept: "video/mp4,video/quicktime,video/webm",
							onUploaded: (key, meta) => void saveAttachment("videoFile", "videoKey", key, meta)
						})
					]
				})
			})
		]
	});
}
//#endregion
export { NominationDetailPage as component };
