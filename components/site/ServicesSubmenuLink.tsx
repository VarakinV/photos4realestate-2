"use client";

import Link from "next/link";
import type { MouseEvent } from "react";

type Props = {
  href: string;
  name: string;
  onNavigate?: () => void;
};

export function ServicesSubmenuLink({ href, name, onNavigate }: Props) {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onNavigate?.();
    e.currentTarget.blur();
  };
  return (
    <Link href={href} role="menuitem" onClick={onClick}>
      {name}
      <span className="sr-only"> in Calgary</span>
    </Link>
  );
}
