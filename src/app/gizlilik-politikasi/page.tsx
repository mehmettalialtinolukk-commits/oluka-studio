import { LegalPage } from "@/components/layout/LegalPage";
import { privacyPolicy } from "@/content/legal";
import { pageSeo } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ ...pageSeo.privacy, noindex: privacyPolicy.status === "draft" });

export default function PrivacyPage() {
  return <LegalPage document={privacyPolicy} />;
}
