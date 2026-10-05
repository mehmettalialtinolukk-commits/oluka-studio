"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { ButtonLink } from "@/components/ui/Button";
import { Wordmark } from "@/components/ui/Wordmark";
import type { Link as NavLink } from "@/content/types";
import { externalProps } from "@/lib/links";

type SiteHeaderProps = {
  navigation: NavLink[];
  cta: NavLink;
  /** Optional channels shown at the bottom of the mobile menu. */
  channels: NavLink[];
};

/**
 * Header states:
 * - top of the page: transparent over the hero
 * - scrolled: off-white with a hairline
 * - over a section marked data-theme="dark": dark variant for contrast
 * Mobile uses a full-screen overlay menu.
 */
export function SiteHeader({ navigation, cta, channels }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);
      const header = headerRef.current;
      const probeY = header ? header.offsetHeight / 2 : 36;
      const below = document
        .elementsFromPoint(window.innerWidth / 2, probeY)
        .find((el) => !header?.contains(el));
      setOnDark(Boolean(below?.closest('[data-theme="dark"]')));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const close = useCallback((returnFocus = true) => {
    setOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  }, []);

  // Mobile menu: lock page scroll, close on Escape, keep focus inside, close on desktop resize.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.style.overflow = "hidden";
    headerRef.current?.querySelector<HTMLElement>("[data-menu-first]")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return close();
      if (e.key !== "Tab" || !headerRef.current) return;
      const focusable = Array.from(
        headerRef.current.querySelectorAll<HTMLElement>("[data-menu-focus]"),
      ).filter((el) => el.offsetParent !== null);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 64rem)");
    const onDesktop = (e: MediaQueryListEvent) => e.matches && close(false);

    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onDesktop);
    return () => {
      root.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open, close]);

  const dark = onDark && !open;
  const surface = open
    ? "bg-paper text-ink"
    : dark
      ? `text-paper ${scrolled ? "bg-ink/85 backdrop-blur-md border-line-on-dark" : "border-transparent"}`
      : `text-ink ${scrolled ? "bg-paper/90 backdrop-blur-md border-line" : "border-transparent"}`;

  return (
    <header
      ref={headerRef}
      data-theme={dark ? "dark" : undefined}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,color,border-color] duration-(--duration-base) ease-editorial ${surface}`}
    >
      <div className="container-site flex h-header items-center justify-between gap-8">
        <Link href="/" aria-label="OLUKA Studio ana sayfa" className="relative z-10 -my-2 py-2" data-menu-focus onClick={() => open && close(false)}>
          <Wordmark />
        </Link>

        <nav aria-label="Ana menü" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative py-2 text-[0.92rem] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-(--duration-base) after:ease-editorial hover:after:scale-x-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <ButtonLink href={cta.href} className="min-h-11! px-5! text-[0.88rem]!">
              {cta.label}
            </ButtonLink>
          </div>
          <button
            ref={toggleRef}
            type="button"
            data-menu-focus
            aria-expanded={open}
            aria-controls="mobil-menu"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => (open ? close() : setOpen(true))}
            className="relative z-10 -mr-3 flex min-h-11 cursor-pointer items-center gap-3 px-3 lg:hidden"
          >
            <span className="label-text">{open ? "Kapat" : "Menü"}</span>
            <span aria-hidden="true" className="relative block h-3 w-6">
              <span className={`absolute left-0 h-px w-6 bg-current transition-transform duration-(--duration-base) ease-editorial ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-px w-6 bg-current transition-transform duration-(--duration-base) ease-editorial ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobil-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menü"
        hidden={!open}
        className="fixed inset-0 top-0 h-svh overflow-y-auto bg-paper pt-header text-ink lg:hidden"
      >
        <div className="container-site flex min-h-full flex-col pb-10">
          <nav aria-label="Mobil menü" className="mt-8">
            <ul className="border-t border-line">
              {navigation.map((item, i) => (
                <li key={item.href} className="border-b border-line">
                  <Link
                    href={item.href}
                    onClick={() => close(false)}
                    data-menu-focus
                    {...(i === 0 && { "data-menu-first": true })}
                    className="flex items-baseline justify-between py-5 font-serif text-h3"
                  >
                    {item.label}
                    <span aria-hidden="true" className="label-text text-mute">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto flex flex-col gap-8 pt-12">
            <ButtonLink href={cta.href} arrow onClick={() => close(false)} data-menu-focus className="w-full">
              {cta.label}
            </ButtonLink>
            {channels.length > 0 && (
              <ul className="flex flex-wrap gap-x-8 gap-y-3">
                {channels.map((c) => (
                  <li key={c.href}>
                    <a href={c.href} data-menu-focus className="label-text text-mute hover:text-ink" {...externalProps(c.href)}>
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
