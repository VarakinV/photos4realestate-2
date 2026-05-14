import Link from "next/link";

type BlogPaginationProps = {
  currentPage?: number;
  totalPages?: number;
};

export function BlogPagination({ currentPage = 1, totalPages = 1 }: BlogPaginationProps) {
  return (
    <nav className="blog-pagination" aria-label="Blog pagination">
      <span className="blog-page-link is-disabled" aria-disabled="true">Previous</span>
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        return page === currentPage ? (
          <span key={page} className="blog-page-link is-active" aria-current="page">{page}</span>
        ) : (
          <Link key={page} className="blog-page-link" href={page === 1 ? "/blog" : `/blog/page/${page}`}>{page}</Link>
        );
      })}
      <span className="blog-page-link is-disabled" aria-disabled="true">Next</span>
    </nav>
  );
}