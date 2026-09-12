import { NextResponse } from "next/server";
import { isPageVisible } from "@/data/visiblePages";

export function proxy(request) {
  if (!isPageVisible(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next|.*\\..*).*)",
};
