# Feature Specification: UNIONE 회사소개 사이트

**Status**: DRAFT
**Created**: 2025-10-02
**Last Updated**: 2025-10-02
**Owner**: UNIONE Team

## Executive Summary
Rain.xyz와 Tevau.io를 레퍼런스로 한 모던하고 프리미엄한 회사소개 웹사이트 구축. 핀테크 스타일의 세련된 디자인과 직관적인 네비게이션 구조를 통해 UNIONE의 브랜드 가치와 서비스를 효과적으로 전달하는 웹사이트를 개발합니다.

## Problem Statement
현재 UNIONE는 브랜드와 서비스를 효과적으로 소개할 수 있는 공식 웹사이트가 필요합니다. 글로벌 핀테크 기업들처럼 신뢰감과 혁신성을 동시에 전달할 수 있는 프리미엄 웹 프레젠스가 요구됩니다.

## Goals & Objectives
### Primary Goals
- 브랜드 아이덴티티를 효과적으로 전달하는 프리미엄 웹사이트 구축
- Rain.xyz와 Tevau.io 수준의 모던하고 세련된 디자인 구현
- 직관적이고 사용자 친화적인 네비게이션 시스템 구축
- Card, Platform (Reward/Wallet/Earn), Company 서비스 소개 체계 확립

### Success Metrics
- 웹사이트 로딩 속도 3초 이내
- 모바일 반응형 디자인 100% 지원
- 사용자 평균 체류 시간 2분 이상
- 바운스율 40% 이하
- Lighthouse 성능 점수 90점 이상

## Scope
### In Scope
- 메인 랜딩 페이지 개발
- 헤더/네비게이션 시스템 (드롭다운 포함)
- Card 서비스 소개 페이지
- Platform 서비스 페이지 (Reward, Wallet, Earn 하위 페이지)
- Company 소개 페이지
- 반응형 디자인 구현
- 애니메이션 및 인터랙션 효과
- SEO 최적화

### Out of Scope
- 결제 시스템 통합
- 사용자 인증/로그인 시스템
- 관리자 대시보드
- 다국어 지원 (초기 버전)
- 실시간 채팅 기능

## User Stories
### As a 방문자
- I want to 회사와 서비스에 대한 정보를 쉽게 찾을 수 있기를
- So that UNIONE의 가치와 제품을 빠르게 이해할 수 있다

### As a 잠재 고객
- I want to Card와 Platform 서비스의 특징과 이점을 명확히 파악하기를
- So that 서비스 이용 여부를 결정할 수 있다

### As a 모바일 사용자
- I want to 모바일 기기에서도 완벽하게 동작하는 웹사이트를 이용하기를
- So that 언제 어디서나 편리하게 정보에 접근할 수 있다

## Technical Requirements
### Architecture
- SPA (Single Page Application) 또는 SSR (Server-Side Rendering) 구조
- 컴포넌트 기반 아키텍처
- RESTful API 또는 GraphQL 지원 가능한 구조
- CDN을 활용한 정적 자산 최적화

### Technology Stack
- **Frontend**:
  - React.js 18+ 또는 Next.js 14+
  - TypeScript
  - Tailwind CSS 또는 styled-components
  - Framer Motion (애니메이션)
  - React Query 또는 SWR (데이터 페칭)

- **Backend**:
  - Node.js with Express 또는 Next.js API Routes
  - Headless CMS (Strapi, Contentful) 고려

- **Database**:
  - PostgreSQL 또는 MongoDB (컨텐츠 관리용)

- **Infrastructure**:
  - Vercel 또는 AWS (S3 + CloudFront)
  - GitHub Actions (CI/CD)

### Integration Requirements
- Google Analytics 또는 Mixpanel 통합
- SEO 메타 태그 관리 시스템
- 이미지 최적화 (WebP, lazy loading)
- 웹 폰트 최적화
- 폼 제출 시스템 (Contact forms)

## UI/UX Requirements
### Design Principles
- **Minimalist & Premium**: 깔끔하고 여백을 활용한 프리미엄 디자인
- **Dark/Light Mode**: 다크 모드 중심의 세련된 색상 팔레트
- **Motion & Interaction**: 부드러운 트랜지션과 마이크로 인터랙션
- **Typography First**: 명확한 타이포그래피 계층 구조
- **Glass Morphism**: 현대적인 글래스모피즘 효과 활용

### Key Components
#### 헤더 네비게이션
- 왼쪽: UNIONE 로고 (홈 링크)
- 중앙/우측: 네비게이션 메뉴
  - Card (단일 메뉴)
  - Platform (드롭다운: Reward, Wallet, Earn)
  - Company (단일 메뉴)
- 모바일: 햄버거 메뉴로 전환

#### 히어로 섹션
- 풀스크린 또는 대형 배너
- 임팩트 있는 헤드라인과 서브텍스트
- CTA 버튼 (Get Started, Learn More)
- 백그라운드 그래디언트 또는 3D 요소

#### 카드 섹션
- 카드 제품 비주얼 (3D 렌더링 또는 고품질 이미지)
- 주요 특징 하이라이트
- 인터랙티브 카드 회전 효과

#### 플랫폼 섹션
- 탭 또는 아코디언 형식으로 Reward/Wallet/Earn 소개
- 각 기능별 아이콘과 설명
- 데모 또는 스크린샷

#### 푸터
- 회사 정보, 연락처
- 소셜 미디어 링크
- 법적 고지사항
- 뉴스레터 구독

