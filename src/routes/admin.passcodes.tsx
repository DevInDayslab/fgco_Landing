import { createFileRoute } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import {
  DataTableCell,
  DataTableEmpty,
  DataTableRow,
  DataTableShell,
} from "@/components/admin/DataTable";
import { PageHeader } from "@/components/admin/PageHeader";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { formatAdminDate } from "@/components/admin/admin-utils";
import { formatPasscodeDiscountLabel } from "@/lib/passcode-discount";
import {
  postAdminPasscodesGenerate,
  usePasscodes,
  type GeneratedPasscode,
  type PasscodeGenerateResult,
  type PasscodeRow,
} from "@/lib/admin-api";

export const Route = createFileRoute("/admin/passcodes")({
  component: AdminPasscodes,
});

const COUNT_PRESETS = [10, 20, 30] as const;

type StatusFilter = "all" | "available" | "used";

function filterPasscodes(items: PasscodeRow[], status: StatusFilter) {
  if (status === "available") return items.filter((item) => !item.isUsed);
  if (status === "used") return items.filter((item) => item.isUsed);
  return items;
}

function AdminPasscodes() {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = usePasscodes();

  const [employeeName, setEmployeeName] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeePhone, setEmployeePhone] = useState("");
  const [discountType, setDiscountType] = useState<"PERCENTAGE" | "FREE">("PERCENTAGE");
  const [discountValue, setDiscountValue] = useState(20);
  const [count, setCount] = useState(10);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [result, setResult] = useState<PasscodeGenerateResult | null>(null);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  const items = data?.items ?? [];
  const filteredItems = filterPasscodes(items, statusFilter);
  const availableCount = items.filter((item) => !item.isUsed).length;
  const usedCount = items.filter((item) => item.isUsed).length;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setFormError("");
    setSubmitting(true);

    try {
      const payload = {
        employeeName: employeeName.trim(),
        employeeEmail: employeeEmail.trim(),
        employeePhone: employeePhone.trim(),
        discountType,
        discountValue: discountType === "FREE" ? 100 : discountValue,
        count,
      };

      const generated = await postAdminPasscodesGenerate(payload);
      setResult(generated);
      await queryClient.invalidateQueries({ queryKey: ["admin", "passcodes"] });
      toast.success(`Generated ${generated.codes.length} passcodes.`);
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Failed to generate passcodes");
    } finally {
      setSubmitting(false);
    }
  }

  async function copyAllCodes(codes: GeneratedPasscode[]) {
    const text = codes.map((item) => item.code).join("\n");
    await navigator.clipboard.writeText(text);
    toast.success("Copied all passcodes to clipboard.");
  }

  async function copyCode(code: string) {
    await navigator.clipboard.writeText(code);
    toast.success("Passcode copied.");
  }

  return (
    <div>
      <PageHeader
        title="Referral Passcodes"
        subtitle="Generate single-use passcodes tied to an employee for nominations and sponsorship discounts."
      />

      <form
        onSubmit={onSubmit}
        className="max-w-2xl space-y-5 rounded-xl border border-zinc-200/80 bg-white p-6 shadow-sm"
      >
        <div>
          <h2 className="text-base font-semibold text-zinc-900">Employee details</h2>
          <p className="mt-1 text-sm text-zinc-500">
            Applicants must enter these exact details when applying a passcode.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <label
              htmlFor="employeeName"
              className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-zinc-400"
            >
              Employee name
            </label>
            <input
              id="employeeName"
              type="text"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              required
              className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-900 outline-none focus:border-zinc-400"
            />
          </div>

          <div>
            <label
              htmlFor="employeeEmail"
              className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-zinc-400"
            >
              Employee email
            </label>
            <input
              id="employeeEmail"
              type="email"
              value={employeeEmail}
              onChange={(e) => setEmployeeEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-900 outline-none focus:border-zinc-400"
            />
          </div>

          <div>
            <label
              htmlFor="employeePhone"
              className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-zinc-400"
            >
              Employee phone
            </label>
            <input
              id="employeePhone"
              type="tel"
              inputMode="tel"
              value={employeePhone}
              onChange={(e) => setEmployeePhone(e.target.value)}
              required
              className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-900 outline-none focus:border-zinc-400"
            />
          </div>
        </div>

        <div className="border-t border-zinc-100 pt-5">
          <h2 className="text-base font-semibold text-zinc-900">Discount settings</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="discountType"
              className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-zinc-400"
            >
              Discount type
            </label>
            <select
              id="discountType"
              value={discountType}
              onChange={(e) => setDiscountType(e.target.value as "PERCENTAGE" | "FREE")}
              className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-900 outline-none focus:border-zinc-400"
            >
              <option value="PERCENTAGE">Percentage</option>
              <option value="FREE">Free (100% off)</option>
            </select>
          </div>

          {discountType === "PERCENTAGE" && (
            <div>
              <label
                htmlFor="discountValue"
                className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-zinc-400"
              >
                Discount percentage
              </label>
              <input
                id="discountValue"
                type="number"
                min={1}
                max={100}
                value={discountValue}
                onChange={(e) => setDiscountValue(Number.parseInt(e.target.value, 10) || 1)}
                required
                className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-900 outline-none focus:border-zinc-400"
              />
            </div>
          )}
        </div>

        <div>
          <label className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
            Number of passcodes
          </label>
          <div className="flex flex-wrap items-center gap-2">
            {COUNT_PRESETS.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setCount(preset)}
                className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${
                  count === preset
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-200 text-zinc-600 hover:border-zinc-300"
                }`}
              >
                {preset}
              </button>
            ))}
            <input
              type="number"
              min={1}
              max={100}
              value={count}
              onChange={(e) => setCount(Number.parseInt(e.target.value, 10) || 1)}
              className="w-24 rounded-lg border border-zinc-200 px-3 py-1.5 text-sm text-zinc-900 outline-none focus:border-zinc-400"
            />
          </div>
        </div>

        {formError && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {formError}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 disabled:opacity-60"
        >
          {submitting ? "Generating…" : "Generate passcodes"}
        </button>
      </form>

      {result && (
        <div className="mt-8 max-w-2xl rounded-xl border border-zinc-200/80 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-base font-semibold text-zinc-900">Generated batch</h2>
              <p className="mt-1 text-sm text-zinc-500">
                Batch ID: <span className="font-mono text-zinc-700">{result.batchId}</span>
              </p>
              <p className="mt-1 text-sm text-zinc-500">
                {result.codes.length} passcodes ·{" "}
                {formatPasscodeDiscountLabel(
                  result.codes[0]?.discountType ?? "PERCENTAGE",
                  result.codes[0]?.discountValue ?? 0,
                )}
              </p>
            </div>
            <button
              type="button"
              onClick={() => void copyAllCodes(result.codes)}
              className="shrink-0 rounded-lg border border-zinc-200 px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
            >
              Copy all
            </button>
          </div>

          <ul className="mt-5 divide-y divide-zinc-100 rounded-lg border border-zinc-100">
            {result.codes.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between gap-3 px-4 py-3 text-sm"
              >
                <code className="font-mono text-zinc-900">{item.code}</code>
                <button
                  type="button"
                  onClick={() => void copyCode(item.code)}
                  className="text-xs font-medium text-zinc-500 hover:text-zinc-900"
                >
                  Copy
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-10">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-base font-semibold text-zinc-900">All passcodes</h2>
            <p className="mt-1 text-sm text-zinc-500">
              {availableCount} available · {usedCount} used
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {(
              [
                ["all", "All"],
                ["available", "Available"],
                ["used", "Used"],
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setStatusFilter(value)}
                className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${
                  statusFilter === value
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-200 text-zinc-600 hover:border-zinc-300"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <p className="text-sm text-zinc-500">Loading passcodes…</p>
        ) : error ? (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error.message}
          </div>
        ) : (
          <DataTableShell
            items={filteredItems}
            searchKeys={["code", "employeeName", "employeeEmail", "employeePhone", "batchId"]}
            searchPlaceholder="Code, employee, email, phone, or batch ID"
            entryLabel="passcodes"
            columns={["Created", "Code", "Employee", "Discount", "Status", "Used at"]}
          >
            {(rows) =>
              rows.length === 0 ? (
                <DataTableEmpty colSpan={6} message="No passcodes match this filter." />
              ) : (
                rows.map((row) => (
                  <DataTableRow key={row.id}>
                    <DataTableCell className="text-zinc-500">
                      {formatAdminDate(row.createdAt)}
                    </DataTableCell>
                    <DataTableCell>
                      <div className="flex items-center gap-2">
                        <code className="font-mono text-zinc-900">{row.code}</code>
                        <button
                          type="button"
                          onClick={() => void copyCode(row.code)}
                          className="text-xs font-medium text-zinc-400 hover:text-zinc-700"
                        >
                          Copy
                        </button>
                      </div>
                    </DataTableCell>
                    <DataTableCell>
                      <div className="font-medium text-zinc-900">{row.employeeName}</div>
                      <div className="text-xs text-zinc-500">{row.employeeEmail}</div>
                    </DataTableCell>
                    <DataTableCell>
                      {formatPasscodeDiscountLabel(row.discountType, row.discountValue)}
                    </DataTableCell>
                    <DataTableCell>
                      <StatusBadge variant={row.isUsed ? "neutral" : "success"}>
                        {row.isUsed ? "Used" : "Available"}
                      </StatusBadge>
                    </DataTableCell>
                    <DataTableCell className="text-zinc-500">
                      {row.usedAt ? formatAdminDate(row.usedAt) : "—"}
                    </DataTableCell>
                  </DataTableRow>
                ))
              )
            }
          </DataTableShell>
        )}
      </div>
    </div>
  );
}
