import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/config/site";
import { caseStudies } from "@/content/case-studies";
import { kvkkNotice, privacyPolicy } from "@/content/legal";
import { pageSeo } from "@/content/site";

/** Generated from content; draft legal pages stay out until they are final. */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: pageSeo.home.path, priority: 1 },
    { path: pageSeo.contact.path, priority: 0.8 },
    ...caseStudies.map((cs) => ({ path: `/projeler/${cs.slug}`, priority: 0.7 })),
    ...(kvkkNotice.status === "final" ? [{ path: pageSeo.kvkk.path, priority: 0.2 }] : []),
    ...(privacyPolicy.status === "final" ? [{ path: pageSeo.privacy.path, priority: 0.2 }] : []),
  ];
  return pages.map((p) => ({ url: absoluteUrl(p.path), changeFrequency: "monthly", priority: p.priority }));
}
