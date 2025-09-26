import Image from "next/image";

// app/(site)/rpa/page.tsx
export const metadata = {
  title: "RPA | JEVG",
  description:
    "RPA experience and certifications by José Emmanuel Vázquez-Galán: Automation Anywhere and Microsoft Power Automate.",
};

type CertImageProps = {
  title: string;
  imgSrc: string;
  href: string;
};

import Image from "next/image";

function CertImage({ title, imgSrc, href }: CertImageProps) {
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
      <div className="mt-2 text-sm font-medium text-slate-700">{title}</div>
    </a>
  );
}


export default function RpaPage() {
  return (
    <section className="space-y-8">
      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">RPA</h1>
        <p className="text-sm text-slate-700">
          Hands-on experience building end-to-end automations with{" "}
          <strong>Automation Anywhere</strong> and{" "}
          <strong>Microsoft Power Automate (Desktop & Cloud)</strong> — from
          opportunity assessment to documentation (OH, PDD, TDD), KPIs and
          delivery for stakeholders.
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
          />
          <CertImage
            title="Automation Developer Career Quest — Completion"
            imgSrc="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/138771710"
            href="https://certificates.automationanywhere.com/embed/c3a9a1e6-3302-47a4-bd3c-29486b8c9cd0"
          />
          <CertImage
            title="Agentic Process Automation Leader — Masterclass (APA)"
            imgSrc="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/158734365"
            href="https://certificates.automationanywhere.com/embed/630e1e7b-3add-4484-add4-f6b0425a84f5"
          />
        </div>
      </section>

      {/* Roadmap / In progress */}
      <section className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-5">
        <h3 className="text-base font-semibold">In progress</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>
            Publishing short demos of automations and mini-games built during
            training/certifications (AA & Power Automate).
          </li>
          <li>
            Packaging reusable components (logging, exception handling, email
            notifiers, file operations, selectors) as templates.
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
        shows a generic user. Hands-on modules were completed by
        José&nbsp;Emmanuel&nbsp;Vázquez-Galán.
      </p>
    </div>
  </div>
</article>


      {/* CTA to contact */}
      <footer className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-700">
            Interested in RPA collaborations (AA / Power Automate) or automation
            assessments?
          </p>
          <a
            href="/#contact"
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm hover:bg-slate-50"
          >
            Contact →
          </a>
        </div>
      </footer>
    </section>
  );
}
