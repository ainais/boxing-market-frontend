import type { Product } from "@/types/product";

/**
 * 임시 목업 상품 데이터입니다.
 *
 * 서버/API 연결 전 단계에서 컴포넌트와 라우팅 구조를 안정화하기 위해 사용합니다.
 * 이후 CMS 또는 백엔드 API 응답으로 대체해도 타입 계약은 그대로 유지할 수 있습니다.
 */
export const products: Product[] = [
  {
    id: "prd-001",
    slug: "pro-sparring-gloves-14oz",
    name: "Pro Sparring Gloves 14oz",
    category: "글러브",
    brand: "IronGuard",
    price: 129000,
    stock: 18,
    rating: 4.8,
    summary: "스파링 중심 설계, 손목 지지력 강화",
    description:
      "고밀도 멀티레이어 폼으로 충격 분산을 높였고, 긴 커프 구조로 손목 흔들림을 줄인 스파링 전용 글러브입니다.",
    features: [
      "고밀도 멀티레이어 충격 흡수 폼",
      "롱 커프 구조로 손목 안정성 강화",
      "통기성 라이닝 적용",
    ],
    images: [
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616279967983-ec413476e824?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "prd-002",
    slug: "elite-headgear-v2",
    name: "Elite Headgear V2",
    category: "헤드기어",
    brand: "RingCore",
    price: 99000,
    stock: 9,
    rating: 4.7,
    summary: "시야 확보와 충격 완화의 균형",
    description:
      "광대/이마 보호 패드를 최적화해 타격 보호와 시야를 동시에 확보한 헤드기어입니다. 장시간 착용 시 압박을 줄이는 내부 패드가 특징입니다.",
    features: [
      "이중 스트랩으로 빠른 피팅",
      "광대 보호 패드 개선",
      "땀 배출 라이닝",
    ],
    images: [
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "prd-003",
    slug: "cotton-handwrap-450",
    name: "Cotton Handwrap 4.5m",
    category: "핸드랩",
    brand: "FightLab",
    price: 19000,
    stock: 42,
    rating: 4.6,
    summary: "손등 텐션 분산에 최적화된 탄성 핸드랩",
    description:
      "탄성 면 혼방 소재로 손가락과 손목 고정력이 우수하며, 세탁 후에도 형태 유지가 쉬운 데일리 트레이닝용 핸드랩입니다.",
    features: [
      "4.5m 표준 길이",
      "탄성 면 혼방 소재",
      "벨크로 내구성 강화",
    ],
    images: [
      "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "prd-004",
    slug: "heavy-bag-40kg",
    name: "Heavy Bag 40kg",
    category: "샌드백",
    brand: "Knockline",
    price: 249000,
    stock: 5,
    rating: 4.9,
    summary: "실전 타격 감각을 위한 고중량 샌드백",
    description:
      "고강도 외피와 균일한 충전재로 타격 반발이 안정적이며, 킥/펀치 복합 훈련에 적합한 40kg 급 샌드백입니다.",
    features: [
      "고강도 외피 소재",
      "균일 충전으로 일정한 반발력",
      "천장 고정 체인 포함",
    ],
    images: [
      "https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

/**
 * slug 기반 단건 조회 유틸입니다.
 */
export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((product) => product.slug === slug);
