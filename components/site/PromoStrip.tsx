"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function PromoStrip() {
  const pathname = usePathname();

  if (pathname !== "/") {
    return null;
  }

  return (
    <div className="promo-strip" role="region" aria-label="Current promotion">
      <div className="container">
        <strong>Marketing Kit Included</strong> — Everything you need to promote your
        listing.{" "}
        <Link href="/services/marketing-kit-for-realtors">Learn More</Link>
      </div>
    </div>
  );
}
