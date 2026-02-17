import { notFound } from "next/navigation";
import ProductDetailHero from "@/components/detail/ProductDetailHero";
import ProductDetailSpecs from "@/components/detail/ProductDetailSpecs";
import { getProductBySlug, products } from "@/data/products";

/**
 * 정적 경로 생성 함수입니다.
 *
 * 빌드 시 상세 페이지를 사전 렌더링해 초기 응답 속도를 높입니다.
 */
export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

/**
 * 상품 상세 페이지입니다.
 * slug로 상품을 조회하고 없으면 404로 처리합니다.
 */
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductDetailHero product={product} />
      <ProductDetailSpecs product={product} />
    </>
  );
}
