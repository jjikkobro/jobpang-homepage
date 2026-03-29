import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Laptop,
  Bot,
  TrendingUp,
  CheckCircle2,
  Coffee,
  Banknote,
  BarChart3,
  Gift,
  Building2,
  MessageCircle,
  MapPin,
  Trees,
  Store,
} from "lucide-react";
import { positions, BRAND } from "./data";

export const metadata: Metadata = {
  title: "채용공고 | 취팡",
  description:
    "취팡은 3년 커리어 점프 구간을 설계한 팀입니다. 서비스 운영 PM, 서비스 기획자, 콘텐츠 마케터, 퍼포먼스 마케터, 마케팅 매니저를 모집합니다.",
};

const benefits = [
  { icon: Laptop, label: "하이브리드 근무" },
  { icon: Building2, label: "공유오피스 협업 환경" },
  { icon: Coffee, label: "점심 식대 2만원" },
  { icon: Banknote, label: "매달 리텐션 보너스 10만원" },
  { icon: BarChart3, label: "분기 성과급" },
  { icon: Gift, label: "엑시트 시 구성원 보상" },
  { icon: Bot, label: "AI 업무 환경" },
  { icon: MapPin, label: "충무로역 도보 1분" },
  { icon: Trees, label: "남산한옥마을 도보 1분" },
  { icon: Store, label: "건물 1층 카페 이용 가능" },
];

const lookingFor = [
  "실행 중심으로 일하는 사람",
  "새로운 시도를 즐기는 사람",
  "AI와 새로운 도구 활용에 열린 사람",
  "작은 조직에서 큰 역할을 맡고 싶은 사람",
  "플랫폼 성장 과정에 참여하고 싶은 사람",
];

