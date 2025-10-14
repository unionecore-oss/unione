# Reward Page Updates - 2025-10-14

## Overview
/platform/reward 페이지의 컨텐츠 업데이트 및 새로운 섹션 추가

## Changes Made

### 1. 카드 케이스 섹션 - 카드 내용 수정
**파일**: `src/components/sections/platform/reward/RewardCalculator.tsx`

#### 변경된 카드 내용:
1. **Maximize Your Rewards**
   - 설명: "Boost your mining speed with friends, and maximize your earnings by unlocking tiered rewards through friend invitations."
   
2. **Mobile First**
   - 설명: "Designed for your phone mine and manage crypto effortlessly."
   
3. **User Friendly**
   - 설명: "Easy for everyone and eco-friendly combining accessibility, security, and sustainability."

### 2. 아이콘 디자인 업데이트
**파일**: `src/components/sections/platform/reward/RewardCalculator.tsx`

- 크기: 48x48 → 32x32 (더 작고 미니멀하게)
- 선 두께: 1.5 → 1.2 (더 얇고 깔끔하게)
- 전체적으로 심플한 디자인으로 변경

### 3. 앱 다운로드 섹션 추가
**새 파일**: `src/components/sections/platform/reward/AppDownloadSection.tsx`

#### 레이아웃:
- **왼쪽**: 모바일 앱 이미지 (`/app-phones.png` - 1234.png에서 복사)
- **오른쪽**: 
  - 제목: "Start mining today by downloading the app! Join us!"
  - 설명: "Join now and keep 100% of what you earn. Mining Uni is completely free. All you need is an invitation from a trusted member. Got one? Download the app below and get started!"
  - 공식 App Store/Google Play 다운로드 배지

#### 기술 구현:
- Grid 레이아웃 (lg:grid-cols-2)
- Framer Motion 애니메이션 (fadeInUp, staggerContainer)
- 반응형 디자인 (모바일/태블릿/데스크톱)
- Hover 효과 (scale-105)

### 4. 페이지 구조 변경
**파일**: `src/app/platform/reward/page.tsx`

#### 최종 섹션 순서:
1. RewardSection (히어로 섹션)
2. RewardCalculator (3개 카드)
3. AppDownloadSection (새로 추가)
4. ~~CTASection~~ (삭제됨)

### 5. 에셋 관리
- `1234.png` → `public/app-phones.png`로 복사
- 공식 배지 이미지는 외부 CDN 사용:
  - App Store: `https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg`
  - Google Play: `https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg`

## Key Design Patterns

### Component Structure
```
AppDownloadSection/
├─ Image (left)
│  └─ 1234.png mockup
└─ Content (right)
   ├─ Heading
   ├─ Description
   └─ Download Badges
      ├─ App Store
      └─ Google Play
```

### Animation Pattern
- Container: staggerContainer
- Elements: fadeInUp with delay
- Viewport trigger: once=true, amount=0.3
- Image: slideInRight variant

## Configuration

### Package.json Update
- 제거: `-p 4000` 하드코딩
- 변경: `"dev": "next dev --turbopack"` (포트 자유롭게 지정 가능)

### Development Server
- 포트 3001에서 실행 중
- Turbopack 활성화

## Testing Notes
- Playwright MCP로 시각적 확인 완료
- 모든 섹션 정상 렌더링
- 애니메이션 동작 확인
- 반응형 레이아웃 검증

## Related Files
- `src/components/sections/platform/reward/RewardCalculator.tsx`
- `src/components/sections/platform/reward/AppDownloadSection.tsx`
- `src/app/platform/reward/page.tsx`
- `public/app-phones.png`
- `package.json`
