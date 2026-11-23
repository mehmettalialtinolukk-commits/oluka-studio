import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";
import { hero } from "@/content/home";

/**
 * Typographic share card (1200×630) for pages without their own share photo.
 *
 * A route rather than app/opengraph-image.tsx: the file convention would
 * override every page's own share image, including the home page photo.
 * Rendered once at build time.
 */
export const dynamic = "force-static";

const fontDir = join(process.cwd(), "src/assets/fonts");
const [bodoniRegular, bodoniItalic, bodoniMedium, hanken] = await Promise.all(
  ["BodoniModa-Regular.ttf", "BodoniModa-Italic.ttf", "BodoniModa-Medium.ttf", "HankenGrotesk-Regular.ttf"].map((f) =>
    readFile(join(fontDir, f)),
  ),
);

// Site palette (see globals.css).
const ink = "#141110";
const paper = "#f5f2ec";
const bordo = "#8f2a3d";
const mute = "#a59d95";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: ink,
          color: paper,
          padding: "72px 80px",
          fontFamily: "Hanken Grotesk",
        }}
      >
        {/* Wordmark: OLUKA • Studio, as in the site header. */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontFamily: "Bodoni Moda", fontWeight: 500, fontSize: 34, letterSpacing: "0.2em" }}>
            {siteConfig.wordmark.primary}
          </span>
          <div style={{ width: 8, height: 8, borderRadius: 8, background: bordo, margin: "0 16px 0 10px" }} />
          <span style={{ fontSize: 22, letterSpacing: "0.04em" }}>{siteConfig.wordmark.secondary}</span>
        </div>

        {/* Hero headline: Bodoni, with the emphasis in italic like the home page H1. */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Bodoni Moda",
            fontSize: 88,
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
          }}
        >
          {hero.title.map((line, i) => (
            <div key={i} style={{ display: "flex" }}>
              <span>{line.text.trimEnd()}</span>
              {line.emphasis && (
                <span style={{ fontStyle: "italic", color: "rgba(245, 242, 236, 0.75)", marginLeft: "0.25em" }}>
                  {line.emphasis}
                </span>
              )}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", fontSize: 18, letterSpacing: "0.18em", color: mute }}>
          <div style={{ width: 64, height: 1, background: bordo, marginRight: 24 }} />
          {hero.eyebrow.toLocaleUpperCase("tr-TR")}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Bodoni Moda", data: bodoniRegular, weight: 400, style: "normal" },
        { name: "Bodoni Moda", data: bodoniItalic, weight: 400, style: "italic" },
        { name: "Bodoni Moda", data: bodoniMedium, weight: 500, style: "normal" },
        { name: "Hanken Grotesk", data: hanken, weight: 400, style: "normal" },
      ],
    },
  );
}
