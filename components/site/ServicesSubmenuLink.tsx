"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";

type Props = {
  href: string;
  name: string;
  icon?: ReactNode;
  onNavigate?: () => void;
};

export function ServicesSubmenuLink({ href, name, icon, onNavigate }: Props) {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onNavigate?.();
    e.currentTarget.blur();
  };
  return (
    <Link href={href} role="menuitem" onClick={onClick}>
      {icon && <span className="nav-submenu-icon">{icon}</span>}
      <span className="nav-submenu-text">
        {name}
        <span className="sr-only"> in Calgary</span>
      </span>
    </Link>
  );
}
