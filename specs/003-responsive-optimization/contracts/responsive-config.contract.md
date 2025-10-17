# Contract: Responsive Configuration API

**Feature**: 003-responsive-optimization | **Version**: 1.0.0 | **Date**: 2025-10-17

## Overview

이 계약서는 반응형 설정 데이터의 구조와 타입을 정의합니다. 이 계약은 프론트엔드 설정 파일과 런타임 훅 간의 인터페이스를 보장합니다.

---

## 1. Breakpoint Configuration Contract

### Interface

```typescript
interface BreakpointConfig {
  xs: string;     // Extra small devices (phones, 320px and up)
  sm: string;     // Small devices (phones, 640px and up)
  md: string;     // Medium devices (tablets, 768px and up)
  lg: string;     // Large devices (desktops, 1024px and up)
  xl: string;     // Extra large devices (large desktops, 1280px and up)
  '2xl': string;  // 2X large devices (larger desktops, 1536px and up)
  '3xl': string;  // 3X large devices (ultra-wide, 2560px and up)
}
```

### Contract Rules

1. **모든 브레이크포인트는 문자열 형식**으로 `px` 단위를 포함해야 합니다.
2. **오름차순 정렬** 필수: `xs < sm < md < lg < xl < 2xl < 3xl`
3. **최소값은 320px** (iPhone SE 최소 너비)
4. **변경 불가능**: 이 값은 런타임에 수정할 수 없습니다.

### Example

```typescript
const breakpoints: BreakpointConfig = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  '3xl': '2560px',
}
```

---

## 2. Viewport Information Contract

### Interface

```typescript
interface ViewportInfo {
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
```

### Contract Rules

1. **`width`와 `height`는 항상 양수**여야 합니다.
2. **`breakpoint`는 7개 값 중 하나**만 가능합니다.
3. **`isMobile`, `isTablet`, `isDesktop` 중 정확히 하나만 `true`**여야 합니다.
4. **`pixelRatio`는 1 이상**이어야 합니다 (일반적으로 1, 1.5, 2, 3).

### Device Type Logic

```typescript
// 디바이스 타입 결정 로직
isMobile = breakpoint === 'xs' || breakpoint === 'sm'
isTablet = breakpoint === 'md'
isDesktop = breakpoint === 'lg' || breakpoint === 'xl' || breakpoint === '2xl' || breakpoint === '3xl'
```

---

## 3. Responsive Image Source Contract

### Interface

```typescript
interface ResponsiveImageSource {
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

### Contract Rules

1. **`mobile`과 `desktop`은 필수**입니다.
2. **`tablet`은 선택 사항**이며, 없으면 `mobile` 또는 `desktop` fallback 사용.
3. **모든 경로는 유효한 URL 또는 파일 경로**여야 합니다.
4. **Retina 경로를 제공하는 경우 `mobile`과 `desktop`은 필수**입니다.

### Example

```typescript
const heroImage: ResponsiveImageSource = {
  mobile: '/images/mobile/hero-375w.jpg',
  tablet: '/images/tablet/hero-768w.jpg',
  desktop: '/images/desktop/hero-1920w.jpg',
  retina: {
    mobile: '/images/mobile/hero-750w.jpg',
    tablet: '/images/tablet/hero-1536w.jpg',
    desktop: '/images/desktop/hero-3840w.jpg',
  },
}
```

---

## 4. Image Configuration Contract

### Interface

```typescript
interface ImageConfig {
  /** 지원 포맷 우선순위 */
  formats: ReadonlyArray<'image/avif' | 'image/webp' | 'image/jpeg' | 'image/png'>;

  /** 반응형 이미지 크기 배열 (px) */
  deviceSizes: ReadonlyArray<number>;

  /** 이미지 품질 (1-100) */
  quality: {
    default: number;
    mobile: number;
    desktop: number;
  };

  /** Lazy loading 설정 */
  loading: {
    strategy: 'lazy' | 'eager';
    eager: ReadonlyArray<string>;
  };

  /** 로더 타입 */
  loader: 'default' | 'imgix' | 'cloudinary' | 'akamai' | 'custom';
}
```

### Contract Rules

1. **`formats`는 우선순위 순서**로 정렬되어야 합니다 (AVIF > WebP > JPEG/PNG).
2. **`deviceSizes`는 오름차순 정렬** 필수.
3. **`quality` 값은 1~100 범위** 내에 있어야 합니다.
4. **`loading.strategy`는 `'lazy'` 또는 `'eager'`만** 허용됩니다.

---

## 5. Typography Scale Contract

### Interface

```typescript
interface TypographyScale {
  min: string;      // 최소 폰트 크기 (rem 단위)
  preferred: string; // 뷰포트 기반 동적 크기 (vw 단위)
  max: string;      // 최대 폰트 크기 (rem 단위)
  clamp: string;    // CSS clamp() 함수 문자열
}

