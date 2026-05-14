import type { Metadata } from "next";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogPagination } from "@/components/blog/BlogPagination";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { blogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = 3600;

const pageUrl = `${siteConfig.url}/blog`;
const title = "Real Estate Photography Blog Calgary | Photos 4 Real Estate";
const description =
  "Read Calgary real estate photography, staging, drone, iGUIDE, video, and listing marketing tips from Photos 4 Real Estate. Book online today.";
const ogImageUrl = `${siteConfig.url}/opengraph-image`;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: pageUrl },
    openGraph: { type: "website", title, description, url: pageUrl, siteName: siteConfig.name, locale: "en_CA", images: [{ url: ogImageUrl, width: 1200, height: 630, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: [ogImageUrl] },
  };
}

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${pageUrl}#blog`,
  name: title,
  description,
  url: pageUrl,
  publisher: { "@id": `${siteConfig.url}/#business` },
  blogPost: blogPosts.map((post) => ({ "@type": "BlogPosting", headline: post.title, url: `${pageUrl}/${post.slug}`, datePublished: post.date })),
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: blogPosts.map((post, index) => ({ "@type": "ListItem", position: index + 1, url: `${pageUrl}/${post.slug}`, name: post.title })),
};

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} jsonLdId="ld-breadcrumb-blog" />
      <section className="services-page-hero contact-hero blog-hero" aria-labelledby="blog-title">
        <div className="container"><div className="services-page-hero-inner"><div>
          <div className="services-page-hero-eyebrow">Tips, Guides &amp; Insights</div>
          <h1 id="blog-title">The Real Estate Photography Blog</h1>
          <p className="services-page-hero-sub speakable-intro">Practical guides on real estate photography, MLS listing preparation, virtual staging, iGUIDE virtual tours, drone photography, and marketing — written by the Photos4RealEstate team for Calgary realtors and homeowners.</p>
        </div></div></div>
      </section>

      <section className="blog-index-section" aria-labelledby="blog-posts-heading">
        <div className="container blog-layout">
          <div className="blog-main-column">
            <div className="blog-section-header">
              <span className="section-label">Latest Articles</span>
              <h2 id="blog-posts-heading">Guides for Calgary listing media and marketing</h2>
              <p>Browse the latest Photos 4 Real Estate posts on photography preparation, virtual staging, drone media, video, RMS measurements, iGUIDE tours, and realtor marketing.</p>
            </div>
            <div className="blog-grid">
              {blogPosts.map((post, index) => <BlogCard key={post.slug} post={post} priority={index < 2} />)}
            </div>
            <BlogPagination />
          </div>
          <BlogSidebar />
        </div>
      </section>
      <JsonLd id="ld-blog" data={blogSchema} />
      <JsonLd id="ld-blog-itemlist" data={itemListSchema} />
    </>
  );
}