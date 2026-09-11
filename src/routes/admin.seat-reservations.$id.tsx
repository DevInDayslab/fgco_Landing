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
import { useSeatReservation, useUpdateSeatReservation } from "@/lib/admin-api";

export const Route = createFileRoute("/admin/seat-reservations/$id")({
  component: SeatReservationDetailPage,
});

function SeatReservationDetailPage() {
  const { id } = Route.useParams();
  const { data, isLoading, error } = useSeatReservation(id);
  const updateSeatReservation = useUpdateSeatReservation(id);

  if (isLoading) {
    return <p className="text-sm text-zinc-500">Loading seat reservation…</p>;
  }

  if (error || !data) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
        {error?.message ?? "Seat reservation not found."}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Link
            to="/admin/seat-reservations"
            className="text-sm font-medium text-zinc-500 hover:text-zinc-900"
          >
            ← Back to reserved seats
          </Link>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900">
            {data.fullName}
          </h1>
          <p className="mt-1 text-sm text-zinc-500">
            Reference {data.referenceId ?? data.id}
          </p>
        </div>
        <ExportCsvButton
          filename={`seat-reservation-${data.referenceId ?? data.id}`}
          rows={[data]}
        />
      </div>

      <DetailSection title="Overview">
        <DetailGrid>
          <DetailField label="Reference ID" value={data.referenceId} mono />
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

      {data.paymentRecord ? (
        <DetailSection title="Payment">
          <DetailGrid>
            <DetailField
              label="Razorpay order ID"
              value={data.paymentRecord.razorpayOrderId}
              mono
            />
            <DetailField
              label="Razorpay payment ID"
              value={data.paymentRecord.razorpayPaymentId}
              mono
            />
            <DetailField label="Payment record status" value={data.paymentRecord.status} />
            <DetailField
              label="Amount paid"
              value={`₹${data.paymentRecord.amountInr.toLocaleString("en-IN")}`}
            />
            <DetailTimestamp label="Payment created" value={data.paymentRecord.createdAt} />
          </DetailGrid>
        </DetailSection>
      ) : null}

      <AdminEditableSection
        title="Attendee details"
        saving={updateSeatReservation.isPending}
        fields={[
          { key: "fullName", label: "Full name", value: data.fullName },
          { key: "email", label: "Email", value: data.email, type: "email" },
          { key: "phone", label: "Phone", value: data.phone, type: "tel" },
          { key: "organization", label: "Organization", value: data.organization ?? "" },
          { key: "city", label: "City", value: data.city ?? "" },
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
        ]}
        onSave={async (values) => {
          await updateSeatReservation.mutateAsync({
            ...values,
            organization: values.organization || null,
            city: values.city || null,
          });
          toast.success("Seat reservation details saved.");
        }}
      >
        <DetailGrid>
          <DetailField label="Full name" value={data.fullName} />
          <DetailField label="Email" value={data.email} />
          <DetailField label="Phone" value={data.phone} />
          <DetailField label="Organization" value={data.organization} />
          <DetailField label="City" value={data.city} />
        </DetailGrid>
      </AdminEditableSection>
    </div>
  );
}
