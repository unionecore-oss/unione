# Research: Card 페이지 히어로 섹션 모바일 배경 이미지 최적화

**Date**: 2025-10-22
**Feature**: 006-fix-card-hero-mobile

## Overview

모바일 화면에서 히어로 섹션 배경 이미지(`/card6.png`)의 핵심 요소(손가락으로 카드를 들고 있는 장면)가 뷰포트에 완전하게 표시되도록 CSS 반응형 이미지 포지셔닝 기법을 조사합니다.

## Research Questions

### 1. CSS `object-position` 반응형 패턴

**Question**: 다양한 모바일 화면 크기에서 배경 이미지의 특정 영역(손가락과 카드)을 일관되게 표시하는 최적의 CSS 접근 방식은?

**Decision**: CSS `object-position` 속성과 Tailwind CSS 미디어 쿼리 조합 사용

**Rationale**:
- `object-position`은 `object-fit: cover`와 함께 사용 시 이미지 크롭 위치를 정밀하게 제어 가능
- Tailwind CSS의 반응형 유틸리티(`sm:`, `md:`, `lg:`)로 브레이크포인트별 위치 조정 가능
- JavaScript 없이 순수 CSS로 구현 가능하여 성능 우수
- 브라우저 호환성 우수 (iOS Safari 14+, Chrome 90+)

**Alternatives considered**:
- **Picture 요소 + srcset**: 다른 이미지 제공 필요 → 범위 외(이미지 교체 금지)
- **Background-image with background-position**: `img` 태그 대신 `div`로 변경 필요 → 기존 구조 유지 위배
- **JavaScript 기반 동적 조정**: 불필요한 복잡성, 성능 오버헤드

**Implementation approach**:
```tsx
// Tailwind CSS 클래스로 반응형 object-position 적용
<img
  src="/card6.png"
  alt="Unione Card"
  className="w-full h-full object-cover
    object-[65%_center]           // 모바일: 오른쪽으로 이동하여 손가락 포함
    md:object-[center_center]     // 태블릿: 중앙
    lg:object-[center_center]"    // 데스크탑: 중앙 (기존 유지)
  style={{ filter: CSS_FILTERS.cardPage.heroBackground }}
/>
```

**Best practices**:
- 브레이크포인트 값은 Tailwind 표준 사용 (sm: 640px, md: 768px, lg: 1024px)
- 퍼센트 기반 위치 값으로 다양한 화면 비율 대응
- Chrome DevTools의 Device Mode로 10종 주요 기기 테스트

---

### 2. 모바일 이미지 포지셔닝 최적값

**Question**: card6.png 이미지의 핵심 요소(손가락, 카드)를 모바일 화면에 최적으로 표시하는 `object-position` 값은?

**Decision**:
- **모바일 (320px-767px)**: `object-[65%_center]` 또는 `object-[70%_center]`
- **태블릿 (768px-1023px)**: `object-[55%_center]`
- **데스크탑 (1024px+)**: `object-[center_center]` (기존 유지)

**Rationale**:
- card6.png 이미지 분석 결과: 손가락과 카드는 이미지의 오른쪽 60-70% 영역에 위치
- 모바일에서 좁은 뷰포트로 인해 기본 `center center`는 왼쪽 가장자리만 표시
- 수평 위치를 65-70%로 이동하면 손가락과 카드의 중심이 뷰포트 중앙에 위치
- 실제 기기 테스트를 통해 최종값 미세 조정 필요 (65% vs 70%)

**Alternatives considered**:
- **50% center (기존값)**: 모바일에서 손가락 크롭됨 → 문제 해결 안됨
- **80% center**: 카드 왼쪽 가장자리 크롭 가능성 → 너무 극단적
- **right center**: 손가락은 보이나 카드 일부 크롭 → 균형 부족

**Testing plan**:
1. 초기값 65%로 시작
2. Playwright 또는 수동 테스트로 10종 기기 확인:
   - iPhone SE (375x667)
   - iPhone 14 (390x844)
   - iPhone 14 Pro Max (430x932)
   - Galaxy S23 (360x800)
   - Pixel 7 (412x915)
   - iPad Mini (768x1024)
   - iPad Pro (1024x1366)
   - 기타 주요 기기
3. 손가락과 카드 둘 다 완전히 보이는지 확인
4. 필요시 60-75% 범위 내에서 미세 조정

---

### 3. 성능 영향 및 애니메이션 호환성

**Question**: CSS `object-position` 변경이 Framer Motion 애니메이션 및 페이지 성능에 미치는 영향은?

**Decision**: 성능 영향 무시할 수 있는 수준, Framer Motion 애니메이션과 완전 호환

**Rationale**:
- `object-position`은 GPU 가속 CSS 속성이 아니지만, 초기 렌더링 시 한 번만 계산
- 이미지 로딩 후 재배치 발생하지 않음 (레이아웃 시프트 없음)
- Framer Motion의 `opacity` 애니메이션은 이미지 위치와 독립적
- 화면 회전 시 CSS 미디어 쿼리가 자동 적용 (0.3초 이내 전환)

