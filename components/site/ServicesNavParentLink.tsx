"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  onNavigate?: () => void;
};

export function ServicesNavParentLink({ href, children, onNavigate }: Props) {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onNavigate?.();
    e.currentTarget.blur();
  };
  return (
    <Link href={href} aria-haspopup="menu" onClick={onClick}>
      {children}
    </Link>
  );
}
