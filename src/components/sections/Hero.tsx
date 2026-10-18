import { ButtonLink } from "@/components/ui/Button";
import { HeroVideo } from "@/components/sections/HeroVideo";
import { hero } from "@/content/home";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-baslik"
      data-theme="dark"
      className="group/hero relative isolate flex min-h-svh flex-col overflow-hidden bg-ink pb-8 pt-[calc(var(--spacing-header)+3rem)] text-paper lg:pb-10"
    >
      {/* Background video: decorative and muted so browsers allow autoplay. bg-ink shows until it loads. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 motion-reduce:hidden">
        <HeroVideo src="/OLUKA_Studio_Hero_Web.mp4" />
        {/* Light scrims only where copy sits: header band on top, reading side on the left. */}
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-ink/45 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-ink/70 via-ink/40 to-ink/10 lg:from-ink/70 lg:via-ink/25 lg:via-40% lg:to-transparent lg:to-65%" />
      </div>

      <div className="container-site flex flex-1 items-center">
        {/* Fades out during the video's closing logo scene (see HeroVideo); stays visible while a button has focus. */}
        <div className="max-w-[46rem] py-12 transition-opacity duration-(--duration-slow) ease-editorial group-data-logo-scene/hero:not-focus-within:pointer-events-none group-data-logo-scene/hero:not-focus-within:opacity-0 lg:py-16">
          <p className="motion-rise label-text flex items-center gap-4 text-paper/75">
            <span aria-hidden="true" className="h-px w-10 bg-bordo-bright" />
            {hero.eyebrow}
          </p>
          <h1
            id="hero-baslik"
            className="motion-rise mt-8 font-serif text-h1 lg:mt-10"
            style={{ "--delay": "120ms" } as React.CSSProperties}
          >
            {hero.title.map((line, i) => (
              <span key={i} className="block">
                {line.text}
                {line.emphasis && <em className="font-normal italic text-paper/75">{line.emphasis}</em>}
              </span>
            ))}
          </h1>
          <p
            className="motion-rise mt-8 max-w-[38ch] text-lead text-paper/80 lg:mt-10"
            style={{ "--delay": "240ms" } as React.CSSProperties}
          >
            {hero.support}
          </p>
          <div
            className="motion-rise mt-10 flex flex-wrap gap-3 lg:mt-12"
            style={{ "--delay": "360ms" } as React.CSSProperties}
          >
            <ButtonLink href={hero.primaryCta.href} arrow>
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="outline-light">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="container-site">
        <ul className="flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-line-on-dark pt-6 text-sm text-paper/70" aria-label="Odak alanları">
          {hero.keywords.map((k) => (
            <li key={k} className="label-text">
              {k}
            </li>
          ))}
          <li aria-hidden="true" className="label-text ml-auto hidden items-center gap-3 text-paper sm:flex">
            Kaydırın
            <span className="block h-8 w-px bg-paper/50" />
          </li>
        </ul>
      </div>
    </section>
  );
}
