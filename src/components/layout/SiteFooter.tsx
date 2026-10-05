import Link from "next/link";

import { ArrowIcon } from "@/components/ui/Button";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { Wordmark } from "@/components/ui/Wordmark";
import { siteConfig } from "@/config/site";
import { primaryCta } from "@/content/home";
import { footer, footerNavigation, legalNavigation } from "@/content/site";
import type { Link as NavLink } from "@/content/types";
import { externalProps } from "@/lib/links";

export function SiteFooter({ channels }: { channels: NavLink[] }) {
  const year = new Date().getFullYear();

  return (
    <footer data-theme="dark" className="relative overflow-hidden bg-ink text-paper">
      {/* Burgundy layer behind the footer image */}
      <div aria-hidden="true" className="absolute right-0 top-0 hidden h-[clamp(22rem,42%,30rem)] w-[22%] bg-bordo-deep lg:block" />

      <div className="container-site relative pb-10 pt-24 lg:pt-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Wordmark size="lg" />
            <p className="mt-8 max-w-md text-lead text-mute-on-dark">{footer.tagline}</p>
            <Link
              href={primaryCta.href}
              className="group mt-12 inline-flex items-center gap-4 border-b border-paper/40 pb-2 font-serif text-h4 transition-colors hover:border-paper"
            >
              {primaryCta.label}
              <ArrowIcon />
            </Link>
          </div>
          <div className="hidden lg:col-span-3 lg:col-start-10 lg:block">
            <EditorialImage image={footer.image} sizes="20vw" className="mt-8 w-full" />
          </div>
        </div>

        <div className="mt-24 grid gap-12 border-t border-line-on-dark pt-12 sm:grid-cols-2 lg:grid-cols-12">
          <nav aria-label="Alt menü" className="lg:col-span-3">
            <p className="label-text text-mute-on-dark">Sayfalar</p>
            <ul className="mt-6 space-y-3">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-mute-on-dark">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {channels.length > 0 && (
            <div className="lg:col-span-3">
              <p className="label-text text-mute-on-dark">Bağlantı</p>
              <ul className="mt-6 space-y-3">
                {channels.map((c) => (
                  <li key={c.href}>
                    <a href={c.href} {...externalProps(c.href)} className="hover:text-mute-on-dark">
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <nav aria-label="Yasal" className="lg:col-span-3">
            <p className="label-text text-mute-on-dark">Yasal</p>
            <ul className="mt-6 space-y-3">
              {legalNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-mute-on-dark">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-line-on-dark pt-8 text-sm text-mute-on-dark sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Tüm hakları saklıdır.
          </p>
          <a href="#top" className="label-text hover:text-paper">
            Başa dön
          </a>
        </div>
      </div>
    </footer>
  );
}
