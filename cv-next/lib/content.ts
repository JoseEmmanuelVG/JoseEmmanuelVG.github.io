// lib/content.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ProjectMeta = {
  title: string;
  slug: string;
  summary?: string;
  category?: string[];
  tech?: string[];
  repo?: string;
  date?: string;
  highlight?: boolean;
};

const ROOT = process.cwd();
const PROJECTS_DIR = path.join(ROOT, "content/projects");

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getProjectSource(slug: string): { source: string; data: ProjectMeta } {
  const file = path.join(PROJECTS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(file, "utf-8");
  const { content, data } = matter(raw); // data: unknown (tipado laxo del paquete)

  // Normaliza y valida sin usar `any`
  const d = data as Record<string, unknown>;

  const meta: ProjectMeta = {
    slug,
    title: typeof d.title === "string" ? d.title : slug,
    summary: typeof d.summary === "string" ? d.summary : undefined,
    category: Array.isArray(d.category) ? (d.category as unknown[]).map(String) : undefined,
    tech: Array.isArray(d.tech) ? (d.tech as unknown[]).map(String) : undefined,
    repo: typeof d.repo === "string" ? d.repo : undefined,
    date: typeof d.date === "string" ? d.date : undefined,
    highlight: typeof d.highlight === "boolean" ? d.highlight : undefined,
  };

  return { source: content, data: meta };
}

export function getAllProjectMetas(): ProjectMeta[] {
  return getProjectSlugs().map((slug) => getProjectSource(slug).data);
}
