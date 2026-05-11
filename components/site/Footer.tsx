import Link from "next/link";
import { Logo } from "@/components/site/Logo";
import { siteConfig, services, serviceAreas } from "@/lib/site";

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

export function Footer() {
  const year = new Date().getFullYear();
  const quickLinks = [
    { href: "/prices", label: "Prices & Packages" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/free-tools", label: "Free Realtor Tools" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About Us" },
    {
      href: "/real-estate-photography-comparison-calgary",
      label: "Why Choose Us",
    },
    { href: "/photoshoot-checklist", label: "Photoshoot Checklist" },
    { href: "/points-rewards", label: "Points & Rewards" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact-us", label: "Contact" },
  ] as const;

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo variant="footer" />
            <p>
              Professional real estate photography, videography, drone, 3D tours and RMS
              floor plans in Calgary and surrounding areas.
            </p>

            <div className="footer-contact-block">
              <div className="footer-contact-item">
                <span className="footer-contact-label">Phone</span>
                <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-label">Email</span>
                <a href={siteConfig.emailHref}>{siteConfig.email}</a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-label">Follow Us</span>
                <div className="footer-socials" aria-label="Follow us on social media">
                  <a
                    href={siteConfig.social.facebook}
                    className="footer-social-link"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Follow Photos 4 Real Estate on Facebook"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href={siteConfig.social.instagram}
                    className="footer-social-link"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Follow Photos 4 Real Estate on Instagram"
                  >
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}/`}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Service Areas</h4>
            <ul>
              {serviceAreas.map((area) => (
                <li key={area}>
                  <Link href={`/service-areas/${area.toLowerCase().replace(/\s+/g, "-")}/`}>
                    {area}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service-areas" className="footer-all-areas-link">
                  All Areas <span aria-hidden="true">→</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />
        <div className="footer-bottom">
          <span>
            © {year} {siteConfig.name}. All rights reserved.
          </span>
          <span>
            <Link href="/privacy-policy">Privacy</Link> ·{" "}
            <Link href="/terms-and-conditions">Terms</Link> · <Link href="/cookies-policy">Cookies</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
