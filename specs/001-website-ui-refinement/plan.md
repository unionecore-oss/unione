# Implementation Plan: Website UI Refinement

**Branch**: `001-website-ui-refinement` | **Date**: 2025-10-16 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-website-ui-refinement/spec.md`

## Summary

This feature comprehensively refines the visual design across 7 pages of the Unione website: Homepage, Card, Reward, Wallet, Earn, About Us (formerly Company), and Footer. The primary goals are to enhance visual appeal through 3D imagery, improve color vibrancy and hierarchy, modernize card designs, adjust text formatting and sizing, update brand colors, remove distracting animations, and streamline social media presence. The technical approach involves CSS/styling updates, image asset replacements, component prop adjustments, and layout refinements—all achievable without backend changes or new data models.

## Technical Context

**Language/Version**: TypeScript 5
**Primary Dependencies**: Next.js 15.5.4 (App Router), Tailwind CSS 4, Framer Motion 12.23, React 19.1
**Storage**: N/A (frontend-only visual updates)
**Testing**: Playwright (E2E), Jest + React Testing Library (Component), Visual Regression Testing
**Target Platform**: Web (Desktop, Tablet, Mobile - responsive)
**Project Type**: Web (existing Next.js frontend)
**Performance Goals**: Maintain current Lighthouse Performance 90+, LCP < 2.5s, CLS < 0.1
**Constraints**: No increase in page load time > 200ms, WCAG 2.1 Level AA compliance, zero ESLint/TypeScript errors
**Scale/Scope**: 7 pages, 28 functional requirements, 10 success criteria

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Core Principles Compliance

✅ **I. Clean Code Principles**
- All styling changes will maintain readable, self-documenting code
- Component refactoring will follow single responsibility principle
- Tailwind utilities will be used consistently to avoid style duplication

✅ **II. No Hard Coding**
- Color values will be defined in Tailwind config or CSS variables
- Size multipliers (e.g., 1.5x, 2x) will be defined as reusable constants
- Image paths will be centralized in a constants file

✅ **III. Code Reusability**
- Existing component structure (`/src/components/sections/`) will be leveraged
- Common styling patterns will use existing utility functions
- Card components will extend existing base card components where possible

✅ **IV. Clear Variable Naming**
- CSS class names will be descriptive (e.g., `cardShowcase3D`, `heroSectionEnhanced`)
- Component props will use clear, self-documenting names
- Animation removal will update prop names to reflect new behavior

✅ **V. Consistent Coding Style**
- All changes will pass ESLint and Prettier checks
- File structure follows existing pattern: `src/components/sections/[page]/[component]`
- TypeScript types will be explicitly defined for all new props

✅ **VI. Production-Grade Quality**
- All color changes will be validated against WCAG AA contrast ratios (4.5:1 / 3:1)
- Image assets will be optimized (WebP with fallbacks)
- Responsive breakpoints will be tested across 3 viewport sizes
- Error boundaries will handle image load failures gracefully
- prefers-reduced-motion will be respected

### Quality Assurance Compliance

✅ **Testing Requirements**
- E2E tests will validate visual changes across all 7 pages
- Component tests will verify responsive behavior at key breakpoints
- Visual regression tests will catch unintended layout shifts

✅ **Code Review Standards**
- PR will target zero ESLint errors (constitution requirement)
- TypeScript will have zero type errors
- Warnings (e.g., img vs Image component) will be documented with justification

✅ **Performance Standards**
- Lighthouse Performance score will remain 90+
- LCP will stay under 2.5s (success criterion SC-004)
- CLS will remain under 0.1 (constitution requirement)

✅ **Accessibility Standards**
- All color contrast ratios will meet 4.5:1 (normal) / 3.1 (large) minimums
- Image alt text will be added/updated for new 3D images
- Keyboard navigation will remain functional
- ARIA labels will be preserved/updated as needed

### Development Standards Compliance

✅ **Technology Stack**
- Uses existing Next.js 15.5.4 + TypeScript 5 + Tailwind CSS 4
- Leverages Framer Motion for remaining animations
- No new dependencies required

✅ **Code Organization**
- Changes confined to `/src/components/sections/` and `/src/components/layout/Footer`
- Follows existing PascalCase for components
- Constants will be added to `/src/lib/constants.ts`

✅ **File Naming Conventions**
- All component files use PascalCase (e.g., `CardHero.tsx`, `HeroSection.tsx`)
- Utility functions remain camelCase
- Constants use UPPER_SNAKE_CASE

### Gate Decision: **PASS** ✅

All constitution principles are satisfied. No violations detected. Proceed to Phase 0.

## Project Structure

### Documentation (this feature)

```
specs/001-website-ui-refinement/
├── plan.md              # This file (/speckit.plan command output)
├── spec.md              # Feature specification (completed)
├── research.md          # Phase 0 output (pending)
├── quickstart.md        # Phase 1 output (pending)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

