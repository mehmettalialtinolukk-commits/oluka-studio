import type { Service } from "./types";

/**
 * Services shown in the horizontal services rail and in the contact form.
 * To add a service, append an object; order here is the order on the site.
 */
export const services: Service[] = [
  {
    slug: "sosyal-medya-yonetimi",
    title: "Sosyal Medya Yönetimi",
    summary: "Hesaplarınızı planlı, tutarlı ve markanıza yakışan bir dille yönetiyoruz.",
    deliverables: ["İçerik takvimi", "Paylaşım ve topluluk yönetimi", "Dönemsel değerlendirme"],
    image: {
      src: "/services/01-sosyal-medya.jpg",
      alt: "Elde tutulan telefonun ekranında X, Instagram, TikTok, LinkedIn ve YouTube uygulamalarının bulunduğu Social Media klasörü; arkada Instagram sayfası açık bir ekran",
      width: 1200,
      height: 1500,
      position: "50% 5%",
      tone: "stone",
    },
  },
  {
    slug: "reels-short-form-video",
    title: "Reels / Short Form Video",
    summary: "İlk saniyeden dikkat çeken, ritmi ve hikâyesi olan dikey videolar.",
    deliverables: ["Konsept ve senaryo", "Çekim yönetimi", "Dikey formatta kurgu"],
    image: {
      src: "/services/02-reels.jpg",
      alt: "Tripoda takılı video kamerasının ekranında, arkada stüdyo ışıkları altında oturan bir kişinin çekimi",
      width: 1200,
      height: 1500,
      position: "50% 70%",
      tone: "sepia",
    },
  },
  {
    slug: "ugc-icerik-uretimi",
    title: "UGC İçerik Üretimi",
    summary: "Gerçek içerik üreticileriyle samimi ve güven veren marka anlatımları.",
    deliverables: ["İçerik üreticisi eşleştirme", "Brief ve yönlendirme", "Kullanım hakları planı"],
    image: {
      src: "/services/03-ugc.jpg",
      alt: "Kafede, tripoda takılı telefonla masadaki içeceği çeken bir içerik üreticisi",
      width: 1200,
      height: 1500,
      position: "50% 85%",
      tone: "paper",
    },
  },
  {
    slug: "ai-ugc",
    title: "AI UGC",
    summary: "Yapay zekâ destekli, marka diline uygun ve ölçeklenebilir içerik üretimi.",
    deliverables: ["AI avatar ve sahne kurgusu", "Senaryo ve seslendirme", "Varyasyon üretimi"],
    image: {
      src: "/services/04-ai-ugc.jpg",
      alt: "Masada AI UGC arayüzü açık bir dizüstü bilgisayar, OLUKA Studio logolu bordo kupa, AI Content kontrol listeli defter ve kulaklık; arkada neon AI yazısı",
      width: 1200,
      height: 1500,
      position: "50% 45%",
      tone: "ink",
    },
  },
  {
    slug: "icerik-stratejisi",
    title: "İçerik Stratejisi",
    summary: "Ne paylaşacağınızı, kime ve neden paylaşacağınızı netleştiren bir yol haritası.",
    deliverables: ["Kitle ve rakip analizi", "İçerik sütunları", "Format ve ton rehberi"],
    image: {
      src: "/services/05-icerik-stratejisi.jpg",
      alt: "Masa lambasının ışığında, dizüstü bilgisayar ve açık bir dergi başında içerik planı üzerine gülümseyerek çalışan iki kişi",
      width: 1200,
      height: 1500,
      position: "50% 25%",
      tone: "stone",
    },
  },
  {
    slug: "video-edit",
    title: "Video Edit",
    summary: "Ham görüntüyü, markanızın ritmine uygun yayına hazır bir anlatıya dönüştürüyoruz.",
    deliverables: ["Kurgu ve ritim", "Renk ve ses düzenleme", "Altyazı ve format uyarlama"],
    image: {
      src: "/services/06-video-edit.jpg",
      alt: "Bordo ışıklı loş kurgu odasında, iki monitörde renk düzenleme ve kurgu ekranlarıyla çalışan bir editör",
      width: 1200,
      height: 1500,
      position: "50% 30%",
      tone: "ink",
    },
  },
  {
    slug: "sosyal-medya-tasarimlari",
    title: "Sosyal Medya Tasarımları",
    summary: "Feed, story ve kampanya görsellerinde tutarlı ve rafine bir görsel dil.",
    deliverables: ["Görsel kimlik uyarlaması", "Şablon ve grid sistemi", "Kampanya tasarımları"],
    image: {
      src: "/services/07-sosyal-medya-tasarimlari.jpg",
      alt: "Mermer masada dergilerin üzerinde duran bir fotoğraf makinesi ve ekranında sosyal medya akışı açık bir dizüstü bilgisayar",
      width: 1200,
      height: 1500,
      position: "50% 50%",
      tone: "paper",
    },
  },
  {
    slug: "marka-icerik-danismanligi",
    title: "Marka İçerik Danışmanlığı",
    summary: "Ekibinizin içerik üretimini yönlendiren bir sistem ve dış bakış açısı.",
    deliverables: ["İçerik sistemi kurulumu", "Ekip eğitimi ve atölye", "Düzenli danışmanlık"],
    image: {
      src: "/services/08-marka-danismanligi.jpg",
      alt: "Ahşap toplantı masasında dizüstü bilgisayarlar, tablet ve defterlerle marka içerik planını konuşan bir ekip, yukarıdan görünüm",
      width: 1200,
      height: 1500,
      position: "50% 25%",
      tone: "sepia",
    },
  },
];
