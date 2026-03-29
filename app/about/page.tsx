import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Users, Award, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "취팡 소개 | 취팡",
  description:
    "15년 노하우로 증명된 취업의신의 취업 성공 솔루션. 1,600만 누적 방문자, 91% 합격률, 17,000건의 입사서류 데이터를 보유한 취팡을 소개합니다.",
};

const BRAND = "#e20871";

const stats = [
  { value: "15년", label: "브랜드 역사" },
  { value: "1,600만", label: "누적 방문자" },
  { value: "66,000+", label: "특강 청강자" },
  { value: "91%", label: "서류 합격률" },
  { value: "17,000건", label: "입사서류 데이터" },
  { value: "30,000건+", label: "취업 데이터" },
];

const milestones = [
  {
    year: "2011",
    title: "취업의신 - 오프라인 취업컨설팅 사업 시작",
    desc: "취업의신 브랜드로 오프라인 취업 컨설팅을 시작. 전국 대학·지자체와 협력해 200회 이상의 취업특강과 실무형 프로그램을 진행했습니다.",
  },
  {
    year: "2026",
    title: "취팡 - 온라인 취업·채용 플랫폼으로 전환",
    desc: "15년간 쌓아온 91% 합격률의 17,000건 입사서류·30,000건 취업 데이터를 온라인 플랫폼에 녹여 구직자와 기업을 연결합니다.",
  },
];

