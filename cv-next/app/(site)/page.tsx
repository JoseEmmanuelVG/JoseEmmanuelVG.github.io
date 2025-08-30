import Link from "next/link";
import { TimelineSection } from "../../components/Timeline";

export default function Home() {
const experience = [
  {
    org: "ULTRASIST – An iLink Digital Company",
    start: "Sep 2024",
    end: "Present",
    location: "Mexico City, Mexico (Remote)",
    // logoSrc: "/images/logos/ultrasist.png",
    // summary: "RPA delivery across AA & PA; client-facing, documentation, KPIs.",
    positions: [
      {
        role: "Software Engineer · RPA Consulting",
        type: "Full-time",
        start: "Apr 2025",
        end: "Present",
        duration: "5 mos",
        bullets: [
          "Managing and developing automation solutions using Automation Anywhere and Power Automate.",
          "Ownership of PDD/TDD, KPIs and stakeholder alignment.",
        ],
      },
      {
        role: "RPA Developer Consultant (under SForce brand)",
        type: "Contract",
        start: "Jan 2025",
        end: "Mar 2025",
        duration: "3 mos",
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
        duration: "5 mos",
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
      href: "https://orcid.org/0009-0003-8131-0069",
      // logoSrc: "/images/logos/ipn.png",
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
        "Web3 & blockchain hackathons; React/Next, Node.js, MongoDB; Azure + OpenAI APIs.",
      bullets: [
        "Built prototypes for Solana, Ripple CBDC, ETH MX / Base LATAM.",
      ],
      // logoSrc: "/images/logos/bancambios.png",
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
      // logoSrc: "/images/logos/tec.png",
    },
    {
      org: "IPN – UPIITA",
      role: "B.Eng. in Mechatronics",
      start: "Jan 2020",
      end: "Jan 2025",
      duration: "",
      summary: "GPA: 9.43 / 10",
      // logoSrc: "/images/logos/upiita.png",
    },
    {
      org: "IPN – CECyT 3",
      role: "Technician, Computer Aided Manufacturing (CAM)",
      start: "Aug 2016",
      end: "Jul 2019",
      duration: "",
      summary: "GPA: 9.11 / 10",
      // logoSrc: "/images/logos/cecyt3.png",
    },
  ];

  return (
    <section className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          José Emmanuel Vázquez-Galán
        </h1>
        <p className="text-slate-600 mt-1">Software Engineer · RPA · Applied AI</p>
        <p className="mt-2 text-sm">
          <a className="underline" href="mailto:jevgjosemmanuel@gmail.com">jevgjosemmanuel@gmail.com</a> ·{" "}
          <a className="underline" href="https://github.com/JoseEmmanuelVG" target="_blank">GitHub</a> ·{" "}
          <a className="underline" href="https://scholar.google.com.mx/citations?hl=es&user=eP8h05UAAAAJ" target="_blank">Google Scholar</a> ·{" "}
          <a className="underline" href="https://orcid.org/0009-0003-8131-0069" target="_blank">ORCID</a>
        </p>
      </div>

      {/* LinkedIn-like timeline */}
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
          <h3 className="font-semibold">RPA</h3>
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
  );
}
