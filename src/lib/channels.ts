import { siteConfig, whatsappUrl } from "@/config/site";
import type { Link } from "@/content/types";

/** Public contact channels that are actually configured. Empty until filled in. */
export function getContactChannels(): Link[] {
  const { email, instagram, whatsapp } = siteConfig.contact;
  const channels: Link[] = [];
  if (instagram) channels.push({ label: "Instagram", href: instagram });
  if (whatsapp) channels.push({ label: "WhatsApp", href: whatsappUrl(whatsapp) });
  if (email) channels.push({ label: email, href: `mailto:${email}` });
  return channels;
}

