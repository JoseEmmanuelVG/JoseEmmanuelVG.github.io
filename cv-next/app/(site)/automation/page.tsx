import Image from "next/image";
import Link from "next/link";

// app/(site)/rpa/page.tsx
export const metadata = {
  title: "RPA | JEVG",
  description:
    "RPA and agentic automation experience by José Emmanuel Vázquez-Galán: Automation Anywhere, Microsoft Power Automate, and Microsoft Copilot Studio.",
};

type CertImageProps = {
  title: string;
  imgSrc: string;
  href: string;
  issuer?: string;
  issued?: string;
};

function CertImage({ title, imgSrc, href, issuer, issued }: CertImageProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="block rounded-xl border border-slate-200 bg-white p-3 shadow-sm hover:shadow-md transition"
    >
      <Image
        src={imgSrc}
        alt={title}
        width={400}
        height={300}
        className="w-full rounded-md object-contain"
      />
      <div className="mt-2">
        <div className="text-sm font-medium text-slate-800">{title}</div>
        {issuer && (
          <div className="mt-0.5 text-xs text-slate-600">{issuer}</div>
        )}
        {issued && (
          <div className="text-xs text-slate-500">Issued {issued}</div>
        )}
      </div>
    </a>
  );
}

export default function RpaPage() {
  return (
    <section className="space-y-8">
      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">RPA & Agentic Automation</h1>
        <p className="text-sm text-slate-700">
          Hands-on experience building end-to-end automations and AI-driven agents with{" "}
          <strong>Automation Anywhere</strong>,{" "}
          <strong>Microsoft Power Automate</strong>, and{" "}
          <strong>Microsoft Copilot Studio</strong> — from opportunity assessment
          to documentation (OH, PDD, TDD), KPIs, and enterprise delivery.
        </p>
      </header>

      {/* Automation Anywhere Certificates */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">
          Automation Anywhere — Certificates
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <CertImage
            title="Automation Developer Career Quest — Start Phase"
            imgSrc="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/138747285"
            href="https://certificates.automationanywhere.com/embed/71f84bd8-d722-41bc-898b-a721196f5d68"
            issuer="Automation Anywhere"
          />
          <CertImage
            title="Automation Developer Career Quest — Completion"
            imgSrc="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/138771710"
            href="https://certificates.automationanywhere.com/embed/c3a9a1e6-3302-47a4-bd3c-29486b8c9cd0"
            issuer="Automation Anywhere"
          />
          <CertImage
            title="Agentic Process Automation Leader — Masterclass (APA)"
            imgSrc="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/158734365"
            href="https://certificates.automationanywhere.com/embed/630e1e7b-3add-4484-add4-f6b0425a84f5"
            issuer="Automation Anywhere"
          />
        </div>
      </section>

      {/* Microsoft Copilot Studio Certificates */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">
          Microsoft Copilot Studio — Certificates
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <CertImage
            title="Simplify Agent Development with Copilot Studio — Proficient"
            imgSrc="/certs/copilot/simplify-agent-development.png"
            href="#"
            issuer="Microsoft Global Channel Partner Sales (GCPS)"
            issued="Nov 14, 2025"
          />

          <CertImage
            title="Deploy and Adopt Microsoft 365 Copilot + Agents — Proficient"
            imgSrc="/certs/copilot/deploy-adopt-copilot-agents.png"
            href="#"
            issuer="Microsoft Global Channel Partner Sales (GCPS)"
            issued="Nov 7, 2025"
          />

          <CertImage
            title="Business Case Builder & Agents Value Envisioning Tool — Proficient"
            imgSrc="/certs/copilot/business-case-builder.png"
            href="#"
            issuer="Microsoft Global Channel Partner Sales (GCPS)"
            issued="Nov 7, 2025"
          />

          <CertImage
            title="Copilot Business Value — Proficient"
            imgSrc="/certs/copilot/copilot-business-value.png"
            href="#"
            issuer="Microsoft Global Channel Partner Sales (GCPS)"
            issued="Nov 7, 2025"
          />
        </div>
      </section>

      {/* Roadmap / In progress */}
      <section className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-5">
        <h3 className="text-base font-semibold">In progress</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>
            Publishing short demos of automations and agentic workflows built
            during certifications and enterprise PoCs.
          </li>
          <li>
            Designing reusable Copilot Studio agent patterns (handoff to RPA,
            human-in-the-loop, governance-ready templates).
          </li>
        </ul>
      </section>

      {/* Power Automate / Udemy */}
      <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-start gap-3">
          <Image
            src="/certs/PA/PA_Udemy-JEVG.png"
            alt="Power Automate Desktop — Udemy Certificate"
            width={250}
            height={180}
            className="rounded border border-slate-200 object-contain"
          />
          <div className="min-w-0">
            <h3 className="text-sm font-semibold">
              Power Automate Desktop — Complete RPA Course
            </h3>
            <p className="mt-1 text-xs text-slate-600">
              Udemy · Instructor: Iván AlsiGo
            </p>
            <p className="mt-2 text-sm text-slate-700">
              Training account was provided for practice, so the certificate
              shows a generic user. Hands-on modules were completed by{" "}
              José&nbsp;Emmanuel&nbsp;Vázquez-Galán.
            </p>
          </div>
        </div>
      </article>

      {/* CTA */}
      <footer className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-700">
            Interested in RPA, Copilot Studio, or agentic automation collaborations?
          </p>
          <Link
            href="/#contact"
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm hover:bg-slate-50"
          >
            Contact →
          </Link>
        </div>
      </footer>
    </section>
  );
}
