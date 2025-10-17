# Implementation Tasks: Website UI Refinement

**Feature**: 001-website-ui-refinement | **Created**: 2025-10-16 | **Spec**: [spec.md](./spec.md) | **Plan**: [plan.md](./plan.md)

## Overview

This document provides an actionable, dependency-ordered task list for implementing the Website UI Refinement feature. Tasks are organized by user story priority (P1 → P2 → P3) to enable incremental, independently testable delivery.

**Tech Stack**: Next.js 15.5.4, TypeScript 5, Tailwind CSS 4, Framer Motion 12.23, React 19.1
**Target**: 7 pages (Homepage, Card, Reward, Wallet, Earn, About Us, Footer)
**Scope**: Frontend visual updates only - no backend changes

---

## Implementation Strategy

### MVP Approach
**MVP = User Story 1 (Homepage 3D Image)** - Delivers immediate value with minimal dependencies.

### Delivery Increments
1. **Increment 1 (P1)**: US1 (Homepage) + US2 (Card Page) - Core visual improvements
2. **Increment 2 (P2)**: US3 (Reward) + US4 (Wallet) + US6 (About Us) - Secondary pages
3. **Increment 3 (P3)**: US5 (Earn) + US7 (Footer) - Polish & minor updates

### Parallel Execution
- **User Stories**: Each story (US1-US7) can be implemented independently in parallel after foundational tasks
- **Within Story**: Tasks marked `[P]` can be parallelized (different files, no dependencies)

---

## Phase 1: Setup & Preparation

**Goal**: Prepare project structure and image assets for all visual changes.

### Image Asset Preparation

- [ ] T001 Source or create 3D card-phone image for Homepage (1200x800px, WebP + PNG fallback) in public/images/card-phone-3d.webp
- [ ] T002 Source or create security-themed 3D image for Wallet page (600x600px, WebP + PNG fallback) in public/images/security-3d.webp
- [ ] T003 Source or create mystical/ethereal image for Wallet page (800x600px, WebP + PNG fallback) in public/images/mystic-bg.webp
- [ ] T004 Optimize all images (WebP 85% quality, PNG TinyPNG compression) and verify file sizes

### Configuration Setup

- [ ] T005 [P] Define color constants in src/lib/constants.ts (PURPLE_ACCENT, REWARD_BG, etc.)
- [ ] T006 [P] Define size scale constants in src/lib/constants.ts (CARD_SIZE_MULTIPLIER_1_5X, TEXT_SIZE_MULTIPLIER_2X)
- [ ] T007 [P] Define image path constants in src/lib/constants.ts (IMAGE_PATHS object)
- [ ] T008 Update Tailwind config if needed for custom colors (tailwind.config.ts)

---

## Phase 2: Foundational Tasks

**Goal**: Establish shared utilities and type definitions used across multiple user stories.

**⚠️ BLOCKING**: These tasks must complete before any user story implementation begins.

### Type Definitions

- [ ] T009 [P] Define ImageAsset interface with WebP/PNG fallback props in src/types/images.types.ts
- [ ] T010 [P] Define ResponsiveSize type for breakpoint-specific sizing in src/types/layout.types.ts

### Utility Functions

- [ ] T011 [P] Create image loader utility with error handling and fallback logic in src/lib/utils/imageLoader.ts
- [ ] T012 [P] Create color filter utility (saturate, contrast, brightness) in src/lib/utils/colorFilters.ts
- [ ] T013 [P] Create responsive size calculator utility in src/lib/utils/responsiveSize.ts

### Motion Preference Handling

- [ ] T013a [P] Create prefers-reduced-motion utility in src/lib/utils/motionPreference.ts
- [ ] T013b [P] Apply motion preference check to remaining animations (if any exist after T091-T094)

---

## Phase 3: User Story 1 - Homepage 3D Image (P1) 🎯 MVP

**Story Goal**: Replace homepage card showcase image with 3D card floating above horizontal phone.

**Independent Test**: Navigate to http://localhost:3000 and verify 3D image displays without layout shift, loads within 2s, and scales responsively.

### Implementation Tasks

