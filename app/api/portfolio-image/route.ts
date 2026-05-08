import { NextRequest, NextResponse } from "next/server";
import { fetchR2Object } from "@/lib/portfolio";

export const runtime = "nodejs";
export const revalidate = 3600;

export async function GET(request: NextRequest) {
  const key = request.nextUrl.searchParams.get("key");

  if (!key || key.includes("..")) {
    return NextResponse.json({ error: "Invalid portfolio image key" }, { status: 400 });
  }

  const r2Response = await fetchR2Object(key);

  if (!r2Response || !r2Response.ok || !r2Response.body) {
    return NextResponse.json({ error: "Portfolio image not found" }, { status: 404 });
  }

  return new NextResponse(r2Response.body, {
    status: 200,
    headers: {
      "Content-Type": r2Response.headers.get("content-type") ?? "image/jpeg",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}