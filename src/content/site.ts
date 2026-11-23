import type { Link, PageSeo } from "./types";

/** Desktop and mobile navigation (order as approved in the brief). */
export const mainNavigation: Link[] = [
  { label: "Hizmetler", href: "/#hizmetler" },
  { label: "Çalışmalar", href: "/#calismalar" },
  { label: "Hakkımızda", href: "/#hakkimizda" },
  { label: "Süreç", href: "/#surec" },
];

export const footerNavigation: Link[] = [
  { label: "Hizmetler", href: "/#hizmetler" },
  { label: "Çalışmalar", href: "/#calismalar" },
  { label: "Hakkımızda", href: "/#hakkimizda" },
  { label: "Süreç", href: "/#surec" },
  { label: "İletişim", href: "/iletisim" },
];

export const legalNavigation: Link[] = [
  { label: "KVKK Aydınlatma Metni", href: "/kvkk-aydinlatma-metni" },
  { label: "Gizlilik ve Çerez Politikası", href: "/gizlilik-politikasi" },
];

export const footer = {
  tagline: "Premium sosyal medya ve kreatif içerik stüdyosu.",
  image: {
    src: "/images/expertise/isterseniz-footer.jpg",
    alt: "Tramvay rayları ve üst geçidiyle akşam ışığında bir şehir caddesi",
    width: 900,
    height: 1100,
    position: "50% 45%",
  },
};

/** SEO title and description for every page. Edit here, not in the pages. */
export const pageSeo = {
  home: {
    title: "OLUKA Studio | Premium Sosyal Medya ve Kreatif İçerik Stüdyosu",
    description:
      "OLUKA Studio; sosyal medya yönetimi, Reels, UGC, AI UGC ve içerik stratejisiyle markaların yalnızca görünmesini değil, hatırlanmasını sağlar.",
    path: "/",
  },
  contact: {
    title: "İletişim",
    description:
      "Projenizi OLUKA Studio ile konuşun. Sosyal medya yönetimi, kreatif içerik ve içerik stratejisi için bize ulaşın.",
    path: "/iletisim",
  },
  kvkk: {
    title: "KVKK Aydınlatma Metni",
    description: "OLUKA Studio kişisel verilerin korunması hakkında aydınlatma metni.",
    path: "/kvkk-aydinlatma-metni",
  },
  privacy: {
    title: "Gizlilik ve Çerez Politikası",
    description: "OLUKA Studio gizlilik ve çerez politikası.",
    path: "/gizlilik-politikasi",
  },
} satisfies Record<string, PageSeo>;

/**
 * E-mail addresses shown on the contact page (each one a mailto link).
 * Project requests go through the contact form; its recipient is set in the
 * environment (CONTACT_TO_EMAIL) and is deliberately not listed here.
 */
export const contactDirectory = {
  general: {
    label: "Genel İletişim",
    email: "hello@oluka.com.tr",
    description: "Her türlü soru, bilgi ve genel iletişim için.",
  },
  personal: {
    label: "Kişisel İletişim",
    emails: ["aozge@oluka.com.tr", "ali@oluka.com.tr", "ersoy@oluka.com.tr"],
  },
  projects: {
    label: "Proje Talepleri",
    description: "Proje talepleri ve fiyat danışmanlığı için formu doldurmanız yeterli.",
    formLinkLabel: "Forma git",
  },
};
