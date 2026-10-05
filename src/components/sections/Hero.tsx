import { ButtonLink } from "@/components/ui/Button";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { hero } from "@/content/home";

export function Hero() {
  const { images } = hero;

  return (
    <section aria-labelledby="hero-baslik" className="relative overflow-hidden pb-20 pt-[calc(var(--spacing-header)+2.5rem)] lg:pb-28 lg:pt-[calc(var(--spacing-header)+3rem)]">
      <div className="container-site grid gap-y-16 lg:grid-cols-12 lg:gap-x-8">
        {/* Copy */}
        <div className="relative z-20 lg:col-span-7 lg:pt-6">
          <p className="label-text flex items-center gap-3 text-mute">
            <span aria-hidden="true" className="h-px w-8 bg-bordo" />
            {hero.eyebrow}
          </p>
          <h1 id="hero-baslik" className="mt-8 font-serif text-display lg:w-[140%]">
            {hero.title.map((line, i) => (
              <span key={i} className="block">
                {line.text}
                {line.emphasis && <em className="font-normal italic text-bordo">{line.emphasis}</em>}
              </span>
            ))}
          </h1>
          <div className="mt-10 grid gap-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end lg:mt-12 lg:block">
            <p className="max-w-[36ch] text-lead text-ink/80">{hero.support}</p>
            <div className="flex flex-wrap gap-3 lg:mt-8">
              <ButtonLink href={hero.primaryCta.href} arrow>
                {hero.primaryCta.label}
              </ButtonLink>
              <ButtonLink href={hero.secondaryCta.href} variant="outline">
                {hero.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* Layered images */}
        <div className="relative pb-[18%] lg:col-span-5 lg:pb-0">
          <div aria-hidden="true" className="absolute right-[6%] top-[7%] h-[78%] w-[74%] border border-bordo/70 lg:-right-6 lg:top-12 lg:h-[88%] lg:w-[82%]" />
          <div className="motion-rise relative ml-auto w-[80%] overflow-hidden lg:w-[88%]" style={{ "--delay": "80ms" } as React.CSSProperties}>
            <EditorialImage
              image={images.main}
              priority
              sizes="(min-width: 1024px) 36vw, 80vw"
              className="w-full"
              imageClassName="motion-settle"
            />
          </div>
          <div className="parallax-fast absolute bottom-0 left-0 w-[56%] lg:-left-[34%] lg:bottom-[-14%] lg:w-[64%]">
            <div className="motion-rise border-[6px] border-paper lg:border-8" style={{ "--delay": "260ms" } as React.CSSProperties}>
              <EditorialImage image={images.secondary} sizes="(min-width: 1024px) 26vw, 56vw" className="w-full" />
            </div>
          </div>
          <div className="parallax-slow absolute left-[4%] top-[-6%] hidden w-[26%] sm:block lg:-left-[10%] lg:top-[-4%] lg:w-[30%]">
            <div className="motion-rise" style={{ "--delay": "420ms" } as React.CSSProperties}>
              <EditorialImage image={images.detail} sizes="(min-width: 1024px) 12vw, 26vw" className="w-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-site mt-20 lg:mt-32">
        <ul className="flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-line pt-6 text-sm text-mute" aria-label="Odak alanları">
          {hero.keywords.map((k) => (
            <li key={k} className="label-text">
              {k}
            </li>
          ))}
          <li aria-hidden="true" className="label-text ml-auto hidden items-center gap-3 text-ink sm:flex">
            Kaydırın
            <span className="block h-8 w-px bg-ink/40" />
          </li>
        </ul>
      </div>
    </section>
  );
}
