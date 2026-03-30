import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Search,
  Mic,
  Handshake,
  Users,
  ChevronRight,
} from "lucide-react";
import { STATUS_LABEL } from "@/lib/data";
import { getIssuesByCategory } from "@/lib/data-server";

export const dynamic = "force-dynamic";
import { GalleryMarquee } from "@/components/gallery-marquee";

export const metadata: Metadata = {
  title: "창업/투자 | 취팡",
  description:
    "사업 진단부터 IR 피칭, 투자 상담·연계, 네트워킹까지. 취팡 창업/투자 경진대회 프로그램을 소개합니다.",
};

const galleryImages: { src: string; alt: string }[] = [
  { src: "/gallery/venture/venture-002.webp", alt: "venture" },
  { src: "/gallery/venture/venture-003.webp", alt: "venture" },
  { src: "/gallery/venture/venture-004.webp", alt: "venture" },
  { src: "/gallery/venture/venture-005.webp", alt: "venture" },
  { src: "/gallery/venture/venture-006.webp", alt: "venture" },
  { src: "/gallery/venture/venture-007.webp", alt: "venture" },
  { src: "/gallery/venture/venture-008.webp", alt: "venture" },
  { src: "/gallery/venture/venture-009.webp", alt: "venture" },
  { src: "/gallery/venture/venture-010.webp", alt: "venture" },
];

const ACCENT = "#e20871";
// 히어로 우측 사진 경로. 비어있으면 기존 단일 컬럼 레이아웃 유지.
const HERO_IMAGE = "/gallery/venture/venture-009.webp"; // 예: "/gallery/venture/hero.webp"

const flow = [
  {
    icon: Search,
    step: "01",
    title: "사업 진단",
    desc: "현재 사업 단계와 IR 준비 수준을 점검하고 개선 방향을 제시합니다.",
  },
  {
    icon: Mic,
    step: "02",
    title: "IR 피칭",
    desc: "투자자 앞에서 사업계획을 발표하고 실전 피드백을 받습니다.",
  },
  {
    icon: Handshake,
    step: "03",
    title: "투자 상담 · 연계",
    desc: "투자자와의 1:1 매칭을 통해 구체적인 투자 논의로 이어집니다.",
  },
  {
    icon: Users,
    step: "04",
    title: "네트워킹",
    desc: "참가 팀 · 투자자 · 멘토가 함께하는 교류의 장이 열립니다.",
  },
];

const targets = [
  "창업 7년 이내 스타트업 및 예비창업팀",
  "IR 경험이 필요한 초기 단계 팀",
  "투자자 피드백으로 사업 방향을 검증하고 싶은 팀",
  "투자자·멘토와 네트워킹을 원하는 창업자",
  "시리즈A 이전 단계의 스타트업",
];

const programs = [
  { label: "투자자 오픈토크", desc: "현직 투자자의 투자 관점 강의" },
  { label: "비대면 IR 피칭", desc: "온라인 예선 발표 및 실시간 피드백" },
  { label: "오프라인 최종 발표", desc: "구글 스타트업 캠퍼스 등 현장 진행" },
  { label: "1:1 투자 상담", desc: "관심 투자자와의 개별 면담" },
  { label: "참가팀 네트워킹", desc: "협업·파트너십 연결" },
];

const faqs = [
  {
    q: "참가 자격이 있나요?",
    a: "창업 7년 이내 스타트업 또는 예비창업팀이라면 누구나 지원 가능합니다. 법인 설립 여부와 무관합니다.",
  },
  {
    q: "IR 자료가 없어도 지원할 수 있나요?",
    a: "네, 가능합니다. 사업 아이디어와 팀 구성이 있다면 지원 후 IR 준비를 함께 도와드립니다.",
  },
  {
    q: "투자는 어떻게 이루어지나요?",
    a: "대회 종료 후 관심 투자자와 개별 연락이 진행됩니다. 투자는 별도 계약이며 대회 참가가 투자를 보장하지 않습니다.",
  },
  {
    q: "비용이 드나요?",
    a: "기본 참가는 무료입니다. 일부 특별 과정에는 소정의 참가비가 있을 수 있으며, 회차마다 상이합니다.",
  },
  {
    q: "팀이 아닌 개인도 참가할 수 있나요?",
    a: "개인 예비창업자도 지원 가능합니다. 단, 최종 발표 전까지 팀 구성을 권장합니다.",
  },
];

