import { ButtonLink } from "@/components/ui/Button";
import { finalCta } from "@/content/home";
import { getContactChannels } from "@/lib/channels";
import { externalProps } from "@/lib/links";

export function FinalCta() {
  const channels = getContactChannels();

  return (
    <section
      id={finalCta.id}
      aria-labelledby={`${finalCta.id}-baslik`}
      data-theme="dark"
      className="relative flex min-h-svh items-center overflow-hidden bg-ink-soft py-section text-paper"
    >
      <span aria-hidden="true" className="absolute right-gutter top-0 h-full w-px bg-bordo-bright/60" />
      <div className="container-site">
        <h2 id={`${finalCta.id}-baslik`} className="reveal font-serif text-display">
          {finalCta.title.map((line, i) => (
            <span key={i} className="block">
              {line.text}
              {line.emphasis && <em className="font-normal italic text-paper/70">{line.emphasis}</em>}
            </span>
          ))}
        </h2>
        <div className="mt-14 grid gap-10 border-t border-line-on-dark pt-10 lg:mt-20 lg:grid-cols-12 lg:items-center">
          <p className="max-w-[40ch] text-lead text-mute-on-dark lg:col-span-6">{finalCta.description}</p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-6 lg:col-span-6 lg:justify-end">
            {channels.length > 0 && (
              <ul className="flex flex-wrap gap-x-8 gap-y-3">
                {channels.map((c) => (
                  <li key={c.href}>
                    <a href={c.href} {...externalProps(c.href)} className="label-text text-mute-on-dark hover:text-paper">
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            <ButtonLink href={finalCta.cta.href} arrow className="bg-bordo-bright! hover:bg-bordo!">
              {finalCta.cta.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
