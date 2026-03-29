import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const BASE_URL = "https://growth.jobpang.co.kr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  title: {
    default: "취팡 | AI 취업채용 플랫폼",
    template: "%s | 취팡",
  },
  description:
    "15년 취업이직 컨설팅 노하우를 학습한 취업채용 플랫폼입니다.",
  openGraph: {
    title: "취팡 | AI 취업채용 플랫폼",
    description:
      "15년 취업이직 컨설팅 노하우를 학습한 취업채용 플랫폼입니다.",
    url: BASE_URL,
    siteName: "취팡",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/ogimage.png",
        width: 1200,
        height: 630,
        alt: "취팡 | AI 취업채용 플랫폼",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/ogimage.png"],
  },
  alternates: {
    canonical: BASE_URL,
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
        <Footer />
      </body>
    </html>
  );
}
