import { EditorialImage } from "@/components/ui/EditorialImage";
import { process } from "@/content/home";

export function Process() {
  const { intro, steps } = process;

  return (
    <section id={intro.id} aria-labelledby={`${intro.id}-baslik`} className="py-section">
      <div className="container-site grid gap-16 lg:grid-cols-12 lg:gap-8">
        <header className="lg:col-span-4">
          <div className="lg:sticky lg:top-[calc(var(--spacing-header)+3rem)]">
            <p className="label-text flex items-center gap-3 text-mute">
              <span aria-hidden="true" className="h-px w-8 bg-bordo" />
              {intro.label}
            </p>
            <h2 id={`${intro.id}-baslik`} className="mt-6 font-serif text-h2">
              {intro.title}
            </h2>
            {intro.description && <p className="mt-8 max-w-[34ch] text-mute">{intro.description}</p>}
          </div>
        </header>

        <ol className="relative lg:col-span-7 lg:col-start-6">
          {/* Timeline line */}
          <span aria-hidden="true" className="absolute bottom-0 left-[0.3rem] top-2 w-px bg-line" />
          {steps.map((step) => (
            <li key={step.number} className="reveal relative grid gap-6 pb-16 pl-12 last:pb-0 sm:grid-cols-[1fr_11rem] sm:gap-10 lg:pb-24">
              <span aria-hidden="true" className="absolute left-0 top-2 size-[0.65rem] rounded-full border border-bordo bg-paper" />
              <div>
                <p className="font-serif text-lg italic text-bordo">{step.number}</p>
                <h3 className="mt-3 font-serif text-h3">{step.title}</h3>
                <p className="mt-5 max-w-[46ch] text-mute">{step.description}</p>
              </div>
              <EditorialImage image={step.image} sizes="(min-width: 640px) 11rem, 60vw" className="w-3/5 sm:mt-2 sm:w-full" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
