"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Camera, ChevronDown, Mail, Menu, Phone, ThumbsUp, X } from "lucide-react";
import { Logo } from "@/components/site/Logo";
import { ServicesNavParentLink } from "@/components/site/ServicesNavParentLink";
import { ServicesSubmenuLink } from "@/components/site/ServicesSubmenuLink";
import { primaryNav, services, siteConfig } from "@/lib/site";

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
                <ThumbsUp size={18} aria-hidden="true" strokeWidth={2} />
              </a>
              <a
                href={siteConfig.social.instagram}
                className="nav-menu-social-link"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Photos 4 Real Estate on Instagram"
              >
                <Camera size={18} aria-hidden="true" strokeWidth={2} />
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
