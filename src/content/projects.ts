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
      alt: "Sade bir stüdyoda yeni sezon kıyafetleriyle poz veren model",
      width: 1800,
      height: 1200,
      tone: "sepia",
      note: "Moda editoryal, nötr fon, yumuşak ışık",
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
      alt: "Gün ışığı alan bir oturma odasında ahşap sandalye ve keten kumaş",
      width: 1200,
      height: 1500,
      tone: "stone",
      note: "İç mekân, sabah ışığı, doğal malzemeler",
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
      alt: "Sabah saatlerinde paketleri teslimat aracına yükleyen bir kurye",
      width: 1200,
      height: 1500,
      tone: "ink",
      note: "Şafak ışığı, depo kapısı, hareket",
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
      alt: "Mermer bir yüzeyde cam şişeli cilt bakım ürünleri",
      width: 1800,
      height: 1200,
      tone: "paper",
      note: "Ürün still life, mermer, yumuşak gölge",
    },
  },
];
