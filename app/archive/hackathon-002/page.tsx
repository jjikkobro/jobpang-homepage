import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Calendar,
  MapPin,
  Users,
  Trophy,
  Target,
  ClipboardList,
  GitBranch,
  BarChart2,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "제 2회 취팡 서비스기획&마케팅 해커톤 | 취팡",
  description:
    "진단 결과 공유로 유입을 만들고 7일 구직 루틴을 설계하는 성장 루프 공모전. 대상 700만원.",
};

const ACCENT = "#2563eb";
// 구글폼 신청 링크 — 확정 후 아래 URL 교체
const APPLY_URL = "";

const schedule = [
  { date: "3/30(일) 이전", label: "팀빌딩 희망자 신청 권장", status: "done" },
  { date: "3/30(일) ~ 4/6(일)", label: "팀빌딩 기간", status: "current" },
  { date: "4/6(일) 23:59", label: "지원 마감", status: "current" },
  { date: "4/7(월) ~ 4/20(일)", label: "공모전 운영 기간 (2주)", status: "upcoming" },
  { date: "4/20(일) 23:59", label: "최종 제출 마감", status: "upcoming" },
];

const flow = [
  {
    step: "01",
    title: "공유 → 유입",
    desc: "공유 결과를 본 유저 B가 "바로 진단해보고 싶다"고 느끼게 만들기",
  },
  {
    step: "02",
    title: "유입 → 가입",
    desc: "진단을 시작하고 자연스럽게 가입까지 이어지게 만들기 — "가입해야 하는 이유"가 설득되게",
  },
  {
    step: "03",
    title: "가입 → 첫 행동 (3분)",
    desc: "가입 후 3분 안에 첫 행동 1개를 하게 만들기 (오늘 할 일 완료 / 공고 저장 / 지원 전략 체크 등)",
  },
  {
    step: "04",
    title: "첫 행동 → 7일 루틴",
    desc: "7일 동안 취팡의 매력을 한 번에 느끼도록 미션·알림·보상·콘텐츠 흐름을 설계하기",
  },
];

const targets = [
  "서비스 기획 (PM/PO 포함)",
  "UX/UI 디자인",
  "콘텐츠/퍼포먼스 마케팅",
  "CRM/리텐션 운영",
  "커뮤니티/채널 운영",
];

const requiredDeliverables = [
  {
    num: "01",
    title: "루프 1장 요약",
    desc: "공유→유입→가입→루틴 전체 흐름을 한 장으로 압축",
  },
  {
    num: "02",
    title: "핵심 화면/플로우 6장",
    desc: "최소 포함: 진단결과 → 공유 → 가입 → 미션(오늘 할 일) · Figma가 아닌 PPT 와이어프레임 OK",
  },
  {
    num: "03",
    title: "7일 운영 플랜 (D0~D7)",
    desc: "언제/누구에게/무슨 메시지(알림·카톡·메일 등) · 세그먼트 2개 이상 포함",
  },
  {
    num: "04",
    title: "KPI 5개 + A/B 실험 2개",
    desc: "KPI 정의 + 성공 기준 + 측정 위치 포함",
  },
];

const optionalDeliverables = [
  "공유 카드 3종 + 카피 10개",
  "리워드/추천 정책 + 악용 방지 룰",
  "VOC 수집/분류 + 커뮤니티 운영안 + FAQ",
  "2주 실행 캘린더 + R&R + 주간 리포트 템플릿",
];

const criteria = [
  { icon: Target, label: "실행 가능성", desc: "지금 당장 운영으로 돌릴 수 있는가" },
  { icon: GitBranch, label: "전환 설계력", desc: "유입이 "첫 행동"으로 이어지는가" },
  { icon: ArrowRight, label: "리텐션/CRM 설계", desc: "7일 루프가 끊기지 않는가" },
  { icon: BarChart2, label: "측정/실험 감각", desc: "KPI와 A/B가 구체적인가" },
  { icon: ClipboardList, label: "완성도/명료함", desc: "한 장 요약과 흐름이 이해되는가" },
];

const prizes = [
  { rank: "대상", amount: "700만원", color: "#f59e0b" },
  { rank: "최우수상", amount: "300만원", color: "#9ca3af" },
  { rank: "우수상", amount: "100만원", color: "#d97706" },
];

