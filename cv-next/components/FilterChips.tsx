"use client";
import { useState } from "react";

export default function FilterChips({
  items,
  onChange,
}: {
  items: string[];
  onChange: (active: string[]) => void;
}) {
  const [active, setActive] = useState<string[]>([]);

  function toggle(tag: string) {
    const next = active.includes(tag) ? active.filter(t => t !== tag) : [...active, tag];
    setActive(next);
    onChange(next);
  }

  return (
    <div className="flex flex-wrap gap-2">
      {items.map(tag => (
        <button
          key={tag}
          onClick={() => toggle(tag)}
          className={`rounded-full border px-3 py-1 text-xs ${
            active.includes(tag) ? "bg-slate-900 text-white" : "bg-white hover:bg-slate-50"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
