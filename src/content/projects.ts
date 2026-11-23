import type { Project, ProjectCategory } from "./types";

/**
 * Portfolio categories. Only categories that have at least one project are
 * shown in the filter, so the list can stay complete without empty states.
 */
export const projectCategories: ProjectCategory[] = [
  { slug: "sosyal-medya", title: "Sosyal Medya" },
  { slug: "e-ticaret", title: "E-Ticaret" },
  { slug: "e-lojistik", title: "E-Lojistik" },
  { slug: "ugc-ai-ugc", title: "UGC & AI UGC" },
  { slug: "reels-video", title: "Reels & Video" },
  { slug: "icerik-stratejisi", title: "İçerik Stratejisi" },
];

/**
 * Portfolio projects.
 *
 * All current entries are concept work prepared to show OLUKA's approach.
 * They are not client projects. Replace them with real work by changing
 * `status` to "client" and filling `client` only for approved, real projects.
 */
export const projects: Project[] = [
  {
    slug: "sessiz-sezon",
    title: "Sessiz Sezon",
    status: "concept",
    sector: "Moda / E-Ticaret",
    summary:
      "Yeni sezon lansmanı için kurgulanmış bir içerik dizisi: kısa dikey filmler, ürün detay çekimleri ve mağaza sayfasıyla aynı dili konuşan görseller.",
    categories: ["e-ticaret", "reels-video", "sosyal-medya"],
    services: ["reels-short-form-video", "sosyal-medya-tasarimlari", "icerik-stratejisi"],
    featured: true,
    cover: {
      src: "/portfolio/sessiz-sezon.jpg",
      alt: "Gri stüdyo fonu önünde beyaz dik yakalı gömlek ve krem pantolonla, gözleri kapalı poz veren model",
      width: 1800,
      height: 1200,
      // Portrait photo in a landscape frame: keep the face and shirt in view.
      position: "50% 67%",
    },
  },
  {
    slug: "yavas-ev",
    title: "Yavaş Ev",
    status: "concept",
    sector: "Mobilya / Lifestyle",
    summary:
      "Bir mobilya koleksiyonunu evde geçen sakin anlar üzerinden anlatan UGC tarzı içerikler ve koleksiyon hikâyesi.",
    categories: ["ugc-ai-ugc", "icerik-stratejisi", "sosyal-medya"],
    services: ["ugc-icerik-uretimi", "icerik-stratejisi"],
    cover: {
      src: "/portfolio/yavas-ev.jpg",
      alt: "Gizli aydınlatmalı kemer nişi, ahşap detaylar ve bej modüler kanepeyle sade, sıcak tonlu bir oturma odası",
      width: 1200,
      height: 1500,
    },
  },
  {
    slug: "son-kilometre",
    title: "Son Kilometre",
    status: "concept",
    sector: "E-Lojistik",
    summary:
      "Bir paketin depodan kapıya yolculuğunu anlatan kısa belgesel serisi. Operasyonun görünmeyen tarafını insan hikâyeleriyle görünür kılar.",
    categories: ["e-lojistik", "reels-video"],
    services: ["reels-short-form-video", "video-edit"],
    cover: {
      src: "/portfolio/son-kilometre.jpg",
      alt: "Koli dolu yüksek raflar arasında, tavan ışıklarıyla aydınlanan uzun ve simetrik bir depo koridoru",
      width: 1200,
      height: 1500,
    },
  },
  {
    slug: "rituel",
    title: "Ritüel",
    status: "concept",
    sector: "Güzellik / E-Ticaret",
    summary:
      "Bir cilt bakım serisi için AI UGC ile üretilmiş, farklı kitlelere uyarlanabilen ürün anlatımları.",
    categories: ["ugc-ai-ugc", "e-ticaret"],
    services: ["ai-ugc", "video-edit"],
    cover: {
      src: "/portfolio/rituel.jpg",
      alt: "Beyaz mermer üzerinde siyah kapaklı iki buzlu cam krem kavanozu ve sicimle bağlanmış kuru lavanta demeti",
      width: 1800,
      height: 1200,
    },
  },
];
