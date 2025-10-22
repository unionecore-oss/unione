# Tasks: Card 페이지 히어로 섹션 모바일 배경 이미지 최적화

**Input**: Design documents from `/specs/006-fix-card-hero-mobile/`
**Prerequisites**: plan.md, spec.md, research.md, quickstart.md

**Tests**: 이 피처는 시각적 검증 위주로 진행되며, E2E 자동화 테스트는 선택사항입니다.

**Organization**: UI 버그 수정 특성상 단일 User Story로 구성되며, 설정→구현→검증 순서로 진행됩니다.

## Format: `[ID] [P?] [Story] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1)
- Include exact file paths in descriptions

## Path Conventions
- Next.js App Router 구조: `src/app/`, `src/components/`, `public/`
- 테스트: Playwright 사용 시 프로젝트 루트에 테스트 파일 생성

---

## Phase 1: Setup (환경 준비)

**Purpose**: 개발 환경 설정 및 현재 상태 확인

- [x] T001 개발 서버 실행 확인: `npm run dev`
- [x] T002 Card 페이지 접속 확인: http://localhost:3007/ko/card
- [x] T003 Playwright MCP로 페이지 접속 및 Device Mode 설정
- [x] T004 현재 모바일 화면에서 히어로 이미지 크롭 이슈 재현 확인 (iPhone SE 375x667)

**Checkpoint**: 문제 상황 확인 완료 - 구현 시작 가능

---

## Phase 2: User Story 1 - 모바일 사용자의 Card 페이지 히어로 섹션 시각적 경험 개선 (Priority: P1) 🎯 MVP

**Goal**: 모바일 기기에서 손가락으로 카드를 들고 있는 완전한 히어로 이미지를 표시하여 데스크탑과 동일한 시각적 경험 제공

**Independent Test**: 모바일 기기(iPhone SE, iPhone 14, Galaxy S23)로 Card 페이지를 열어 손가락과 카드 전체가 뷰포트 내에 완전하게 표시되는지 시각적으로 확인

### Implementation for User Story 1

- [x] T005 [US1] CardHero 컴포넌트 파일 열기: `src/components/sections/card/CardHero/index.tsx`

- [x] T006 [US1] 현재 코드 분석: `<img>` 태그의 `objectPosition: 'center center'` inline style 확인 (29번째 줄)

- [x] T007 [US1] Tailwind CSS 반응형 `object-position` 클래스 추가 (최종값: 70%/60%/center):
  ```tsx
  // 변경 전 (23-31번째 줄)
  <img
    src="/card6.png"
    alt="Unione Card"
    className="w-full h-full object-cover"
    style={{
      filter: CSS_FILTERS.cardPage.heroBackground,
      objectPosition: 'center center',
    }}
  />

  // 변경 후 (최종값)
  <img
    src="/card6.png"
    alt="Unione Card"
    className="w-full h-full object-cover
      object-[70%_center]
      md:object-[60%_center]
      lg:object-center"
    style={{
      filter: CSS_FILTERS.cardPage.heroBackground,
    }}
  />
  ```

- [x] T008 [US1] 파일 저장 및 Hot Reload 확인

**Checkpoint**: 코드 수정 완료 - 테스트 시작 가능

---

## Phase 3: 시각적 검증 (모바일 우선)

**Purpose**: 10종 주요 기기에서 이미지가 올바르게 표시되는지 확인

### 모바일 기기 테스트 (Playwright MCP)

- [x] T009 [P] [US1] iPhone SE (375x667) 테스트: 손가락과 카드 전체 표시 확인 ✅
- [x] T010 [P] [US1] iPhone 12 (390x844) 테스트: 손가락과 카드 전체 표시 확인 ✅
- [x] T011 [P] [US1] iPhone 14 Pro Max (430x932) 테스트: 손가락과 카드 전체 표시 확인 ✅
- [x] T012 [P] [US1] Galaxy S23 (360x800) 테스트: 손가락과 카드 전체 표시 확인 ✅
- [x] T013 [P] [US1] Pixel 7 (412x915) 테스트: 손가락과 카드 전체 표시 확인 ✅

### 태블릿 테스트

- [x] T014 [P] [US1] iPad Mini (768x1024) 테스트: 데스크탑과 모바일 사이 부드러운 전환 확인 ✅
- [x] T015 [P] [US1] iPad Pro (1024x1366) 테스트: 데스크탑 레이아웃 유지 확인 ✅

### 데스크탑 테스트 (시각적 회귀 방지)

- [x] T016 [P] [US1] 1920x1080 해상도 테스트: 기존 레이아웃 유지 확인 ✅
- [x] T017 [P] [US1] 2560x1440 해상도 테스트: 고해상도에서 이미지 품질 확인 ✅

### 화면 회전 테스트

- [ ] T018 [US1] iPhone 14 Portrait → Landscape 회전 테스트: 이미지 재배치 확인
- [ ] T019 [US1] iPad Portrait → Landscape 회전 테스트: 이미지 전환 자연스러움 확인

