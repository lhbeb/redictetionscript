import { NextResponse, type NextRequest } from "next/server";

const SOURCE_HOSTS = new Set(["deeldepot.com", "www.deeldepot.com"]);
const TARGET_HOST = "casoodo.com";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  if (!SOURCE_HOSTS.has(url.hostname)) {
    return NextResponse.next();
  }

  url.protocol = "https:";
  url.hostname = TARGET_HOST;

  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: "/:path*",
};
