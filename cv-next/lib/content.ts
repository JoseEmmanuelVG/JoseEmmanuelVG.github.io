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
  const { content, data } = matter(raw);
  const meta: ProjectMeta = { slug, ...(data as any) };
  return { source: content, data: meta };
}

export function getAllProjectMetas(): ProjectMeta[] {
  return getProjectSlugs().map((slug) => getProjectSource(slug).data);
}
