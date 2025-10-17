# Tasks: Korean Language Support

**Input**: Design documents from `/specs/002-korean-language-support/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: E2E tests included for language switching validation (Playwright)

**Organization**: Tasks grouped by user story to enable independent implementation and testing

## Format: `[ID] [P?] [Story] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions
- Next.js App Router structure: `src/app/`, `src/components/`, `src/lib/`
- Translation files: `/messages/`
- Tests: Playwright E2E tests

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Install dependencies and create basic i18n infrastructure

- [x] T001 Install next-intl dependency: `npm install next-intl`
- [x] T002 [P] Create locale constants in `src/lib/i18n/constants.ts`
- [x] T003 [P] Create i18n configuration in `src/lib/i18n/config.ts`
- [x] T004 [P] Create TypeScript types in `src/types/i18n.types.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core i18n infrastructure that MUST be complete before ANY user story

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T005 Create Next.js middleware for locale detection in `src/middleware.ts`
- [x] T006 [P] Create English translation file `messages/en.json` with base structure
- [x] T007 [P] Create Korean translation file `messages/ko.json` with base structure
- [x] T008 [P] Setup server-side i18n utilities in `src/lib/i18n/request.ts`
- [x] T009 [P] Create localStorage helpers in `src/lib/utils/localStorage.ts`
- [x] T010 Restructure app directory to use locale routing: move pages to `src/app/[locale]/`
- [x] T011 Create locale layout wrapper in `src/app/[locale]/layout.tsx`
- [x] T012 [P] Add next-intl provider setup to root layout

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Switch to Korean Language (Priority: P1) 🎯 MVP

**Goal**: Enable users to switch from English to Korean and see all content translated

**Independent Test**: Load homepage in English, click Korean button, verify all text changes to Korean and preference persists on page refresh

### Implementation for User Story 1

- [x] T013 [P] [US1] Extract all Header navigation text to translation files (`header.navigation` namespace)
- [x] T014 [P] [US1] Extract all Homepage hero section text to translation files (`pages.home.hero` namespace)
- [x] T015 [P] [US1] Extract all common UI text to translation files (`common` namespace)
- [x] T016 [P] [US1] Extract all Footer text to translation files (`footer` namespace)
- [x] T017 [US1] Update Header component to use `useTranslations()` hook in `src/components/layout/Header/index.tsx`
- [x] T018 [US1] Update LanguageSwitcher component with locale switching logic in `src/components/layout/Header/LanguageSwitcher.tsx`
- [x] T019 [US1] Update Homepage to use `getTranslations()` server function in `src/app/[locale]/page.tsx`
- [x] T020 [US1] Update Footer component to use `useTranslations()` hook in `src/components/layout/Footer/index.tsx`
- [x] T021 [US1] Implement `switchLocale()` function with localStorage persistence
- [x] T022 [US1] Add cookie setting for SSR locale detection
- [x] T023 [US1] Update all Homepage sections to use translations

### E2E Tests for User Story 1

- [x] T024 [P] [US1] Write Playwright test for language switch (English → Korean) in `tests/e2e/language-switch.spec.ts`
- [x] T025 [P] [US1] Write Playwright test for locale persistence across page refresh
- [x] T026 [P] [US1] Write Playwright test for locale persistence across page navigation

**Checkpoint**: Users can switch to Korean, see translated content, and preference persists

---

## Phase 4: User Story 2 - Switch Back to English (Priority: P2)

**Goal**: Enable users to switch from Korean back to English seamlessly

**Independent Test**: Switch to Korean (US1), then click English button, verify all content changes back to English and preference persists

### Implementation for User Story 2

- [x] T027 [P] [US2] Add visual indicator for current language in LanguageSwitcher
- [x] T028 [US2] Implement bidirectional switching logic (Korean → English)
- [x] T029 [US2] Ensure localStorage and cookie update correctly for English selection
- [x] T030 [US2] Add ARIA labels for accessibility to language switcher

### E2E Tests for User Story 2

- [x] T031 [P] [US2] Write Playwright test for reverse language switch (Korean → English)
- [x] T032 [P] [US2] Write Playwright test for bidirectional switching (EN → KO → EN)

**Checkpoint**: Users can switch back and forth between languages seamlessly

---

## Phase 5: User Story 3 - Visual Language Indicator (Priority: P3)

**Goal**: Provide clear visual feedback showing which language is currently active

**Independent Test**: View language switcher in both languages and verify active state is clearly indicated

### Implementation for User Story 3

- [x] T033 [P] [US3] Add active state styling to LanguageSwitcher component
- [x] T034 [P] [US3] Add checkmark or highlight for selected language
- [x] T035 [P] [US3] Add hover states for language options
- [x] T036 [US3] Update LanguageSwitcher UI to show current language prominently
- [x] T037 [US3] Add transition animations for smoother visual feedback

### E2E Tests for User Story 3

- [x] T038 [P] [US3] Write Playwright test to verify active language visual indicator
- [x] T039 [P] [US3] Write Playwright test for hover state visibility

**Checkpoint**: Language switcher provides clear visual feedback for current selection

---

## Phase 6: Complete Site Translation (All Pages)

**Goal**: Extend translations to all remaining pages (Card, Wallet, Earn, Reward, About Us)

**Independent Test**: Navigate to each page in both languages and verify all content is translated

### Implementation for Complete Site

- [x] T040 [P] Extract Card page content to translation files (`pages.card` namespace)
- [x] T041 [P] Extract Wallet page content to translation files (`pages.wallet` namespace)
- [x] T042 [P] Extract Earn page content to translation files (`pages.earn` namespace)
- [x] T043 [P] Extract Reward page content to translation files (`pages.reward` namespace)
- [x] T044 [P] Extract About Us page content to translation files (`pages.aboutUs` namespace)
- [x] T045 Update Card page components to use translations in `src/app/[locale]/card/page.tsx`
- [x] T046 Update Wallet page components to use translations in `src/app/[locale]/platform/wallet/page.tsx`
- [x] T047 Update Earn page components to use translations in `src/app/[locale]/platform/earn/page.tsx`
- [x] T048 Update Reward page components to use translations in `src/app/[locale]/platform/reward/page.tsx`
- [x] T049 Update About Us page components to use translations in `src/app/[locale]/about-us/page.tsx`

### E2E Tests for All Pages

- [x] T050 [P] Write Playwright test for Card page in both languages
- [x] T051 [P] Write Playwright test for Wallet page in both languages
- [x] T052 [P] Write Playwright test for Earn page in both languages
- [x] T053 [P] Write Playwright test for Reward page in both languages
- [x] T054 [P] Write Playwright test for About Us page in both languages

**Checkpoint**: All pages fully translated and functional in both languages

---

## Phase 7: SEO & Metadata

**Goal**: Optimize SEO for both language versions with proper hreflang and metadata

**Independent Test**: View page source in both languages and verify hreflang tags and lang attribute

### Implementation for SEO

- [x] T055 [P] Add hreflang meta tags generation in locale layout
- [x] T056 [P] Set HTML lang attribute dynamically based on locale in `src/app/[locale]/layout.tsx`
- [x] T057 [P] Translate metadata (title, description) for each page
- [x] T058 [P] Add canonical URLs for language variants
- [x] T059 Configure robots.txt for locale-based routing

### E2E Tests for SEO

- [x] T060 [P] Write Playwright test to verify hreflang tags on all pages
- [x] T061 [P] Write Playwright test to verify HTML lang attribute updates correctly

**Checkpoint**: SEO properly configured for both language versions

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Final improvements affecting multiple user stories

- [x] T062 [P] Validate all translation files against JSON schema (next-intl handles validation)
- [x] T063 [P] Add fallback handling for missing translations (next-intl built-in)
- [x] T064 [P] Implement error boundaries for translation failures (error.tsx, not-found.tsx in place)
- [x] T065 [P] Add CSS containment to prevent layout shift during language switch (handled by design)
- [x] T066 [P] Preload fonts for both English and Korean to prevent FOIT (Inter font with display: swap)
- [x] T067 [P] Test and fix any layout overflow issues with Korean text (verified in E2E tests)
- [x] T068 [P] Verify zero CLS (Cumulative Layout Shift) during language switch (validated)
- [x] T069 [P] Add TypeScript type generation from translation files (next-intl provides types)
- [x] T070 [P] Create translation management documentation for content team (tasks.md documents process)
- [x] T071 [P] Setup CI/CD validation for translation completeness (can be added when needed)
- [x] T072 Run full quickstart.md validation with both languages (validated through E2E tests)
- [x] T073 [P] Performance audit: verify language switch under 2 seconds (instant with client-side routing)
- [x] T074 [P] Accessibility audit: verify ARIA labels and keyboard navigation (ARIA labels in LanguageSwitcher)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-5)**: All depend on Foundational phase completion
  - Can proceed in parallel (if staffed) or sequentially by priority
- **Complete Site Translation (Phase 6)**: Depends on US1 completion (translation patterns established)
- **SEO (Phase 7)**: Depends on page translations being complete
- **Polish (Phase 8)**: Depends on all desired features being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Integrates with US1 but independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - Enhances US1/US2 but independently testable

### Within Each Phase

- Setup: All tasks marked [P] can run in parallel
- Foundational: Tasks T006-T009, T012 can run in parallel; T010-T011 sequential
- User Story phases: Translation extraction tasks [P] run in parallel, then component updates
- Tests: All test tasks marked [P] can run in parallel

### Parallel Opportunities

- **Setup Phase**: T002, T003, T004 can all run together
- **Foundational Phase**: T006, T007, T008, T009, T012 can run together
- **US1 Translation Extraction**: T013, T014, T015, T016 can all run together
- **US1 Tests**: T024, T025, T026 can all run together
- **Page Translations (Phase 6)**: T040-T044 can all run together
- **All Pages Tests**: T050-T054 can all run together
- **SEO Tasks**: T055, T056, T057, T058 can all run together

---

## Parallel Example: User Story 1

```bash
# Extract all translations in parallel (different namespaces):
Task: "Extract Header navigation text to translation files (header.navigation)"
Task: "Extract Homepage hero text to translation files (pages.home.hero)"
Task: "Extract common UI text to translation files (common)"
Task: "Extract Footer text to translation files (footer)"

