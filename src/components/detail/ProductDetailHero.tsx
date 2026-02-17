import type { Product } from "@/types/product";

/**
 * 상품 상세 상단 비주얼 컴포넌트입니다.
 *
 * 설계 의도:
 * - 상세 페이지 첫 영역에서 제품 인지(이미지/이름/핵심 메타)를 강화
 * - 구매 의사결정에 중요한 가격/재고/평점을 강조
 */
export default function ProductDetailHero({ product }: { product: Product }) {
  return (
    <section className="detail-hero">
      <div
        className="detail-main-image"
        style={{ backgroundImage: `url(${product.images[0]})` }}
        aria-label={product.name}
      />

      <div className="detail-info">
        <p className="meta">{product.category} · {product.brand}</p>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p className="price">{product.price.toLocaleString("ko-KR")}원</p>
        <div className="row">
          <span>평점 {product.rating}</span>
          <span>재고 {product.stock}개</span>
        </div>
      </div>
    </section>
  );
}
