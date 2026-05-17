import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="not-found-page" aria-labelledby="not-found-heading">
      <div className="container">
        <div className="not-found-card">
          <span className="tag">404 error</span>
          <div className="not-found-code">404</div>
          <h1 id="not-found-heading">Page not found</h1>
          <p>
            Sorry, the page you&rsquo;re looking for doesn&rsquo;t exist or may have
            been moved.
          </p>
          <Link href="/" className="btn btn-primary">
            <ArrowLeft size={16} aria-hidden="true" />
            Go back to home
          </Link>
        </div>
      </div>
    </section>
  );
}