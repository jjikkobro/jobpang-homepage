import Link from "next/link";
import { ArrowRight, TrendingUp, Cpu, Users, ChevronDown } from "lucide-react";

const BRAND = "#e20871";

const stats = [
  { label: "누적 회차", value: "53회" },
  { label: "누적 참가자", value: "800+" },
  { label: "파트너사", value: "300+" },
];

const categories = [
  {
    icon: TrendingUp,
    label: "창업 / 투자",
    href: "/venture",
    description: "사업 진단부터 IR 피칭, 투자 상담·연계까지. 초기 ~ 시리즈A 스타트업/예비창업팀 대상.",
    tag: "VENTURE",
    num: "01",
    accent: "#e20871",
    accentBg: "rgba(226,8,113,0.08)",
  },
  {
    icon: Cpu,
    label: "해커톤",
    href: "/hackathon",
    description: "실제 서비스의 문제를 정의하고 개선안을 제안하는 실전형 해커톤. PM/기획 관심자 환영.",
    tag: "HACKATHON",
    num: "02",
    accent: "#2563eb",
    accentBg: "rgba(37,99,235,0.08)",
  },
  {
    icon: Users,
    label: "네트워킹",
    href: "/networking",
    description: "창업·N잡·부업·수익화 고민을 가진 사람들의 금요일 정기모임. 엔젤 투자 상담 가능.",
    tag: "NETWORKING",
    num: "03",
    accent: "#059669",
    accentBg: "rgba(5,150,105,0.08)",
  },
];

const recentIssues = [
  {
    id: "hackathon-001",
    title: "제 1회 취팡 해커톤",
    category: "해커톤",
    status: "ongoing" as const,
    date: "2026.02.23 — 03.22",
    location: "온·오프라인 병행",
    slug: "hackathon-001",
  },
  {
    id: "venture-001",
    title: "제 1회 창업 스타트업 투자 경진대회",
    category: "창업/투자",
    status: "past" as const,
    date: "2025.10.02 — 10.15",
    location: "구글 스타트업 캠퍼스(서울)",
    slug: "venture-001",
  },
];

const networkingItems = [
  { num: "01", title: "4주 챌린지", desc: "목표 설정 · 실행 점검 · 공유" },
  { num: "02", title: "브랜딩 / 창업 세미나", desc: "실전 인사이트를 공유하는 세미나" },
  { num: "03", title: "수주 · 사업 연결", desc: "참가자 간 비즈니스 매칭 네트워킹" },
  { num: "04", title: "엔젤 투자 상담", desc: "전문개인투자자 자격 보유, 별도 상담 가능" },
];

