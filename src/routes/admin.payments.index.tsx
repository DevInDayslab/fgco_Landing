import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  DataTableCell,
  DataTableEmpty,
  DataTableRow,
  DataTableShell,
} from "@/components/admin/DataTable";
import { ExportCsvButton } from "@/components/admin/ExportCsvButton";
import { PageHeader } from "@/components/admin/PageHeader";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { formatAdminDate } from "@/components/admin/admin-utils";
import { usePayments } from "@/lib/admin-api";

export const Route = createFileRoute("/admin/payments/")({
  component: AdminPayments,
});

function AdminPayments() {
  const navigate = useNavigate();

  function openRow(id: string) {
    navigate({ to: "/admin/payments/$id", params: { id } });
  }

  const { data, isLoading, error } = usePayments();

  if (isLoading) {
    return <p className="text-sm text-zinc-500">Loading payments…</p>;
  }

  if (error) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
        {error.message}
      </div>
    );
  }

  const items = data?.items ?? [];

  return (
    <div>
      <PageHeader
        title="Payments"
        subtitle="Razorpay transactions for nominations and sponsorship advance payments."
        actions={
          <ExportCsvButton filename="payments" rows={items as Record<string, unknown>[]} />
        }
      />

      <DataTableShell
        items={items}
        searchKeys={[
          "razorpayOrderId",
          "razorpayPaymentId",
          "type",
          "contactName",
          "contactPhone",
          "contactEmail",
          "company",
        ]}
        searchPlaceholder="Order ID, payer name, phone, or company"
        entryLabel="payments"
        columns={["Order ID", "Payer", "Phone", "Amount (INR)", "Type", "Date"]}
      >
        {(rows) =>
          rows.length === 0 ? (
            <DataTableEmpty colSpan={6} message="No payments yet." />
          ) : (
            rows.map((row) => (
              <DataTableRow
                key={row.id}
                onClick={() => openRow(row.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openRow(row.id);
                  }
                }}
              >
                <DataTableCell mono className="text-zinc-500">
                  {row.razorpayOrderId}
                </DataTableCell>
                <DataTableCell>
                  <div className="font-semibold text-zinc-900">
                    {row.payerLabel ?? row.contactName ?? row.company ?? "—"}
                  </div>
                  <div className="text-xs text-zinc-500">
                    {row.contactEmail ?? row.contactPhone ?? ""}
                  </div>
                </DataTableCell>
                <DataTableCell className="font-medium text-zinc-900">
                  {row.contactPhone ?? "—"}
                </DataTableCell>
                <DataTableCell className="font-semibold text-zinc-900">
                  ₹{Number(row.amountInr).toLocaleString("en-IN")}
                </DataTableCell>
                <DataTableCell>
                  <StatusBadge variant="neutral">{row.type}</StatusBadge>
                </DataTableCell>
                <DataTableCell className="text-zinc-500">
                  {formatAdminDate(row.createdAt)}
                </DataTableCell>
              </DataTableRow>
            ))
          )
        }
      </DataTableShell>
    </div>
  );
}
