import Link from "next/link";

export function PromoStrip() {
  return (
    <div className="promo-strip" role="region" aria-label="Current promotion">
      <div className="container">
        🎉 New Client Special: <strong>25% off your first shoot</strong> — use code{" "}
        <span className="code">25%OFF</span> ·{" "}
        <Link href="/book-online">Book Now </Link>
          <em>·  Realtors only. Limited time.</em>
      </div>
    </div>
  );
}
