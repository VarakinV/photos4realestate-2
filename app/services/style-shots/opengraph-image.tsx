import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt =
  "Style Shots photography for Calgary real estate listings — Photos 4 Real Estate";
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
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "linear-gradient(135deg, #0e1630 0%, #131d3b 56%, #4f2530 100%)", padding: "72px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: 84, top: 98, width: 300, height: 360, borderRadius: 30, border: "4px solid rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.08)" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img src={logoSrc} alt="" width="64" height="64" style={{ width: 64, height: 64 }} />
          <span style={{ color: "#fff", fontSize: 34, fontWeight: 600 }}>{siteConfig.name}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 820 }}>
          <span style={{ color: "#f5d0d4", fontSize: 22, textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 22, fontWeight: 600 }}>Signature Detail Shots</span>
          <h1 style={{ color: "#fff", fontSize: 76, lineHeight: 1.04, margin: 0 }}>Style Shots for Real Estate</h1>
        </div>
        <div style={{ display: "flex", gap: 28, fontSize: 24, color: "rgba(255,255,255,0.82)" }}>
          <span>3–4 Close-Ups</span><span style={{ color: "#cb4154" }}>•</span><span>$35 Add-On</span><span style={{ color: "#cb4154" }}>•</span><span>Calgary</span>
        </div>
      </div>
    ),
    size
  );
}