**Performance validation**:
- Chrome DevTools Performance 탭으로 Reflow/Repaint 확인
- Lighthouse 점수 변화 측정 (목표: Performance 90+ 유지)
- 3G 네트워크 시뮬레이션으로 이미지 로딩 시간 확인

**Alternatives considered**:
- **transform: translate()**: GPU 가속되나 `object-fit`과 함께 사용 복잡 → 불필요한 복잡성
- **CSS Grid/Flexbox**: 이미지 크기 조정 필요 → 현재 구조 변경 최소화 위배

---

### 4. 크로스 브라우저 호환성

**Question**: `object-position`의 브라우저 호환성 및 폴백 전략은?

**Decision**: 폴백 불필요, 모든 타겟 브라우저에서 지원됨

**Rationale**:
- **iOS Safari**: 14+ 지원 (2020년 9월 출시)
- **Chrome/Android**: 90+ 지원 (2021년 4월 출시)
- **Firefox**: 36+ 지원 (2015년 2월 출시)
- **Edge**: 79+ 지원 (2020년 1월 출시)
- 프로젝트 타겟 플랫폼이 최신 브라우저이므로 100% 커버리지

**Browser testing plan**:
- BrowserStack 또는 실제 기기로 확인:
  - iOS Safari (iPhone 12, iPhone 14)
  - Chrome Android (Galaxy S23)
  - Desktop Chrome, Safari, Firefox, Edge
- CSS `@supports` 쿼리 불필요 (모든 타겟 브라우저 지원)

**Alternatives considered**:
- **Polyfill 사용**: 불필요 (기본 지원)
- **JavaScript fallback**: 복잡성 증가, 성능 저하 → 사용 안함

---

### 5. Tailwind CSS 커스텀 값 활용

**Question**: Tailwind CSS에서 임의 값(arbitrary values)을 사용한 `object-position` 설정 방법은?

**Decision**: Tailwind의 square bracket notation `object-[65%_center]` 사용

**Rationale**:
- Tailwind CSS 4는 임의 값을 완벽 지원
- `tailwind.config.js`에 커스텀 클래스 추가 불필요 → 설정 파일 복잡도 증가 방지
- 브레이크포인트별 다른 값 적용 가능: `object-[65%_center] md:object-[center_center]`

**Implementation example**:
```tsx
className="
  object-cover
  object-[65%_center]
  sm:object-[65%_center]
  md:object-[55%_center]
  lg:object-center
"
```

**Alternatives considered**:
- **tailwind.config.js에 theme.extend 추가**:
  ```js
  theme: {
    extend: {
      objectPosition: {
        'mobile-card': '65% center',
      }
    }
  }
  ```
  → 재사용성 낮고, 이 한 곳에서만 사용하므로 불필요

---

## Summary

### Key Decisions

1. **기술 스택**: CSS `object-position` + Tailwind CSS 미디어 쿼리
2. **포지셔닝 값**:
   - 모바일: `65%_center` (테스트 후 60-70% 범위 미세 조정)
   - 태블릿: `55%_center`
   - 데스크탑: `center_center` (변경 없음)
3. **성능**: 무시할 수 있는 수준, Framer Motion 애니메이션 호환
4. **브라우저 지원**: 100% 타겟 브라우저 커버, 폴백 불필요
5. **Tailwind 활용**: Square bracket notation으로 임의 값 직접 사용

### Implementation Checklist

- [ ] CardHero/index.tsx의 `<img>` 태그에 반응형 `object-position` 클래스 추가
- [ ] 모바일 (320-767px): `object-[65%_center]`
- [ ] 태블릿 (768-1023px): `object-[55%_center]`
- [ ] 데스크탑 (1024px+): `object-center` (기존)
- [ ] Chrome DevTools Device Mode로 10종 기기 시각적 검증
- [ ] Playwright로 자동화된 스크린샷 비교 (선택사항)
- [ ] 성능 테스트: Lighthouse, 3G 네트워크 시뮬레이션
- [ ] 실제 기기 테스트: iPhone SE, iPhone 14, Galaxy S23

### Risk Mitigation

- **리스크**: 65%가 모든 기기에서 최적이 아닐 수 있음
  - **완화**: 60-75% 범위 내 미세 조정 가능, 빠른 반복 테스트
- **리스크**: 화면 회전 시 이미지 전환 끊김
  - **완화**: CSS transition 추가 고려 (필요 시)
- **리스크**: 데스크탑/태블릿 시각적 회귀
  - **완화**: 데스크탑은 기존값 유지, 태블릿은 중간값으로 부드러운 전환

### Next Steps

Phase 1 (Design & Contracts)로 진행:
- `quickstart.md` 생성: 로컬 개발 환경 설정 및 테스트 가이드
- `data-model.md`, `contracts/` 불필요 (UI 조정만)
