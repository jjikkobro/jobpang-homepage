import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";
import { COOKIE_NAME } from "@/lib/admin-auth";

function getSecret(): Uint8Array {
  return new TextEncoder().encode(
    process.env.ADMIN_SECRET ?? "dev-secret-please-change"
  );
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /api/admin/auth/* 는 인증 없이 허용
  if (pathname.startsWith("/api/admin/auth")) {
    return NextResponse.next();
  }

  // /admin/* (로그인 페이지 /admin 제외) 및 /api/admin/* 보호
  const isProtectedAdmin =
    pathname.startsWith("/admin/") || pathname.startsWith("/api/admin/");

  if (!isProtectedAdmin) return NextResponse.next();

  const token = request.cookies.get(COOKIE_NAME)?.value;

  if (!token) {
    return pathname.startsWith("/api/")
      ? NextResponse.json({ error: "Unauthorized" }, { status: 401 })
      : NextResponse.redirect(new URL("/admin", request.url));
  }

  try {
    await jwtVerify(token, getSecret());
    return NextResponse.next();
  } catch {
    return pathname.startsWith("/api/")
      ? NextResponse.json({ error: "Unauthorized" }, { status: 401 })
      : NextResponse.redirect(new URL("/admin", request.url));
  }
}

export const config = {
  matcher: ["/admin/:path+", "/api/admin/:path+"],
};
