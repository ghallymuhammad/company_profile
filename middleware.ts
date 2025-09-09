// middleware.ts (LETakkan di root: sejajar package.json)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Pakai salah satu export: ini versi "named export"
export function middleware(req: NextRequest) {
  const isAuthed = req.cookies.get("auth")?.value === "true";

  // Lindungi /blog/create
  if (req.nextUrl.pathname.startsWith("/blog/create") && !isAuthed) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("redirect", req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Only match /blog/create, never static files
export const config = {
  matcher: ["/blog/create"],
};
