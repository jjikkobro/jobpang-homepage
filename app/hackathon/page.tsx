import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  FileSearch,
  Lightbulb,
  Presentation,
  Trophy,
  ChevronRight,
} from "lucide-react";
import { STATUS_LABEL } from "@/lib/data";
import { getIssuesByCategory } from "@/lib/data-server";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "해커톤 | 취팡",
  description:
    "실제 서비스를 사용하고, 문제를 정의하고, 개선안을 제안하는 PM/서비스기획 실전형 해커톤.",
};

const ACCENT = "#2563eb";
// 히어로 우측 사진 경로. 비어있으면 기존 단일 컬럼 레이아웃 유지.
const HERO_IMAGE = ""; // 예: "/gallery/hackathon/hero.webp"

const flow = [
  {
    icon: FileSearch,
    step: "01",
    title: "서비스 탐색",
    desc: "실제 서비스를 직접 사용하며 사용자 경험을 분석하고 문제 상황을 발굴합니다.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "문제 정의",
    desc: "발굴한 문제를 구조화하고 개선이 필요한 핵심 포인트를 명확히 정의합니다.",
  },
  {
    icon: Presentation,
    step: "03",
    title: "개선안 제안",
    desc: "근거 있는 UX/서비스 개선안을 기획하고 발표 자료로 완성합니다.",
  },
  {
    icon: Trophy,
    step: "04",
    title: "발표 및 평가",
    desc: "현직 PM·서비스기획자 심사위원 앞에서 발표하고 실전 피드백을 받습니다.",
  },
];

const targets = [
  "PM·서비스기획·프로덕트 직군에 관심 있는 누구나",
  "UX·서비스 개선 경험을 쌓고 싶은 분",
  "포트폴리오에 실전 결과물을 추가하고 싶은 분",
  "현직 PM의 피드백을 직접 받고 싶은 분",
  "취업·이직·커리어 전환을 준비 중인 분",
];

const programs = [
  { label: "사전 오리엔테이션", desc: "해커톤 진행 방식 안내 및 팀 구성" },
  { label: "서비스 탐색 워크숍", desc: "분석 방법론 강의 및 실습" },
  { label: "중간 점검 세션", desc: "현직 멘토의 문제 정의 피드백" },
  { label: "최종 발표 (오프라인)", desc: "심사위원 앞 발표 및 Q&A" },
  { label: "결과 발표 및 시상", desc: "우수작 선정 및 네트워킹" },
];

const faqs = [
  {
    q: "코딩 실력이 없어도 참가할 수 있나요?",
    a: "네, 이 해커톤은 코딩이 아닌 서비스 기획·분석 중심입니다. 개발 없이 기획서와 발표 자료만으로 참가합니다.",
  },
  {
    q: "팀으로만 참가해야 하나요?",
    a: "개인 또는 팀(최대 4인) 모두 참가 가능합니다. 개인 지원자는 오리엔테이션에서 팀 매칭 기회가 제공됩니다.",
  },
  {
    q: "어떤 서비스를 분석하나요?",
    a: "참가자가 직접 분석할 서비스를 선택합니다. 단, 중복 방지를 위해 사전 신청 시 서비스명을 함께 제출합니다.",
  },
  {
    q: "결과물은 어떻게 제출하나요?",
    a: "마감일(03.22)까지 발표 자료(PPT/Figma 등)를 이메일로 제출합니다. 최종 발표는 오프라인으로 진행됩니다.",
  },
  {
    q: "참가비가 있나요?",
    a: "참가비는 무료입니다. 최종 발표 장소 및 교통비는 참가자 부담이며, 우수팀에게는 소정의 시상이 있습니다.",
  },
];

