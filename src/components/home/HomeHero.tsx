import type { Product } from "@/types/product";

/**
 * 메인 페이지 Hero 블록입니다.
 *
 * 설계 의도:
 * - 커머스 정체성(복싱 전문)을 첫 화면에서 명확히 전달
 * - 전체 상품 수/카테고리 같은 핵심 정보를 빠르게 안내
 */
export default function HomeHero({ products }: { products: Product[] }) {
  return (
    <section className="hero">
      <p className="eyebrow">BOXING COMMERCE</p>
      <h1>훈련과 실전을 위한 복싱 장비를 한 곳에서</h1>
      <p>
        글러브, 헤드기어, 핸드랩, 샌드백까지. 검증된 장비만 선별해 제공합니다.
      </p>
      <div className="hero-stats">
        <span>총 상품 {products.length}개</span>
        <span>카테고리 4개</span>
      </div>
    </section>
  );
}
