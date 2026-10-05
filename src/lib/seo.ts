import type { Metadata } from "next";

import { absoluteUrl, siteConfig } from "@/config/site";
import type { PageSeo, Service } from "@/content/types";

/** Builds page metadata (title, description, canonical, Open Graph, Twitter) from content. */
export function buildMetadata(page: PageSeo): Metadata {
  const isHome = page.path === "/";
  const images = page.ogImage ? [{ url: page.ogImage }] : undefined;
  const noindex = page.noindex || !siteConfig.indexable;

  return {
    // The home title is complete on its own; other pages use the layout template.
    title: isHome ? { absolute: page.title } : page.title,
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url: page.path,
      title: isHome ? page.title : `${page.title} | ${siteConfig.name}`,
      description: page.description,
      ...(images && { images }),
    },
    twitter: {
      card: "summary_large_image",
      title: isHome ? page.title : `${page.title} | ${siteConfig.name}`,
      description: page.description,
      ...(images && { images }),
    },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
  };
}

export function organizationJsonLd(services: Service[]) {
  const { contact } = siteConfig;
  const sameAs = [contact.instagram].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.name,
    url: siteConfig.url,
    description:
      "Premium sosyal medya ve kreatif içerik stüdyosu. Sosyal medya yönetimi, Reels, UGC, AI UGC ve içerik stratejisi.",
    ...(sameAs.length > 0 && { sameAs }),
    ...(contact.email && {
      contactPoint: { "@type": "ContactPoint", contactType: "customer support", email: contact.email },
    }),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hizmetler",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.summary },
      })),
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "tr-TR",
    publisher: { "@id": absoluteUrl("/#organization") },
  };
}

/** Serialises JSON-LD safely for a <script> tag (escapes "<" against injection). */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
