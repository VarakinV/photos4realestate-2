"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

const CODE = "25%OFF";

export function PromoCode() {
  const [copied, setCopied] = useState(false);

  const onClick = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(CODE);
      }
    } catch {
      // clipboard may be unavailable in some browsers
    }
    setCopied(true);
  };

  if (copied) {
    return (
      <>
        <a href={siteConfig.bookingUrl} className="promo-book">
          Book Now
          <ArrowRight size={14} aria-hidden="true" />
          <span className="sr-only">
            {" "}&mdash; Calgary real estate photography with promo {CODE}
          </span>
        </a>
        <div
          className="promo-note promo-note-copied"
          role="status"
          aria-live="polite"
        >
          Copied! Apply at checkout
        </div>
      </>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className="promo-code promo-code-button"
        aria-label={`Copy promo code ${CODE} to clipboard`}
      >
        {CODE}
      </button>
      <div className="promo-note">Click to copy &middot; Apply at checkout</div>
    </>
  );
}
