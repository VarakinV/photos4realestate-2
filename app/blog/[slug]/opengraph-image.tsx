import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { blogPosts, getBlogOpenGraphImage, getBlogPost } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

async function getLogoDataUrl() {
  const logoSvg = await readFile(join(process.cwd(), "public", "logos", "map-pin-logo.svg"), "utf8");
  return `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString("base64")}`;
}

export default async function BlogOpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const logoSrc = await getLogoDataUrl();

  if (!post) {
    return new ImageResponse(<div style={{ width: "100%", height: "100%", background: "#131d3b" }} />, size);
  }

  const image = getBlogOpenGraphImage(post);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #131d3b 0%, #1e2d5a 50%, #131d3b 100%)" }}>
        <div style={{ position: "relative", zIndex: 1, width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "62px 72px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <img src={logoSrc} alt="" width="58" height="58" style={{ width: 58, height: 58 }} />
            <span style={{ color: "#fff", fontSize: 32, fontWeight: 700 }}>{siteConfig.name}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 790 }}>
            <span style={{ color: "#f5d0d4", fontSize: 21, textTransform: "uppercase", letterSpacing: "0.13em", marginBottom: 18, fontWeight: 700 }}>Calgary Real Estate Media Blog</span>
            <h1 style={{ color: "#fff", fontSize: 66, lineHeight: 1.04, fontWeight: 800, letterSpacing: "-0.035em", margin: 0 }}>{post.title}</h1>
          </div>
        </div>
      </div>
    ),
    size
  );
}