const features = [
  {
    icon: BookOpen,
    title: "17,000건 입사서류",
    desc: "실제 합격·불합격 데이터를 분석해 91% 합격률을 달성한 노하우를 서비스에 녹였습니다.",
    accent: BRAND,
    accentBg: "rgba(226,8,113,0.08)",
  },
  {
    icon: Users,
    title: "1,600만 누적 방문자",
    desc: "취업의신 브랜드가 15년간 쌓아온 신뢰와 콘텐츠 파워를 플랫폼에 담았습니다.",
    accent: "#2563eb",
    accentBg: "rgba(37,99,235,0.08)",
  },
  {
    icon: Building2,
    title: "350개 기업 채용 데이터",
    desc: "HR아너스포럼을 통해 수집한 실제 기업 채용기준과 평가지표를 반영합니다.",
    accent: "#059669",
    accentBg: "rgba(5,150,105,0.08)",
  },
  {
    icon: Award,
    title: "200회 이상 특강",
    desc: "전국 대학·지자체와 협력해 진행한 실무형 취업특강 노하우를 집약했습니다.",
    accent: "#d97706",
    accentBg: "rgba(217,119,6,0.08)",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ━━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden bg-black py-32 lg:py-44">
        {/* 핑크 글로우 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 65% 60% at 60% 50%, ${BRAND}22 0%, transparent 65%)`,
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

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <p
            className="mb-6 text-xs font-bold tracking-[0.25em] uppercase"
            style={{ color: BRAND }}
          >
            About Jobpang
          </p>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            15년 노하우로
            <br />
            증명된
            <br />
            <span style={{ color: BRAND }}>취업 성공</span> 솔루션
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-relaxed text-white/50">
            취업의신 브랜드가 쌓아온 데이터와 경험을 하나의 플랫폼에 담았습니다.
          </p>
        </div>
      </section>

      {/* ━━━ 지표 띠 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="border-y border-gray-200 bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6 text-center">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-2">
                <dd
                  className="text-3xl font-extrabold sm:text-4xl"
                  style={{ color: BRAND }}
                >
                  {s.value}
                </dd>
                <dt className="text-xs font-medium text-gray-400">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ━━━ 소개 본문 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">
            {/* 왼쪽: 텍스트 */}
            <div>
              <p
                className="mb-4 text-xs font-bold tracking-[0.25em] uppercase"
                style={{ color: BRAND }}
              >
                취업·채용 플랫폼 '취팡(Jobpang)'은?
              </p>
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl leading-[1.1]">
                91% 합격률의
                <br />
                취업 데이터 플랫폼
              </h2>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-gray-600">
                <p>
                  2011년 창업 이후 15년간, <strong className="text-gray-900">'취업의신'</strong> 브랜드로
                  1,600만 명의 누적 방문자와 6만6천 명 이상의 특강 청강자를 기록한
                  국내 대표 취업이직 컨설팅 브랜드에서 만든 플랫폼입니다.
                </p>
                <p>
                  <strong className="text-gray-900">91% 합격률</strong>의 17,000건 입사서류,
                  30,000건 이상의 취업 데이터를 녹여낸 서비스로 구직자와 기업을 연결합니다.
                </p>
              </div>
            </div>

            {/* 오른쪽: 강점 카드 */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-6"
                  >
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ backgroundColor: f.accentBg, color: f.accent }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-bold text-gray-900">{f.title}</p>
                    <p className="text-xs leading-relaxed text-gray-500">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ 브랜드 역사 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-gray-50 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p
              className="mb-4 text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: BRAND }}
            >
              Brand History
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              브랜드 역사
            </h2>
          </div>

          <div className="relative mx-auto max-w-3xl">
            {/* 타임라인 선 */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200 lg:left-8" />

            <div className="flex flex-col gap-10">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-8 lg:gap-12">
                  {/* 도트 + 연도 */}
                  <div className="relative flex flex-col items-center">
                    <div
                      className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white text-xs font-black text-white lg:h-16 lg:w-16 lg:text-sm"
                      style={{ backgroundColor: BRAND }}
                    >
                      {m.year}
                    </div>
                  </div>
                  {/* 내용 */}
                  <div className="pb-2 pt-1.5 lg:pt-3.5">
                    <p className="text-lg font-bold text-gray-900">{m.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ HR아너스포럼 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 px-10 py-16 lg:px-20 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p
                className="mb-4 text-xs font-bold tracking-[0.25em] uppercase"
                style={{ color: BRAND }}
              >
                HR아너스포럼
              </p>
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                350개 기업
                <br />
                인사담당자 네트워크
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-500">
                HR아너스포럼은 350개 기업 인사담당자가 참여하는 비영리법인단체입니다.
                실제 기업의 채용기준과 평가데이터를 함께 연구하며, 이를 취팡 서비스에 반영해
                구직자에게 현실에 맞는 취업 전략을 제공합니다.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-gray-200 pt-10">
                {[
                  { value: "350개+", label: "참여 기업" },
                  { value: "비영리", label: "법인 단체" },
                  { value: "실시간", label: "채용 데이터 연구" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <span
                      className="text-3xl font-extrabold"
                      style={{ color: BRAND }}
                    >
                      {item.value}
                    </span>
                    <span className="text-xs text-gray-400">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ CTA — 문의/제휴 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden bg-black py-36">
        {/* 핑크 글로우 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 55% 60% at 50% 100%, ${BRAND}25 0%, transparent 60%)`,
          }}
        />

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p
            className="mb-5 text-xs font-bold tracking-[0.25em] uppercase"
            style={{ color: BRAND }}
          >
            Contact &amp; Partnership
          </p>
          <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            문의 · 제휴
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-white/50">
            강연·교육 제휴, 채용 파트너십, 미디어 협력 등
            <br className="hidden sm:block" />
            어떤 분야든 편하게 연락 주세요.
          </p>

          {/* 연락 방법 카드 */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 text-left">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <p className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-3">
                이메일
              </p>
              <a
                href="mailto:help@jobpang.co.kr"
                className="text-lg font-bold text-white hover:opacity-80 transition-opacity"
              >
                help@jobpang.co.kr
              </a>
              <p className="mt-2 text-sm text-white/40">
                제휴·강연·미디어 등 일반 문의
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <p className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-3">
                플랫폼 서비스
              </p>
              <p className="text-lg font-bold text-white/40">
                jobpang.co.kr
              </p>
              <p className="mt-2 text-sm text-white/40">
                취업·채용 서비스 — 런칭 준비 중
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:help@jobpang.co.kr"
              className="inline-flex items-center gap-2 rounded-full px-9 py-4 text-sm font-bold text-white transition-all hover:opacity-90"
              style={{
                backgroundColor: BRAND,
                boxShadow: `0 0 40px ${BRAND}40`,
              }}
            >
              이메일로 문의하기 <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-9 py-4 text-sm font-semibold text-white/60 transition-all hover:border-white/30 hover:text-white"
            >
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
