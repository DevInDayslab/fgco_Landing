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
import { useNominations, type NominationRow } from "@/lib/admin-api";

export const Route = createFileRoute("/admin/nominations/")({
  component: AdminNominations,
});

function formatStatus(status: NominationRow["status"]) {
  switch (status) {
    case "referral_pending":
      return "Referral pending";
    case "under_review":
      return "Under review";
    case "pending_payment":
      return "Pending payment";
    case "paid":
      return "Paid";
    case "draft":
      return "Draft";
    default:
      return status;
  }
}

function AdminNominations() {
  const navigate = useNavigate();

  function openRow(id: string) {
    navigate({ to: "/admin/nominations/$id", params: { id } });
  }

  const { data, isLoading, error } = useNominations();

  if (isLoading) {
    return <p className="text-sm text-zinc-500">Loading nominations…</p>;
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
        title="Nominations"
        subtitle="Award nomination submissions from the HIT ViERA portal."
        actions={
          <ExportCsvButton filename="nominations" rows={items as Record<string, unknown>[]} />
        }
      />

      <DataTableShell
        items={items}
        searchKeys={[
          "nomineeName",
          "nominatorName",
          "nominatorEmail",
          "category",
          "referenceId",
          "status",
        ]}
        searchPlaceholder="Name, email, category, or reference"
        entryLabel="nominations"
        columns={[
          "Reference",
          "Nominee",
          "Nominator",
          "Category",
          "Status",
          "Payment",
          "Invite sent",
          "Submitted",
        ]}
      >
        {(rows) =>
          rows.length === 0 ? (
            <DataTableEmpty colSpan={8} message="No nominations yet." />
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
                  {row.nomineeName}
                </DataTableCell>
                <DataTableCell>
                  <div className="font-semibold text-zinc-900">{row.nominatorName}</div>
                  <div className="text-xs text-zinc-500">{row.nominatorEmail}</div>
                </DataTableCell>
                <DataTableCell>{row.category}</DataTableCell>
                <DataTableCell>
                  <span className="text-sm text-zinc-800">{formatStatus(row.status)}</span>
                </DataTableCell>
                <DataTableCell>
                  <PaymentBadge paid={row.paymentPaid} />
                </DataTableCell>
                <DataTableCell className="text-zinc-500">
                  {row.inviteSentAt ? formatAdminDate(row.inviteSentAt) : "Not sent"}
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
