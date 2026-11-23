import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ConceptLabel } from "@/components/sections/SelectedProjects";
import { ArrowIcon, ButtonLink } from "@/components/ui/Button";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { selectedProjectsIntro } from "@/content/case-studies";
import { primaryCta } from "@/content/home";
import { getCaseStudies, getCaseStudy } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

/** Only the case studies in content exist; any other slug is a 404. */
export const dynamicParams = false;

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies();
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata(props: PageProps<"/projeler/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const cs = await getCaseStudy(slug);
  if (!cs) return {};
  return buildMetadata({ ...cs.seo, path: `/projeler/${cs.slug}`, ogImageAlt: cs.cover.alt });
}

/** Colour roles per page atmosphere. "light" is the default OLUKA palette; "dark" is the dark luxury variant. */
const themes = {
  light: { root: "", mute: "text-mute", line: "border-line", accent: "text-bordo", rule: "bg-bordo", strong: "text-ink", hover: "hover:text-ink" },
  dark: { root: "bg-ink text-paper", mute: "text-mute-on-dark", line: "border-line-on-dark", accent: "text-copper", rule: "bg-copper", strong: "text-paper", hover: "hover:text-paper" },
};
type Theme = (typeof themes)[keyof typeof themes];

function SectionLabel({ children, theme }: { children: string; theme: Theme }) {
  return (
    <p className={`label-text flex items-center gap-3 ${theme.mute}`}>
      <span aria-hidden="true" className={`h-px w-8 ${theme.rule}`} />
      {children}
    </p>
  );
}

