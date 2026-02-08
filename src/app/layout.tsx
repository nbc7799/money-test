import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "소비 성향 테스트 | 나의 재테크 유형은?",
  description:
    "MBTI 스타일 재테크 성향 테스트! 나는 어떤 소비 유형일까? 알뜰 절약러, 균형 소비러, 욜로 소비러, 투자 지향러 중 나의 유형을 찾아보세요.",
  keywords: ["재테크", "소비테스트", "MBTI", "절약", "투자"],
  openGraph: {
    title: "소비 성향 테스트",
    description: "나의 재테크 유형을 알아보세요!",
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
      <body className="antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