**Note**: No `data-model.md` or `contracts/` needed - this is a frontend-only visual update with no data model changes or API contracts.

### Source Code (repository root)

```
src/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Homepage (修改: CardShowcase 섹션)
│   ├── card/page.tsx             # Card page (修改: Hero 섹션, footer 섹션)
│   ├── platform/
│   │   ├── reward/page.tsx       # Reward page (修改: CardShowcase 배경색)
│   │   ├── wallet/page.tsx       # Wallet page (修改: 색상, 레이아웃, 이미지)
│   │   └── earn/page.tsx         # Earn page (修改: Hero 텍스트, 애니메이션)
│   └── company/page.tsx          # About Us page (修改: 페이지명, 텍스트 크기, 디자인)
│
├── components/
│   ├── sections/
│   │   ├── home/
│   │   │   └── CardShowcase/     # Homepage showcase (3D image 교체)
│   │   ├── card/
│   │   │   ├── CardHero/         # Card hero (색상 향상)
│   │   │   └── CardGrid/         # Card footer (1.5x 크기)
│   │   ├── platform/
│   │   │   ├── reward/
│   │   │   │   └── CardShowcase/ # Reward cards (디자인 변경, 배경)
│   │   │   ├── wallet/
│   │   │   │   ├── WalletHero/   # Wallet hero (보라색 선)
│   │   │   │   ├── SecuritySection/ # 보안 3D 이미지
│   │   │   │   └── MysticSection/   # 오묘한 이미지 + 텍스트
│   │   │   └── earn/
│   │   │       ├── EarnHero/     # Earn hero (중앙정렬, 볼드)
│   │   │       └── CardGrid/     # Card grid (애니메이션 제거)
│   │   └── company/
│   │       ├── AboutHero/        # About Us hero (텍스트 2x)
│   │       ├── CoreValues/       # 카드 쇼케이스 (디자인 변경)
│   │       └── ContactForm/      # 폼 (세련된 디자인)
│   └── layout/
│       └── Footer/               # Footer (소셜미디어 3개만)
│
├── lib/
│   └── constants.ts              # 색상, 크기 상수 추가
│
└── public/
    └── images/                   # 새 3D 이미지 자산
        ├── card-phone-3d.webp    # Homepage 3D 이미지
        ├── card-phone-3d.png     # Fallback
        ├── security-3d.webp      # Wallet 보안 이미지
        ├── security-3d.png       # Fallback
        ├── mystic-bg.webp        # Wallet 오묘한 이미지
        └── mystic-bg.png         # Fallback

tests/
├── e2e/                          # Playwright E2E tests
│   └── ui-refinement.spec.ts     # 7개 페이지 시각적 검증
└── components/                   # Jest + RTL
    └── sections/                 # 반응형 컴포넌트 테스트
        └── *.test.tsx
```

**Structure Decision**: This is an existing web application (Option 2 pattern). All changes are confined to the `src/` directory with no backend modifications. The structure leverages the existing Next.js App Router pages (`src/app/`) and component architecture (`src/components/sections/`). New 3D image assets will be added to `public/images/` with WebP + PNG fallbacks.

## Complexity Tracking

*No constitution violations detected. This section is intentionally left empty.*
