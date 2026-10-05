"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { ArrowIcon } from "@/components/ui/Button";

type ServicesRailProps = {
  label: string;
  children: ReactNode;
};

/**
 * Horizontal services rail.
 * Native horizontal scrolling only: trackpad, touch swipe, keyboard and the
 * previous/next buttons. Vertical page scrolling is never intercepted.
 */
export function ServicesRail({ label, children }: ServicesRailProps) {
  const railRef = useRef<HTMLUListElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = rail.scrollWidth - rail.clientWidth;
      const ratio = max > 0 ? rail.scrollLeft / max : 1;
      setAtStart(rail.scrollLeft <= 4);
      setAtEnd(rail.scrollLeft >= max - 4);
      if (progressRef.current) {
        const visible = rail.clientWidth / rail.scrollWidth;
        progressRef.current.style.transform = `scaleX(${Math.min(1, visible + ratio * (1 - visible))})`;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    rail.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      rail.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const step = (direction: 1 | -1) => {
    const rail = railRef.current;
    const card = rail?.querySelector("li");
    if (!rail || !card) return;
    const gap = parseFloat(getComputedStyle(rail).columnGap) || 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    rail.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: reduce ? "auto" : "smooth" });
  };

  const control =
    "flex size-12 cursor-pointer items-center justify-center border border-ink transition-colors duration-(--duration-base) ease-editorial hover:bg-ink hover:text-paper disabled:cursor-default disabled:border-line disabled:text-mute disabled:hover:bg-transparent";

  return (
    <div>
      <div className="container-site mb-10 flex items-center gap-6 lg:mb-14">
        <div className="relative h-px flex-1 bg-line" aria-hidden="true">
          <span ref={progressRef} className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-(--duration-fast)" />
        </div>
        <div className="hidden gap-2 md:flex">
          <button type="button" className={control} onClick={() => step(-1)} disabled={atStart} aria-label="Önceki hizmetler">
            <ArrowIcon className="rotate-180 group-hover:translate-x-0" />
          </button>
          <button type="button" className={control} onClick={() => step(1)} disabled={atEnd} aria-label="Sonraki hizmetler">
            <ArrowIcon />
          </button>
        </div>
      </div>
      <ul
        ref={railRef}
        tabIndex={0}
        role="list"
        aria-label={label}
        className="rail flex gap-5 overflow-x-auto pb-4 focus-visible:outline-offset-[-2px] lg:gap-8"
      >
        {children}
      </ul>
    </div>
  );
}
