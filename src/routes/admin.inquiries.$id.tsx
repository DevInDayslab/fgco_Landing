import { createFileRoute, Link } from "@tanstack/react-router";
import {
  DetailField,
  DetailGrid,
  DetailSection,
  DetailTimestamp,
} from "@/components/admin/DetailView";
import { ExportCsvButton } from "@/components/admin/ExportCsvButton";
import { useInquiry } from "@/lib/admin-api";

export const Route = createFileRoute("/admin/inquiries/$id")({
  component: InquiryDetailPage,
});

function InquiryDetailPage() {
  const { id } = Route.useParams();
  const { data, isLoading, error } = useInquiry(id);

  if (isLoading) {
    return <p className="text-sm text-zinc-500">Loading inquiry…</p>;
  }

  if (error || !data) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
        {error?.message ?? "Inquiry not found."}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Link
            to="/admin/inquiries"
            className="text-sm font-medium text-zinc-500 hover:text-zinc-900"
          >
            ← Back to inquiries
          </Link>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900">{data.name}</h1>
          <p className="mt-1 text-sm text-zinc-500">{data.email}</p>
        </div>
        <ExportCsvButton filename={`inquiry-${data.id}`} rows={[data]} />
      </div>

      <DetailSection title="Inquiry details">
        <DetailGrid>
          <DetailField label="Name" value={data.name} />
          <DetailField label="Email" value={data.email} />
          <DetailField label="Company" value={data.company} />
          <DetailField label="Inquiry type" value={data.inquiryType} />
          <DetailTimestamp label="Submitted" value={data.createdAt} />
        </DetailGrid>
        <div className="mt-4">
          <DetailField label="Message" value={data.message} />
        </div>
      </DetailSection>
    </div>
  );
}
