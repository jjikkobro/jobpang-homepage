import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Info,
  MapPin,
  Briefcase,
  Clock,
  MessageCircle,
  Laptop,
  Bot,
  Coffee,
  Banknote,
  BarChart3,
  Gift,
  Building2,
  Trees,
  Store,
  TrendingUp,
} from "lucide-react";
import { BRAND } from "../data";
import { getActivePositions, getPositionBySlug } from "@/lib/positions-server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getActivePositions().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pos = getPositionBySlug(slug);
  if (!pos) return {};
  return {
    title: `${pos.title} 채용 | 취팡`,
    description: `취팡 ${pos.title} 채용공고입니다. ${pos.tagline}`,
  };
}

const PROCESS_STEPS = [
  { label: "서류 전형", note: null },
  { label: "비대면 인터뷰\n+ 간단 과제", note: "서류 합격자에 한해 진행. 인터뷰 전 간단 사전 과제 안내" },
  { label: "대면 인터뷰", note: "직무 적합성 및 협업 방식을 종합 확인" },
];

const BENEFITS = [
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

const LOOKING_FOR = [
  "실행 중심으로 일하는 사람",
  "새로운 시도를 즐기는 사람",
  "AI와 새로운 도구 활용에 열린 사람",
  "작은 조직에서 큰 역할을 맡고 싶은 사람",
  "플랫폼 성장 과정에 참여하고 싶은 사람",
];

const ADJACENT_PATHS = [
  "개발 → 서비스 기획 전환",
  "PMO / 운영기획 → 서비스 운영 PM",
  "SNS 운영 → 콘텐츠 마케터",
  "광고 운영 → 퍼포먼스 마케터",
  "커뮤니티 운영 → 마케팅 매니저",
];

export default async function PositionDetailPage({ params }: Props) {
  const { slug } = await params;
  const pos = getPositionBySlug(slug);
  if (!pos) notFound();

  const positions = getActivePositions();
  const currentIdx = positions.findIndex((p) => p.slug === slug);
  const prevPos = currentIdx > 0 ? positions[currentIdx - 1] : null;
  const nextPos = currentIdx < positions.length - 1 ? positions[currentIdx + 1] : null;

  const hasDetail = !!(pos.whatYouDo || pos.requirements || pos.preferred);

  return (
    <>
      {/* ━━━ 헤더 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="border-b border-gray-200 bg-white py-10 lg:py-14">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <nav className="mb-6 flex items-center gap-1.5 text-xs text-gray-400">
            <Link href="/careers" className="hover:text-gray-700 transition-colors">
              채용공고
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gray-600">{pos.title}</span>
          </nav>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <span
                className="inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold mb-3"
                style={{ backgroundColor: `${BRAND}14`, color: BRAND }}
              >
                모집 중
              </span>
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {pos.title}
              </h1>
              <p className="mt-1.5 text-sm text-gray-500">{pos.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Briefcase className="h-3.5 w-3.5 text-gray-400" />
                  우대 경력 {pos.years}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-gray-500">
                  <MapPin className="h-3.5 w-3.5 text-gray-400" />
                  서울 중구 · 충무로역 도보 1분
                </span>
                <span className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Clock className="h-3.5 w-3.5 text-gray-400" />
                  하이브리드 근무
                </span>
              </div>
            </div>

            <div className="flex shrink-0 flex-col gap-2 sm:items-end">
              <a
                href="mailto:help@jobpang.co.kr"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: BRAND, boxShadow: `0 0 20px ${BRAND}35` }}
              >
                지원하기 <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:help@jobpang.co.kr"
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-gray-300 px-6 py-2.5 text-xs font-semibold text-gray-600 transition-all hover:border-gray-400 hover:text-gray-800"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                커피챗 문의
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ 본문 + 사이드바 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="bg-gray-50 py-10 lg:py-14">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">

            {/* ── 본문 ── */}
            <div className="space-y-5">

              {/* 이런 일을 합니다 */}
              {pos.whatYouDo ? (
                <Card>
                  <SectionHeader label="이런 일을 합니다" />
                  <ul className="mt-5 space-y-3">
                    {pos.whatYouDo.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CircleDot className="mt-0.5 h-4 w-4 shrink-0" style={{ color: BRAND }} />
                        <span className="text-sm leading-relaxed text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ) : !hasDetail ? (
                <Card>
                  <p className="text-center text-sm text-gray-500">
                    상세 업무 내용을 준비 중입니다.
                    <br />
                    궁금한 점은 커피챗이나 이메일로 편하게 문의해 주세요.
                  </p>
                  <div className="mt-4 text-center">
                    <a
                      href="mailto:help@jobpang.co.kr"
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white"
                      style={{ backgroundColor: BRAND }}
                    >
                      이메일 문의 <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </Card>
              ) : null}

              {/* 이런 분을 찾습니다 */}
              {pos.requirements && (
                <Card>
                  <SectionHeader label="이런 분을 찾습니다" />
                  <ul className="mt-5 space-y-3">
                    {pos.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: BRAND }} />
                        <span className="text-sm leading-relaxed text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              {/* 이런 분이면 더 좋습니다 */}
              {pos.preferred && (
                <Card>
                  <div className="flex items-baseline gap-2">
                    <SectionHeader label="이런 분이면 더 좋습니다" />
                    <span className="text-[11px] text-gray-400">필수 조건은 아닙니다</span>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {pos.preferred.map((pref) => (
                      <li key={pref} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
                        <span className="text-sm leading-relaxed text-gray-600">{pref}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              {/* 유관 경험 */}
              <Card>
                <SectionHeader label="유관 경험" />
                <div
                  className="mt-4 rounded-lg border-l-[3px] bg-gray-50 px-5 py-3.5"
                  style={{ borderLeftColor: BRAND }}
                >
                  <p className="text-sm leading-relaxed text-gray-700">{pos.experience}</p>
                </div>
              </Card>

              {/* 구직자 친화 안내 */}
              {pos.friendlyNote && (
                <div
                  className="flex gap-3 rounded-xl border p-5"
                  style={{ borderColor: `${BRAND}30`, backgroundColor: `${BRAND}07` }}
                >
                  <Info className="mt-0.5 h-4 w-4 shrink-0" style={{ color: BRAND }} />
                  <p className="text-sm leading-relaxed text-gray-700">{pos.friendlyNote}</p>
                </div>
              )}

              {/* 급여 & 보상 */}
              <Card>
                <SectionHeader label="급여 & 보상" />
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-gray-100 bg-gray-50 px-5 py-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">기본 급여</p>
                    <p className="text-base font-extrabold text-gray-900">연 3,600만원~</p>
                    <p className="mt-1 text-xs text-gray-500">신입 기준 · 경력 및 실무역량에 따라 협의</p>
                  </div>
                  <div className="rounded-lg border border-gray-100 bg-gray-50 px-5 py-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">추가 보상</p>
                    <ul className="space-y-1.5">
                      {[
                        "매달 리텐션 보너스 10만원",
                        "분기 성과급",
                        "연간 근속 리워드 (누적형)",
                        "엑시트 시 구성원 보상",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-gray-700">
                          <span className="h-1 w-1 rounded-full shrink-0" style={{ backgroundColor: BRAND }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>

              {/* 복지 */}
              <Card>
                <SectionHeader label="복지" />
                <ul className="mt-5 grid grid-cols-2 gap-2">
                  {BENEFITS.map(({ icon: Icon, label }) => (
                    <li
                      key={label}
                      className="flex items-center gap-2.5 rounded-lg border border-gray-100 bg-gray-50 px-4 py-3"
                    >
                      <Icon className="h-4 w-4 shrink-0" style={{ color: BRAND }} />
                      <span className="text-xs font-medium text-gray-700">{label}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* 일하는 방식 */}
              <Card>
                <SectionHeader label="일하는 방식" />
                <div className="mt-5 space-y-3">
                  <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div
                        className="flex h-7 w-7 items-center justify-center rounded-lg shrink-0"
                        style={{ backgroundColor: `${BRAND}14`, color: BRAND }}
                      >
                        <Laptop className="h-3.5 w-3.5" />
                      </div>
                      <p className="text-sm font-bold text-gray-900">하이브리드 근무</p>
                    </div>
                    <p className="text-xs leading-relaxed text-gray-500">
                      입사 초기 온보딩 기간에는 출근 중심으로 진행하며, 온보딩 이후에는
                      숙련도와 협업 상황에 따라 재택과 출근을 유연하게 병행합니다.
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div
                        className="flex h-7 w-7 items-center justify-center rounded-lg shrink-0"
                        style={{ backgroundColor: `${BRAND}14`, color: BRAND }}
                      >
                        <Bot className="h-3.5 w-3.5" />
                      </div>
                      <p className="text-sm font-bold text-gray-900">AI 기반 업무 환경</p>
                    </div>
                    <p className="text-xs leading-relaxed text-gray-500">
                      콘텐츠 제작, 마케팅 운영, 서비스 운영 등 다양한 영역에서 AI 도구와
                      자동화 시스템을 적극 활용합니다. 핵심 멤버가 AI 업무 효율화 온보딩을 직접 지원합니다.
                    </p>
                  </div>
                </div>
              </Card>

              {/* 취팡이 찾는 사람 */}
              <Card>
                <SectionHeader label="취팡이 찾는 사람 (공통)" />
                <ul className="mt-5 space-y-2">
                  {LOOKING_FOR.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 px-4 py-3"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: BRAND }} />
                      <span className="text-sm font-medium text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* 인접 직무 환영 */}
              <Card>
                <SectionHeader label="모든 조건을 완벽히 충족하지 않아도 됩니다" />
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  취팡은 직무명이나 연차보다{" "}
                  <strong className="text-gray-800">실제로 문제를 해결하고 실행해본 경험을 더 중요하게 봅니다.</strong>
                  {" "}인접 직무에서 유관 경험을 쌓은 분들도 충분히 지원 가능합니다.
                </p>
                <ul className="mt-4 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                  {ADJACENT_PATHS.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 rounded-lg border border-gray-100 bg-gray-50 px-3 py-2.5"
                    >
                      <TrendingUp className="h-3.5 w-3.5 shrink-0" style={{ color: BRAND }} />
                      <span className="text-xs text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* 채용 절차 */}
              <Card>
                <SectionHeader label="채용 절차" />
                <ol className="mt-5 space-y-3">
                  {PROCESS_STEPS.map((step, i) => (
                    <li key={step.label} className="flex gap-4">
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-black text-white"
                        style={{ backgroundColor: BRAND }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="pt-1">
                        <p className="text-sm font-semibold text-gray-800 whitespace-pre-line">
                          {step.label}
                        </p>
                        {step.note && (
                          <p className="mt-0.5 text-xs leading-relaxed text-gray-400">{step.note}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </Card>

              {/* 취팡 회사 소개 */}
              <Card>
                <SectionHeader label="취팡은 이런 팀입니다" />
                <div className="mt-5 space-y-3 text-sm leading-relaxed text-gray-700">
                  <p>
                    취팡은 &lsquo;초기 스타트업의 불안정&rsquo;을 파는 팀이 아니라,{" "}
                    <strong className="text-gray-900">&lsquo;3년 커리어 점프 구간&rsquo;을 설계한 팀입니다.</strong>
                  </p>
                  <p>
                    완전히 맨땅에서 시작하는 스타트업이 아니라,{" "}
                    <strong className="text-gray-900">이미 구축된 브랜드·콘텐츠 자산·회원 기반·업무 시스템 위에서 성장하는 플랫폼 팀</strong>입니다.
                  </p>
                  <p>
                    향후{" "}
                    <strong className="text-gray-900">3년 내 IPO 또는 엑시트를 포함한 성장 시나리오</strong>를
                    준비하고 있으며, 그 과정에서 계속 함께할 수도 있고 다음 커리어로 이동할 수도 있습니다.
                  </p>
                  <p
                    className="border-l-[3px] pl-4 py-0.5 font-semibold text-gray-900"
                    style={{ borderColor: BRAND }}
                  >
                    취팡에서의 3년은 단순한 회사 경력이 아니라{" "}
                    <strong style={{ color: BRAND }}>하나의 커리어 점프 구간이 될 수 있습니다.</strong>
                  </p>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[
                    { label: "의사결정 속도", sub: "빠른 실행" },
                    { label: "실행 중심 문화", sub: "결과로 증명" },
                    { label: "빠른 실험", sub: "도전과 학습" },
                  ].map(({ label, sub }) => (
                    <div
                      key={label}
                      className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-3.5 text-center"
                      style={{ borderTopWidth: "2px", borderTopColor: BRAND }}
                    >
                      <p className="text-xs font-bold text-gray-900">{label}</p>
                      <p className="mt-1 text-[11px] text-gray-400">{sub}</p>
                    </div>
                  ))}
                </div>
              </Card>

            </div>

            {/* ── 사이드바 (sticky) ── */}
            <aside className="space-y-4 lg:self-start lg:sticky lg:top-6">

              {/* 지원 카드 */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <p
                  className="mb-1 text-[11px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: BRAND }}
                >
                  지원하기
                </p>
                <p className="text-base font-extrabold text-gray-900">{pos.title}</p>
                <p className="mt-0.5 text-xs text-gray-400">우대 경력 {pos.years}</p>
                <div className="my-4 border-t border-gray-100" />
                <a
                  href="mailto:help@jobpang.co.kr"
                  className="flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: BRAND }}
                >
                  이메일로 지원하기 <ArrowRight className="h-4 w-4" />
                </a>
                <p className="mt-3 text-center text-[11px] text-gray-400 leading-relaxed">
                  help@jobpang.co.kr<br />
                  이력서 + 포트폴리오 + 지원 포지션 명시
                </p>
              </div>

              {/* 커피챗 */}
              <div
                className="rounded-xl border p-5"
                style={{ borderColor: `${BRAND}25`, backgroundColor: `${BRAND}06` }}
              >
                <p
                  className="mb-1 text-[11px] font-bold uppercase tracking-wider"
                  style={{ color: BRAND }}
                >
                  지원 전 고민된다면
                </p>
                <p className="text-xs leading-relaxed text-gray-600">
                  지원 여부가 아직 확실하지 않아도 괜찮습니다.
                  10분 커피챗으로 편하게 이야기 나눠보세요.
                </p>
                <a
                  href="mailto:help@jobpang.co.kr"
                  className="mt-3 flex items-center gap-1.5 text-xs font-bold"
                  style={{ color: BRAND }}
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  커피챗 신청하기
                </a>
              </div>

              {/* 다른 포지션 */}
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  다른 포지션
                </p>
                <ul className="space-y-1.5">
                  {positions
                    .filter((p) => p.slug !== slug)
                    .map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/careers/${p.slug}`}
                          className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
                        >
                          {p.title}
                          <ChevronRight className="h-3 w-3 text-gray-300" />
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

            </aside>
          </div>
        </div>
      </div>

      {/* ━━━ 하단 네비게이션 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="border-t border-gray-200 bg-white py-8">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              {prevPos ? (
                <Link
                  href={`/careers/${prevPos.slug}`}
                  className="group flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                  <span>
                    <span className="block text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">이전 포지션</span>
                    <span className="font-semibold">{prevPos.title}</span>
                  </span>
                </Link>
              ) : (
                <Link
                  href="/careers"
                  className="group flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                  채용공고 목록
                </Link>
              )}
            </div>
            <Link
              href="/careers"
              className="hidden text-xs font-medium text-gray-400 hover:text-gray-700 transition-colors sm:block"
            >
              모든 포지션 보기
            </Link>
            <div className="text-right">
              {nextPos && (
                <Link
                  href={`/careers/${nextPos.slug}`}
                  className="group flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <span>
                    <span className="block text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">다음 포지션</span>
                    <span className="font-semibold">{nextPos.title}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-white border border-gray-200 p-7">
      {children}
    </div>
  );
}

function SectionHeader({ label }: { label: string }) {
  return (
    <h2 className="inline-flex items-center gap-2 text-base font-extrabold text-gray-900">
      <span className="h-4 w-1 rounded-full shrink-0" style={{ backgroundColor: BRAND }} />
      {label}
    </h2>
  );
}
