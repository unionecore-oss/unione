# Data Model: 반응형 최적화 (Responsive Optimization)

**Feature**: 003-responsive-optimization | **Date**: 2025-10-17

## Overview

반응형 최적화는 주로 프론트엔드 UI/UX 개선이므로 전통적인 데이터베이스 엔티티나 API 데이터 모델이 필요하지 않습니다. 하지만 다음과 같은 **설정 데이터 모델**과 **타입 정의**가 필요합니다:

1. **Breakpoint Configuration**: 반응형 브레이크포인트 정의
2. **Viewport Metadata**: 뷰포트 크기 및 디바이스 정보
3. **Image Configuration**: 반응형 이미지 설정
4. **Typography Scale**: Fluid Typography 설정

## 1. Breakpoint Configuration

### tailwind.config.ts

```typescript
// 타입 정의
export interface BreakpointConfig {
  xs: string;     // Extra small devices (phones, 320px and up)
  sm: string;     // Small devices (phones, 640px and up)
  md: string;     // Medium devices (tablets, 768px and up)
  lg: string;     // Large devices (desktops, 1024px and up)
  xl: string;     // Extra large devices (large desktops, 1280px and up)
  '2xl': string;  // 2X large devices (larger desktops, 1536px and up)
  '3xl': string;  // 3X large devices (ultra-wide, 2560px and up)
}

// 실제 설정 값
export const breakpoints: BreakpointConfig = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  '3xl': '2560px',
};
```

**위치**: `/tailwind.config.ts` → `theme.extend.screens`

**용도**:
- Tailwind CSS 반응형 유틸리티 클래스 생성
- JavaScript에서 브레이크포인트 참조
- 미디어 쿼리 일관성 보장

## 2. Viewport Metadata

### `/src/types/responsive.types.ts`

```typescript
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
```

**용도**:
- `useViewportSize()` 훅의 반환 타입
- `useBreakpoint()` 훅의 반환 타입
- 컴포넌트 props 타입 안전성

## 3. Image Configuration

### `/src/lib/constants.ts`

```typescript
/**
 * Next.js Image 최적화 설정
 */
export const IMAGE_CONFIG = {
  /** 지원 포맷 우선순위 (AVIF > WebP > JPEG) */
  formats: ['image/avif', 'image/webp', 'image/jpeg'] as const,

  /** 반응형 이미지 크기 배열 */
  deviceSizes: [320, 420, 640, 768, 1024, 1280, 1536, 2048, 2560],

  /** 이미지 품질 (1-100) */
  quality: {
    default: 75,
    mobile: 65,    // 모바일은 낮은 품질로 번들 크기 절약
    desktop: 85,   // 데스크톱은 고품질
  },

  /** Lazy loading 설정 */
  loading: {
    strategy: 'lazy' as const,     // 기본값
    eager: ['hero', 'above-fold'], // Eager loading 대상
  },

  /** 로더 설정 */
  loader: 'default' as const, // 'default' | 'imgix' | 'cloudinary' | 'akamai' | 'custom'
} as const;

/**
 * 반응형 이미지 브레이크포인트별 srcset 생성
 */
export const RESPONSIVE_IMAGE_BREAKPOINTS = {
  mobile: {
    minWidth: 320,
    maxWidth: 767,
    sizes: '100vw',
  },
  tablet: {
    minWidth: 768,
    maxWidth: 1023,
    sizes: '80vw',
  },
  desktop: {
    minWidth: 1024,
    maxWidth: Infinity,
    sizes: '1200px',
  },
} as const;
```

**용도**:
- `next/image` 컴포넌트 설정
- `next.config.js`의 `images` 설정
- 커스텀 이미지 로더 구현

## 4. Typography Scale (Fluid Typography)

### `/src/lib/constants.ts` (추가)

```typescript
/**
 * Fluid Typography 스케일 (CSS clamp 함수)
 *
 * 공식: clamp(MIN, PREFERRED, MAX)
 * - MIN: 최소 폰트 크기 (모바일)
 * - PREFERRED: 뷰포트 기반 동적 크기
 * - MAX: 최대 폰트 크기 (데스크톱)
 */
export const TYPOGRAPHY_SCALE = {
  // Display (Hero 제목)
  display: {
    min: '2rem',      // 32px (모바일)
    preferred: '5vw',
    max: '4.5rem',    // 72px (데스크톱)
    clamp: 'clamp(2rem, 5vw, 4.5rem)',
  },

  // Heading 1
  h1: {
    min: '1.75rem',   // 28px
    preferred: '4vw',
    max: '3rem',      // 48px
    clamp: 'clamp(1.75rem, 4vw, 3rem)',
  },

  // Heading 2
  h2: {
    min: '1.5rem',    // 24px
    preferred: '3vw',
    max: '2.25rem',   // 36px
    clamp: 'clamp(1.5rem, 3vw, 2.25rem)',
  },

  // Heading 3
  h3: {
    min: '1.25rem',   // 20px
    preferred: '2.5vw',
    max: '1.875rem',  // 30px
    clamp: 'clamp(1.25rem, 2.5vw, 1.875rem)',
  },

  // Body Large
  bodyLarge: {
    min: '1rem',      // 16px
    preferred: '2vw',
    max: '1.25rem',   // 20px
    clamp: 'clamp(1rem, 2vw, 1.25rem)',
  },

  // Body (기본)
  body: {
    min: '0.875rem',  // 14px
    preferred: '1.5vw',
    max: '1rem',      // 16px
    clamp: 'clamp(0.875rem, 1.5vw, 1rem)',
  },

  // Small
  small: {
    min: '0.75rem',   // 12px
    preferred: '1.2vw',
    max: '0.875rem',  // 14px
    clamp: 'clamp(0.75rem, 1.2vw, 0.875rem)',
  },
} as const;
```

