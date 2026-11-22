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
  return buildMetadata({ ...cs.seo, path: `/projeler/${cs.slug}`, ogImage: cs.cover.src });
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="label-text flex items-center gap-3 text-mute">
      <span aria-hidden="true" className="h-px w-8 bg-bordo" />
      {children}
    </p>
  );
}

export default async function CaseStudyPage(props: PageProps<"/projeler/[slug]">) {
  const { slug } = await props.params;
  const cs = await getCaseStudy(slug);
  if (!cs) notFound();
  const concept = cs.status === "concept";

  return (
    <article aria-labelledby="proje-baslik">
      {/* Intro */}
      <header className="pt-[calc(var(--spacing-header)+3rem)] lg:pt-[calc(var(--spacing-header)+5rem)]">
        <div className="container-site">
          <Link
            href={`/#${selectedProjectsIntro.id}`}
            className="group label-text inline-flex min-h-11 items-center gap-3 text-mute hover:text-ink"
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
                <p className="label-text text-mute">{cs.category}</p>
              </div>
              <h1 id="proje-baslik" className="mt-8 font-serif text-h1">
                {cs.brand}
              </h1>
              <p className="mt-4 font-serif text-h3 italic text-bordo">{cs.tagline}</p>
            </div>
            <p className="max-w-prose text-lead text-mute lg:col-span-4 lg:col-start-9">{cs.summary}</p>
          </div>

          <dl className="mt-14 grid gap-6 border-t border-line pt-8 text-sm sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
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
        <figcaption className="mt-4 text-sm text-mute">{cs.coverCaption}</figcaption>
      </figure>

      {/* Brand story */}
      <section aria-labelledby="hikaye-baslik" className="py-section">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <SectionLabel>Marka Hikâyesi</SectionLabel>
            <h2 id="hikaye-baslik" className="mt-6 font-serif text-h3">
              Sessizce iz bırakan bir imza.
            </h2>
          </div>
          <div className="space-y-6 text-lead text-mute lg:col-span-6 lg:col-start-7">
            {cs.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Creative approach */}
      <section aria-labelledby="yaklasim-baslik" className="border-t border-line py-section">
        <div className="container-site">
          <SectionLabel>Kreatif Yaklaşım</SectionLabel>
          <h2 id="yaklasim-baslik" className="mt-6 max-w-[18ch] font-serif text-h2">
            Tek bir dil, üç temas noktası.
          </h2>
          <ol className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8 lg:mt-20">
            {cs.approach.map((step, i) => (
              <li key={step.title} className="border-t border-line pt-6">
                <span className="label-text text-bordo">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-serif text-h4">{step.title}</h3>
                <p className="mt-4 text-mute">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Gallery: campaign and packaging */}
      <section aria-label="Proje görselleri" className="pb-section">
        <div className="container-site grid gap-16 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-24">
          {cs.gallery.map((item, i) => (
            <figure key={item.image.src ?? item.caption} className={`reveal ${i % 2 === 0 ? "lg:col-span-9" : "lg:col-span-9 lg:col-start-4"}`}>
              <EditorialImage image={item.image} sizes="(min-width: 1024px) 70vw, 94vw" className="w-full" />
              <figcaption className="mt-4 text-sm text-mute">{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Honest note + next step */}
      <section aria-labelledby="not-baslik" className="border-t border-line py-section">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-7">
            {concept && (
              <p className="max-w-prose text-sm text-mute">
                <strong className="font-medium text-ink">Konsept Proje:</strong> {cs.brand}, OLUKA Studio&apos;nun kreatif
                yaklaşımını göstermek için tasarlanmış kurgusal bir markadır. Gerçek bir müşteri çalışması değildir; satış,
                erişim veya başka bir ticari sonuç içermez.
              </p>
            )}
            <h2 id="not-baslik" className="mt-10 font-serif text-h2">
              Markanız için de <em className="font-normal italic text-bordo">bir imza</em> kuralım.
            </h2>
          </div>
          <div className="flex flex-col items-start gap-6 lg:col-span-4 lg:col-start-9 lg:items-end">
            <ButtonLink href={primaryCta.href} arrow>
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink href={`/#${selectedProjectsIntro.id}`} variant="text">
              Ana sayfaya dön
            </ButtonLink>
          </div>
        </div>
      </section>
    </article>
  );
}
