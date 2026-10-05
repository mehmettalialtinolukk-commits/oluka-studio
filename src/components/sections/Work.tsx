import { EditorialImage } from "@/components/ui/EditorialImage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { workIntro } from "@/content/home";
import type { Project, ProjectCategory } from "@/content/types";
import { getProjects, getServices, getUsedProjectCategories } from "@/lib/content";

import { WorkFilter } from "./WorkFilter";

function StatusLabel({ project }: { project: Project }) {
  if (project.status !== "concept") return null;
  return <span className="label-text inline-flex border border-bordo px-3 py-1.5 text-bordo">Konsept Çalışma</span>;
}

export function ProjectCard({
  project,
  categories,
  serviceTitles,
  featured = false,
}: {
  project: Project;
  categories: ProjectCategory[];
  serviceTitles: string[];
  featured?: boolean;
}) {
  const categoryNames = categories.filter((c) => project.categories.includes(c.slug)).map((c) => c.title);

  return (
    <article className={`group reveal ${featured ? "grid items-end gap-10 lg:grid-cols-12 lg:gap-8" : ""}`}>
      <div className={`overflow-hidden ${featured ? "lg:col-span-8" : ""}`}>
        <EditorialImage
          image={project.cover}
          sizes={featured ? "(min-width: 1024px) 62vw, 92vw" : "(min-width: 1024px) 42vw, 92vw"}
          className="w-full"
          imageClassName="transition-transform duration-(--duration-slow) ease-editorial group-hover:scale-[1.02]"
        />
      </div>
      <div className={featured ? "lg:col-span-4" : "mt-8"}>
        <div className="flex flex-wrap items-center gap-4">
          <StatusLabel project={project} />
          <p className="label-text text-mute">{project.sector}</p>
        </div>
        <h3 className={`mt-6 font-serif ${featured ? "text-h2" : "text-h3"}`}>{project.client ?? project.title}</h3>
        {project.client && <p className="mt-2 text-mute">{project.title}</p>}
        <p className="mt-5 max-w-prose text-mute">{project.summary}</p>
        <dl className="mt-8 grid gap-4 border-t border-line pt-6 text-sm sm:grid-cols-2">
          <div>
            <dt className="label-text text-mute">Kategori</dt>
            <dd className="mt-2">{categoryNames.join(", ")}</dd>
          </div>
          <div>
            <dt className="label-text text-mute">Hizmetler</dt>
            <dd className="mt-2">{serviceTitles.join(", ")}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export async function Work() {
  const [projects, categories, services] = await Promise.all([getProjects(), getUsedProjectCategories(), getServices()]);
  const serviceTitle = new Map(services.map((s) => [s.slug, s.title]));

  const items = projects.map((project) => ({
    slug: project.slug,
    categories: project.categories,
    featured: Boolean(project.featured),
    node: (
      <ProjectCard
        project={project}
        categories={categories}
        serviceTitles={project.services.map((slug) => serviceTitle.get(slug) ?? slug)}
        featured={Boolean(project.featured)}
      />
    ),
  }));

  return (
    <section id={workIntro.id} aria-labelledby={`${workIntro.id}-baslik`} className="py-section">
      <div className="container-site">
        <SectionHeader intro={workIntro} className="reveal mb-14 lg:mb-20" />
        <WorkFilter categories={categories} items={items} />
      </div>
    </section>
  );
}
