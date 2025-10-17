<!--
  Sync Impact Report
  ===================
  Version Change: NONE (initial version) → 1.0.0

  Modified Principles:
  - NEW: I. Clean Code Principles
  - NEW: II. No Hard Coding
  - NEW: III. Code Reusability
  - NEW: IV. Clear Variable Naming
  - NEW: V. Consistent Coding Style
  - NEW: VI. Production-Grade Quality

  Added Sections:
  - Core Principles (6 principles)
  - Development Standards
  - Quality Assurance
  - Governance

  Removed Sections: NONE (initial constitution)

  Templates Status:
  ✅ .specify/templates/plan-template.md - aligned with constitution check requirements
  ✅ .specify/templates/spec-template.md - aligned with quality and testing requirements
  ✅ .specify/templates/tasks-template.md - aligned with implementation standards

  Follow-up TODOs: NONE
-->

# Unione Website Constitution

## Core Principles

### I. Clean Code Principles

**모든 코드는 클린 코드 원칙을 준수해야 한다.**

- 코드는 읽기 쉽고 이해하기 쉬워야 한다
- 함수는 단일 책임 원칙(Single Responsibility Principle)을 따라야 한다
- 불필요한 복잡성을 피하고 단순함을 유지해야 한다
- 주석은 "왜"를 설명하며, 코드 자체가 "무엇"과 "어떻게"를 설명해야 한다
- SOLID 원칙을 지향한다

**Rationale**: 클린 코드는 유지보수성, 확장성, 협업 효율성을 극대화한다. 코드는 한 번 작성되지만 여러 번 읽히므로, 가독성이 최우선이다.

### II. No Hard Coding

**하드 코딩을 하지 않는다.**

- 매직 넘버, 매직 스트링을 사용하지 않는다
- 설정값은 환경 변수 또는 설정 파일로 관리한다
- 반복되는 값은 상수로 정의한다
- API 엔드포인트, URL, 키 값 등은 중앙 집중식으로 관리한다

**Rationale**: 하드 코딩은 코드의 유연성을 저하시키고, 변경 시 여러 곳을 수정해야 하는 위험을 초래한다. 설정 분리는 환경별 배포와 테스트를 용이하게 한다.

### III. Code Reusability

**재사용 가능한 함수와 컴포넌트는 새로 만들지 않고 재사용한다.**

