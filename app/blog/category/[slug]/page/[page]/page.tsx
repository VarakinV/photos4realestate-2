import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogPagination } from "@/components/blog/BlogPagination";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { BLOG_POSTS_PER_PAGE, blogCategories, getBlogCategory, getCategoryPostsPage, getCategoryTotalPages, getPostsByCategory } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = 3600;

export function generateStaticParams() {
  return blogCategories.flatMap((category) => {
    const totalPages = getCategoryTotalPages(category.slug);
    return Array.from({ length: Math.max(totalPages - 1, 0) }, (_, index) => ({ slug: category.slug, page: String(index + 2) }));
  });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; page: string }> }): Promise<Metadata> {
  const { slug, page } = await params;
  const category = getBlogCategory(slug);
  const pageNumber = Number(page);
  if (!category || !Number.isInteger(pageNumber) || pageNumber < 2 || pageNumber > getCategoryTotalPages(slug)) return {};

  const pageUrl = `${siteConfig.url}/blog/category/${category.slug}/page/${pageNumber}`;
  const title = `${category.name} Calgary Blog - Page ${pageNumber} | Photos 4 Real Estate`;
  const description = `Browse page ${pageNumber} of ${category.name.toLowerCase()} blog articles from Photos 4 Real Estate for Calgary realtors and homeowners.`;
  return { title: { absolute: title }, description, alternates: { canonical: pageUrl }, openGraph: { type: "website", title, description, url: pageUrl, siteName: siteConfig.name, locale: "en_CA", images: [{ url: `${siteConfig.url}/opengraph-image`, width: 1200, height: 630, alt: title }] }, twitter: { card: "summary_large_image", title, description, images: [`${siteConfig.url}/opengraph-image`] } };
}

export default async function BlogCategoryPaginatedPage({ params }: { params: Promise<{ slug: string; page: string }> }) {
  const { slug, page } = await params;
  const category = getBlogCategory(slug);
  const pageNumber = Number(page);
  const totalPages = getCategoryTotalPages(slug);
  if (!category || !Number.isInteger(pageNumber) || pageNumber < 2 || pageNumber > totalPages) notFound();

  const posts = getCategoryPostsPage(category.slug, pageNumber);
  const totalPosts = getPostsByCategory(category.slug).length;
  const pageUrl = `${siteConfig.url}/blog/category/${category.slug}/page/${pageNumber}`;
  const collectionSchema = { "@context": "https://schema.org", "@type": "CollectionPage", "@id": `${pageUrl}#webpage`, name: `${category.name} Blog - Page ${pageNumber}`, description: category.description, url: pageUrl, isPartOf: { "@id": `${siteConfig.url}/#website` } };
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.map((post, index) => ({ "@type": "ListItem", position: (pageNumber - 1) * BLOG_POSTS_PER_PAGE + index + 1, url: `${siteConfig.url}/blog/${post.slug}`, name: post.title })),
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: category.name, href: `/blog/category/${category.slug}` }, { label: `Page ${pageNumber}` }]} jsonLdId={`ld-breadcrumb-blog-category-${category.slug}-page-${pageNumber}`} />
      <section className="services-page-hero contact-hero blog-hero" aria-labelledby="blog-category-title">
        <div className="container"><div className="services-page-hero-inner"><div>
          <div className="services-page-hero-eyebrow">Blog Category</div>
          <h1 id="blog-category-title">{category.name}</h1>
          <p className="services-page-hero-sub speakable-intro">{category.description} Browse page {pageNumber} of Photos 4 Real Estate articles written for Calgary realtors and homeowners.</p>
        </div></div></div>
      </section>
      <section className="blog-index-section" aria-labelledby="category-posts-heading">
        <div className="container blog-layout">
          <div className="blog-main-column">
            <div className="blog-section-header"><span className="section-label">Category Archive</span><h2 id="category-posts-heading">{category.name} articles</h2><p>Showing page {pageNumber} of {totalPages} for {totalPosts} post{totalPosts === 1 ? "" : "s"} in this category.</p></div>
            {posts.length ? <div className="blog-grid">{posts.map((post, index) => <BlogCard key={post.slug} post={post} priority={index < 2} />)}</div> : <p className="blog-empty-state">No posts are published in this category yet. Please check back soon.</p>}
            <BlogPagination currentPage={pageNumber} totalPages={totalPages} basePath={`/blog/category/${category.slug}`} />
          </div>
          <BlogSidebar />
        </div>
      </section>
      <JsonLd id={`ld-blog-category-${category.slug}-page-${pageNumber}`} data={collectionSchema} />
      <JsonLd id={`ld-blog-category-${category.slug}-itemlist-${pageNumber}`} data={itemListSchema} />
    </>
  );
}