export function formatAdminDate(value: string) {
  return new Date(value).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export function filterBySearch<T extends Record<string, unknown>>(
  items: T[],
  query: string,
  keys: (keyof T)[],
) {
  const q = query.trim().toLowerCase();
  if (!q) return items;

  return items.filter((item) =>
    keys.some((key) => {
      const value = item[key];
      if (value == null) return false;
      return String(value).toLowerCase().includes(q);
    }),
  );
}
