# Implementation Plan: Card 페이지 히어로 섹션 모바일 배경 이미지 최적화

**Branch**: `006-fix-card-hero-mobile` | **Date**: 2025-10-22 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/006-fix-card-hero-mobile/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

모바일 화면에서 Card 페이지의 히어로 섹션 배경 이미지가 과도하게 크롭되어 손가락이 보이지 않는 문제를 해결합니다. CSS `object-position` 속성과 미디어 쿼리를 활용한 반응형 이미지 포지셔닝으로 모든 화면 크기에서 손가락으로 카드를 들고 있는 완전한 이미지를 표시하도록 개선합니다.

## Technical Context

**Language/Version**: TypeScript 5
**Primary Dependencies**: React 19.1, Next.js 15.5.4 (App Router), Tailwind CSS 4, Framer Motion 12.23
**Storage**: N/A (프론트엔드 UI 조정)
**Testing**: Playwright (E2E), 브라우저 개발자 도구 (시각적 검증)
**Target Platform**: Web (모바일 브라우저: iOS Safari 14+, Chrome/Android 90+, 데스크탑: Chrome, Safari, Firefox, Edge 최신 버전)
**Project Type**: Web (Next.js App Router 기반)
**Performance Goals**: 이미지 로딩 3G에서 3초 이내, LTE에서 1초 이내, 화면 회전 시 재배치 0.3초 이내
**Constraints**: 기존 Framer Motion 애니메이션 유지, 데스크탑/태블릿 레이아웃 시각적 회귀 없음, 이미지 파일 교체 금지
**Scale/Scope**: 단일 컴포넌트 수정 (CardHero/index.tsx), 10종 주요 모바일 기기 테스트

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### I. Clean Code Principles
✅ **PASS** - 단일 컴포넌트 CSS 수정으로 단순함 유지, `object-position` 속성명이 자기 설명적

### II. No Hard Coding
✅ **PASS** - 브레이크포인트 값은 Tailwind CSS 표준 활용 예정 (sm:, md:, lg: 등)

### III. Code Reusability
✅ **PASS** - 기존 컴포넌트 재사용, 새로운 컴포넌트 생성 없음

### IV. Clear Variable Naming
✅ **PASS** - CSS 클래스명 및 미디어 쿼리가 명확한 의도 전달

### V. Consistent Coding Style
✅ **PASS** - 기존 CardHero 컴포넌트의 Tailwind 스타일 패턴 유지

### VI. Production-Grade Quality
✅ **PASS** - 크로스 브라우저 테스트 계획됨 (10종 기기), 성능 목표 명시됨, 접근성 영향 없음 (순수 시각적 조정)

**Overall**: ✅ ALL GATES PASSED - 헌법 원칙 위반 없음

## Project Structure

### Documentation (this feature)

```
specs/006-fix-card-hero-mobile/
├── spec.md              # Feature specification
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── checklists/
│   └── requirements.md  # Quality validation checklist
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

**Note**: `data-model.md`와 `contracts/`는 이 피처에 해당 없음 (순수 UI 조정, 데이터 모델 변경 없음)

### Source Code (repository root)

```
src/
├── app/
│   └── [locale]/
│       └── card/
│           └── page.tsx                    # Card 페이지 (CardHero 사용)
├── components/
│   └── sections/
│       └── card/
│           └── CardHero/
│               ├── index.tsx               # 🎯 수정 대상: 히어로 섹션 컴포넌트
│               └── Card3D.tsx              # 변경 없음
└── lib/
    └── constants.ts                         # CSS_FILTERS 상수 (필요 시 확인)

public/
└── card6.png                                # 배경 이미지 (교체 금지, 그대로 사용)
```

**Structure Decision**: Next.js App Router 구조 사용. 단일 컴포넌트 파일(`CardHero/index.tsx`) 수정으로 해결 가능. 새로운 파일 생성 불필요.

## Complexity Tracking

*Fill ONLY if Constitution Check has violations that must be justified*

**N/A** - 헌법 원칙 위반 없음. 모든 Constitution Check 항목 통과.

---

## Phase 0: Research ✅

**Status**: COMPLETED
**Output**: [research.md](./research.md)

### Key Findings

1. **기술 선택**: CSS `object-position` + Tailwind CSS 반응형 유틸리티
2. **최적 포지셔닝 값**:
   - 모바일: `65%_center` (60-70% 범위 테스트)
   - 태블릿: `55%_center`
   - 데스크탑: `center_center` (기존 유지)
3. **성능**: 무시할 수 있는 수준, Framer Motion 애니메이션 완전 호환
4. **브라우저 지원**: 100% 타겟 브라우저 커버 (iOS Safari 14+, Chrome 90+)

### Unknowns Resolved

- ✅ 반응형 이미지 포지셔닝 패턴 결정
- ✅ 최적 `object-position` 값 도출
- ✅ 성능 영향 분석 완료
- ✅ 크로스 브라우저 호환성 확인
- ✅ Tailwind CSS 커스텀 값 활용법 결정

---

## Phase 1: Design & Contracts ✅

**Status**: COMPLETED
**Outputs**:
- [quickstart.md](./quickstart.md) - 개발 환경 설정 및 테스트 가이드
- data-model.md - N/A (데이터 모델 변경 없음)
- contracts/ - N/A (API 변경 없음)

### Design Decisions

**Component Architecture**:
- 수정 대상: `src/components/sections/card/CardHero/index.tsx`
- 변경 범위: `<img>` 태그의 `className` 속성만
- 새 파일 생성: 없음
- 기존 구조 유지: 100%

**CSS Implementation**:
```tsx
// Tailwind CSS 반응형 클래스로 구현
className="
  w-full h-full object-cover
  object-[65%_center]           // 모바일 (320-767px)
  md:object-[55%_center]        // 태블릿 (768-1023px)
  lg:object-center              // 데스크탑 (1024px+)
"
```

**Testing Strategy**:
1. Chrome DevTools Device Mode (10종 기기)
2. 실제 기기 테스트 (iPhone, Galaxy, iPad)
3. Lighthouse 성능 검증
4. 네트워크 시뮬레이션 (3G, LTE)

### Agent Context Update

✅ CLAUDE.md 업데이트 완료:
- TypeScript 5 + React 19.1
- Next.js 15.5.4 (App Router)
- Tailwind CSS 4, Framer Motion 12.23
- 프론트엔드 UI 조정 (데이터 모델 변경 없음)

---

## Constitution Re-Check (Post-Design)

### I. Clean Code Principles
✅ **PASS** - 최소한의 CSS 클래스 추가만, 복잡성 증가 없음

### II. No Hard Coding
✅ **PASS** - Tailwind 표준 브레이크포인트 사용, 매직 넘버 없음

### III. Code Reusability
✅ **PASS** - 기존 CardHero 컴포넌트 재사용, 중복 코드 없음

### IV. Clear Variable Naming
✅ **PASS** - `object-[65%_center]` 형식이 직관적으로 위치 의미 전달

### V. Consistent Coding Style
✅ **PASS** - Tailwind CSS 패턴 일관성 유지

### VI. Production-Grade Quality
✅ **PASS** - 10종 기기 테스트, 성능 목표 설정, 접근성 영향 없음

**Overall**: ✅ ALL GATES PASSED - 설계 후에도 헌법 원칙 위반 없음

---

## Next Steps

**Command**: `/speckit.tasks`

Phase 2로 진행하여 구현 작업 항목을 생성합니다:
- tasks.md 파일 생성
- 우선순위별 작업 분해
- 각 작업의 acceptance criteria 정의
- 구현 체크리스트 제공

