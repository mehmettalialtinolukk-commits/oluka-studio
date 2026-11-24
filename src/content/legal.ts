/**
 * Legal texts.
 *
 * These are DRAFTS prepared from the site's actual technical setup, not legal
 * advice. Pages with `status: "draft"` show a draft notice and are excluded
 * from search engines and the sitemap. After legal review, replace or confirm
 * the sections and set `status` to "final" (with `updatedAt`).
 *
 * Facts these texts rely on (check them again whenever the setup changes):
 * - Contact form: name, brand/company, e-mail, service, message. Not stored in
 *   a database; sent by e-mail through Resend to CONTACT_TO_EMAIL.
 * - Hosting: Vercel. No Vercel Analytics or Speed Insights.
 * - Google Analytics 4 (G-V2FWDPJJZ2): loaded only after consent, live site only.
 *   Cookies _ga and _ga_V2FWDPJJZ2 (2 years as set by GA; Chrome caps them at 400 days). Google signals and ad
 *   personalisation off. Retention in GA: 14 months, reset on new activity off.
 * - The cookie choice is kept in localStorage ("oluka-cerez-tercihi"), not in a cookie.
 * - The site sets no cookies of its own.
 */

import { siteConfig } from "@/config/site";

export type LegalDocument = {
  status: "draft" | "final";
  title: string;
  updatedAt?: string; // ISO date, shown when status is "final"
  sections: { heading: string; body: string[] }[];
};

const controller = siteConfig.legalEntity;
const website = "https://www.oluka.com.tr";
const postalAddress = controller.address
  ? `${controller.address} adresine`
  : "veri sorumlusunun posta adresine (adres bu metne eklenecektir)";

