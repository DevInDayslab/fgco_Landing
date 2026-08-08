import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  DataTableCell,
  DataTableEmpty,
  DataTableRow,
  DataTableShell,
} from "@/components/admin/DataTable";
import { ExportCsvButton } from "@/components/admin/ExportCsvButton";
import { PageHeader } from "@/components/admin/PageHeader";
import { formatAdminDate } from "@/components/admin/admin-utils";
import { useInquiries } from "@/lib/admin-api";

export const Route = createFileRoute("/admin/inquiries/")({
  component: AdminInquiries,
});

function AdminInquiries() {
  const navigate = useNavigate();

  function openRow(id: string) {
    navigate({ to: "/admin/inquiries/$id", params: { id } });
  }

  const { data, isLoading, error } = useInquiries();

  if (isLoading) {
    return <p className="text-sm text-zinc-500">Loading inquiries…</p>;
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
        title="Inquiries"
        subtitle="Contact form submissions from the FG Media Group website."
        actions={
          <ExportCsvButton filename="inquiries" rows={items as Record<string, unknown>[]} />
        }
      />

      <DataTableShell
        items={items}
        searchKeys={["name", "email", "company", "inquiryType", "message"]}
        searchPlaceholder="Name, email, company, or message"
        entryLabel="inquiries"
        columns={["Submitted", "Name", "Email", "Type", "Message"]}
      >
        {(rows) =>
          rows.length === 0 ? (
            <DataTableEmpty colSpan={5} message="No inquiries yet." />
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
                <DataTableCell className="text-zinc-500">
                  {formatAdminDate(row.createdAt)}
                </DataTableCell>
                <DataTableCell className="font-semibold text-zinc-900">
                  {row.name}
                </DataTableCell>
                <DataTableCell>{row.email}</DataTableCell>
                <DataTableCell>{row.inquiryType ?? "—"}</DataTableCell>
                <DataTableCell className="max-w-md truncate text-zinc-600">
                  {row.message}
                </DataTableCell>
              </DataTableRow>
            ))
          )
        }
      </DataTableShell>
    </div>
  );
}
