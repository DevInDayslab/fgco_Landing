import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  DataTableCell,
  DataTableEmpty,
  DataTableRow,
  DataTableShell,
} from "@/components/admin/DataTable";
import { ExportCsvButton } from "@/components/admin/ExportCsvButton";
import { PageHeader } from "@/components/admin/PageHeader";
import { PaymentBadge } from "@/components/admin/StatusBadge";
import { formatAdminDate } from "@/components/admin/admin-utils";
import { useSeatReservations } from "@/lib/admin-api";

export const Route = createFileRoute("/admin/seat-reservations/")({
  component: AdminSeatReservations,
});

function AdminSeatReservations() {
  const navigate = useNavigate();

  function openRow(id: string) {
    navigate({ to: "/admin/seat-reservations/$id", params: { id } });
  }

  const { data, isLoading, error } = useSeatReservations();

  if (isLoading) {
    return <p className="text-sm text-zinc-500">Loading reserved seats…</p>;
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
        title="Reserved Seats"
        subtitle="Ceremony seat reservations from the awards portal."
        actions={
          <ExportCsvButton filename="seat-reservations" rows={items as Record<string, unknown>[]} />
        }
      />

      <DataTableShell
        items={items}
        searchKeys={["fullName", "email", "phone", "organization", "city", "referenceId"]}
        searchPlaceholder="Name, email, phone, organization, or reference"
        entryLabel="reservations"
        columns={[
          "Reference",
          "Name",
          "Email",
          "Phone",
          "Organization",
          "City",
          "Payment",
          "Submitted",
        ]}
      >
        {(rows) =>
          rows.length === 0 ? (
            <DataTableEmpty colSpan={8} message="No seat reservations yet." />
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
                  {row.referenceId ?? "—"}
                </DataTableCell>
                <DataTableCell className="font-semibold text-zinc-900">
                  {row.fullName}
                </DataTableCell>
                <DataTableCell>{row.email}</DataTableCell>
                <DataTableCell>{row.phone}</DataTableCell>
                <DataTableCell>{row.organization ?? "—"}</DataTableCell>
                <DataTableCell>{row.city ?? "—"}</DataTableCell>
                <DataTableCell>
                  <PaymentBadge paid={row.paymentPaid} />
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
