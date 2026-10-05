/**
 * Content model.
 *
 * These types are the contract between content and presentation. They are
 * shaped so that a CMS (Sanity, Contentful, Strapi…) can return the same
 * structures later: only the functions in `src/lib/content.ts` would change.
 */

/** Neutral tone used while an image has no file yet. */
export type ImageTone = "paper" | "stone" | "sepia" | "ink" | "bordo";

export type MediaImage = {
  /** Path under /public or a remote URL (add its host to next.config `images.remotePatterns`). */
  src?: string;
  /** Meaningful description for screen readers and search engines. */
  alt: string;
  /** Frame ratio on the page. The file is cropped to it with object-fit: cover. */
  width: number;
  height: number;
  /** CSS object-position for the crop, e.g. "50% 40%". Defaults to center. */
  position?: string;
  /** Placeholder tone until `src` is provided. */
  tone?: ImageTone;
  /** Art direction note shown on the placeholder; doubles as a brief for stock or AI imagery. */
  note?: string;
};

export type Link = { label: string; href: string };

export type Service = {
  slug: string;
  title: string;
  summary: string;
  deliverables: string[];
  image: MediaImage;
};

export type ProjectCategory = {
  slug: string;
  title: string;
};

export type Project = {
  slug: string;
  title: string;
  /**
   * "concept" projects are always labelled "Konsept Çalışma" on the site.
   * Switch to "client" only for real, approved client work.
   */
  status: "concept" | "client";
  /** Real client name. Leave undefined for concept work. */
  client?: string;
  sector: string;
  summary: string;
  categories: string[]; // ProjectCategory slugs
  services: string[]; // Service slugs
  cover: MediaImage;
  featured?: boolean;
};

export type Expertise = {
  slug: string;
  title: string;
  kicker: string;
  lead: string;
  points: string[];
  theme: "light" | "dark";
  images: [MediaImage, MediaImage, MediaImage?];
};

export type Value = { title: string; description: string };

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  image: MediaImage;
};

export type SectionIntro = {
  id: string;
  label: string;
  title: string;
  description?: string;
};

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  /** Optional custom share image under /public; defaults to the generated one. */
  ogImage?: string;
  noindex?: boolean;
};
