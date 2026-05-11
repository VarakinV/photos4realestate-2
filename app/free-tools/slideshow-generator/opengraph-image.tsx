import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt =
  "Free slideshow generator Calgary — Photos 4 Real Estate";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

async function getLogoDataUrl() {
  const logoSvg = await readFile(
    join(process.cwd(), "public", "logos", "map-pin-logo.svg"),
    "utf8"
  );

  return `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString("base64")}`;
}

export default async function OgImage() {
  const logoSrc = await getLogoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #0e1630 0%, #131d3b 55%, #0f4f72 100%)",
          padding: "72px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 72,
            top: 150,
            width: 360,
            height: 205,
            borderRadius: 18,
            border: "4px solid rgba(255,255,255,0.18)",
            background: "linear-gradient(135deg, #0284c7 0%, #cb4154 100%)",
            opacity: 0.72,
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img src={logoSrc} alt="" width="64" height="64" style={{ width: 64, height: 64 }} />
          <span style={{ color: "#fff", fontSize: 34, fontWeight: 600 }}>
            {siteConfig.name}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 820 }}>
          <span
            style={{
              color: "#bae6fd",
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              marginBottom: 22,
              fontWeight: 600,
            }}
          >
            Free Tool for Calgary Realtors
          </span>
          <h1 style={{ color: "#fff", fontSize: 76, lineHeight: 1.04, margin: 0 }}>
            Free Real Estate Slideshow Generator
          </h1>
        </div>

        <div style={{ display: "flex", gap: 28, fontSize: 24, color: "rgba(255,255,255,0.82)" }}>
          <span>1 Property Slideshow</span>
          <span style={{ color: "#cb4154" }}>•</span>
          <span>16:9 MP4</span>
          <span style={{ color: "#cb4154" }}>•</span>
          <span>No Editing Required</span>
        </div>
      </div>
    ),
    size
  );
}