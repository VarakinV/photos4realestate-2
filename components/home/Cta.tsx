import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

type CtaProps = {
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  secondaryHref?: string;
  secondaryLabel?: ReactNode;
  secondarySrSuffix?: string;
};

export function Cta({
  eyebrow,
  title,
  description,
  secondaryHref,
  secondaryLabel,
  secondarySrSuffix,
}: CtaProps = {}) {
  const secondHref = secondaryHref ?? "/prices";
  const secondLabel = secondaryLabel ?? "View Pricing & Packages";
  const secondSrText = secondarySrSuffix ?? " for Calgary real estate photography packages";
  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="container">
        <span className="section-label">{eyebrow ?? "Ready to list?"}</span>
        <h2 id="cta-heading">
          {title ?? "Book Your Next Calgary Shoot in Under a Minute."}
        </h2>
        <p>
          {description ?? (
            <>
              Pick your date, choose your package, and we&rsquo;ll take it from
              there — photos, video, drone and floor plans delivered the next
              business day.
            </>
          )}
        </p>
        <div className="cta-actions">
          <a href={siteConfig.bookingUrl} className="btn btn-primary">
            Book Online
            <span className="sr-only"> for Calgary real estate photography and media services</span>
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <Link href={secondHref} className="btn btn-outline">
            {secondLabel}
            <span className="sr-only">{secondSrText}</span>
          </Link>
        </div>
        <div className="cta-contact">
          <span className="cta-contact-item">
            Call{" "}
            <a
              href={siteConfig.phoneHref}
              aria-label={`Call Photos 4 Real Estate at ${siteConfig.phone}`}
            >
              {siteConfig.phone}
            </a>
          </span>
          <span className="cta-contact-item">
            Email{" "}
            <a
              href={siteConfig.emailHref}
              aria-label={`Email Photos 4 Real Estate at ${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>
          </span>
          <span className="cta-contact-item">
            <Link href="/service-areas">Serving Calgary &amp; surrounding areas</Link>
          </span>
        </div>
      </div>
    </section>
  );
}
