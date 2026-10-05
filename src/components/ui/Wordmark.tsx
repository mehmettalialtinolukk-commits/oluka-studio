import { siteConfig } from "@/config/site";

type WordmarkProps = {
  className?: string;
  size?: "md" | "lg";
};

/**
 * Typographic wordmark: OLUKA • Studio.
 * The dot is decorative; assistive technology reads "OLUKA Studio".
 */
export function Wordmark({ className = "", size = "md" }: WordmarkProps) {
  const { primary, secondary } = siteConfig.wordmark;
  const scale = size === "lg" ? "text-[clamp(2.6rem,8vw,6.5rem)]" : "text-[1.3rem]";

  return (
    <span className={`inline-flex items-center leading-none ${scale} ${className}`} aria-label={siteConfig.name} role="img">
      <span className="font-serif font-medium tracking-wordmark" aria-hidden="true">
        {primary}
      </span>
      <span aria-hidden="true" className="mx-[0.45em] inline-block size-[0.22em] rounded-full bg-bordo" />
      <span aria-hidden="true" className="font-sans text-[0.62em] font-normal tracking-[0.04em]">
        {secondary}
      </span>
    </span>
  );
}
