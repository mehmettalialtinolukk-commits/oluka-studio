import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Why } from "@/components/sections/Why";
import { Work } from "@/components/sections/Work";
import { pageSeo } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.home);

/** Home page. Section order follows OLUKA-BRIEF.md. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Expertise />
      <Work />
      <Why />
      <Process />
      <About />
      <FinalCta />
    </>
  );
}
