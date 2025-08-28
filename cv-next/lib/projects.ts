export type ProjectMeta = {
  title: string;
  slug: string;
  summary: string;
  category: ("AI/ML & Data" | "RPA/Automation" | "Web/Cloud" | "Embedded/Mechatronics" | "Blockchain" | "Vision/Robotics")[];
  tech: string[];
  repo?: string;
  highlight?: boolean;
};

export const PROJECTS: ProjectMeta[] = [
  {
    title: "Synthetic EEG Signal Generator",
    slug: "eeg-generator",
  summary: "Synthetic EEG signal generator with epileptogenic morphologies. CCE 2024 / RCS paper.",
    category: ["AI/ML & Data"],
    tech: ["Python", "Matlab", "Synthetic Data"],
    repo: "https://github.com/JoseEmmanuelVG/Synthetic_EEG_Generator_With_Epileptogenic_Events-JEVG",
    highlight: true,
  },
  {
    title: "pAIy App",
    slug: "paiy-app",
  summary: "Fintech platform with React/Next, Azure, and OpenAI. Solana, Ripple CBDC, ETH MX hackathons.",
    category: ["Web/Cloud", "Blockchain"],
    tech: ["Next.js", "Azure", "MongoDB"],
    repo: "https://github.com/JoseEmmanuelVG/pAIy_Next.js_Template",
    highlight: true,
  },
  {
    title: "TT2 Photovoltaic Roof Cleaner",
    slug: "solar-cleaner-robot",
  summary: "Mobile robot for cleaning photovoltaic roofs. Dash UI + IoT with Raspberry/Arduino.",
    category: ["Embedded/Mechatronics", "Vision/Robotics"],
    tech: ["Python", "Raspberry Pi", "OpenCV"],
    repo: "https://github.com/JoseEmmanuelVG/TT2_Photovoltaic_Roof_Cleaner",
  },
];

