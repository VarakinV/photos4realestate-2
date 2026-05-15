import Link from "next/link";

type BlogPaginationProps = {
  currentPage?: number;
  totalPages?: number;
  basePath?: string;
};

function getPageHref(basePath: string, page: number) {
  return page === 1 ? basePath : `${basePath}/page/${page}`;
}

export function BlogPagination({ currentPage = 1, totalPages = 1, basePath = "/blog" }: BlogPaginationProps) {
  if (totalPages <= 1) return null;

  const previousHref = currentPage > 1 ? getPageHref(basePath, currentPage - 1) : null;
  const nextHref = currentPage < totalPages ? getPageHref(basePath, currentPage + 1) : null;

  return (
    <nav className="blog-pagination" aria-label="Blog pagination">
      {previousHref ? <Link className="blog-page-link" href={previousHref}>Previous</Link> : <span className="blog-page-link is-disabled" aria-disabled="true">Previous</span>}
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        return page === currentPage ? (
          <span key={page} className="blog-page-link is-active" aria-current="page">{page}</span>
        ) : (
          <Link key={page} className="blog-page-link" href={getPageHref(basePath, page)}>{page}</Link>
        );
      })}
      {nextHref ? <Link className="blog-page-link" href={nextHref}>Next</Link> : <span className="blog-page-link is-disabled" aria-disabled="true">Next</span>}
    </nav>
  );
}