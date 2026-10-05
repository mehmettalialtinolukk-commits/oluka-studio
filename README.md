# OLUKA Studio — web sitesi

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4. Ana referans: `OLUKA-BRIEF.md`.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## İçerik nerede değişir?

Tüm metinler, listeler ve görsel tanımları `src/content/` altındadır. Bileşenlere dokunmadan buradan düzenlenir.

| Dosya | İçerik |
| --- | --- |
| `src/content/home.ts` | Hero, ana CTA, bölüm başlıkları, Neden OLUKA, süreç adımları, hakkımızda, final CTA |
| `src/content/services.ts` | Hizmetler (yeni hizmet = listeye bir nesne eklemek) |
| `src/content/projects.ts` | Portfolio kategorileri ve projeler |
| `src/content/expertise.ts` | E-Ticaret ve E-Lojistik uzmanlık alanları |
| `src/content/site.ts` | Menü, footer bağlantıları, her sayfanın SEO başlığı ve açıklaması |
| `src/content/legal.ts` | KVKK ve gizlilik metinleri (şu an taslak) |
| `src/config/site.ts` | Site adı, e-posta, Instagram, WhatsApp, veri sorumlusu bilgileri |

### Görseller

Her görsel bir `MediaImage` nesnesidir (`src/content/types.ts`). Dosyayı `public/images/` altına koyup ilgili nesneye `src: "/images/dosya.jpg"` eklemek yeterlidir. `src` yokken yerine, `note` alanındaki sanat yönetimi notunu gösteren nötr bir yer tutucu çıkar. `alt` metni her zaman doldurulmalıdır. Uzak bir adresten görsel kullanılacaksa host'u `next.config.ts` içindeki `images.remotePatterns`'a eklenir.

### Portfolio

Gerçek müşteri işi olmayan her proje `status: "concept"` olarak kalır ve sitede "Konsept Çalışma" etiketiyle gösterilir. Gerçek bir iş eklendiğinde `status: "client"` ve `client` alanı doldurulur. Filtre yalnızca en az bir projesi olan kategorileri gösterir.

### Tasarım tokenları

Renk, yazı ölçekleri, boşluklar, container genişliği, radius ve hareket değerleri `src/app/globals.css` içindeki `@theme` bloğundadır. Fontlar `src/app/layout.tsx` içinde tanımlıdır: başlıklar için Bodoni Moda, metin ve arayüz için Hanken Grotesk.

## Yayın (Vercel) ve ortam değişkenleri

`.env.example` dosyasındaki değişkenler Vercel → Project → Settings → Environment Variables altına girilir.

- `NEXT_PUBLIC_SITE_URL`: gerçek domain. Boşken site Vercel adresini kullanır ve **arama motorlarına kapalı** kalır (robots `Disallow`, sayfalarda `noindex`). Domain girilip yeniden yayınlandığında canonical, Open Graph, sitemap ve robots otomatik olarak domaini kullanır ve indekslemeye açılır.
- `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `RESEND_API_KEY`: iletişim formunun e-posta gönderimi. Üçü girilene kadar form, ziyaretçiye "henüz aktif değil" mesajı verir. Başka bir sağlayıcı kullanılacaksa yalnızca `src/lib/contact/deliver.ts` değişir.

## Yayından önce yapılacaklar

- [ ] Domain: `NEXT_PUBLIC_SITE_URL`
- [ ] Kurumsal e-posta ve form gönderimi (Resend alan adı doğrulaması dahil)
- [ ] `src/config/site.ts`: Instagram, WhatsApp, e-posta, veri sorumlusu bilgileri
- [ ] KVKK ve gizlilik metinlerinin hukuki onaylı halleri (`status: "final"`)
- [ ] Final görseller (lisanslı stok veya OLUKA için üretilmiş AI görseller)
