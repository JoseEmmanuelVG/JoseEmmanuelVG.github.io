'use client';
import { useState } from "react";
import Link from "next/link";
import Card from "./Card";
import Badge from "./Badge";
import FilterChips from "./FilterChips";
import Section from "./Section";
import type { ProjectMeta } from "../lib/projects";

export default function ProjectsClient({ projects }: { projects: ProjectMeta[] }) {
  const [active, setActive] = useState<string[]>([]);
  const allTags = Array.from(new Set(projects.flatMap(p => p.category)));
  const list = projects.filter(p => active.length ? p.category.some(c => active.includes(c)) : true);

  return (
    <>
      <Section title="Filtrar por categoría">
        <FilterChips items={allTags} onChange={setActive} />
      </Section>

      <div className="grid gap-4 sm:grid-cols-2">
        {list.map(p => (
          <Card key={p.slug}>
            <h3 className="font-semibold">{p.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{p.summary}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {p.category.map(c => <Badge key={c}>{c}</Badge>)}
              {p.tech.slice(0,3).map(t => <Badge key={t}>{t}</Badge>)}
            </div>
            <div className="mt-3 flex gap-3 text-sm">
              <a className="underline" href={`/projects/${p.slug}`}>Ver ficha</a>
              {p.repo && <a className="underline" href={p.repo} target="_blank">Repo</a>}
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