## Functional Requirements
### Must Have
- 반응형 웹 디자인 (모바일, 태블릿, 데스크톱)
- 네비게이션 드롭다운 메뉴 시스템
- 부드러운 스크롤 애니메이션
- 페이지 로딩 인디케이터
- SEO 최적화 (메타 태그, 사이트맵, robots.txt)
- 404 에러 페이지
- 접근성 기본 요구사항 준수 (WCAG 2.1 Level AA)

### Should Have
- 다크/라이트 테마 전환
- 스크롤 진행 표시기
- 뒤로가기 최상단 버튼
- 이미지 갤러리 또는 캐러셀
- 컨택트 폼
- 소셜 공유 기능

### Could Have
- 다국어 지원 준비 (i18n 구조)
- 검색 기능
- 블로그 또는 뉴스 섹션
- 팀 멤버 소개 페이지
- FAQ 섹션

## Non-Functional Requirements
### Performance
- 초기 로딩 시간 3초 이내
- Time to Interactive (TTI) 5초 이내
- First Contentful Paint (FCP) 1.5초 이내
- 이미지 레이지 로딩 구현
- 코드 스플리팅 적용

### Security
- HTTPS 프로토콜 필수
- Content Security Policy (CSP) 헤더 설정
- XSS 보호
- 환경 변수를 통한 민감 정보 관리
- Rate limiting (API 호출 제한)

### Accessibility
- WCAG 2.1 Level AA 준수
- 키보드 네비게이션 완벽 지원
- 스크린 리더 호환성
- 적절한 색상 대비
- 포커스 인디케이터 명확성

## Dependencies
- 디자인 시스템 및 브랜드 가이드라인
- 고품질 이미지 및 그래픽 리소스
- 컨텐츠 (카피라이팅)
- 도메인 및 호스팅 설정
- SSL 인증서

## Risks & Mitigations
| Risk | Likelihood | Impact | Mitigation |
|------|------------|---------|------------|
| 브라우저 호환성 이슈 | Medium | High | 주요 브라우저 테스팅 자동화, Babel/PostCSS 활용 |
| 성능 저하 | Medium | High | 성능 모니터링 도구 도입, 최적화 가이드라인 수립 |
| 모바일 반응형 문제 | Low | Medium | 모바일 우선 개발 접근, 실기기 테스팅 |
| SEO 인덱싱 지연 | Low | Medium | SSR/SSG 구현, 구조화된 데이터 마크업 |
| 컨텐츠 지연 | Medium | High | 임시 컨텐츠로 개발 진행, 단계적 컨텐츠 업데이트 |

## Timeline & Milestones
| Milestone | Target Date | Description |
|-----------|-------------|-------------|
| 디자인 시스템 확정 | Week 1 | UI 컴포넌트, 색상, 타이포그래피 확정 |
| 프로토타입 완성 | Week 2 | 주요 페이지 와이어프레임 및 인터랙션 프로토타입 |
| 개발 환경 구축 | Week 2 | 기술 스택 설정, CI/CD 파이프라인 구축 |
| 헤더/푸터 구현 | Week 3 | 네비게이션 시스템 완성 |
| 메인 페이지 개발 | Week 4-5 | 히어로 섹션 및 주요 컴포넌트 구현 |
| 서브 페이지 개발 | Week 6-7 | Card, Platform, Company 페이지 구현 |
| 반응형/애니메이션 | Week 8 | 모바일 최적화 및 애니메이션 적용 |
| 테스팅 및 최적화 | Week 9 | 성능 최적화, 버그 수정, 접근성 검증 |
| 배포 준비 | Week 10 | 최종 검토 및 프로덕션 배포 |

## Open Questions
- 정확한 브랜드 컬러와 로고 디자인은?
- Platform 서비스 (Reward, Wallet, Earn)의 구체적인 컨텐츠는?
- 다국어 지원이 초기 버전에 필요한가?
- 관리자가 컨텐츠를 직접 수정할 수 있는 CMS가 필요한가?
- 애널리틱스 도구 선택 (Google Analytics vs Mixpanel vs Amplitude)?
- 폼 제출 시 이메일 알림 또는 CRM 연동이 필요한가?

## References
- [Rain.xyz](https://rain.xyz) - 스테이블코인 기반 카드 발급 플랫폼
- [Tevau.io](https://tevau.io) - 블록체인 결제 솔루션 플랫폼
- planning.pptx - 상세 기획안 문서
- [Framer Motion](https://www.framer.com/motion/) - 애니메이션 라이브러리
- [Tailwind CSS](https://tailwindcss.com/) - 유틸리티 우선 CSS 프레임워크
- [Next.js](https://nextjs.org/) - React 프레임워크

## Appendix
### 예상 페이지 구조
```
/
├── index (메인 페이지)
├── card (카드 서비스 소개)
├── platform/
│   ├── index (플랫폼 개요)
│   ├── reward (리워드 서비스)
│   ├── wallet (월렛 서비스)
│   └── earn (수익 창출 서비스)
├── company (회사 소개)
├── contact (연락처)
└── 404 (에러 페이지)
```

### 주요 디자인 참고사항
- 그래디언트 배경: 보라색-파란색 계열의 그래디언트
- 카드 디자인: 3D 틸트 효과, 홀로그램 느낌
- 타이포그래피: Inter, Pretendard 등 모던한 폰트
- 아이콘: Phosphor Icons, Heroicons 활용
- 애니메이션: AOS, Framer Motion으로 스크롤 트리거 애니메이션