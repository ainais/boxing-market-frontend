import type { ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

/**
 * 전역 페이지 골격을 담당하는 공통 레이아웃입니다.
 *
 * 설계 의도:
 * - 헤더/본문/푸터 레이아웃 중복 제거
 * - 페이지 단위 콘텐츠(children)를 중앙 폭 컨테이너에 배치
 * - 공통 스타일 훅(main-content 클래스) 제공
 */
export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="app-shell">
      <Header />
      <main className="main-content">
        <div className="inner">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
