/**
 * 이미지 에셋 타입 정의 (T009)
 * WebP 우선, PNG 폴백 패턴 지원
 */
export interface ImageAsset {
  /** WebP 형식 이미지 경로 (우선 사용) */
  webp: string
  /** PNG 형식 이미지 경로 (폴백) */
  png: string
  /** 이미지 너비 (px) */
  width: number
  /** 이미지 높이 (px) */
  height: number
  /** 이미지 대체 텍스트 */
  alt: string
}

/**
 * 반응형 크기 타입 정의 (T010)
 */
export interface ResponsiveSize {
  /** 기본 크기 (모바일) */
  base: number
  /** 태블릿 크기 (md 브레이크포인트 이상) */
  md?: number
  /** 데스크탑 크기 (lg 브레이크포인트 이상) */
  lg?: number
  /** 대형 데스크탑 크기 (xl 브레이크포인트 이상) */
  xl?: number
}

/**
 * CSS 필터 설정 타입
 */
export interface FilterConfig {
  saturate?: number // 채도 (%)
  contrast?: number // 대비 (%)
  brightness?: number // 밝기 (%)
  blur?: number // 블러 (px)
}
