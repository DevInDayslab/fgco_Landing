import { useState } from "react";
import { toast } from "sonner";
import {
  errorClass,
  fieldClass,
  labelClass,
  primaryInlineButtonClass,
  secondaryButtonClass,
} from "@/components/awards/form-styles";
import { postPasscodesCheck, postPasscodesValidate } from "@/lib/api-client";
import { formatPasscodeDiscountLabel } from "@/lib/passcode-discount";

export type VerifiedPasscodeReferral = {
  code: string;
  employeeName: string;
  employeeEmail: string;
  employeePhone: string;
  discountType: "PERCENTAGE" | "FREE";
  discountValue: number;
};

type PasscodeReferralPanelProps = {
  onVerified: (referral: VerifiedPasscodeReferral) => void;
  onClear: () => void;
};

export function PasscodeReferralPanel({ onVerified, onClear }: PasscodeReferralPanelProps) {
  const [passcode, setPasscode] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeePhone, setEmployeePhone] = useState("");
  const [codeAccepted, setCodeAccepted] = useState(false);
  const [verifiedReferral, setVerifiedReferral] = useState<VerifiedPasscodeReferral | null>(null);
  const [checkingCode, setCheckingCode] = useState(false);
  const [verifyingReferral, setVerifyingReferral] = useState(false);

  async function handleApplyPasscode() {
    const trimmedCode = passcode.trim();
    if (!trimmedCode) {
      toast.error("Enter a referral passcode.");
      return;
    }

    setCheckingCode(true);
    try {
      await postPasscodesCheck({ code: trimmedCode });
      setCodeAccepted(true);
      setVerifiedReferral(null);
      onClear();
      toast.success("Passcode accepted. Enter the referring employee's details.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Invalid or used passcode");
    } finally {
      setCheckingCode(false);
    }
  }

  async function handleVerifyReferral() {
    const trimmedCode = passcode.trim();
    if (!trimmedCode || !employeeName.trim() || !employeeEmail.trim() || !employeePhone.trim()) {
      toast.error("Complete all employee referral fields.");
      return;
    }

    setVerifyingReferral(true);
    try {
      const result = await postPasscodesValidate({
        code: trimmedCode,
        employeeName: employeeName.trim(),
        employeeEmail: employeeEmail.trim(),
        employeePhone: employeePhone.trim(),
      });

      const referral: VerifiedPasscodeReferral = {
        code: trimmedCode.toUpperCase(),
        employeeName: employeeName.trim(),
        employeeEmail: employeeEmail.trim(),
        employeePhone: employeePhone.trim(),
        discountType: result.discountType,
        discountValue: result.discountValue,
      };

      setVerifiedReferral(referral);
      onVerified(referral);
      toast.success("Referral verified. Your discounted price is shown below.");
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Employee details do not match the referral passcode",
      );
    } finally {
      setVerifyingReferral(false);
    }
  }

  function handleReset() {
    setPasscode("");
    setEmployeeName("");
    setEmployeeEmail("");
    setEmployeePhone("");
    setCodeAccepted(false);
    setVerifiedReferral(null);
    onClear();
  }

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 md:p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-gold">Referral passcode</p>
      <p className="mt-1 text-xs text-gray-400">
        Have a passcode from an FG employee? Apply it here to unlock the referral fields and
        discounted pricing.
      </p>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={passcode}
          onChange={(event) => setPasscode(event.target.value.toUpperCase())}
          placeholder="HIT-XXXX-XXXX"
          disabled={codeAccepted || Boolean(verifiedReferral)}
          className={fieldClass}
        />
        {!codeAccepted && !verifiedReferral ? (
          <button
            type="button"
            onClick={handleApplyPasscode}
            disabled={checkingCode}
            className={`${primaryInlineButtonClass} shrink-0`}
          >
            {checkingCode ? "Checking..." : "Apply passcode"}
          </button>
        ) : (
          <button type="button" onClick={handleReset} className={`${secondaryButtonClass} shrink-0`}>
            Remove passcode
          </button>
        )}
      </div>

      {codeAccepted && !verifiedReferral && (
        <div className="mt-5 space-y-4 border-t border-white/10 pt-5">
          <p className="text-sm text-gray-300">
            Enter the referring employee&apos;s details exactly as shared with you.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="referralEmployeeName">
                Employee name *
              </label>
              <input
                id="referralEmployeeName"
                type="text"
                value={employeeName}
                onChange={(event) => setEmployeeName(event.target.value)}
                placeholder="Full name"
                className={fieldClass}
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="referralEmployeeEmail">
                Employee email *
              </label>
              <input
                id="referralEmployeeEmail"
                type="email"
                value={employeeEmail}
                onChange={(event) => setEmployeeEmail(event.target.value)}
                placeholder="name@fgco.in"
                className={fieldClass}
              />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass} htmlFor="referralEmployeePhone">
                Employee phone *
              </label>
              <input
                id="referralEmployeePhone"
                type="tel"
                inputMode="tel"
                value={employeePhone}
                onChange={(event) => setEmployeePhone(event.target.value)}
                placeholder="+91 00000 00000"
                className={fieldClass}
              />
            </div>
          </div>
          <button
            type="button"
            onClick={handleVerifyReferral}
            disabled={verifyingReferral}
            className={primaryInlineButtonClass}
          >
            {verifyingReferral ? "Verifying..." : "Verify referral & apply discount"}
          </button>
        </div>
      )}

      {verifiedReferral && (
        <p className={`mt-4 text-sm text-emerald-400`}>
          Referral applied: {formatPasscodeDiscountLabel(
            verifiedReferral.discountType,
            verifiedReferral.discountValue,
          )}
        </p>
      )}
    </div>
  );
}
