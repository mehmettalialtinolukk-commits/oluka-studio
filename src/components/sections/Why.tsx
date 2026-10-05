import { EditorialImage } from "@/components/ui/EditorialImage";
import { why } from "@/content/home";

export function Why() {
  const { intro, values, image } = why;

  return (
    <section id={intro.id} aria-labelledby={`${intro.id}-baslik`} className="bg-paper-deep py-section">
      <div className="container-site grid gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <p className="label-text flex items-center gap-3 text-mute">
            <span aria-hidden="true" className="h-px w-8 bg-bordo" />
            {intro.label}
          </p>
          <h2 id={`${intro.id}-baslik`} className="mt-6 font-serif text-h1">
            {intro.title}
          </h2>
          {intro.description && <p className="mt-8 max-w-[38ch] text-lead text-ink/75">{intro.description}</p>}

          <ol className="mt-16 lg:mt-24">
            {values.map((value, i) => (
              <li key={value.title} className="reveal grid grid-cols-[3rem_1fr] gap-x-4 border-t border-ink/20 py-8 last:border-b">
                <span aria-hidden="true" className="pt-1 font-serif text-lg italic text-bordo">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-h4">{value.title}</h3>
                  <p className="mt-3 max-w-[44ch] text-mute">{value.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative lg:col-span-6 lg:col-start-7">
          <div className="lg:sticky lg:top-[calc(var(--spacing-header)+2rem)]">
            <div aria-hidden="true" className="absolute -bottom-6 -left-6 h-2/3 w-2/3 bg-bordo lg:-bottom-10 lg:-left-10" />
            <EditorialImage image={image} sizes="(min-width: 1024px) 46vw, 92vw" className="relative w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
