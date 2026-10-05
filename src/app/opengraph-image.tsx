import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";
import { hero } from "@/content/home";

export const alt = `${siteConfig.name} — ${hero.eyebrow}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default share image for every page (pages can override with `ogImage`). */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#141110",
          color: "#f5f2ec",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 30, letterSpacing: 8 }}>
          {siteConfig.wordmark.primary}
          <div style={{ width: 9, height: 9, borderRadius: 9, background: "#8f2a3d", margin: "0 18px" }} />
          <span style={{ letterSpacing: 1, fontSize: 24 }}>{siteConfig.wordmark.secondary}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, lineHeight: 1.05 }}>
          {hero.title.map((line, i) => (
            <span key={i}>{`${line.text}${line.emphasis ?? ""}`}</span>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 24, fontSize: 22, color: "#a59d95" }}>
          <div style={{ width: 64, height: 1, background: "#8f2a3d" }} />
          {hero.eyebrow}
        </div>
      </div>
    ),
    size,
  );
}
