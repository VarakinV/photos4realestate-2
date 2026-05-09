import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";
import { pricingTiers } from "@/lib/pricing";

export const alt = `${siteConfig.name} — Real Estate Photography Prices in Calgary`;
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
  const startEssential = pricingTiers[0].essential;
  const startSkyline = pricingTiers[0].skyline;
  const startSocial = pricingTiers[0].social;
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
            "linear-gradient(135deg, #0e1630 0%, #131d3b 55%, #1e2d5a 100%)",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img
            src={logoSrc}
            alt=""
            width="64"
            height="64"
            style={{ width: 64, height: 64 }}
          />
          <span
            style={{
              color: "#fff",
              fontSize: 34,
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            Photos{" "}
            <span style={{ color: "#cb4154", fontWeight: 700 }}>4</span> Real
            Estate
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "#f5d0d4",
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              marginBottom: 22,
              fontWeight: 500,
            }}
          >
            Transparent Calgary Pricing
          </span>
          <h1
            style={{
              color: "#fff",
              fontSize: 72,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              margin: 0,
              maxWidth: 1040,
            }}
          >
            Real Estate Photography Prices in Calgary
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            gap: 28,
            fontSize: 24,
            color: "rgba(255,255,255,0.82)",
            alignItems: "center",
          }}
        >
          <span>
            Essential{" "}
            <span style={{ color: "#cb4154", fontWeight: 700 }}>
              ${startEssential}
            </span>
          </span>
          <span style={{ color: "#cb4154" }}>•</span>
          <span>
            Skyline{" "}
            <span style={{ color: "#cb4154", fontWeight: 700 }}>
              ${startSkyline}
            </span>
          </span>
          <span style={{ color: "#cb4154" }}>•</span>
          <span>
            Social Boost{" "}
            <span style={{ color: "#cb4154", fontWeight: 700 }}>
              ${startSocial}
            </span>
          </span>
        </div>
      </div>
    ),
    size
  );
}
