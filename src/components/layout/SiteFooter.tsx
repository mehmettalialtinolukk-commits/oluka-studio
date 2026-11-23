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
              className="group relative mt-12 inline-flex items-center gap-4 border-b border-paper/40 pb-2 font-serif text-h4 transition-colors hover:border-paper max-lg:after:absolute max-lg:after:inset-x-0 max-lg:after:-inset-y-1.5"
            >
              {primaryCta.label}
              <ArrowIcon />
            </Link>
          </div>
          {/* Phones: centred below the brand copy. Phones and tablets: the photo's own 2:3 ratio (no crop). Desktop keeps its frame. */}
          <div className="lg:col-span-3 lg:col-start-10">
            <EditorialImage
              image={footer.image}
              sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, min(92vw, 18rem)"
              className="max-lg:aspect-[2/3]! max-sm:mx-auto max-sm:w-full max-sm:max-w-72 sm:w-2/5 lg:mt-8 lg:w-full"
            />
          </div>
        </div>

        <div className="mt-24 grid gap-12 border-t border-line-on-dark pt-12 max-sm:mt-16 sm:grid-cols-2 lg:grid-cols-12">
          <nav aria-label="Alt menü" className="lg:col-span-3">
            <p className="label-text text-mute-on-dark">Sayfalar</p>
            <ul className="mt-6 space-y-3 max-lg:mt-3 max-lg:space-y-0">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-mute-on-dark max-lg:flex max-lg:min-h-11 max-lg:w-fit max-lg:items-center">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {channels.length > 0 && (
            <div className="lg:col-span-3">
              <p className="label-text text-mute-on-dark">Bağlantı</p>
              <ul className="mt-6 space-y-3 max-lg:mt-3 max-lg:space-y-0">
                {channels.map((c) => (
                  <li key={c.href}>
                    <a href={c.href} {...externalProps(c.href)} className="hover:text-mute-on-dark max-lg:flex max-lg:min-h-11 max-lg:w-fit max-lg:items-center">
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <nav aria-label="Yasal" className="lg:col-span-3">
            <p className="label-text text-mute-on-dark">Yasal</p>
            <ul className="mt-6 space-y-3 max-lg:mt-3 max-lg:space-y-0">
              {legalNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-mute-on-dark max-lg:flex max-lg:min-h-11 max-lg:w-fit max-lg:items-center">
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
          <a href="#top" className="label-text relative hover:text-paper max-sm:self-start max-lg:after:absolute max-lg:after:-inset-x-2 max-lg:after:-inset-y-3.5">
            Başa dön
          </a>
        </div>
      </div>
    </footer>
  );
}
