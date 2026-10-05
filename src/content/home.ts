import type { Link, MediaImage, ProcessStep, SectionIntro, Value } from "./types";

/** Primary call to action used across the site. */
export const primaryCta: Link = { label: "Projenizi Konuşalım", href: "/iletisim" };

export const hero = {
  eyebrow: "Sosyal medya ve kreatif içerik stüdyosu",
  /** Each entry is one line of the H1. `emphasis` renders in the accent style. */
  title: [{ text: "İçerikten fazlası." }, { text: "Bir marka ", emphasis: "deneyimi." }],
  support:
    "Sosyal medya yönetimi, kreatif içerik ve dijital stratejiyi bir araya getirerek markaların yalnızca görünmesini değil, hatırlanmasını sağlıyoruz.",
  primaryCta,
  secondaryCta: { label: "Çalışmalarımızı Keşfedin", href: "/#calismalar" } satisfies Link,
  keywords: ["Strateji", "Kreatif içerik", "Sosyal medya", "Video"],
  // width/height keep the approved frame ratios of the layered composition
  // (4:5, 4:3, 4:5); `position` picks the crop point inside each frame.
  images: {
    main: {
      src: "/images/hero/hero-detail.png",
      alt: "Ekranında OLUKA içerik ızgarası açık bir dizüstü bilgisayar, yanında fotoğraf makinesi ve basılı moodboard'lar",
      width: 1200,
      height: 1500,
      position: "48% 50%",
      tone: "sepia",
    },
    secondary: {
      src: "/images/hero/hero-secondary.png",
      alt: "Stüdyoda tripoda takılı telefonla OLUKA etiketli bir mumun dikey video çekimi",
      width: 1400,
      height: 1050,
      position: "50% 40%",
      tone: "ink",
    },
    detail: {
      src: "/images/hero/hero-main-v2.png",
      alt: "Bordo kadife ve kurutulmuş çiçeklerle düzenlenmiş bir masada OLUKA marka kartı, Instagram profili açık bir telefon ve renk paleti",
      width: 800,
      height: 1000,
      position: "57% 50%",
      tone: "stone",
    },
  } satisfies Record<string, MediaImage>,
};

export const servicesIntro: SectionIntro = {
  id: "hizmetler",
  label: "Hizmetler",
  title: "Markanız için kurduğumuz içerik sistemi.",
  description:
    "Stratejiden üretime, yönetimden danışmanlığa kadar her hizmet aynı hedefe çalışır: markanızın akılda kalması.",
};

export const workIntro: SectionIntro = {
  id: "calismalar",
  label: "Çalışmalar",
  title: "Seçili çalışmalar",
  description:
    "Buradaki projeler, OLUKA'nın yaklaşımını göstermek için hazırlanmış konsept çalışmalardır. Gerçek müşteri işleri değildir.",
};

export const why = {
  intro: {
    id: "neden-oluka",
    label: "Yaklaşımımız",
    title: "Neden OLUKA?",
    description: "Güzel içerik üretmek başlangıç. Asıl iş, o içeriği markanız için anlamlı kılmak.",
  } satisfies SectionIntro,
  values: [
    {
      title: "Stratejik Yaklaşım",
      description:
        "Her içerik, markanızın hedefinden ve kitlesinden başlar. Neyi neden ürettiğimizi bilerek karar veririz.",
    },
    {
      title: "Yaratıcı Bakış Açısı",
      description:
        "Akışta kaybolmayan, markanızın diliyle konuşan ve akılda kalan içerikler tasarlarız.",
    },
    {
      title: "Tüm Süreçte Destek",
      description:
        "Fikirden yayına, yayından değerlendirmeye kadar tek bir ekip olarak yanınızdayız.",
    },
  ] satisfies Value[],
  image: {
    alt: "Stüdyoda içerik çekimine hazırlanan ekip, ışık ve kamera düzeni",
    width: 1200,
    height: 1500,
    tone: "stone",
    note: "Stüdyo anı, ekip ve ışık, sakin kompozisyon",
  } satisfies MediaImage,
};

export const process = {
  intro: {
    id: "surec",
    label: "Çalışma süreci",
    title: "Dört adımda, net bir süreç.",
    description: "Her aşamada ne yaptığımızı ve neden yaptığımızı birlikte görürüz.",
  } satisfies SectionIntro,
  steps: [
    {
      number: "01",
      title: "Tanışma",
      description:
        "Markanızı, hedeflerinizi ve beklentilerinizi dinliyoruz. Mevcut hesaplarınızı ve sektörünüzü birlikte inceliyoruz.",
      image: { alt: "Bir kafede defter ve kahveyle yapılan tanışma görüşmesi", width: 800, height: 600, tone: "sepia" },
    },
    {
      number: "02",
      title: "Strateji",
      description:
        "İçerik yönünü, formatları, tonu ve yayın planını belirliyoruz. Her kararın gerekçesini sizinle paylaşıyoruz.",
      image: { alt: "Masada yan yana dizilmiş içerik planı sayfaları", width: 800, height: 600, tone: "paper" },
    },
    {
      number: "03",
      title: "Üretim",
      description:
        "Çekim, UGC, AI UGC, kurgu ve tasarım. İçerikleri onayınıza sunuyor, geri bildirimlerle son haline getiriyoruz.",
      image: { alt: "Çekim setinde ışık ayarı yapan bir görüntü yönetmeni", width: 800, height: 600, tone: "ink" },
    },
    {
      number: "04",
      title: "Yayın & Optimizasyon",
      description:
        "İçerikleri yayına alıyor, etkileşimi takip ediyor ve öğrendiklerimizle bir sonraki dönemi şekillendiriyoruz.",
      image: { alt: "Telefon ekranında yayınlanmış bir içeriğe gelen yorumlar", width: 800, height: 600, tone: "stone" },
    },
  ] satisfies ProcessStep[],
};

export const about = {
  intro: { id: "hakkimizda", label: "Hakkımızda", title: "" } satisfies SectionIntro,
  statement:
    "OLUKA Studio, markaların sosyal medyada yalnızca var olmasını değil, bir his bırakmasını önemseyen bir kreatif içerik stüdyosu.",
  body:
    "Seçici çalışıyoruz. Her markaya, kendi hikâyesine yetecek kadar zaman ve dikkat ayırıyoruz. Strateji, üretim ve yönetimi tek bir bakış açısıyla bir araya getiriyoruz.",
  values: [
    { title: "Özgünlük", description: "Şablon değil, markanıza ait bir dil." },
    { title: "Tutarlılık", description: "Her paylaşımda aynı özen, aynı ses." },
    { title: "Uzun Vadeli İş Birliği", description: "Tek seferlik kampanyalar değil, birlikte büyüyen ilişkiler." },
  ] satisfies Value[],
};

export const finalCta = {
  id: "iletisim-cta",
  title: [{ text: "Bir sonraki hikâyenizi" }, { text: "", emphasis: "birlikte yaratalım." }],
  description: "Markanızı ve hedeflerinizi anlatın, size özel bir içerik yaklaşımıyla dönelim.",
  cta: primaryCta,
};
