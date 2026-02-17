import type { NextConfig } from "next";

/**
 * Next.js runtime configuration.
 *
 * 현재 프로젝트는 로컬 정적 데이터로 동작하므로,
 * 이미지 최적화 등 기본 보안/성능 옵션을 그대로 유지합니다.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