const benefits = [
  {
    icon: Star,
    title: "350만원 상당 취업 컨설팅",
    items: [
      "이력서·자기소개서 1:1 첨삭",
      "직무 및 커리어 전략 컨설팅",
      "개인별 취업 방향성 진단",
    ],
    note: "현금 지급이 아닌 실제 컨설팅 서비스 제공 형태",
  },
  {
    icon: Users,
    title: "기업 네트워크 기반 채용 추천 기회",
    items: [
      "희망자에 한해 자체 기업 네트워크 기반 채용 추천 기회 제공",
    ],
    note: "채용 보장 아님 · 개인 역량 및 기업 상황에 따라 달라질 수 있음",
  },
  {
    icon: Target,
    title: "취팡 서비스 기획 실사용 검토",
    items: [
      "대상·최우수상 기획안 PoC 또는 내부 테스트 형태 활용 검토",
      "희망자에 한해 취팡 서비스 기획/PM 프로젝트 팀 단기 협업 기회",
    ],
    note: "채용이 아닌 프로젝트 단위 협업 기회",
  },
  {
    icon: Trophy,
    title: "공식 수상 인증 및 포트폴리오 활용",
    items: [
      "공식 수상 인증서 발급",
      "'취팡 서비스 기획 공모전 수상' 이력 활용 가능",
      "수상작 일부 취팡 공식 채널 소개",
    ],
    note: "",
  },
];

