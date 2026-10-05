"use server";

import { deliverContactRequest } from "@/lib/contact/deliver";
import { UNSURE_SERVICE, type ContactState, type ContactValues } from "@/lib/contact/schema";
import { getServices } from "@/lib/content";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function read(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real visitors never fill this hidden field.
  if (read(formData, "website")) return { status: "success", message: "Teşekkürler, mesajınız alındı." };

  const values: ContactValues = {
    name: read(formData, "name"),
    company: read(formData, "company"),
    email: read(formData, "email"),
    service: read(formData, "service"),
    message: read(formData, "message"),
  };
  const consent = formData.get("consent") === "on";

  const services = await getServices();
  const allowedServices = new Set([...services.map((s) => s.title), UNSURE_SERVICE]);

  const fieldErrors: ContactState["fieldErrors"] = {};
  if (values.name.length < 2 || values.name.length > 100) fieldErrors.name = "Lütfen adınızı ve soyadınızı yazın.";
  if (values.company.length > 120) fieldErrors.company = "Marka / şirket adı en fazla 120 karakter olabilir.";
  if (!EMAIL_PATTERN.test(values.email) || values.email.length > 160) fieldErrors.email = "Geçerli bir e-posta adresi yazın.";
  if (!allowedServices.has(values.service)) fieldErrors.service = "Lütfen bir hizmet seçin.";
  if (values.message.length < 10) fieldErrors.message = "Mesajınız en az 10 karakter olmalı.";
  if (values.message.length > 3000) fieldErrors.message = "Mesajınız en fazla 3000 karakter olabilir.";
  if (!consent) fieldErrors.consent = "Devam etmek için aydınlatma metnini onaylamanız gerekiyor.";

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Lütfen işaretli alanları kontrol edin.", fieldErrors, values };
  }

  const result = await deliverContactRequest(values);
  if (result.ok) {
    return { status: "success", message: "Teşekkürler. Mesajınız bize ulaştı, en kısa sürede dönüş yapacağız." };
  }
  return {
    status: "error",
    values,
    message:
      result.reason === "not-configured"
        ? "İletişim formu henüz aktif değil. Lütfen kısa bir süre sonra tekrar deneyin."
        : "Mesajınız şu anda gönderilemedi. Lütfen biraz sonra tekrar deneyin.",
  };
}
