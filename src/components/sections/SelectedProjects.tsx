import Link from "next/link";

import { ArrowIcon } from "@/components/ui/Button";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { selectedProjectsIntro } from "@/content/case-studies";
import type { CaseStudy } from "@/content/types";
import { getCaseStudies } from "@/lib/content";

export function ConceptLabel({ caseStudy }: { caseStudy: CaseStudy }) {
  if (caseStudy.status !== "concept") return null;
  return <span className="label-text inline-flex border border-bordo px-3 py-1.5 text-bordo">Konsept Proje</span>;
}

/** Home page showcase: each case study as a large cover that opens its detail page. */
export async function SelectedProjects() {
  const caseStudies = await getCaseStudies();
  if (caseStudies.length === 0) return null;
  const { id } = selectedProjectsIntro;

  return (
    <section id={id} aria-labelledby={`${id}-baslik`} className="py-section">
      <div className="container-site">
        <SectionHeader intro={selectedProjectsIntro} className="reveal mb-14 lg:mb-20" />
        <ul className="grid gap-24 lg:gap-32">
          {caseStudies.map((cs) => (
            <li key={cs.slug}>
              <article className="group reveal relative">
                <div className="overflow-hidden">
                  <EditorialImage
                    image={cs.cover}
                    sizes="(min-width: 92rem) 88rem, 94vw"
                    className="w-full"
                    imageClassName="transition-transform duration-(--duration-slow) ease-editorial group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-12 lg:items-end lg:gap-8">
                  <div className="lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-4">
                      <ConceptLabel caseStudy={cs} />
                      <p className="label-text text-mute">{cs.category}</p>
                    </div>
                    <h3 className="mt-6 font-serif text-h2">
                      {/* The link covers the whole card; the title stays its accessible name. */}
                      <Link href={`/projeler/${cs.slug}`} className="after:absolute after:inset-0">
                        {cs.brand}
                      </Link>
                    </h3>
                    <p className="mt-3 font-serif text-h4 italic text-bordo">{cs.tagline}</p>
                  </div>
                  <div className="lg:col-span-4 lg:col-start-9">
                    <p className="max-w-prose text-mute">{cs.summary}</p>
                    <span aria-hidden="true" className="mt-6 inline-flex min-h-11 items-center gap-3 border-b border-current pb-1 font-medium transition-colors duration-(--duration-base) ease-editorial group-hover:text-bordo">
                      Projeyi incele
                      <ArrowIcon />
                    </span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