interface TypographyConfig {
  display: TypographyScale;
  h1: TypographyScale;
  h2: TypographyScale;
  h3: TypographyScale;
  bodyLarge: TypographyScale;
  body: TypographyScale;
  small: TypographyScale;
}
```

### Contract Rules

1. **`min` < `max`** 항상 성립해야 합니다.
2. **`clamp` 문자열은 `clamp(min, preferred, max)` 형식**을 따라야 합니다.
3. **`min`과 `max`는 `rem` 단위**, **`preferred`는 `vw` 단위** 사용.

### Example

```typescript
const h1: TypographyScale = {
  min: '1.75rem',   // 28px
  preferred: '4vw',
  max: '3rem',      // 48px
  clamp: 'clamp(1.75rem, 4vw, 3rem)',
}
```

---

## 6. Touch Optimization Contract

### Interface

```typescript
interface TouchConfig {
  /** 최소 터치 타겟 크기 */
  minTouchTarget: {
    width: number;  // px
    height: number; // px
  };

  /** 권장 터치 타겟 크기 */
  recommendedTouchTarget: {
    width: number;  // px
    height: number; // px
  };

  /** 터치 타겟 간 최소 간격 */
  minSpacing: number; // px

  /** 호버 감지 미디어 쿼리 */
  hoverQuery: string;

  /** 터치 디바이스 감지 미디어 쿼리 */
  touchQuery: string;
}
```

### Contract Rules

1. **`minTouchTarget`은 WCAG 2.1 AA 기준인 44x44px 이상**이어야 합니다.
2. **`recommendedTouchTarget`은 `minTouchTarget`보다 크거나 같아야** 합니다.
3. **`minSpacing`은 최소 8px** 권장.
4. **미디어 쿼리 문자열은 유효한 CSS 미디어 쿼리** 형식이어야 합니다.

---

## 7. Performance Thresholds Contract

### Interface

```typescript
interface PerformanceThresholds {
  /** Largest Contentful Paint (LCP) */
  lcp: {
    good: number;                // ms
    needsImprovement: number;    // ms
  };

  /** First Input Delay (FID) */
  fid: {
    good: number;                // ms
    needsImprovement: number;    // ms
  };

  /** Cumulative Layout Shift (CLS) */
  cls: {
    good: number;                // unitless
    needsImprovement: number;    // unitless
  };

  /** First Contentful Paint (FCP) */
  fcp: {
    good: number;                // ms
    needsImprovement: number;    // ms
  };

  /** Time to Interactive (TTI) */
  tti: {
    good: number;                // ms
    needsImprovement: number;    // ms
  };

  /** Lighthouse 점수 목표 */
  lighthouse: {
    mobile: number;   // 0-100
    desktop: number;  // 0-100
  };
}
```

### Contract Rules

1. **모든 `good` 값은 `needsImprovement` 값보다 작아야** 합니다.
2. **Lighthouse 점수는 0~100 범위** 내에 있어야 합니다.
3. **CLS는 unitless** (단위 없음) 값입니다.
4. **LCP, FID, FCP, TTI는 밀리초(ms)** 단위입니다.

### Example

```typescript
const thresholds: PerformanceThresholds = {
  lcp: { good: 2500, needsImprovement: 4000 },
  fid: { good: 100, needsImprovement: 300 },
  cls: { good: 0.1, needsImprovement: 0.25 },
  fcp: { good: 1800, needsImprovement: 3000 },
  tti: { good: 3800, needsImprovement: 7300 },
  lighthouse: { mobile: 90, desktop: 95 },
}
```

---

## 8. 3D Rendering Configuration Contract

### Interface

```typescript
interface RenderConfig {
  /** 프레임레이트 목표 */
  targetFPS: {
    desktop: number;
    mobile: number;
  };

  /** 안티앨리어싱 */
  antialias: {
    desktop: boolean;
    mobile: boolean;
  };

  /** 최대 픽셀 비율 */
  maxPixelRatio: {
    desktop: number;
    mobile: number;
  };

  /** 그림자 품질 */
  shadows: {
    desktop: 'high' | 'medium' | 'low' | 'off';
    mobile: 'high' | 'medium' | 'low' | 'off';
  };

  /** LOD (Level of Detail) 거리 */
  lodDistances: {
    high: number;   // units (Three.js world units)
    medium: number;
    low: number;
  };
}
```

### Contract Rules

1. **`targetFPS`는 30 또는 60**이 권장됩니다.
2. **`maxPixelRatio`는 1 이상**이어야 합니다.
3. **`lodDistances`는 오름차순**: `high < medium < low`
4. **모바일 설정은 데스크톱보다 낮은 품질** 권장.

---

## Version History

| Version | Date       | Changes                                |
|---------|------------|----------------------------------------|
| 1.0.0   | 2025-10-17 | Initial contract definition            |

---

## Compliance

이 계약을 준수하지 않는 코드는 다음과 같은 결과를 초래할 수 있습니다:

- 타입 에러 (TypeScript 컴파일 실패)
- 런타임 에러 (잘못된 값 사용)
- 성능 저하 (최적화되지 않은 설정)
- 접근성 위반 (WCAG 기준 미달)

**테스트**: 모든 계약은 단위 테스트로 검증되어야 합니다.
