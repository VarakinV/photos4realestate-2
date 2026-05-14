import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogCategories, formatBlogDate, recentBlogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

const serviceLinks = [
  ["Real Estate Photography", "/services/real-estate-photography-in-calgary"],
  ["Real Estate Videography", "/services/real-estate-videos-in-calgary"],
  ["RMS Measurements & Floor Plans", "/services/rms-measurements-and-floor-plans-in-calgary"],
  ["iGUIDE 3D Virtual Tours", "/services/iguide-virtual-tours-in-calgary"],
  ["Drone Photography", "/services/real-estate-aerial-drone-photography-in-calgary"],
  ["Virtual Staging", "/services/virtual-staging"],
  ["Twilight Photography", "/services/twilight-photography-for-real-estate-in-calgary"],
  ["Style Shots", "/services/style-shots"],
  ["Hotel Photography", "/services/hotel-photography"],
  ["Marketing Kit for Realtors", "/services/marketing-kit-for-realtors"],
] as const;

export function BlogSidebar() {
  return (
    <aside className="blog-sidebar" aria-label="Blog sidebar">
      <section className="blog-side-card" aria-labelledby="recent-posts-heading">
        <h2 id="recent-posts-heading">Recent Posts</h2>
        <div className="blog-recent-list">
          {recentBlogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-recent-item">
              <span className="blog-recent-thumb"><Image src={post.image.src} alt="" fill sizes="72px" /></span>
              <span><strong>{post.title}</strong><time dateTime={post.date}>{formatBlogDate(post.date)}</time></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="blog-side-card" aria-labelledby="blog-categories-heading">
        <h2 id="blog-categories-heading">Categories</h2>
        <ul className="blog-link-list">
          {blogCategories.map((category) => (
            <li key={category.slug}><Link href={`/blog/category/${category.slug}`}>{category.name}</Link></li>
          ))}
        </ul>
      </section>

      <section className="blog-side-card" aria-labelledby="blog-services-heading">
        <h2 id="blog-services-heading">Our Services</h2>
        <ul className="blog-link-list">
          {serviceLinks.map(([label, href]) => (
            <li key={href}><Link href={href}>{label}</Link></li>
          ))}
        </ul>
      </section>

      <section className="blog-cta-card" aria-labelledby="blog-cta-heading">
        <span className="section-label">Ready for listing day?</span>
        <h2 id="blog-cta-heading">Book Calgary real estate media in minutes.</h2>
        <p>Photos 4 Real Estate helps Calgary realtors and homeowners launch listings with photography, video, drone, RMS floor plans, iGUIDE tours, and marketing assets.</p>
        <div className="blog-cta-actions">
          <a href={siteConfig.bookingUrl} className="btn btn-primary">Book Online<span className="sr-only"> for Calgary real estate photography and listing media</span><ArrowRight size={15} aria-hidden="true" /></a>
          <Link href="/prices" className="btn btn-outline">View Pricing<span className="sr-only"> for Calgary real estate photography packages</span></Link>
        </div>
        <small>First booking? Use code <strong>25%OFF</strong></small>
      </section>
    </aside>
  );
}