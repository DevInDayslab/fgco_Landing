export function MetricCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
        {label}
      </p>
      <p className="text-3xl font-bold tracking-tight text-zinc-900">{value}</p>
    </div>
  );
}
