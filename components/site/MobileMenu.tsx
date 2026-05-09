"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ArrowRight, ChevronDown, Phone, Mail } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/site/Logo";
import { primaryNav, services, siteConfig } from "@/lib/site";

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.6V4.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.5H7.6V14h2.7v8h3.2z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className="mobile-menu-trigger inline-flex items-center justify-center rounded-md p-2 text-white/85 hover:text-white hover:bg-white/10 transition-colors lg:hidden"
      >
        <Menu size={24} strokeWidth={2} aria-hidden="true" />
      </SheetTrigger>
      <SheetContent side="right" className="mobile-menu-sheet">
        <SheetHeader className="p-0">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <Logo />
        </SheetHeader>
        <nav aria-label="Mobile primary">
          <ul className="flex flex-col gap-1">
            {primaryNav.map((item) => {
              if (item.href === "/services") {
                return (
                  <li key={item.href} className="mobile-has-children">
                    <div className="mobile-row">
                      <Link href={item.href} onClick={close}>
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        className="mobile-submenu-toggle"
                        aria-expanded={servicesOpen}
                        aria-controls="mobile-services-submenu"
                        aria-label={
                          servicesOpen
                            ? "Collapse services menu"
                            : "Expand services menu"
                        }
                        onClick={() => setServicesOpen((v) => !v)}
                      >
                        <ChevronDown
                          size={18}
                          strokeWidth={2}
                          aria-hidden="true"
                          className={`mobile-caret${
                            servicesOpen ? " is-open" : ""
                          }`}
                        />
                      </button>
                    </div>
                    <ul
                      id="mobile-services-submenu"
                      className={`mobile-submenu${
                        servicesOpen ? " is-open" : ""
                      }`}
                      hidden={!servicesOpen}
                    >
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            onClick={close}
                          >
                            {s.name}
                            <span className="sr-only"> in Calgary</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <Link href={item.href} onClick={close}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <a
          href={siteConfig.bookingUrl}
          onClick={close}
          className="btn btn-primary w-full inline-flex items-center justify-center gap-2"
        >
          Book Now
          <span className="sr-only"> &mdash; Calgary real estate photography</span>
          <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
        </a>
        <div className="mobile-contact">
          <ul className="mobile-contact-list">
            <li>
              <a href={siteConfig.phoneHref} onClick={close}>
                <Phone size={16} strokeWidth={2} aria-hidden="true" />
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={siteConfig.emailHref} onClick={close}>
                <Mail size={16} strokeWidth={2} aria-hidden="true" />
                {siteConfig.email}
              </a>
            </li>
          </ul>
          <ul className="mobile-socials" aria-label="Follow us on social media">
            <li>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Photos 4 Real Estate on Facebook"
              >
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Photos 4 Real Estate on Instagram"
              >
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
