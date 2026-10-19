import { NextRequest, NextResponse } from "next/server";

// Only the unprefixed homepage redirects. Unknown locales remain real 404s.
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = "/en";
  return NextResponse.redirect(url, 308);
}

export const config = { matcher: "/" };
