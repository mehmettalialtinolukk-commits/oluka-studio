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
        src: "/images/expertise/uzmanlik-eticaret-ekran.jpg",
        alt: "Beyaz yuvarlak masada açık dizüstü bilgisayar, kartlık, güneş gözlüğü ve kraft ile beyaz alışveriş poşetleri",
        width: 1000,
        height: 1400,
      },
      {
        src: "/images/expertise/uzmanlik-eticaret-urun.jpg",
        alt: "Krem fon önünde altın kapaklı beyaz cilt bakım şişeleri, kavanoz ve tüp",
        width: 1200,
        height: 1200,
        position: "50% 90%",
      },
      {
        src: "/images/expertise/uzmanlik-eticaret-paket.jpg",
        alt: "Kargo kutusundan çıkardığı turuncu ürün kutusunu telefonla fotoğraflayan bir kişinin elleri",
        width: 1000,
        height: 1250,
        position: "50% 55%",
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
        src: "/images/expertise/uzmanlik-lojistik-depo.jpg",
        alt: "Turuncu raflar ve paletler arasında koli taşıyan bir çalışanın bulunduğu geniş depo koridoru",
        width: 1600,
        height: 1000,
      },
      {
        src: "/images/expertise/uzmanlik-lojistik-kargo.jpg",
        alt: "Arka kapısı açık teslimat aracının yanında, sabah ışığında kolileri kontrol eden bir kurye",
        width: 1000,
        height: 1300,
        position: "50% 55%",
      },
    ],
  },
];
