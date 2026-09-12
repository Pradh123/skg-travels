// Comment out a route to send visitors to Home when they open it.
// Navigation links remain visible. /blog, /cities, and /packages also control their detail pages.
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