export default function Hackathon002Page() {
  return (
    <>
      {/* ━━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden bg-black pb-28 pt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 55% 60% at 65% 50%, ${ACCENT}1a 0%, transparent 65%)`,
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
            <Link href="/archive" className="hover:text-white/50 transition-colors">아카이브</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/50">제 2회 해커톤</span>
          </nav>

          <div className="max-w-3xl">
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-xs font-bold text-white">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                모집중
              </span>
              <span
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: `${ACCENT}99` }}
              >
                Hackathon · 제 2회
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              서비스기획&amp;마케팅
              <br />
              <span style={{ color: ACCENT }}>해커톤 2기</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/50">
              진단 결과 공유로 유입을 만들고,
              <br />
              7일 구직 루틴을 설계하는 성장 루프 공모전
            </p>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-white/40">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>2026-03-09 — 2026-04-20</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>온라인</span>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              {APPLY_URL ? (
                <a
                  href={APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: ACCENT, boxShadow: `0 0 32px ${ACCENT}40` }}
                >
                  지금 신청하기 <ExternalLink className="h-4 w-4" />
                </a>
              ) : (
                <span
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white/50 cursor-not-allowed"
                  style={{ backgroundColor: `${ACCENT}40` }}
                >
                  신청 링크 준비중
                </span>
              )}
              <Link
                href="/archive?category=hackathon"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white/60 transition-all hover:border-white/30 hover:text-white"
              >
                전체 해커톤 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ 미션 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p
              className="mb-4 text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: ACCENT }}
            >
              Mission
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              이번 공모전의 과제
            </h2>
          </div>

          <div
            className="mx-auto max-w-4xl rounded-2xl border p-10 text-center"
            style={{ borderColor: `${ACCENT}30`, backgroundColor: `${ACCENT}06` }}
          >
            <p
              className="mb-4 text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: ACCENT }}
            >
              핵심 미션
            </p>
            <p className="text-2xl font-bold leading-relaxed text-gray-900 sm:text-3xl">
              &quot;공유된 스펙진단 하나가,
              <br />
              다음 유저를 데려오고
              <br />
              <span style={{ color: ACCENT }}>7일 루틴을 만들게 하라&quot;</span>
            </p>
            <p className="mt-6 text-base leading-relaxed text-gray-500">
              취팡에서 스펙 진단 결과를 공유한 유저 A가 SNS에 결과를 올립니다.
              <br />
              그 게시물을 본 유저 B가 "나도 해보고 싶다"고 느끼게 하고,
              <br />
              가입 후 7일 동안 자연스럽게 구직 습관이 생기게 만드세요.
            </p>
          </div>

          {/* 4단계 Flow */}
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {flow.map((item) => (
              <div
                key={item.step}
                className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-7"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-bold tracking-widest uppercase"
                    style={{ color: ACCENT }}
                  >
                    STEP {item.step}
                  </span>
                  <span
                    className="text-4xl font-black opacity-[0.06] select-none"
                    style={{ color: ACCENT }}
                  >
                    {item.step}
                  </span>
                </div>
                <div>
                  <p className="mb-2 text-base font-bold text-gray-900">{item.title}</p>
                  <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ 일정 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-gray-50 py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p
              className="mb-4 text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: ACCENT }}
            >
              Schedule
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              진행 일정
            </h2>
          </div>

          <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white">
            {schedule.map((item, i, arr) => (
              <div
                key={i}
                className={`flex items-center gap-6 px-8 py-6 ${
                  i < arr.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="shrink-0">
                  {item.status === "current" ? (
                    <span
                      className="flex h-2.5 w-2.5 rounded-full animate-pulse"
                      style={{ backgroundColor: ACCENT }}
                    />
                  ) : item.status === "done" ? (
                    <span className="flex h-2.5 w-2.5 rounded-full bg-gray-300" />
                  ) : (
                    <span className="flex h-2.5 w-2.5 rounded-full border border-gray-300" />
                  )}
                </div>
                <span
                  className="w-44 shrink-0 text-sm font-bold tabular-nums"
                  style={{
                    color:
                      item.status === "current"
                        ? ACCENT
                        : item.status === "done"
                        ? "#9ca3af"
                        : "#6b7280",
                  }}
                >
                  {item.date}
                </span>
                <span
                  className={`text-base font-medium ${
                    item.status === "current"
                      ? "text-gray-900"
                      : item.status === "done"
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  {item.label}
                </span>
                {item.status === "current" && item.date.includes("4/6") && (
                  <span
                    className="ml-auto shrink-0 rounded-full px-3 py-1 text-xs font-bold text-white"
                    style={{ backgroundColor: ACCENT }}
                  >
                    마감 임박
                  </span>
                )}
              </div>
            ))}
          </div>

          <p className="mt-5 text-center text-sm text-gray-400">
            ✅ 팀빌딩 희망자는 <strong className="text-gray-600">3/30(일) 이전 신청</strong>을 권장합니다.
            팀빌딩이 되지 않아도 개인 참가로 그대로 참여할 수 있습니다.
          </p>
        </div>
      </section>

      {/* ━━━ 추천 대상 & 팀빌딩 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p
              className="mb-4 text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: ACCENT }}
            >
              Who Should Apply
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              추천 대상 & 팀빌딩
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* 추천 대상 */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 sm:p-10">
              <p
                className="mb-6 text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: ACCENT }}
              >
                추천 분야
              </p>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                학력·경력 관계없이 누구나
              </h3>
              <p className="mb-8 text-sm text-gray-500">
                아래 분야에 관심 있거나 경험이 있다면 참여 가능합니다.
                개인/팀 참가 모두 가능합니다.
              </p>
              <ul className="flex flex-col gap-3">
                {targets.map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-4"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: ACCENT }}
                    />
                    <span className="text-sm font-medium text-gray-700">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 팀빌딩 안내 */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 sm:p-10">
              <p
                className="mb-6 text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: ACCENT }}
              >
                Team Building
              </p>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                개인 참가자 팀빌딩 지원
              </h3>
              <p className="mb-8 text-sm text-gray-500">
                개인 참가자에게 자기 PR을 올릴 수 있는 공개 팀빌딩 페이지를 제공합니다.
              </p>
              <ol className="flex flex-col gap-5">
                {[
                  { num: "01", title: "자기 PR 작성", desc: "팀빌딩 페이지에 본인 역량과 역할 희망을 작성" },
                  { num: "02", title: "팀원 모집/합류", desc: "3/30 ~ 4/6 동안 팀을 꾸리거나 기존 팀에 합류" },
                  { num: "03", title: "개인 참가로 전환 가능", desc: "팀빌딩이 되지 않아도 개인 참가로 최종 제출 가능" },
                ].map((step) => (
                  <li key={step.num} className="flex items-start gap-4">
                    <span
                      className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
                      style={{ backgroundColor: ACCENT }}
                    >
                      {step.num}
                    </span>
                    <div>
                      <p className="font-bold text-gray-900">{step.title}</p>
                      <p className="text-sm text-gray-500">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ 제출물 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-gray-50 py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p
              className="mb-4 text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: ACCENT }}
            >
              Deliverables
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              제출물 안내
            </h2>
            <p className="mt-4 text-gray-400">
              PDF 10장 이내 권장 · 개인/팀 동일 기준
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* 필수 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 sm:p-10">
              <p
                className="mb-6 text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: ACCENT }}
              >
                ✅ 공통 필수 제출물 (4개)
              </p>
              <ul className="flex flex-col gap-6">
                {requiredDeliverables.map((item) => (
                  <li key={item.num} className="flex items-start gap-4">
                    <span
                      className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
                      style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}
                    >
                      {item.num}
                    </span>
                    <div>
                      <p className="font-bold text-gray-900">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-gray-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* 선택 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 sm:p-10">
              <p
                className="mb-6 text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: `${ACCENT}80` }}
              >
                ➕ 선택 확장 제출물 (팀 추천)
              </p>
              <ul className="flex flex-col gap-3">
                {optionalDeliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 px-5 py-4"
                  >
                    <span
                      className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: `${ACCENT}60` }}
                    />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <div
                className="mt-8 rounded-xl border p-5"
                style={{ borderColor: `${ACCENT}20`, backgroundColor: `${ACCENT}06` }}
              >
                <p className="text-sm font-bold text-gray-900">제출 형식</p>
                <p className="mt-1 text-sm text-gray-500">
                  PDF 10장 이내 권장
                  <br />
                  파일명: 취팡_서비스기획마케팅공모전_팀명(or개인명).pdf
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ 심사 기준 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p
              className="mb-4 text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: ACCENT }}
            >
              Criteria
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              심사 기준
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {criteria.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-7"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${ACCENT}10`, color: ACCENT }}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <span
                      className="text-3xl font-black opacity-[0.06] select-none"
                      style={{ color: ACCENT }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{item.label}</p>
                    <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━ 시상 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-gray-50 py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p
              className="mb-4 text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: ACCENT }}
            >
              Prize
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              시상 규모
            </h2>
            <p className="mt-4 text-gray-400">※ 제세공과금은 수상팀 부담</p>
          </div>

          {/* 상금 카드 */}
          <div className="mb-16 grid gap-5 sm:grid-cols-3">
            {prizes.map((prize) => (
              <div
                key={prize.rank}
                className="flex flex-col items-center rounded-2xl border bg-white p-10 text-center"
                style={{ borderColor: `${prize.color}30` }}
              >
                <Trophy
                  className="mb-4 h-8 w-8"
                  style={{ color: prize.color }}
                />
                <p
                  className="mb-2 text-sm font-bold tracking-[0.15em] uppercase"
                  style={{ color: prize.color }}
                >
                  {prize.rank}
                </p>
                <p className="text-4xl font-extrabold text-gray-900">{prize.amount}</p>
              </div>
            ))}
          </div>

          {/* 수상 특전 */}
          <div className="mb-8 text-center">
            <p
              className="mb-2 text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: ACCENT }}
            >
              Benefits
            </p>
            <h3 className="text-3xl font-extrabold text-gray-900">수상 특전</h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="rounded-2xl border border-gray-200 bg-white p-8"
                >
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${ACCENT}10`, color: ACCENT }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mb-3 font-bold text-gray-900">{b.title}</p>
                  <ul className="flex flex-col gap-2">
                    {b.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: ACCENT }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {b.note && (
                    <p className="mt-4 text-xs text-gray-400">※ {b.note}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━ CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden bg-black py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 55% 65% at 50% 110%, ${ACCENT}18 0%, transparent 60%)`,
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p
            className="mb-4 text-xs font-bold tracking-[0.25em] uppercase"
            style={{ color: ACCENT }}
          >
            지원 마감 2026.04.06
          </p>
          <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
            성장 루프를
            <br />
            직접 설계하세요
          </h2>
          <p className="mt-6 text-lg text-white/40">
            문의: help@jobpang.co.kr
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {APPLY_URL ? (
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-9 py-4 text-sm font-bold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: ACCENT, boxShadow: `0 0 40px ${ACCENT}30` }}
              >
                지금 신청하기 <ExternalLink className="h-4 w-4" />
              </a>
            ) : (
              <span
                className="inline-flex items-center gap-2 rounded-full px-9 py-4 text-sm font-bold text-white/50"
                style={{ backgroundColor: `${ACCENT}40` }}
              >
                신청 링크 준비중
              </span>
            )}
            <Link
              href="/archive?category=hackathon"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-9 py-4 text-sm font-semibold text-white/60 transition-all hover:border-white/30 hover:text-white"
            >
              전체 해커톤 보기
            </Link>
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
            href="/hackathon"
            className="flex items-center gap-1.5 text-sm font-semibold transition-colors hover:opacity-80"
            style={{ color: ACCENT }}
          >
            해커톤 소개 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
