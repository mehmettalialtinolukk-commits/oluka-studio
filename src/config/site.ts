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

/**
 * V1 launch switches. Both stay off until the corporate mailboxes and the
 * Resend sending domain are verified and the legal texts are approved.
 * - Contact form: while off, no e-mail is sent and the visitor is told the form is not active yet.
 * - Google Analytics: while off, it never loads (even after consent, even on the live site).
 */
const CONTACT_FORM_SWITCHED_ON = false;
const ANALYTICS_SWITCHED_ON = false;

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

  /**
   * Google Analytics 4. It runs only after the visitor accepts analytics
   * cookies, and only on the live site: preview and local builds show the
   * cookie banner but send nothing to Google.
   */
  analytics: {
    gaMeasurementId: "G-V2FWDPJJZ2",
    enabled: ANALYTICS_SWITCHED_ON && process.env.VERCEL_ENV === "production",
  },

  /** Whether the contact form may send e-mail (see the launch switches above). */
  contactFormLive: CONTACT_FORM_SWITCHED_ON,

  /** Public contact channels. `null` = not shown anywhere on the site. */
  contact: {
    email: null as string | null,
    /** Full profile URL, e.g. https://www.instagram.com/<kullanici-adi>/ */
    instagram: null as string | null,
    /** International format without spaces or "+", e.g. 905XXXXXXXXX */
    whatsapp: null as string | null,
  },

  /**
   * Data controller for the KVKK notice and privacy policy. OLUKA Studio is not
   * a company yet; the brand is run by a natural person. The postal address is
   * not known yet: leave it null rather than guessing.
   */
  legalEntity: {
    title: "Mehmet Ali Altınoluk",
    address: null as string | null,
    email: "kvkk@oluka.com.tr",
  },
} as const;

export type SiteConfig = typeof siteConfig;

export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}

export function whatsappUrl(number: string): string {
  return `https://wa.me/${number.replace(/\D/g, "")}`;
}