export default function HomePage() {
  return (
    <>
      {/* ━━━ S1. HERO (black 유지) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative flex min-h-[calc(100vh-72px)] flex-col justify-center overflow-hidden bg-black">
        {/* 핑크 글로우 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 70% 55% at 55% 50%, ${BRAND}28 0%, transparent 65%)`,
          }}
        />
        {/* 그리드 텍스처 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            {/* 진행중 배지 */}
            <div
              className="mb-10 inline-flex items-center gap-2 rounded-full border px-4 py-2"
              style={{ borderColor: `${BRAND}40`, backgroundColor: `${BRAND}12` }}
            >
              <span
                className="h-1.5 w-1.5 animate-pulse rounded-full"
                style={{ backgroundColor: BRAND }}
              />
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: BRAND }}
              >
                지금 진행중 — 제 1회 취팡 해커톤
              </span>
            </div>

            <h1 className="text-6xl font-extrabold leading-[1.0] tracking-tight text-white sm:text-7xl lg:text-[96px]">
              도전하는
              <br />
              사람들을 위한
              <br />
              플랫폼{" "}
              <span style={{ color: BRAND }}>취팡</span>
            </h1>

            <p className="mt-8 max-w-lg text-xl leading-relaxed text-white/50">
              온실을 벗어난 들판의 잡초들이 모이는 곳
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/archive"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white transition-all hover:opacity-90"
                style={{
                  backgroundColor: BRAND,
                  boxShadow: `0 0 32px ${BRAND}50`,
                }}
              >
                진행중인 행사 보기 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white/60 transition-all hover:border-white/30 hover:text-white"
              >
                취팡 소개
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
          <span className="text-[10px] tracking-[0.25em] uppercase">scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </div>
      </section>

      {/* ━━━ S2. 프로그램 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* 섹션 헤더 */}
          <div className="mb-20 text-center">
            <p
              className="mb-4 text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: BRAND }}
            >
              Point 1 — Programs
            </p>
            <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              3가지 프로그램
            </h2>
            <p className="mt-5 text-lg text-gray-400">
              각 프로그램은 독립적으로 운영되며 회차마다 아카이브됩니다
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 transition-all hover:border-gray-300 hover:bg-white hover:shadow-md"
                >
                  {/* 상단 컬러 스트립 */}
                  <div className="h-1 w-full" style={{ backgroundColor: cat.accent }} />

                  <div className="flex flex-col gap-6 p-8">
                    {/* 아이콘 + 번호 */}
                    <div className="flex items-start justify-between">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-xl"
                        style={{ backgroundColor: cat.accentBg, color: cat.accent }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span
                        className="text-4xl font-black opacity-[0.06]"
                        style={{ color: cat.accent }}
                      >
                        {cat.num}
                      </span>
                    </div>

                    {/* 태그 */}
                    <span
                      className="text-[10px] font-bold tracking-[0.2em] uppercase"
                      style={{ color: cat.accent }}
                    >
                      {cat.tag}
                    </span>

                    {/* 텍스트 */}
                    <div className="flex-1">
                      <p className="text-xl font-bold text-gray-900">{cat.label}</p>
                      <p className="mt-2 text-sm leading-relaxed text-gray-500">
                        {cat.description}
                      </p>
                    </div>

                    {/* 링크 */}
                    <div
                      className="flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-3"
                      style={{ color: cat.accent }}
                    >
                      자세히 보기 <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━ S3. 누적 지표 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="border-y border-gray-200 bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-3 gap-8 text-center sm:gap-12">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-2">
                <dd
                  className="text-4xl font-extrabold sm:text-6xl lg:text-7xl"
                  style={{ color: BRAND }}
                >
                  {s.value}
                </dd>
                <dt className="text-xs font-medium text-gray-400 sm:text-sm">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ━━━ S4. 최근 행사 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* 헤더 */}
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p
                className="mb-4 text-xs font-bold tracking-[0.25em] uppercase"
                style={{ color: BRAND }}
              >
                Point 2 — Archive
              </p>
              <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                최근 행사
              </h2>
            </div>
            <Link
              href="/archive"
              className="hidden items-center gap-1.5 text-sm font-semibold text-gray-400 transition-colors hover:text-gray-900 sm:flex"
            >
              전체 보기 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 리스트 */}
          <div className="flex flex-col divide-y divide-gray-200 border-y border-gray-200">
            {recentIssues.map((issue) => (
              <Link
                key={issue.id}
                href={`/archive/${issue.slug}`}
                className="group flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:gap-10"
              >
                {/* 상태 */}
                <div className="w-24 shrink-0">
                  {issue.status === "ongoing" ? (
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold text-white"
                      style={{ backgroundColor: BRAND }}
                    >
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                      진행중
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-400">
                      종료
                    </span>
                  )}
                </div>

                {/* 제목 */}
                <div className="flex-1">
                  <p className="text-xl font-bold text-gray-900 transition-colors group-hover:text-[#e20871] sm:text-2xl">
                    {issue.title}
                  </p>
                  <p className="mt-1.5 text-sm text-gray-400">
                    {issue.date} &nbsp;·&nbsp; {issue.location}
                  </p>
                </div>

                {/* 카테고리 + 화살표 */}
                <div className="flex items-center gap-4 sm:shrink-0">
                  <span className="text-xs font-bold tracking-widest text-gray-300 uppercase">
                    {issue.category}
                  </span>
                  <ArrowRight className="h-5 w-5 text-gray-300 transition-all group-hover:translate-x-1 group-hover:text-[#e20871]" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <Link href="/archive" className="flex items-center gap-1.5 text-sm font-semibold text-gray-400">
              전체 보기 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━ S5. 네트워킹 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-gray-50 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* 헤더 */}
          <div className="mb-16 text-center">
            <p
              className="mb-4 text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: "#059669" }}
            >
              Point 3 — Networking
            </p>
            <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              금요일마다
              <br />
              만나는 모임
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg text-gray-400">
              창업·N잡·수익화·커리어 고민을 가진 사람들이
              매주 금요일 오후 7시에 모여요
            </p>
          </div>

          {/* 프로그램 그리드 */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {networkingItems.map((item) => (
              <div
                key={item.num}
                className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-6"
              >
                <span className="text-xs font-bold tracking-widest text-[#059669]/50 uppercase">
                  {item.num}
                </span>
                <p className="text-base font-bold text-gray-900">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* 시간 배지 + 버튼 */}
          <div className="mt-10 flex flex-col items-center gap-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#059669]/30 bg-[#059669]/8 px-5 py-2.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#059669]" />
              <span className="text-sm font-bold text-[#059669]">
                매주 금요일 오후 7시 ~ 10시
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/networking/weekly"
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-gray-700"
              >
                정기모임 안내 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/networking"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-7 py-3.5 text-sm font-semibold text-gray-600 transition-all hover:border-gray-300 hover:text-gray-900"
              >
                네트워킹 소개
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ S6. 관련 서비스 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="border-y border-gray-200 bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-10 text-center text-xs font-bold tracking-[0.25em] text-gray-400 uppercase">
            More from 취팡
          </p>
          <div className="grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
            {/* 채용 플랫폼 — 런칭 준비중 (링크 비공개) */}
            <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-8 py-6">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-1">
                  취업·채용 플랫폼
                </p>
                <p className="text-lg font-bold text-gray-900">취팡(Jobpang)</p>
                <p className="mt-1 text-sm text-gray-500">
                  15년 취업채용 노하우를 학습한 플랫폼
                </p>
              </div>
              <span className="text-[10px] font-bold tracking-widest text-gray-300 uppercase">Coming Soon</span>
            </div>

            {/* 블로그 */}
            <a
              href="https://blog.naver.com/jobprise"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-8 py-6 transition-all hover:border-gray-300 hover:shadow-md"
            >
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-1">
                  공식 블로그
                </p>
                <p className="text-lg font-bold text-gray-900">취팡 블로그</p>
                <p className="mt-1 text-sm text-gray-500">
                  창업·취업·커리어 인사이트를 공유해요
                </p>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-gray-300 transition-all group-hover:translate-x-1 group-hover:text-gray-600" />
            </a>
          </div>
        </div>
      </section>

      {/* ━━━ S7. CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden bg-white py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 60% 70% at 50% 110%, ${BRAND}12 0%, transparent 60%)`,
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            함께 만들어가요
          </h2>
          <p className="mt-6 text-xl text-gray-400">
            참여 신청, 제휴, 투자 상담
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-9 py-4 text-sm font-bold text-white transition-all hover:opacity-90"
              style={{
                backgroundColor: BRAND,
                boxShadow: `0 0 40px ${BRAND}30`,
              }}
            >
              문의하기 <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-9 py-4 text-sm font-semibold text-gray-600 transition-all hover:border-gray-300 hover:text-gray-900"
            >
              취팡 소개
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
