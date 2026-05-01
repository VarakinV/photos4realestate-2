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
  const secondHref = secondaryHref ?? "/contact-us/";
  const secondLabel = secondaryLabel ?? "Contact Us";
  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="container">
        <span className="section-label">{eyebrow ?? "Ready to list?"}</span>
        <h2 id="cta-heading">
          {title ?? "Book your next Calgary shoot in under a minute."}
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
          <Link href="/book-online" className="btn btn-primary">
            Book Online <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link href={secondHref} className="btn btn-outline">
            {secondLabel}
            {secondarySrSuffix ? (
              <span className="sr-only">{secondarySrSuffix}</span>
            ) : null}
          </Link>
        </div>
        <div className="cta-contact">
          <span className="cta-contact-item">
            Call <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
          </span>
          <span className="cta-contact-item">
            Email <a href={siteConfig.emailHref}>{siteConfig.email}</a>
          </span>
          <span className="cta-contact-item">
            Serving Calgary &amp; surrounding areas
          </span>
        </div>
      </div>
    </section>
  );
}
