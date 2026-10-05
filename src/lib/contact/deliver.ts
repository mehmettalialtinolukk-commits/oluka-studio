import "server-only";

import type { ContactValues } from "./schema";

/**
 * Delivers a contact request by e-mail.
 *
 * Configuration (Vercel → Settings → Environment Variables):
 *   CONTACT_TO_EMAIL    OLUKA's corporate inbox that receives requests
 *   CONTACT_FROM_EMAIL  verified sender, e.g. "OLUKA Studio <form@alanadi>"
 *   RESEND_API_KEY      API key of the e-mail provider (Resend)
 *
 * Until these are set the form reports that it is not connected yet.
 * To use another provider, replace the body of `sendEmail` only.
 */

export type DeliveryResult = { ok: true } | { ok: false; reason: "not-configured" | "failed" };

export function isContactDeliveryConfigured(): boolean {
  return Boolean(process.env.CONTACT_TO_EMAIL && process.env.CONTACT_FROM_EMAIL && process.env.RESEND_API_KEY);
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

async function sendEmail(values: ContactValues): Promise<boolean> {
  const rows: [string, string][] = [
    ["Ad Soyad", values.name],
    ["Marka / Şirket", values.company || "-"],
    ["E-posta", values.email],
    ["İlgilenilen hizmet", values.service],
  ];
  const html = `
    <h2>Yeni proje talebi</h2>
    <table>${rows.map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`).join("")}</table>
    <p><strong>Mesaj</strong></p>
    <p>${escapeHtml(values.message).replace(/\n/g, "<br>")}</p>`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],
      reply_to: values.email,
      subject: `Proje talebi: ${values.name}${values.company ? ` (${values.company})` : ""}`,
      html,
    }),
  });
  return response.ok;
}

export async function deliverContactRequest(values: ContactValues): Promise<DeliveryResult> {
  if (!isContactDeliveryConfigured()) {
    if (process.env.NODE_ENV === "development") {
      console.info("[iletisim] E-posta ayarları yok, talep yalnızca loglandı:", { ...values, message: `${values.message.slice(0, 80)}…` });
    }
    return { ok: false, reason: "not-configured" };
  }
  try {
    return (await sendEmail(values)) ? { ok: true } : { ok: false, reason: "failed" };
  } catch {
    return { ok: false, reason: "failed" };
  }
}
