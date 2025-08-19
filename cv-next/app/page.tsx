export default function Page() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "2rem" }}>
      <header style={{ marginBottom: "2rem" }}>
        <h1 style={{ margin: 0 }}>José Emmanue VG</h1>
        <p style={{ margin: 0 }}>Software Engineer · RPA · IA Aplicada</p>
        <p style={{ marginTop: "0.5rem" }}>
          <a href="mailto:jevgjosemmanuel@gmail.com">jevgjosemmanuel@gmail.com</a> ·{" "}
          <a href="https://github.com/JoseEmmanuelVG" target="_blank">GitHub</a> ·{" "}
          <a href="https://www.linkedin.com/in/vazquez-galan-jose-emmanuel-664968221/" target="_blank">LinkedIn</a>
        </p>
      </header>

      <section>
        <h2>Resumen</h2>
        <p>
          Ingeniero en Mecatrónica y M. en IA Aplicada. Experiencia en RPA (Automation Anywhere, Power Automate),
          back-end y automatización end-to-end. Interés en IA, data y desarrollo web.
        </p>
      </section>

      <section>
        <h2>Experiencia</h2>
        <ul>
          <li>
            <strong>Software Engineer: RPA Consultant — ULTRASIST</strong><br />
            Automatización de procesos, documentación técnica (PDD/TDD), PoCs, interacción con clientes.
          </li>
          <li>
            <strong>RPA Developer Consultant — SForce</strong><br />
            Proyectos AA/Power Automate, mejoras de procesos, soporte a U.S. clients.
          </li>
        </ul>
      </section>

      <section>
        <h2>Proyectos Destacados</h2>
        <ul>
          <li>EEG Synthetic Signal Generator — IPN-UPIITA</li>
          <li>pAIy App (fintech) — Full-stack</li>
          <li>Bonzopedia.com — WordPress/Hosting</li>
        </ul>
      </section>

      <section>
        <h2>Habilidades</h2>
        <p>JavaScript/TypeScript, Python, RPA (AA/Power Automate), SQL, Next.js, Node.js, Git, Azure.</p>
      </section>

      <footer style={{ marginTop: "2rem", fontSize: 14, opacity: 0.7 }}>
        © {new Date().getFullYear()} José Emmanuel
      </footer>
    </main>
  );
}
