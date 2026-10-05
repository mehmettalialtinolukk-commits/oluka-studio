import { EditorialImage } from "@/components/ui/EditorialImage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Expertise as ExpertiseArea } from "@/content/types";
import { getExpertise } from "@/lib/content";

function AreaCopy({ area, dark }: { area: ExpertiseArea; dark: boolean }) {
  const muted = dark ? "text-mute-on-dark" : "text-mute";
  const line = dark ? "border-line-on-dark" : "border-line";

  return (
    <div className="reveal">
      <p className={`label-text ${muted}`}>Uzmanlık alanı</p>
      <h3 className="mt-5 font-serif text-h1">{area.title}</h3>
      <p className={`mt-6 font-serif text-h4 italic ${dark ? "text-paper/90" : "text-bordo"}`}>{area.kicker}</p>
      <p className={`mt-8 max-w-prose ${muted}`}>{area.lead}</p>
      <ul className={`mt-10 border-t ${line}`}>
        {area.points.map((point) => (
          <li key={point} className={`flex gap-4 border-b ${line} py-4`}>
            <span aria-hidden="true" className={`mt-[0.8em] h-px w-5 shrink-0 ${dark ? "bg-paper/50" : "bg-bordo"}`} />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CommerceVisual({ area }: { area: ExpertiseArea }) {
  const [screen, product, parcel] = area.images;
  return (
    <div className="relative pb-[22%] pt-[6%]">
      <div aria-hidden="true" className="absolute left-[18%] top-0 h-[70%] w-[46%] border border-bordo/60" />
      <EditorialImage image={screen} sizes="(min-width: 1024px) 28vw, 52vw" className="relative w-[52%]" />
      <div className="parallax-slow absolute right-0 top-[20%] w-[46%]">
        <EditorialImage image={product} sizes="(min-width: 1024px) 25vw, 46vw" className="w-full" />
      </div>
      {parcel && (
        <div className="parallax-fast absolute bottom-0 left-[32%] w-[34%] border-[6px] border-paper lg:border-8">
          <EditorialImage image={parcel} sizes="(min-width: 1024px) 18vw, 34vw" className="w-full" />
        </div>
      )}
    </div>
  );
}

function LogisticsVisual({ area }: { area: ExpertiseArea }) {
  const [warehouse, delivery] = area.images;
  return (
    <div className="relative pb-[26%]">
      <div aria-hidden="true" className="absolute -left-[4%] -top-[6%] h-[64%] w-[40%] bg-bordo-deep" />
      <EditorialImage image={warehouse} sizes="(min-width: 1024px) 50vw, 92vw" className="relative w-[92%]" />
      <div className="parallax-fast absolute bottom-0 right-0 w-[40%] border-[6px] border-ink lg:border-8">
        <EditorialImage image={delivery} sizes="(min-width: 1024px) 22vw, 40vw" className="w-full" />
      </div>
    </div>
  );
}

export async function Expertise() {
  const { intro, areas } = await getExpertise();

  return (
    <section id={intro.id} aria-labelledby={`${intro.id}-baslik`}>
      <div className="container-site pt-section">
        <SectionHeader intro={intro} className="reveal" />
      </div>

      {areas.map((area, i) => {
        const dark = area.theme === "dark";
        const visual = i % 2 === 0 ? <CommerceVisual area={area} /> : <LogisticsVisual area={area} />;
        return (
          <article
            key={area.slug}
            id={area.slug}
            aria-label={area.title}
            data-theme={dark ? "dark" : undefined}
            className={dark ? "mt-section bg-ink py-section text-paper" : "py-section"}
          >
            <div className="container-site grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
              {i % 2 === 0 ? (
                <>
                  <div className="lg:col-span-5">
                    <AreaCopy area={area} dark={dark} />
                  </div>
                  <div className="lg:col-span-6 lg:col-start-7">{visual}</div>
                </>
              ) : (
                <>
                  <div className="order-2 lg:order-1 lg:col-span-6">{visual}</div>
                  <div className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8">
                    <AreaCopy area={area} dark={dark} />
                  </div>
                </>
              )}
            </div>
          </article>
        );
      })}
    </section>
  );
}
