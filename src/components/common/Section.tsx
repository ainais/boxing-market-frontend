import type { ReactNode } from "react";

/**
 * 반복되는 섹션 패턴(제목 + 내용)을 통일하는 공통 컴포넌트입니다.
 *
 * 설계 의도:
 * - 페이지별로 중복되는 섹션 마크업 축소
 * - heading 레벨/간격/클래스 구조를 일관되게 유지
 */
export default function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
