export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">José Emmanuel VG</h1>
        <p className="text-sm mt-1 text-[var(--color-muted)]">
          Software Engineer · RPA · IA Aplicada
        </p>
        <p className="mt-2 space-x-3 text-sm">
          <a className="underline decoration-[var(--color-primary)] underline-offset-2" href="mailto:jevgjosemmanuel@gmail.com">jevgjosemmanuel@gmail.com</a>
          <a className="underline decoration-[var(--color-primary)] underline-offset-2" href="https://github.com/JoseEmmanuelVG" target="_blank">GitHub</a>
          <a className="underline decoration-[var(--color-primary)] underline-offset-2" href="https://www.linkedin.com/in/vazquez-galan-jose-emmanuel-664968221/" target="_blank">LinkedIn</a>
        </p>
      </header>

      <section className="mb-8 rounded-2xl border border-slate-200 bg-[var(--color-card)] p-6">
        <h2 className="text-lg font-semibold mb-2">Resumen</h2>
        <p className="text-sm leading-6 text-[var(--color-muted)]">
          Ingeniero en Mecatrónica y M. en IA Aplicada. Experiencia en RPA (Automation Anywhere, Power Automate),
          back-end y automatización end-to-end. Interés en IA, data y desarrollo web.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Experiencia</h2>
        <ul className="space-y-4">
          <li className="rounded-xl border border-slate-200 p-4">
            <div className="font-medium">Software Engineer: RPA Consultant — ULTRASIST</div>
            <p className="text-sm text-[var(--color-muted)]">
              Automatización de procesos, documentación técnica (PDD/TDD), PoCs, interacción con clientes.
            </p>
          </li>
          <li className="rounded-xl border border-slate-200 p-4">
            <div className="font-medium">RPA Developer Consultant — SForce</div>
            <p className="text-sm text-[var(--color-muted)]">
              Proyectos AA/Power Automate, mejoras de procesos, soporte a U.S. clients.
            </p>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Proyectos Destacados</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          <li className="rounded-xl border border-slate-200 p-4">
            <div className="font-medium">EEG Synthetic Signal Generator</div>
            <p className="text-sm text-[var(--color-muted)]">IPN-UPIITA</p>
          </li>
          <li className="rounded-xl border border-slate-200 p-4">
            <div className="font-medium">pAIy App (fintech)</div>
            <p className="text-sm text-[var(--color-muted)]">Full-stack</p>
          </li>
          <li className="rounded-xl border border-slate-200 p-4">
            <div className="font-medium">Bonzopedia.com</div>
            <p className="text-sm text-[var(--color-muted)]">WordPress/Hosting</p>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3">Habilidades</h2>
        <p className="text-sm text-[var(--color-muted)]">
          JavaScript/TypeScript, Python, RPA (AA/Power Automate), SQL, Next.js, Node.js, Git, Azure.
        </p>
      </section>

      <footer className="mt-10 text-xs text-[var(--color-muted)]">
        © {new Date().getFullYear()} José Emmanuel
      </footer>
    </main>
  );
}
