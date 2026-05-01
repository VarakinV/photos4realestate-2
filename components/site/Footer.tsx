import Link from "next/link";
import { Logo } from "@/components/site/Logo";
import { siteConfig, services, serviceAreas } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  const topServices = services.slice(0, 5);
  const topAreas = serviceAreas.slice(1, 6);

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
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {topServices.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}/`}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Service Areas</h4>
            <ul>
              {topAreas.map((area) => (
                <li key={area}>
                  <Link href={`/service-areas/${area.toLowerCase().replace(/\s+/g, "-")}/`}>
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
              </li>
              <li>
                <a href={siteConfig.emailHref}>{siteConfig.email}</a>
              </li>
              <li>{`${siteConfig.address.locality}, ${siteConfig.address.region}`}</li>
              <li>
                <Link href="/contact-us/">Contact us</Link>
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
            <Link href="/privacy-policy/">Privacy</Link> ·{" "}
            <Link href="/terms/">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
