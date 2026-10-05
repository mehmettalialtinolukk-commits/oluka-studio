import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/config/site";
import { kvkkNotice, privacyPolicy } from "@/content/legal";
import { pageSeo } from "@/content/site";

/** Generated from content; draft legal pages stay out until they are final. */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: pageSeo.home.path, priority: 1 },
    { path: pageSeo.contact.path, priority: 0.8 },
    ...(kvkkNotice.status === "final" ? [{ path: pageSeo.kvkk.path, priority: 0.2 }] : []),
    ...(privacyPolicy.status === "final" ? [{ path: pageSeo.privacy.path, priority: 0.2 }] : []),
  ];
  return pages.map((p) => ({ url: absoluteUrl(p.path), changeFrequency: "monthly", priority: p.priority }));
}
