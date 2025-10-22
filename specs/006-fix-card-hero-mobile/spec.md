# Feature Specification: Card 페이지 히어로 섹션 모바일 배경 이미지 최적화

**Feature Branch**: `006-fix-card-hero-mobile`
**Created**: 2025-10-22
**Status**: Draft
**Input**: User description: "모바일 화면에서card 페이지 히어로 섹션 이미지 배경이 완전하게 나오지 않아서 수정이 필요해. 원래는 손가락으로 카드를 들고 있는 사진인데 지금 손가락이 안보이고 카드 왼쪽 가장자리만 보이고 있어. 모바일에서도 데스크탑처럼 잘 나올 수 있도록 수정해줘."

## User Scenarios & Testing *(mandatory)*

<!--
  IMPORTANT: User stories should be PRIORITIZED as user journeys ordered by importance.
  Each user story/journey must be INDEPENDENTLY TESTABLE - meaning if you implement just ONE of them,
  you should still have a viable MVP (Minimum Viable Product) that delivers value.
  
  Assign priorities (P1, P2, P3, etc.) to each story, where P1 is the most critical.
  Think of each story as a standalone slice of functionality that can be:
  - Developed independently
  - Tested independently
  - Deployed independently
  - Demonstrated to users independently
-->

### User Story 1 - 모바일 사용자의 Card 페이지 히어로 섹션 시각적 경험 개선 (Priority: P1)

모바일 기기로 Card 페이지를 방문한 사용자가 데스크탑과 동일하게 손가락으로 카드를 들고 있는 완전한 히어로 이미지를 볼 수 있어야 합니다. 현재는 모바일에서 이미지가 과도하게 크롭되어 카드 왼쪽 가장자리만 보이고 손가락이 보이지 않아 의도된 시각적 메시지가 전달되지 않습니다.

**Why this priority**: Card 페이지의 첫인상을 결정하는 히어로 섹션이 모바일에서 제대로 표시되지 않으면 사용자 경험이 크게 저하되고 브랜드 이미지에 부정적 영향을 줍니다. 모바일 트래픽이 전체의 60% 이상을 차지하는 현대 웹 환경에서 이는 최우선 해결 과제입니다.

**Independent Test**: 모바일 기기(iPhone SE, iPhone 14, Galaxy S23 등)로 Card 페이지를 열어 히어로 섹션의 배경 이미지가 손가락과 카드 전체를 포함하여 완전하게 표시되는지 시각적으로 확인할 수 있습니다.

**Acceptance Scenarios**:

1. **Given** 사용자가 모바일 기기(화면 너비 320px-428px)로 Card 페이지에 접속했을 때, **When** 히어로 섹션을 확인하면, **Then** 손가락으로 카드를 들고 있는 전체 이미지가 크롭되지 않고 완전하게 표시되어야 합니다.

2. **Given** 사용자가 태블릿 기기(화면 너비 768px-1024px)로 Card 페이지에 접속했을 때, **When** 히어로 섹션을 확인하면, **Then** 데스크탑과 동일한 품질로 배경 이미지가 표시되어야 합니다.

3. **Given** 사용자가 초소형 모바일 기기(iPhone SE, 320px 너비)로 Card 페이지에 접속했을 때, **When** 히어로 섹션을 확인하면, **Then** 이미지가 왜곡되거나 과도하게 크롭되지 않고 핵심 요소(손가락, 카드)가 모두 보여야 합니다.

4. **Given** 사용자가 모바일 기기를 세로/가로로 회전했을 때, **When** 화면 방향이 변경되면, **Then** 배경 이미지가 새로운 뷰포트에 맞춰 적절하게 재배치되어야 합니다.

---

### Edge Cases

