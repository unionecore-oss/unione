# Quickstart Guide: 반응형 최적화 (Responsive Optimization)

**Feature**: 003-responsive-optimization | **Date**: 2025-10-17

이 가이드는 반응형 최적화 작업을 시작하는 개발자를 위한 실용적인 참고 자료입니다. 각 섹션은 copy-paste 가능한 코드 예제와 함께 제공됩니다.

---

## 1. 시작하기 전에

### 환경 확인

```bash
# Node.js 버전 확인 (20+ 필요)
node --version

# 의존성 설치 확인
npm install

# 개발 서버 실행
npm run dev

# 브라우저에서 http://localhost:3004 확인
```

### 필수 도구 설치

```bash
# Playwright (E2E 테스트)
npx playwright install chromium

# Lighthouse CLI (성능 측정)
npm install -g lighthouse
```

---

## 2. Tailwind CSS 설정 업데이트

### `tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 반응형 브레이크포인트 확장
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '2560px',
      },

      // Fluid Typography 추가
      fontSize: {
        'fluid-display': 'clamp(2rem, 5vw, 4.5rem)',
        'fluid-h1': 'clamp(1.75rem, 4vw, 3rem)',
        'fluid-h2': 'clamp(1.5rem, 3vw, 2.25rem)',
        'fluid-h3': 'clamp(1.25rem, 2.5vw, 1.875rem)',
        'fluid-body-lg': 'clamp(1rem, 2vw, 1.25rem)',
        'fluid-body': 'clamp(0.875rem, 1.5vw, 1rem)',
        'fluid-small': 'clamp(0.75rem, 1.2vw, 0.875rem)',
      },

      // 최소 터치 타겟 크기 유틸리티
      minWidth: {
        'touch': '44px',
      },
      minHeight: {
        'touch': '44px',
      },

      // Container Query 설정 (Tailwind CSS 4)
      containers: {
        card: 'card',
        section: 'section',
        sidebar: 'sidebar',
        modal: 'modal',
      },
    },
  },
  plugins: [
    // Container Queries 플러그인
    require('@tailwindcss/container-queries'),
  ],
}

export default config
```

### 플러그인 설치

```bash
npm install @tailwindcss/container-queries
```

---

## 3. 반응형 훅 구현

### `/src/hooks/useMediaQuery.ts`

```typescript
'use client'

import { useEffect, useState } from 'react'

/**
 * 미디어 쿼리 매칭 훅
 *
 * @example
 * const isMobile = useMediaQuery('(max-width: 767px)')
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const media = window.matchMedia(query)

    // 초기값 설정
    setMatches(media.matches)

    // 리스너 등록
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [query])

  // SSR 중에는 false 반환 (hydration mismatch 방지)
  return mounted ? matches : false
}
```

### `/src/hooks/useBreakpoint.ts`

```typescript
'use client'

import { useMediaQuery } from './useMediaQuery'

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'

/**
 * 현재 활성 브레이크포인트 반환
 *
 * @example
 * const breakpoint = useBreakpoint()
 * if (breakpoint === 'xs' || breakpoint === 'sm') {
 *   // 모바일 전용 로직
 * }
 */
export function useBreakpoint(): Breakpoint {
  const is3xl = useMediaQuery('(min-width: 2560px)')
  const is2xl = useMediaQuery('(min-width: 1536px)')
  const isXl = useMediaQuery('(min-width: 1280px)')
  const isLg = useMediaQuery('(min-width: 1024px)')
  const isMd = useMediaQuery('(min-width: 768px)')
  const isSm = useMediaQuery('(min-width: 640px)')

  if (is3xl) return '3xl'
  if (is2xl) return '2xl'
  if (isXl) return 'xl'
  if (isLg) return 'lg'
  if (isMd) return 'md'
  if (isSm) return 'sm'
  return 'xs'
}

/**
 * 모바일/태블릿/데스크톱 여부 반환
 */
export function useDeviceType() {
  const breakpoint = useBreakpoint()

  return {
    isMobile: breakpoint === 'xs' || breakpoint === 'sm',
    isTablet: breakpoint === 'md',
    isDesktop: breakpoint === 'lg' || breakpoint === 'xl' || breakpoint === '2xl' || breakpoint === '3xl',
  }
}
```

### `/src/hooks/useTouchDevice.ts`

```typescript
'use client'

import { useMediaQuery } from './useMediaQuery'

