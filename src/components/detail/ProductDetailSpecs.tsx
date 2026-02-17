import type { Product } from "@/types/product";

/**
 * 상세 페이지 하단의 특징/추가 이미지 섹션입니다.
 *
 * 설계 의도:
 * - 핵심 스펙을 리스트화해 가독성 향상
 * - 보조 이미지로 제품 이해도 보완
 */
export default function ProductDetailSpecs({ product }: { product: Product }) {
  return (
    <section className="detail-specs">
      <div>
        <h2>주요 특징</h2>
        <ul>
          {product.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="sub-image-grid">
        {product.images.slice(1).map((image) => (
          <div
            key={image}
            className="sub-image"
            style={{ backgroundImage: `url(${image})` }}
            aria-label={`${product.name} 보조 이미지`}
          />
        ))}
      </div>
    </section>
  );
}
