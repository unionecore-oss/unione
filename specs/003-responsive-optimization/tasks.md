# Tasks: 반응형 최적화 (Responsive Optimization)

**Input**: Design documents from `/specs/003-responsive-optimization/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions
- **Single project**: `src/`, `tests/` at repository root
- Paths assume Next.js App Router structure from plan.md

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic responsive infrastructure

- [ ] T001 Install required dependencies: @tailwindcss/container-queries in package.json
- [ ] T002 Create /src/hooks directory for custom React hooks
- [ ] T003 Create /src/lib/utils directory for utility functions
- [ ] T004 Create /src/types directory for TypeScript type definitions
- [ ] T005 [P] Create /public/images/mobile, /public/images/tablet, /public/images/desktop directories

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core responsive infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T006 Update tailwind.config.ts with extended breakpoints (xs:320px, sm:640px, md:768px, lg:1024px, xl:1280px, 2xl:1536px, 3xl:2560px)
- [X] T007 [P] Add fluid typography utilities to tailwind.config.ts (fluid-display, fluid-h1, fluid-h2, fluid-h3, fluid-body-lg, fluid-body, fluid-small)
- [X] T008 [P] Add min touch target utilities to tailwind.config.ts (minWidth.touch:44px, minHeight.touch:44px)
- [X] T009 [P] Configure container queries in tailwind.config.ts (card, section, sidebar, modal containers)
- [X] T010 Create /src/types/responsive.types.ts with ViewportInfo, ResponsiveImageSource, and BreakpointConfig interfaces
- [X] T011 Create /src/lib/constants.ts with IMAGE_CONFIG, TYPOGRAPHY_SCALE, TOUCH_CONFIG, PERFORMANCE_THRESHOLDS, RENDER_CONFIG
- [X] T012 Implement useMediaQuery hook in /src/hooks/useMediaQuery.ts
- [X] T013 Implement useBreakpoint hook in /src/hooks/useBreakpoint.ts (depends on T012)
- [X] T014 [P] Implement useDeviceType hook in /src/hooks/useBreakpoint.ts (depends on T013)
- [X] T015 [P] Implement useTouchDevice hook in /src/hooks/useTouchDevice.ts (depends on T012)
- [X] T016 [P] Implement useViewportSize hook in /src/hooks/useViewportSize.ts (depends on T013)
- [X] T017 [P] Create responsive utility functions in /src/lib/utils/responsive.ts
- [X] T018 Update /src/app/layout.tsx to wrap children with LazyMotion from framer-motion (번들 크기 85% 감소)
- [X] T019 Update /src/styles/globals.css with Tailwind custom utilities for responsive design

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - 모바일 우선 경험 개선 (Priority: P1) 🎯 MVP

**Goal**: 모바일 사용자가 모든 페이지를 스마트폰에서 완벽하게 볼 수 있도록 최적화 (320px-767px)

**Independent Test**: 스마트폰 또는 브라우저의 모바일 뷰포트 모드(320px-428px)에서 각 페이지를 탐색하며 콘텐츠 가독성, 터치 타겟 크기, 레이아웃 완전성을 검증

### Implementation for User Story 1

- [ ] T020 [P] [US1] Update Header navigation in /src/components/layout/Header/index.tsx with mobile hamburger menu and min-touch-target classes
- [ ] T021 [P] [US1] Update Footer layout in /src/components/layout/Footer/index.tsx with mobile-first column stacking
- [ ] T022 [US1] Update Homepage (/src/app/[locale]/page.tsx) with mobile-first layout (320px base, stack vertically)
- [ ] T023 [US1] Update Card page (/src/app/[locale]/card/page.tsx) with mobile-first layout and touch-optimized buttons
- [ ] T024 [US1] Update Wallet page (/src/app/[locale]/platform/wallet/page.tsx) with mobile-first layout
- [ ] T025 [US1] Update Earn page (/src/app/[locale]/platform/earn/page.tsx) with mobile-first layout
- [ ] T026 [US1] Update Reward page (/src/app/[locale]/platform/reward/page.tsx) with mobile-first layout
- [ ] T027 [US1] Update About Us page (/src/app/[locale]/about-us/page.tsx) with mobile-first layout
- [ ] T028 [P] [US1] Update all Button components in /src/components/common to ensure min-w-touch min-h-touch classes
- [ ] T029 [P] [US1] Update all form Input components to be touch-optimized with appropriate padding and spacing
- [ ] T030 [US1] Add mobile-specific font sizes (minimum 16px for body text) across all text components
- [ ] T031 [US1] Ensure all interactive elements have 8px+ spacing for mobile touch targets

**Checkpoint**: At this point, User Story 1 should be fully functional - all pages work perfectly on mobile (320px-767px)

---

## Phase 4: User Story 5 - 반응형 이미지 및 미디어 최적화 (Priority: P1)

**Goal**: 모든 기기에서 이미지가 최적화되어 빠르게 로드되고 선명하게 표시

**Independent Test**: 다양한 기기(모바일, 태블릿, 데스크톱)에서 네트워크 성능을 모니터링하며 이미지 로드 시간, 파일 크기, 시각적 품질 측정

### Implementation for User Story 5

- [ ] T032 [P] [US5] Create ResponsiveImage component in /src/components/common/ResponsiveImage.tsx using Next.js Image with srcset
- [ ] T033 [P] [US5] Create imageLoader utility in /src/lib/utils/imageLoader.ts for AVIF/WebP format selection
- [ ] T034 [P] [US5] Create OptimizedCanvas component in /src/components/ui/OptimizedCanvas.tsx for 3D rendering (mobile: 30fps, desktop: 60fps)
- [ ] T035 [US5] Update next.config.js with image optimization settings (formats: ['image/avif', 'image/webp'], deviceSizes: [320,420,640,768,1024,1280,1536,2048,2560])
- [ ] T036 [US5] Replace all <img> tags with <ResponsiveImage> in Homepage (/src/app/[locale]/page.tsx)
- [ ] T037 [US5] Replace all <img> tags with <ResponsiveImage> in Card page (/src/app/[locale]/card/page.tsx)
- [ ] T038 [US5] Replace all <img> tags with <ResponsiveImage> in Wallet page (/src/app/[locale]/platform/wallet/page.tsx)
- [ ] T039 [US5] Replace all <img> tags with <ResponsiveImage> in Earn page (/src/app/[locale]/platform/earn/page.tsx)
- [ ] T040 [US5] Replace all <img> tags with <ResponsiveImage> in Reward page (/src/app/[locale]/platform/reward/page.tsx)
- [ ] T041 [US5] Replace all <img> tags with <ResponsiveImage> in About Us page (/src/app/[locale]/about-us/page.tsx)
- [ ] T042 [US5] Update neural-network-hero 3D component (/src/components/ui/neural-network-hero.tsx) to use OptimizedCanvas for mobile performance
- [ ] T043 [US5] Update CardShowcase 3D component (/src/components/sections/home/CardShowcase/index.tsx) to use OptimizedCanvas

**Checkpoint**: At this point, User Stories 1 AND 5 should both work - mobile experience is fast with optimized images

---

## Phase 5: User Story 2 - 태블릿 레이아웃 최적화 (Priority: P2)

**Goal**: 태블릿 사용자(768px-1024px)에게 데스크톱과 모바일의 중간 형태로 최적화된 레이아웃 제공

**Independent Test**: 태블릿 기기 또는 브라우저의 태블릿 뷰포트 모드(768px-1024px)에서 각 페이지의 레이아웃, 간격, 콘텐츠 배치를 검증

### Implementation for User Story 2

- [ ] T044 [US2] Add tablet breakpoint styles (md:) to Homepage (/src/app/[locale]/page.tsx) - 2열 그리드 레이아웃
- [ ] T045 [US2] Add tablet breakpoint styles (md:) to Card page (/src/app/[locale]/card/page.tsx) - 2열 그리드
- [ ] T046 [US2] Add tablet breakpoint styles (md:) to Wallet page - 2열 콘텐츠 배치
- [ ] T047 [US2] Add tablet breakpoint styles (md:) to Earn page - 2열 카드 그리드
- [ ] T048 [US2] Add tablet breakpoint styles (md:) to Reward page - 2열 섹션
- [ ] T049 [US2] Add tablet breakpoint styles (md:) to About Us page - 2열 레이아웃
- [ ] T050 [US2] Update Header navigation (/src/components/layout/Header/index.tsx) to show expanded nav bar (not hamburger) on tablet (md:)
- [ ] T051 [US2] Update Features sections to display 3-column grid on tablet landscape mode
- [ ] T052 [US2] Adjust spacing and padding for tablet screens across all section components

**Checkpoint**: User Stories 1, 5, AND 2 work independently - mobile, tablet experiences optimized

---

## Phase 6: User Story 3 - 데스크톱 화면 크기별 최적화 (Priority: P2)

**Goal**: 데스크톱 사용자가 다양한 화면 크기(1280px, 1920px, 2560px+)에서 최적화된 레이아웃 경험

**Independent Test**: 다양한 데스크톱 화면 크기(1280px, 1440px, 1920px, 2560px)에서 브라우저 크기를 조정하며 레이아웃 변화, 최대 콘텐츠 너비, 여백 비율을 검증

### Implementation for User Story 3

- [ ] T053 [US3] Add desktop breakpoint styles (lg:, xl:, 2xl:, 3xl:) to Homepage with max-width 1440px and center alignment
- [ ] T054 [US3] Add desktop breakpoint styles to Card page with 4-column grid (lg:grid-cols-4)
- [ ] T055 [US3] Add desktop breakpoint styles to Wallet page with 3-column layout
- [ ] T056 [US3] Add desktop breakpoint styles to Earn page with 4-column card grid
- [ ] T057 [US3] Add desktop breakpoint styles to Reward page with optimized wide-screen layout
- [ ] T058 [US3] Add desktop breakpoint styles to About Us page with 3-column content sections
- [ ] T059 [US3] Update Features section to show 4-column grid on desktop (lg:grid-cols-4)
- [ ] T060 [US3] Add container-custom utility with max-width:1440px to wrap all page content
- [ ] T061 [US3] Optimize images for 4K displays (2560px+) with 2x/3x resolution support
- [ ] T062 [US3] Add 3xl: breakpoint styles for ultra-wide monitors (2560px+) with appropriate margins

**Checkpoint**: User Stories 1, 5, 2, AND 3 work independently - all device sizes optimized

---

## Phase 7: User Story 4 - 동적 폰트 크기 조정 (Priority: P3)

**Goal**: 모든 기기에서 텍스트 크기가 화면 크기에 비례하여 자연스럽게 조정

**Independent Test**: 브라우저 너비를 320px에서 2560px까지 연속적으로 조정하며 헤드라인, 본문, 버튼 텍스트의 크기 변화를 관찰

### Implementation for User Story 4

- [ ] T063 [P] [US4] Replace fixed font sizes with fluid typography in Homepage hero section (text-fluid-display)
- [ ] T064 [P] [US4] Replace fixed font sizes with fluid typography in Card page headlines (text-fluid-h1, text-fluid-h2)
- [ ] T065 [P] [US4] Replace fixed font sizes with fluid typography in Wallet page (text-fluid-h2, text-fluid-body-lg)
- [ ] T066 [P] [US4] Replace fixed font sizes with fluid typography in Earn page (text-fluid-h1, text-fluid-body)
- [ ] T067 [P] [US4] Replace fixed font sizes with fluid typography in Reward page (text-fluid-h2, text-fluid-h3)
- [ ] T068 [P] [US4] Replace fixed font sizes with fluid typography in About Us page (text-fluid-h1, text-fluid-body-lg)
- [ ] T069 [US4] Update all section component headings to use fluid typography classes
- [ ] T070 [US4] Update all paragraph text to use text-fluid-body or text-fluid-body-lg
- [ ] T071 [US4] Update button text to use text-fluid-small or text-fluid-body (14px-16px range)
- [ ] T072 [US4] Verify H1 headlines scale from minimum 28px (mobile) to maximum 48px (desktop)

**Checkpoint**: User Stories 1, 5, 2, 3, AND 4 work - complete responsive typography across all devices

---

## Phase 8: User Story 6 - 터치 최적화 인터랙션 (Priority: P2)

**Goal**: 터치 기기 사용자가 모든 인터랙티브 요소와 정확하고 편안하게 상호작용

**Independent Test**: 터치 기기에서 모든 인터랙티브 요소를 손가락으로 탭하며 정확성, 간격, 피드백을 검증

### Implementation for User Story 6

- [ ] T073 [P] [US6] Add touch feedback (hover states with @media (hover:hover)) to all buttons
- [ ] T074 [P] [US6] Add ripple effect or active states to button components for touch feedback
- [ ] T075 [US6] Verify all navigation menu items have min-touch-target (44x44px) and 8px+ spacing
- [ ] T076 [US6] Update checkbox and radio button components with larger touch areas (min 44x44px)
- [ ] T077 [US6] Update dropdown menu options with sufficient padding and height for easy selection
- [ ] T078 [US6] Add visual feedback (color change, scale) to all interactive elements on tap
- [ ] T079 [US6] Verify all form elements (inputs, selects, textareas) are touch-optimized with appropriate sizing
- [ ] T080 [US6] Add touch-action CSS property to prevent unintended gestures on interactive elements
- [ ] T081 [US6] Test and adjust touch target spacing across all pages to prevent accidental taps

**Checkpoint**: All user stories complete - full responsive experience with optimal touch interactions

---

## Phase 9: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories and final optimizations

- [ ] T082 [P] Add ResponsiveDebug component in /src/components/common/ResponsiveDebug.tsx (development only)
- [ ] T083 [P] Create Playwright E2E test for mobile viewport (375x667) in /tests/e2e/responsive/mobile.spec.ts
- [ ] T084 [P] Create Playwright E2E test for tablet viewport (768x1024) in /tests/e2e/responsive/tablet.spec.ts
- [ ] T085 [P] Create Playwright E2E test for desktop viewport (1920x1080) in /tests/e2e/responsive/desktop.spec.ts
- [ ] T086 [P] Create Lighthouse performance test in /tests/e2e/performance/lighthouse.spec.ts (target: mobile 90+)
- [ ] T087 [P] Add unit tests for useBreakpoint hook in /tests/unit/hooks/useBreakpoint.test.ts
- [ ] T088 [P] Add unit tests for useMediaQuery hook in /tests/unit/hooks/useMediaQuery.test.ts
- [ ] T089 Test device rotation (portrait ↔ landscape) across all pages
- [ ] T090 Test browser zoom levels (50%-200%) for layout integrity
- [ ] T091 Test on small devices (iPhone SE 375px, small Android 320px) for content accessibility
- [ ] T092 Test on ultra-wide monitors (2560px+) for max-width constraints
- [ ] T093 Verify no horizontal scrolling occurs at any breakpoint
- [ ] T094 Test with slow 3G network connection for image loading and progressive enhancement
- [ ] T095 Run accessibility audit with axe DevTools for responsive-related issues (target: 0 issues)
- [ ] T096 Test high contrast mode compatibility
- [ ] T097 Test virtual keyboard behavior on mobile (ensure content not hidden)
- [ ] T098 Optimize bundle size - verify LazyMotion reduces Framer Motion by 85%
- [ ] T099 Run Google Mobile-Friendly Test on all pages (target: 100% pass)
- [ ] T100 Performance optimization: verify LCP < 2.5s, FID < 100ms, CLS < 0.1 on mobile

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-8)**: All depend on Foundational phase completion
  - User Story 1 (P1) - Mobile First: Can start after Phase 2 (MVP)
  - User Story 5 (P1) - Responsive Images: Can start after Phase 2 (MVP)
  - User Story 2 (P2) - Tablet: Can start after Phase 2 or after US1/US5
  - User Story 3 (P2) - Desktop: Can start after Phase 2 or after US1/US5
  - User Story 4 (P3) - Fluid Typography: Can start after Phase 2
  - User Story 6 (P2) - Touch: Can start after Phase 2
- **Polish (Phase 9)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1) - Mobile First**: Can start after Foundational (Phase 2) - No dependencies on other stories (MVP CORE)
- **User Story 5 (P1) - Responsive Images**: Can start after Foundational (Phase 2) - No dependencies (MVP CORE)
- **User Story 2 (P2) - Tablet**: Can start after Foundational (Phase 2) - Builds on US1 mobile-first foundation
- **User Story 3 (P2) - Desktop**: Can start after Foundational (Phase 2) - Builds on US1 mobile-first foundation
- **User Story 4 (P3) - Fluid Typography**: Can start after Foundational (Phase 2) - Independent, can be added anytime
- **User Story 6 (P2) - Touch**: Can start after Foundational (Phase 2) - Enhances US1 mobile experience

### Within Each User Story

- Models/Components before Pages
- Core components before specialized components
- Foundation layouts before refinements
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks (T001-T005) marked [P] can run in parallel
- All Foundational tasks (T007-T009, T012, T014-T017) marked [P] can run in parallel within their dependency groups
- User Story 1 tasks marked [P] (T020-T021, T028-T029) can run in parallel
- User Story 5 tasks marked [P] (T032-T034) can run in parallel
- User Story 4 tasks marked [P] (T063-T068) can run in parallel
- User Story 6 tasks marked [P] (T073-T074) can run in parallel
- Polish phase tests marked [P] (T082-T088) can run in parallel

---

## Parallel Example: User Story 1 (Mobile First)

```bash
# Launch parallel mobile-first updates:
Task T020: "Update Header navigation with mobile hamburger menu"
Task T021: "Update Footer layout with mobile-first column stacking"
Task T028: "Update all Button components with touch targets"
Task T029: "Update all Input components with touch optimization"

