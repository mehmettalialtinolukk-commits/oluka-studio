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
      alt: "Gün ışığı alan bir masada haftalık içerik takvimi, OLUKA sosyal medya akışı açık bir telefon, dizüstü bilgisayar ve strateji notları",
      width: 1200,
      height: 1500,
      position: "55% 50%",
      tone: "stone",
    },
  },
  {
    slug: "reels-short-form-video",
    title: "Reels / Short Form Video",
    summary: "İlk saniyeden dikkat çeken, ritmi ve hikâyesi olan dikey videolar.",
    deliverables: ["Konsept ve senaryo", "Çekim yönetimi", "Dikey formatta kurgu"],
    image: {
      alt: "Stüdyoda tripoda takılı telefonla dikey video çekimi; yanında ışık kutusu, OLUKA logolu kupa, kurgu programı açık dizüstü bilgisayar ve Reels planı defteri",
      width: 1200,
      height: 1500,
      position: "40% 50%",
      tone: "sepia",
    },
  },
  {
    slug: "ugc-icerik-uretimi",
    title: "UGC İçerik Üretimi",
    summary: "Gerçek içerik üreticileriyle samimi ve güven veren marka anlatımları.",
    deliverables: ["İçerik üreticisi eşleştirme", "Brief ve yönlendirme", "Kullanım hakları planı"],
    image: {
      alt: "Gün ışığı alan bir çalışma masasında elindeki cilt bakım tüpünü inceleyen içerik üretici; önde halka ışığa takılı telefon çekimi kaydediyor",
      width: 1200,
      height: 1500,
      position: "50% 50%",
      tone: "paper",
    },
  },
  {
    slug: "ai-ugc",
    title: "AI UGC",
    summary: "Yapay zekâ destekli, marka diline uygun ve ölçeklenebilir içerik üretimi.",
    deliverables: ["AI avatar ve sahne kurgusu", "Senaryo ve seslendirme", "Varyasyon üretimi"],
    image: {
      alt: "Ekranda yapay zekâ ile üretilmiş bir içerik sahnesinin düzenlenmesi",
      width: 1200,
      height: 1500,
      tone: "ink",
      note: "Karanlık stüdyo, ekran ışığı, minimal",
    },
  },
  {
    slug: "icerik-stratejisi",
    title: "İçerik Stratejisi",
    summary: "Ne paylaşacağınızı, kime ve neden paylaşacağınızı netleştiren bir yol haritası.",
    deliverables: ["Kitle ve rakip analizi", "İçerik sütunları", "Format ve ton rehberi"],
    image: {
      alt: "Duvara asılmış içerik planı kartları ve notlar",
      width: 1200,
      height: 1500,
      tone: "stone",
      note: "Moodboard duvarı, kağıt dokusu",
    },
  },
  {
    slug: "video-edit",
    title: "Video Edit",
    summary: "Ham görüntüyü, markanızın ritmine uygun yayına hazır bir anlatıya dönüştürüyoruz.",
    deliverables: ["Kurgu ve ritim", "Renk ve ses düzenleme", "Altyazı ve format uyarlama"],
    image: {
      alt: "Kurgu masasında zaman çizelgesi üzerinde çalışılan bir video",
      width: 1200,
      height: 1500,
      tone: "ink",
      note: "Kurgu ekranı, loş oda, detay",
    },
  },
  {
    slug: "sosyal-medya-tasarimlari",
    title: "Sosyal Medya Tasarımları",
    summary: "Feed, story ve kampanya görsellerinde tutarlı ve rafine bir görsel dil.",
    deliverables: ["Görsel kimlik uyarlaması", "Şablon ve grid sistemi", "Kampanya tasarımları"],
    image: {
      alt: "Masada basılı sosyal medya tasarımları ve renk örnekleri",
      width: 1200,
      height: 1500,
      tone: "paper",
      note: "Baskı provaları, kağıt ve renk kartelası",
    },
  },
  {
    slug: "marka-icerik-danismanligi",
    title: "Marka İçerik Danışmanlığı",
    summary: "Ekibinizin içerik üretimini yönlendiren bir sistem ve dış bakış açısı.",
    deliverables: ["İçerik sistemi kurulumu", "Ekip eğitimi ve atölye", "Düzenli danışmanlık"],
    image: {
      alt: "Toplantı masasında marka içerik sistemi üzerine konuşan iki kişi",
      width: 1200,
      height: 1500,
      tone: "sepia",
      note: "Sakin toplantı anı, eller ve defter",
    },
  },
];
