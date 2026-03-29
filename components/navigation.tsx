"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

// 현재 진행중인 이벤트가 있으면 배너에 표시
const ANNOUNCEMENT = {
  text: "제 1회 취팡 해커톤 진행중 — 2026.03.22 마감",
  href: "/archive/hackathon-001",
};

const navItems = [
  { label: "창업/투자", href: "/venture" },
  { label: "해커톤", href: "/hackathon" },
  { label: "네트워킹", href: "/networking" },
  { label: "전체 프로그램", href: "/archive" },
  { label: "취팡 소개", href: "/about" },
];

export function Navigation() {
  const pathname = usePathname();
  const [sheetOpen, setSheetOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50">
      {/* 어나운스먼트 배너 */}
      {bannerVisible && (
        <div className="flex items-center justify-center gap-3 bg-foreground px-4 py-2.5 text-background">
          <Link
            href={ANNOUNCEMENT.href}
            className="flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
          >
            <span className="inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            {ANNOUNCEMENT.text}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <button
            aria-label="배너 닫기"
            onClick={() => setBannerVisible(false)}
            className="absolute right-4 p-1 opacity-60 hover:opacity-100 transition-opacity"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* 메인 네비게이션 */}
      <header
        className={cn(
          "w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 transition-shadow duration-200",
          scrolled ? "border-gray-200 shadow-sm" : "border-transparent"
        )}
      >
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* 로고 */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.svg"
              alt="취팡"
              width={100}
              height={36}
              priority
              className="h-8 w-auto"
            />
          </Link>

          {/* 데스크탑 메뉴 */}
          <ul className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => {
              const active =
                pathname === item.href ||
                pathname.startsWith(item.href + "/");
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 text-[15px] font-medium transition-colors rounded-sm",
                      "hover:text-gray-900",
                      active
                        ? "text-gray-900 after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:rounded-full after:bg-primary"
                        : "text-gray-500"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* 데스크탑 우측: 취팡 합류하기 텍스트 링크 */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/careers"
              className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
            >
              취팡 합류하기
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* 모바일 햄버거 */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button
                aria-label="메뉴 열기"
                className="p-2 -mr-2 text-foreground"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <div className="flex h-[72px] items-center border-b px-6">
                <SheetTitle asChild>
                  <Link href="/" onClick={() => setSheetOpen(false)}>
                    <Image
                      src="/logo.svg"
                      alt="취팡"
                      width={88}
                      height={32}
                      className="h-7 w-auto"
                    />
                  </Link>
                </SheetTitle>
              </div>
              <ul className="flex flex-col px-3 py-4">
                {navItems.map((item) => {
                  const active =
                    pathname === item.href ||
                    pathname.startsWith(item.href + "/");
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setSheetOpen(false)}
                        className={cn(
                          "flex items-center justify-between px-4 py-3.5 text-base font-medium rounded-md transition-colors",
                          active
                            ? "text-primary bg-primary/5"
                            : "text-foreground hover:bg-accent"
                        )}
                      >
                        {item.label}
                        <ArrowRight className="h-4 w-4 opacity-40" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="border-t mx-6 pt-6 pb-4">
                <Link
                  href="/careers"
                  onClick={() => setSheetOpen(false)}
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-primary py-3 text-sm font-bold text-white"
                >
                  취팡 합류하기 <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </header>
    </div>
  );
}