# Then sequentially:
Task T022: "Update Homepage with mobile-first layout"
Task T023: "Update Card page with mobile-first layout"
# ... (pages depend on header/footer/button updates)
```

---

## Implementation Strategy

### MVP First (User Stories 1 + 5 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1 (Mobile First)
4. Complete Phase 4: User Story 5 (Responsive Images)
5. **STOP and VALIDATE**: Test on mobile devices (320px-767px)
6. Deploy/demo if ready - **MVP complete with mobile-first + optimized images**

### Incremental Delivery

1. MVP: Setup + Foundational + US1 + US5 → Mobile-first experience ready ✅
2. Add User Story 2 → Tablet optimized → Deploy/Demo
3. Add User Story 3 → Desktop optimized → Deploy/Demo
4. Add User Story 4 → Fluid typography → Deploy/Demo
5. Add User Story 6 → Touch interactions → Deploy/Demo
6. Polish phase → Production-ready

### Parallel Team Strategy

With multiple developers after Foundational phase completes:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (Mobile First)
   - Developer B: User Story 5 (Responsive Images)
   - Developer C: User Story 4 (Fluid Typography)
3. After MVP (US1 + US5):
   - Developer A: User Story 2 (Tablet)
   - Developer B: User Story 3 (Desktop)
   - Developer C: User Story 6 (Touch)

---

## Notes

- [P] tasks = different files, no dependencies - can run in parallel
- [Story] label maps task to specific user story for traceability (US1-US6)
- Each user story should be independently completable and testable
- Mobile-first approach: Start with US1, then layer tablet (US2) and desktop (US3)
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- MVP = User Story 1 (Mobile) + User Story 5 (Images) = Core responsive experience

---

## Task Summary

- **Total Tasks**: 100
- **Setup Phase**: 5 tasks
- **Foundational Phase**: 14 tasks (BLOCKING)
- **User Story 1 (P1 - Mobile)**: 12 tasks
- **User Story 5 (P1 - Images)**: 12 tasks
- **User Story 2 (P2 - Tablet)**: 9 tasks
- **User Story 3 (P2 - Desktop)**: 10 tasks
- **User Story 4 (P3 - Typography)**: 10 tasks
- **User Story 6 (P2 - Touch)**: 9 tasks
- **Polish Phase**: 19 tasks

**MVP Scope**: Phase 1 (5) + Phase 2 (14) + Phase 3 (12) + Phase 4 (12) = **43 tasks for MVP**
