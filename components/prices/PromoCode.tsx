"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
        <Link href="/book-online" className="promo-book">
          Book Now
          <ArrowRight size={14} aria-hidden="true" />
          <span className="sr-only">
            {" "}&mdash; Calgary real estate photography with promo {CODE}
          </span>
        </Link>
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