**Checkpoint**: 모든 주요 기기에서 시각적 검증 완료

---

## Phase 4: 미세 조정 (필요 시)

**Purpose**: 테스트 결과를 바탕으로 `object-position` 값 최적화

- [x] T020 [US1] (선택사항) 모바일 값 미세 조정: `object-[65%_center]`를 60-70% 범위 내에서 조정 ✅
  - 사용자 피드백: "모바일에서 손이 보이긴 하는데 지금보다 원래 손이 더 많이 나와야 해"
  - 65%에서 70%로 증가 조정
  - iPhone SE, Galaxy S23에서 재테스트 완료

- [x] T021 [US1] (선택사항) 태블릿 값 미세 조정: `md:object-[55%_center]`를 50-60% 범위 내에서 조정 ✅
  - 55%에서 60%로 조정하여 모바일과의 부드러운 전환 확보
  - iPad Mini, iPad Pro에서 재테스트 완료

**Checkpoint**: 최적 `object-position` 값 확정

---

## Phase 5: 성능 검증

**Purpose**: 이미지 로딩 시간 및 레이아웃 안정성 확인

- [ ] T022 [US1] Lighthouse 성능 점수 측정 (Chrome DevTools):
  - Performance: 90+ 목표
  - First Contentful Paint: < 1.8s
  - Largest Contentful Paint: < 2.5s
  - Cumulative Layout Shift: < 0.1 (레이아웃 시프트 없음 확인)

- [ ] T023 [US1] 네트워크 시뮬레이션 테스트 (DevTools → Network 탭):
  - Fast 3G: 이미지 로딩 3초 이내 확인
  - 4G LTE: 이미지 로딩 1초 이내 확인

- [ ] T024 [US1] 화면 회전 시 재배치 성능: 0.3초 이내 전환 확인 (체감 테스트)

**Checkpoint**: 성능 기준 충족 확인

---

## Phase 6: 실제 기기 테스트 (선택사항 - 최종 검증)

**Purpose**: 로컬 네트워크를 통한 실제 모바일 기기 테스트

- [ ] T025 [US1] 개발 서버 네트워크 노출: `npm run dev -- --host`

- [ ] T026 [P] [US1] iPhone (Safari) 실제 테스트: Network 주소로 접속 후 확인

- [ ] T027 [P] [US1] Android (Chrome) 실제 테스트: Network 주소로 접속 후 확인

- [ ] T028 [P] [US1] iPad (Safari) 실제 테스트: Network 주소로 접속 후 확인

**Checkpoint**: 실제 기기에서 최종 검증 완료

---

## Phase 7: 자동화 테스트 (선택사항 - E2E)

**Purpose**: Playwright로 스크린샷 비교 자동화 (선택사항)

**NOTE**: 이 단계는 필수가 아닙니다. 수동 시각적 검증으로 충분합니다.

- [ ] T029 [P] [US1] Playwright 설치: `npx playwright install`

- [ ] T030 [US1] 스크린샷 테스트 스크립트 작성: `tests/e2e/card-hero-mobile.spec.ts`
  ```typescript
  import { test, expect } from '@playwright/test';

  test.describe('Card Hero Mobile Image', () => {
    test('should display full image on iPhone SE', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/ko/card');
      await expect(page.locator('img[alt="Unione Card"]')).toBeVisible();
      // 스크린샷 비교
      await expect(page).toHaveScreenshot('card-hero-iphone-se.png');
    });

    test('should display full image on Galaxy S23', async ({ page }) => {
      await page.setViewportSize({ width: 360, height: 800 });
      await page.goto('/ko/card');
      await expect(page.locator('img[alt="Unione Card"]')).toBeVisible();
      await expect(page).toHaveScreenshot('card-hero-galaxy-s23.png');
    });

    // 추가 기기 테스트...
  });
  ```

- [ ] T031 [US1] Playwright 테스트 실행: `npx playwright test`

- [ ] T032 [US1] 베이스라인 스크린샷 승인 및 커밋

**Checkpoint**: E2E 테스트 자동화 완료 (선택사항)

---

## Phase 8: 문서화 및 정리

**Purpose**: 변경 사항 문서화 및 코드 정리

- [x] T033 [US1] 변경 사항 요약 작성: ✅
  - **수정 파일**: `src/components/sections/card/CardHero/index.tsx` (23-33번째 줄)
  - **변경 내용**: inline `objectPosition: 'center center'` style을 Tailwind 반응형 클래스로 대체
  - **최종값**:
    - 모바일 (320-767px): `object-[70%_center]`
    - 태블릿 (768-1023px): `md:object-[60%_center]`
    - 데스크탑 (1024px+): `lg:object-center`
  - **테스트 결과**: 9종 기기 시각적 검증 완료
    - 모바일: iPhone SE, iPhone 12, iPhone 14 Pro Max, Galaxy S23, Pixel 7 ✅
    - 태블릿: iPad Mini, iPad Pro ✅
    - 데스크탑: 1920x1080, 2560x1440 ✅
  - **사용자 피드백 반영**: 초기 65%→70%로 조정하여 손가락이 더 많이 보이도록 개선

