# Tasks: UNIONE 회사소개 사이트

**Input**: Design documents from `.specify/`
**Prerequisites**: plan.md (required), spec.md (required)
**Feature**: UNIONE Premium Fintech Website
**Status**: READY FOR EXECUTION

## Execution Flow (main)
```
1. Load plan.md from .specify/plans/
   → Extract: Next.js 14+, TypeScript, Tailwind CSS, Framer Motion
2. Load spec.md from .specify/specs/
   → Extract: Page requirements, navigation structure
3. Generate tasks by category:
   → Setup: Next.js init, dependencies, config
   → Design System: Tailwind theme, components
   → Core Components: Header, Footer, common UI
   → Pages: Home, Card, Platform, Company
   → Optimization: Mobile, SEO, Performance
4. Apply task rules:
   → Different files = mark [P] for parallel
   → Same file = sequential (no [P])
   → Components before pages
5. Number tasks sequentially (T001, T002...)
6. Generate dependency graph
7. Create parallel execution examples
8. Return: SUCCESS (tasks ready for execution)
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- **Next.js App Router**: `src/app/`, `src/components/`, `src/lib/`
- **Public assets**: `public/images/`, `public/fonts/`
- **Config files**: Project root level

## Phase 1: Project Setup & Configuration

### 1.1: Initial Setup
- [X] T001 Initialize Next.js 14+ project with TypeScript, Tailwind CSS, and App Router in project root
- [X] T002 Install core dependencies (framer-motion, clsx, tailwind-merge, @phosphor-icons/react)
- [X] T003 Install form and state management (react-hook-form, @hookform/resolvers, zod, @tanstack/react-query)
- [X] T004 [P] Install and configure development tools (eslint-config-airbnb-typescript, prettier, prettier-plugin-tailwindcss)
- [X] T005 [P] Configure TypeScript strict mode in tsconfig.json
- [X] T006 [P] Setup ESLint rules in eslint.config.mjs
- [X] T007 [P] Setup Prettier config in .prettierrc

### 1.2: Design System Setup
- [X] T008 Configure custom Tailwind theme in tailwind.config.ts (colors, typography, animations)
- [X] T009 Create global styles and CSS variables in src/styles/globals.css
- [ ] T010 [P] Setup font loading (Inter, Pretendard) in src/app/layout.tsx
- [X] T011 [P] Create utility functions (cn) in src/lib/utils.ts
- [X] T012 [P] Define design constants in src/lib/constants.ts
- [X] T013 [P] Create animation variants in src/lib/animations.ts

### 1.3: CI/CD Pipeline
- [X] T014 [P] Setup GitHub Actions workflow in .github/workflows/ci.yml
- [X] T015 [P] Configure Vercel deployment settings
- [X] T016 [P] Create environment variables template in .env.local.example

## Phase 2: Core Components Development

### 2.1: Layout Components
- [X] T017 Create Header component structure in src/components/layout/Header/index.tsx
- [X] T018 [P] Create Logo component in src/components/layout/Header/Logo.tsx
- [X] T019 Create Navigation component in src/components/layout/Navigation/index.tsx
- [X] T020 Create Navigation Dropdown in src/components/layout/Navigation/Dropdown.tsx
- [X] T021 [P] Create MobileMenu component in src/components/layout/MobileMenu/index.tsx
- [X] T022 [P] Create Footer component in src/components/layout/Footer/index.tsx
- [X] T023 [P] Create Container component in src/components/common/Container/index.tsx
- [X] T024 [P] Create Section component in src/components/common/Section/index.tsx

### 2.2: Common Components
- [X] T025 [P] Create Button component with variants in src/components/common/Button/index.tsx
- [X] T026 [P] Create Card component with glass morphism in src/components/common/Card/index.tsx
- [X] T027 [P] Create GradientText component in src/components/common/GradientText/index.tsx
- [X] T028 [P] Create LoadingSpinner component in src/components/common/LoadingSpinner/index.tsx
- [X] T029 [P] Create IconButton component in src/components/common/IconButton/index.tsx

### 2.3: Animation Utilities
- [X] T030 [P] Create scroll animation hook in src/hooks/useScrollAnimation.ts
- [X] T031 [P] Create media query hook in src/hooks/useMediaQuery.ts
- [X] T032 [P] Create intersection observer hook in src/hooks/useIntersectionObserver.ts
- [X] T033 [P] Create parallax effect hook in src/hooks/useParallax.ts

## Phase 3: Page Development

### 3.1: Home Page Components
- [X] T034 Create HeroSection component in src/components/sections/home/HeroSection/index.tsx
- [X] T035 [P] Create AnimatedHeadline in src/components/sections/home/HeroSection/AnimatedHeadline.tsx
- [X] T036 [P] Create FloatingCard with 3D effect in src/components/sections/home/HeroSection/FloatingCard.tsx
- [X] T037 [P] Create FeaturesSection in src/components/sections/home/FeaturesSection/index.tsx
- [X] T038 [P] Create ValuePropositionSection in src/components/sections/home/ValuePropositionSection/index.tsx
- [X] T039 [P] Create CTASection with email form in src/components/sections/home/CTASection/index.tsx
- [X] T040 Integrate home sections in src/app/page.tsx

### 3.2: Card Service Page
- [X] T041 Create CardHero with 3D visualization in src/components/sections/card/CardHero/index.tsx
- [X] T042 [P] Create 3D card component in src/components/sections/card/CardHero/Card3D.tsx
- [X] T043 [P] Create FeaturesBreakdown in src/components/sections/card/FeaturesBreakdown/index.tsx
- [X] T044 [P] Create HowItWorks section in src/components/sections/card/HowItWorks/index.tsx
- [X] T045 [P] Create SecuritySection in src/components/sections/card/SecuritySection/index.tsx
- [X] T046 Integrate card sections in src/app/card/page.tsx

### 3.3: Platform Pages
- [X] T047 Create PlatformLayout shared component in src/components/sections/platform/PlatformLayout.tsx
- [X] T048 [P] Create FeatureCard for platform in src/components/sections/platform/FeatureCard.tsx
- [X] T049 [P] Create StatsDisplay component in src/components/sections/platform/StatsDisplay.tsx
- [X] T050 Create platform overview page with tabs in src/app/platform/page.tsx
- [X] T051 [P] Create RewardSection in src/components/sections/platform/reward/RewardSection.tsx
- [X] T052 [P] Create reward calculator in src/components/sections/platform/reward/RewardCalculator.tsx
- [X] T053 Create Reward page in src/app/platform/reward/page.tsx
- [X] T054 [P] Create WalletFeatures in src/components/sections/platform/wallet/WalletFeatures.tsx
- [X] T055 [P] Create wallet security display in src/components/sections/platform/wallet/SecurityDisplay.tsx
- [X] T056 Create Wallet page in src/app/platform/wallet/page.tsx
- [X] T057 [P] Create EarnOpportunities in src/components/sections/platform/earn/EarnOpportunities.tsx
- [X] T058 [P] Create APY calculator in src/components/sections/platform/earn/APYCalculator.tsx
- [X] T059 [P] Create comparison table in src/components/sections/platform/earn/ComparisonTable.tsx
- [X] T060 Create Earn page in src/app/platform/earn/page.tsx

### 3.4: Company Page
- [X] T061 [P] Create CompanyVision section in src/components/sections/company/CompanyVision/index.tsx
- [X] T062 [P] Create Milestones timeline in src/components/sections/company/Milestones/index.tsx
- [X] T063 [P] Create Timeline visualization in src/components/sections/company/Milestones/Timeline.tsx
- [X] T064 [P] Create ContactCTA section in src/components/sections/company/ContactCTA/index.tsx
- [X] T065 [P] Create contact form with validation in src/components/sections/company/ContactCTA/ContactForm.tsx
- [X] T066 Integrate company sections in src/app/company/page.tsx

### 3.5: Additional Pages
- [X] T067 [P] Create 404 Not Found page in src/app/not-found.tsx
- [X] T068 [P] Create loading skeleton screens in src/app/loading.tsx
- [X] T069 [P] Create error boundary in src/app/error.tsx

## Phase 4: Responsive & Optimization

### 4.1: Mobile Optimization
- [X] T070 Verify and adjust mobile breakpoints for Header component
- [X] T071 Optimize mobile navigation menu animations
- [X] T072 [P] Test and fix Hero section on mobile devices
- [X] T073 [P] Optimize card layouts for mobile screens
- [X] T074 [P] Adjust typography scale for mobile
- [X] T075 [P] Implement touch-friendly interactions
- [X] T076 [P] Add swipe gestures for mobile carousels

### 4.2: Animations & Interactions
- [X] T077 [P] Add scroll-triggered animations to all sections
- [X] T078 [P] Implement parallax effects on hero sections
- [X] T079 [P] Add micro-interactions to buttons and links
- [X] T080 [P] Create page transition animations
- [X] T081 [P] Add loading states and skeleton screens
- [X] T082 [P] Implement hover effects on cards

### 4.3: Accessibility
- [X] T083 [P] Add ARIA labels to navigation elements
- [X] T084 [P] Implement keyboard navigation support
- [X] T085 [P] Ensure proper focus management
- [X] T086 [P] Verify color contrast ratios (WCAG 2.1 AA)
- [X] T087 [P] Add alt text to all images
- [X] T088 [P] Test with screen readers

## Phase 5: Testing & Deployment

### 5.1: Testing
- [ ] T089 [P] Write unit tests for Button component in src/components/common/Button/Button.test.tsx
- [ ] T090 [P] Write unit tests for Card component in src/components/common/Card/Card.test.tsx
- [ ] T091 [P] Write unit tests for utility functions in src/lib/utils.test.ts
- [ ] T092 [P] Write integration tests for navigation flow
- [ ] T093 [P] Write E2E tests for critical user journeys using Playwright
- [ ] T094 [P] Perform Lighthouse performance audit
- [ ] T095 [P] Test Core Web Vitals metrics

### 5.2: SEO Optimization
- [X] T096 Setup metadata for all pages in respective page.tsx files
- [X] T097 [P] Create sitemap generator in src/app/sitemap.ts
- [X] T098 [P] Configure robots.txt in src/app/robots.ts
- [X] T099 [P] Add structured data (JSON-LD) schemas
- [X] T100 [P] Optimize images with next/image component
- [X] T101 [P] Implement Open Graph tags

### 5.3: Deployment & Monitoring
- [X] T102 Configure production environment variables
- [X] T103 Optimize production build settings
- [ ] T104 Deploy to Vercel production environment
- [ ] T105 [P] Setup custom domain and SSL
- [ ] T106 [P] Integrate Google Analytics 4
- [ ] T107 [P] Setup error monitoring (optional Sentry)
- [ ] T108 Perform production smoke tests

## Dependencies

### Critical Dependencies
- T001 blocks all other tasks (project must exist)
- T008-T013 (Design System) before T017-T029 (Components)
- T017-T024 (Layout) before T040, T046, T053, T056, T060, T066 (Page integrations)
- T025-T029 (Common Components) used by T034-T039 (Home sections)
- All implementation (T001-T069) before T089-T095 (Testing)
- Testing (T089-T095) before T102-T108 (Deployment)

### Page-specific Dependencies
- T034-T039 before T040 (Home page integration)
- T041-T045 before T046 (Card page integration)
- T047-T049 before T050-T060 (Platform pages)
- T061-T065 before T066 (Company page integration)

## Parallel Execution Examples

### Initial Setup Batch
```bash
# Launch T004-T007 together (all config files):
Task: "Install and configure development tools in package.json"
Task: "Configure TypeScript strict mode in tsconfig.json"
Task: "Setup ESLint rules in .eslintrc.json"
Task: "Setup Prettier config in .prettierrc"
```

### Design System Batch
```bash
# Launch T010-T013 together (independent utilities):
Task: "Setup font loading in src/app/layout.tsx"
Task: "Create utility functions in src/lib/utils.ts"
Task: "Define constants in src/lib/constants.ts"
Task: "Create animation variants in src/lib/animations.ts"
```

### Common Components Batch
```bash
# Launch T025-T029 together (independent components):
Task: "Create Button component in src/components/common/Button/index.tsx"
Task: "Create Card component in src/components/common/Card/index.tsx"
Task: "Create GradientText in src/components/common/GradientText/index.tsx"
Task: "Create LoadingSpinner in src/components/common/LoadingSpinner/index.tsx"
Task: "Create IconButton in src/components/common/IconButton/index.tsx"
```

### Platform Features Batch
```bash
# Launch T051-T052, T054-T055, T057-T059 together (different pages):
Task: "Create RewardSection in src/components/sections/platform/reward/"
Task: "Create reward calculator in src/components/sections/platform/reward/"
Task: "Create WalletFeatures in src/components/sections/platform/wallet/"
Task: "Create wallet security in src/components/sections/platform/wallet/"
Task: "Create EarnOpportunities in src/components/sections/platform/earn/"
Task: "Create APY calculator in src/components/sections/platform/earn/"
Task: "Create comparison table in src/components/sections/platform/earn/"
```

### Testing Batch
```bash
# Launch T089-T095 together (independent test files):
Task: "Write unit tests for Button component"
Task: "Write unit tests for Card component"
Task: "Write unit tests for utility functions"
Task: "Write integration tests for navigation"
Task: "Write E2E tests using Playwright"
Task: "Perform Lighthouse audit"
Task: "Test Core Web Vitals"
```

## Notes
- [P] tasks = different files, no shared dependencies
- Commit after each completed task or logical group
- Run build verification after major phases
- Keep mobile-first approach throughout
- Test on real devices for Phase 4

## Validation Checklist
- ✅ All pages from spec have implementation tasks
- ✅ All components have creation tasks
- ✅ Design system setup before component development
- ✅ Components created before page integration
- ✅ Parallel tasks truly independent (different files)
- ✅ Each task specifies exact file path
- ✅ No [P] tasks modify the same file
- ✅ Testing phase after implementation
- ✅ Deployment only after testing complete

---

**Tasks Version**: 1.0.0
**Generated**: 2025-10-02
**Total Tasks**: 108
**Parallel Tasks**: 67
**Sequential Tasks**: 41
**Estimated Duration**: 8-10 weeks (as per plan.md)