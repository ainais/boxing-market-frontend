import type { Metadata } from "next";
import AppShell from "@/components/layout/AppShell";
import "./globals.css";

/**
 * 사이트 공통 메타데이터입니다.
 *
 * 검색 엔진 및 SNS 공유 시 기본 정보로 사용되며,
 * 서비스명/설명을 전역에서 일관되게 유지합니다.
 */
export const metadata: Metadata = {
  title: "Boxing Market",
  description: "글러브, 헤드기어, 핸드랩, 샌드백을 판매하는 복싱 장비 커머스",
};

/**
 * App Router 최상위 레이아웃입니다.
 *
 * 모든 하위 페이지를 AppShell로 감싸 공통 구조(헤더/푸터)를 적용합니다.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
