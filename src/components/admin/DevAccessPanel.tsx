import { useQuery } from "@tanstack/react-query";
import { KeyRound } from "lucide-react";
import { apiFetch } from "@/lib/api-client";

type DevAccessInfo = {
  enabled: boolean;
  username?: string;
  password?: string | null;
};

export function DevAccessPanel() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["admin", "dev-access"],
    queryFn: () => apiFetch<DevAccessInfo>("/api/admin/dev-access"),
    retry: 1,
  });

  if (isLoading || error || !data?.enabled || !data.username || !data.password) {
    return null;
  }

  return (
    <div className="max-w-md space-y-3 rounded-xl border border-emerald-200/80 bg-emerald-50/40 p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <KeyRound className="h-4 w-4 text-emerald-700" />
        <h2 className="text-base font-semibold text-zinc-900">Dev access</h2>
      </div>
      <p className="text-sm text-zinc-600">
        Separate admin account for local development and testing. Do not enable on production.
      </p>
      <dl className="grid gap-2 rounded-lg border border-emerald-100 bg-white p-4 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-zinc-500">Username</dt>
          <dd className="font-mono font-medium text-zinc-900">{data.username}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-zinc-500">Password</dt>
          <dd className="font-mono font-medium text-zinc-900">{data.password}</dd>
        </div>
      </dl>
    </div>
  );
}