/**
 * 터치 디바이스 여부 및 호버 지원 감지
 *
 * @example
 * const { isTouchDevice, hasHover } = useTouchDevice()
 */
export function useTouchDevice() {
  const isTouchDevice = useMediaQuery('(pointer: coarse)')
  const hasHover = useMediaQuery('(hover: hover) and (pointer: fine)')

  return {
    isTouchDevice,
    hasHover,
    /** 터치 전용 디바이스 (호버 없음) */
    isTouchOnly: isTouchDevice && !hasHover,
  }
}
```

### `/src/hooks/useViewportSize.ts`

```typescript
'use client'

import { useEffect, useState } from 'react'
import { useBreakpoint } from './useBreakpoint'

export interface ViewportSize {
  width: number
  height: number
  breakpoint: ReturnType<typeof useBreakpoint>
  pixelRatio: number
}

/**
 * 현재 뷰포트 크기 추적
 *
 * @example
 * const { width, height, breakpoint } = useViewportSize()
 */
export function useViewportSize(): ViewportSize {
  const breakpoint = useBreakpoint()
  const [size, setSize] = useState<Omit<ViewportSize, 'breakpoint'>>({
    width: 0,
    height: 0,
    pixelRatio: 1,
  })

  useEffect(() => {
    const updateSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
        pixelRatio: window.devicePixelRatio || 1,
      })
    }

    // 초기 크기 설정
    updateSize()

    // 리사이즈 리스너 (debounce 적용)
    let timeoutId: NodeJS.Timeout
    const debouncedUpdateSize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(updateSize, 150)
    }

    window.addEventListener('resize', debouncedUpdateSize)
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', debouncedUpdateSize)
    }
  }, [])

  return { ...size, breakpoint }
}
```

---

## 4. 반응형 이미지 컴포넌트

### `/src/components/common/ResponsiveImage.tsx`

```typescript
'use client'

import Image from 'next/image'
import { useBreakpoint } from '@/hooks/useBreakpoint'

interface ResponsiveImageProps {
  /** 모바일 이미지 경로 */
  mobileSrc: string
  /** 태블릿 이미지 경로 (선택) */
  tabletSrc?: string
  /** 데스크톱 이미지 경로 */
  desktopSrc: string
  /** 대체 텍스트 */
  alt: string
  /** 우선 순위 (LCP 이미지는 true) */
  priority?: boolean
  /** 이미지 품질 (1-100) */
  quality?: number
  /** 추가 CSS 클래스 */
  className?: string
  /** 너비 (레이아웃에 따라 선택) */
  width?: number
  /** 높이 (레이아웃에 따라 선택) */
  height?: number
  /** 레이아웃 방식 */
  layout?: 'fill' | 'responsive' | 'intrinsic' | 'fixed'
}

/**
 * 반응형 이미지 컴포넌트
 * 브레이크포인트에 따라 최적화된 이미지 로드
 *
 * @example
 * <ResponsiveImage
 *   mobileSrc="/images/mobile/hero.jpg"
 *   desktopSrc="/images/desktop/hero.jpg"
 *   alt="Hero image"
 *   priority
 * />
 */
export default function ResponsiveImage({
  mobileSrc,
  tabletSrc,
  desktopSrc,
  alt,
  priority = false,
  quality = 75,
  className = '',
  width,
  height,
  layout = 'responsive',
}: ResponsiveImageProps) {
  const breakpoint = useBreakpoint()

  // 브레이크포인트에 따른 이미지 소스 선택
  let src = mobileSrc
  if (breakpoint === 'md' && tabletSrc) {
    src = tabletSrc
  } else if (['lg', 'xl', '2xl', '3xl'].includes(breakpoint)) {
    src = desktopSrc
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      quality={quality}
      className={className}
      sizes={`
        (max-width: 767px) 100vw,
        (max-width: 1023px) 80vw,
        1200px
      `}
      style={
        layout === 'fill'
          ? { width: '100%', height: '100%', objectFit: 'cover' }
          : undefined
      }
    />
  )
}
```

---

## 5. 반응형 타이포그래피 사용

### 컴포넌트 예제

```tsx
'use client'

