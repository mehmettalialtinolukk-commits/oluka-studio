import { LegalPage } from "@/components/layout/LegalPage";
import { kvkkNotice } from "@/content/legal";
import { pageSeo } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ ...pageSeo.kvkk, noindex: kvkkNotice.status === "draft" });

export default function KvkkPage() {
  return <LegalPage document={kvkkNotice} />;
}
