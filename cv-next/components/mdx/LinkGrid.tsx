"use client";

export default function LinkGrid({
  items,
  columns = 2,
}: {
  items: { label: string; href: string; sub?: string }[];
  columns?: 2 | 3 | 4;
}) {
  const grid =
    columns === 4 ? "lg:grid-cols-4" :
    columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2";
  return (
    <div className={`grid gap-3 sm:grid-cols-2 ${grid}`}>
      {items.map((it) => (
        <a
          key={it.href}
          href={it.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-slate-200 p-3 hover:bg-slate-50"
        >
          <div className="text-sm font-medium">{it.label}</div>
          {it.sub ? <div className="text-xs text-slate-600">{it.sub}</div> : null}
        </a>
      ))}
    </div>
  );
}
