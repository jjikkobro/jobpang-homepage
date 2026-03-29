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
} from "lucide-react";

export const metadata: Metadata = {
  title: "채용공고 | 취팡",
  description:
    "취팡은 3년 커리어 점프 구간을 설계한 팀입니다. 서비스 운영 PM, 서비스 기획자, 콘텐츠 마케터, 퍼포먼스 마케터, 마케팅 매니저를 모집합니다.",
};

const BRAND = "#e20871";

const positions = [
  {
    title: "서비스 운영 PM",
    tagline: "서비스 운영 관리와 프로젝트 흐름을 정리하는 역할",
    years: "4~8년",
    tasks: ["서비스 운영 관리", "프로젝트 일정 관리", "개발사 협업", "내부 업무 정리 및 보고"],
    experience: "서비스 운영 / PMO / 운영기획 / 프로젝트 관리 경험",
  },
  {
    title: "서비스 기획자",
    tagline: "서비스 구조와 사용자 흐름을 설계하는 역할",
    years: "2~7년",
    tasks: ["서비스 기능 기획", "사용자 흐름 설계", "요구사항 정의", "서비스 개선 기획"],
    experience: "서비스 기획 / PM·PO / 개발 → PM 전환 / 운영기획 경험",
  },
  {
    title: "콘텐츠 마케터",
    tagline: "취팡 콘텐츠 전략과 채널 운영을 담당",
    years: "2~5년",
    tasks: ["콘텐츠 기획", "자사 채널 운영", "콘텐츠 제작 디렉션"],
    experience: "블로그 / SNS 콘텐츠 / 커뮤니티 콘텐츠 운영 경험",
  },
  {
    title: "퍼포먼스 마케터",
    tagline: "마케팅 성과 개선과 광고 운영을 담당",
    years: "2~5년",
    tasks: ["광고 운영", "성과 분석", "전환 개선"],
    experience: "광고 운영 / 마케팅 성과 개선 경험",
  },
  {
    title: "마케팅 매니저",
    tagline: "마케팅 운영과 커뮤니티 채널을 관리하는 역할",
    years: "0~4년",
    tasks: ["커뮤니티 운영", "외부 채널 관리", "사용자 반응 수집"],
    experience: "마케팅 운영 / 커뮤니티 운영 / 채널 운영 경험",
  },
];

const benefits = [
  { icon: Laptop, label: "하이브리드 근무" },
  { icon: Building2, label: "공유오피스 협업 환경" },
  { icon: Coffee, label: "점심 식대 2만원" },
  { icon: Banknote, label: "매달 리텐션 보너스 10만원" },
  { icon: BarChart3, label: "분기 성과급" },
  { icon: Gift, label: "엑시트 시 구성원 보상" },
  { icon: Bot, label: "AI 업무 환경" },
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
  { step: "02", label: "1차 비대면 면접", note: null },
  { step: "03", label: "2차 면접", note: "1차 합격자에 한해 2차 면접 전 간단한 사전 미션이 안내됩니다. 2차 면접에서는 미션 리뷰와 함께 직무 적합성 및 협업 방식을 종합적으로 확인합니다." },
  { step: "04", label: "처우 협의 및 최종 합격", note: null },
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
              재택과 출근을 선택할 수 있는{" "}
              <strong className="text-gray-900">하이브리드 근무</strong>를 운영하며,
              공유오피스는 협업이 필요할 때 모이는 거점으로 사용합니다.
              복지는 단순합니다.{" "}
              <strong className="text-gray-900">점심 2만원, 매달 리텐션 보너스 10만원</strong>을 제공합니다.
              성과는{" "}
              <strong className="text-gray-900">분기 성과급</strong>으로 보상하고,
              엑시트가 발생하면 구성원에게 강력한 보너스를 제공합니다.
            </p>
            <p>
              취팡은 완전히 맨땅에서 시작하는 스타트업이 아니라,{" "}
              <strong className="text-gray-900">
                이미 구축된 브랜드·콘텐츠 자산·회원 기반·업무 시스템 위에서 성장하는 플랫폼 팀
              </strong>입니다.
            </p>
            <p>
              또한 향후{" "}
              <strong className="text-gray-900">3년 내 IPO 또는 엑시트를 포함한 성장 시나리오</strong>를
              준비하고 있으며, 그 과정에서 계속 함께할 수도 있고 다음 커리어로 이동할 수도 있습니다.
            </p>
            <p
              className="border-l-[3px] pl-5 py-0.5 font-semibold text-gray-900"
              style={{ borderColor: BRAND }}
            >
              취팡에서의 3년은 단순한 회사 경력이 아니라{" "}
              <strong style={{ color: BRAND }}>하나의 커리어 점프 구간이 될 수 있습니다.</strong>
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

      {/* ━━━ 모집 포지션 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
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

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {positions.map((pos) => (
              <div
                key={pos.title}
                className="flex flex-col rounded-xl border border-gray-300 bg-white p-6 transition-shadow hover:shadow-md"
                style={{ borderTopWidth: "3px", borderTopColor: BRAND }}
              >
                <div className="mb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold"
                      style={{ backgroundColor: `${BRAND}14`, color: BRAND }}
                    >
                      모집 중
                    </span>
                    <span className="inline-block rounded-full border border-gray-300 bg-gray-50 px-2.5 py-0.5 text-[11px] font-semibold text-gray-500">
                      신입 가능
                    </span>
                    <span className="inline-block rounded-full border border-gray-300 bg-gray-50 px-2.5 py-0.5 text-[11px] font-semibold text-gray-500">
                      우대 {pos.years}
                    </span>
                  </div>
                  <h3 className="mt-2.5 text-lg font-extrabold text-gray-900">
                    {pos.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-500">
                    {pos.tagline}
                  </p>
                </div>

                <div className="flex-1 border-t border-gray-100 pt-4">
                  <p className="mb-2 text-[11px] font-bold tracking-wider text-gray-400 uppercase">
                    주요 업무
                  </p>
                  <ul className="space-y-1.5">
                    {pos.tasks.map((task) => (
                      <li key={task} className="flex items-start gap-2 text-sm text-gray-700">
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                          style={{ backgroundColor: BRAND }}
                        />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                    유관 경험
                  </p>
                  <p className="text-xs leading-relaxed text-gray-600">{pos.experience}</p>
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
                    입사 초기에는 출근 중심으로 온보딩하며, 이후 숙련도와 협업 상황에 따라
                    재택과 출근을 유연하게 병행합니다. 공유오피스는 협업이 필요할 때 모이는 거점으로 사용합니다.
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
