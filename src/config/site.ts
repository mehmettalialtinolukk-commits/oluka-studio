/**
 * Central site configuration.
 *
 * Everything that depends on the real domain or on real contact details lives
 * here. Values that are not known yet are left as `null` and the UI hides the
 * related element until they are filled in. Never put placeholder addresses here.
 */

function resolveSiteUrl(): string {
  // 1. The real domain, set in Vercel → Project → Settings → Environment Variables.
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  // 2. Vercel's own production URL (*.vercel.app) until the domain is connected.
  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProduction) return `https://${vercelProduction}`;

  // 3. Local development.
  return "http://localhost:3000";
}

export const siteConfig = {
  name: "OLUKA Studio",
  /** Visual form of the name. The dot is decorative only. */
  wordmark: { primary: "OLUKA", secondary: "Studio" },
  url: resolveSiteUrl(),
  locale: "tr_TR",
  language: "tr",

  /**
   * Search engines may index the site only when the real domain is configured
   * and the build is a production build. Preview deployments and the temporary
   * *.vercel.app address stay out of search results.
   */
  indexable:
    Boolean(process.env.NEXT_PUBLIC_SITE_URL) &&
    (process.env.VERCEL_ENV ? process.env.VERCEL_ENV === "production" : process.env.NODE_ENV === "production"),

  /** Public contact channels. `null` = not shown anywhere on the site. */
  contact: {
    email: null as string | null,
    /** Full profile URL, e.g. https://www.instagram.com/<kullanici-adi>/ */
    instagram: null as string | null,
    /** International format without spaces or "+", e.g. 905XXXXXXXXX */
    whatsapp: null as string | null,
  },

  /** Data controller details for the KVKK notice. Filled in once known. */
  legalEntity: {
    title: null as string | null,
    address: null as string | null,
    email: null as string | null,
  },
} as const;

export type SiteConfig = typeof siteConfig;

export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}

export function whatsappUrl(number: string): string {
  return `https://wa.me/${number.replace(/\D/g, "")}`;
}
