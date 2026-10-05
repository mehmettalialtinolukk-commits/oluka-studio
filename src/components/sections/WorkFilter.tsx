"use client";

import { useState, type ReactNode } from "react";

import type { ProjectCategory } from "@/content/types";

type WorkFilterProps = {
  categories: ProjectCategory[];
  /** Pre-rendered project cards with the category slugs they belong to. */
  items: { slug: string; categories: string[]; featured: boolean; node: ReactNode }[];
};

/**
 * Category filter for the portfolio. Without JavaScript every project is
 * visible; the filter only hides items, it never changes the markup order.
 */
export function WorkFilter({ categories, items }: WorkFilterProps) {
  const [active, setActive] = useState<string | null>(null);
  const visible = items.filter((item) => !active || item.categories.includes(active));
  const chip = (selected: boolean) =>
    `min-h-11 cursor-pointer border px-5 text-sm transition-colors duration-(--duration-base) ease-editorial ${
      selected ? "border-ink bg-ink text-paper" : "border-line hover:border-ink"
    }`;

  return (
    <>
      {categories.length > 1 && (
        <div role="group" aria-label="Kategoriye göre filtrele" className="mb-14 flex flex-wrap gap-2 lg:mb-20">
          <button type="button" aria-pressed={active === null} className={chip(active === null)} onClick={() => setActive(null)}>
            Tümü
          </button>
          {categories.map((c) => (
            <button key={c.slug} type="button" aria-pressed={active === c.slug} className={chip(active === c.slug)} onClick={() => setActive(c.slug)}>
              {c.title}
            </button>
          ))}
        </div>
      )}
      <p className="sr-only" aria-live="polite">
        {visible.length} proje gösteriliyor
      </p>
      <ul className="grid gap-x-8 gap-y-24 lg:grid-cols-12 lg:gap-y-32">
        {visible.map((item) => (
          <li key={item.slug} className={item.featured ? "lg:col-span-12" : layoutFor(visible.filter((v) => !v.featured).indexOf(item))}>
            {item.node}
          </li>
        ))}
      </ul>
    </>
  );
}

/** Asymmetric editorial rhythm for non-featured projects: offset pairs. */
function layoutFor(index: number): string {
  const pattern = ["lg:col-span-5", "lg:col-span-5 lg:col-start-8 lg:mt-40", "lg:col-span-6 lg:col-start-2", "lg:col-span-4 lg:col-start-9 lg:mt-24"];
  return pattern[index % pattern.length];
}
