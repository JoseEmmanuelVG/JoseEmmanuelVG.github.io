import Link from "next/link";
import { TimelineSection } from "../../components/Timeline";
import SocialLink from "../../components/SocialLink";


export default function Home() {
  const experience = [
    {
      org: "ULTRASIST – An iLink Digital Company",
      start: "Sep 2024",
      end: "Present",
      location: "Mexico City, Mexico (Remote)",
      logoSrc: "/images/logos/Ultrasist.png",
      href: "https://www.ultrasist.mx/ultrasite/",
      // summary: "RPA delivery across AA & PA; client-facing, documentation, KPIs.",
      positions: [
        {
          role: "Software Engineer – Automation, AI and Agent Specialist",
          type: "Full-time",
          start: "Sep 2025",
          end: "Present",
          bullets: [
            "Design and develop PoC tests by integrating AI APIs, data pipelines, and specialized agents.",
          ],
        },
        {
          role: "Software Engineer · RPA Consulting",
          type: "Full-time",
          start: "Apr 2025",
          end: "Sep 2025",
          bullets: [
            "Managing and developing automation solutions using Automation Anywhere and Power Automate to optimize business processes.",
            "Ownership of PDD/TDD, KPIs and stakeholder alignment.",
          ],
        },
        {
          role: "RPA Developer Consultant (under SForce brand)",
          type: "Contract",
          start: "Jan 2025",
          end: "Mar 2025",
          bullets: [
            "Led end-to-end RPA projects with AA & Microsoft PA.",
            "Developed PoCs for U.S. stakeholders; requirements & documentation.",
          ],
        },
        {
          role: "RPA Scholarship Program (SForce)",
          type: "Apprenticeship",
          start: "Sep 2024",
          end: "Jan 2025",
          bullets: [
            "Project management training and specialized courses in AA & Power Automate.",
          ],
        },
      ],
    },
    {
      org: "IPN-UPIITA (LIPS Lab)",
      role: "Research Stay & Social Service",
      type: "Apprenticeship",
      start: "Aug 2023",
      end: "Aug 2024",
      duration: "1 yr 1 mo",
      location: "Mexico City, Mexico (Hybrid)",
      summary:
        "Synthetic EEG signal generator; AWS console & WordPress management.",
      bullets: [
        "Main-author research: CORE 2023 & CCE 2024 (EEG synthetic morphologies).",
        "Maintained lab website & infra (AWS + WordPress).",
      ],
      logoSrc: "/images/logos/LIPSregistrada.png",
      href: "https://www.labips.com.mx/",
    },
    {
      org: "Bancambios",
      role: "Full Stack Web Developer",
      type: "Freelance",
      start: "Mar 2023",
      end: "Aug 2024",
      duration: "1 yr 6 mos",
      location: "Remote",
      summary:
        "Built to participate in international Web3 and blockchain hackathons",
      bullets: [
        "Developed prototypes for Solana, Ripple CBDC, ETH MX / Base LATAM.",
        "React/Next, Node.js, MongoDB; Azure + OpenAI APIs.",
      ],
      logoSrc: "/images/logos/Bancambios.png",
      href: "https://bancambios.com",
    },
  ];

  const education = [
    {
      org: "Tecnológico de Monterrey",
      role: "Master’s in Applied Artificial Intelligence (MNA)",
      start: "Apr 2025",
      end: "Apr 2027",
      duration: "",
      summary: "GPA: 97.5 / 100",
      logoSrc: "/images/logos/Itesm.png",
      href: "https://tec.mx/en",
    },
    {
      org: "IPN – UPIITA",
      role: "B.Eng. in Mechatronics",
      start: "Jan 2020",
      end: "Jan 2025",
      duration: "",
      summary: "Professional License: 15155597 · GPA: 9.43 / 10",
      logoSrc: "/images/logos/Upiita.png",
      href: "https://www.upiita.ipn.mx/",
    },
    {
      org: "IPN – CECyT 3",
      role: "Technician, Computer Aided Manufacturing (CAM)",
      start: "Aug 2016",
      end: "Jul 2019",
      duration: "",
      summary: "Professional License: 12907766 · GPA: 9.11 / 10",
      logoSrc: "/images/logos/Cecyt3.png",
      href: "https://www.cecyt3.ipn.mx/",
    },
  ];

  return (
    <>
      <section className="space-y-10">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            José Emmanuel Vázquez Galán
          </h1>
          <p className="mt-1 text-slate-600">Master Applied AI Student · Mechatronics Engineering | Software Engineer (🎯 RPA) · Freelance Full-Stack WebDev</p>

          {/* fila de redes profesionales (con icono) */}
          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            <SocialLink
              href="https://github.com/JoseEmmanuelVG"
              label="GitHub"
              sub="@JoseEmmanuelVG"
              icon="GH"
            />
            <SocialLink
              href="https://scholar.google.com.mx/citations?hl=es&user=eP8h05UAAAAJ"
              label="Google Scholar"
              sub="Citations & publications"
              icon="📚"
            />
            <SocialLink
              href="https://orcid.org/0009-0003-8131-0069"
              label="ORCID"
              sub="0009-0003-8131-0069"
              icon="OR"
            />
            <SocialLink
              href="https://www.linkedin.com/in/vazquez-galan-jose-emmanuel-664968221/"
              label="LinkedIn"
              sub="/vazquez-galan-jose-emmanuel-664968221"
              icon="in"
            />
          </div>
        </div>

        {/* Timeline */}
        <TimelineSection title="Professional Experience" items={experience} />
        <TimelineSection title="Education" items={education} />
        

{/* Quick Access */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 hover:shadow-md transition">
          <h3 className="font-semibold">Projects</h3>
          <p className="mt-2 text-sm text-slate-600">
            Technical repositories: AI/ML, RPA bots, robotics, cloud, and academic research.
          </p>
          <Link href="/projects" className="mt-3 inline-block text-sm underline underline-offset-4">
            View Projects →
          </Link>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 hover:shadow-md transition">
          <h3 className="font-semibold">Blog</h3>
          <p className="mt-2 text-sm text-slate-600">
            <strong>Bonzopedia</strong>: humanistic essays—ethics, society, communication, physics, math, and organizational studies.
          </p>
          <a href="https://bonzopedia.com" target="_blank" className="mt-3 inline-block text-sm underline underline-offset-4">
            Visit Blog →
          </a>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 hover:shadow-md transition">
          <h3 className="font-semibold">Automation</h3>
          <p className="mt-2 text-sm text-slate-600">
            Automation projects, professional journey, and certificates in AA & Power Automate.
          </p>
          <Link href="/rpa" className="mt-3 inline-block text-sm underline underline-offset-4">
            View Certificates →
          </Link>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 hover:shadow-md transition">
          <h3 className="font-semibold">Publications</h3>
          <p className="mt-2 text-sm text-slate-600">
            Scientific publications on synthetic EEG signal generation and related work.
          </p>
          <Link href="/publications" className="mt-3 inline-block text-sm underline underline-offset-4">
            View Publications →
          </Link>
        </div>
      </div>
      </section>

      {/* Contact (anchor target) */}
      <section
        id="contact"
        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm scroll-mt-24"
      >
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="mt-2 text-sm text-slate-700">
          I’m open to collaborations and professional opportunities in RPA, Applied AI, and software engineering.
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <SocialLink
            href="mailto:jevgjosemmanuel@gmail.com"
            label="Email"
            sub="jevgjosemmanuel@gmail.com"
            icon="✉️"
          />
          <SocialLink
            href="https://www.linkedin.com/in/vazquez-galan-jose-emmanuel-664968221/"
            label="LinkedIn"
            sub="/vazquez-galan-jose-emmanuel-664968221"
            icon="in"
          />
          <SocialLink
            href="https://www.instagram.com/jose_emmanuel_vg"
            label="Instagram"
            sub="@jose_emmanuel_vg"
            icon="IG"
          />
          <SocialLink
            href="https://www.tiktok.com/@Bonzopedia"
            label="TikTok"
            sub="@Bonzopedia"
            icon="TT"
          />
          <SocialLink
            href="https://t.me/joseemmanuelVG"
            label="Telegram"
            sub="@joseemmanuelVG"
            icon="TG"
          />
          <SocialLink
            href="https://discordapp.com/users/0" // si quieres directo al user id, colócalo aquí
            label="Discord"
            sub="#joseemmanuelVG"
            icon="🟣"
          />
          {/* WhatsApp — opcional por privacidad */}
          {/* <SocialLink
            href="https://wa.me/525575417348"
            label="WhatsApp"
            sub="+52 55 7541 7348"
            icon="WA"
          /> */}
        </div>
      </section>
    </>
  );
}
