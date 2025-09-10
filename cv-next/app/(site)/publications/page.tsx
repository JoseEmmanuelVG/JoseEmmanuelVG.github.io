// app/(site)/publications/page.tsx
export const metadata = {
  title: "Publications · JEVG",
  description:
    "Academic publications and project outputs by José Emmanuel Vázquez-Galán.",
};

type Link = { label: string; href: string };

type Contributor = { name: string; role?: string };

type Pub = {
  kind: "Conference paper" | "Journal article";
  title: string;
  date: string; // ISO or YYYY-MM-DD
  venue: string; // e.g., "CCE 2024" or "Research in Computing Science (RCS)"
  venueNote?: string; // explanatory note about the venue
  country?: string;
  issn?: string;
  doi?: string;
  doiUrl?: string;
  pdfUrl?: string;
  links?: Link[];
  contributors: Contributor[];
};

type ProjectGroup = {
  projectTitle: string;
  projectUrl: string;
  intro?: string; // short context for the project
  explainer?: string; // paragraph explaining the timeline/conference vs journal
  pubs: Pub[];
};

const ORCID_URL = "https://orcid.org/0009-0003-8131-0069";

const GROUPS: ProjectGroup[] = [
  {
    projectTitle:
      "Synthetic EEG Signal Generator of Morphologies Associated with Epileptogenic Events",
    projectUrl:
      "https://joseemmanuelvg.github.io/Synthetic_EEG_Generator_With_Epileptogenic_Events-JEVG/#",
    intro:
      "Methodology and tooling to synthesize EEG signals, emulate specific morphologies, and support analysis workflows.",
    explainer:
      "This project originated as a conference work (presentation and publication under IEEE at CCE 2024) and later evolved into a journal article in RCS, consolidating results for broader academic dissemination.",
    pubs: [
      {
        kind: "Conference paper",
        title:
          "CCE 2024 – 21st International Conference on Electrical Engineering, Computing Science and Automatic Control",
        date: "2024-10-23",
        venue: "___",
        venueNote:
          "International IEEE conference held in Mexico City (Oct 23–25, 2024), where the work was presented and published via IEEE.",
        doi: "10.1109/CCE62852.2024.10770922",
        doiUrl: "https://doi.org/10.1109/CCE62852.2024.10770922",
        links: [
          { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/document/10770922" },
          { label: "ORCID record", href: ORCID_URL },
        ],
        contributors: [
          { name: "José-Emmanuel Vázquez-Galán", role: "Author" },
          { name: "Blanca Tovar-Corona", role: "Author" },
          { name: "Laura-Ivoone Garay-Jiménez", role: "Author" },
          { name: "Martín-Arturo Silva-Ramírez", role: "Author" },
        ],
      },
      {
        kind: "Journal article",
        title:
          "Synthetic EEG Signal Generator of Morphologies Associated with Epileptogenic Events",
        date: "2024-12-01", // aprox si no tienes el día
        venue: "Research in Computing Science (RCS)",
        venueNote:
          "Open-access scientific journal published by CIC-IPN. Focused on computer science and computing engineering research.",
        country: "Mexico",
        issn: "1870-4069",
        pdfUrl:
          "https://www.rcs.cic.ipn.mx/2024_153_5/Synthetic%20EEG%20Signal%20Generator%20of%20Morphologies%20Associated%20with%20Epileptogenic%20Events.pdf",
        links: [
          { label: "Journal page", href: "https://www.rcs.cic.ipn.mx/2024_153_5/" },
          { label: "ORCID record", href: ORCID_URL },
        ],
        contributors: [
          {
            name: "José-Emmanuel Vázquez-Galán",
            role: "Investigation, Software, Writing — review & editing",
          },
          { name: "Blanca Tovar-Corona", role: "Supervision, Investigation" },
          { name: "Laura-Ivoone Garay-Jiménez", role: "Supervision, Investigation" },
        ],
      },
    ],
  },
];

function formatDate(d: string) {
  try {
    const date = new Date(d);
    const y = date.getUTCFullYear();
    const m = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");
    return d.length >= 10 ? `${y}-${m}-${day}` : `${y}-${m}`;
  } catch {
    return d;
  }
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-700">
      {children}
    </span>
  );
}