export const kvkkNotice: LegalDocument = {
  status: "draft",
  title: "KVKK Aydınlatma Metni",
  sections: [
    {
      heading: "Veri sorumlusu",
      body: [
        `6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca kişisel verileriniz, veri sorumlusu sıfatıyla ${controller.title} tarafından işlenmektedir. OLUKA Studio, henüz şirket olarak kurulmamış, gerçek kişi olan veri sorumlusu tarafından yürütülen bir markadır.`,
        `Web sitesi: ${website}. KVKK kapsamındaki sorularınız ve başvurularınız için e-posta: ${controller.email}.`,
        "Bu metin; web sitesini ziyaret eden, iletişim formunu dolduran veya bizimle e-posta yoluyla iletişime geçen kişilerin kişisel verilerinin nasıl işlendiğini açıklar.",
      ],
    },
    {
      heading: "İşlenen kişisel veriler",
      body: [
        "Kimlik ve iletişim bilgileri: İletişim formunda veya e-postada paylaştığınız ad soyad ve e-posta adresi.",
        "Talep bilgileri: Marka veya şirket adı, ilgilendiğiniz hizmet, mesajınızın içeriği ve sonraki yazışmalar.",
        "İşlem güvenliği bilgileri: Siteye eriştiğinizde barındırma altyapısının sunucu kayıtlarında oluşan IP adresi, tarayıcı ve cihaz bilgisi, erişim zamanı ve istenen sayfa.",
        "Çevrimiçi kullanım bilgileri (yalnızca analiz çerezlerine izin verirseniz): Google Analytics'in oluşturduğu rastgele ziyaretçi tanımlayıcısı, ziyaret edilen sayfalar, sayfa kaydırma, dış bağlantı tıklamaları, dosya indirmeleri, formun başlatılması veya gönderilmesi (form içeriği olmadan), cihaz ve tarayıcı türü ile yaklaşık konum (ülke ve şehir düzeyinde).",
        "Lütfen mesajınızda sağlık, din, etnik köken gibi özel nitelikli kişisel verilerinizi paylaşmayın; bu tür verilerin işlenmesi talep edilmemektedir.",
      ],
    },
    {
      heading: "Kişisel veri toplama yöntemleri",
      body: [
        "Kişisel verileriniz; web sitesindeki iletişim formu ve e-posta yazışmaları aracılığıyla sizin tarafınızdan doğrudan, sunucu kayıtları ve (izin vermeniz hâlinde) analiz çerezleri aracılığıyla ise elektronik ortamda otomatik yollarla toplanmaktadır.",
      ],
    },
    {
      heading: "İşleme amaçları ve hukuki sebepleri",
      body: [
        "Talebinize yanıt verilmesi, teklif hazırlanması ve iş birliği görüşmelerinin yürütülmesi: KVKK m. 5/2-c (bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması) ve m. 5/2-f (veri sorumlusunun meşru menfaati).",
        "Yazışmaların kaydının tutulması ve olası uyuşmazlıklarda hakların korunması: KVKK m. 5/2-e (bir hakkın tesisi, kullanılması veya korunması için zorunlu olması).",
        "Yasal yükümlülüklerin yerine getirilmesi ve yetkili kurumların taleplerinin karşılanması: KVKK m. 5/2-ç (veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi).",
        "Sitenin güvenli ve kesintisiz çalışması, kötüye kullanımın ve istenmeyen form gönderimlerinin önlenmesi: KVKK m. 5/2-f (veri sorumlusunun meşru menfaati).",
        "Sitenin nasıl kullanıldığının istatistiksel olarak analiz edilmesi ve geliştirilmesi: KVKK m. 5/1 (açık rıza). Bu işleme yalnızca çerez bandında \"Kabul et\" seçeneğini işaretlemeniz hâlinde yapılır ve izninizi istediğiniz zaman geri alabilirsiniz.",
      ],
    },
    {
      heading: "Verilerin aktarıldığı taraflar ve aktarım amaçları",
      body: [
        "Kişisel verileriniz satılmaz ve reklam amacıyla paylaşılmaz. Yalnızca aşağıdaki hizmet sağlayıcılara, belirtilen amaçlarla sınırlı olarak aktarılır:",
        "Vercel Inc. (ABD): Web sitesinin barındırılması ve iletişim formu gönderiminin sunucuda işlenmesi. Aktarılan veriler: sunucu kayıtlarındaki işlem güvenliği bilgileri ve form içeriği.",
        "Resend (ABD): İletişim formu içeriğinin e-posta olarak tarafımıza iletilmesi. Aktarılan veriler: formda paylaştığınız ad soyad, e-posta adresi, marka veya şirket adı, ilgilenilen hizmet ve mesaj.",
        "Kurumsal e-posta hizmeti sağlayıcısı: Form taleplerinin ve e-posta yazışmalarının saklandığı e-posta kutusunun barındırılması. Sağlayıcının adı ve bulunduğu ülke bu metne eklenecektir.",
        "Google (Google Analytics 4): Yalnızca analiz çerezlerine izin vermeniz hâlinde, sitenin kullanımına ilişkin istatistiklerin oluşturulması. Aktarılan veriler: çevrimiçi kullanım bilgileri.",
        "Yetkili kamu kurum ve kuruluşları ile yargı mercileri: Yalnızca hukuki bir yükümlülük bulunması veya bir hakkın korunması gerektiği hâllerde, talep edilen verilerle sınırlı olarak.",
      ],
    },
    {
      heading: "Yurt dışına veri aktarımı",
      body: [
        "Yukarıda sayılan Vercel, Resend ve Google hizmetlerinin sağlayıcıları yurt dışında (ABD dahil) bulunmakta ve verileri yurt dışındaki sunucularda işleyebilmektedir. Bu hizmetlerin kullanılması, kişisel verilerinizin yurt dışına aktarılması sonucunu doğurur.",
        "KVKK'nın 9. maddesine göre yurt dışına aktarım; KVKK m. 5 veya 6'daki işleme şartlarından birinin varlığına ek olarak, aktarımın yapılacağı ülke hakkında Kişisel Verileri Koruma Kurulu'nun yeterlilik kararı bulunması ya da bu karar bulunmadığında Kanun'da sayılan uygun güvencelerden birinin (örneğin Kurul tarafından ilan edilen standart sözleşmenin imzalanması ve Kurul'a bildirilmesi) sağlanması hâlinde yapılabilir. Bu güvencelerin bulunmadığı durumlarda aktarım, Kanun'da sayılan istisnalar çerçevesinde ancak arızi (düzenli olmayan) olarak yapılabilir.",
        "Her bir hizmet sağlayıcıya yapılan aktarım için dayanılan uygun güvence, hukuki değerlendirme tamamlandığında bu bölümde açıkça belirtilecektir.",
        "Çerez bandında verdiğiniz izin, analiz çerezlerinin kullanılmasına ilişkindir; düzenli olarak yapılan yurt dışı aktarımların tek başına hukuki dayanağı değildir.",
      ],
    },
    {
      heading: "Saklama ve imha süreleri",
      body: [
        "İş ilişkisine dönüşmeyen talepler: Başka bir hukuki saklama yükümlülüğü bulunmadıkça, talebe ilişkin son yazışma tarihinden itibaren 12 ay saklanır ve bu sürenin sonunda silinir.",
        "İş ilişkisine dönüşen talepler: İş ilişkisi süresince ve ilgili mevzuatta öngörülen saklama ve zamanaşımı süreleri boyunca saklanır.",
        "Google Analytics verileri: Etkinlik ve kullanıcı düzeyindeki veriler Google Analytics'te 14 ay saklanır; bu süre yeni ziyaretlerle uzamaz. Cihazınızdaki analiz çerezlerinin süreleri Gizlilik ve Çerez Politikası'nda ayrıca açıklanmıştır.",
        "Sunucu kayıtları: Barındırma hizmeti sağlayıcısının sistemlerinde, hizmetin güvenli şekilde sunulması için gerekli sınırlı süre boyunca tutulur.",
        "Saklama süresi sona eren kişisel veriler silinir, yok edilir veya anonim hâle getirilir.",
      ],
    },
    {
      heading: "KVKK'nın 11. maddesi kapsamındaki haklarınız",
      body: [
        "Veri sorumlusuna başvurarak:",
        "a) Kişisel verilerinizin işlenip işlenmediğini öğrenme,",
        "b) Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,",
        "c) Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,",
        "ç) Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme,",
        "d) Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,",
        "e) KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme,",
        "f) (d) ve (e) bentleri uyarınca yapılan işlemlerin, kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme,",
        "g) İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,",
        "ğ) Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme haklarına sahipsiniz.",
      ],
    },
    {
      heading: "Başvuru yöntemleri",
      body: [
        "Haklarınıza ilişkin taleplerinizi, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ'e uygun olarak Türkçe ve yazılı şekilde aşağıdaki yollarla iletebilirsiniz:",
        `E-posta ile: Daha önce tarafımıza bildirdiğiniz ve kayıtlarımızda bulunan e-posta adresinizden ya da güvenli elektronik imza veya mobil imza ile imzaladığınız başvurunuzu ${controller.email} adresine göndererek.`,
        `Yazılı olarak: Islak imzalı başvurunuzu ${postalAddress} posta veya elden teslim yoluyla ileterek.`,
        "Başvurunuzda; adınız soyadınız, başvuru yazılı ise imzanız, Türkiye Cumhuriyeti vatandaşları için T.C. kimlik numaranız (yabancılar için uyruğunuz ile pasaport veya kimlik numaranız), tebligata esas yerleşim yeri veya iş yeri adresiniz, varsa bildirime esas e-posta adresiniz ve telefon numaranız ile talep konunuz yer almalı; varsa ilgili belgeler eklenmelidir.",
        "Başvurunuz, talebin niteliğine göre en kısa sürede ve en geç 30 gün içinde ücretsiz olarak sonuçlandırılır. İşlemin ayrıca bir maliyet gerektirmesi hâlinde Kişisel Verileri Koruma Kurulu'nca belirlenen tarifedeki ücret alınabilir.",
        "Başvurunuzun reddedilmesi, verilen yanıtı yetersiz bulmanız veya süresinde yanıt verilmemesi hâlinde; yanıtı öğrendiğiniz tarihten itibaren 30 gün ve her hâlde başvuru tarihinden itibaren 60 gün içinde Kişisel Verileri Koruma Kurulu'na şikâyette bulunabilirsiniz.",
      ],
    },
    {
      heading: "Değişiklikler",
      body: ["Bu metin, veri işleme faaliyetlerindeki veya mevzuattaki değişikliklere göre güncellenebilir. Güncel sürüm her zaman bu sayfada yayımlanır."],
    },
  ],
};

