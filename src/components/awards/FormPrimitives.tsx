import type { ReactNode } from "react";
import { formPanelClass, stepBadgeClass } from "@/components/awards/form-styles";

export function FormSectionHeader({
  step,
  title,
}: {
  step?: number;
  title: string;
}) {
  return (
    <h3 className="mb-6 flex items-center border-b border-gray-800 pb-2 text-lg font-bold text-foreground md:text-xl">
      {step != null && <span className={stepBadgeClass}>{step}</span>}
      {title}
    </h3>
  );
}

export function FormSuccessState({
  title,
  message,
  confirmationEmails,
  emailNotices,
  referenceId,
}: {
  title: string;
  message: string;
  confirmationEmails?: string | string[];
  emailNotices?: Array<{ label: string; email: string }>;
  referenceId?: string;
}) {
  const notices =
    emailNotices?.filter((notice) => notice.email.trim()) ??
    (confirmationEmails
      ? (Array.isArray(confirmationEmails) ? confirmationEmails : [confirmationEmails])
          .filter(Boolean)
          .map((email) => ({ label: "Confirmation email", email }))
      : []);

  return (
    <div className="flex flex-col items-center justify-center px-4 py-20 text-center animate-fade-in">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-500/20">
        <svg
          className="h-12 w-12 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">{title}</h2>
      {referenceId ? (
        <p className="mb-3 text-sm font-medium text-gold">Reference: {referenceId}</p>
      ) : null}
      <p className="max-w-md text-sm text-gray-400">{message}</p>
      {notices.length > 0 ? (
        <div className="mt-6 max-w-lg rounded-xl border border-gold/25 bg-gold/[0.06] px-5 py-4 text-left text-sm text-gray-300">
          <p className="text-center font-medium text-foreground">Email confirmations</p>
          <ul className="mt-3 space-y-3">
            {notices.map((notice) => (
              <li key={`${notice.label}-${notice.email}`} className="leading-relaxed text-gray-400">
                <span className="block text-foreground">{notice.label}</span>
                <span className="font-medium text-gold">{notice.email}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-center text-xs text-gray-500">
            Please check inbox and spam folder for each address listed above.
          </p>
        </div>
      ) : null}
    </div>
  );
}

export function FormPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`${formPanelClass} ${className}`}>{children}</div>;
}
