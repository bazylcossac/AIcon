export { auth } from "@/auth";
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)", "/dashboard/:path*", "/"],
};

export default async function middleware(req: NextRequest) {
  const session = await auth();
  if (!session?.user && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}
