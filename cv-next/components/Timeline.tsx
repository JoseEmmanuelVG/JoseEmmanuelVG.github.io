// components/Timeline.tsx
type Position = {
  role: string;            // "Software Engineer · RPA Consulting"
  type?: string;           // "Full-time", "Contract", "Apprenticeship"
  start: string;           // "Apr 2025"
  end?: string;            // "Present" | "Jan 2025"
  duration?: string;       // "5 mos"
  bullets?: string[];
};

type TimelineItem = {
  org: string;             // "ULTRASIST – An iLink Digital Company"
  start: string;           // rango global del grupo: "Sep 2024"
  end?: string;            // "Present"
  duration?: string;       // opcional si lo quieres mostrar a nivel grupo
  location?: string;       // "Mexico City, Mexico (Remote)"
  summary?: string;        // breve label del grupo (opcional)
  href?: string;           // link a org
  logoSrc?: string;        // /images/logos/ultrasist.png
  positions?: Position[];  // ← SUB-ROLES (ascensos/etapas)
};

export function TimelineSection({
  title,
  items,
}: {
  title: string;
  items: TimelineItem[];
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">{title}</h2>
      <ol className="relative mt-5 border-s-2 border-slate-200 ps-5">
        {items.map((it, i) => (
          <li key={i} className="mb-8 ms-2">
            {/* Punto del timeline */}
            <span className="absolute -start-1.5 mt-1 h-3 w-3 rounded-full border-2 border-white bg-slate-400 shadow ring-2 ring-slate-200" />
            <div className="flex items-start gap-3">
              {it.logoSrc ? (
                <img
                  src={it.logoSrc}
                  alt={it.org}
                  className="size-10 rounded object-contain"
                />
              ) : (
                <div className="size-10 rounded bg-slate-100" />
              )}

              <div className="min-w-0">
                {/* Cabecera del grupo */}
                <div className="text-sm font-semibold leading-6 text-slate-900">
                  {it.href ? (
                    <a
                      className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-800"
                      href={it.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {it.org}
                    </a>
                  ) : (
                    it.org
                  )}
                </div>
                <div className="mt-0.5 text-xs text-slate-600">
                  {it.start} – {it.end ?? "Present"}
                  {it.duration ? ` · ${it.duration}` : ""}
                  {it.location ? ` · ${it.location}` : ""}
                </div>
                {it.summary ? (
                  <p className="mt-2 text-sm text-slate-700">{it.summary}</p>
                ) : null}

                {/* Sub-roles (ascensos/etapas) */}
                {it.positions?.length ? (
                  <div className="mt-3 space-y-3">
                    {it.positions.map((p, idx) => (
                      <div key={idx} className="rounded-lg border border-slate-200 p-3">
                        <div className="text-sm font-medium text-slate-900">
                          {p.role}
                          {p.type ? (
                            <span className="font-normal text-slate-600"> · {p.type}</span>
                          ) : null}
                        </div>
                        <div className="mt-0.5 text-xs text-slate-600">
                          {p.start} – {p.end ?? "Present"}
                          {p.duration ? ` · ${p.duration}` : ""}
                        </div>
                        {p.bullets?.length ? (
                          <ul className="mt-2 list-disc ps-5 text-sm text-slate-700 space-y-1">
                            {p.bullets.map((b, j) => (
                              <li key={j}>{b}</li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
