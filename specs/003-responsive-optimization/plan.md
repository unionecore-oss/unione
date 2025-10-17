# Implementation Plan: 반응형 최적화 (Responsive Optimization)

**Branch**: `003-responsive-optimization` | **Date**: 2025-10-17 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/003-responsive-optimization/spec.md`

## Summary

Unione 웹사이트의 모든 페이지를 320px부터 2560px 이상까지 모든 화면 크기에서 최적화하여 사용자 경험을 극대화합니다. 모바일 우선 접근법을 채택하고, Tailwind CSS 4의 Container Query, Next.js Image 최적화, Fluid Typography, 터치 최적화를 통해 모바일 이탈률 30% 감소와 Lighthouse 모바일 점수 90+ 달성을 목표로 합니다.

**핵심 기술 접근법** (research.md 기반):
1. 모바일 우선 + Tailwind CSS 4 Container Query
2. Next.js Image 최적화 (AVIF/WebP 자동 변환)
3. Fluid Typography (CSS clamp 함수)
4. 44px 터치 타겟 보장
5. Framer Motion LazyMotion (번들 크기 85% 감소)
6. 모바일 3D 렌더링 최적화
7. Intersection Observer 레이지 로딩

## Technical Context

**Language/Version**: TypeScript 5.x, Node.js 20+
**Primary Dependencies**: Next.js 15.5.4, React 19.1.0, Tailwind CSS 4.x, Framer Motion 12.23, Three.js, React Three Fiber
**Storage**: N/A (프론트엔드 최적화)
**Testing**: Playwright (E2E), Jest (Unit), Lighthouse (Performance)
**Target Platform**: Web (모든 현대 브라우저 + 모바일 Safari/Chrome)
**Project Type**: Web Application (Next.js App Router)
**Performance Goals**:
- LCP < 2.5초
- FID < 100ms
- CLS < 0.1
- 모바일 Lighthouse 점수 > 90
- 3D 애니메이션 60fps (데스크톱), 30fps (모바일)

**Constraints**:
- 기존 디자인 언어 유지 (rain.xyz 스타일)
- 모든 기존 기능 호환성 유지
- WCAG 2.1 AA 준수
- 번들 크기 증가 없음 (오히려 30% 감소 목표)

**Scale/Scope**:
- 전체 사이트 6개 페이지 (Home, Card, Wallet, Earn, Reward, About Us)
- 50+ 컴포넌트 최적화
- 320px - 2560px+ 화면 크기 지원

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Compliance | Notes |
|-----------|------------|-------|
| **I. Clean Code Principles** | ✅ PASS | 반응형 최적화는 기존 컴포넌트를 리팩토링하여 단일 책임 원칙을 강화합니다. 각 브레이크포인트별 로직을 명확히 분리하고, 재사용 가능한 반응형 훅(useMediaQuery, useViewportSize)을 생성합니다. |
| **II. No Hard Coding** | ✅ PASS | 모든 브레이크포인트, 폰트 크기, 간격은 Tailwind 설정 파일(`tailwind.config.ts`)과 CSS 변수로 중앙 관리합니다. 매직 넘버(예: 768px) 대신 의미 있는 토큰(예: `screens.md`) 사용합니다. |
| **III. Code Reusability** | ✅ PASS | 기존 컴포넌트를 재사용하며, 새로운 반응형 유틸리티(`/src/lib/utils/responsive.ts`)와 공통 훅(`/src/hooks/useBreakpoint.ts`)을 생성하여 전체 프로젝트에서 재사용합니다. |
| **IV. Clear Variable Naming** | ✅ PASS | 반응형 관련 변수는 명확한 네이밍을 사용합니다. 예: `isMobileViewport`, `currentBreakpoint`, `mobileImageSrc`, `desktopImageSrc`. 불린 변수는 `is-`, `has-` 접두사 사용. |
| **V. Consistent Coding Style** | ✅ PASS | 기존 프로젝트의 Tailwind CSS 4 + TypeScript 5 스타일을 유지합니다. Tailwind 유틸리티 클래스 순서는 공식 권장 순서(레이아웃 → 타이포그래피 → 색상 → 애니메이션) 준수. |
| **VI. Production-Grade Quality** | ✅ PASS | WCAG 2.1 AA 접근성 준수, 44px 터치 타겟, Lighthouse 90+ 목표, Next.js Image 최적화(AVIF/WebP), 에러 바운더리 추가, 크로스 브라우저 테스트(Safari, Chrome, Firefox) 포함. |

**Constitution Compliance**: ✅ **ALL PASS** - 모든 헌법 원칙을 준수하며, 추가적인 정당화가 필요한 위반 사항 없음.

## Project Structure

### Documentation (this feature)

```
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```
src/
├── app/                          # Next.js App Router 페이지
│   ├── [locale]/                 # 다국어 라우팅
│   │   ├── page.tsx              # 홈페이지 (반응형 최적화 적용)
│   │   ├── card/page.tsx         # 카드 페이지
│   │   ├── platform/
│   │   │   ├── wallet/page.tsx   # 지갑 페이지
│   │   │   ├── earn/page.tsx     # 적립 페이지
│   │   │   └── reward/page.tsx   # 리워드 페이지
│   │   └── about-us/page.tsx     # 회사 소개 페이지
│   └── layout.tsx                # 루트 레이아웃 (LazyMotion 적용)
│
├── components/
│   ├── common/                   # 공통 컴포넌트 (반응형 최적화)
│   │   ├── Button/              # 터치 타겟 44px 보장
│   │   ├── Input/               # 모바일 입력 최적화
│   │   └── Image/               # Next.js Image 래퍼
│   ├── layout/                   # 레이아웃 컴포넌트
│   │   ├── Header/              # 반응형 네비게이션
│   │   ├── Footer/              # 모바일 최적화 푸터
│   │   └── Navigation/          # 햄버거 메뉴 (모바일)
│   ├── sections/                 # 섹션별 컴포넌트 (전체 반응형 개선)
│   │   ├── home/
│   │   ├── card/
│   │   ├── platform/
│   │   └── company/
│   └── ui/                       # 특수 UI 컴포넌트
│       ├── neural-network-hero.tsx  # 3D 애니메이션 모바일 최적화
│       └── bounce-card-features.tsx
│
├── hooks/                        # 커스텀 훅 (NEW)
│   ├── useBreakpoint.ts         # 현재 브레이크포인트 감지
│   ├── useMediaQuery.ts         # 미디어 쿼리 훅
│   ├── useViewportSize.ts       # 뷰포트 크기 추적
│   └── useTouchDevice.ts        # 터치 디바이스 감지
│
├── lib/
│   ├── animations.ts            # Framer Motion 애니메이션 (LazyMotion)
│   ├── constants.ts             # 상수 정의 (브레이크포인트 추가)
│   └── utils/
│       ├── responsive.ts        # 반응형 유틸리티 (NEW)
│       └── imageLoader.ts       # Image 로더 최적화 (NEW)
│
├── styles/
│   └── globals.css              # Tailwind 커스텀 유틸리티
│
└── types/
    └── responsive.types.ts      # 반응형 타입 정의 (NEW)

tests/
├── e2e/                          # Playwright E2E 테스트
│   ├── responsive/              # 반응형 테스트 (NEW)
│   │   ├── mobile.spec.ts       # 모바일 시나리오
│   │   ├── tablet.spec.ts       # 태블릿 시나리오
│   │   └── desktop.spec.ts      # 데스크톱 시나리오
│   └── performance/             # 성능 테스트 (NEW)
│       └── lighthouse.spec.ts   # Lighthouse 자동화
│
├── integration/
│   └── components/              # 컴포넌트 통합 테스트
│       └── responsive-image.test.tsx
│
└── unit/
    ├── hooks/                   # 훅 단위 테스트 (NEW)
    │   ├── useBreakpoint.test.ts
    │   └── useMediaQuery.test.ts
    └── utils/
        └── responsive.test.ts   # 유틸리티 테스트 (NEW)

public/
└── images/                      # 이미지 에셋
    ├── mobile/                  # 모바일 최적화 이미지 (NEW)
    ├── tablet/                  # 태블릿 이미지 (NEW)
    └── desktop/                 # 데스크톱 이미지 (NEW)

.playwright-mcp/                 # Playwright 스크린샷 저장소
```

**Structure Decision**: Next.js App Router 기반 웹 애플리케이션 구조를 선택했습니다. 이 프로젝트는 프론트엔드 전용이며, 반응형 최적화는 기존 컴포넌트를 개선하고 새로운 반응형 유틸리티(`/src/hooks`, `/src/lib/utils/responsive.ts`)를 추가하는 방식으로 구현됩니다. 6개 페이지(Home, Card, Wallet, Earn, Reward, About Us)와 50+ 컴포넌트가 최적화 대상입니다.

## Complexity Tracking

*Fill ONLY if Constitution Check has violations that must be justified*

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |

