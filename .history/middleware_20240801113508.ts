import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // TODO: Feel free to remove this block
  if (request.headers?.get("host")?.includes("next-enterprise.vercel.app")) {
    return NextResponse.redirect("https://blazity.com/open-source/nextjs-enterprise-boilerplate", { status: 301 })
  }
  if (request.headers?.get("host")?.includes("admin")) {
    return NextResponse.rewrite("/", { status: 0, headers: { location: "/panel_admin/panel_admin" } })
}

//TODO: Ajouter les paths exclusifs ici aussi, et les rediriger vers la page d'accueil
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)"
  ],
}