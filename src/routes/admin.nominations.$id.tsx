import { createFileRoute, Link } from "@tanstack/react-router";
import { AdminFileAttachment } from "@/components/admin/AdminFileAttachment";
import {
  DetailField,
  DetailGrid,
  DetailSection,
  DetailTimestamp,
} from "@/components/admin/DetailView";
import { ExportCsvButton } from "@/components/admin/ExportCsvButton";
import { PaymentBadge } from "@/components/admin/StatusBadge";
import { useMarkNominationPaid, useNomination } from "@/lib/admin-api";

export const Route = createFileRoute("/admin/nominations/$id")({
  component: NominationDetailPage,
});

function humanizeKey(key: string) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/_/g, " ")
    .replace(/^./, (s) => s.toUpperCase())
    .trim();
}

type AttachmentMeta = {
  key?: string | null;
  originalName?: string | null;
  contentType?: string | null;
  size?: number | null;
  originalSize?: number | null;
  compressed?: boolean | null;
  publicUrl?: string | null;
};

function NominationDetailPage() {
  const { id } = Route.useParams();
  const { data, isLoading, error } = useNomination(id);
  const markPaid = useMarkNominationPaid();

  if (isLoading) {
    return <p className="text-sm text-zinc-500">Loading nomination…</p>;
  }

  if (error || !data) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
        {error?.message ?? "Nomination not found."}
      </div>
    );
  }

  const formData = data.formData ?? {};
  const attachments =
    formData.attachments && typeof formData.attachments === "object"
      ? (formData.attachments as Record<string, AttachmentMeta | string | null>)
      : null;

  const profileMeta =
    attachments?.profilePhoto && typeof attachments.profilePhoto === "object"
      ? attachments.profilePhoto
      : { originalName: attachments?.profilePhoto as string | undefined, key: data.profilePhotoKey };
  const docsMeta =
    attachments?.supportingDocs && typeof attachments.supportingDocs === "object"
      ? attachments.supportingDocs
      : { originalName: attachments?.supportingDocs as string | undefined, key: data.supportingDocsKey };
  const videoMeta =
    attachments?.videoFile && typeof attachments.videoFile === "object"
      ? attachments.videoFile
      : { originalName: attachments?.videoFile as string | undefined, key: data.videoKey };

  const formFields = Object.entries(formData).filter(([key]) => key !== "attachments");

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Link
            to="/admin/nominations"
            className="text-sm font-medium text-zinc-500 hover:text-zinc-900"
          >
            ← Back to nominations
          </Link>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900">
            {data.nomineeName}
          </h1>
          <p className="mt-1 text-sm text-zinc-500">
            Reference {data.referenceId ?? data.id}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <ExportCsvButton filename={`nomination-${data.referenceId ?? data.id}`} rows={[data]} />
          {!data.paymentPaid && (
            <button
              type="button"
              disabled={markPaid.isPending}
              onClick={() => markPaid.mutate(data.id)}
              className="rounded-lg border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-100 disabled:opacity-50"
            >
              Mark paid
            </button>
          )}
        </div>
      </div>

      <DetailSection title="Overview">
        <DetailGrid>
          <DetailField label="Reference ID" value={data.referenceId} mono />
          <DetailField label="Category" value={data.category} />
          <DetailField label="Status" value={data.status} />
          <DetailField label="Review status" value={data.reviewStatus} />
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
              Payment
            </p>
            <div className="mt-1">
              <PaymentBadge paid={data.paymentPaid} />
            </div>
          </div>
          <DetailField label="Payment ID" value={data.paymentId} mono />
          <DetailTimestamp label="Submitted" value={data.createdAt} />
          <DetailTimestamp label="Last updated" value={data.updatedAt} />
        </DetailGrid>
      </DetailSection>

      <DetailSection title="Nominator">
        <DetailGrid>
          <DetailField label="Name" value={data.nominatorName} />
          <DetailField label="Email" value={data.nominatorEmail} />
          <DetailField label="Phone" value={data.nominatorPhone} />
        </DetailGrid>
      </DetailSection>

      <DetailSection title="Nominee">
        <DetailGrid>
          <DetailField label="Name" value={data.nomineeName} />
        </DetailGrid>
      </DetailSection>

      {formFields.length > 0 && (
        <DetailSection title="Form details">
          <DetailGrid>
            {formFields.map(([key, value]) => (
              <DetailField key={key} label={humanizeKey(key)} value={value} />
            ))}
          </DetailGrid>
        </DetailSection>
      )}

      <DetailSection title="Attachments">
        <div className="grid gap-4 md:grid-cols-3">
          <AdminFileAttachment
            label="Profile photo"
            keyValue={data.profilePhotoKey ?? profileMeta?.key}
            meta={profileMeta}
          />
          <AdminFileAttachment
            label="Supporting documents"
            keyValue={data.supportingDocsKey ?? docsMeta?.key}
            meta={docsMeta}
          />
          <AdminFileAttachment
            label="Video"
            keyValue={data.videoKey ?? videoMeta?.key}
            meta={videoMeta}
          />
        </div>
      </DetailSection>
    </div>
  );
}