- 초소형 화면(320px 미만)에서 이미지가 어떻게 표시되는가?
- 고해상도 디스플레이(Retina, 4K)에서 이미지 품질이 유지되는가?
- 느린 네트워크 환경에서 이미지 로딩 중 레이아웃이 깨지지 않는가?
- 화면 회전(portrait ↔ landscape) 시 이미지 전환이 자연스러운가?
- 다양한 종횡비(16:9, 18:9, 19.5:9 등)의 모바일 기기에서 일관된 경험을 제공하는가?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: 시스템은 모바일 화면(320px-767px)에서 Card 페이지 히어로 섹션 배경 이미지를 손가락과 카드 전체가 보이도록 표시해야 합니다.

- **FR-002**: 시스템은 반응형 이미지 포지셔닝을 통해 모든 화면 크기에서 이미지의 핵심 요소(손가락으로 카드를 들고 있는 장면)가 뷰포트 내에 위치하도록 보장해야 합니다.

- **FR-003**: 시스템은 데스크탑(1024px 이상)에서 기존의 시각적 레이아웃을 유지하면서 모바일 최적화를 적용해야 합니다.

- **FR-004**: 시스템은 태블릿 화면(768px-1023px)에서 데스크탑과 모바일 사이의 부드러운 전환 효과를 제공해야 합니다.

- **FR-005**: 시스템은 이미지 비율을 유지하면서 다양한 뷰포트 크기에 맞춰 배경 이미지를 자동으로 조정해야 합니다.

- **FR-006**: 시스템은 화면 방향 변경(세로/가로) 시 이미지 포지셔닝을 동적으로 재계산하여 최적의 표시를 보장해야 합니다.

### Key Entities

- **히어로 배경 이미지**: 손가락으로 Unione VISA Platinum 카드를 들고 있는 사진 (`/card6.png`), 주요 시각적 요소는 오른쪽 상단의 손가락과 중앙의 검은색 카드

- **뷰포트 브레이크포인트**: 모바일(320-767px), 태블릿(768-1023px), 데스크탑(1024px+)의 반응형 구간

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 모바일 기기(320px-767px)에서 Card 페이지 히어로 섹션을 확인한 사용자의 95% 이상이 손가락과 카드 전체를 시각적으로 인식할 수 있어야 합니다.

- **SC-002**: 모든 주요 모바일 기기(iPhone SE, iPhone 14 Pro Max, Galaxy S23, Pixel 7) 10종에서 히어로 이미지의 핵심 요소가 100% 뷰포트 내에 표시되어야 합니다.

- **SC-003**: 데스크탑과 태블릿에서 기존 레이아웃 품질이 100% 유지되어야 합니다(시각적 회귀 없음).

- **SC-004**: 이미지 로딩 시간이 모바일 3G 네트워크에서 3초 이내, LTE에서 1초 이내에 완료되어야 합니다.

- **SC-005**: 화면 방향 전환 시 이미지 재배치가 0.3초 이내에 완료되어 사용자가 끊김을 느끼지 않아야 합니다.

## Assumptions

- 배경 이미지 파일(`/card6.png`)의 원본 해상도와 품질은 충분하며 교체가 필요하지 않습니다.
- CSS `object-position` 및 미디어 쿼리를 통한 반응형 조정으로 해결 가능합니다.
- 현재 Framer Motion 애니메이션은 유지하면서 이미지 포지셔닝만 수정합니다.
- 브라우저 호환성은 최신 Chrome, Safari, Firefox, Edge를 대상으로 합니다(IE 제외).
- 이미지 최적화(WebP, AVIF 변환)는 이번 피처 범위에 포함하지 않으며, 필요 시 별도 작업으로 진행합니다.

## Out of Scope

- 히어로 이미지 파일 자체의 교체 또는 재촬영
- 텍스트 콘텐츠(제목, 부제목, CTA 버튼) 수정
- 이미지 포맷 최적화(WebP, AVIF 변환)
- 성능 최적화(lazy loading, progressive image loading)
- 다크 모드 대응
- 애니메이션 효과 변경

