import Link from "next/link";
import { ArrowRight, TrendingUp, Cpu, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// ── Seed 데이터 (추후 DB/CMS로 대체) ─────────────────────────────
const stats = [
  { label: "누적 회차", value: "2+" },
  { label: "누적 참가자", value: "100+" },
  { label: "파트너사", value: "10+" },
  { label: "멘토/심사", value: "20+" },
];

const categories = [
  {
    icon: TrendingUp,
    label: "창업/투자",
    href: "/venture",
    description: "사업 진단부터 IR 피칭, 투자 상담·연계까지 한 번에",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Cpu,
    label: "해커톤",
    href: "/hackathon",
    description: "실제 서비스 문제를 정의하고 개선안을 제안하는 실전형 해커톤",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: Users,
    label: "네트워킹",
    href: "/networking",
    description: "창업·N잡·부업·수익화 고민을 가진 사람들의 금요일 정기모임",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
];

const recentIssues = [
  {
    id: "hackathon-001",
    title: "제 1회 취팡 해커톤",
    category: "해커톤",
    status: "ongoing" as const,
    date: "2026.02.23 ~ 03.22",
    location: "온·오프라인 병행",
    highlight: "실제 서비스 문제 정의 · 개선안 기획 · 실전 포트폴리오",
    slug: "hackathon-001",
  },
  {
    id: "venture-001",
    title: "제 1회 창업 스타트업 투자 경진대회",
    category: "창업/투자",
    status: "past" as const,
    date: "2025.10.02 ~ 10.15",
    location: "구글 스타트업 캠퍼스(서울)",
    highlight: "투자자 오픈토크 · IR 피칭 · 최종 발표 및 협약",
    slug: "venture-001",
  },
];

const statusMap = {
  ongoing: { label: "진행중", className: "bg-primary text-white" },
  upcoming: { label: "예정", className: "bg-yellow-500 text-white" },
  past: { label: "종료", className: "bg-muted text-muted-foreground" },
};

// ─────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* S1. Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FF0092]/10 via-white to-violet-50 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold tracking-widest text-primary uppercase">
              jobpang · 취팡
            </p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              창업·해커톤·네트워킹을
              <br />
              <span className="text-primary">직접 운영</span>합니다
            </h1>
            <p className="mt-5 text-lg text-muted-foreground sm:text-xl">
              회차별 누적 아카이브로 검증되는 실전 프로그램
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  다음 회차 참여/신청
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/archive">회차 아카이브 보기</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* 장식용 원 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-primary/10 blur-3xl"
        />
      </section>

      {/* S2. 카테고리 카드 */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-3 text-2xl font-bold text-center">
            취팡이 운영하는 3가지 프로그램
          </h2>
          <p className="mb-10 text-center text-muted-foreground">
            각 프로그램은 독립적으로 운영되며 회차마다 누적됩니다
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="group flex flex-col gap-4 rounded-2xl border border-border p-6 transition-shadow hover:shadow-md"
                >
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${cat.bg}`}
                  >
                    <Icon className={`h-6 w-6 ${cat.color}`} />
                  </div>
                  <div>
                    <p className="text-lg font-bold">{cat.label}</p>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  <span className="mt-auto flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    자세히 보기 <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* S3. 누적 지표 */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4 text-center text-white">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-sm font-medium opacity-80">{s.label}</dt>
                <dd className="mt-1 text-4xl font-extrabold">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* S4. 최근 회차 아카이브 */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold">최근 회차</h2>
              <p className="mt-1 text-muted-foreground">
                지나간 회차의 성과와 현장을 확인하세요
              </p>
            </div>
            <Link
              href="/archive"
              className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              전체 보기 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {recentIssues.map((issue) => {
              const st = statusMap[issue.status];
              return (
                <Link
                  key={issue.id}
                  href={`/archive/${issue.slug}`}
                  className="group flex flex-col gap-3 rounded-2xl border bg-white p-6 transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${st.className}`}
                    >
                      {st.label}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {issue.category}
                    </span>
                  </div>
                  <p className="text-lg font-bold leading-snug group-hover:text-primary transition-colors">
                    {issue.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {issue.date} · {issue.location}
                  </p>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {issue.highlight}
                  </p>
                  <span className="mt-auto flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    자세히 보기 <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* S5. 네트워킹 하이라이트 */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 sm:p-12">
            <Badge
              variant="secondary"
              className="mb-4 text-emerald-700 bg-emerald-100"
            >
              매주 금요일 19:00 ~ 22:00
            </Badge>
            <h2 className="text-2xl font-bold sm:text-3xl">
              금요일 정기 네트워킹 모임
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl">
              창업·N잡·부업·수익화·커리어 고민을 가진 사람들이 모입니다.
              4주 챌린지, 목표 공유, 브랜딩 세미나, 수주·사업 연결까지.{" "}
              <strong>엔젤 투자 상담도 가능합니다.</strong>
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                <Link href="/networking/weekly">
                  정기모임 안내 보기 <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/networking">네트워킹 소개</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* S6. 최하단 CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            참여 · 제휴 · 후원 문의
          </h2>
          <p className="mt-4 text-lg opacity-75">
            다음 회차에 함께하고 싶거나, 파트너십을 원하신다면 편하게 연락주세요
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-primary text-white hover:bg-primary/90"
            >
              <Link href="/contact">
                문의하기 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