export const privacyPolicy: LegalDocument = {
  status: "draft",
  title: "Gizlilik ve Çerez Politikası",
  sections: [
    {
      heading: "Genel",
      body: [
        `Bu politika, ${website} adresindeki web sitesinin kişisel verileri, çerezleri ve benzeri teknolojileri nasıl kullandığını açıklar. Veri sorumlusu ${controller.title}'tur; OLUKA Studio, gerçek kişi olan veri sorumlusu tarafından yürütülen bir markadır.`,
        "Kişisel verilerinizin işlenme amaçları, hukuki sebepleri, aktarıldığı taraflar, saklama süreleri ve haklarınız KVKK Aydınlatma Metni'nde ayrıntılı olarak açıklanmıştır.",
      ],
    },
    {
      heading: "Hangi bilgiler işlenir?",
      body: [
        "İletişim formu: Ad soyad, marka veya şirket adı, e-posta adresi, ilgilenilen hizmet ve mesajınız. Bu bilgiler sitede bir veri tabanında tutulmaz; e-posta gönderim hizmeti aracılığıyla tarafımıza e-posta olarak iletilir.",
        "Sunucu kayıtları: Siteyi ziyaret ettiğinizde barındırma altyapısı, sitenin güvenli şekilde sunulması için IP adresi, tarayıcı bilgisi ve istenen sayfa gibi teknik kayıtlar oluşturur.",
        "Analiz verileri: Yalnızca analiz çerezlerine izin vermeniz hâlinde Google Analytics 4 aracılığıyla toplanır (aşağıda açıklanmıştır).",
      ],
    },
    {
      heading: "Çerez nedir?",
      body: [
        "Çerezler, ziyaret ettiğiniz web sitesinin tarayıcınıza kaydettiği küçük metin dosyalarıdır. Benzer şekilde, tarayıcının yerel depolama alanı da sitelerin cihazınızda küçük bilgiler saklamasına olanak tanır.",
      ],
    },
    {
      heading: "Zorunlu çerezler ve tercih kaydı",
      body: [
        "Sitenin çalışması için zorunlu çerez kullanılmamaktadır.",
        "Çerez tercihiniz, çerez olarak değil tarayıcınızın yerel depolama alanında \"oluka-cerez-tercihi\" adıyla saklanır. Bu kayıt yalnızca \"kabul\" veya \"ret\" bilgisini içerir, sunucumuza gönderilmez ve tarayıcı verilerinizi silene kadar cihazınızda kalır. Tercihinizi her ziyarette yeniden sormamak için gereklidir.",
      ],
    },
    {
      heading: "Analitik çerezler (Google Analytics 4)",
      body: [
        "Google Analytics 4, yalnızca çerez bandında \"Kabul et\" seçeneğini işaretlemenizden sonra yüklenir. İzin vermediğiniz sürece Google Analytics kodu sayfaya eklenmez, Google'a veri gönderilmez ve analiz çerezi oluşturulmaz.",
        "İzin vermeniz hâlinde şu çerezler kullanılır:",
        "_ga: Ziyaretçileri birbirinden ayırt etmek için rastgele bir tanımlayıcı saklar. Süre: 2 yıl (tarayıcınız kısaltabilir); her ziyarette yenilenir.",
        "_ga_V2FWDPJJZ2: Bu site için oturum ve ziyaret durumunu saklar. Süre: 2 yıl (tarayıcınız kısaltabilir); her ziyarette yenilenir.",
        "Ölçülenler: Sayfa görüntülemeleri, sayfa kaydırma, dış bağlantı tıklamaları, dosya indirmeleri, formun başlatılması veya gönderilmesi, cihaz ve tarayıcı türü ile yaklaşık konum (ülke ve şehir düzeyinde).",
        "İletişim formuna yazdığınız bilgiler Google Analytics'e gönderilmez; yalnızca formun kullanıldığı bilgisi, içeriği olmadan ölçülebilir. Google Analytics'te e-posta adreslerini ayıklayan veri karartma ayarı da açıktır.",
        "Google sinyalleri ve reklam kişiselleştirme kapalıdır; sitede reklam veya yeniden pazarlama çerezi kullanılmaz.",
      ],
    },
    {
      heading: "Saklama süreleri",
      body: [
        "Çerez süresi ile Google Analytics'teki veri saklama süresi farklı kavramlardır:",
        "Çerez süresi, _ga ve _ga_V2FWDPJJZ2 çerezlerinin cihazınızda ne kadar kalacağını belirtir. Google bu süreyi son ziyaretinizden itibaren 2 yıl olarak ayarlar; tarayıcınız bu süreyi kısaltabilir (örneğin Chrome, çerez ömrünü en fazla 400 günle sınırlar). Çerezleri tarayıcı ayarlarınızdan veya izninizi geri alarak istediğiniz zaman silebilirsiniz.",
        "Veri saklama süresi, Google Analytics'e gönderilmiş etkinlik ve kullanıcı düzeyindeki verilerin Google'ın sistemlerinde ne kadar tutulacağını belirtir: 14 ay. Yeni etkinlikte kullanıcı verisinin saklama süresini sıfırlama ayarı kapalıdır; bu nedenle süre yeni ziyaretlerle uzamaz ve veriler toplanmalarından 14 ay sonra silinir. Toplu ve anonim istatistik raporları bu süreden etkilenmez.",
      ],
    },
    {
      heading: "Çerez tercihlerinizi değiştirme",
      body: [
        "Kararınızı istediğiniz zaman her sayfanın altındaki \"Çerez tercihleri\" bağlantısından değiştirebilirsiniz.",
        "İzninizi geri aldığınızda Google Analytics veri göndermeyi durdurur ve _ga ile _ga_V2FWDPJJZ2 çerezleri cihazınızdan silinir. İzninizi geri almanız, daha önce gönderilmiş verileri geriye dönük olarak silmez; bu veriler 14 aylık saklama süresinin sonunda silinir. Bu verilerle ilgili haklarınızı KVKK Aydınlatma Metni'nde açıklanan yöntemlerle kullanabilirsiniz.",
        "Ayrıca tarayıcınızın ayarlarından çerezleri silebilir veya engelleyebilirsiniz.",
      ],
    },
    {
      heading: "Üçüncü taraf hizmetleri",
      body: [
        "Vercel Inc. (ABD): Sitenin barındırılması ve iletişim formu gönderiminin işlenmesi.",
        "Resend (ABD): İletişim formu içeriğinin e-posta olarak tarafımıza iletilmesi.",
        "Google (Google Analytics 4): Yalnızca izninizle, sitenin kullanımına ilişkin istatistikler.",
        "Bu hizmetlerin kullanılması kişisel verilerin yurt dışına aktarılması sonucunu doğurur. Yurt dışına aktarıma ilişkin bilgiler KVKK Aydınlatma Metni'nin \"Yurt dışına veri aktarımı\" bölümünde yer almaktadır.",
      ],
    },
    {
      heading: "İletişim",
      body: [`Bu politika veya kişisel verileriniz hakkındaki sorularınız için: ${controller.email}.`],
    },
    {
      heading: "Değişiklikler",
      body: ["Bu politika, sitede kullanılan teknolojilerdeki veya mevzuattaki değişikliklere göre güncellenebilir. Güncel sürüm her zaman bu sayfada yayımlanır."],
    },
  ],
};
