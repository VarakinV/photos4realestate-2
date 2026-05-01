import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, FileOutput, Info, Ruler, Star } from "lucide-react";
import LiquidEther from "@/components/bits/LiquidEther";
import { homeImages } from "@/lib/images";

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="hero-google-mark">
      <path fill="#EA4335" d="M12 10.2v3.9h5.4c-.22 1.25-.94 2.31-2.03 3.03l3.28 2.54c1.91-1.76 3.01-4.35 3.01-7.43 0-.72-.06-1.39-.19-2.03H12Z" />
      <path fill="#34A853" d="M12 22c2.7 0 4.97-.9 6.63-2.43l-3.28-2.54c-.9.61-2.06.98-3.35.98-2.58 0-4.77-1.74-5.55-4.08H3.08v2.62A9.99 9.99 0 0 0 12 22Z" />
      <path fill="#4A90E2" d="M6.45 13.93A5.94 5.94 0 0 1 6.14 12c0-.67.12-1.31.31-1.93V7.45H3.08A9.99 9.99 0 0 0 2 12c0 1.61.39 3.13 1.08 4.55l3.37-2.62Z" />
      <path fill="#FBBC05" d="M12 5.97c1.47 0 2.8.51 3.84 1.51l2.87-2.87C16.97 2.98 14.7 2 12 2A9.99 9.99 0 0 0 3.08 7.45l3.37 2.62c.78-2.34 2.97-4.1 5.55-4.1Z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-content">
        <div className="hero-content-ether" aria-hidden="true">
          <LiquidEther
            colors={["#de3650", "#131d3b", "#4a86d9"]}
            mouseForce={14}
            cursorSize={120}
            resolution={0.7}
            autoSpeed={0.42}
            autoIntensity={1.8}
          />
        </div>
        <div className="hero-content-inner">
          <span className="hero-eyebrow">Calgary&rsquo;s Real Estate Media Specialists</span>
          <h1 id="hero-heading" className="speakable-intro">
            Real Estate Photography &amp; Videography in <em>Calgary.</em>
          </h1>
          <p className="hero-sub">
            <strong>Photos 4 Real Estate</strong> delivers MLS-ready photography,
            videography, drone, iGUIDE 3D tours and RMS floor plans for Calgary Realtors
            and homeowners — shot, edited and delivered by the next business day.
          </p>
          <div className="hero-actions">
            <Link href="/book-online" className="btn btn-primary">
              Book Your Shoot <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/prices/" className="btn btn-outline">
              View Pricing
            </Link>
          </div>
          <div className="hero-badges">
            <span className="hero-badge">
              <Clock size={14} aria-hidden="true" strokeWidth={2} />
              Next-Day Delivery
            </span>
            <span className="hero-badge">
              <FileOutput size={14} aria-hidden="true" strokeWidth={2} />
              MLS-Ready Exports
            </span>
            <span className="hero-badge">
              <Ruler size={14} aria-hidden="true" strokeWidth={2} />
              RECA-Compliant RMS
            </span>
          </div>
        </div>
      </div>

      <div className="hero-img-col">
        <div className="hero-img-stack">
          <div className="hero-img-item span-row">
            <Image
              src={homeImages.heroLarge}
              alt="Modern Calgary living room photographed for a real estate listing by Photos 4 Real Estate"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
            <div className="hero-img-overlay" />
          </div>
          <div className="hero-img-item">
            <Image
              src={homeImages.heroTopLeft}
              alt="Calgary home exterior real estate photograph"
              fill
              sizes="(max-width: 900px) 100vw, 25vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="hero-img-item">
            <Image
              src={homeImages.heroBottomLeft}
              alt="Kitchen interior photographed for MLS listing in Calgary"
              fill
              sizes="(max-width: 900px) 100vw, 25vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="hero-rating" aria-label="Google rating: 5 out of 5, top rated service 2026, verified by Trustindex">
          <GoogleMark />
          <div className="hero-rating-content">
            <div className="hero-rating-title">Top Rated Service 2026</div>
            <div className="hero-rating-meta">
              <span className="hero-stars" aria-hidden="true">
                <Star size={15} fill="currentColor" strokeWidth={0} />
                <strong>5.0</strong>
              </span>
              <span className="hero-rating-verified">
                verified by Trustindex
                <Info size={12} aria-hidden="true" strokeWidth={2} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