export default function HeroSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Fluid Typography 사용 */}
        <h1 className="text-fluid-display font-bold text-center mb-6">
          A new Web3 payment paradigm
        </h1>

        <p className="text-fluid-body-lg text-center max-w-2xl mx-auto">
          Experience seamless crypto payments with Unione
        </p>

        {/* 모바일: 세로 스택, 데스크톱: 가로 배치 */}
        <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center">
          {/* 최소 터치 타겟 크기 보장 */}
          <button className="min-w-touch min-h-touch px-8 py-3 bg-primary text-white rounded-lg">
            Get Started
          </button>

          <button className="min-w-touch min-h-touch px-8 py-3 border border-primary text-primary rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
```

---

## 6. Framer Motion LazyMotion 설정

### `/src/app/layout.tsx` 업데이트

```tsx
import { LazyMotion, domAnimation } from 'framer-motion'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* LazyMotion으로 감싸서 번들 크기 85% 감소 */}
        <LazyMotion features={domAnimation} strict>
          {children}
        </LazyMotion>
      </body>
    </html>
  )
}
```

### 컴포넌트에서 `m` 사용

```tsx
import { m } from 'framer-motion'

export default function Card() {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-white rounded-lg shadow-lg"
    >
      <h3 className="text-fluid-h3 font-semibold">Card Title</h3>
      <p className="text-fluid-body mt-2">Card content goes here.</p>
    </m.div>
  )
}
```

**중요**: `motion.div` 대신 `m.div`를 사용합니다 (LazyMotion 전용).

---

## 7. 3D 렌더링 모바일 최적화

### `/src/components/ui/OptimizedCanvas.tsx`

```tsx
'use client'

import { Canvas } from '@react-three/fiber'
import { useDeviceType } from '@/hooks/useBreakpoint'
import { useViewportSize } from '@/hooks/useViewportSize'

interface OptimizedCanvasProps {
  children: React.ReactNode
}

export default function OptimizedCanvas({ children }: OptimizedCanvasProps) {
  const { isMobile } = useDeviceType()
  const { pixelRatio } = useViewportSize()

  return (
    <Canvas
      // 모바일에서 픽셀 비율 제한 (성능 향상)
      dpr={isMobile ? Math.min(pixelRatio, 1.5) : Math.min(pixelRatio, 2)}
      // 모바일에서 안티앨리어싱 비활성화
      gl={{ antialias: !isMobile }}
      // 모바일에서 그림자 비활성화
      shadows={!isMobile}
      // 프레임레이트 제한
      frameloop="demand"
    >
      {children}
    </Canvas>
  )
}
```

---

## 8. 컨테이너 쿼리 사용

### 컴포넌트 예제

```tsx
export default function CardGrid() {
  return (
    // 컨테이너 정의
    <div className="@container/card-grid grid gap-4">
      {/* 컨테이너 크기에 따라 반응 */}
      <div className="@xs/card-grid:col-span-1 @lg/card-grid:col-span-2">
        <Card />
      </div>
    </div>
  )
}
```

**장점**: 부모 뷰포트가 아닌 컨테이너 크기에 반응하여 더 세밀한 제어 가능.

---

## 9. 성능 테스트

### Playwright E2E 테스트

```typescript
// tests/e2e/responsive/mobile.spec.ts
import { test, expect } from '@playwright/test'

test.describe('모바일 반응형 테스트', () => {
  test.use({
    viewport: { width: 375, height: 667 }, // iPhone SE
  })

  test('홈페이지가 모바일에서 올바르게 렌더링된다', async ({ page }) => {
    await page.goto('/')

    // 헤더가 표시되는지 확인
    const header = page.locator('header')
    await expect(header).toBeVisible()

    // 햄버거 메뉴가 표시되는지 확인 (모바일 전용)
    const menuButton = page.locator('[aria-label="Open menu"]')
    await expect(menuButton).toBeVisible()

    // 터치 타겟 크기 확인 (최소 44x44px)
    const button = page.locator('button').first()
    const box = await button.boundingBox()
    expect(box?.width).toBeGreaterThanOrEqual(44)
    expect(box?.height).toBeGreaterThanOrEqual(44)
  })
})
```

### Lighthouse 성능 테스트

```typescript
// tests/e2e/performance/lighthouse.spec.ts
import { test, expect } from '@playwright/test'
import { playAudit } from 'playwright-lighthouse'

