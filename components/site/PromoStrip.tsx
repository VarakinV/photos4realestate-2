"use client";

import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";

export function PromoStrip() {
  const pathname = usePathname();

  if (pathname !== "/") {
    return null;
  }

  return (
    <div className="promo-strip" role="region" aria-label="Current promotion">
      <div className="container">
        🎉 New Client Special: <strong>25% off your first shoot</strong> — use code{" "}
        <span className="code">25%OFF</span> ·{" "}
        <a href={siteConfig.bookingUrl}>Book Now </a>
          <em>·  Realtors only. Limited time.</em>
      </div>
    </div>
  );
}