**용도**:
- Tailwind CSS 커스텀 폰트 크기 유틸리티
- CSS 변수로 전역 스타일 적용
- 컴포넌트에서 일관된 타이포그래피 사용

## 5. Touch Optimization Configuration

### `/src/lib/constants.ts` (추가)

```typescript
/**
 * 터치 최적화 설정 (WCAG 2.1 AA 준수)
 */
export const TOUCH_CONFIG = {
  /** 최소 터치 타겟 크기 (WCAG 2.1 기준: 44x44px) */
  minTouchTarget: {
    width: 44,    // px
    height: 44,   // px
  },

  /** 권장 터치 타겟 크기 */
  recommendedTouchTarget: {
    width: 48,    // px
    height: 48,   // px
  },

  /** 터치 타겟 간 최소 간격 */
  minSpacing: 8,  // px

  /** 호버 감지 미디어 쿼리 */
  hoverQuery: '(hover: hover) and (pointer: fine)',

  /** 터치 디바이스 감지 미디어 쿼리 */
  touchQuery: '(pointer: coarse)',
} as const;
```

**용도**:
- 버튼, 링크 등 인터랙티브 요소 크기 보장
- Tailwind CSS 커스텀 유틸리티 (예: `.min-touch-target`)
- 접근성 자동 검증 테스트

## 6. Container Query Configuration

### `tailwind.config.ts` (추가)

```typescript
/**
 * Container Query 설정 (Tailwind CSS 4)
 */
export const CONTAINER_QUERY_CONFIG = {
  /** 컨테이너 이름 정의 */
  containers: {
    card: 'card',
    section: 'section',
    sidebar: 'sidebar',
    modal: 'modal',
  },

  /** 컨테이너 브레이크포인트 */
  sizes: {
    xs: '20rem',    // 320px
    sm: '24rem',    // 384px
    md: '28rem',    // 448px
    lg: '32rem',    // 512px
    xl: '36rem',    // 576px
    '2xl': '42rem', // 672px
    '3xl': '48rem', // 768px
    '4xl': '56rem', // 896px
    '5xl': '64rem', // 1024px
    '6xl': '72rem', // 1152px
  },
} as const;
```

**용도**:
- 컴포넌트 레벨 반응형 디자인
- 부모 컨테이너 크기에 따른 스타일 적용
- `@container` CSS 쿼리 지원

## 7. Performance Thresholds

### `/src/lib/constants.ts` (추가)

```typescript
/**
 * 성능 임계값 (Lighthouse 메트릭)
 */
export const PERFORMANCE_THRESHOLDS = {
  /** Largest Contentful Paint (LCP) */
  lcp: {
    good: 2500,     // ms
    needsImprovement: 4000,
  },

  /** First Input Delay (FID) */
  fid: {
    good: 100,      // ms
    needsImprovement: 300,
  },

  /** Cumulative Layout Shift (CLS) */
  cls: {
    good: 0.1,
    needsImprovement: 0.25,
  },

  /** First Contentful Paint (FCP) */
  fcp: {
    good: 1800,     // ms
    needsImprovement: 3000,
  },

  /** Time to Interactive (TTI) */
  tti: {
    good: 3800,     // ms
    needsImprovement: 7300,
  },

  /** Lighthouse 점수 목표 */
  lighthouse: {
    mobile: 90,     // 모바일 최소 목표
    desktop: 95,    // 데스크톱 최소 목표
  },
} as const;
```

**용도**:
- Playwright 성능 테스트 자동화
- 성능 모니터링 및 알림
- CI/CD 파이프라인 품질 게이트

## 8. 3D Rendering Configuration (Mobile Optimization)

### `/src/lib/constants.ts` (추가)

```typescript
/**
 * 3D 렌더링 최적화 설정 (Three.js / React Three Fiber)
 */
export const RENDER_CONFIG = {
  /** 프레임레이트 목표 */
  targetFPS: {
    desktop: 60,
    mobile: 30,
  },

  /** 안티앨리어싱 */
  antialias: {
    desktop: true,
    mobile: false,  // 모바일에서 비활성화하여 성능 향상
  },

  /** 픽셀 비율 (devicePixelRatio 제한) */
  maxPixelRatio: {
    desktop: 2,
    mobile: 1.5,    // Retina 디스플레이에서도 제한하여 성능 보장
  },

  /** 그림자 품질 */
  shadows: {
    desktop: 'high' as const,
    mobile: 'low' as const,
  },

  /** LOD (Level of Detail) 거리 */
  lodDistances: {
    high: 50,
    medium: 100,
    low: 200,
  },
} as const;
```

**용도**:
- Three.js WebGLRenderer 설정
- 모바일 디바이스에서 3D 성능 최적화
- 디바이스별 렌더링 품질 조절

## Summary

이 데이터 모델은 **코드 레벨 설정 데이터**로, 다음과 같은 특징이 있습니다:

1. **타입 안전성**: TypeScript 타입 정의로 개발자 경험 향상
2. **중앙 관리**: 모든 반응형 설정을 한 곳에서 관리
3. **재사용성**: 전체 프로젝트에서 동일한 설정 참조
4. **테스트 가능성**: 상수를 통해 쉽게 테스트 작성
5. **문서화**: 각 설정에 대한 명확한 주석 포함

**다음 단계**: 이 데이터 모델을 기반으로 `quickstart.md`에서 실제 구현 예제를 제공합니다.
