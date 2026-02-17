/**
 * 사이트 전역 푸터입니다.
 *
 * 설계 의도:
 * - 사업자 정보/카테고리/고객지원처럼 반복 노출되는 정보의 단일 진입점 제공
 * - 추후 약관/개인정보처리방침 링크를 연결하기 쉬운 구조 유지
 */
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="inner">
        <div>
          <p className="footer-title">Boxing Market</p>
          <p>복싱 장비 전문 커머스</p>
        </div>

        <div>
          <p className="footer-title">카테고리</p>
          <p>글러브 · 헤드기어 · 핸드랩 · 샌드백</p>
        </div>

        <div>
          <p className="footer-title">고객지원</p>
          <p>평일 10:00 - 18:00</p>
          <p>help@boxingmarket.kr</p>
        </div>
      </div>
    </footer>
  );
}
