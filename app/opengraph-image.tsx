import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — Real Estate Photography in Calgary`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
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
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#cb4154"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 10c0 6-8 13-8 13s-8-7-8-13a8 8 0 0 1 16 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
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
            Calgary&rsquo;s Real Estate Media Specialists
          </span>
          <h1
            style={{
              color: "#fff",
              fontSize: 82,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              margin: 0,
              maxWidth: 960,
            }}
          >
            Real Estate Photography &amp; Videography in Calgary.
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            gap: 28,
            fontSize: 24,
            color: "rgba(255,255,255,0.78)",
            alignItems: "center",
          }}
        >
          <span>Next-Day Delivery</span>
          <span style={{ color: "#cb4154" }}>•</span>
          <span>MLS-Ready Exports</span>
          <span style={{ color: "#cb4154" }}>•</span>
          <span>5.0 / 5 on Google</span>
        </div>
      </div>
    ),
    size
  );
}
