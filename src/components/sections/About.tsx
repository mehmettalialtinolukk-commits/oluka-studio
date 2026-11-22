import { about } from "@/content/home";

/** Quiet, text-led section that gives the eye a rest after the visual sections. */
export function About() {
  return (
    <section id={about.intro.id} aria-labelledby={`${about.intro.id}-baslik`} className="py-section">
      <div className="container-site">
        <div className="mx-auto max-w-5xl py-[4vw]">
          <p className="label-text flex items-center gap-3 text-mute">
            <span aria-hidden="true" className="h-px w-8 bg-bordo" />
            {about.intro.label}
          </p>
          <h2 id={`${about.intro.id}-baslik`} className="reveal mt-10 font-serif text-h2 font-normal">
            {about.statement}
          </h2>
          <div className="reveal mt-10 max-w-[52ch] space-y-6 text-lead text-mute lg:ml-[33%]">
            {about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="reveal mt-12 max-w-[30ch] font-serif text-h4 lg:ml-[33%]">
            {about.closing.text} <em className="font-normal italic text-bordo">{about.closing.emphasis}</em>
          </p>

          <ul className="mt-24 grid gap-10 sm:grid-cols-3 sm:gap-8">
            {about.values.map((value) => (
              <li key={value.title} className="reveal border-t border-ink pt-6">
                <h3 className="font-serif text-h4">{value.title}</h3>
                <p className="mt-3 text-mute">{value.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
