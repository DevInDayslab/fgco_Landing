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
import { useSponsorships } from "@/lib/admin-api";

export const Route = createFileRoute("/admin/sponsorships/")({
  component: AdminSponsorships,
});

function AdminSponsorships() {
  const navigate = useNavigate();

  function openRow(id: string) {
    navigate({ to: "/admin/sponsorships/$id", params: { id } });
  }

  const { data, isLoading, error } = useSponsorships();

  if (isLoading) {
    return <p className="text-sm text-zinc-500">Loading sponsorships…</p>;
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
        title="Sponsorships"
        subtitle="Sponsorship registrations and payment status from the awards portal."
        actions={
          <ExportCsvButton filename="sponsorships" rows={items as Record<string, unknown>[]} />
        }
      />

      <DataTableShell
        items={items}
        searchKeys={["company", "contactName", "contactEmail", "tierName", "referenceId"]}
        searchPlaceholder="Company, contact, tier, or reference"
        entryLabel="registrations"
        columns={["Reference", "Company", "Tier", "Contact", "Payment", "Phone", "Submitted"]}
      >
        {(rows) =>
          rows.length === 0 ? (
            <DataTableEmpty colSpan={7} message="No sponsorship registrations yet." />
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
                  {row.company}
                </DataTableCell>
                <DataTableCell>{row.tierName}</DataTableCell>
                <DataTableCell>
                  <div className="font-semibold text-zinc-900">{row.contactName}</div>
                  <div className="text-xs text-zinc-500">{row.contactEmail}</div>
                </DataTableCell>
                <DataTableCell>
                  <PaymentBadge paid={row.paymentPaid} />
                </DataTableCell>
                <DataTableCell className="font-medium text-zinc-900">
                  {row.contactPhone}
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
