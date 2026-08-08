import type { KeyboardEvent, ReactNode } from "react";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { filterBySearch } from "./admin-utils";
import { SearchField } from "./SearchField";

const PAGE_SIZE = 10;

export function DataTableShell<T extends Record<string, unknown>>({
  items,
  searchKeys,
  searchPlaceholder,
  entryLabel = "entries",
  columns,
  children,
}: {
  items: T[];
  searchKeys: (keyof T)[];
  searchPlaceholder?: string;
  entryLabel?: string;
  columns: string[];
  children: (paginatedItems: T[]) => ReactNode;
}) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () => filterBySearch(items, search, searchKeys),
    [items, search, searchKeys],
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <div>
      <SearchField
        value={search}
        onChange={(v) => {
          setSearch(v);
          setPage(1);
        }}
        placeholder={searchPlaceholder}
      />

      <div className="overflow-hidden rounded-xl border border-zinc-200/80 bg-white shadow-sm">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50/80">
              {columns.map((col) => (
                <th
                  key={col}
                  className="px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children(paginated)}</tbody>
        </table>

        <div className="flex items-center justify-between border-t border-zinc-100 px-6 py-3.5">
          <p className="text-xs text-zinc-500">
            Page {currentPage} of {totalPages} · {filtered.length} {entryLabel}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              disabled={currentPage <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className={cn(
                "rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors",
                currentPage <= 1
                  ? "cursor-not-allowed opacity-40"
                  : "hover:bg-zinc-50",
              )}
            >
              Previous
            </button>
            <button
              type="button"
              disabled={currentPage >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className={cn(
                "rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors",
                currentPage >= totalPages
                  ? "cursor-not-allowed opacity-40"
                  : "hover:bg-zinc-50",
              )}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DataTableRow({
  children,
  className,
  onClick,
  onKeyDown,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  onKeyDown?: (e: KeyboardEvent<HTMLTableRowElement>) => void;
}) {
  return (
    <tr
      className={cn(
        "border-b border-zinc-100 transition-colors hover:bg-zinc-50/50",
        onClick && "cursor-pointer hover:bg-zinc-50",
        className,
      )}
      onClick={onClick}
      onKeyDown={onKeyDown}
      role={onClick ? "link" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </tr>
  );
}

export function DataTableCell({
  children,
  className,
  mono,
}: {
  children: ReactNode;
  className?: string;
  mono?: boolean;
}) {
  return (
    <td
      className={cn(
        "px-6 py-4 text-sm font-medium text-zinc-700",
        mono && "font-mono text-xs",
        className,
      )}
    >
      {children}
    </td>
  );
}

export function DataTableEmpty({ colSpan, message }: { colSpan: number; message: string }) {
  return (
    <tr>
      <td colSpan={colSpan} className="px-6 py-10 text-center text-sm text-zinc-400">
        {message}
      </td>
    </tr>
  );
}