test('Lighthouse 모바일 성능 점수 90+ 달성', async ({ page }) => {
  await page.goto('/')

  await playAudit({
    page,
    thresholds: {
      performance: 90,
      accessibility: 90,
      'best-practices': 90,
      seo: 90,
    },
    port: 9222,
  })
})
```

**설치**:

```bash
npm install --save-dev playwright-lighthouse
```

---

## 10. 디버깅 도구

### 반응형 디버그 컴포넌트

```tsx
// src/components/common/ResponsiveDebug.tsx (개발 환경 전용)
'use client'

import { useBreakpoint } from '@/hooks/useBreakpoint'
import { useViewportSize } from '@/hooks/useViewportSize'

export default function ResponsiveDebug() {
  const breakpoint = useBreakpoint()
  const { width, height, pixelRatio } = useViewportSize()

  if (process.env.NODE_ENV !== 'development') return null

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-sm font-mono z-50">
      <div>Breakpoint: <strong>{breakpoint}</strong></div>
      <div>Viewport: <strong>{width}x{height}</strong></div>
      <div>Device Pixel Ratio: <strong>{pixelRatio}</strong></div>
    </div>
  )
}
```

### 사용법

```tsx
// src/app/layout.tsx
import ResponsiveDebug from '@/components/common/ResponsiveDebug'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <ResponsiveDebug />
      </body>
    </html>
  )
}
```

---

## 11. 체크리스트

구현 시 다음 항목들을 확인하세요:

### 필수 항목

- [ ] Tailwind 브레이크포인트 설정 완료
- [ ] Fluid Typography 유틸리티 추가
- [ ] 반응형 훅 (`useBreakpoint`, `useMediaQuery`) 구현
- [ ] Next.js Image 컴포넌트 사용 (모든 이미지)
- [ ] 최소 터치 타겟 44px 보장 (버튼, 링크)
- [ ] LazyMotion 적용 (번들 크기 감소)
- [ ] 모바일 3D 렌더링 최적화
- [ ] Playwright 반응형 테스트 작성

### 권장 항목

- [ ] Container Query 활용
- [ ] AVIF/WebP 이미지 포맷 사용
- [ ] Lighthouse 점수 90+ 달성
- [ ] 접근성 테스트 (WCAG 2.1 AA)
- [ ] 크로스 브라우저 테스트 (Safari, Chrome, Firefox)

---

## 12. 유용한 명령어

```bash
# 개발 서버 시작
npm run dev

# 프로덕션 빌드
npm run build

# Playwright 테스트 실행
npx playwright test

# Playwright UI 모드 (디버깅)
npx playwright test --ui

# Lighthouse 모바일 테스트
lighthouse http://localhost:3004 --preset=mobile --view

# Lighthouse 데스크톱 테스트
lighthouse http://localhost:3004 --preset=desktop --view

# 번들 크기 분석
npm run build && npx @next/bundle-analyzer
```

---

## 13. 추가 자료

- **Research**: [research.md](./research.md) - 상세한 기술 조사 결과
- **Data Model**: [data-model.md](./data-model.md) - 설정 데이터 모델
- **Spec**: [spec.md](./spec.md) - 기능 명세서
- **Plan**: [plan.md](./plan.md) - 구현 계획

### 외부 문서

- [Next.js Image 최적화](https://nextjs.org/docs/pages/building-your-application/optimizing/images)
- [Tailwind CSS 반응형 디자인](https://tailwindcss.com/docs/responsive-design)
- [Tailwind Container Queries](https://tailwindcss.com/docs/plugins#container-queries)
- [Framer Motion LazyMotion](https://www.framer.com/motion/lazy-motion/)
- [WCAG 2.1 AA 가이드라인](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 문제 해결

### Q: Hydration mismatch 에러가 발생합니다

**A**: `useMediaQuery`와 같은 클라이언트 전용 훅은 SSR 중에 초기값(`false`)을 반환하도록 설계되었습니다. `mounted` 상태를 확인하여 클라이언트에서만 실제 값을 사용하세요.

### Q: Next.js Image가 외부 이미지를 로드하지 못합니다

**A**: `next.config.js`에 외부 도메인을 추가하세요:

```javascript
module.exports = {
  images: {
    domains: ['example.com'],
  },
}
```

### Q: 모바일에서 3D 애니메이션이 느립니다

**A**: `OptimizedCanvas` 컴포넌트를 사용하고, `dpr`과 `antialias`를 조정하여 성능을 개선하세요.

---

**다음 단계**: 이제 `/speckit.tasks` 명령어를 실행하여 구체적인 작업 목록(`tasks.md`)을 생성할 수 있습니다.
