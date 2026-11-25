import { ContactForm } from "@/components/contact/ContactForm";
import { ArrowIcon } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { contactDirectory, pageSeo } from "@/content/site";
import { getContactChannels } from "@/lib/channels";
import { getServices } from "@/lib/content";
import { externalProps } from "@/lib/links";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.contact);

/** Shared look of the out-of-service notes (same style as the legal pages' draft note). */
const noteClass = "border border-bordo/40 px-5 py-4 text-sm text-bordo";

/** A mailto link once the mailboxes are live; until then the same text without a link. */
function EmailAddress({ email, className }: { email: string; className: string }) {
  if (siteConfig.emailLive) {
    return (
      <a href={`mailto:${email}`} className={`${className} transition-colors duration-(--duration-base) ease-editorial hover:text-bordo`}>
        {email}
      </a>
    );
  }
  return <span className={className}>{email}</span>;
}

export default async function ContactPage() {
  const services = await getServices();
  const channels = getContactChannels();
  const { general, personal, projects } = contactDirectory;

  return (
    <section aria-labelledby="iletisim-baslik" className="pb-section pt-[calc(var(--spacing-header)+4rem)] lg:pt-[calc(var(--spacing-header)+7rem)]">
      <div className="container-site grid gap-20 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <p className="label-text flex items-center gap-3 text-mute">
            <span aria-hidden="true" className="h-px w-8 bg-bordo" />
            İletişim
          </p>
          <h1 id="iletisim-baslik" className="mt-8 font-serif text-h1">
            Projenizi <em className="font-normal italic text-bordo">konuşalım.</em>
          </h1>
          <p className="mt-8 max-w-[38ch] text-lead text-mute">
            Her güçlü marka, iyi bir fikirle başlar. Projenizi anlatın, birlikte nasıl fark yaratabileceğimizi keşfedelim.
          </p>

          {/* E-mail directory: the general address leads, personal addresses stay quieter. */}
          {!siteConfig.emailLive && (
            <p role="note" className={`mt-14 ${noteClass}`}>
              E-posta adreslerimiz henüz aktif değildir; kısa süre içinde kullanıma açılacaktır.
            </p>
          )}
          <div className={`${siteConfig.emailLive ? "mt-14" : "mt-8"} border-t border-line pt-8`}>
            <p className="label-text text-mute">{general.label}</p>
            <EmailAddress
              email={general.email}
              className="mt-3 inline-flex min-h-11 items-center break-all font-serif text-h3"
            />
            <p className="mt-2 max-w-[38ch] text-mute">{general.description}</p>
          </div>

          <div className="mt-10 grid gap-10 border-t border-line pt-8 sm:grid-cols-2 sm:gap-8">
            <div>
              <p className="label-text text-mute">{personal.label}</p>
              <ul className="mt-3">
                {personal.emails.map((email) => (
                  <li key={email}>
                    <EmailAddress email={email} className="inline-flex min-h-11 items-center" />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label-text text-mute">{projects.label}</p>
              <p className="mt-5 text-mute">{projects.description}</p>
              <a
                href="#iletisim-formu"
                className="group mt-3 inline-flex min-h-11 items-center gap-3 border-b border-current font-medium transition-colors duration-(--duration-base) ease-editorial hover:text-bordo"
              >
                {projects.formLinkLabel}
                <ArrowIcon />
              </a>
            </div>
          </div>

          {channels.length > 0 && (
            <div className="mt-14 border-t border-line pt-8">
              <p className="label-text text-mute">Diğer kanallar</p>
              <ul className="mt-5 space-y-3">
                {channels.map((c) => (
                  <li key={c.href}>
                    <a href={c.href} {...externalProps(c.href)} className="font-serif text-h4 hover:text-bordo">
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* scroll-mt: the "Forma git" link leaves some air under the fixed header. */}
        <div id="iletisim-formu" className="relative scroll-mt-8 lg:col-span-6 lg:col-start-7 lg:pt-4">
          <ContactForm services={services.map((s) => s.title)} available={siteConfig.contactFormLive} />
        </div>
      </div>
    </section>
  );
}
