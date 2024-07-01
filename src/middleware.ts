import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAuthorized = process.env?.ALLOWED_TO_SEED || "false";
  if (isAuthorized !== "true" && request.nextUrl.pathname.startsWith("/seed")) {
    return Response.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
