import type { ReactNode } from "react";

import type { SectionIntro } from "@/content/types";

type SectionHeaderProps = {
  intro: SectionIntro;
  tone?: "light" | "dark";
  /** Extra content aligned to the right on desktop (e.g. rail controls). */
  aside?: ReactNode;
  className?: string;
};

/** Label + serif H2 + optional description, laid out on the editorial grid. */
export function SectionHeader({ intro, tone = "light", aside, className = "" }: SectionHeaderProps) {
  const muted = tone === "dark" ? "text-mute-on-dark" : "text-mute";
  const titleId = `${intro.id}-baslik`;

  return (
    <header className={`grid gap-8 lg:grid-cols-12 lg:items-end ${className}`}>
      <div className="lg:col-span-7">
        <p className={`label-text flex items-center gap-3 ${muted}`}>
          <span aria-hidden="true" className="h-px w-8 bg-bordo" />
          {intro.label}
        </p>
        <h2 id={titleId} className="mt-6 font-serif text-h2">
          {intro.title}
        </h2>
      </div>
      {(intro.description || aside) && (
        <div className="flex flex-col gap-8 lg:col-span-4 lg:col-start-9">
          {intro.description && <p className={`max-w-prose ${muted}`}>{intro.description}</p>}
          {aside}
        </div>
      )}
    </header>
  );
}
