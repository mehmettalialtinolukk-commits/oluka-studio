import Image from "next/image";

import type { ImageTone, MediaImage } from "@/content/types";

const tones: Record<ImageTone, { bg: string; fg: string }> = {
  paper: { bg: "bg-tone-paper", fg: "text-ink/55" },
  stone: { bg: "bg-tone-stone", fg: "text-ink/55" },
  sepia: { bg: "bg-tone-sepia", fg: "text-paper/75" },
  ink: { bg: "bg-tone-ink", fg: "text-paper/55" },
  bordo: { bg: "bg-tone-bordo", fg: "text-paper/60" },
};

type EditorialImageProps = {
  image: MediaImage;
  /** Responsive sizes hint for next/image, e.g. "(min-width: 1024px) 40vw, 90vw". */
  sizes: string;
  className?: string;
  /** Only for the above-the-fold LCP image. */
  priority?: boolean;
  imageClassName?: string;
};

/**
 * Image with a fixed aspect ratio (no layout shift).
 * Without a `src` it renders a neutral placeholder that names the intended
 * image, so missing visuals are obvious and easy to replace from content.
 */
export function EditorialImage({ image, sizes, className = "", priority = false, imageClassName = "" }: EditorialImageProps) {
  const ratio = `${image.width} / ${image.height}`;

  if (image.src) {
    return (
      <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: ratio }}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          className={`object-cover ${imageClassName}`}
          style={image.position ? { objectPosition: image.position } : undefined}
        />
      </div>
    );
  }

  const tone = tones[image.tone ?? "stone"];
  return (
    <div
      role="img"
      aria-label={image.alt}
      className={`relative overflow-hidden ${tone.bg} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <div className={`absolute inset-0 ${imageClassName}`}>
        <div className={`absolute inset-3 border border-current opacity-20 ${tone.fg}`} />
        <p className={`absolute bottom-5 left-5 right-5 max-w-[24ch] font-sans text-[0.7rem] leading-snug ${tone.fg}`}>
          <span className="label-text block text-[0.6rem]">Görsel alanı</span>
          {image.note ?? image.alt}
        </p>
      </div>
    </div>
  );
}
