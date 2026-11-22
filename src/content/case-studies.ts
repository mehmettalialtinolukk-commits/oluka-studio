import type { CaseStudy, SectionIntro } from "./types";

export const selectedProjectsIntro: SectionIntro = {
  id: "secili-projeler",
  label: "Seçili Projeler",
  title: "Bir markayı baştan kurmak.",
  description:
    "OLUKA'nın kreatif yaklaşımını göstermek için hazırladığımız konsept projeler. Gerçek müşteri çalışmaları değildir.",
};

/**
 * Case studies with a detail page.
 *
 * MAISON VÉRA is a fictional brand created by OLUKA Studio as a concept
 * project. Keep `status: "concept"`: the site then labels it "Konsept Proje".
 * Do not add client names, metrics or commercial results to concept work.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "maison-vera",
    brand: "MAISON VÉRA",
    status: "concept",
    category: "Marka Kimliği & Kreatif Prodüksiyon",
    tagline: "Zamansız Bir İmza",
    summary:
      "Kurgusal bir parfüm evi için baştan sona kurgulanan marka dünyası: kimlik, kampanya görselleri ve ambalaj tek bir sessiz lüks dilinde buluşuyor.",
    scope: ["Marka kimliği", "Kampanya görselleri", "Ambalaj tasarımı", "Kreatif yönetim"],
    cover: {
      src: "/portfolio/maison-vera/maison-vera-01.png",
      alt: "Traverten taş üzerinde siyah kapaklı MAISON VÉRA Nº 01 parfüm şişesi ve krem kutusu; yanında bordo saten kumaş ve beyaz çiçekler",
      width: 1536,
      height: 1024,
    },
    coverCaption: "Ana ürün — MAISON VÉRA Nº 01 parfüm şişesi ve kutusu.",
    story: [
      "MAISON VÉRA, OLUKA Studio'nun kreatif yaklaşımını göstermek için tasarladığı kurgusal bir parfüm evi. Çıkış noktamız basit bir soruydu: Bir koku, yıllar sonra bile aynı his ile hatırlanabilir mi?",
      "Markanın hikâyesini bu soru üzerine kurduk. MAISON VÉRA gösterişi değil, kalıcılığı anlatıyor; acele etmeyen, sessizce iz bırakan bir imza. “Zamansız Bir İmza” sloganı da bu fikrin kısa hâli.",
    ],
    approach: [
      {
        title: "Kimlik",
        description:
          "İnce serifli logotip ve iç içe geçmiş MV monogramı, markanın sakin ve özenli karakterini taşıyor. Krem, bej ve siyah ana paleti oluştururken bordo yalnızca küçük detaylarda kullanılıyor.",
      },
      {
        title: "Kampanya",
        description:
          "Doğal taş, gün ışığı ve yumuşak gölgelerle kurulan sahneler ürünü ön plana alıyor. Her kare aynı ışık ve doku diliyle, bir editoryal dergi sayfası gibi kurgulandı.",
      },
      {
        title: "Ambalaj",
        description:
          "Krem kutu, saten iç yüzey ve bordo kurdele kutu açılışını bir ritüele dönüştürüyor. Slogan, kutunun içindeki küçük kartta markanın imzası olarak yer alıyor.",
      },
    ],
    gallery: [
      {
        image: {
          src: "/portfolio/maison-vera/maison-vera-02.png",
          alt: "Gün ışığı ve yaprak gölgeleri altında taş bir zemin üzerinde MAISON VÉRA parfüm şişesi; yanında kuru ağaç kabuğu, beyaz çiçek ve keten kumaş",
          width: 1536,
          height: 1024,
        },
        caption: "Kampanya — Doğal taş, gün ışığı ve keten dokusuyla kurgulanan ürün sahnesi.",
      },
      {
        image: {
          src: "/portfolio/maison-vera/maison-vera-03.png",
          alt: "Bordo kurdeleli krem MAISON VÉRA kutusu ve saten kaplı açık kutuda parfüm şişesi ile üzerinde “Zamansız Bir İmza” yazan kart",
          width: 1536,
          height: 1024,
        },
        caption: "Ambalaj — Bordo kurdele, saten iç yüzey ve “Zamansız Bir İmza” kartı.",
      },
    ],
    seo: {
      title: "MAISON VÉRA — Konsept Proje",
      description:
        "MAISON VÉRA: OLUKA Studio'nun marka kimliği ve kreatif prodüksiyon yaklaşımını gösteren konsept parfüm markası projesi. Kimlik, kampanya ve ambalaj tasarımı.",
    },
  },
];