export default function HackathonPage() {
  const statusOrder: Record<string, number> = { recruiting: 0, ongoing: 1, upcoming: 2, past: 3 };
  const hackathonIssues = getIssuesByCategory("hackathon").sort(
    (a, b) => (statusOrder[a.status] ?? 99) - (statusOrder[b.status] ?? 99)
  );

  return (
    <>
      {/* ━━━ HERO (black 유지) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden bg-black pb-32 pt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 55% 65% at 65% 50%, ${ACCENT}18 0%, transparent 65%)`,
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
          <nav className="mb-12 flex items-center gap-1.5 text-xs text-white/25">
            <Link href="/" className="hover:text-white/50 transition-colors">홈</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/50">해커톤</span>
          </nav>

          <div className={HERO_IMAGE ? "lg:grid lg:grid-cols-2 lg:items-center lg:gap-16" : "max-w-3xl"}>
            {/* 텍스트 */}
            <div>
              <div
                className="mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2"
                style={{ borderColor: `${ACCENT}40`, backgroundColor: `${ACCENT}12` }}
              >
                <span
                  className="h-1.5 w-1.5 animate-pulse rounded-full"
                  style={{ backgroundColor: ACCENT }}
                />
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: ACCENT }}
                >
                  2기 모집중 — 4/6 지원 마감
                </span>
              </div>

              <span
                className="mb-6 block text-xs font-bold tracking-[0.25em] uppercase"
                style={{ color: ACCENT }}
              >
                Hackathon · 해커톤
              </span>
              <h1 className="text-6xl font-extrabold leading-[1.0] tracking-tight text-white sm:text-7xl lg:text-[90px]">
                문제를 발굴하고
                <br />
                개선안을
                <br />
                <span style={{ color: ACCENT }}>만들어라</span>
              </h1>
              <p className="mt-8 max-w-xl text-xl leading-relaxed text-white/45">
                실제 서비스를 사용하고, 문제를 정의하고,
                <br />
                개선안을 제안하는 PM 실전형 해커톤.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/archive/hackathon-002"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white transition-all hover:opacity-90"
                  style={{
                    backgroundColor: ACCENT,
                    boxShadow: `0 0 32px ${ACCENT}40`,
                  }}
                >
                  2기 지원하기 <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/archive?category=hackathon"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white/60 transition-all hover:border-white/30 hover:text-white"
                >
                  해커톤 목록
                </Link>
              </div>
            </div>

            {/* 우측 히어로 이미지 */}
            {HERO_IMAGE && (
              <div className="relative mt-12 hidden lg:mt-0 lg:block">
                <div className="relative h-[440px] overflow-hidden rounded-2xl">
                  <Image
                    src={HERO_IMAGE}
                    alt="해커톤 행사 현장"
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
              4단계로 서비스를 탐색하고, 문제를 정의하고, 개선안을 완성합니다
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

      {/* ━━━ 회차 아카이브 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {hackathonIssues.length > 0 && (
        <section className="bg-gray-50 py-32">
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
                  회차 아카이브
                </h2>
              </div>
              <Link
                href="/archive?category=hackathon"
                className="hidden items-center gap-1.5 text-sm font-semibold text-gray-400 transition-colors hover:text-gray-900 sm:flex"
              >
                전체 보기 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex flex-col divide-y divide-gray-200 border-y border-gray-200">
              {hackathonIssues.map((issue) => (
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
                    ) : issue.status === "recruiting" ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-green-600 px-3 py-1.5 text-xs font-bold text-white">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                        모집중
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-400">
                        {STATUS_LABEL[issue.status]}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-xl font-bold text-gray-900 transition-colors group-hover:text-[#2563eb] sm:text-2xl">
                      {issue.title}
                    </p>
                    <p className="mt-1.5 text-sm text-gray-400">
                      {issue.startDate} — {issue.endDate} &nbsp;·&nbsp; {issue.location}
                    </p>
                  </div>
                  <ArrowRight className="hidden h-5 w-5 shrink-0 text-gray-300 transition-all group-hover:translate-x-1 group-hover:text-[#2563eb] sm:block" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ━━━ FAQ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-32">
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

          <dl className="flex flex-col divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden">
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
      <section className="relative overflow-hidden bg-gray-50 py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 55% 65% at 50% 110%, ${ACCENT}10 0%, transparent 60%)`,
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            2기 지금
            <br />
            지원하세요
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            지원 마감 2026.04.06 · 팀빌딩 시작 2026.03.30
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/archive?category=hackathon"
              className="inline-flex items-center gap-2 rounded-full px-9 py-4 text-sm font-bold text-white transition-all hover:opacity-90"
              style={{
                backgroundColor: ACCENT,
                boxShadow: `0 0 40px ${ACCENT}30`,
              }}
            >
              해커톤 목록 보기 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