- 동일하거나 유사한 로직이 있는지 먼저 확인한다
- 공통 유틸리티, 훅, 컴포넌트를 적극 활용한다
- 새로운 재사용 가능한 코드를 작성할 때는 확장 가능성을 고려한다
- DRY(Don't Repeat Yourself) 원칙을 준수한다

**Rationale**: 코드 중복은 버그 발생률을 높이고, 유지보수 비용을 증가시킨다. 재사용은 일관성을 보장하고 개발 속도를 향상시킨다.

### IV. Clear Variable Naming

**구분하기 쉬운 변수명을 사용한다.**

- 변수명은 자기 설명적(self-documenting)이어야 한다
- 약어보다는 완전한 단어를 사용한다
- 불린 변수는 `is`, `has`, `should` 등의 접두사를 사용한다
- 배열/리스트는 복수형을 사용한다 (예: `users`, `items`)
- 함수명은 동사로 시작한다 (예: `getUserData`, `handleSubmit`)

**Rationale**: 명확한 네이밍은 코드의 의도를 즉시 전달하여 인지 부하를 줄이고, 버그를 예방한다.

### V. Consistent Coding Style

**일관된 코딩 스타일로 코드를 작성한다.**

- 프로젝트의 ESLint, Prettier 설정을 준수한다
- 파일 구조와 네이밍 컨벤션을 일관되게 유지한다
- 컴포넌트 구조 패턴을 통일한다 (imports → types → component → exports)
- 타입스크립트 타입 정의를 명확하게 작성한다

**Rationale**: 일관된 스타일은 코드 리뷰를 용이하게 하고, 팀원 간 코드 이해도를 높이며, 자동화된 도구의 효과를 극대화한다.

### VI. Production-Grade Quality

**프로덕션 수준의 퀄리티로 제작한다.**

- 에러 핸들링을 철저히 구현한다
- 접근성(a11y) 표준을 준수한다
- 성능 최적화를 고려한다 (코드 스플리팅, 레이지 로딩, 이미지 최적화)
- 보안 모범 사례를 따른다 (XSS 방지, CSRF 방지)
- 크로스 브라우저 호환성을 확인한다
- SEO 최적화를 적용한다

**Rationale**: 프로덕션 퀄리티는 사용자 경험, 시스템 안정성, 비즈니스 신뢰도에 직접적인 영향을 미친다. 초기부터 높은 기준을 유지하면 기술 부채를 예방한다.

## Development Standards

### Technology Stack

- **Framework**: Next.js 15.5.4 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **State Management**: React Query (TanStack Query)
- **Form Handling**: React Hook Form + Zod
- **Animation**: Framer Motion, GSAP
- **3D Graphics**: Three.js, React Three Fiber
- **Testing**: Jest, Playwright, React Testing Library

### Code Organization

- **Components**: `/src/components` - 재사용 가능한 UI 컴포넌트
  - `/common` - 공통 컴포넌트 (Button, Input 등)
  - `/layout` - 레이아웃 컴포넌트 (Header, Footer, Navigation)
  - `/sections` - 섹션별 컴포넌트
  - `/ui` - 특수 UI 컴포넌트
- **Pages**: `/src/app` - Next.js App Router 페이지
- **Utilities**: `/src/lib` - 유틸리티 함수, 상수, 헬퍼
- **Types**: `/src/types` - TypeScript 타입 정의
- **Styles**: Tailwind CSS 유틸리티 우선, 필요시 CSS 모듈

### File Naming Conventions

- **Components**: PascalCase (예: `Button.tsx`, `HeroSection.tsx`)
- **Utilities**: camelCase (예: `formatDate.ts`, `apiHelpers.ts`)
- **Constants**: UPPER_SNAKE_CASE (예: `API_ENDPOINTS.ts`, `NAVIGATION_LINKS.ts`)
- **Types**: PascalCase with `.types.ts` suffix (예: `User.types.ts`)

## Quality Assurance

### Testing Requirements

- **Unit Tests**: 공통 유틸리티 함수, 복잡한 비즈니스 로직
- **Component Tests**: 재사용 가능한 공통 컴포넌트
- **Integration Tests**: 중요 사용자 플로우
- **E2E Tests**: 핵심 사용자 시나리오

### Code Review Standards

- 모든 Pull Request는 최소 1명의 리뷰 승인 필요
- ESLint 에러 0개 (빌드 실패 방지)
- TypeScript 타입 에러 0개
- 경고(Warning)는 허용하되, 정당한 이유 필요

### Performance Standards

- **Lighthouse Score**: Performance 90+ 목표
- **First Contentful Paint**: 1.8초 이하
- **Largest Contentful Paint**: 2.5초 이하
- **Cumulative Layout Shift**: 0.1 이하
- **Time to Interactive**: 3.8초 이하

### Accessibility Standards

- WCAG 2.1 Level AA 준수
- 키보드 네비게이션 지원
- 스크린 리더 호환성
- 적절한 ARIA 레이블 사용
- 컬러 대비 비율 4.5:1 이상

## Governance

### Amendment Process

1. 원칙 변경 제안은 팀 논의를 통해 이루어진다
2. 모든 변경 사항은 문서화되어야 한다
3. 버전 관리는 Semantic Versioning을 따른다
   - **MAJOR**: 기존 원칙 제거 또는 근본적 재정의
   - **MINOR**: 새로운 원칙 추가 또는 중요한 확장
   - **PATCH**: 명확화, 표현 개선, 오타 수정
4. 변경 후 관련 템플릿 및 문서 동기화 필수

### Compliance Review

- 모든 PR은 헌법 원칙 준수 여부를 검토해야 한다
- 복잡성 추가는 명확한 정당성이 필요하다
- 원칙 위반 시 즉시 수정하거나 예외 승인을 받아야 한다

### Runtime Development Guidance

- 개발 중 헌법 원칙을 상시 참조한다
- `/CLAUDE.md` 파일에 AI 작업 관련 추가 지침 보관
- 템플릿 파일(`.specify/templates/`)은 헌법과 일관성 유지

**Version**: 1.0.0 | **Ratified**: 2025-10-16 | **Last Amended**: 2025-10-16
