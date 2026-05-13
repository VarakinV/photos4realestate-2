import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = "Real Estate Photography Service Area | Photos 4 Real Estate";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

const townOgData = {
  airdrie: {
    city: "Airdrie",
    eyebrow: "Airdrie Real Estate Photography",
    title: "Real Estate Photography in Airdrie",
    subtitle: "Photos, Drone, Video, RMS Floor Plans & 3D Tours",
  },
  okotoks: {
    city: "Okotoks",
    eyebrow: "Okotoks Real Estate Photography",
    title: "Real Estate Photography in Okotoks",
    subtitle: "Photos, Drone, Video, RMS Floor Plans & 3D Tours",
  },
  cochrane: {
    city: "Cochrane",
    eyebrow: "Cochrane Real Estate Photography",
    title: "Real Estate Photography in Cochrane",
    subtitle: "Photos, Drone, Video, RMS Floor Plans & 3D Tours",
  },
  chestermere: {
    city: "Chestermere",
    eyebrow: "Chestermere Real Estate Photography",
    title: "Real Estate Photography in Chestermere",
    subtitle: "Photos, Drone, Video, RMS Floor Plans & 3D Tours",
  },
  "high-river": {
    city: "High River",
    eyebrow: "High River Real Estate Photography",
    title: "Real Estate Photography in High River",
    subtitle: "Photos, Drone, Video, RMS Floor Plans & 3D Tours",
  },
  springbank: {
    city: "Springbank",
    eyebrow: "Springbank Luxury Real Estate Photography",
    title: "Real Estate Photography in Springbank",
    subtitle: "Luxury Estates, Acreages, Drone, Video & 3D Tours",
  },
  bearspaw: {
    city: "Bearspaw",
    eyebrow: "Bearspaw Luxury Real Estate Photography",
    title: "Real Estate Photography in Bearspaw",
    subtitle: "Luxury Estates, Acreages, Drone, Video & 3D Tours",
  },
  "rocky-view-county": {
    city: "Rocky View County",
    eyebrow: "Rocky View County Real Estate Photography",
    title: "Real Estate Photography in Rocky View County",
    subtitle: "Acreages, Estates, Rural Homes, Drone, Video & 3D Tours",
  },
  banff: {
    city: "Banff",
    eyebrow: "Banff Real Estate Photography",
    title: "Real Estate Photography in Banff",
    subtitle: "Mountain Homes, Condos, Drone, Video & 3D Tours",
  },
} as const;

type TownSlug = keyof typeof townOgData;

export function generateStaticParams() {
  return Object.keys(townOgData).map((town) => ({ town }));
}

async function getLogoDataUrl() {
  const logoSvg = await readFile(
    join(process.cwd(), "public", "logos", "map-pin-logo.svg"),
    "utf8",
  );

  return `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString("base64")}`;
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ town: string }>;
}) {
  const { town } = await params;
  const data = townOgData[town as TownSlug] ?? townOgData.airdrie;
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
            "linear-gradient(135deg, #0e1630 0%, #131d3b 52%, #1e2d5a 100%)",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img src={logoSrc} alt="" width="64" height="64" style={{ width: 64, height: 64 }} />
          <span style={{ color: "#fff", fontSize: 34, fontWeight: 600, letterSpacing: "-0.01em" }}>
            {siteConfig.name}
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
            {data.eyebrow}
          </span>
          <h1
            style={{
              color: "#fff",
              fontSize: 74,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              margin: 0,
              maxWidth: 980,
            }}
          >
            {data.title}
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
          <span>{data.city}</span>
          <span style={{ color: "#cb4154" }}>•</span>
          <span>{data.subtitle}</span>
          <span style={{ color: "#cb4154" }}>•</span>
          <span>Next-Day Delivery</span>
        </div>
      </div>
    ),
    size,
  );
}