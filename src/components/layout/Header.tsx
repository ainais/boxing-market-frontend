import Link from "next/link";

/**
 * 사이트 전역 상단 네비게이션입니다.
 *
 * 설계 의도:
 * - 모든 페이지에서 동일한 탐색 경험을 제공
 * - 핵심 이동 경로(홈, 인증 페이지)를 고정 제공
 * - 브랜드/카테고리 컨텍스트를 짧게 노출
 */
export default function Header() {
  return (
    <header className="site-header">
      <div className="inner">
        <Link href="/" className="brand" aria-label="복싱마켓 홈으로 이동">
          Boxing Market
        </Link>

        <nav className="main-nav" aria-label="주요 메뉴">
          <Link href="/">상품</Link>
          <Link href="/login">로그인</Link>
          <Link href="/signup">회원가입</Link>
        </nav>
      </div>
    </header>
  );
}
