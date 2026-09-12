import { NextResponse } from "next/server";
import { isPageVisible } from "@/data/visiblePages";

export function proxy(request) {
  if (!isPageVisible(request.nextUrl.pathname)) {
    return new Response("Page not found", { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next|.*\\..*).*)",
};
