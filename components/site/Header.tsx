"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/site/Logo";
import { ServicesNavParentLink } from "@/components/site/ServicesNavParentLink";
import { ServicesSubmenuLink } from "@/components/site/ServicesSubmenuLink";
import { servicesMegamenuGroups } from "@/components/site/servicesMegamenuData";
import { freeTools, primaryNav, siteConfig } from "@/lib/site";

const HotelProjectDialog = dynamic(
  () => import("@/components/hotel/HotelProjectDialog").then((module) => module.HotelProjectDialog),
  { ssr: false },
);

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

type HeaderProps = {
  recaptchaSiteKey?: string;
};

export function Header({ recaptchaSiteKey }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServicesDismissed, setIsServicesDismissed] = useState(false);
  const [isFreeToolsOpen, setIsFreeToolsOpen] = useState(false);
  const [isFreeToolsDismissed, setIsFreeToolsDismissed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsServicesOpen(false);
      setIsServicesDismissed(false);
      setIsFreeToolsOpen(false);
      setIsFreeToolsDismissed(false);

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
    setIsFreeToolsOpen(false);
  };

  const isHotelPhotographyPage = pathname === "/services/hotel-photography" || pathname === "/hotel-photography";

  const dismissServicesMenu = () => {
    setIsServicesDismissed(true);
    closeMenus();
  };

  const dismissFreeToolsMenu = () => {
    setIsFreeToolsDismissed(true);
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
                          setIsFreeToolsOpen(false);
                          setIsServicesOpen((open) => !open);
                        }}
                      >
                        <ChevronDown size={16} aria-hidden="true" strokeWidth={2} />
                      </button>
                    </div>

                    <ul id="services-submenu" className="nav-submenu nav-submenu--megamenu" role="menu">
                      {servicesMegamenuGroups.map((group) => (
                        <li key={group.title} className="nav-megamenu-group" role="none">
                          <span className="nav-megamenu-heading">{group.title}</span>
                          <ul className="nav-megamenu-items" role="none">
                            {group.items.map((item) => (
                              <li key={item.slug} role="none">
                                <ServicesSubmenuLink
                                  href={`/services/${item.slug}`}
                                  name={item.name}
                                  icon={item.icon}
                                  onNavigate={dismissServicesMenu}
                                />
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

              if (item.href === "/free-tools") {
                return (
                  <li
                    key={item.href}
                    className={`nav-item-has-children${isFreeToolsOpen ? " is-open" : ""}${isFreeToolsDismissed ? " is-dismissed" : ""}`}
                    onMouseLeave={() => setIsFreeToolsDismissed(false)}
                  >
                    <div className="nav-parent-row">
                      <ServicesNavParentLink href={item.href} onNavigate={dismissFreeToolsMenu}>
                        {item.label}
                      </ServicesNavParentLink>
                      <button
                        type="button"
                        className="nav-submenu-toggle"
                        aria-expanded={isFreeToolsOpen}
                        aria-controls="free-tools-submenu"
                        aria-label={isFreeToolsOpen ? "Collapse Free Tools menu" : "Expand Free Tools menu"}
                        onClick={() => {
                          setIsFreeToolsDismissed(false);
                          setIsServicesOpen(false);
                          setIsFreeToolsOpen((open) => !open);
                        }}
                      >
                        <ChevronDown size={16} aria-hidden="true" strokeWidth={2} />
                      </button>
                    </div>

                    <ul id="free-tools-submenu" className="nav-submenu">
                      {freeTools.map((tool) => (
                        <li key={tool.href}>
                          <ServicesSubmenuLink
                            href={tool.href}
                            name={tool.name}
                            onNavigate={dismissFreeToolsMenu}
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

          {isHotelPhotographyPage ? (
            <HotelProjectDialog
              triggerClassName="btn btn-primary nav-cta nav-cta-mobile"
              srSuffix=" for hotel photography"
              showIcon={false}
              recaptchaSiteKey={recaptchaSiteKey}
              onOpen={closeMenus}
            >
              Start Project
            </HotelProjectDialog>
          ) : (
            <a href={siteConfig.bookingUrl} className="btn btn-primary nav-cta nav-cta-mobile" onClick={closeMenus}>
              Book Now
              <span className="sr-only"> for Calgary real estate photography and media services</span>
            </a>
          )}

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

        {isHotelPhotographyPage ? (
          <HotelProjectDialog
            triggerClassName="btn btn-primary nav-cta nav-cta-desktop"
            srSuffix=" for hotel photography"
            showIcon={false}
            recaptchaSiteKey={recaptchaSiteKey}
          >
            Start Project
          </HotelProjectDialog>
        ) : (
          <a href={siteConfig.bookingUrl} className="btn btn-primary nav-cta nav-cta-desktop">
            Book Now
            <span className="sr-only"> for Calgary real estate photography and media services</span>
          </a>
        )}

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
                setIsFreeToolsOpen(false);
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
