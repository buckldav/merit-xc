import { NextResponse, NextRequest } from "next/server";
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname == "/store") {
    return NextResponse.redirect(
      "https://stores.inksoft.com/WS70777/shop/home"
    );
  }
  return NextResponse.next();
}
