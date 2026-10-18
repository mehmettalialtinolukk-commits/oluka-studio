"use client";

import { useEffect, useRef } from "react";

/** Length of the closing OLUKA • Studio logo scene at the end of the video. */
const LOGO_SCENE_SECONDS = 3;

/**
 * Hero background video. While the closing logo scene plays it marks the
 * hero with data-logo-scene so the copy can fade out instead of colliding
 * with the logo; the mark is cleared when the loop starts over.
 */
export function HeroVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    const section = video?.closest("section");
    if (!video || !section) return;

    const update = () => {
      const inLogoScene = video.duration > 0 && video.currentTime >= video.duration - LOGO_SCENE_SECONDS;
      section.toggleAttribute("data-logo-scene", inLogoScene);
    };

    video.addEventListener("timeupdate", update);
    video.addEventListener("seeked", update);
    return () => {
      video.removeEventListener("timeupdate", update);
      video.removeEventListener("seeked", update);
      section.removeAttribute("data-logo-scene");
    };
  }, []);

  return (
    <video
      ref={ref}
      className="h-full w-full object-cover"
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      tabIndex={-1}
    />
  );
}
