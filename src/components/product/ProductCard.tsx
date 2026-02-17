import Link from "next/link";
import type { Product } from "@/types/product";

/**
 * 메인 목록에서 상품 1개를 카드 형태로 표현하는 공통 컴포넌트입니다.
 *
 * 설계 의도:
 * - 상품 썸네일/가격/평점/재고를 한 번에 제공
 * - 상세 페이지 이동 링크를 카드 단위로 일관성 있게 제공
 * - 추후 장바구니 버튼, 할인 배지 등 확장 포인트 확보
 */
export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <div
        className="product-thumb"
        style={{ backgroundImage: `url(${product.images[0]})` }}
        aria-label={product.name}
      />

      <div className="product-body">
        <p className="meta">{product.category} · {product.brand}</p>
        <h3>{product.name}</h3>
        <p className="summary">{product.summary}</p>

        <div className="row">
          <strong>{product.price.toLocaleString("ko-KR")}원</strong>
          <span>평점 {product.rating}</span>
        </div>

        <div className="row">
          <span>재고 {product.stock}개</span>
          <Link href={`/products/${product.slug}`} className="detail-link">
            상세보기
          </Link>
        </div>
      </div>
    </article>
  );
}
