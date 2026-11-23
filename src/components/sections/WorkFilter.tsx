"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import type { ProjectCategory } from "@/content/types";

type WorkFilterProps = {
  categories: ProjectCategory[];
  /** Pre-rendered project cards with the category slugs they belong to. */
  items: { slug: string; categories: string[]; featured: boolean; landscape: boolean; node: ReactNode }[];
};

/**
 * Category filter for the portfolio. Without JavaScript every project is
 * visible; the filter only hides items, it never changes the markup order.
 */
export function WorkFilter({ categories, items }: WorkFilterProps) {
  const [active, setActive] = useState<string | null>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  // Which edges of the swipeable filter row (phones) still hide chips.
  const [overflow, setOverflow] = useState({ start: false, end: false });
  const updateOverflow = () => {
    const el = filterRef.current;
    if (!el) return;
    const start = el.scrollLeft > 2;
    const end = el.scrollLeft + el.clientWidth < el.scrollWidth - 2;
    setOverflow((prev) => (prev.start === start && prev.end === end ? prev : { start, end }));
  };
  useEffect(() => {
    updateOverflow();
    window.addEventListener("resize", updateOverflow);
    return () => window.removeEventListener("resize", updateOverflow);
  }, []);
  // Soft fade on an edge that has more chips behind it; no fade once the row ends.
  const fade = `linear-gradient(to right, ${overflow.start ? "transparent, #000 2.5rem" : "#000, #000"}, ${
    overflow.end ? "#000 calc(100% - 4rem), transparent" : "#000"
  })`;
  const fadeStyle = overflow.start || overflow.end ? { maskImage: fade, WebkitMaskImage: fade } : undefined;
  const visible = items.filter((item) => !active || item.categories.includes(active));
  const rest = visible.filter((item) => !item.featured);
  const chip = (selected: boolean) =>
    `min-h-11 shrink-0 cursor-pointer border px-5 text-sm transition-colors duration-(--duration-base) ease-editorial ${
      selected ? "border-ink bg-ink text-paper" : "border-line hover:border-ink"
    }`;

  return (
    <>
      {categories.length > 1 && (
        // Phones: one swipeable row that bleeds to the screen edges instead of three ragged rows.
        <div
          ref={filterRef}
          onScroll={updateOverflow}
          style={fadeStyle}
          role="group"
          aria-label="Kategoriye göre filtrele"
          className="mb-10 flex gap-2 sm:mb-14 sm:flex-wrap lg:mb-20 max-sm:-mx-[var(--spacing-gutter)] max-sm:overflow-x-auto max-sm:px-[var(--spacing-gutter)] max-sm:[scrollbar-width:none] max-sm:[&::-webkit-scrollbar]:hidden"
        >
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
      <ul className="grid gap-x-8 gap-y-16 sm:gap-y-24 lg:grid-cols-12 lg:gap-y-32">
        {visible.map((item) => (
          <li key={item.slug} className={item.featured ? "lg:col-span-12" : layoutFor(rest.indexOf(item), rest.length, item.landscape)}>
            {item.node}
          </li>
        ))}
      </ul>
    </>
  );
}

/** Asymmetric editorial rhythm for non-featured projects: offset pairs. */
function layoutFor(index: number, count: number, landscape: boolean): string {
  // A landscape card alone on the last row gets a wider, centred slot so its
  // shorter frame carries the same visual weight as the portrait cards.
  if (landscape && index === count - 1 && index % 2 === 0) return "lg:col-span-8 lg:col-start-3";
  const pattern = ["lg:col-span-5", "lg:col-span-5 lg:col-start-8 lg:mt-40", "lg:col-span-6 lg:col-start-2", "lg:col-span-4 lg:col-start-9 lg:mt-24"];
  return pattern[index % pattern.length];
}
