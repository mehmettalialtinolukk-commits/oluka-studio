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

/**
 * Showcase project with its own detail page (/projeler/[slug]).
 * "concept" case studies are fictional brands made to show OLUKA's approach;
 * the site labels them "Konsept Proje" and never shows client names or results.
 */
export type CaseStudy = {
  slug: string;
  brand: string;
  status: "concept" | "client";
  category: string;
  tagline: string;
  summary: string;
  /** Short scope list shown in the project facts. */
  scope: string[];
  /** Page atmosphere: "dark" turns the card and detail page into the dark luxury variant. */
  theme: "light" | "dark";
  cover: MediaImage;
  coverCaption: string;
  storyTitle: string;
  story: string[];
  approachTitle: string;
  approach: { title: string; description: string }[];
  /** Optional social media concept block (idea + content pillars). */
  socialConcept?: { title: string; description: string; pillars: { title: string; description: string }[] };
  gallery: { image: MediaImage; caption: string }[];
  /** Closing headline; `emphasis` renders in italic accent colour. */
  closing: { before: string; emphasis: string; after: string };
  /** `ogImage`: 1200×630 share image under /public; the cover alt text is used for it. */
  seo: { title: string; description: string; ogImage?: string };
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
  /** Optional share image under /public, prepared at 1200×630; defaults to the OLUKA card (/og-kart). */
  ogImage?: string;
  /** Alt text for `ogImage`. */
  ogImageAlt?: string;
  noindex?: boolean;
};
