import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v4h4v-4h3.2l.8-4H13V9c0-.7.3-1 1-1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.75" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function TopBar() {
  return (
    <div className="topbar" role="region" aria-label="Contact information">
      <div className="container topbar-inner">
        <div className="topbar-meta">
          <Link href="/service-areas" className="hide-mobile topbar-item">
            <MapPin size={14} aria-hidden="true" strokeWidth={2} />
            Serving Calgary &amp; Surrounding Areas
          </Link>
          <a href={siteConfig.phoneHref} className="topbar-item">
            <Phone size={14} aria-hidden="true" strokeWidth={2} />
            {siteConfig.phone}
          </a>
          <a href={siteConfig.emailHref} className="topbar-item hide-mobile">
            <Mail size={14} aria-hidden="true" strokeWidth={2} />
            {siteConfig.email}
          </a>
        </div>

        <div className="topbar-socials" aria-label="Social links">
          <a
            href={siteConfig.social.facebook}
            className="topbar-social-link"
            target="_blank"
            rel="noreferrer"
            aria-label="Follow Photos 4 Real Estate on Facebook"
          >
            <FacebookIcon />
          </a>
          <a
            href={siteConfig.social.instagram}
            className="topbar-social-link"
            target="_blank"
            rel="noreferrer"
            aria-label="Follow Photos 4 Real Estate on Instagram"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
