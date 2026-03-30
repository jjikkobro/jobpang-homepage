"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, Calendar, Briefcase, LogOut, ChevronRight } from "lucide-react";

const BRAND = "#E20871";

const NAV = [
  { href: "/admin/dashboard", label: "대시보드", icon: LayoutDashboard },
  { href: "/admin/events", label: "행사 관리", icon: Calendar },
  { href: "/admin/careers", label: "채용공고 관리", icon: Briefcase },
];

export default function AdminShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/auth/logout", { method: "POST" });
    router.push("/admin");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* 사이드바 */}
      <aside className="w-56 shrink-0 bg-white border-r border-gray-200 flex flex-col">
        <div className="px-5 py-5 border-b border-gray-100">
          <span className="text-lg font-black" style={{ color: BRAND }}>
            취팡
          </span>
          <span className="ml-1.5 text-xs font-semibold text-gray-400">Admin</span>
        </div>

        <nav className="flex-1 py-4 px-3 space-y-0.5">
          {NAV.map(({ href, label, icon: Icon }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
                style={active ? { backgroundColor: BRAND } : {}}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="px-3 py-4 border-t border-gray-100">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            로그아웃
          </button>
        </div>
      </aside>

      {/* 본문 */}
      <main className="flex-1 overflow-auto">
        {/* 헤더 */}
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-0.5">
            <span>Admin</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gray-700 font-medium">{title}</span>
          </div>
        </div>

        <div className="px-8 py-7 max-w-5xl">{children}</div>
      </main>
    </div>
  );
}
