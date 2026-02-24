import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  Mic,
  Handshake,
  Users,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { getIssuesByCategory, STATUS_LABEL } from "@/lib/data";

export const metadata: Metadata = {
  title: "창업/투자 | 취팡",
  description:
    "사업 진단부터 IR 피칭, 투자 상담·연계, 네트워킹까지. 취팡 창업/투자 경진대회 프로그램을 소개합니다.",
};

// ── 페이지 전용 상수 ──────────────────────────────────────────────
const ACCENT = "#e20871";

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
  "투자자 오픈토크 — 현직 투자자의 투자 관점 강의",
  "비대면 IR 피칭 — 온라인 예선 발표 및 피드백",
  "오프라인 최종 발표 — 구글 스타트업 캠퍼스 등 현장 진행",
  "1:1 투자 상담 — 관심 투자자와의 개별 면담",
  "참가팀 네트워킹 — 협업·파트너십 연결",
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

// ─────────────────────────────────────────────────────────────────

export default function VenturePage() {
  const ventureIssues = getIssuesByCategory("venture");

  return (
    <>
      {/* ━━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden bg-[#0a0a0a] pb-24 pt-20">
        {/* 배경 글로우 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 60% 70% at 70% 50%, ${ACCENT}22 0%, transparent 65%)`,
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* 브레드크럼 */}
          <nav className="mb-10 flex items-center gap-1.5 text-xs text-white/30">
            <Link href="/" className="hover:text-white/60 transition-colors">홈</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/60">창업/투자</span>
          </nav>

          <div className="max-w-2xl">
            <span
              className="mb-5 inline-block text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: ACCENT }}
            >
              Venture · 창업/투자
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              사업을 키우는
              <br />
              가장 실전적인
              <br />
              <span style={{ color: ACCENT }}>방법</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/55">
              사업 진단 → IR 피칭 → 투자 상담 → 네트워킹까지.
              <br />
              실제 투자자와 만나는 경험을 제공합니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:opacity-90"
                style={{
                  backgroundColor: ACCENT,
                  boxShadow: `0 8px 24px ${ACCENT}40`,
                }}
              >
                참여 문의 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/archive?category=venture"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white/75 transition-all hover:bg-white/10 hover:text-white"
              >
                회차 아카이브
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ 진행 방식 (4단계 플로우) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <p
              className="mb-3 text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: ACCENT }}
            >
              How it works
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              진행 방식
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              4단계 구조로 IR 경험부터 투자 연계까지 체계적으로 진행합니다
            </p>
          </div>

          <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {flow.map((item, idx) => {
              const Icon = item.icon;
              const isLast = idx === flow.length - 1;
              return (
                <div key={item.step} className="relative flex flex-col gap-5 p-8 lg:p-10">
                  {/* 연결선 (마지막 제외) */}
                  {!isLast && (
                    <div
                      aria-hidden="true"
                      className="absolute right-0 top-[52px] hidden h-px w-8 lg:block"
                      style={{ backgroundColor: `${ACCENT}30` }}
                    />
                  )}
                  {/* 스텝 번호 */}
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${ACCENT}10`, color: ACCENT }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span
                      className="text-xs font-bold tracking-widest"
                      style={{ color: `${ACCENT}80` }}
                    >
                      STEP {item.step}
                    </span>
                  </div>
                  <div>
                    <p className="text-lg font-bold">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━ 프로그램 구성 + 대상 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#f7f7f7] py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* 프로그램 */}
            <div>
              <p
                className="mb-3 text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: ACCENT }}
              >
                Program
              </p>
              <h2 className="mb-8 text-3xl font-extrabold tracking-tight sm:text-4xl">
                프로그램 구성
              </h2>
              <ul className="flex flex-col gap-3">
                {programs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0"
                      style={{ color: ACCENT }}
                    />
                    <span className="text-sm leading-relaxed text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 대상 */}
            <div>
              <p
                className="mb-3 text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: ACCENT }}
              >
                Who should apply
              </p>
              <h2 className="mb-8 text-3xl font-extrabold tracking-tight sm:text-4xl">
                추천 대상
              </h2>
              <ul className="flex flex-col gap-3">
                {targets.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-border bg-white px-5 py-4"
                  >
                    <ArrowRight
                      className="mt-0.5 h-4 w-4 shrink-0"
                      style={{ color: ACCENT }}
                    />
                    <span className="text-sm font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ 최근 회차 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {ventureIssues.length > 0 && (
        <section className="bg-white py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <p
                  className="mb-3 text-xs font-bold tracking-[0.2em] uppercase"
                  style={{ color: ACCENT }}
                >
                  Archive
                </p>
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  지난 회차
                </h2>
              </div>
              <Link
                href="/archive?category=venture"
                className="hidden items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary sm:flex"
              >
                전체 보기 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex flex-col divide-y divide-border border-y border-border">
              {ventureIssues.map((issue) => (
                <Link
                  key={issue.issueId}
                  href={`/archive/${issue.issueId}`}
                  className="group flex flex-col gap-3 py-7 sm:flex-row sm:items-center sm:gap-8"
                >
                  <div className="w-20 shrink-0">
                    {issue.status === "ongoing" ? (
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold text-white"
                        style={{ backgroundColor: ACCENT }}
                      >
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                        진행중
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                        {STATUS_LABEL[issue.status]}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-bold transition-colors group-hover:text-primary sm:text-xl">
                      {issue.title}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {issue.startDate} — {issue.endDate} &nbsp;·&nbsp; {issue.location}
                    </p>
                  </div>
                  <ArrowRight className="hidden h-5 w-5 shrink-0 text-muted-foreground/40 transition-all group-hover:translate-x-1 group-hover:text-primary sm:block" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ━━━ FAQ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#f7f7f7] py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-12">
            <p
              className="mb-3 text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: ACCENT }}
            >
              FAQ
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              자주 묻는 질문
            </h2>
          </div>

          <dl className="flex flex-col divide-y divide-border">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-7">
                <dt className="text-base font-bold text-foreground">{faq.q}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ━━━ CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden bg-[#0a0a0a] py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 50% 80% at 50% 100%, ${ACCENT}18 0%, transparent 60%)`,
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            다음 회차에 지원하세요
          </h2>
          <p className="mt-5 text-lg text-white/50">
            취팡 창업/투자 프로그램 참여 신청 및 제휴 문의를 받습니다
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white shadow-lg transition-all hover:opacity-90"
              style={{
                backgroundColor: ACCENT,
                boxShadow: `0 8px 24px ${ACCENT}40`,
              }}
            >
              참여 문의 <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/archive?category=venture"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white/70 transition-all hover:bg-white/10 hover:text-white"
            >
              지난 회차 보기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
