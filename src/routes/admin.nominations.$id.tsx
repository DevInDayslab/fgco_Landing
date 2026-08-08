import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { AdminAttachmentEditor } from "@/components/admin/AdminAttachmentEditor";
import { AdminEditableSection } from "@/components/admin/AdminEditableSection";
import {
  DetailField,
  DetailGrid,
  DetailSection,
  DetailTimestamp,
} from "@/components/admin/DetailView";
import { ExportCsvButton } from "@/components/admin/ExportCsvButton";
import { PaymentBadge } from "@/components/admin/StatusBadge";
import {
  useMarkNominationPaid,
  useNomination,
  useResendCompletionInvite,
  useSendNominationInvite,
  useUpdateNomination,
} from "@/lib/admin-api";
import { formatAdminDate } from "@/components/admin/admin-utils";

export const Route = createFileRoute("/admin/nominations/$id")({
  component: NominationDetailPage,
});

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
  const sendInvite = useSendNominationInvite();
  const resendCompletion = useResendCompletionInvite();
  const updateNomination = useUpdateNomination(id);

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
      : {};

  const profileMeta =
    attachments.profilePhoto && typeof attachments.profilePhoto === "object"
      ? attachments.profilePhoto
      : { key: data.profilePhotoKey };
  const docsMeta =
    attachments.supportingDocs && typeof attachments.supportingDocs === "object"
      ? attachments.supportingDocs
      : { key: data.supportingDocsKey };
  const videoMeta =
    attachments.videoFile && typeof attachments.videoFile === "object"
      ? attachments.videoFile
      : { key: data.videoKey };

  const nomineeEmail =
    data.nomineeEmail ||
    (typeof formData["nomineeEmail"] === "string" ? formData["nomineeEmail"] : "");
  const nomineePhone =
    typeof formData["nomineePhone"] === "string" ? formData["nomineePhone"] : "";
  const nomineeLocation =
    typeof formData["nomineeLocation"] === "string" ? formData["nomineeLocation"] : "";
  const relationship =
    typeof formData["relationship"] === "string" ? formData["relationship"] : "";
  const publications = Array.isArray(formData["publications"])
    ? (formData["publications"] as unknown[]).filter((v): v is string => typeof v === "string")
    : [];
  const executiveSummary =
    typeof formData["executiveSummary"] === "string" ? formData["executiveSummary"] : "";
  const achievement = typeof formData["achievement"] === "string" ? formData["achievement"] : "";
  const impact = typeof formData["impact"] === "string" ? formData["impact"] : "";
  const futureGoals = typeof formData["futureGoals"] === "string" ? formData["futureGoals"] : "";
  const hasApplicationNarrative = Boolean(
    executiveSummary || achievement || impact || futureGoals,
  );

  async function saveAttachment(
    slot: "profilePhoto" | "supportingDocs" | "videoFile",
    keyField: "profilePhotoKey" | "supportingDocsKey" | "videoKey",
    key: string,
    meta: AttachmentMeta,
  ) {
    await updateNomination.mutateAsync({
      [keyField]: key,
      formData: {
        attachments: {
          ...attachments,
          [slot]: meta,
        },
      },
    });
    toast.success("Attachment updated.");
  }

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
          {data.status === "referral_pending" && (
            <button
              type="button"
              disabled={resendCompletion.isPending || !nomineeEmail}
              onClick={() => {
                resendCompletion.mutate(data.id, {
                  onSuccess: (result) => {
                    if (result.sent) toast.success("Completion invitation resent to nominee.");
                    else toast.error("Invite could not be sent. Check SMTP configuration.");
                  },
                  onError: (err) => toast.error(err.message),
                });
              }}
              className="rounded-lg border border-sky-200 bg-sky-50 px-3.5 py-2 text-sm font-medium text-sky-800 hover:bg-sky-100 disabled:opacity-50"
            >
              {resendCompletion.isPending ? "Sending…" : "Resend completion email"}
            </button>
          )}
          <button
            type="button"
            disabled={sendInvite.isPending || !nomineeEmail}
            onClick={() => {
              sendInvite.mutate(data.id, {
                onSuccess: (result) => {
                  if (result.sent) toast.success("Formal invitation sent to nominee.");
                  else toast.error("Invite could not be sent. Check SMTP configuration.");
                },
                onError: (err) => toast.error(err.message),
              });
            }}
            className="rounded-lg border border-amber-200 bg-amber-50 px-3.5 py-2 text-sm font-medium text-amber-800 hover:bg-amber-100 disabled:opacity-50"
          >
            {sendInvite.isPending ? "Sending…" : "Approve & Send Formal Invite"}
          </button>
          <p className="w-full text-xs text-zinc-500">
            {data.status === "referral_pending"
              ? "Resend completion email re-sends the secure token link so the nominee can upload documents and pay."
              : "Sends the Official Nominee Communication (CEO letter) to the nominee's email."}
          </p>
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
          <DetailField
            label="Invite sent"
            value={data.inviteSentAt ? formatAdminDate(data.inviteSentAt) : "Not sent"}
          />
          <DetailField
            label="Completion link"
            value={
              data.status === "referral_pending"
                ? data.completionTokenActive
                  ? "Active"
                  : "Missing"
                : "—"
            }
          />
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

      <AdminEditableSection
        title="Nominator"
        saving={updateNomination.isPending}
        fields={[
          { key: "nominatorName", label: "Name", value: data.nominatorName },
          { key: "nominatorEmail", label: "Email", value: data.nominatorEmail, type: "email" },
          { key: "nominatorPhone", label: "Phone", value: data.nominatorPhone, type: "tel" },
        ]}
        onSave={async (values) => {
          await updateNomination.mutateAsync(values);
          toast.success("Nominator details saved.");
        }}
      >
        <DetailGrid>
          <DetailField label="Name" value={data.nominatorName} />
          <DetailField label="Email" value={data.nominatorEmail} />
          <DetailField label="Phone" value={data.nominatorPhone} />
        </DetailGrid>
      </AdminEditableSection>

      <AdminEditableSection
        title="Nominee"
        saving={updateNomination.isPending}
        fields={[
          { key: "nomineeName", label: "Name", value: data.nomineeName },
          { key: "category", label: "Category", value: data.category },
          { key: "nomineeEmail", label: "Email", value: nomineeEmail, type: "email" },
          { key: "nomineePhone", label: "Phone", value: nomineePhone, type: "tel" },
          { key: "nomineeLocation", label: "Location", value: nomineeLocation },
          {
            key: "status",
            label: "Status",
            value: data.status,
            type: "select",
            options: [
              { value: "draft", label: "Draft" },
              { value: "pending_payment", label: "Pending payment" },
              { value: "paid", label: "Paid" },
              { value: "under_review", label: "Under review" },
              { value: "referral_pending", label: "Referral pending" },
            ],
          },
          {
            key: "reviewStatus",
            label: "Review status",
            value: data.reviewStatus,
            type: "select",
            options: [
              { value: "pending", label: "Pending" },
              { value: "approved", label: "Approved" },
            ],
          },
        ]}
        onSave={async (values) => {
          const { nomineeEmail: email, nomineePhone: phone, nomineeLocation: location, ...top } =
            values;
          await updateNomination.mutateAsync({
            nomineeName: top.nomineeName,
            category: top.category,
            status: top.status,
            reviewStatus: top.reviewStatus,
            nomineeEmail: email,
            formData: { nomineeEmail: email, nomineePhone: phone, nomineeLocation: location },
          });
          toast.success("Nominee details saved.");
        }}
      >
        <DetailGrid>
          <DetailField label="Name" value={data.nomineeName} />
          <DetailField label="Category" value={data.category} />
          <DetailField label="Email" value={nomineeEmail} />
          <DetailField label="Phone" value={nomineePhone} />
          <DetailField label="Location" value={nomineeLocation} />
        </DetailGrid>
      </AdminEditableSection>

      {hasApplicationNarrative ? (
        <DetailSection title="Application answers">
          <div className="space-y-7">
            {relationship ? (
              <DetailField prominent label="Relationship" value={relationship} />
            ) : null}
            {publications.length > 0 ? (
              <DetailField
                prominent
                label="Preferred publications"
                value={publications.join(", ")}
              />
            ) : null}
            <DetailField prominent label="Executive summary" value={executiveSummary || "—"} />
            <DetailField prominent label="Achievement" value={achievement || "—"} />
            <DetailField prominent label="Impact & outcomes" value={impact || "—"} />
            <DetailField prominent label="Future goals & vision" value={futureGoals || "—"} />
          </div>
        </DetailSection>
      ) : data.status === "referral_pending" ? (
        <DetailSection title="Application answers">
          <div className="space-y-7">
            {relationship ? (
              <DetailField prominent label="Relationship" value={relationship} />
            ) : null}
            {publications.length > 0 ? (
              <DetailField
                prominent
                label="Preferred publications"
                value={publications.join(", ")}
              />
            ) : null}
            <p className="text-sm text-zinc-500">
              Waiting for the nominee to complete their profile, justification, and uploads.
            </p>
          </div>
        </DetailSection>
      ) : null}

      <DetailSection title="Attachments">
        <div className="grid gap-6 md:grid-cols-3">
          <AdminAttachmentEditor
            label="Profile photo"
            purpose="profile"
            keyValue={data.profilePhotoKey ?? profileMeta?.key}
            meta={profileMeta}
            accept="image/jpeg,image/png,image/webp"
            onUploaded={(key, meta) => void saveAttachment("profilePhoto", "profilePhotoKey", key, meta)}
          />
          <AdminAttachmentEditor
            label="Supporting documents"
            purpose="document"
            keyValue={data.supportingDocsKey ?? docsMeta?.key}
            meta={docsMeta}
            accept=".pdf,.doc,.docx,image/jpeg,image/png,image/webp"
            onUploaded={(key, meta) =>
              void saveAttachment("supportingDocs", "supportingDocsKey", key, meta)
            }
          />
          <AdminAttachmentEditor
            label="Video"
            purpose="video"
            keyValue={data.videoKey ?? videoMeta?.key}
            meta={videoMeta}
            accept="video/mp4,video/quicktime,video/webm"
            onUploaded={(key, meta) => void saveAttachment("videoFile", "videoKey", key, meta)}
          />
        </div>
      </DetailSection>
    </div>
  );
}
