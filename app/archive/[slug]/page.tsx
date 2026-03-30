import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, ExternalLink, ChevronRight } from "lucide-react";
import { type Issue, CATEGORY_LABEL, STATUS_LABEL } from "@/lib/data";
import { readIssues, getIssueBySlug } from "@/lib/data-server";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return readIssues()
    .filter((i: Issue) => i.category !== "networking")
    .map((i: Issue) => ({ slug: i.issueId }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const issue = getIssueBySlug(slug);
  if (!issue) return {};
  return {
    title: issue.seo.metaTitle,
    description: issue.seo.metaDescription,
  };
}

const ACCENT: Record<string, string> = {
  venture: "#e20871",
  hackathon: "#2563eb",
  networking: "#059669",
};

export default async function ArchiveSlugPage({ params }: Props) {
  const { slug } = await params;
  const issue = getIssueBySlug(slug);
  if (!issue) notFound();

  const accent = ACCENT[issue.category] ?? "#e20871";
  const catHref = `/${issue.category}`;

  return (
    <>
      {/* ━━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden bg-black pb-28 pt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 55% 60% at 65% 50%, ${accent}1a 0%, transparent 65%)`,
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* 브레드크럼 */}
          <nav className="mb-12 flex items-center gap-1.5 text-xs text-white/25">
            <Link href="/" className="hover:text-white/50 transition-colors">홈</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/archive" className="hover:text-white/50 transition-colors">아카이브</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/50">{issue.title}</span>
          </nav>

          <div className="max-w-3xl">
            {/* 상태 배지 */}
            <div className="mb-8 flex flex-wrap items-center gap-3">
              {issue.status === "ongoing" ? (
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-white"
                  style={{ backgroundColor: accent }}
                >
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                  진행중
                </span>
              ) : (
                <span
                  className="inline-flex items-center rounded-full border px-4 py-2 text-xs font-bold"
                  style={{ borderColor: `${accent}40`, color: accent }}
                >
                  {STATUS_LABEL[issue.status]}
                </span>
              )}
              <span
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: `${accent}80` }}
              >
                {CATEGORY_LABEL[issue.category]} · 제 {issue.editionNumber}회
              </span>
            </div>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              {issue.title}
            </h1>
            <p className="mt-5 text-xl leading-relaxed text-white/50">
              {issue.subtitle}
            </p>

            {/* 메타 정보 */}
            <div className="mt-8 flex flex-wrap gap-5 text-sm text-white/40">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{issue.startDate} — {issue.endDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{issue.location}</span>
              </div>
            </div>

            {/* 버튼 */}
            <div className="mt-10 flex flex-wrap gap-4">
              {issue.applyUrl && (
                <a
                  href={issue.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: accent, boxShadow: `0 0 32px ${accent}40` }}
                >
                  신청하기 <ExternalLink className="h-4 w-4" />
                </a>
              )}
              {issue.referenceUrl && (
                <a
                  href={issue.referenceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white/60 transition-all hover:border-white/30 hover:text-white"
                >
                  행사 페이지 <ExternalLink className="h-4 w-4" />
                </a>
              )}
              {!issue.applyUrl && !issue.referenceUrl && (
                <Link
                  href={catHref}
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: accent, boxShadow: `0 0 32px ${accent}40` }}
                >
                  {CATEGORY_LABEL[issue.category]} 소개 <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ 행사 요약 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* 개요 */}
            <div className="lg:col-span-2">
              <p
                className="mb-4 text-xs font-bold tracking-[0.25em] uppercase"
                style={{ color: accent }}
              >
                Overview
              </p>
              <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900">
                행사 개요
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">{issue.summary}</p>

              {/* 하이라이트 */}
              {issue.highlights.length > 0 && (
                <div className="mt-10">
                  <p
                    className="mb-5 text-xs font-bold tracking-[0.2em] uppercase"
                    style={{ color: accent }}
                  >
                    Highlights
                  </p>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {issue.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-5 py-4"
                      >
                        <span
                          className="h-2 w-2 shrink-0 rounded-full"
                          style={{ backgroundColor: accent }}
                        />
                        <span className="text-sm font-medium text-gray-700">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* 사이드: 행사 정보 */}
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-7">
                <p
                  className="mb-5 text-xs font-bold tracking-[0.2em] uppercase"
                  style={{ color: accent }}
                >
                  Info
                </p>
                <dl className="flex flex-col gap-5">
                  <div>
                    <dt className="mb-1 text-xs font-medium text-gray-400">구분</dt>
                    <dd className="text-sm font-bold text-gray-900">
                      {CATEGORY_LABEL[issue.category]} — 제 {issue.editionNumber}회
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-1 text-xs font-medium text-gray-400">상태</dt>
                    <dd className="text-sm font-bold text-gray-900">
                      {STATUS_LABEL[issue.status]}
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-1 text-xs font-medium text-gray-400">일정</dt>
                    <dd className="text-sm font-bold text-gray-900">
                      {issue.startDate}
                      <br />— {issue.endDate}
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-1 text-xs font-medium text-gray-400">장소</dt>
                    <dd className="text-sm font-bold text-gray-900">{issue.location}</dd>
                  </div>
                  {issue.participantsCount && (
                    <div>
                      <dt className="mb-1 text-xs font-medium text-gray-400">참가자</dt>
                      <dd className="text-sm font-bold text-gray-900">
                        {issue.participantsCount.toLocaleString()}명
                      </dd>
                    </div>
                  )}
                  {issue.teamsCount && (
                    <div>
                      <dt className="mb-1 text-xs font-medium text-gray-400">팀 수</dt>
                      <dd className="text-sm font-bold text-gray-900">
                        {issue.teamsCount}팀
                      </dd>
                    </div>
                  )}
                </dl>
              </div>

              {/* 외부 링크 */}
              {(issue.applyUrl || issue.referenceUrl) && (
                <div className="flex flex-col gap-2">
                  {issue.applyUrl && (
                    <a
                      href={issue.applyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white transition-all hover:opacity-90"
                      style={{ backgroundColor: accent }}
                    >
                      신청하기 <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  {issue.referenceUrl && (
                    <a
                      href={issue.referenceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 py-3.5 text-sm font-semibold text-gray-600 transition-all hover:border-gray-300 hover:text-gray-900"
                    >
                      행사 공식 페이지 <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ 하단 네비게이션 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="border-t border-gray-200 bg-gray-50 py-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            href="/archive"
            className="flex items-center gap-1.5 text-sm font-semibold text-gray-400 transition-colors hover:text-gray-900"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            전체 아카이브
          </Link>
          <Link
            href={catHref}
            className="flex items-center gap-1.5 text-sm font-semibold transition-colors hover:opacity-80"
            style={{ color: accent }}
          >
            {CATEGORY_LABEL[issue.category]} 소개 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
