export { auth } from "@/auth";
import { auth } from "@/auth";
import { NextResponse, type NextRequest } from "next/server";

// export const config = {
//   matcher: [
//     "/",
//     "/dashboard",
//     "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
//   ],
// };

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

export default async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}
