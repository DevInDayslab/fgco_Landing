import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type StatusBadgeVariant = "success" | "warning" | "pending" | "neutral" | "error";

const variantStyles: Record<StatusBadgeVariant, string> = {
  success: "bg-emerald-50 text-emerald-700 border-emerald-200",
  warning: "bg-amber-50 text-amber-700 border-amber-200",
  pending: "bg-sky-50 text-sky-700 border-sky-200",
  neutral: "bg-zinc-50 text-zinc-600 border-zinc-200",
  error: "bg-red-50 text-red-700 border-red-200",
};

export function StatusBadge({
  children,
  variant = "neutral",
  className,
}: {
  children: ReactNode;
  variant?: StatusBadgeVariant;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold capitalize",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function PaymentBadge({ paid }: { paid: boolean }) {
  return (
    <StatusBadge variant={paid ? "success" : "warning"}>
      {paid ? "Paid" : "Not paid"}
    </StatusBadge>
  );
}
