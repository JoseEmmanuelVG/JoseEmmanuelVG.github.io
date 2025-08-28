'use client';

import { useMemo, useState } from "react";
import Link from "next/link";
import Card from "../components/Card";
import Badge from "../components/Badge";
import Section from "../components/Section";
import type { ProjectMeta } from "../lib/content";

export default function ProjectsClient({ projects }: { projects: ProjectMeta[] }) {
  const [active, setActive] = useState<string[]>([]);
  const allTags = useMemo(
    () => Array.from(new Set(projects.flatMap(p => p.category || []))),
    [projects]
  );

  const list = useMemo(
    () =>
      active.length
        ? projects.filter(p => p.category?.some(c => active.includes(c)))
        : projects,
    [projects, active]
  );

  return (
    <>
      <Section title="Categories">
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => {
            const on = active.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => setActive(on ? active.filter(t => t !== tag) : [...active, tag])}
                className={`rounded-full border px-3 py-1 text-xs ${
                  on ? "bg-slate-900 text-white" : "bg-white hover:bg-slate-50"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </Section>

      <div className="grid gap-4 sm:grid-cols-2">
        {list.map(p => (
          <Card key={p.slug}>
            <h3 className="font-semibold">{p.title}</h3>
            {p.summary && <p className="mt-1 text-sm text-slate-600">{p.summary}</p>}
            <div className="mt-2 flex flex-wrap gap-2">
              {p.category?.map(c => <Badge key={c}>{c}</Badge>)}
              {p.tech?.slice(0,3).map(t => <Badge key={t}>{t}</Badge>)}
            </div>
            <div className="mt-3 flex gap-3 text-sm">
              <Link className="underline" href={`/projects/${p.slug}`}>View details</Link>
              {p.repo && <a className="underline" href={p.repo} target="_blank">Repo</a>}
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
