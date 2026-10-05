import type { MetadataRoute } from "next";

import { absoluteUrl, siteConfig } from "@/config/site";

/** Crawling is allowed only once the real domain is configured on production. */
export default function robots(): MetadataRoute.Robots {
  if (!siteConfig.indexable) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
