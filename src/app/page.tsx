import Section from "@/components/common/Section";
import HomeHero from "@/components/home/HomeHero";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

/**
 * 메인 페이지입니다.
 *
 * 구성:
 * - Hero: 브랜드 메시지와 요약 지표
 * - Product Grid: 판매 상품 목록 카드
 */
export default function HomePage() {
  return (
    <>
      <HomeHero products={products} />

      <Section title="상품 목록">
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>
    </>
  );
}
