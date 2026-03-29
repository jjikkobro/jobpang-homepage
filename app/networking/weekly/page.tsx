import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, MapPin, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "금요 정기모임 안내 | 취팡 네트워킹",
  description:
    "창업·N잡·수익화 고민을 가진 사람들의 금요일 정기모임. 매주 금요일 오후 7시~10시, 서울.",
};

const ACCENT = "#059669";

const programs = [
  {
    num: "01",
    title: "4주 챌린지",
    desc: "목표를 설정하고 4주 동안 실행하며 매 모임에서 진행 상황을 공유합니다.",
  },
  {
    num: "02",
    title: "브랜딩 / 창업 세미나",
    desc: "현직 창업자·마케터가 실전 경험을 나누는 소규모 세미나입니다.",
  },
  {
    num: "03",
    title: "수주 · 사업 연결",
    desc: "참가자 간 비즈니스 니즈를 매칭하고 협업 기회를 연결합니다.",
  },
  {
    num: "04",
    title: "엔젤 투자 상담",
    desc: "전문개인투자자 자격을 보유한 운영진과 별도 투자 상담이 가능합니다.",
  },
];

const faqs = [
  {
    q: "매주 매회 참가해야 하나요?",
    a: "아니요, 매 회차는 독립적으로 운영됩니다. 원하는 날만 선택해서 참가할 수 있습니다.",
  },
  {
    q: "참가 비용이 있나요?",
    a: "소정의 참가비가 있을 수 있으며, 회차마다 상이합니다. 사전 공지를 통해 안내드립니다.",
  },
  {
    q: "어디서 진행되나요?",
    a: "서울 내 카페·코워킹스페이스를 주로 활용합니다. 회차별 장소는 사전에 공지됩니다.",
  },
  {
    q: "처음 참가해도 괜찮나요?",
    a: "네, 환영합니다. 간단한 자기소개 시간이 있어 자연스럽게 어울릴 수 있습니다.",
  },
  {
    q: "엔젤 투자 상담은 어떻게 받나요?",
    a: "모임 중 또는 모임 후 운영진에게 별도로 요청하시면 일정을 잡아드립니다.",
  },
];

export default function NetworkingWeeklyPage() {
  return (
    <>
      {/* ━━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden bg-black pb-28 pt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 55% 65% at 65% 50%, ${ACCENT}15 0%, transparent 65%)`,
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
            <Link href="/networking" className="hover:text-white/50 transition-colors">네트워킹</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/50">금요 정기모임</span>
          </nav>

          <div className="max-w-3xl">
            {/* 진행중 배지 */}
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
                매주 진행중
              </span>
            </div>

            <span
              className="mb-6 block text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: ACCENT }}
            >
              Networking · 금요 정기모임
            </span>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-[80px]">
              변화를 시도하는
              <br />
              사람들의
              <br />
              <span style={{ color: ACCENT }}>금요 모임</span>
            </h1>
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-white/45">
              창업·N잡·수익화 고민을 가진 사람들이
              <br />
              매주 금요일 오후 7시에 모여요.
            </p>

            {/* 모임 정보 배지들 */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: Calendar, text: "매주 금요일" },
                { icon: Clock, text: "오후 7시 — 10시" },
                { icon: MapPin, text: "서울 (회차별 상이)" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.text}
                    className="inline-flex items-center gap-2 rounded-full border px-4 py-2"
                    style={{ borderColor: `${ACCENT}30`, backgroundColor: `${ACCENT}0d` }}
                  >
                    <Icon className="h-3.5 w-3.5" style={{ color: ACCENT }} />
                    <span className="text-sm font-medium text-white/70">{item.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: ACCENT, boxShadow: `0 0 32px ${ACCENT}35` }}
              >
                참여 문의하기 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/networking"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white/60 transition-all hover:border-white/30 hover:text-white"
              >
                네트워킹 소개
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ 프로그램 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p
              className="mb-4 text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: ACCENT }}
            >
              Programs
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              모임 프로그램
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              매 모임마다 4가지 프로그램이 유기적으로 진행됩니다
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((item) => (
              <div
                key={item.num}
                className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-7"
              >
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: `${ACCENT}60` }}
                >
                  {item.num}
                </span>
                <p className="text-lg font-bold text-gray-900">{item.title}</p>
                <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ FAQ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-gray-50 py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p
              className="mb-4 text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: ACCENT }}
            >
              FAQ
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              자주 묻는 질문
            </h2>
          </div>

          <dl className="flex flex-col divide-y divide-gray-200 overflow-hidden rounded-2xl border border-gray-200 bg-white">
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

      {/* ━━━ CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden bg-white py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 55% 60% at 50% 110%, ${ACCENT}10 0%, transparent 60%)`,
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            이번 금요일
            <br />
            함께해요
          </h2>
          <p className="mt-5 text-lg text-gray-400">
            참여 신청 및 문의는 취팡 소개 페이지를 통해 연락 주세요
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full px-9 py-4 text-sm font-bold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: ACCENT, boxShadow: `0 0 40px ${ACCENT}30` }}
            >
              참여 문의하기 <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/networking"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-9 py-4 text-sm font-semibold text-gray-600 transition-all hover:border-gray-300 hover:text-gray-900"
            >
              네트워킹 소개
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
