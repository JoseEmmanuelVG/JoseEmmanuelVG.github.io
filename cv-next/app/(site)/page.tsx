import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">José Emmanuel Vázquez-Galán</h1>
  <p className="text-slate-600 mt-1">Software Engineer · RPA · Applied AI</p>
        <p className="mt-2 text-sm">
          <a className="underline" href="mailto:jevgjosemmanuel@gmail.com">jevgjosemmanuel@gmail.com</a> ·{" "}
          <a className="underline" href="https://github.com/JoseEmmanuelVG" target="_blank">GitHub</a> ·{" "}
          <a className="underline" href="https://scholar.google.com.mx/citations?hl=es&user=eP8h05UAAAAJ" target="_blank">Google Scholar</a> ·{" "}
          <a className="underline" href="https://orcid.org/0009-0003-8131-0069" target="_blank">ORCID</a>
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold">Highlights</h2>
        <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
          <li>RPA (Automation Anywhere, Power Automate). PDD/TDD, PoCs, KPIs.</li>
          <li>AI/ML & Data, Web/Cloud (Next.js), Embedded/Mechatronics, Blockchain.</li>
          <li>Publications: CCE 2024, RCS. Humanistic blog: <a className="underline" href="https://bonzopedia.com" target="_blank">Bonzopedia</a>.</li>
        </ul>
        <div className="mt-4 flex gap-3 text-sm">
          <Link className="rounded-lg border px-3 py-1 hover:bg-slate-100" href="/projects">View Projects</Link>
          <Link className="rounded-lg border px-3 py-1 hover:bg-slate-100" href="/rpa">RPA Certificates</Link>
        </div>
      </div>
    </section>
  );
}
