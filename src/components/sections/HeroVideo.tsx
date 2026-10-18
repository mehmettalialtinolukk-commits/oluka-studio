"use client";

import { useEffect, useRef } from "react";

/** Length of the closing OLUKA • Studio logo scene at the end of the video. */
const LOGO_SCENE_SECONDS = 3;
/** The logo scene's backdrop is fully settled this many seconds before the end. */
const LOGO_FRAME_SECONDS = 2.7;

/** Logo bounds inside the 1920×1080 source frame, and the scene's backdrop color. */
const SOURCE = { width: 1920, height: 1080 };
const LOGO = { left: 934, right: 1778, top: 474, bottom: 578 };
const LOGO_BACKDROP = "#fefbf7";
/** Share of the viewport width the logo may take once reframed. */
const LOGO_FIT = 0.84;

/**
 * Hero background video. While the closing logo scene plays it marks the
 * hero with data-logo-scene so the copy can fade out instead of colliding
 * with the logo; the mark is cleared when the loop starts over.
 * During that scene it also centres the logo (zooming out where the crop
 * would cut it), then eases back to the normal crop when the loop restarts.
 */
export function HeroVideo({ src }: { src: string }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const video = ref.current;
    const section = video?.closest("section");
    if (!frame || !video || !section) return;

    let reframed = false;

    // Scale and offset that fit the whole logo inside the cover crop and
    // centre it on the visible screen (the hero can be taller than the viewport).
    const logoFraming = () => {
      const { clientWidth: w, clientHeight: h } = frame;
      const cover = Math.max(w / SOURCE.width, h / SOURCE.height);
      const logoWidth = (LOGO.right - LOGO.left) * cover;
      const scale = Math.min(1, (LOGO_FIT * w) / logoWidth);
      const offsetX = ((LOGO.left + LOGO.right) / 2 - SOURCE.width / 2) * cover;
      const offsetY = ((LOGO.top + LOGO.bottom) / 2 - SOURCE.height / 2) * cover;
      const screenShiftY = (Math.min(h, window.innerHeight) - h) / 2;
      return `translate(${-offsetX * scale}px, ${-offsetY * scale + screenShiftY}px) scale(${scale})`;
    };

    const applyFraming = (on: boolean) => {
      reframed = on;
      video.style.transform = on ? logoFraming() : "";
      frame.style.backgroundColor = on ? LOGO_BACKDROP : "";
    };

    const update = () => {
      const remaining = video.duration > 0 ? video.duration - video.currentTime : Infinity;
      section.toggleAttribute("data-logo-scene", remaining <= LOGO_SCENE_SECONDS);

      const shouldReframe = remaining <= LOGO_FRAME_SECONDS;
      if (shouldReframe !== reframed) applyFraming(shouldReframe);
    };

    const onResize = () => {
      if (reframed) video.style.transform = logoFraming();
    };

    video.addEventListener("timeupdate", update);
    video.addEventListener("seeked", update);
    window.addEventListener("resize", onResize);
    return () => {
      video.removeEventListener("timeupdate", update);
      video.removeEventListener("seeked", update);
      window.removeEventListener("resize", onResize);
      section.removeAttribute("data-logo-scene");
    };
  }, []);

  return (
    // The video box is the full 16:9 cover size (not object-cover), so zooming out reveals what the crop hid.
    // The clip hides the 1px black columns on the source's left and right edges once the logo scene shifts them into view.
    <div ref={frameRef} className="absolute inset-0 overflow-hidden transition-[background-color] duration-(--duration-slow) ease-editorial [container-type:size]">
      <video
        ref={ref}
        className="absolute left-1/2 top-1/2 h-[max(100cqh,calc(100cqw*9/16))] w-[max(100cqw,calc(100cqh*16/9))] max-w-none -translate-x-1/2 -translate-y-1/2 transition-transform [clip-path:inset(0_2px)] duration-(--duration-slow) ease-editorial"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        tabIndex={-1}
      />
    </div>
  );
}
