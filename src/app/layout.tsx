import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Hanken_Grotesk } from "next/font/google";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { siteConfig } from "@/config/site";
import { primaryCta } from "@/content/home";
import { mainNavigation, pageSeo } from "@/content/site";
import { getContactChannels } from "@/lib/channels";
import { getServices } from "@/lib/content";
import { organizationJsonLd, serializeJsonLd, websiteJsonLd } from "@/lib/seo";

import "./globals.css";

// Display serif: high-contrast, variable weight + optical size, OFL, full Turkish support.
const bodoni = Bodoni_Moda({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-bodoni",
  display: "swap",
});

// UI / body sans: clean, variable weight, OFL, full Turkish support.
const hanken = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: pageSeo.home.title, template: `%s | ${siteConfig.name}` },
  description: pageSeo.home.description,
  applicationName: siteConfig.name,
  openGraph: { siteName: siteConfig.name, locale: siteConfig.locale, type: "website" },
  formatDetection: { telephone: false, email: false, address: false },
  robots: siteConfig.indexable ? { index: true, follow: true } : { index: false, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f5f2ec",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const services = await getServices();
  const channels = getContactChannels();

  return (
    <html lang={siteConfig.language} className={`${bodoni.variable} ${hanken.variable}`}>
      <body id="top">
        <a
          href="#icerik"
          className="sr-only z-60 bg-ink px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          İçeriğe geç
        </a>
        <SiteHeader navigation={mainNavigation} cta={primaryCta} channels={channels} />
        <main id="icerik">{children}</main>
        <SiteFooter channels={channels} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd([organizationJsonLd(services), websiteJsonLd()]) }}
        />
      </body>
    </html>
  );
}
