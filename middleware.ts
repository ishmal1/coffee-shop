import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = await getToken({ req });

  // Not authenticated: redirect to /auth
  if (!token && pathname !== "/auth" && pathname !== "/") {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  // Redirect onboarding users to /onboarding/basic
  if (
    token &&
    token.status === "ONBOARDING" &&
    !pathname.startsWith("/onboarding")
  ) {
    return NextResponse.redirect(new URL("/onboarding/basic", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard",
    "/home",
    "/ventures/:path*",
    "/ventures",
    "/onboarding/:path*",
    "/profile/:path*",
    "/profile",
    "/people/:path*",
    "/people",
    "/messages",
    "/messages/:path*",
    "/auth",
    "/",
  ],
};