export default async function CaseStudyPage(props: PageProps<"/projeler/[slug]">) {
  const { slug } = await props.params;
  const cs = await getCaseStudy(slug);
  if (!cs) notFound();
  const concept = cs.status === "concept";
  const dark = cs.theme === "dark";
  const th = themes[cs.theme];

  return (
    <article aria-labelledby="proje-baslik" data-theme={dark ? "dark" : undefined} className={th.root || undefined}>
      {/* Intro */}
      <header className="pt-[calc(var(--spacing-header)+3rem)] lg:pt-[calc(var(--spacing-header)+5rem)]">
        <div className="container-site">
          <Link
            href={`/#${selectedProjectsIntro.id}`}
            className={`group label-text inline-flex min-h-11 items-center gap-3 ${th.mute} ${th.hover}`}
          >
            {/* Rotated wrapper: the arrow's own hover nudge then points back. */}
            <span aria-hidden="true" className="inline-flex rotate-180">
              <ArrowIcon />
            </span>
            {selectedProjectsIntro.label}
          </Link>

          <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:items-end lg:gap-8">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-4">
                <ConceptLabel caseStudy={cs} />
                <p className={`label-text ${th.mute}`}>{cs.category}</p>
              </div>
              <h1 id="proje-baslik" className="mt-8 font-serif text-h1">
                {cs.brand}
              </h1>
              <p className={`mt-4 font-serif text-h3 italic ${th.accent}`}>{cs.tagline}</p>
            </div>
            <p className={`max-w-prose text-lead lg:col-span-4 lg:col-start-9 ${th.mute}`}>{cs.summary}</p>
          </div>

          <dl className={`mt-14 grid gap-6 border-t pt-8 ${th.line} text-sm sm:grid-cols-2 lg:mt-20 lg:grid-cols-4`}>
            <div>
              <dt className="label-text text-mute">Marka</dt>
              <dd className="mt-2">{cs.brand}</dd>
            </div>
            <div>
              <dt className="label-text text-mute">Kategori</dt>
              <dd className="mt-2">{cs.category}</dd>
            </div>
            <div>
              <dt className="label-text text-mute">Tür</dt>
              <dd className="mt-2">{concept ? "Konsept Proje (gerçek müşteri çalışması değildir)" : "Müşteri Projesi"}</dd>
            </div>
            <div>
              <dt className="label-text text-mute">Kapsam</dt>
              <dd className="mt-2">{cs.scope.join(", ")}</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* Cover: main product */}
      <figure className="container-site mt-14 lg:mt-20">
        <EditorialImage image={cs.cover} sizes="(min-width: 92rem) 88rem, 94vw" className="w-full" priority />
        <figcaption className={`mt-4 text-sm ${th.mute}`}>{cs.coverCaption}</figcaption>
      </figure>

      {/* Brand story */}
      <section aria-labelledby="hikaye-baslik" className="py-section">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <SectionLabel theme={th}>Marka Hikâyesi</SectionLabel>
            <h2 id="hikaye-baslik" className="mt-6 font-serif text-h3">
              {cs.storyTitle}
            </h2>
          </div>
          <div className={`space-y-6 text-lead lg:col-span-6 lg:col-start-7 ${th.mute}`}>
            {cs.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Creative approach */}
      <section aria-labelledby="yaklasim-baslik" className={`border-t py-section ${th.line}`}>
        <div className="container-site">
          <SectionLabel theme={th}>Kreatif Yaklaşım</SectionLabel>
          <h2 id="yaklasim-baslik" className="mt-6 max-w-[18ch] font-serif text-h2">
            {cs.approachTitle}
          </h2>
          <ol className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8 lg:mt-20">
            {cs.approach.map((step, i) => (
              <li key={step.title} className={`border-t pt-6 ${th.line}`}>
                <span className={`label-text ${th.accent}`}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-serif text-h4">{step.title}</h3>
                <p className={`mt-4 ${th.mute}`}>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Social media concept (optional) */}
      {cs.socialConcept && (
        <section aria-labelledby="sosyal-baslik" className={`border-t py-section ${th.line}`}>
          <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <SectionLabel theme={th}>Sosyal Medya Konsepti</SectionLabel>
              <h2 id="sosyal-baslik" className="mt-6 font-serif text-h3">
                {cs.socialConcept.title}
              </h2>
              <p className={`mt-6 max-w-prose ${th.mute}`}>{cs.socialConcept.description}</p>
            </div>
            <ul className="lg:col-span-6 lg:col-start-7" aria-label="İçerik başlıkları">
              {cs.socialConcept.pillars.map((pillar) => (
                <li key={pillar.title} className={`grid gap-2 border-t py-6 sm:grid-cols-[14rem_1fr] sm:gap-6 ${th.line}`}>
                  <h3 className="font-serif text-h4">{pillar.title}</h3>
                  <p className={th.mute}>{pillar.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section aria-label="Proje görselleri" className="pb-section">
        <div className="container-site grid gap-16 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-24">
          {cs.gallery.map((item, i) => (
            <figure key={item.image.src ?? item.caption} className={`reveal ${i % 2 === 0 ? "lg:col-span-9" : "lg:col-span-9 lg:col-start-4"}`}>
              <EditorialImage image={item.image} sizes="(min-width: 1024px) 70vw, 94vw" className="w-full" />
              <figcaption className={`mt-4 text-sm ${th.mute}`}>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Honest note + next step */}
      <section aria-labelledby="not-baslik" className={`border-t py-section ${th.line}`}>
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-7">
            {concept && (
              <p className={`max-w-prose text-sm ${th.mute}`}>
                <strong className={`font-medium ${th.strong}`}>Konsept Proje:</strong> {cs.brand}, OLUKA Studio&apos;nun kreatif
                yaklaşımını göstermek için tasarlanmış kurgusal bir markadır. Gerçek bir müşteri çalışması değildir; satış,
                erişim veya başka bir ticari sonuç içermez.
              </p>
            )}
            <h2 id="not-baslik" className="mt-10 font-serif text-h2">
              {cs.closing.before}
              <em className={`font-normal italic ${th.accent}`}>{cs.closing.emphasis}</em>
              {cs.closing.after}
            </h2>
          </div>
          <div className="flex flex-col items-start gap-6 lg:col-span-4 lg:col-start-9 lg:items-end">
            <ButtonLink href={primaryCta.href} arrow variant={dark ? "outline-light" : "primary"}>
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink href={`/#${selectedProjectsIntro.id}`} variant="text" className={dark ? "text-paper! hover:text-copper!" : ""}>
              Ana sayfaya dön
            </ButtonLink>
          </div>
        </div>
      </section>
    </article>
  );
}
