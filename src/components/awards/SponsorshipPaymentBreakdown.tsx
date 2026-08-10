import { paymentDetails } from "@/data/awards";
import type { SponsorshipPaymentPlan } from "@/lib/sponsorship-payment-plan";

function formatInr(amount: number) {
  return `₹ ${amount.toLocaleString("en-IN")}`;
}

type SponsorshipPaymentBreakdownProps = {
  plan: SponsorshipPaymentPlan;
};

export function SponsorshipPaymentBreakdown({ plan }: SponsorshipPaymentBreakdownProps) {
  const rows: { label: string; value: string; emphasis?: boolean }[] = [
    { label: "Sponsorship package", value: formatInr(plan.packageInr) },
    {
      label: `GST (${paymentDetails.gstRate}) on package`,
      value: formatInr(plan.packageGstInr),
    },
    { label: "Total commitment", value: formatInr(plan.committedTotalInr), emphasis: true },
  ];

  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-black/25">
      <div className="border-b border-white/10 px-4 py-3 md:px-5">
        <p className="text-xs font-semibold tracking-[0.18em] text-amber-500/90 uppercase">
          Payment breakdown
        </p>
      </div>

      <dl className="divide-y divide-white/5 px-4 md:px-5">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between gap-4 py-3 text-sm"
          >
            <dt className={row.emphasis ? "font-medium text-gray-200" : "text-gray-400"}>
              {row.label}
            </dt>
            <dd
              className={`shrink-0 tabular-nums ${
                row.emphasis ? "font-semibold text-foreground" : "font-medium text-gray-200"
              }`}
            >
              {row.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="border-t border-white/10 bg-amber-500/[0.04] px-4 py-4 md:px-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-foreground">Pay now via Razorpay</p>
            <p className="mt-1 text-xs text-gray-500">
              Incl. GST · max ₹5,00,000 online limit
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Taxable {formatInr(plan.razorpayBaseInr)} + GST {formatInr(plan.razorpayGstInr)}
            </p>
          </div>
          <p className="text-xl font-bold tabular-nums text-amber-400">
            {formatInr(plan.razorpayTotalInr)}
          </p>
        </div>
      </div>

      {plan.balanceTotalInr > 0 ? (
        <div className="border-t border-dashed border-white/10 bg-white/[0.02] px-4 py-4 md:px-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-gray-300">Balance via bank transfer</p>
              <p className="mt-1 text-xs leading-relaxed text-gray-500">
                Taxable {formatInr(plan.balanceBaseInr)} + GST {formatInr(plan.balanceGstInr)} ·
                due within {paymentDetails.balanceDueDays} days of the event
              </p>
            </div>
            <p className="shrink-0 text-base font-semibold tabular-nums text-gray-300">
              {formatInr(plan.balanceTotalInr)}
            </p>
          </div>
          <p className="mt-3 rounded-lg border border-sky-500/20 bg-sky-500/5 px-3 py-2.5 text-xs leading-relaxed text-sky-200/90">
            Our corporate relations team will contact you with bank transfer details and next steps
            after your Razorpay payment is confirmed.
          </p>
        </div>
      ) : null}
    </div>
  );
}
