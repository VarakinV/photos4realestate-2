import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

export type Crumb = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: ReadonlyArray<Crumb>;
  jsonLdId?: string;
};

export function Breadcrumbs({ items, jsonLdId }: BreadcrumbsProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${siteConfig.url}${c.href}` } : {}),
    })),
  };

  return (
    <>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <ol className="breadcrumbs-list">
            {items.map((c, i) => {
              const isLast = i === items.length - 1;
              return (
                <li key={`${c.label}-${i}`} className="breadcrumbs-item">
                  {isLast || !c.href ? (
                    <span aria-current={isLast ? "page" : undefined}>
                      {c.label}
                    </span>
                  ) : (
                    <Link href={c.href}>{c.label}</Link>
                  )}
                  {!isLast && (
                    <ChevronRight
                      className="breadcrumbs-sep"
                      aria-hidden="true"
                      size={14}
                      strokeWidth={1.75}
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
      {jsonLdId && <JsonLd id={jsonLdId} data={schema} />}
    </>
  );
}
