import { ContactForm } from "@/components/contact/ContactForm";
import { pageSeo } from "@/content/site";
import { getContactChannels } from "@/lib/channels";
import { getServices } from "@/lib/content";
import { externalProps } from "@/lib/links";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.contact);

export default async function ContactPage() {
  const services = await getServices();
  const channels = getContactChannels();

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
            Markanızı ve hedeflerinizi birkaç cümleyle anlatın. Talebinizi inceleyip size özel bir içerik yaklaşımıyla dönüş yapalım.
          </p>

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

        <div className="relative lg:col-span-6 lg:col-start-7 lg:pt-4">
          <ContactForm services={services.map((s) => s.title)} />
        </div>
      </div>
    </section>
  );
}