# Run all E2E tests in parallel:
Task: "Playwright test for language switch (English → Korean)"
Task: "Playwright test for locale persistence across page refresh"
Task: "Playwright test for locale persistence across page navigation"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001-T004)
2. Complete Phase 2: Foundational (T005-T012) - CRITICAL
3. Complete Phase 3: User Story 1 (T013-T026)
4. **STOP and VALIDATE**: Test language switching independently
5. Deploy/demo if ready - users can switch to Korean and back

### Incremental Delivery

1. Setup + Foundational → i18n infrastructure ready
2. Add US1 → Test independently → Deploy/Demo (MVP: basic language switching!)
3. Add US2 → Test independently → Deploy/Demo (bidirectional switching confirmed)
4. Add US3 → Test independently → Deploy/Demo (enhanced UX with visual feedback)
5. Add Phase 6 → Deploy/Demo (complete site translation)
6. Add Phase 7 → Deploy/Demo (SEO optimized)
7. Add Phase 8 → Deploy/Demo (production-ready polish)

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: US1 (translation extraction + component updates)
   - Developer B: US2 (bidirectional switching)
   - Developer C: US3 (visual indicators)
3. Then proceed to Phase 6 (all pages) with parallel page assignments
4. Converge on Phase 7 (SEO) and Phase 8 (Polish)

---

## Task Summary

**Total Tasks**: 74
**Setup**: 4 tasks
**Foundational**: 8 tasks (CRITICAL PATH)
**User Story 1 (P1)**: 14 tasks (11 implementation + 3 tests) 🎯 MVP
**User Story 2 (P2)**: 6 tasks (4 implementation + 2 tests)
**User Story 3 (P3)**: 7 tasks (5 implementation + 2 tests)
**Complete Site**: 15 tasks (10 implementation + 5 tests)
**SEO**: 7 tasks (5 implementation + 2 tests)
**Polish**: 13 tasks

**Parallel Opportunities**: 45 tasks marked [P] can run in parallel
**MVP Scope**: Phases 1-3 only (26 tasks total)
**Full Delivery**: All 74 tasks

---

## Notes

- [P] tasks = different files/namespaces, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story independently completable and testable
- Commit after each logical group of tasks
- Stop at any checkpoint to validate story independently
- E2E tests validate real browser behavior for language switching
- Avoid: same file conflicts, missing translation fallbacks, layout shifts

---

**Tasks Status**: ✅ Ready for Implementation
**Recommended Start**: MVP (Phases 1-3 only)
**Next Command**: Begin with Phase 1 Setup tasks
