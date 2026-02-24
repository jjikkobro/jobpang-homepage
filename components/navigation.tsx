"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "창업/투자", href: "/venture" },
  { label: "해커톤", href: "/hackathon" },
  { label: "네트워킹", href: "/networking" },
  { label: "아카이브", href: "/archive" },
  { label: "문의/제휴", href: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
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
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary",
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* 데스크탑 CTA */}
        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link href="/contact">참여 문의</Link>
          </Button>
        </div>

        {/* 모바일 햄버거 */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button
              aria-label="메뉴 열기"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader className="mb-6">
              <SheetTitle asChild>
                <Link href="/" onClick={() => setOpen(false)}>
                  <Image
                    src="/logo.svg"
                    alt="취팡"
                    width={88}
                    height={32}
                    className="h-7 w-auto"
                  />
                </Link>
              </SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center px-3 py-3 text-base font-medium rounded-md transition-colors hover:bg-accent",
                      pathname === item.href ||
                        pathname.startsWith(item.href + "/")
                        ? "text-primary bg-primary/5"
                        : "text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t pt-6">
              <Button asChild className="w-full">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  참여 문의
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
