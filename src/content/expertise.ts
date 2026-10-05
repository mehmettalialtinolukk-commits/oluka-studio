import type { Expertise, SectionIntro } from "./types";

export const expertiseIntro: SectionIntro = {
  id: "uzmanlik",
  label: "Uzmanlık alanları",
  title: "İki sektör, iki ayrı dil.",
  description:
    "E-Ticaret ve E-Lojistik için içeriği sektörün kendi ritmine göre kuruyoruz. Her alanın ihtiyacı, kitlesi ve anlatısı farklı.",
};

export const expertiseAreas: Expertise[] = [
  {
    slug: "e-ticaret",
    title: "E-Ticaret",
    kicker: "Ürünü arzu edilen bir deneyime dönüştürmek",
    lead:
      "Online mağazanız için ürünün dokusunu, kullanımını ve hissini anlatan içerikler üretiyoruz. Sosyal medyadaki ilk temastan ürün sayfasına kadar aynı görsel dili koruyoruz.",
    points: [
      "Ürün odaklı Reels ve kısa videolar",
      "UGC ve AI UGC ürün anlatımları",
      "Lansman ve kampanya içerikleri",
      "Mağaza ve pazaryeri için görsel uyarlamalar",
    ],
    theme: "light",
    images: [
      {
        alt: "Telefon ekranında açık bir online mağaza ürün sayfası",
        width: 1000,
        height: 1400,
        tone: "stone",
        note: "E-ticaret ekranı, ürün sayfası, el ve telefon",
      },
      {
        alt: "Nötr fon üzerinde yakın plan çekilmiş deri bir çanta",
        width: 1200,
        height: 1200,
        tone: "sepia",
        note: "Ürün still life, doku detayı",
      },
      {
        alt: "Kurdeleyle bağlanmış, özenle hazırlanmış bir sipariş kutusu",
        width: 1000,
        height: 1250,
        tone: "paper",
        note: "Paket açılış anı, kağıt ve kurdele",
      },
    ],
  },
  {
    slug: "e-lojistik",
    title: "E-Lojistik",
    kicker: "Görünmeyen operasyonu güvene dönüştürmek",
    lead:
      "Depo, paketleme ve teslimat süreçlerini insan, hız ve özen üzerinden anlatan içerikler kurguluyoruz. Hem iş ortaklarınıza hem son kullanıcıya güven veren bir dil oluşturuyoruz.",
    points: [
      "Operasyonun perde arkasını anlatan video serileri",
      "Teslimat deneyimine odaklanan sosyal medya içerikleri",
      "B2B ve B2C kitleleri için ayrı içerik kurgusu",
      "Kurumsal güven oluşturan görsel dil",
    ],
    theme: "dark",
    images: [
      {
        alt: "Düzenli raflarıyla geniş bir depo koridoru",
        width: 1600,
        height: 1000,
        tone: "ink",
        note: "Depo koridoru, simetri, soğuk ışık",
      },
      {
        alt: "Bir teslimat aracının açık kapısında istiflenmiş kargo paketleri",
        width: 1000,
        height: 1300,
        tone: "sepia",
        note: "Kargo ve araç, sabah ışığı",
      },
    ],
  },
];