const processSteps = [
  { step: "01", label: "서류 전형", note: null },
  {
    step: "02",
    label: "비대면 인터뷰 + 간단 과제",
    note: "서류 합격자에 한해 비대면 인터뷰가 진행됩니다. 인터뷰 전 간단한 사전 과제가 안내됩니다.",
  },
  {
    step: "03",
    label: "대면 인터뷰",
    note: "직무 적합성 및 협업 방식을 종합적으로 확인하는 최종 대면 인터뷰입니다.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* ━━━ HEADER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden bg-black py-16 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 70% 80% at 30% 50%, ${BRAND}1a 0%, transparent 60%)`,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <p
            className="mb-3 text-xs font-bold tracking-[0.25em] uppercase"
            style={{ color: BRAND }}
          >
            Careers at Jobpang
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            채용공고
          </h1>
          <p className="mt-3 text-base text-white/50">
            취팡과 함께 3년 커리어 점프 구간을 만들어갈 분을 찾습니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {positions.map((p) => (
              <a
                key={p.title}
                href="#positions"
                className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-white/60 transition-colors hover:border-white/40 hover:text-white/90"
              >
                {p.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ 채용 리드문 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="border-b border-gray-200 bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
          <p
            className="mb-5 text-xs font-bold tracking-[0.25em] uppercase"
            style={{ color: BRAND }}
          >
            About 취팡
          </p>
          <div className="space-y-4 text-[16px] leading-[1.85] text-gray-700">
            <p>
              취팡은 &apos;초기 스타트업의 불안정&apos;을 파는 팀이 아니라,{" "}
              <strong className="text-gray-900">&apos;3년 커리어 점프 구간&apos;을 설계한 팀입니다.</strong>
            </p>
            <p>
              초기 온보딩 및 업무 적응 기간에는 오프라인 중심으로 근무하며,
              이후에는 상황에 따라 유연하게 운영되는{" "}
              <strong className="text-gray-900">하이브리드 근무</strong>를 적용합니다.
              사무실은{" "}
              <strong className="text-gray-900">충무로역 도보 1분 거리</strong>에 위치해 있으며,
              빠른 협업과 실행이 가능한 환경을 갖추고 있습니다.
            </p>
            <p>
              복지는 단순하고 명확합니다.{" "}
              <strong className="text-gray-900">점심 식대 2만원, 매달 리텐션 보너스 10만원</strong>이 제공되며,
              성과는{" "}
              <strong className="text-gray-900">분기 성과급</strong>으로 보상합니다.
              또한 향후 엑시트 발생 시{" "}
              <strong className="text-gray-900">구성원에게 직접적인 보상이 돌아가는 구조</strong>를 설계하고 있습니다.
            </p>
            <p>
              취팡은 완전히 맨땅에서 시작하는 스타트업이 아닙니다.{" "}
              <strong className="text-gray-900">
                이미 구축된 취업의신 브랜드, 콘텐츠 자산, 회원 기반, 운영 시스템 위에서 빠르게 성장하는 플랫폼 팀
              </strong>입니다.
            </p>
            <p>
              향후{" "}
              <strong className="text-gray-900">3년 내 IPO 또는 엑시트를 목표로 성장 시나리오</strong>를
              준비하고 있으며, 그 과정에서 함께 성장할 수도 있고, 이후 더 큰 커리어로 이동할 수도 있습니다.
            </p>
            <p
              className="border-l-[3px] pl-5 py-0.5 font-semibold text-gray-900"
              style={{ borderColor: BRAND }}
            >
              취팡에서의 3년은 단순한 재직 기간이 아니라,{" "}
              <strong style={{ color: BRAND }}>커리어 레벨을 한 단계 끌어올리는 &apos;점프 구간&apos;이 됩니다.</strong>
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* ━━━ 팀 소개 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="border-b border-gray-200 bg-gray-50 py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p
            className="mb-5 text-xs font-bold tracking-[0.25em] uppercase"
            style={{ color: BRAND }}
          >
            취팡 팀 소개
          </p>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
            {/* 왼쪽: 팀 개요 + 팀 특징 카드 */}
            <div className="space-y-5">
              <p className="text-[16px] leading-[1.85] text-gray-700">
                현재 취팡은{" "}
                <strong className="text-gray-900">대표 포함 3명의 핵심 인력 중심으로 운영되는 초기 팀</strong>입니다.
                작은 팀이지만 아래 3가지를 기반으로 움직이고 있습니다.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "의사결정 속도", sub: "빠른 실행" },
                  { label: "실행 중심 문화", sub: "결과로 증명" },
                  { label: "빠른 실험", sub: "도전과 학습" },
                ].map(({ label, sub }) => (
                  <div
                    key={label}
                    className="rounded-lg border border-gray-300 bg-white px-4 py-4 text-center"
                    style={{ borderTopWidth: "2px", borderTopColor: BRAND }}
                  >
                    <p className="text-sm font-bold text-gray-900">{label}</p>
                    <p className="mt-1 text-xs text-gray-400">{sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 오른쪽: 채널 + 전환 흐름 */}
            <div className="space-y-5">
              <p className="text-[16px] leading-[1.85] text-gray-700">
                또한 취팡은{" "}
                <strong className="text-gray-900">이미 구축된 콘텐츠 채널과 브랜드 기반</strong>을 가지고 있어
                콘텐츠 → 유입 → 서비스 전환 구조를 실제로 경험할 수 있습니다.
              </p>
              <div className="flex flex-wrap gap-2">
                {["블로그", "인스타그램", "스레드", "취업 커뮤니티"].map((ch) => (
                  <span
                    key={ch}
                    className="rounded-full border border-gray-300 bg-white px-4 py-1.5 text-sm font-semibold text-gray-700"
                  >
                    {ch}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ 모집 포지션 (테이블) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="positions" className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p
                className="mb-1.5 text-xs font-bold tracking-[0.25em] uppercase"
                style={{ color: BRAND }}
              >
                Open Positions
              </p>
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                모집 포지션
              </h2>
            </div>
            <p className="hidden text-sm text-gray-400 sm:block">
              인접 직무 경험도 환영합니다
            </p>
          </div>

          {/* 데스크탑 테이블 */}
          <div className="hidden overflow-hidden rounded-xl border border-gray-200 md:block">
            <div className="grid grid-cols-[2fr_120px_2fr_130px] bg-gray-50 px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-400 border-b border-gray-200">
              <span>포지션</span>
              <span>우대 경력</span>
              <span>주요 업무</span>
              <span className="text-right">상세보기</span>
            </div>
            {positions.map((pos, idx) => (
              <div
                key={pos.slug}
                className={`grid grid-cols-[2fr_120px_2fr_130px] items-center gap-4 px-6 py-5 transition-colors hover:bg-gray-50 ${
                  idx < positions.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="inline-block rounded-full px-2 py-0.5 text-[10px] font-bold"
                      style={{ backgroundColor: `${BRAND}14`, color: BRAND }}
                    >
                      모집 중
                    </span>
                  </div>
                  <p className="text-base font-extrabold text-gray-900">{pos.title}</p>
                  <p className="mt-0.5 text-xs text-gray-400">{pos.tagline}</p>
                </div>
                <div>
                  <span className="inline-block rounded-full border border-gray-300 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-600">
                    {pos.years}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {pos.tasks.map((task) => (
                    <span
                      key={task}
                      className="rounded-md border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-600"
                    >
                      {task}
                    </span>
                  ))}
                </div>
                <div className="text-right">
                  <Link
                    href={`/careers/${pos.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold transition-all hover:bg-[#e20871] hover:text-white hover:border-[#e20871]"
                    style={{ borderColor: BRAND, color: BRAND }}
                  >
                    상세 보기 <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* 모바일: 카드형 (작은 화면에서만 표시) */}
          <div className="grid gap-3 md:hidden">
            {positions.map((pos) => (
              <div
                key={pos.slug}
                className="rounded-xl border border-gray-200 bg-white p-5"
                style={{ borderTopWidth: "3px", borderTopColor: BRAND }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span
                      className="inline-block rounded-full px-2 py-0.5 text-[10px] font-bold mb-1.5"
                      style={{ backgroundColor: `${BRAND}14`, color: BRAND }}
                    >
                      모집 중
                    </span>
                    <p className="text-base font-extrabold text-gray-900">{pos.title}</p>
                    <p className="mt-0.5 text-xs text-gray-400">{pos.tagline}</p>
                    <span className="mt-2 inline-block rounded-full border border-gray-300 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-600">
                      {pos.years}
                    </span>
                  </div>
                  <Link
                    href={`/careers/${pos.slug}`}
                    className="shrink-0 inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-semibold"
                    style={{ borderColor: BRAND, color: BRAND }}
                  >
                    상세 보기 <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* 급여 공통 안내 */}
          <div className="mt-6 rounded-xl border border-gray-300 bg-gray-50 px-6 py-5">
            <div className="flex flex-wrap items-start gap-x-10 gap-y-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">급여</p>
                <p className="text-sm font-semibold text-gray-900">
                  신입 기준 연 3,600만원부터
                </p>
                <p className="mt-0.5 text-xs text-gray-500">
                  경력 및 실무역량에 따라 협의
                </p>
              </div>
              <div className="h-auto w-px self-stretch bg-gray-300 hidden sm:block" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">추가 보상</p>
                <div className="flex flex-wrap gap-2 mt-0.5">
                  {["분기 성과급", "연간 근속 리워드 (누적형)"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-medium text-gray-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ 취팡이 찾는 사람 + 일하는 방식 (2-col) ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="border-t border-gray-200 bg-gray-50 py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

            {/* 찾는 사람 */}
            <div>
              <p
                className="mb-1.5 text-xs font-bold tracking-[0.25em] uppercase"
                style={{ color: BRAND }}
              >
                Who We&apos;re Looking For
              </p>
              <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900">
                취팡이 찾는 사람
              </h2>
              <ul className="space-y-2">
                {lookingFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: BRAND }} />
                    <span className="text-sm font-medium text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 일하는 방식 */}
            <div>
              <p
                className="mb-1.5 text-xs font-bold tracking-[0.25em] uppercase"
                style={{ color: BRAND }}
              >
                How We Work
              </p>
              <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900">
                취팡이 일하는 방식
              </h2>
              <div className="space-y-3">
                <div className="rounded-lg border border-gray-300 bg-white p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-lg shrink-0"
                      style={{ backgroundColor: `${BRAND}14`, color: BRAND }}
                    >
                      <Laptop className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">하이브리드 근무</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-500">
                    입사 초기 온보딩 기간에는 출근 중심으로 진행하며, 온보딩 이후에는 숙련도와
                    협업 상황에 따라 재택과 출근을 유연하게 병행합니다.
                    공유오피스는 협업이 필요할 때 모이는 거점으로 사용합니다.
                  </p>
                </div>
                <div className="rounded-lg border border-gray-300 bg-white p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-lg shrink-0"
                      style={{ backgroundColor: `${BRAND}14`, color: BRAND }}
                    >
                      <Bot className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">AI 기반 업무 환경</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-500">
                    콘텐츠 제작, 마케팅 운영, 서비스 운영 등 다양한 영역에서 AI 도구와 자동화 시스템을
                    적극 활용합니다. 핵심 멤버가 AI 업무 효율화 온보딩을 직접 지원합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ 복지 + 채용 절차 (2-col) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="border-t border-gray-200 bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">

            {/* 복지 */}
            <div>
              <p
                className="mb-1.5 text-xs font-bold tracking-[0.25em] uppercase"
                style={{ color: BRAND }}
              >
                Benefits
              </p>
              <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900">복지</h2>
              <ul className="grid grid-cols-2 gap-2">
                {benefits.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2.5 rounded-lg border border-gray-300 bg-gray-50 px-4 py-3"
                  >
                    <Icon className="h-4 w-4 shrink-0" style={{ color: BRAND }} />
                    <span className="text-sm font-medium text-gray-800">{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 채용 절차 */}
            <div>
              <p
                className="mb-1.5 text-xs font-bold tracking-[0.25em] uppercase"
                style={{ color: BRAND }}
              >
                Hiring Process
              </p>
              <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900">채용 절차</h2>
              <ol className="space-y-2">
                {processSteps.map(({ step, label, note }) => (
                  <li
                    key={step}
                    className="flex gap-4 rounded-lg border border-gray-300 bg-gray-50 px-4 py-3"
                  >
                    <span
                      className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-black text-white"
                      style={{ backgroundColor: BRAND }}
                    >
                      {step}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{label}</p>
                      {note && <p className="mt-1 text-xs leading-relaxed text-gray-500">{note}</p>}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ 지원 전 참고 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="border-t border-gray-200 bg-gray-50 py-14 lg:py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p
            className="mb-1.5 text-xs font-bold tracking-[0.25em] uppercase"
            style={{ color: BRAND }}
          >
            지원 전 참고해주세요
          </p>
          <h2 className="mb-5 text-2xl font-extrabold text-gray-900">
            모든 조건을 완벽히 충족하지 않아도 됩니다
          </h2>
          <p className="text-[16px] leading-[1.85] text-gray-700">
            취팡은 직무명이나 연차보다{" "}
            <strong className="text-gray-900">실제로 문제를 해결하고 실행해본 경험을 더 중요하게 봅니다.</strong>
            {" "}따라서 정통 직무 경력자뿐 아니라{" "}
            <strong className="text-gray-900">인접 직무에서 유관 경험을 쌓은 분들도 충분히 지원 가능합니다.</strong>
          </p>
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {[
              "개발 → 서비스 기획 전환",
              "PMO / 운영기획 → 서비스 운영 PM",
              "SNS 운영 → 콘텐츠 마케터",
              "광고 운영 → 퍼포먼스 마케터",
              "커뮤니티 운영 → 마케팅 매니저",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 rounded-lg border border-gray-300 bg-white px-4 py-2.5"
              >
                <TrendingUp className="h-3.5 w-3.5 shrink-0" style={{ color: BRAND }} />
                <span className="text-sm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ━━━ CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden bg-black py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 55% 60% at 50% 100%, ${BRAND}25 0%, transparent 60%)`,
          }}
        />

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p
            className="mb-3 text-xs font-bold tracking-[0.25em] uppercase"
            style={{ color: BRAND }}
          >
            Apply Now
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            지원 전 궁금한 점이 있다면
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/50">
            지원 여부를 고민 중이라면 10분 정도 짧게 이야기 나눠보는 것도 가능합니다.
            취팡 팀과 이야기해보고 지원 여부를 결정하셔도 괜찮습니다.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 text-left">
            <div className="rounded-xl border border-white/15 bg-white/5 p-6">
              <p className="text-[11px] font-bold tracking-[0.2em] text-white/40 uppercase mb-2">이메일 지원</p>
              <a
                href="mailto:help@jobpang.co.kr"
                className="text-base font-bold text-white hover:opacity-80 transition-opacity"
              >
                help@jobpang.co.kr
              </a>
              <p className="mt-1.5 text-sm text-white/40">이력서 및 포트폴리오 첨부 후 지원 포지션 명시</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-6">
              <p className="text-[11px] font-bold tracking-[0.2em] text-white/40 uppercase mb-2">사전 문의</p>
              <span className="flex items-center gap-2 text-base font-bold text-white">
                <MessageCircle className="h-4 w-4" style={{ color: BRAND }} />
                10분 커피챗
              </span>
              <p className="mt-1.5 text-sm text-white/40">지원 전 궁금한 점을 편하게 물어볼 수 있습니다</p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:help@jobpang.co.kr"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: BRAND, boxShadow: `0 0 32px ${BRAND}40` }}
            >
              이메일로 지원하기 <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white/60 transition-all hover:border-white/30 hover:text-white"
            >
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
