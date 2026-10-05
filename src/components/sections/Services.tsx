import { EditorialImage } from "@/components/ui/EditorialImage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { servicesIntro } from "@/content/home";
import type { Service } from "@/content/types";
import { getServices } from "@/lib/content";

import { ServicesRail } from "./ServicesRail";

export function ServiceCard({ service, index, total }: { service: Service; index: number; total: number }) {
  return (
    <article className="group flex h-full flex-col">
      <div className="overflow-hidden">
        <EditorialImage
          image={service.image}
          sizes="(min-width: 1024px) 28vw, (min-width: 640px) 46vw, 80vw"
          className="w-full"
          imageClassName="transition-transform duration-(--duration-slow) ease-editorial group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-6 flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-h4">{service.title}</h3>
        <span className="label-text shrink-0 text-mute" aria-hidden="true">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
      <p className="mt-3 text-mute">{service.summary}</p>
      <ul className="mt-6 border-t border-line text-sm" aria-label={`${service.title} kapsamı`}>
        {service.deliverables.map((d) => (
          <li key={d} className="flex items-center gap-3 border-b border-line py-3">
            <span aria-hidden="true" className="size-1 rounded-full bg-bordo" />
            {d}
          </li>
        ))}
      </ul>
    </article>
  );
}

export async function Services() {
  const services = await getServices();

  return (
    <section id={servicesIntro.id} aria-labelledby={`${servicesIntro.id}-baslik`} className="py-section">
      <div className="container-site">
        <SectionHeader intro={servicesIntro} className="reveal mb-16 lg:mb-20" />
      </div>
      <ServicesRail label="Hizmetler listesi, yatay kaydırılabilir">
        {services.map((service, i) => (
          <li key={service.slug} className="w-[80vw] shrink-0 sm:w-[46vw] lg:w-[clamp(20rem,28vw,27rem)]">
            <ServiceCard service={service} index={i} total={services.length} />
          </li>
        ))}
      </ServicesRail>
    </section>
  );
}
