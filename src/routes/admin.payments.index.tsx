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

function paymentStatusVariant(status: string) {
  if (status === "paid") return "success" as const;
  if (status === "failed") return "error" as const;
  return "pending" as const;
}

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
        searchKeys={["razorpayOrderId", "razorpayPaymentId", "type", "status"]}
        searchPlaceholder="Order ID, payment ID, type, or status"
        entryLabel="payments"
        columns={["Order ID", "Payment ID", "Amount (INR)", "Status", "Type", "Date"]}
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
                <DataTableCell mono className="text-zinc-500">
                  {row.razorpayPaymentId ?? "—"}
                </DataTableCell>
                <DataTableCell className="font-semibold text-zinc-900">
                  ₹{Number(row.amountInr).toLocaleString("en-IN")}
                </DataTableCell>
                <DataTableCell>
                  <StatusBadge variant={paymentStatusVariant(row.status)}>
                    {row.status}
                  </StatusBadge>
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
