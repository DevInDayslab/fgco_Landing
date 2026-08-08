import { Download } from "lucide-react";
import { exportToCsv, flattenForCsv } from "./export-csv";

export function ExportCsvButton({
  filename,
  rows,
  columns,
  label = "Export CSV",
}: {
  filename: string;
  rows: Record<string, unknown>[];
  columns?: string[];
  label?: string;
}) {
  return (
    <button
      type="button"
      disabled={rows.length === 0}
      onClick={() => {
        const flatRows = rows.map((row) => flattenForCsv(row));
        exportToCsv(filename, flatRows, columns);
      }}
      className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3.5 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-40"
    >
      <Download className="h-4 w-4" />
      {label}
    </button>
  );
}
