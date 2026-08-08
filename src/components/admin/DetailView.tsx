import type { ReactNode } from "react";
import { formatAdminDate } from "./admin-utils";

export function formatDetailValue(value: unknown): string {
  if (value == null || value === "") return "—";
  if (typeof value === "boolean") return value ? "Yes" : "No";
  if (Array.isArray(value)) return value.join(", ");
  if (typeof value === "object") return JSON.stringify(value, null, 2);
  return String(value);
}

export function DetailSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-xl border border-zinc-200/80 bg-white p-6 shadow-sm">
      <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-500">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function DetailGrid({ children }: { children: ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2">{children}</div>;
}

export function DetailField({
  label,
  value,
  mono,
}: {
  label: string;
  value: unknown;
  mono?: boolean;
}) {
  const formatted = formatDetailValue(value);
  const isMultiline = formatted.includes("\n");

  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">{label}</p>
      {isMultiline ? (
        <pre
          className={`mt-1 whitespace-pre-wrap text-sm text-zinc-800 ${mono ? "font-mono text-xs" : ""}`}
        >
          {formatted}
        </pre>
      ) : (
        <p className={`mt-1 text-sm font-medium text-zinc-900 ${mono ? "font-mono text-xs" : ""}`}>
          {formatted}
        </p>
      )}
    </div>
  );
}

export function DetailTimestamp({ label, value }: { label: string; value: string }) {
  return (
    <DetailField
      label={label}
      value={formatAdminDate(value)}
    />
  );
}

export function DetailBackLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <a
      href={to}
      className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
    >
      {children}
    </a>
  );
}
