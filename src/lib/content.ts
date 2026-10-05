/**
 * Content access layer.
 *
 * Components read content only through these functions. Today they return
 * local data; to connect a CMS later, replace the bodies with CMS queries that
 * return the same types. Nothing in the components needs to change.
 */
import { expertiseAreas, expertiseIntro } from "@/content/expertise";
import { projectCategories, projects } from "@/content/projects";
import { services } from "@/content/services";
import type { Project, ProjectCategory, Service } from "@/content/types";

export async function getServices(): Promise<Service[]> {
  return services;
}

export async function getExpertise() {
  return { intro: expertiseIntro, areas: expertiseAreas };
}

export async function getProjects(): Promise<Project[]> {
  // Featured project first, then the order given in the content file.
  return [...projects].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
}

/** Categories that have at least one project, in the configured order. */
export async function getUsedProjectCategories(): Promise<ProjectCategory[]> {
  const used = new Set(projects.flatMap((p) => p.categories));
  return projectCategories.filter((c) => used.has(c.slug));
}

export async function getProjectCategories(): Promise<ProjectCategory[]> {
  return projectCategories;
}
