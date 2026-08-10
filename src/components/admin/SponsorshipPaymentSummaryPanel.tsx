import { Link } from "@tanstack/react-router";
import type { SponsorshipAdminPaymentSummary } from "@/lib/admin-api";

function formatInr(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

type SponsorshipPaymentSummaryPanelProps = {
  payment: SponsorshipAdminPaymentSummary;
  paymentId?: string | null;
  paymentPaid?: boolean;
  compact?: boolean;
};

export function SponsorshipPaymentSummaryPanel({
  payment,
  paymentId,
  paymentPaid,
  compact = false,
}: SponsorshipPaymentSummaryPanelProps) {
  const rows = [
    { label: "Sponsorship package (ex-GST)", value: formatInr(payment.packageInr) },
    { label: "GST on package (18%)", value: formatInr(payment.packageGstInr) },
    { label: "Total commitment (incl. GST)", value: formatInr(payment.committedTotalInr), strong: true },
    { label: "Razorpay due (incl. GST)", value: formatInr(payment.razorpayTotalInr) },
    {
      label: "Razorpay taxable + GST",
      value: `${formatInr(payment.razorpayBaseInr)} + ${formatInr(payment.razorpayGstInr)}`,
      muted: true,
    },
    {
      label: paymentPaid ? "Paid via Razorpay" : "Pending — Razorpay",
      value: paymentPaid
        ? formatInr(payment.paidViaRazorpayInr)
        : formatInr(payment.razorpayPendingInr),
      highlight: paymentPaid ? "paid" : "pending",
    },
    {
      label: "Balance — bank transfer (incl. GST)",
      value: formatInr(payment.balanceTotalInr),
      sub: `${formatInr(payment.balanceBaseInr)} + ${formatInr(payment.balanceGstInr)} GST`,
    },
    {
      label: "Total outstanding",
      value: formatInr(payment.totalOutstandingInr),
      strong: true,
    },
  ] as const;

  if (compact) {
    return (
      <div className="text-xs text-zinc-600">
        <div className="font-semibold text-zinc-900">{formatInr(payment.committedTotalInr)} committed</div>
        <div className={paymentPaid ? "text-emerald-700" : "text-amber-700"}>
          {paymentPaid
            ? `${formatInr(payment.paidViaRazorpayInr)} paid`
            : `${formatInr(payment.razorpayPendingInr)} Razorpay pending`}
        </div>
        <div className="text-zinc-500">{formatInr(payment.balanceTotalInr)} balance (bank)</div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50">
      <div className="border-b border-zinc-200 bg-white px-4 py-3">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
          Payment breakdown
        </p>
      </div>
      <dl className="divide-y divide-zinc-200">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-start justify-between gap-4 bg-white px-4 py-3 text-sm"
          >
            <dt className={`${row.muted ? "text-zinc-400" : "text-zinc-600"}`}>{row.label}</dt>
            <dd className="text-right">
              <span
                className={`tabular-nums ${
                  row.strong
                    ? "font-semibold text-zinc-900"
                    : row.highlight === "paid"
                      ? "font-semibold text-emerald-700"
                      : row.highlight === "pending"
                        ? "font-semibold text-amber-700"
                        : "font-medium text-zinc-900"
                }`}
              >
                {row.value}
              </span>
              {"sub" in row && row.sub ? (
                <p className="mt-0.5 text-xs text-zinc-400">{row.sub}</p>
              ) : null}
            </dd>
          </div>
        ))}
      </dl>
      {(payment.razorpayPaymentId || paymentId) && (
        <div className="border-t border-zinc-200 bg-zinc-50 px-4 py-3 text-xs text-zinc-500">
          {payment.razorpayPaymentId ? (
            <p>
              Razorpay payment ID:{" "}
              <span className="font-mono text-zinc-700">{payment.razorpayPaymentId}</span>
            </p>
          ) : null}
          {paymentId ? (
            <p className="mt-1">
              <Link
                to="/admin/payments/$id"
                params={{ id: paymentId }}
                className="font-medium text-amber-700 hover:underline"
              >
                View payment record →
              </Link>
            </p>
          ) : null}
        </div>
      )}
    </div>
  );
}
