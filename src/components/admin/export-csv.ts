function escapeCsvCell(value: unknown): string {
  if (value == null) return "";
  const str =
    typeof value === "object" ? JSON.stringify(value) : String(value);
  if (/[",\n\r]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

export function exportToCsv(
  filename: string,
  rows: Record<string, unknown>[],
  columnKeys?: string[],
) {
  if (rows.length === 0) return;

  const keys = columnKeys ?? Object.keys(rows[0]);
  const header = keys.join(",");
  const body = rows
    .map((row) => keys.map((key) => escapeCsvCell(row[key])).join(","))
    .join("\n");

  const blob = new Blob([`${header}\n${body}`], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename.endsWith(".csv") ? filename : `${filename}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

export function flattenForCsv(row: Record<string, unknown>): Record<string, unknown> {
  const flat: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(row)) {
    if (value != null && typeof value === "object" && !Array.isArray(value)) {
      flat[key] = JSON.stringify(value);
    } else if (Array.isArray(value)) {
      flat[key] = value.join("; ");
    } else {
      flat[key] = value;
    }
  }
  return flat;
}
