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
    theme: "light",
    cover: {
      src: "/portfolio/maison-vera/maison-vera-01.png",
      alt: "Traverten taş üzerinde siyah kapaklı MAISON VÉRA Nº 01 parfüm şişesi ve krem kutusu; yanında bordo saten kumaş ve beyaz çiçekler",
      width: 1536,
      height: 1024,
    },
    coverCaption: "Ana ürün — MAISON VÉRA Nº 01 parfüm şişesi ve kutusu.",
    storyTitle: "Sessizce iz bırakan bir imza.",
    story: [
      "MAISON VÉRA, OLUKA Studio'nun kreatif yaklaşımını göstermek için tasarladığı kurgusal bir parfüm evi. Çıkış noktamız basit bir soruydu: Bir koku, yıllar sonra bile aynı his ile hatırlanabilir mi?",
      "Markanın hikâyesini bu soru üzerine kurduk. MAISON VÉRA gösterişi değil, kalıcılığı anlatıyor; acele etmeyen, sessizce iz bırakan bir imza. “Zamansız Bir İmza” sloganı da bu fikrin kısa hâli.",
    ],
    approachTitle: "Tek bir dil, üç temas noktası.",
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
    closing: { before: "Markanız için de ", emphasis: "bir imza", after: " kuralım." },
    seo: {
      title: "MAISON VÉRA — Konsept Proje",
      description:
        "MAISON VÉRA: OLUKA Studio'nun marka kimliği ve kreatif prodüksiyon yaklaşımını gösteren konsept parfüm markası projesi. Kimlik, kampanya ve ambalaj tasarımı.",
    },
  },
  {
    slug: "noir-coffee",
    brand: "NOIR COFFEE",
    status: "concept",
    category: "Sosyal Medya & Kreatif İçerik",
    tagline: "Her fincanda bir ritüel.",
    summary:
      "Kurgusal bir specialty kahve markası için koyu, sıcak ve sakin bir sosyal medya dili: ürün çekimleri, espresso anları ve feed kurgusu tek bir atmosferde buluşuyor.",
    scope: ["Sosyal medya konsepti", "Ürün ve ambalaj çekimleri", "Kreatif içerik üretimi", "Feed kurgusu"],
    theme: "dark",
    cover: {
      src: "/portfolio/noir-coffee/noir-coffee-01.png",
      alt: "Koyu mermer masada mat siyah NOIR COFFEE kahve paketi, köpüklü kahve dolu siyah fincan ve kahve çekirdekleri; arkada bakır masa lambası",
      width: 1536,
      height: 1024,
    },
    coverCaption: "Ana ürün ve ambalaj — Mat siyah paket ve imza fincan.",
    storyTitle: "Kahveyi bir alışkanlıktan ritüele taşımak.",
    story: [
      "NOIR COFFEE, OLUKA Studio'nun kreatif yaklaşımını göstermek için tasarladığı kurgusal bir specialty kahve markası. Fikir, günün en sıradan anını en özenli anına dönüştürmekti.",
      "Marka; mat siyah, espresso kahvesi, bakır ve krem tonlarından oluşan koyu ve sıcak bir dünyada yaşıyor. “Her fincanda bir ritüel.” sloganı, hazırlanışın her adımına gösterilen özeni anlatıyor.",
    ],
    approachTitle: "Karanlıkta sıcak bir ışık.",
    approach: [
      {
        title: "Atmosfer",
        description:
          "Loş ortam, tek yönlü sıcak ışık ve koyu mermer yüzeyler. Bakır detaylar ve krem köpük, siyahın içinde gözü yönlendiren tek parlak noktalar.",
      },
      {
        title: "Ürün ve ambalaj",
        description:
          "Mat siyah paket ve fincan, ince serif logotiple sade tutuldu. Çekimlerde ambalaj her zaman doğal bir sahnenin parçası olarak yer alıyor.",
      },
      {
        title: "Espresso anı",
        description:
          "Demleme sürecinin buhar, akış ve ritim gibi detaylarını yakın plan çekimlerle anlatan, kısa video ve Reels'e uygun kareler.",
      },
    ],
    socialConcept: {
      title: "Feed'de sakin, tutarlı bir ritüel.",
      description:
        "Sosyal medya konsepti, markanın gününü bir ritüel gibi kurguluyor. Her paylaşım aynı ışık, renk ve tipografi dilini kullanıyor; böylece feed tek tek gönderilerden çok bütün bir atmosfer olarak görünüyor.",
      pillars: [
        { title: "Sabah ritüeli", description: "Günün ilk fincanı, demleme adımları ve sakin masa düzenleri." },
        { title: "Çekirdekten fincana", description: "Çekirdek, öğütme ve espresso çekimi üzerine kısa, öğretici içerikler." },
        { title: "Eşlikçiler", description: "Kahveyle birlikte anılan küçük anlar: kruvasan, kitap, bir sohbet." },
      ],
    },
    gallery: [
      {
        image: {
          src: "/portfolio/noir-coffee/noir-coffee-02.png",
          alt: "Paslanmaz çelik espresso makinesinden siyah NOIR COFFEE fincanına akan espresso ve yükselen buhar; arkada kahve paketi ve tamper",
          width: 1536,
          height: 1024,
        },
        caption: "Espresso çekimi — Buhar, akış ve sıcak ışıkla yakın plan demleme anı.",
      },
      {
        image: {
          src: "/portfolio/noir-coffee/noir-coffee-03.png",
          alt: "Mermer masada latte art'lı siyah NOIR COFFEE fincanı, kruvasan, kahve paketi ve çekirdek dolu kase; arkada ahşap sandalye ve kuru çiçekler",
          width: 1536,
          height: 1024,
        },
        caption: "Sosyal medya kampanyası — Feed için kurgulanan sabah ritüeli sahnesi.",
      },
    ],
    closing: { before: "Markanız için de ", emphasis: "bir ritüel", after: " kuralım." },
    seo: {
      title: "NOIR COFFEE — Konsept Proje",
      description:
        "NOIR COFFEE: OLUKA Studio'nun sosyal medya ve kreatif içerik yaklaşımını gösteren konsept kahve markası projesi. Ürün çekimleri, espresso anları ve feed kurgusu.",
    },
  },
];
