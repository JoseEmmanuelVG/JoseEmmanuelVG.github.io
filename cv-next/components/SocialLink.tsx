// components/SocialLink.tsx
type Props = {
  href: string;
  label: string;
  sub?: string;
  // Puedes pasar un emoji, initial ("GH"), o un path local a un logo
  icon?: string;       // e.g. "GH", "in", "OR", "📚"
};

export default function SocialLink({ href, label, sub, icon }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-lg border px-3 py-2 hover:bg-slate-50"
    >
      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600 group-hover:bg-slate-200">
        {icon ?? "↗"}
      </div>
      <div className="min-w-0">
        <div className="truncate text-sm font-medium text-slate-900">{label}</div>
        {sub ? <div className="truncate text-xs text-slate-600">{sub}</div> : null}
      </div>
    </a>
  );
}
