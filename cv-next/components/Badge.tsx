export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs">
      {children}
    </span>
  );
}
