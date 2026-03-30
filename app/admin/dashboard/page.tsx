"use client";

import { useEffect, useState } from "react";
import AdminShell from "../_components/AdminShell";
import Link from "next/link";
import { Calendar, Briefcase, Plus } from "lucide-react";

const BRAND = "#E20871";

export default function DashboardPage() {
  const [eventCount, setEventCount] = useState<number | null>(null);
  const [careerCount, setCareerCount] = useState<number | null>(null);
  const [activeCount, setActiveCount] = useState<number | null>(null);
  const [recruitingCount, setRecruitingCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/admin/events")
      .then((r) => r.json())
      .then((data: { status: string }[]) => {
        setEventCount(data.length);
        setRecruitingCount(
          data.filter((e) => e.status === "recruiting" || e.status === "ongoing").length
        );
      });
    fetch("/api/admin/careers")
      .then((r) => r.json())
      .then((data: { active?: boolean }[]) => {
        setCareerCount(data.length);
        setActiveCount(data.filter((p) => p.active !== false).length);
      });
  }, []);

  const stats = [
    {
      label: "전체 행사",
      value: eventCount,
      sub: `${recruitingCount ?? "-"}개 진행중/모집중`,
      icon: Calendar,
      href: "/admin/events",
      color: "#2563eb",
    },
    {
      label: "채용공고",
      value: careerCount,
      sub: `${activeCount ?? "-"}개 활성`,
      icon: Briefcase,
      href: "/admin/careers",
      color: BRAND,
    },
  ];

  return (
    <AdminShell title="대시보드">
      <div className="grid gap-4 sm:grid-cols-2">
        {stats.map(({ label, value, sub, icon: Icon, href, color }) => (
          <Link
            key={label}
            href={href}
            className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-sm transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {label}
                </p>
                <p className="mt-2 text-4xl font-black text-gray-900">
                  {value ?? <span className="text-gray-300">…</span>}
                </p>
                <p className="mt-1 text-xs text-gray-400">{sub}</p>
              </div>
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${color}15` }}
              >
                <Icon className="h-5 w-5" style={{ color }} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <Link
          href="/admin/events/new"
          className="flex items-center gap-3 rounded-xl border-2 border-dashed border-gray-300 px-5 py-4 text-sm font-semibold text-gray-500 hover:border-gray-400 hover:text-gray-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          새 행사 추가
        </Link>
        <Link
          href="/admin/careers/new"
          className="flex items-center gap-3 rounded-xl border-2 border-dashed border-gray-300 px-5 py-4 text-sm font-semibold text-gray-500 hover:border-gray-400 hover:text-gray-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          새 채용공고 추가
        </Link>
      </div>
    </AdminShell>
  );
}
