import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogPagination } from "@/components/blog/BlogPagination";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { blogCategories, getBlogCategory, getPostsByCategory } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = 3600;

export function generateStaticParams() {
  return blogCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getBlogCategory(slug);
  if (!category) return {};
  const pageUrl = `${siteConfig.url}/blog/category/${category.slug}`;
  const title = `${category.name} Calgary Blog | Photos 4 Real Estate`;
  const description = `Read ${category.name.toLowerCase()} articles for Calgary realtors and homeowners from Photos 4 Real Estate. Practical listing media advice and booking tips.`;
  return { title: { absolute: title }, description, alternates: { canonical: pageUrl }, openGraph: { type: "website", title, description, url: pageUrl, siteName: siteConfig.name, locale: "en_CA", images: [{ url: `${siteConfig.url}/opengraph-image`, width: 1200, height: 630, alt: title }] }, twitter: { card: "summary_large_image", title, description, images: [`${siteConfig.url}/opengraph-image`] } };
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getBlogCategory(slug);
  if (!category) notFound();
  const posts = getPostsByCategory(category.slug);
  const pageUrl = `${siteConfig.url}/blog/category/${category.slug}`;
  const collectionSchema = { "@context": "https://schema.org", "@type": "CollectionPage", "@id": `${pageUrl}#webpage`, name: `${category.name} Blog`, description: category.description, url: pageUrl, isPartOf: { "@id": `${siteConfig.url}/#website` } };

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: category.name }]} jsonLdId={`ld-breadcrumb-blog-category-${category.slug}`} />
      <section className="services-page-hero contact-hero blog-hero" aria-labelledby="blog-category-title">
        <div className="container"><div className="services-page-hero-inner"><div>
          <div className="services-page-hero-eyebrow">Blog Category</div>
          <h1 id="blog-category-title">{category.name}</h1>
          <p className="services-page-hero-sub speakable-intro">{category.description} Browse Photos 4 Real Estate articles written for Calgary realtors and homeowners.</p>
        </div></div></div>
      </section>
      <section className="blog-index-section" aria-labelledby="category-posts-heading">
        <div className="container blog-layout">
          <div className="blog-main-column">
            <div className="blog-section-header"><span className="section-label">Category Archive</span><h2 id="category-posts-heading">{category.name} articles</h2><p>{posts.length} post{posts.length === 1 ? "" : "s"} in this category.</p></div>
            {posts.length ? <div className="blog-grid">{posts.map((post, index) => <BlogCard key={post.slug} post={post} priority={index < 2} />)}</div> : <p className="blog-empty-state">No posts are published in this category yet. Please check back soon.</p>}
            <BlogPagination />
          </div>
          <BlogSidebar />
        </div>
      </section>
      <JsonLd id={`ld-blog-category-${category.slug}`} data={collectionSchema} />
    </>
  );
}