export default function VenturePage() {
  const ventureIssues = getIssuesByCategory("venture");

  return (
    <>
      {/* ━━━ HERO (black 유지) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden bg-black pb-32 pt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 55% 65% at 65% 50%, ${ACCENT}22 0%, transparent 65%)`,
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
            <span className="text-white/50">창업/투자</span>
          </nav>

          <div className={HERO_IMAGE ? "lg:grid lg:grid-cols-2 lg:items-center lg:gap-16" : "max-w-3xl"}>
            {/* 텍스트 */}
            <div>
              <span
                className="mb-6 inline-block text-xs font-bold tracking-[0.25em] uppercase"
                style={{ color: ACCENT }}
              >
                Venture · 창업/투자
              </span>
              <h1 className="text-6xl font-extrabold leading-[1.0] tracking-tight text-white sm:text-7xl lg:text-[90px]">
                Grow-Up
                <br />
                Your
                <br />
                <span style={{ color: ACCENT }}>Start-Up</span>
              </h1>
              <p className="mt-8 max-w-xl text-xl leading-relaxed text-white/45">
                사업 진단 → IR 피칭 → 투자 상담 → 네트워킹까지.
                <br />
                실제 투자자와 만나는 경험을 제공합니다.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white transition-all hover:opacity-90"
                  style={{
                    backgroundColor: ACCENT,
                    boxShadow: `0 0 32px ${ACCENT}45`,
                  }}
                >
                  참여 문의 <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/archive?category=venture"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white/60 transition-all hover:border-white/30 hover:text-white"
                >
                  회차 아카이브
                </Link>
              </div>
            </div>

            {/* 우측 히어로 이미지 */}
            {HERO_IMAGE && (
              <div className="relative mt-12 hidden lg:mt-0 lg:block">
                <div className="relative h-[440px] overflow-hidden rounded-2xl">
                  <Image
                    src={HERO_IMAGE}
                    alt="창업/투자 행사 현장"
                    fill
                    className="object-cover opacity-60"
                    sizes="(min-width: 1024px) 50vw, 0px"
                    priority
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to right, black 0%, transparent 40%)" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, black 0%, transparent 40%)" }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ━━━ 진행 방식 (4단계) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-20 text-center">
            <p
              className="mb-4 text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: ACCENT }}
            >
              Point 1 — How it works
            </p>
            <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              진행 방식
            </h2>
            <p className="mt-5 text-lg text-gray-400">
              4단계 구조로 IR 경험부터 투자 연계까지 체계적으로 진행합니다
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {flow.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-gray-50 p-8"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${ACCENT}10`, color: ACCENT }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span
                      className="text-4xl font-black opacity-[0.06] select-none"
                      style={{ color: ACCENT }}
                    >
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <p
                      className="mb-1 text-[10px] font-bold tracking-widest uppercase"
                      style={{ color: `${ACCENT}80` }}
                    >
                      STEP {item.step}
                    </p>
                    <p className="text-lg font-bold text-gray-900">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━ 프로그램 구성 + 추천 대상 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-gray-50 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-20 text-center">
            <p
              className="mb-4 text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: ACCENT }}
            >
              Point 2 — Details
            </p>
            <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              프로그램 상세
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* 프로그램 구성 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 sm:p-10">
              <p
                className="mb-6 text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: ACCENT }}
              >
                Program
              </p>
              <h3 className="mb-8 text-2xl font-bold text-gray-900">프로그램 구성</h3>
              <ul className="flex flex-col gap-4">
                {programs.map((item, i) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <span
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
                      style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-bold text-gray-900">{item.label}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* 추천 대상 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 sm:p-10">
              <p
                className="mb-6 text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: ACCENT }}
              >
                Who should apply
              </p>
              <h3 className="mb-8 text-2xl font-bold text-gray-900">추천 대상</h3>
              <ul className="flex flex-col gap-3">
                {targets.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 px-5 py-4"
                  >
                    <ArrowRight
                      className="mt-0.5 h-4 w-4 shrink-0"
                      style={{ color: ACCENT }}
                    />
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ 갤러리 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {galleryImages.length > 0 && (
        <section className="bg-gray-50 py-20">
          <div className="mb-10 text-center">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: ACCENT }}
            >
              Gallery — 현장 사진
            </p>
          </div>
          <GalleryMarquee images={galleryImages} height={240} duration="45s" />
        </section>
      )}

      {/* ━━━ 지난 회차 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {ventureIssues.length > 0 && (
        <section className="bg-white py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 flex items-end justify-between">
              <div>
                <p
                  className="mb-4 text-xs font-bold tracking-[0.25em] uppercase"
                  style={{ color: ACCENT }}
                >
                  Point 3 — Archive
                </p>
                <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                  지난 회차
                </h2>
              </div>
              <Link
                href="/archive?category=venture"
                className="hidden items-center gap-1.5 text-sm font-semibold text-gray-400 transition-colors hover:text-gray-900 sm:flex"
              >
                전체 보기 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex flex-col divide-y divide-gray-200 border-y border-gray-200">
              {ventureIssues.map((issue) => (
                <Link
                  key={issue.issueId}
                  href={`/archive/${issue.issueId}`}
                  className="group flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:gap-10"
                >
                  <div className="w-24 shrink-0">
                    {issue.status === "ongoing" ? (
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold text-white"
                        style={{ backgroundColor: ACCENT }}
                      >
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                        진행중
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-400">
                        {STATUS_LABEL[issue.status]}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-xl font-bold text-gray-900 transition-colors group-hover:text-[#e20871] sm:text-2xl">
                      {issue.title}
                    </p>
                    <p className="mt-1.5 text-sm text-gray-400">
                      {issue.startDate} — {issue.endDate} &nbsp;·&nbsp; {issue.location}
                    </p>
                  </div>
                  <ArrowRight className="hidden h-5 w-5 shrink-0 text-gray-300 transition-all group-hover:translate-x-1 group-hover:text-[#e20871] sm:block" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ━━━ FAQ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-gray-50 py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p
              className="mb-4 text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: ACCENT }}
            >
              Point 4 — FAQ
            </p>
            <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              자주 묻는 질문
            </h2>
          </div>

          <dl className="flex flex-col divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white overflow-hidden">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="px-8 py-7">
                <dt className="flex items-start gap-4">
                  <span
                    className="mt-0.5 text-xs font-bold tracking-widest"
                    style={{ color: `${ACCENT}70` }}
                  >
                    Q{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-bold text-gray-900">{faq.q}</span>
                </dt>
                <dd className="mt-3 pl-9 text-sm leading-relaxed text-gray-500">
                  {faq.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ━━━ CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden bg-white py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 55% 65% at 50% 110%, ${ACCENT}10 0%, transparent 60%)`,
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            다음 회차에
            <br />
            지원하세요
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            취팡 창업/투자 프로그램 참여 신청 및 제휴 문의를 받습니다
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-9 py-4 text-sm font-bold text-white transition-all hover:opacity-90"
              style={{
                backgroundColor: ACCENT,
                boxShadow: `0 0 40px ${ACCENT}30`,
              }}
            >
              참여 문의 <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/archive?category=venture"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-9 py-4 text-sm font-semibold text-gray-600 transition-all hover:border-gray-300 hover:text-gray-900"
            >
              지난 회차 보기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
