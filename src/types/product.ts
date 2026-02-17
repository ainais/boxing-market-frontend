/**
 * 상품 도메인에서 사용하는 핵심 타입입니다.
 *
 * 실제 운영에서는 API 스키마와 일치하도록 유지해야 하며,
 * 현재 예시에서는 메인/상세 페이지 렌더링에 필요한 최소 필드를 정의합니다.
 */
export type Product = {
  id: string;
  slug: string;
  name: string;
  category: "글러브" | "헤드기어" | "핸드랩" | "샌드백";
  brand: string;
  price: number;
  stock: number;
  rating: number;
  summary: string;
  description: string;
  features: string[];
  images: string[];
};
