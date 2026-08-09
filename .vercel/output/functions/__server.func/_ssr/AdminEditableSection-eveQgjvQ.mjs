import { i as __toESM } from "../_runtime.mjs";
import { R as cn } from "./router-DmhiZPli.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as X, nt as Check, x as Pencil } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AdminEditableSection-eveQgjvQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminEditableSection({ title, fields, onSave, children, saving }) {
	const [editing, setEditing] = (0, import_react.useState)(false);
	const [draft, setDraft] = (0, import_react.useState)({});
	function startEdit() {
		const initial = {};
		for (const field of fields) initial[field.key] = field.value ?? "";
		setDraft(initial);
		setEditing(true);
	}
	async function handleSave() {
		await onSave(draft);
		setEditing(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl border border-zinc-200/80 bg-white p-6 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-base font-bold text-zinc-900",
				children: title
			}), !editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: startEdit,
				className: "inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-3.5 w-3.5" }), "Edit"]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setEditing(false),
					className: "inline-flex items-center gap-1 rounded-lg border border-zinc-200 px-3 py-1.5 text-sm text-zinc-600 hover:bg-zinc-50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" }), "Cancel"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					disabled: saving,
					onClick: () => void handleSave(),
					className: "inline-flex items-center gap-1 rounded-lg bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" }), saving ? "Saving…" : "Save"]
				})]
			})]
		}), editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: field.type === "textarea" ? "md:col-span-2" : "",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-zinc-400",
					children: field.label
				}), field.type === "textarea" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: draft[field.key] ?? "",
					onChange: (e) => setDraft((d) => ({
						...d,
						[field.key]: e.target.value
					})),
					rows: 4,
					className: "w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-900"
				}) : field.type === "select" && field.options ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					value: draft[field.key] ?? "",
					onChange: (e) => setDraft((d) => ({
						...d,
						[field.key]: e.target.value
					})),
					className: "w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-900",
					children: field.options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: opt.value,
						children: opt.label
					}, opt.value))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: field.type ?? "text",
					value: draft[field.key] ?? "",
					onChange: (e) => setDraft((d) => ({
						...d,
						[field.key]: e.target.value
					})),
					className: cn("w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-900", field.mono && "font-mono")
				})]
			}, field.key))
		}) : children]
	});
}
//#endregion
export { AdminEditableSection as t };
