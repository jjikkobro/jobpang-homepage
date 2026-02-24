import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    group: "프로그램",
    items: [
      { label: "창업/투자", href: "/venture" },
      { label: "해커톤", href: "/hackathon" },
      { label: "네트워킹", href: "/networking" },
      { label: "정기모임 안내", href: "/networking/weekly" },
    ],
  },
  {
    group: "아카이브",
    items: [
      { label: "전체 회차", href: "/archive" },
      { label: "창업/투자", href: "/archive?category=venture" },
      { label: "해커톤", href: "/archive?category=hackathon" },
      { label: "네트워킹", href: "/archive?category=networking" },
    ],
  },
  {
    group: "취팡",
    items: [
      { label: "소개", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "문의/제휴", href: "/contact" },
    ],
  },
  {
    group: "정책",
    items: [
      { label: "개인정보처리방침", href: "/privacy" },
      { label: "이용약관", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* 상단 */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* 브랜드 */}
          <div className="lg:col-span-2">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="취팡"
                width={88}
                height={32}
                className="h-7 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/40">
              창업·해커톤·네트워킹을 직접 운영합니다.
              <br />
              회차별 누적 아카이브로 신뢰를 쌓아갑니다.
            </p>
          </div>

          {/* 링크 그룹 */}
          {footerLinks.map((group) => (
            <div key={group.group}>
              <p className="mb-4 text-xs font-bold tracking-[0.15em] text-white/30 uppercase">
                {group.group}
              </p>
              <ul className="flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/55 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 하단 */}
        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} 취팡(jobpang). All rights reserved.
          </p>
          <p className="text-xs text-white/25">club.jobpang.co.kr</p>
        </div>
      </div>
    </footer>
  );
}