- [x] T034 [US1] ESLint 검사: `npm run lint` ✅
  - CardHero/index.tsx: 기존 warning만 존재 (img 태그 사용), 새로운 에러 없음

- [x] T035 [US1] TypeScript 타입 검사: `npx tsc --noEmit` ✅
  - CardHero/index.tsx: 타입 에러 없음

- [x] T036 [US1] 빌드 테스트: `npm run build` ✅
  - 프로덕션 빌드 성공 (10.8초 컴파일)
  - 모든 페이지 정상 생성 (21/21)

**Checkpoint**: 코드 품질 검증 완료

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - 즉시 시작 가능
- **User Story 1 (Phase 2)**: Setup 완료 후 진행
- **시각적 검증 (Phase 3)**: User Story 1 구현 완료 후 진행
- **미세 조정 (Phase 4)**: Phase 3 테스트 결과에 따라 선택적 진행
- **성능 검증 (Phase 5)**: Phase 3 (또는 Phase 4) 완료 후 진행
- **실제 기기 테스트 (Phase 6)**: 선택사항, Phase 3 완료 후 언제든지 가능
- **자동화 테스트 (Phase 7)**: 선택사항, 독립적으로 진행 가능
- **문서화 (Phase 8)**: 모든 검증 완료 후 최종 단계

### Task Dependencies

**순차 실행 필요**:
- T001-T004: 환경 설정 순서대로
- T005-T008: 코드 수정 순서대로
- T020-T021: Phase 3 결과 확인 후 진행

**병렬 실행 가능 (marked with [P])**:
- T009-T013: 모바일 기기 테스트 (모두 동일한 코드 검증)
- T014-T015: 태블릿 테스트
- T016-T017: 데스크탑 테스트
- T026-T028: 실제 기기 테스트
- T029: Playwright 설치 (독립적)

### Parallel Opportunities

```bash
# Phase 3: 모든 모바일 기기 테스트를 동시에 진행 (DevTools에서 빠르게 전환)
# 또는 여러 브라우저 창을 열어 동시 확인

# Phase 6: 실제 기기 테스트
# iPhone, Android, iPad를 동시에 Network 주소로 접속하여 확인
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. **Complete Phase 1**: Setup (환경 준비) - 5분
2. **Complete Phase 2**: User Story 1 구현 (코드 수정) - 10분
3. **Complete Phase 3**: 시각적 검증 (10종 기기) - 20분
4. **STOP and VALIDATE**: 모든 기기에서 손가락과 카드 표시 확인
5. **(Optional) Phase 4**: 미세 조정 - 필요시 10분
6. **Complete Phase 5**: 성능 검증 - 10분
7. **(Optional) Phase 6**: 실제 기기 테스트 - 15분
8. **Complete Phase 8**: 문서화 및 정리 - 10분

**Total Estimated Time**: 1-1.5시간 (선택사항 포함 시 최대 2시간)

### Incremental Delivery

이 피처는 단일 User Story로 구성되어 있어 점진적 배포보다는 한 번에 완료하는 것이 적합합니다:

1. **Phase 1-2**: 코드 수정 완료 → 로컬 검증
2. **Phase 3**: 다양한 기기에서 검증 → 문제 발견 시 Phase 4로
3. **Phase 5**: 성능 확인 → 목표 미달 시 최적화
4. **Phase 8**: 최종 정리 → PR 생성 준비

### Success Criteria Checklist

구현 완료 후 다음 항목 확인:

- [ ] **SC-001**: 모바일(320-767px)에서 95% 사용자가 손가락과 카드 전체 인식 가능
  - T009-T013 완료로 검증

- [ ] **SC-002**: 10종 주요 기기에서 핵심 요소 100% 뷰포트 내 표시
  - T009-T017 완료로 검증

- [ ] **SC-003**: 데스크탑/태블릿에서 시각적 회귀 없음
  - T014-T017 완료로 검증

- [ ] **SC-004**: 이미지 로딩 시간
  - T023 완료로 검증 (3G: 3초, LTE: 1초)

- [ ] **SC-005**: 화면 회전 시 재배치 0.3초 이내
  - T018-T019, T024 완료로 검증

---

## Notes

- **[P] tasks**: 동일한 코드를 다른 기기에서 검증하는 작업으로 병렬 실행 가능
- **[US1] label**: 모든 구현/검증 작업이 User Story 1에 속함
- **선택사항 Phase**: Phase 4 (미세 조정), Phase 6 (실제 기기), Phase 7 (E2E 자동화)는 필수가 아님
- **빠른 반복**: DevTools Device Mode로 빠르게 여러 기기 테스트 가능
- **Commit 전략**: Phase 2 완료 후 커밋, Phase 3-5 검증 완료 후 최종 커밋
- **Rollback 전략**: 문제 발견 시 T007의 변경 전 코드로 즉시 복구 가능
