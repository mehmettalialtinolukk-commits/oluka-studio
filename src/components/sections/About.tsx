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
          <h2 id={`${about.intro.id}-baslik`} className="reveal mt-10 font-serif text-h3 leading-[1.18]! font-normal">
            {about.statement}
          </h2>
          <p className="reveal mt-10 max-w-[52ch] text-lead text-mute lg:ml-[33%]">{about.body}</p>

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
