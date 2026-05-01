import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

type LogoProps = {
  variant?: "nav" | "footer";
  href?: string;
  priority?: boolean;
};

export function Logo({ variant = "nav", href = "/", priority = false }: LogoProps) {
  const isFooter = variant === "footer";
  const wrapClass = isFooter ? "footer-logo" : "nav-logo";
  const markClass = isFooter ? "footer-logo-mark" : "nav-logo-mark";
  const titleClass = isFooter ? "footer-logo-title" : "nav-logo-title";
  const size = isFooter ? 32 : 34;

  return (
    <Link href={href} className={wrapClass} aria-label={`${siteConfig.name} home`}>
      <Image
        src="/logos/map-pin-logo.svg"
        alt="Photos 4 Real Estate map-pin logo"
        width={size}
        height={size}
        className={markClass}
        priority={priority}
      />
      {isFooter ? (
        <span className={titleClass}>
          Photos <em>4</em> Real Estate
        </span>
      ) : (
        <span className="nav-logo-text">
          <span className={titleClass}>
            Photos <em>4</em> Real Estate
          </span>
          <span className="nav-logo-sub">{siteConfig.tagline}</span>
        </span>
      )}
    </Link>
  );
}
