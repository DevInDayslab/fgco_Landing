import { useState, type ReactNode } from "react";
import { Pencil, X, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type EditableField = {
  key: string;
  label: string;
  value: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  options?: { value: string; label: string }[];
  mono?: boolean;
};

export function AdminEditableSection({
  title,
  fields,
  onSave,
  children,
  saving,
}: {
  title: string;
  fields: EditableField[];
  onSave: (values: Record<string, string>) => Promise<void> | void;
  children?: ReactNode;
  saving?: boolean;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<Record<string, string>>({});

  function startEdit() {
    const initial: Record<string, string> = {};
    for (const field of fields) {
      initial[field.key] = field.value ?? "";
    }
    setDraft(initial);
    setEditing(true);
  }

  async function handleSave() {
    await onSave(draft);
    setEditing(false);
  }

  return (
    <section className="rounded-xl border border-zinc-200/80 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-base font-bold text-zinc-900">{title}</h2>
        {!editing ? (
          <button
            type="button"
            onClick={startEdit}
            className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
          >
            <Pencil className="h-3.5 w-3.5" />
            Edit
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setEditing(false)}
              className="inline-flex items-center gap-1 rounded-lg border border-zinc-200 px-3 py-1.5 text-sm text-zinc-600 hover:bg-zinc-50"
            >
              <X className="h-3.5 w-3.5" />
              Cancel
            </button>
            <button
              type="button"
              disabled={saving}
              onClick={() => void handleSave()}
              className="inline-flex items-center gap-1 rounded-lg bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-50"
            >
              <Check className="h-3.5 w-3.5" />
              {saving ? "Saving…" : "Save"}
            </button>
          </div>
        )}
      </div>

      {editing ? (
        <div className="grid gap-4 md:grid-cols-2">
          {fields.map((field) => (
            <div key={field.key} className={field.type === "textarea" ? "md:col-span-2" : ""}>
              <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  value={draft[field.key] ?? ""}
                  onChange={(e) => setDraft((d) => ({ ...d, [field.key]: e.target.value }))}
                  rows={4}
                  className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-900"
                />
              ) : field.type === "select" && field.options ? (
                <select
                  value={draft[field.key] ?? ""}
                  onChange={(e) => setDraft((d) => ({ ...d, [field.key]: e.target.value }))}
                  className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-900"
                >
                  {field.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type ?? "text"}
                  value={draft[field.key] ?? ""}
                  onChange={(e) => setDraft((d) => ({ ...d, [field.key]: e.target.value }))}
                  className={cn(
                    "w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-900",
                    field.mono && "font-mono",
                  )}
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
