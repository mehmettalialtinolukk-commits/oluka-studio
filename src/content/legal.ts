/**
 * Legal texts.
 *
 * These are STRUCTURAL DRAFTS, not legal advice. Pages with `status: "draft"`
 * show a draft notice and are excluded from search engines and the sitemap.
 * Replace the sections with the final, legally reviewed text and set
 * `status` to "final".
 */

export type LegalDocument = {
  status: "draft" | "final";
  title: string;
  updatedAt?: string; // ISO date, shown when status is "final"
  sections: { heading: string; body: string[] }[];
};

export const kvkkNotice: LegalDocument = {
  status: "draft",
  title: "KVKK Aydınlatma Metni",
  sections: [
    {
      heading: "Veri sorumlusu",
      body: ["Veri sorumlusunun unvanı, adresi ve iletişim bilgisi buraya eklenecektir."],
    },
    {
      heading: "İşlenen kişisel veriler",
      body: [
        "İletişim formu aracılığıyla paylaştığınız ad soyad, marka / şirket adı, e-posta adresi, ilgilendiğiniz hizmet ve mesaj içeriği.",
      ],
    },
    {
      heading: "İşleme amaçları ve hukuki sebep",
      body: ["Talebinize yanıt verilmesi ve iş birliği görüşmelerinin yürütülmesi. Hukuki sebep bu bölümde netleştirilecektir."],
    },
    {
      heading: "Aktarım",
      body: ["Verilerin aktarıldığı taraflar (örneğin e-posta ve barındırma hizmeti sağlayıcıları) bu bölümde belirtilecektir."],
    },
    {
      heading: "Haklarınız",
      body: [
        "6698 sayılı Kanun'un 11. maddesi kapsamındaki haklarınız ve başvuru yöntemi bu bölümde açıklanacaktır.",
      ],
    },
  ],
};

export const privacyPolicy: LegalDocument = {
  status: "draft",
  title: "Gizlilik ve Çerez Politikası",
  sections: [
    {
      heading: "Genel",
      body: ["Bu sayfa, sitenin kişisel verileri ve çerezleri nasıl kullandığını açıklayacaktır."],
    },
    {
      heading: "Çerezler",
      body: [
        "Sitede reklam amaçlı çerez kullanılmaz. Analiz çerezleri yalnızca izin vermeniz hâlinde kullanılır: Google Analytics 4 (Google), sayfaların nasıl ziyaret edildiğini toplu ve istatistiksel olarak görmemize yardımcı olur.",
        "İzin vermediğiniz sürece Google Analytics yüklenmez ve analiz çerezi oluşturulmaz. Google sinyalleri ve reklam kişiselleştirme özellikleri kapalıdır; iletişim formuna yazdığınız bilgiler Google Analytics'e gönderilmez.",
        "Tercihiniz tarayıcınızda saklanır. Kararınızı istediğiniz zaman sayfanın altındaki \"Çerez tercihleri\" bağlantısından değiştirebilirsiniz; izninizi geri aldığınızda analiz çerezleri silinir.",
      ],
    },
  ],
};
