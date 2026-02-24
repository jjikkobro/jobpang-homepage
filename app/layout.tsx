import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "취팡 | 창업·해커톤·네트워킹을 직접 운영합니다",
  description:
    "회차별 누적 아카이브로 검증되는 실전 프로그램. 창업/투자 경진대회, 해커톤, 금요 네트워킹 정기모임을 운영합니다.",
  openGraph: {
    title: "취팡 | 창업·해커톤·네트워킹을 직접 운영합니다",
    description:
      "회차별 누적 아카이브로 검증되는 실전 프로그램. 창업/투자 경진대회, 해커톤, 금요 네트워킹 정기모임을 운영합니다.",
    url: "https://club.jobpang.co.kr",
    siteName: "취팡",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.variable} font-sans antialiased`}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