- [ ] T014 [US1] Update CardShowcase component to use Next.js Image component in src/components/sections/home/CardShowcase/index.tsx
- [ ] T015 [US1] Replace existing image with card-phone-3d.webp (priority, width, height props) in src/components/sections/home/CardShowcase/index.tsx
- [ ] T016 [US1] Add PNG fallback configuration for browsers without WebP support in src/components/sections/home/CardShowcase/index.tsx
- [ ] T017 [US1] Add descriptive alt text for accessibility in src/components/sections/home/CardShowcase/index.tsx
- [ ] T018 [US1] Implement responsive scaling (mobile: 100%, tablet: 90%, desktop: 80%) in src/components/sections/home/CardShowcase/index.tsx
- [ ] T019 [US1] Add error boundary for image load failures in src/components/sections/home/CardShowcase/ErrorBoundary.tsx

### Validation Tasks

- [ ] T020 [US1] Manual test: Verify image loads within 2 seconds on localhost
- [ ] T021 [US1] Manual test: Verify responsive scaling at 375px, 768px, 1440px viewports
- [ ] T022 [US1] Manual test: Verify no layout shift (CLS < 0.1) during image load
- [ ] T023 [US1] Run Lighthouse audit - verify Performance 90+, Accessibility 100

---

## Phase 4: User Story 2 - Card Page Visual Enhancements (P1)

**Story Goal**: Enhance card colors (saturation) and increase footer card sizes to 1.5x.

**Independent Test**: Navigate to http://localhost:3000/card and verify (1) hero background card has deeper colors, (2) footer cards are 1.5x larger with maintained aspect ratio.

### Hero Section Color Enhancement

- [ ] T024 [P] [US2] Apply CSS filter (saturate 150%, contrast 110%, brightness 105%) to hero background in src/components/sections/card/CardHero/index.tsx
- [ ] T025 [P] [US2] Verify WCAG AA contrast ratios for text over enhanced background in src/components/sections/card/CardHero/index.tsx
- [ ] T026 [P] [US2] Add optional gradient overlay for visual depth in src/components/sections/card/CardHero/index.tsx

### Footer Card Size Increase

- [ ] T027 [P] [US2] Identify current card dimensions in CardGrid component in src/components/sections/card/CardGrid/index.tsx
- [ ] T028 [US2] Calculate 1.5x dimensions (desktop: 480x300px, tablet: 400x250px, mobile: 320x200px) in src/components/sections/card/CardGrid/index.tsx
- [ ] T029 [US2] Update Tailwind classes for responsive card sizing in src/components/sections/card/CardGrid/index.tsx
- [ ] T030 [US2] Adjust grid layout to accommodate larger cards without overflow in src/components/sections/card/CardGrid/index.tsx
- [ ] T031 [US2] Verify aspect ratio maintained across breakpoints in src/components/sections/card/CardGrid/index.tsx

### Validation Tasks

- [ ] T032 [US2] Manual test: Measure card dimensions with browser dev tools (expect 1.5x)
- [ ] T033 [US2] Manual test: Verify color saturation improvement visible to eye
- [ ] T034 [US2] Manual test: Test responsive layout at 375px, 768px, 1440px - no overflow
- [ ] T035 [US2] Run axe accessibility audit - verify no contrast violations

---

## Phase 5: User Story 3 - Reward Page Design Refresh (P2)

**Story Goal**: Redesign 3 showcase cards with modern styling and add background color separation from hero.

**Independent Test**: Navigate to http://localhost:3000/platform/reward and verify (1) three cards have updated modern design, (2) background color distinguishes showcase from hero section.

### Background Color Separation

