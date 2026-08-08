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
}: {
  title: string;
  message: string;
}) {
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
      <p className="max-w-md text-sm text-gray-400">{message}</p>
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
