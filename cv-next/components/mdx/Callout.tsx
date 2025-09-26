"use client";

export default function Callout({
  type = "info",
  title,
  children,
}: {
  type?: "info" | "warn" | "success";
  title?: string;
  children?: React.ReactNode;
}) {
  const tone =
    type === "warn"
      ? "bg-amber-50 border-amber-200"
      : type === "success"
      ? "bg-emerald-50 border-emerald-200"
      : "bg-sky-50 border-sky-200";
  return (
    <div className={`rounded-xl border ${tone} p-4`}>
      {title ? <div className="font-semibold">{title}</div> : null}
      <div className="mt-1 text-sm text-slate-700">{children}</div>
    </div>
  );
}
