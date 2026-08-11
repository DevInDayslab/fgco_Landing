import { createFileRoute, Link } from "@tanstack/react-router";
import {
  DetailField,
  DetailGrid,
  DetailSection,
  DetailTimestamp,
} from "@/components/admin/DetailView";
import { ExportCsvButton } from "@/components/admin/ExportCsvButton";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { usePayment } from "@/lib/admin-api";

export const Route = createFileRoute("/admin/payments/$id")({
  component: PaymentDetailPage,
});

function paymentStatusVariant(status: string) {
  if (status === "paid") return "success" as const;
  if (status === "failed") return "error" as const;
  return "pending" as const;
}

function PaymentDetailPage() {
  const { id } = Route.useParams();
  const { data, isLoading, error } = usePayment(id);

  if (isLoading) {
    return <p className="text-sm text-zinc-500">Loading payment…</p>;
  }

  if (error || !data) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
        {error?.message ?? "Payment not found."}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Link
            to="/admin/payments"
            className="text-sm font-medium text-zinc-500 hover:text-zinc-900"
          >
            ← Back to payments
          </Link>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900">
            ₹{Number(data.amountInr).toLocaleString("en-IN")}
          </h1>
          <p className="mt-1 text-sm text-zinc-500">{data.razorpayOrderId}</p>
        </div>
        <ExportCsvButton filename={`payment-${data.id}`} rows={[data]} />
      </div>

      <DetailSection title="Payment details">
        <DetailGrid>
          <DetailField label="Payment ID" value={data.id} mono />
          <DetailField label="Razorpay order ID" value={data.razorpayOrderId} mono />
          <DetailField label="Razorpay payment ID" value={data.razorpayPaymentId} mono />
          <DetailField label="Reference ID" value={data.referenceId} mono />
          <DetailField label="Payer name" value={data.contactName} />
          <DetailField label="Payer phone" value={data.contactPhone} />
          <DetailField label="Payer email" value={data.contactEmail} />
          <DetailField label="Company" value={data.company} />
          {data.type === "nomination" ? (
            <>
              <DetailField label="Nominee name" value={data.nomineeName} />
              <DetailField label="Nominee email" value={data.nomineeEmail} />
              <DetailField label="Category" value={data.category} />
            </>
          ) : null}
          {data.type === "sponsorship" ? (
            <DetailField label="Sponsorship tier" value={data.tierName} />
          ) : null}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
              Status
            </p>
            <div className="mt-1">
              <StatusBadge variant={paymentStatusVariant(data.status)}>{data.status}</StatusBadge>
            </div>
          </div>
          <DetailField label="Type" value={data.type} />
          <DetailField label="Currency" value={data.currency} />
          <DetailField label="Amount (INR)" value={`₹${Number(data.amountInr).toLocaleString("en-IN")}`} />
          <DetailField label="Amount (paise)" value={data.amountPaise} />
          <DetailField label="Base (INR)" value={`₹${Number(data.baseInr).toLocaleString("en-IN")}`} />
          <DetailField label="GST (INR)" value={`₹${Number(data.gstInr).toLocaleString("en-IN")}`} />
          <DetailTimestamp label="Created" value={data.createdAt} />
          <DetailTimestamp label="Last updated" value={data.updatedAt} />
        </DetailGrid>
        {data.metadata && (
          <div className="mt-4">
            <DetailField label="Metadata" value={data.metadata} />
          </div>
        )}
      </DetailSection>
    </div>
  );
}
