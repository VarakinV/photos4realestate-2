"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/site/Logo";
import { ServicesNavParentLink } from "@/components/site/ServicesNavParentLink";
import { ServicesSubmenuLink } from "@/components/site/ServicesSubmenuLink";
import { primaryNav, services, siteConfig } from "@/lib/site";

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
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="3.75" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServicesDismissed, setIsServicesDismissed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsServicesOpen(false);
      setIsServicesDismissed(false);

      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const dismissServicesMenu = () => {
    setIsServicesDismissed(true);
    closeMenus();
  };

  useEffect(() => {
    closeMenus();
  }, [pathname]);

  return (
    <header className="site-nav">
      <div className="container nav-inner">
        <Logo />

        <nav
          id="primary-nav"
          aria-label="Primary"
          className={`nav-menu${isMenuOpen ? " is-open" : ""}`}
        >
          <ul className="nav-links">
            {primaryNav.map((item) => {
              if (item.href === "/services") {
                return (
                  <li
                    key={item.href}
                    className={`nav-item-has-children${isServicesOpen ? " is-open" : ""}${isServicesDismissed ? " is-dismissed" : ""}`}
                    onMouseLeave={() => setIsServicesDismissed(false)}
                  >
                    <div className="nav-parent-row">
                      <ServicesNavParentLink href={item.href} onNavigate={dismissServicesMenu}>
                        {item.label}
                      </ServicesNavParentLink>
                      <button
                        type="button"
                        className="nav-submenu-toggle"
                        aria-expanded={isServicesOpen}
                        aria-controls="services-submenu"
                        aria-label={isServicesOpen ? "Collapse Services menu" : "Expand Services menu"}
                        onClick={() => {
                          setIsServicesDismissed(false);
                          setIsServicesOpen((open) => !open);
                        }}
                      >
                        <ChevronDown size={16} aria-hidden="true" strokeWidth={2} />
                      </button>
                    </div>

                    <ul id="services-submenu" className="nav-submenu">
                      {services.map((service) => (
                        <li key={service.slug}>
                          <ServicesSubmenuLink
                            href={`/services/${service.slug}`}
                            name={service.name}
                            onNavigate={dismissServicesMenu}
                          />
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link href={item.href} onClick={closeMenus}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link href="/book-online" className="btn btn-primary nav-cta nav-cta-mobile" onClick={closeMenus}>
            Book Now
            <span className="sr-only"> for Calgary real estate photography and media services</span>
          </Link>

          <div className="nav-menu-contact">
            <a href={siteConfig.phoneHref} className="nav-contact-item">
              <Phone size={16} aria-hidden="true" strokeWidth={2} />
              {siteConfig.phone}
            </a>
            <a href={siteConfig.emailHref} className="nav-contact-item">
              <Mail size={16} aria-hidden="true" strokeWidth={2} />
              {siteConfig.email}
            </a>

            <div className="nav-menu-socials" aria-label="Social links">
              <a
                href={siteConfig.social.facebook}
                className="nav-menu-social-link"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Photos 4 Real Estate on Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href={siteConfig.social.instagram}
                className="nav-menu-social-link"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Photos 4 Real Estate on Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </nav>

        <Link href="/book-online" className="btn btn-primary nav-cta nav-cta-desktop">
          Book Now
          <span className="sr-only"> for Calgary real estate photography and media services</span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="primary-nav"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => {
            setIsMenuOpen((open) => {
              const nextOpen = !open;
              if (!nextOpen) {
                setIsServicesOpen(false);
              }
              return nextOpen;
            });
          }}
        >
          {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
