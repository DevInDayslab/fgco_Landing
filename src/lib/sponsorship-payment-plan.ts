import { paymentDetails } from "@/data/awards";
import type { SponsorshipTierId } from "@/data/awards";

const GST_RATE = Number.parseFloat(paymentDetails.gstRate) / 100;

/** Razorpay per-order limit — online sponsorship payment is capped at this amount incl. GST. */
export const RAZORPAY_SPONSORSHIP_MAX_INR = 500_000;

export type SponsorshipPaymentPlan = {
  tierId: SponsorshipTierId;
  packageInr: number;
  packageGstInr: number;
  committedTotalInr: number;
  razorpayBaseInr: number;
  razorpayGstInr: number;
  razorpayTotalInr: number;
  balanceBaseInr: number;
  balanceGstInr: number;
  balanceTotalInr: number;
};

function splitInrInclGst(totalInclGst: number) {
  const baseInr = Math.round(totalInclGst / (1 + GST_RATE));
  const gstInr = totalInclGst - baseInr;
  return { baseInr, gstInr, totalInr: totalInclGst };
}

export function getSponsorshipPaymentPlan(
  tierId: SponsorshipTierId,
  packageInr: number,
): SponsorshipPaymentPlan {
  const packageGstInr = Math.round(packageInr * GST_RATE);
  const committedTotalInr = packageInr + packageGstInr;

  const razorpay = splitInrInclGst(RAZORPAY_SPONSORSHIP_MAX_INR);
  const balanceTotalInr = committedTotalInr - RAZORPAY_SPONSORSHIP_MAX_INR;
  const balance = splitInrInclGst(balanceTotalInr);

  return {
    tierId,
    packageInr,
    packageGstInr,
    committedTotalInr,
    razorpayBaseInr: razorpay.baseInr,
    razorpayGstInr: razorpay.gstInr,
    razorpayTotalInr: razorpay.totalInr,
    balanceBaseInr: balance.baseInr,
    balanceGstInr: balance.gstInr,
    balanceTotalInr: balance.totalInr,
  };
}