- [ ] T036 [P] [US3] Change CardShowcase section background to purple-50 (#faf5ff) in src/components/sections/platform/reward/CardShowcase/index.tsx
- [ ] T037 [P] [US3] Verify visual distinction from hero section (white background) in src/components/sections/platform/reward/CardShowcase/index.tsx
- [ ] T038 [P] [US3] Verify WCAG AA contrast for text on purple-50 background in src/components/sections/platform/reward/CardShowcase/index.tsx

### Card Design Modernization

- [ ] T039 [US3] Redesign card 1: Update border radius (rounded-2xl), shadow (shadow-lg), padding in src/components/sections/platform/reward/CardShowcase/Card1.tsx
- [ ] T040 [US3] Redesign card 2: Update border radius, shadow, padding in src/components/sections/platform/reward/CardShowcase/Card2.tsx
- [ ] T041 [US3] Redesign card 3: Update border radius, shadow, padding in src/components/sections/platform/reward/CardShowcase/Card3.tsx
- [ ] T042 [US3] Add hover state transitions (shadow-xl, scale 102%) to all 3 cards in src/components/sections/platform/reward/CardShowcase/index.tsx
- [ ] T043 [US3] Ensure consistent spacing between cards (gap-8) in src/components/sections/platform/reward/CardShowcase/index.tsx

### Validation Tasks

- [ ] T044 [US3] Manual test: Verify background color clearly separates sections
- [ ] T045 [US3] Manual test: Verify modern card aesthetics (rounded corners, shadows)
- [ ] T046 [US3] Manual test: Test hover states on desktop
- [ ] T047 [US3] Visual regression test: Compare before/after screenshots

---

## Phase 6: User Story 4 - Wallet Page Brand Updates (P2)

**Story Goal**: Update wallet page with purple accent line, white section background, security 3D image, and mystical left-right layout.

**Independent Test**: Navigate to http://localhost:3000/platform/wallet and verify (1) purple accent line in hero, (2) white background in section 2, (3) security image in section 2, (4) mystical image left + text right in section 3.

### Hero Section - Purple Accent Line

- [ ] T048 [P] [US4] Replace green accent line with purple-600 (#9333ea) in src/components/sections/platform/wallet/WalletHero/index.tsx
- [ ] T049 [P] [US4] Verify purple aligns with brand color system in src/components/sections/platform/wallet/WalletHero/index.tsx

### Security Section - Background & Imagery

- [ ] T050 [P] [US4] Change SecuritySection background to white (bg-white) in src/components/sections/platform/wallet/SecuritySection/index.tsx
- [ ] T051 [US4] Replace existing card image with security-3d.webp in src/components/sections/platform/wallet/SecuritySection/index.tsx
- [ ] T052 [US4] Implement 2-column grid (image left, text right) with responsive stacking in src/components/sections/platform/wallet/SecuritySection/index.tsx
- [ ] T053 [US4] Add alt text for security image (accessibility) in src/components/sections/platform/wallet/SecuritySection/index.tsx

### Mystical Section - Left-Right Layout

- [ ] T054 [P] [US4] Create or update MysticSection component with 2-column grid in src/components/sections/platform/wallet/MysticSection/index.tsx
- [ ] T055 [US4] Add mystical image (mystic-bg.webp) to left column with rounded corners in src/components/sections/platform/wallet/MysticSection/index.tsx
- [ ] T056 [US4] Add descriptive text content to right column in src/components/sections/platform/wallet/MysticSection/index.tsx
- [ ] T057 [US4] Implement mobile stacking (image top, text bottom) in src/components/sections/platform/wallet/MysticSection/index.tsx
- [ ] T058 [US4] Add alt text for mystical image in src/components/sections/platform/wallet/MysticSection/index.tsx

### Validation Tasks

- [ ] T059 [US4] Manual test: Verify purple accent line replaces green
- [ ] T060 [US4] Manual test: Verify white background in security section
- [ ] T061 [US4] Manual test: Verify images load and layout correctly
- [ ] T062 [US4] Manual test: Test responsive stacking on mobile (375px)
- [ ] T063 [US4] Run Lighthouse accessibility audit

---

## Phase 7: User Story 6 - About Us Page Redesign (P2)

**Story Goal**: Rename to "About Us", increase all text 2x, modernize 4 cards, refine contact form design.

**Independent Test**: Navigate to http://localhost:3000/company (will be /about-us after route change) and verify (1) page title "About Us", (2) all text 2x larger, (3) 4 modern cards, (4) refined form.

### Page Rename & Route

- [ ] T064 [P] [US6] Rename company/page.tsx to about-us/page.tsx or update metadata in src/app/company/page.tsx
- [ ] T065 [P] [US6] Update navigation links to point to /about-us in src/components/layout/Navigation/index.tsx
- [ ] T066 [P] [US6] Update page title and h1 to "About Us" in src/app/company/page.tsx

### Text Size 2x Increase

- [ ] T067 [US6] Identify all text elements (h1, h2, h3, p, li) in AboutHero component in src/components/sections/company/AboutHero/index.tsx
- [ ] T068 [US6] Update Tailwind text classes to 2x size (text-base → text-3xl, text-xl → text-5xl, etc.) in src/components/sections/company/AboutHero/index.tsx
- [ ] T069 [US6] Adjust line-height (leading-tight) and spacing (space-y-16) to prevent layout breaks in src/components/sections/company/AboutHero/index.tsx
- [ ] T070 [US6] Update container max-width (max-w-6xl) to accommodate larger text in src/components/sections/company/AboutHero/index.tsx
- [ ] T071 [US6] Implement responsive text sizing for mobile (smaller multiplier: 1.5x on mobile) in src/components/sections/company/AboutHero/index.tsx

### Card Showcase Modernization

- [ ] T072 [P] [US6] Redesign card 1: Increase size, apply modern design (rounded-2xl, shadow-lg) in src/components/sections/company/CoreValues/Card1.tsx
- [ ] T073 [P] [US6] Redesign card 2: Increase size, apply modern design in src/components/sections/company/CoreValues/Card2.tsx
- [ ] T074 [P] [US6] Redesign card 3: Increase size, apply modern design in src/components/sections/company/CoreValues/Card3.tsx
- [ ] T075 [P] [US6] Redesign card 4: Increase size, apply modern design in src/components/sections/company/CoreValues/Card4.tsx
- [ ] T076 [US6] Ensure consistent spacing (gap-12) and alignment in src/components/sections/company/CoreValues/index.tsx

### Contact Form Refinement

- [ ] T077 [US6] Update input fields: rounded-2xl borders, larger padding (px-6 py-4) in src/components/sections/company/ContactForm/index.tsx
- [ ] T078 [US6] Add subtle focus states (focus:ring-2 ring-purple-100, focus:border-purple-400) in src/components/sections/company/ContactForm/index.tsx
- [ ] T079 [US6] Update submit button: gradient background (bg-gradient-to-r from-purple-600 to-pink-600) in src/components/sections/company/ContactForm/index.tsx
- [ ] T080 [US6] Add shadow effects to button (shadow-lg shadow-purple-500/30) in src/components/sections/company/ContactForm/index.tsx
- [ ] T081 [US6] Implement hover states (shadow-xl, subtle scale) in src/components/sections/company/ContactForm/index.tsx

### Validation Tasks

- [ ] T082 [US6] Manual test: Verify page title is "About Us"
- [ ] T083 [US6] Manual test: Measure text size with dev tools (expect 2x computed font-size)
- [ ] T084 [US6] Manual test: Verify no layout breaks or text overflow
- [ ] T085 [US6] Manual test: Verify card designs are modern and consistent
- [ ] T086 [US6] Manual test: Test form inputs and button interactions
- [ ] T087 [US6] Manual test: Test responsive layout on mobile (375px)

---

## Phase 8: User Story 5 - Earn Page Text & Animation (P3)

**Story Goal**: Center-align and bold hero text (2 lines), remove green bar animation from card grid.

**Independent Test**: Navigate to http://localhost:3000/platform/earn and verify (1) hero text center-aligned, bold, 2 lines, (2) no green bar animation on card images.

### Hero Text Formatting

- [ ] T088 [P] [US5] Apply text-center, font-bold to hero headline in src/components/sections/platform/earn/EarnHero/index.tsx
- [ ] T089 [P] [US5] Add max-width constraint to force 2-line layout (max-w-2xl) in src/components/sections/platform/earn/EarnHero/index.tsx
- [ ] T090 [P] [US5] Verify readability and line breaks on mobile in src/components/sections/platform/earn/EarnHero/index.tsx

### Animation Removal

- [ ] T091 [US5] Locate green bar animation code in CardGrid component (likely Framer Motion animate prop) in src/components/sections/platform/earn/CardGrid/index.tsx
- [ ] T092 [US5] Remove or disable animation (remove motion.div wrapper or animate prop) in src/components/sections/platform/earn/CardGrid/index.tsx
- [ ] T093 [US5] Remove related Framer Motion imports if no longer used in src/components/sections/platform/earn/CardGrid/index.tsx
- [ ] T094 [US5] Verify other interactions on cards remain functional in src/components/sections/platform/earn/CardGrid/index.tsx

### Validation Tasks

- [ ] T095 [US5] Manual test: Verify hero text is centered and bold
- [ ] T096 [US5] Manual test: Verify text spans exactly 2 lines on desktop
- [ ] T097 [US5] Manual test: Verify no green bar animation on card images
- [ ] T098 [US5] Manual test: Test on mobile - verify text remains readable

---

## Phase 9: User Story 7 - Footer Social Media Cleanup (P3)

**Story Goal**: Display only 3 social media buttons (Instagram, X, Telegram) consistently across all pages.

**Independent Test**: Scroll to footer on any page and verify only 3 social media buttons (Instagram, X, Telegram) are displayed with consistent spacing.

### Social Media Button Reduction

- [ ] T099 [P] [US7] Update SOCIAL_MEDIA_LINKS constant to include only Instagram, X, Telegram in src/lib/constants.ts
- [ ] T100 [P] [US7] Remove other social media button definitions (Facebook, LinkedIn, YouTube, etc.) in src/lib/constants.ts
- [ ] T101 [US7] Update Footer component to render only 3 buttons from constant in src/components/layout/Footer/index.tsx
- [ ] T102 [US7] Adjust spacing (gap-6) for visual balance with 3 buttons in src/components/layout/Footer/index.tsx
- [ ] T103 [US7] Verify icons are consistent size and style in src/components/layout/Footer/index.tsx

### Validation Tasks

- [ ] T104 [US7] Manual test: Verify exactly 3 buttons on homepage footer
- [ ] T105 [US7] Manual test: Verify same 3 buttons on all 7 pages
- [ ] T106 [US7] Manual test: Verify spacing is visually balanced
- [ ] T107 [US7] Manual test: Test hover states on all 3 buttons

---

## Phase 10: Polish & Cross-Cutting Concerns

**Goal**: Final quality checks, performance optimization, and comprehensive testing.

### Performance Optimization

- [ ] T108 [P] Verify all images use Next.js Image component with proper width/height
- [ ] T109 [P] Add loading="lazy" to below-fold images
- [ ] T110 [P] Verify priority flag on above-fold images (Homepage 3D image)
- [ ] T111 Run Lighthouse audits on all 7 pages - verify Performance 90+, LCP < 2.5s

### Accessibility Final Checks

- [ ] T112 [P] Run axe DevTools on all 7 pages - verify no violations
- [ ] T113 [P] Verify all images have descriptive alt text
- [ ] T114 [P] Test keyboard navigation on all interactive elements
- [ ] T115 [P] Verify WCAG AA contrast ratios on all color changes
- [ ] T116 Test with screen reader (VoiceOver/NVDA) on key pages

### Responsive Testing

- [ ] T117 Test all pages at 375px (mobile) - verify no horizontal scroll
- [ ] T118 Test all pages at 768px (tablet) - verify layout adapts correctly
- [ ] T119 Test all pages at 1440px (desktop) - verify visual hierarchy
- [ ] T120 Test on real devices: iPhone, iPad, Android phone

### Code Quality

- [ ] T121 Run ESLint - fix all errors, document any necessary warnings
- [ ] T122 Run TypeScript compiler - fix all type errors
- [ ] T123 Run Prettier - format all modified files
- [ ] T124 Review all console logs - remove debug statements

### Visual Regression Testing

- [ ] T125 [P] Take baseline screenshots of all 7 pages before deployment
- [ ] T126 [P] Compare production screenshots against baseline
- [ ] T127 Review and approve visual changes

### Documentation

- [ ] T128 Take before/after screenshots for all visual changes
- [ ] T129 Update README if needed with new design decisions
- [ ] T130 Document any deviations from original spec

---

## Dependency Graph

### Story Completion Order

```
Phase 1 (Setup) → Phase 2 (Foundational)
                       ↓
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
    US1 (P1)       US2 (P1)       US3 (P2)
    US4 (P2)       US5 (P3)       US6 (P2)
    US7 (P3)
        ↓
   Phase 10 (Polish)
```

**Blocking Dependencies**:
- Phase 2 (Foundational) **MUST** complete before any US implementation
- US1-US7 can run in **parallel** after Phase 2
- Phase 10 (Polish) requires **all** US complete

**No Inter-Story Dependencies**: Each user story is independently implementable and testable.

---

## Parallel Execution Examples

### Maximum Parallelization (7 streams after Phase 2)

```bash
# Developer 1: US1 (Homepage)
npm run dev & open http://localhost:3000

# Developer 2: US2 (Card Page)
npm run dev & open http://localhost:3000/card

# Developer 3: US3 (Reward)
npm run dev & open http://localhost:3000/platform/reward

# Developer 4: US4 (Wallet)
npm run dev & open http://localhost:3000/platform/wallet

# Developer 5: US5 (Earn)
npm run dev & open http://localhost:3000/platform/earn

# Developer 6: US6 (About Us)
npm run dev & open http://localhost:3000/company

# Developer 7: US7 (Footer)
# Can be done on any page
```

### Within-Story Parallelization

**US2 (Card Page) - 2 parallel streams**:
- Stream A: T024-T026 (Hero color enhancement)
- Stream B: T027-T031 (Footer card sizing)

**US4 (Wallet) - 3 parallel streams**:
- Stream A: T048-T049 (Purple accent line)
- Stream B: T050-T053 (Security section)
- Stream C: T054-T058 (Mystical section)

**US6 (About Us) - 3 parallel streams**:
- Stream A: T064-T066 (Page rename)
- Stream B: T067-T071 (Text sizing)
- Stream C: T072-T081 (Cards + Form)

---

## Task Summary

**Total Tasks**: 132
**Setup/Foundational**: 15 tasks (T001-T013b)
**User Story Implementation**: 107 tasks (T014-T120)
**Polish**: 10 tasks (T121-T130)

**Tasks per User Story**:
- US1 (Homepage): 10 tasks (T014-T023)
- US2 (Card Page): 12 tasks (T024-T035)
- US3 (Reward): 12 tasks (T036-T047)
- US4 (Wallet): 16 tasks (T048-T063)
- US5 (Earn): 11 tasks (T088-T098)
- US6 (About Us): 24 tasks (T064-T087)
- US7 (Footer): 9 tasks (T099-T107)

**Parallelizable Tasks**: 50 tasks marked with `[P]`

**Estimated Timeline**:
- Setup (Phase 1-2): 4-7 hours
- US1 (MVP): 3-4 hours
- US2: 4-5 hours
- US3: 3-4 hours
- US4: 5-6 hours
- US5: 2-3 hours
- US6: 6-8 hours
- US7: 2 hours
- Polish: 4-6 hours
- **Total (Sequential)**: 34-45 hours
- **Total (Parallel, 3 devs)**: 13-16 hours

---

## MVP Scope Recommendation

**MVP = User Story 1 (Homepage 3D Image)**

**Rationale**:
- Highest priority (P1)
- Highest impact (homepage = first impression)
- Minimal dependencies (only Phase 1-2 + T014-T023)
- Independently testable
- Can deploy and gather feedback before continuing

**MVP Tasks**: T001-T013b + T014-T023 (25 tasks, ~8-11 hours)

**Post-MVP Increments**:
1. Add US2 (Card Page) - 12 tasks
2. Add US3, US4, US6 (P2 stories) - 52 tasks
3. Add US5, US7 (P3 stories) - 20 tasks
4. Polish (Phase 10) - 10 tasks

---

## Format Validation

✅ All 132 tasks follow checklist format:
- `- [ ]` checkbox prefix
- Sequential Task IDs (T001-T130, T013a-T013b)
- `[P]` marker for parallelizable tasks (50 tasks)
- `[US#]` label for user story tasks (107 tasks)
- Clear descriptions with file paths
- Organized by phase and user story

✅ Independent test criteria defined for each user story
✅ Dependency graph clearly shows completion order
✅ Parallel execution examples provided
✅ MVP scope clearly identified (US1 = 23 tasks)