export default function PublicationsPage() {
  // JSON-LD para SEO: un Project con hasPart = artículos
  const jsonLd = GROUPS.map((g) => ({
    "@context": "https://schema.org",
    "@type": "Project",
    name: g.projectTitle,
    url: g.projectUrl,
    description: g.intro,
    creator: { "@type": "Person", name: "José Emmanuel Vázquez-Galán" },
    sameAs: [ORCID_URL],
    hasPart: g.pubs.map((p) => ({
      "@type": "ScholarlyArticle",
      headline: p.title,
      datePublished: p.date,
      inLanguage: "en",
      isPartOf: {
        "@type": "Periodical",
        name: p.venue,
        issn: p.issn,
      },
      url:
        p.doiUrl ??
        p.pdfUrl ??
        (p.links?.[0]?.href ?? "https://joseemmanuelvg.github.io/publications"),
      identifier: p.doi ? `https://doi.org/${p.doi}` : undefined,
      author: p.contributors.map((c) => ({ "@type": "Person", name: c.name })),
    })),
  }));

  return (
    <section className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Publications</h1>
          <p className="mt-1 text-sm text-slate-600">
            Academic work grouped by project. Full live record on{" "}
            <a
              className="underline underline-offset-4"
              href={ORCID_URL}
              target="_blank"
              rel="noreferrer"
            >
              ORCID
            </a>.
          </p>
        </div>
        <a
          href={ORCID_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-1.5 text-sm hover:bg-slate-50"
        >
          <span className="inline-flex size-5 items-center justify-center rounded-full bg-slate-100 text-[10px] font-semibold">
            OR
          </span>
          View ORCID
        </a>
      </div>

      <div className="grid gap-5">
        {GROUPS.map((g, i) => (
          <article
            key={i}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            {/* Header del proyecto */}
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-base font-semibold leading-6 text-slate-900">
                  {g.projectTitle}
                </h2>
                {g.intro ? (
                  <p className="mt-1 text-sm text-slate-700">{g.intro}</p>
                ) : null}
              </div>
              <a
                className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm hover:bg-slate-50"
                href={g.projectUrl}
                target="_blank"
                rel="noreferrer"
              >
                Project Page
              </a>
            </div>

            {g.explainer ? (
              <p className="mt-3 text-sm text-slate-700">{g.explainer}</p>
            ) : null}

            {/* Lista de salidas (conference + journal) */}
            <div className="mt-4 space-y-4">
              {g.pubs
                .sort((a, b) => b.date.localeCompare(a.date))
                .map((p, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-slate-200 p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge>{p.kind}</Badge>
                          <span className="text-xs text-slate-600">
                            {formatDate(p.date)}
                          </span>
                        </div>
                        <h3 className="mt-1 text-sm font-semibold text-slate-900">
                          {p.title}
                        </h3>
                        <p className="mt-1 text-xs text-slate-600">
                          {p.venue}
                          {p.country ? ` · ${p.country}` : ""}
                          {p.issn ? ` · ISSN ${p.issn}` : ""}
                        </p>
                        {p.venueNote ? (
                          <p className="mt-1 text-sm text-slate-700">
                            {p.venueNote}
                          </p>
                        ) : null}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {p.doiUrl ? (
                          <a
                            className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm hover:bg-slate-50"
                            href={p.doiUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            View DOI
                          </a>
                        ) : null}
                        {p.pdfUrl ? (
                          <a
                            className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm hover:bg-slate-50"
                            href={p.pdfUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            PDF
                          </a>
                        ) : null}
                        {p.links?.map((l) => (
                          <a
                            key={l.href}
                            className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm hover:bg-slate-50"
                            href={l.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {l.label}
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Contribuidores */}
                    <div className="mt-3">
                      <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Contributors
                      </h4>
                      <ul className="mt-1 text-sm text-slate-700 leading-relaxed">
                        {p.contributors.map((c) => (
                          <li key={c.name}>
                            {c.name}
                            {c.role ? (
                              <span className="text-slate-500"> — {c.role}</span>
                            ) : null}
                          </li>
                        ))}
                      </ul>
                      {p.doi ? (
                        <div className="mt-1 text-xs text-slate-600">
                          DOI: <span className="font-mono">{p.doi}</span>
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
            </div>
          </article>
        ))}
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
