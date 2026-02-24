import Link from "next/link";
import { ArrowRight, TrendingUp, Cpu, Users, ChevronDown } from "lucide-react";

// ── Seed 데이터 (추후 DB로 대체) ──────────────────────────────────
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
    description:
      "사업 진단부터 IR 피칭, 투자 상담·연계까지. 초기 ~ 시리즈A 스타트업/예비창업팀 대상.",
    tag: "VENTURE",
    num: "01",
    accent: "#e20871",          // 브랜드 핑크
    accentBg: "rgba(226,8,113,0.06)",
  },
  {
    icon: Cpu,
    label: "해커톤",
    href: "/hackathon",
    description:
      "실제 서비스의 문제를 정의하고 개선안을 제안하는 실전형 해커톤. PM/기획 관심자 환영.",
    tag: "HACKATHON",
    num: "02",
    accent: "#2563eb",          // 블루
    accentBg: "rgba(37,99,235,0.06)",
  },
  {
    icon: Users,
    label: "네트워킹",
    href: "/networking",
    description:
      "창업·N잡·부업·수익화 고민을 가진 사람들의 금요일 정기모임. 엔젤 투자 상담 가능.",
    tag: "NETWORKING",
    num: "03",
    accent: "#059669",          // 에메랄드
    accentBg: "rgba(5,150,105,0.06)",
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

// ─────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          S1. HERO — 풀 뷰포트
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative flex min-h-[calc(100vh-72px)] flex-col justify-center overflow-hidden bg-[#0a0a0a]">
        {/* 배경 그라디언트 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(226,8,113,0.18) 0%, transparent 70%)",
          }}
        />
        {/* 그리드 텍스처 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            {/* 현재 진행중 배지 */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                지금 진행중 — 제 1회 취팡 해커톤
              </span>
            </div>

            <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
              창업·해커톤·
              <br />
              네트워킹을
              <br />
              <span
                style={{ color: "#e20871" }}
                className="inline-block"
              >
                직접 운영
              </span>
              합니다
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/60 sm:text-xl">
              회차별 누적 아카이브로 검증되는 실전 프로그램.
              <br />
              참가자와 파트너, 투자자가 모이는 곳.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:shadow-primary/40 hover:shadow-xl"
              >
                다음 회차 참여/신청
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/archive"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white/80 transition-all hover:bg-white/10 hover:text-white"
              >
                회차 아카이브 보기
              </Link>
            </div>
          </div>
        </div>

        {/* 스크롤 인디케이터 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-[10px] tracking-[0.2em] uppercase">scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          S2. 카테고리
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-primary uppercase">
              Programs
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              3가지 프로그램
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              각 프로그램은 독립적으로 운영되며 회차마다 아카이브됩니다
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-lg"
                >
                  {/* 상단 컬러 스트립 */}
                  <div
                    className="h-1.5 w-full"
                    style={{ backgroundColor: cat.accent }}
                  />

                  <div className="flex flex-col gap-5 p-8">
                    {/* 번호 + 아이콘 */}
                    <div className="flex items-start justify-between">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-xl"
                        style={{ backgroundColor: cat.accentBg, color: cat.accent }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span
                        className="text-3xl font-black opacity-10"
                        style={{ color: cat.accent }}
                      >
                        {cat.num}
                      </span>
                    </div>

                    {/* 태그 */}
                    <span
                      className="text-[10px] font-bold tracking-[0.18em] uppercase"
                      style={{ color: cat.accent }}
                    >
                      {cat.tag}
                    </span>

                    {/* 텍스트 */}
                    <div className="flex-1">
                      <p className="text-xl font-bold text-foreground">{cat.label}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {cat.description}
                      </p>
                    </div>

                    {/* 하단 링크 */}
                    <div
                      className="flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5"
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

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          S3. 누적 지표
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#0a0a0a] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-3 gap-12">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-2">
                <dd className="text-5xl font-extrabold text-white">{s.value}</dd>
                <dt className="text-sm font-medium text-white/40">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          S4. 최근 회차
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#f7f7f7] py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="mb-3 text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Archive
              </p>
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                최근 회차
              </h2>
            </div>
            <Link
              href="/archive"
              className="hidden items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors sm:flex"
            >
              전체 보기 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex flex-col divide-y divide-border border-y border-border">
            {recentIssues.map((issue) => (
              <Link
                key={issue.id}
                href={`/archive/${issue.slug}`}
                className="group flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:gap-8"
              >
                {/* 상태 배지 */}
                <div className="w-20 shrink-0">
                  {issue.status === "ongoing" ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                      진행중
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                      종료
                    </span>
                  )}
                </div>

                {/* 제목 */}
                <div className="flex-1">
                  <p className="text-lg font-bold text-foreground transition-colors group-hover:text-primary sm:text-xl">
                    {issue.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {issue.date} &nbsp;·&nbsp; {issue.location}
                  </p>
                </div>

                {/* 카테고리 + 화살표 */}
                <div className="flex items-center gap-4 sm:shrink-0">
                  <span className="text-xs font-semibold tracking-widest text-muted-foreground/60 uppercase">
                    {issue.category}
                  </span>
                  <ArrowRight className="h-5 w-5 text-muted-foreground/40 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <Link
              href="/archive"
              className="flex items-center gap-1.5 text-sm font-semibold text-foreground"
            >
              전체 보기 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          S5. 네트워킹 하이라이트
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* 왼쪽: 텍스트 */}
            <div>
              <p className="mb-3 text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Networking
              </p>
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                금요일마다
                <br />
                만나는 모임
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                창업·N잡·부업·수익화·커리어 고민을 가진 사람들이 매주
                금요일 오후 7시에 모입니다.
                <br className="hidden sm:block" />
                <span className="font-semibold text-foreground">
                  {" "}엔젤 투자 상담도 가능합니다.
                </span>
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/networking/weekly"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-bold text-background transition-colors hover:bg-foreground/90"
                >
                  정기모임 안내 <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/networking"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                >
                  네트워킹 소개
                </Link>
              </div>
            </div>

            {/* 오른쪽: 프로그램 리스트 */}
            <div className="flex flex-col gap-4">
              {[
                { num: "01", title: "4주 챌린지", desc: "목표 설정 · 실행 점검 · 공유" },
                { num: "02", title: "브랜딩 / 창업 세미나", desc: "실전 인사이트를 공유하는 세미나" },
                { num: "03", title: "수주 · 사업 연결", desc: "참가자 간 비즈니스 매칭 네트워킹" },
                { num: "04", title: "엔젤 투자 상담", desc: "전문개인투자자 자격 보유, 별도 상담 가능" },
              ].map((item) => (
                <div
                  key={item.num}
                  className="flex items-start gap-5 rounded-xl border border-border bg-[#f7f7f7] px-6 py-5"
                >
                  <span className="text-xs font-bold tracking-widest text-primary/60 uppercase mt-0.5">
                    {item.num}
                  </span>
                  <div>
                    <p className="font-bold text-foreground">{item.title}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
              <div className="rounded-xl border border-primary/20 bg-primary/5 px-6 py-4 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-semibold text-primary">
                  매주 금요일 오후 7시 ~ 10시
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          S6. CTA
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden bg-[#0a0a0a] py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(226,8,113,0.15) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            함께 만들어가요
          </h2>
          <p className="mt-6 text-lg text-white/50">
            참여 신청, 제휴, 후원, 투자 상담 모두 문의해 주세요
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:shadow-primary/50 hover:shadow-xl"
            >
              문의하기 <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white/70 transition-all hover:bg-white/10 hover:text-white"
            >
              취팡 소개
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
