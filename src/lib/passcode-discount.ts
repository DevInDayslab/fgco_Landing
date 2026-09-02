export type PasscodeDiscountType = "PERCENTAGE" | "FREE";

export function applyPasscodeDiscountToInr(
  totalInr: number,
  discountType: PasscodeDiscountType,
  discountValue: number,
): number {
  if (discountType === "FREE") {
    return 0;
  }

  const discountInr = Math.round((totalInr * discountValue) / 100);
  return Math.max(0, totalInr - discountInr);
}

export function formatPasscodeDiscountLabel(
  discountType: PasscodeDiscountType,
  discountValue: number,
): string {
  if (discountType === "FREE") {
    return "100% off (referral passcode)";
  }

  return `${discountValue}% off (referral passcode)`;
}
