"use client";

import { useEffect, useState } from "react";

export type JumpNavItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

type ServicesJumpNavProps = {
  items: ReadonlyArray<JumpNavItem>;
};

export function ServicesJumpNav({ items }: ServicesJumpNavProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    for (const section of sections) observer.observe(section);

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    setActiveId(id);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    if (typeof window !== "undefined" && window.history?.replaceState) {
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <nav className="services-nav" aria-label="Jump to service">
      <div className="container">
        <div className="services-nav-inner">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`services-nav-link${
                activeId === item.id ? " active" : ""
              }`}
              onClick={(e) => handleClick(e, item.id)}
              aria-current={activeId === item.id ? "location" : undefined}
              aria-label={`Jump to ${item.label}`}
            >
              <span className="services-nav-icon" aria-hidden="true">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
