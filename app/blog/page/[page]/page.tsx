import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogPagination } from "@/components/blog/BlogPagination";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { BLOG_POSTS_PER_PAGE, getBlogPostsPage, totalBlogPages } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = 3600;

export function generateStaticParams() {
  return Array.from({ length: Math.max(totalBlogPages - 1, 0) }, (_, index) => ({ page: String(index + 2) }));
}

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }): Promise<Metadata> {
  const { page } = await params;
  const pageNumber = Number(page);
  if (!Number.isInteger(pageNumber) || pageNumber < 2 || pageNumber > totalBlogPages) return {};
  const pageUrl = `${siteConfig.url}/blog/page/${pageNumber}`;
  const title = `Real Estate Photography Blog Calgary - Page ${pageNumber} | Photos 4 Real Estate`;
  const description = `Browse page ${pageNumber} of the Photos 4 Real Estate Calgary blog for listing media, photography, staging, video, drone, and marketing tips.`;
  const ogImageUrl = `${siteConfig.url}/opengraph-image`;
  return { title: { absolute: title }, description, alternates: { canonical: pageUrl }, openGraph: { type: "website", title, description, url: pageUrl, siteName: siteConfig.name, locale: "en_CA", images: [{ url: ogImageUrl, width: 1200, height: 630, alt: title }] }, twitter: { card: "summary_large_image", title, description, images: [ogImageUrl] } };
}

export default async function BlogPaginatedPage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const pageNumber = Number(page);
  if (!Number.isInteger(pageNumber) || pageNumber < 2 || pageNumber > totalBlogPages) notFound();

  const posts = getBlogPostsPage(pageNumber);
  const pageUrl = `${siteConfig.url}/blog/page/${pageNumber}`;
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.map((post, index) => ({ "@type": "ListItem", position: (pageNumber - 1) * BLOG_POSTS_PER_PAGE + index + 1, url: `${siteConfig.url}/blog/${post.slug}`, name: post.title })),
  };
  const collectionSchema = { "@context": "https://schema.org", "@type": "CollectionPage", "@id": `${pageUrl}#webpage`, name: `Photos 4 Real Estate Blog - Page ${pageNumber}`, description: `Page ${pageNumber} of the Photos 4 Real Estate blog archive.`, url: pageUrl, isPartOf: { "@id": `${siteConfig.url}/#website` } };

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: `Page ${pageNumber}` }]} jsonLdId={`ld-breadcrumb-blog-page-${pageNumber}`} />
      <section className="services-page-hero contact-hero blog-hero" aria-labelledby="blog-title">
        <div className="container"><div className="services-page-hero-inner"><div>
          <div className="services-page-hero-eyebrow">Tips, Guides &amp; Insights</div>
          <h1 id="blog-title">The Real Estate Photography Blog</h1>
          <p className="services-page-hero-sub speakable-intro">Page {pageNumber} of the Photos 4 Real Estate archive with practical guides on real estate photography, staging, drone media, video, iGUIDE tours, and realtor marketing for Calgary.</p>
        </div></div></div>
      </section>

      <section className="blog-index-section" aria-labelledby="blog-posts-heading">
        <div className="container blog-layout">
          <div className="blog-main-column">
            <div className="blog-section-header">
              <span className="section-label">Blog Archive</span>
              <h2 id="blog-posts-heading">Guides for Calgary listing media and marketing</h2>
              <p>Showing page {pageNumber} of {totalBlogPages}.</p>
            </div>
            <div className="blog-grid">
              {posts.map((post, index) => <BlogCard key={post.slug} post={post} priority={index < 2} />)}
            </div>
            <BlogPagination currentPage={pageNumber} totalPages={totalBlogPages} />
          </div>
          <BlogSidebar />
        </div>
      </section>
      <JsonLd id={`ld-blog-page-${pageNumber}`} data={collectionSchema} />
      <JsonLd id={`ld-blog-page-itemlist-${pageNumber}`} data={itemListSchema} />
    </>
  );
}