/**
 * 반응형 디자인 타입 정의
 * Feature: 003-responsive-optimization
 */

/**
 * 브레이크포인트 설정
 */
export interface BreakpointConfig {
  xs: string;     // Extra small devices (phones, 320px and up)
  sm: string;     // Small devices (phones, 640px and up)
  md: string;     // Medium devices (tablets, 768px and up)
  lg: string;     // Large devices (desktops, 1024px and up)
  xl: string;     // Extra large devices (large desktops, 1280px and up)
  '2xl': string;  // 2X large devices (larger desktops, 1536px and up)
  '3xl': string;  // 3X large devices (ultra-wide, 2560px and up)
}

/**
 * 현재 뷰포트 정보를 나타내는 타입
 */
export interface ViewportInfo {
  /** 현재 뷰포트 너비 (px) */
  width: number;

  /** 현재 뷰포트 높이 (px) */
  height: number;

  /** 현재 활성 브레이크포인트 */
  breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

  /** 모바일 디바이스 여부 */
  isMobile: boolean;

  /** 태블릿 디바이스 여부 */
  isTablet: boolean;

  /** 데스크톱 디바이스 여부 */
  isDesktop: boolean;

  /** 터치 디바이스 여부 */
  isTouchDevice: boolean;

  /** 디바이스 픽셀 비율 (Retina 감지) */
  pixelRatio: number;
}

/**
 * 미디어 쿼리 문자열 타입
 */
export type MediaQuery =
  | `(min-width: ${number}px)`
  | `(max-width: ${number}px)`
  | `(min-width: ${number}px) and (max-width: ${number}px)`;

/**
 * 반응형 이미지 소스 타입
 */
export interface ResponsiveImageSource {
  /** 모바일 이미지 경로 */
  mobile: string;

  /** 태블릿 이미지 경로 (선택) */
  tablet?: string;

  /** 데스크톱 이미지 경로 */
  desktop: string;

  /** Retina 이미지 경로 (선택) */
  retina?: {
    mobile: string;
    tablet?: string;
    desktop: string;
  };
}
