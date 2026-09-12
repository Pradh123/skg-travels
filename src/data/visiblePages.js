// Comment out a line to hide that page from the website.
// /blog, /cities, and /packages also control all of their detail pages.
// Example: comment out "/blog" to hide /blog and every /blog/[slug] page.
export const visiblePages = [
  "/about",
  "/book-ride",
  // "/blog",
  "/cars",
  // "/cities",
  "/contact",
  // "/local-rental",
  // "/packages",
  "/privacy-policy",
  "/refunds",
  "/terms-and-conditions",
];

export function isPageVisible(pathname, pages = visiblePages) {
  const path = pathname.split(/[?#]/)[0].replace(/\/+$/, "") || "/";
  if (path === "/") return true;
  return pages.some((page) => path === page || path.startsWith(`${page}/`));
}
