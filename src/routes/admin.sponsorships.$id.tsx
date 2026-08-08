import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { AdminEditableSection } from "@/components/admin/AdminEditableSection";
import {
  DetailField,
  DetailGrid,
  DetailSection,
  DetailTimestamp,
} from "@/components/admin/DetailView";
import { ExportCsvButton } from "@/components/admin/ExportCsvButton";
import { PaymentBadge, StatusBadge } from "@/components/admin/StatusBadge";
import { useSponsorship, useUpdateSponsorship } from "@/lib/admin-api";

export const Route = createFileRoute("/admin/sponsorships/$id")({
  component: SponsorshipDetailPage,
});

function SponsorshipDetailPage() {
  const { id } = Route.useParams();
  const { data, isLoading, error } = useSponsorship(id);
  const updateSponsorship = useUpdateSponsorship(id);

  if (isLoading) {
    return <p className="text-sm text-zinc-500">Loading sponsorship…</p>;
  }

  if (error || !data) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
        {error?.message ?? "Sponsorship not found."}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Link
            to="/admin/sponsorships"
            className="text-sm font-medium text-zinc-500 hover:text-zinc-900"
          >
            ← Back to sponsorships
          </Link>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900">
            {data.company}
          </h1>
          <p className="mt-1 text-sm text-zinc-500">
            Reference {data.referenceId ?? data.id}
          </p>
        </div>
        <ExportCsvButton filename={`sponsorship-${data.referenceId ?? data.id}`} rows={[data]} />
      </div>

      <DetailSection title="Overview">
        <DetailGrid>
          <DetailField label="Reference ID" value={data.referenceId} mono />
          <DetailField label="Tier" value={data.tierName} />
          <DetailField label="Tier ID" value={data.tierId} mono />
          <DetailField label="Spots" value={data.spots} />
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
              Payment
            </p>
            <div className="mt-1">
              <PaymentBadge paid={data.paymentPaid} />
            </div>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
              Status
            </p>
            <div className="mt-1">
              <StatusBadge
                variant={
                  data.status === "confirmed"
                    ? "success"
                    : data.status === "cancelled"
                      ? "error"
                      : "warning"
                }
              >
                {data.status}
              </StatusBadge>
            </div>
          </div>
          <DetailField label="Payment ID" value={data.paymentId} mono />
          <DetailTimestamp label="Submitted" value={data.createdAt} />
          <DetailTimestamp label="Last updated" value={data.updatedAt} />
        </DetailGrid>
      </DetailSection>

      <AdminEditableSection
        title="Contact & registration"
        saving={updateSponsorship.isPending}
        fields={[
          { key: "company", label: "Company", value: data.company },
          { key: "contactName", label: "Contact name", value: data.contactName },
          { key: "contactEmail", label: "Email", value: data.contactEmail, type: "email" },
          { key: "contactPhone", label: "Phone", value: data.contactPhone, type: "tel" },
          { key: "tierName", label: "Tier name", value: data.tierName },
          { key: "tierId", label: "Tier ID", value: data.tierId },
          {
            key: "status",
            label: "Status",
            value: data.status,
            type: "select",
            options: [
              { value: "pending", label: "Pending" },
              { value: "confirmed", label: "Confirmed" },
              { value: "cancelled", label: "Cancelled" },
            ],
          },
          { key: "message", label: "Message", value: data.message ?? "", type: "textarea" },
        ]}
        onSave={async (values) => {
          await updateSponsorship.mutateAsync({
            ...values,
            message: values.message || null,
          });
          toast.success("Sponsorship details saved.");
        }}
      >
        <DetailGrid>
          <DetailField label="Company" value={data.company} />
          <DetailField label="Contact name" value={data.contactName} />
          <DetailField label="Email" value={data.contactEmail} />
          <DetailField label="Phone" value={data.contactPhone} />
          <DetailField label="Message" value={data.message} />
        </DetailGrid>
      </AdminEditableSection>
    </div>
  );
}
