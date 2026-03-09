import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import {
  issues,
  type Issue,
  type IssueCategory,
  STATUS_LABEL,
  CATEGORY_LABEL,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "아카이브 | 취팡",
  description: "취팡의 창업/투자·해커톤·네트워킹 전체 행사 아카이브.",
};

const sections: {
  category: IssueCategory;
  accent: string;
  accentBg: string;
  href: string;
  tag: string;
}[] = [
  {
    category: "venture",
    accent: "#e20871",
    accentBg: "rgba(226,8,113,0.07)",
    href: "/venture",
    tag: "VENTURE",
  },
  {
    category: "hackathon",
    accent: "#2563eb",
    accentBg: "rgba(37,99,235,0.07)",
    href: "/hackathon",
    tag: "HACKATHON",
  },
  {
    category: "networking",
    accent: "#059669",
    accentBg: "rgba(5,150,105,0.07)",
    href: "/networking",
    tag: "NETWORKING",
  },
];

function statusBadge(issue: Issue, accent: string) {
  if (issue.status === "ongoing") {
    return (
      <span
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold text-white"
        style={{ backgroundColor: accent }}
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
        진행중
      </span>
    );
  }
  if (issue.status === "recruiting") {
    return (
      <span
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold text-white"
        style={{ backgroundColor: "#16a34a" }}
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
        모집중
      </span>
    );
  }
  if (issue.status === "upcoming") {
    return (
      <span
        className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold"
        style={{ borderColor: `${accent}50`, color: accent }}
      >
        예정
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-400">
      종료
    </span>
  );
}

function IssueCard({ issue, accent }: { issue: Issue; accent: string }) {
  const href =
    issue.category === "networking"
      ? "/networking/weekly"
      : `/archive/${issue.issueId}`;

  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:border-gray-300 hover:shadow-md"
    >
      {/* 상단 컬러 스트립 */}
      <div className="h-1 w-full shrink-0" style={{ backgroundColor: accent }} />

      <div className="flex flex-1 flex-col gap-5 p-7">
        {/* 상태 + 에디션 */}
        <div className="flex items-start justify-between gap-3">
          {statusBadge(issue, accent)}
          <span
            className="text-3xl font-black leading-none opacity-[0.07]"
            style={{ color: accent }}
          >
            {String(issue.editionNumber).padStart(2, "0")}
          </span>
        </div>

        {/* 제목 */}
        <div className="flex-1">
          <p
            className="mb-1 text-[10px] font-bold tracking-[0.2em] uppercase"
            style={{ color: `${accent}99` }}
          >
            {issue.category === "networking"
              ? "매주 금요일"
              : `제 ${issue.editionNumber}회`}
          </p>
          <h3 className="text-xl font-bold text-gray-900 leading-snug transition-colors group-hover:text-[var(--accent)]">
            {issue.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
            {issue.subtitle}
          </p>
        </div>

        {/* 하이라이트 */}
        {issue.highlights.length > 0 && (
          <ul className="flex flex-col gap-1.5">
            {issue.highlights.slice(0, 3).map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm text-gray-500">
                <span
                  className="h-1 w-1 shrink-0 rounded-full"
                  style={{ backgroundColor: accent }}
                />
                {h}
              </li>
            ))}
          </ul>
        )}

        {/* 일시 + 장소 */}
        <div className="flex flex-col gap-1.5 border-t border-gray-100 pt-5 text-xs text-gray-400">
          {issue.category !== "networking" && (
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 shrink-0" />
              <span>
                {issue.startDate} — {issue.endDate}
              </span>
            </div>
          )}
          {issue.category === "networking" && (
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 shrink-0" />
              <span>매주 금요일 오후 7시 — 10시</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            <span>{issue.location}</span>
          </div>
        </div>

        {/* CTA 화살표 */}
        <div
          className="flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-3"
          style={{ color: accent }}
        >
          자세히 보기 <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}

export default function ArchivePage() {
  return (
    <>
      {/* ━━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="border-b border-gray-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-4 text-xs font-bold tracking-[0.25em] text-[#e20871] uppercase">
            Archive
          </p>
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            전체 행사
          </h1>
          <p className="mt-5 text-lg text-gray-400">
            창업/투자 · 해커톤 · 네트워킹 — 취팡의 모든 프로그램을 한눈에
          </p>
        </div>
      </section>

      {/* ━━━ 섹션별 아카이브 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {sections.map((sec, si) => {
        const sectionIssues = issues.filter((i) => i.category === sec.category);
        const ongoingFirst = [...sectionIssues].sort((a, b) => {
          const order: Record<string, number> = { recruiting: 0, ongoing: 1, upcoming: 2, past: 3 };
          return (order[a.status] ?? 99) - (order[b.status] ?? 99);
        });

        return (
          <section
            key={sec.category}
            className={si % 2 === 0 ? "bg-white py-24" : "bg-gray-50 py-24"}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              {/* 섹션 헤더 */}
              <div className="mb-12 flex items-end justify-between">
                <div>
                  <p
                    className="mb-3 text-xs font-bold tracking-[0.25em] uppercase"
                    style={{ color: sec.accent }}
                  >
                    {sec.tag}
                  </p>
                  <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                    {CATEGORY_LABEL[sec.category]}
                  </h2>
                </div>
                <Link
                  href={sec.href}
                  className="flex items-center gap-1.5 rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-600 transition-all hover:border-gray-300 hover:text-gray-900"
                >
                  더보기 <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* 카드 그리드 */}
              {ongoingFirst.length > 0 ? (
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {ongoingFirst.map((issue) => (
                    <IssueCard key={issue.issueId} issue={issue} accent={sec.accent} />
                  ))}
                </div>
              ) : (
                /* 행사 없을 때 빈 상태 */
                <div
                  className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 py-16 text-center"
                  style={{ backgroundColor: sec.accentBg }}
                >
                  <p className="text-sm font-medium text-gray-400">
                    진행 예정 행사를 준비 중입니다
                  </p>
                  <Link
                    href={sec.href}
                    className="mt-4 flex items-center gap-1.5 text-sm font-semibold transition-colors hover:opacity-80"
                    style={{ color: sec.accent }}
                  >
                    프로그램 소개 보기 <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}
