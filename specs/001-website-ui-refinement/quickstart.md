# Developer Quickstart: Website UI Refinement

**Feature**: 001-website-ui-refinement | **Date**: 2025-10-16 | **Phase**: 1

## Overview

이 문서는 Website UI Refinement 기능을 로컬 환경에서 개발하고 테스트하기 위한 빠른 시작 가이드입니다. 7개 페이지(Homepage, Card, Reward, Wallet, Earn, About Us, Footer)의 시각적 개선 작업을 수행합니다.

**Feature Branch**: `001-website-ui-refinement`
**Estimated Time**: 12-16시간
**Dependencies**: 없음 (모든 패키지 이미 설치됨)

---

## Prerequisites

### 필수 도구

- **Node.js**: 18.17+ 또는 20.10+
- **npm**: 9.0+
- **Git**: 2.40+
- **에디터**: VS Code (권장) + ESLint/Prettier 확장

### 필수 지식

- TypeScript 기본 문법
- React 19 (Server/Client Components)
- Next.js 15 App Router
- Tailwind CSS 유틸리티 클래스

---

## Quick Start (5분)

### 1. 저장소 클론 및 브랜치 체크아웃

```bash
# 이미 클론되어 있다면 생략
cd /Users/ai-code-lab/projects/unione

# Feature 브랜치 체크아웃
git checkout 001-website-ui-refinement

# 최신 변경사항 가져오기
git pull origin 001-website-ui-refinement
```

### 2. 의존성 설치 (이미 완료되었을 가능성 높음)

```bash
# 패키지 확인 및 설치
npm install
```

### 3. 개발 서버 실행

```bash
# 개발 서버 시작 (포트 3000)
npm run dev

# 브라우저에서 열기
open http://localhost:3000
```

### 4. 변경 사항 확인

방문할 페이지:
- http://localhost:3000 (Homepage)
- http://localhost:3000/card (Card)
- http://localhost:3000/platform/reward (Reward)
- http://localhost:3000/platform/wallet (Wallet)
- http://localhost:3000/platform/earn (Earn)
- http://localhost:3000/company (About Us - 향후 경로 변경 예정)

---

## Project Structure

### 주요 파일 위치

```
src/
├── app/                                    # 페이지 라우트
│   ├── page.tsx                            # Homepage
│   ├── card/page.tsx                       # Card page
│   ├── platform/
│   │   ├── reward/page.tsx                 # Reward page
│   │   ├── wallet/page.tsx                 # Wallet page
│   │   └── earn/page.tsx                   # Earn page
│   └── company/page.tsx                    # About Us page (이름 변경 예정)
│
├── components/
│   ├── sections/
│   │   ├── home/CardShowcase/              # 🔴 수정 필요: 3D 이미지
│   │   ├── card/
│   │   │   ├── CardHero/                   # 🔴 수정 필요: 색상 향상
│   │   │   └── CardGrid/                   # 🔴 수정 필요: 1.5배 크기
│   │   ├── platform/
│   │   │   ├── reward/CardShowcase/        # 🔴 수정 필요: 카드 디자인 + 배경색
│   │   │   ├── wallet/
│   │   │   │   ├── WalletHero/             # 🔴 수정 필요: 보라색 선
│   │   │   │   ├── SecuritySection/        # 🔴 수정 필요: 흰색 배경 + 3D 이미지
│   │   │   │   └── MysticSection/          # 🔴 수정 필요: 오묘한 레이아웃
│   │   │   └── earn/
│   │   │       ├── EarnHero/               # 🔴 수정 필요: 텍스트 정렬 + 볼드
│   │   │       └── CardGrid/               # 🔴 수정 필요: 애니메이션 제거
│   │   └── company/
│   │       ├── AboutHero/                  # 🔴 수정 필요: 텍스트 2배
│   │       ├── CoreValues/                 # 🔴 수정 필요: 카드 디자인
│   │       └── ContactForm/                # 🔴 수정 필요: 폼 디자인
│   └── layout/
│       └── Footer/                         # 🔴 수정 필요: 소셜미디어 3개만
│
├── lib/
│   └── constants.ts                        # 🟡 수정 가능: 색상/크기 상수
│
└── public/
    └── images/                             # 🟢 추가 필요: 새 3D 이미지
        ├── card-phone-3d.webp              # (추가 필요)
        ├── card-phone-3d.png               # (추가 필요)
        ├── security-3d.webp                # (추가 필요)
        ├── security-3d.png                 # (추가 필요)
        ├── mystic-bg.webp                  # (추가 필요)
        └── mystic-bg.png                   # (추가 필요)
```

---

## Development Workflow

### 1. 작업 시작 전

```bash
# 최신 코드 가져오기
git pull origin 001-website-ui-refinement

# 개발 서버 실행
npm run dev
```

### 2. 컴포넌트 수정

**예시: Homepage 3D 이미지 교체**

```typescript
// src/components/sections/home/CardShowcase/index.tsx

import Image from 'next/image'

export default function CardShowcase() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold">
              Experience the Future
            </h2>
            <p className="text-xl text-gray-600">
              Your gateway to seamless crypto payments
            </p>
          </div>

          {/* Right: 3D Image */}
          <div className="relative w-full max-w-2xl mx-auto">
            <Image
              src="/images/card-phone-3d.webp"
              alt="Unione card floating above smartphone showcasing 3D design"
              width={1200}
              height={800}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
```

### 3. 실시간 확인

- 저장하면 Hot Reload로 즉시 반영
- 브라우저에서 `http://localhost:3000` 확인
- Chrome DevTools로 스타일 미세 조정

### 4. 빌드 테스트

```bash
# 프로덕션 빌드 (ESLint 체크 포함)
npm run build

# 빌드 성공 확인
# ✅ Compiled successfully
# ❌ Failed to compile (ESLint 에러 수정 필요)
```

### 5. 코드 품질 검증

```bash
# TypeScript 타입 체크
npm run type-check

# ESLint 실행
npm run lint

# Prettier 포맷팅
npm run format
```

---

## Common Tasks

### 이미지 추가하기

```bash
# 1. 이미지를 public/images/ 폴더에 추가
cp ~/Downloads/card-phone-3d.webp public/images/
cp ~/Downloads/card-phone-3d.png public/images/

# 2. Next.js Image 컴포넌트로 사용
<Image
  src="/images/card-phone-3d.webp"
  alt="Descriptive alt text"
  width={1200}
  height={800}
  priority  // LCP 이미지인 경우
/>
```

### 색상 변경하기

```typescript
// Option 1: Tailwind 유틸리티 클래스
<div className="bg-purple-50 text-purple-900">

// Option 2: 커스텀 색상 (tailwind.config.ts)
export default {
  theme: {
    extend: {
      colors: {
        'brand-purple': '#9333ea',
      },
    },
  },
}

// 사용:
<div className="bg-brand-purple">
```

### 텍스트 크기 변경하기

```typescript
// Tailwind 텍스트 크기 클래스
text-base   // 16px (1rem)
text-lg     // 18px (1.125rem)
text-xl     // 20px (1.25rem)
text-2xl    // 24px (1.5rem)
text-3xl    // 30px (1.875rem)
text-4xl    // 36px (2.25rem)
text-5xl    // 48px (3rem)
text-6xl    // 60px (3.75rem)
text-7xl    // 72px (4.5rem)

// 예시: 2배 크기로 변경
// BEFORE:
<h1 className="text-3xl">Title</h1>  // 30px

// AFTER:
<h1 className="text-6xl">Title</h1>  // 60px (약 2배)
```

### 애니메이션 제거하기

```typescript
// BEFORE: Framer Motion 애니메이션
import { motion } from 'framer-motion'

<motion.div
  animate={{ x: [0, 100, 0] }}
  transition={{ repeat: Infinity }}
>
  <div className="h-2 bg-green-500" />
</motion.div>

// AFTER: 일반 div로 변경 (애니메이션 제거)
<div>
  {/* 초록색 바 완전 제거 */}
</div>
```

### CSS 필터로 색상 향상하기

```typescript
// Card Hero 색상 향상 예시
<div className="relative">
  <Image
    src="/images/card-hero-bg.jpg"
    alt="Card background"
    className="saturate-150 contrast-110 brightness-105"
    width={1920}
    height={1080}
  />
</div>

// 또는 style prop 사용:
<div style={{
  filter: 'saturate(1.5) contrast(1.1) brightness(1.05)'
}}>
```

---

## Testing

### 수동 테스트 체크리스트

각 페이지를 방문하여 다음을 확인하세요:

#### Homepage (http://localhost:3000)
- [ ] CardShowcase 섹션에 3D 이미지가 표시됨
- [ ] 이미지가 2초 이내에 로드됨
- [ ] 모바일/태블릿/데스크톱에서 반응형 동작

#### Card Page (http://localhost:3000/card)
- [ ] Hero 섹션 배경 카드 색상이 진하고 선명함
- [ ] Footer 섹션 카드가 1.5배 크기로 표시됨
- [ ] Aspect ratio가 유지됨

#### Reward Page (http://localhost:3000/platform/reward)
- [ ] CardShowcase 섹션 카드 3개가 새 디자인으로 표시됨
- [ ] 배경색이 히어로 섹션과 명확히 구분됨
- [ ] 배경색은 purple-50 (#faf5ff)

#### Wallet Page (http://localhost:3000/platform/wallet)
- [ ] Hero 섹션 텍스트 사이 보라색 선 표시
- [ ] 두 번째 섹션 배경이 흰색
- [ ] 두 번째 섹션에 보안 관련 3D 이미지 표시
- [ ] 세 번째 섹션이 왼쪽 이미지 + 오른쪽 텍스트 레이아웃

#### Earn Page (http://localhost:3000/platform/earn)
- [ ] Hero 섹션 텍스트가 중앙 정렬
- [ ] Hero 텍스트가 2줄로 표시되고 볼드체
- [ ] CardGrid에 초록색 바 애니메이션이 없음

#### About Us Page (http://localhost:3000/company)
- [ ] 페이지 제목이 "About Us"
- [ ] 모든 텍스트가 2배 크기로 표시됨
- [ ] 카드 쇼케이스 4개 카드가 현대적 디자인
- [ ] Contact 폼이 세련된 디자인으로 표시됨

#### Footer (모든 페이지)
- [ ] 소셜미디어 버튼이 정확히 3개 (Instagram, X, Telegram)
- [ ] 버튼이 균등하게 배치됨
- [ ] 호버 효과가 작동함

### 반응형 테스트

```bash
# Chrome DevTools 단축키: Cmd+Option+I (Mac) / F12 (Windows)
# Device Toolbar 토글: Cmd+Shift+M (Mac) / Ctrl+Shift+M (Windows)

# 테스트할 뷰포트:
# - Mobile: 375px (iPhone SE)
# - Tablet: 768px (iPad Mini)
# - Desktop: 1440px (MacBook Pro)
```

### 접근성 테스트

```bash
# Lighthouse 실행 (Chrome DevTools)
# 1. DevTools 열기 (F12)
# 2. Lighthouse 탭 선택
# 3. "Accessibility" 체크
# 4. "Analyze page load" 클릭

# 목표:
# - Accessibility Score: 100
# - No contrast errors
# - All images have alt text
```

### 성능 테스트

```bash
# Lighthouse Performance 실행
# 목표:
# - Performance Score: 90+
# - LCP < 2.5s
# - CLS < 0.1
# - FID < 100ms
```

---

## Debugging Tips

### 개발 서버가 시작되지 않을 때

```bash
# 포트 3000이 이미 사용 중인 경우
lsof -ti:3000 | xargs kill -9

# .next 폴더 삭제 후 재시작
rm -rf .next
npm run dev
```

### 이미지가 표시되지 않을 때

```typescript
// 1. 경로 확인 (public/ 폴더 기준)
// ✅ CORRECT:
src="/images/card-phone-3d.webp"

// ❌ WRONG:
src="/public/images/card-phone-3d.webp"
src="./images/card-phone-3d.webp"

// 2. 파일 확장자 확인 (.webp, .png, .jpg)

// 3. 브라우저 콘솔에서 404 에러 확인
```

### Tailwind 클래스가 적용되지 않을 때

```bash
# 1. 개발 서버 재시작
npm run dev

# 2. tailwind.config.ts에서 content 경로 확인
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
}

# 3. 동적 클래스명은 작동하지 않음
// ❌ WRONG:
<div className={`text-${size}`}>  // 동적 생성 불가

// ✅ CORRECT:
<div className="text-xl">  // 정적으로 명시
```

### ESLint 에러 해결

```bash
# 에러 확인
npm run lint

# 자동 수정 (일부 에러만 가능)
npm run lint -- --fix

# 흔한 에러:
# 1. Unused variable → 변수 제거
# 2. Missing dependency in useEffect → 의존성 추가
# 3. Unescaped entity (') → &apos; 사용
```

---

## Code Style Guide

### 컴포넌트 구조

```typescript
// src/components/sections/home/CardShowcase/index.tsx

'use client'  // Client Component인 경우만

// 1. Imports
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// 2. Types
interface CardShowcaseProps {
  title: string
  description: string
}

// 3. Constants
const ANIMATION_DURATION = 0.6

// 4. Component
export default function CardShowcase({ title, description }: CardShowcaseProps) {
  // Hooks
  const [isHovered, setIsHovered] = useState(false)

  // Render
  return (
    <section className="py-24 bg-white">
      {/* Component JSX */}
    </section>
  )
}
```

### Tailwind 클래스 순서

```typescript
// 권장 순서: Layout → Box Model → Typography → Visual → Misc
<div className="
  flex items-center justify-center     // Layout
  w-full h-64 p-6 m-4                  // Box Model
  text-xl font-bold leading-tight      // Typography
  bg-purple-50 border border-gray-200  // Visual
  rounded-2xl shadow-lg                // Visual
  transition-all duration-300          // Misc
  hover:shadow-xl                      // Pseudo-classes
">
```

### 네이밍 컨벤션

```typescript
// Components: PascalCase
CardShowcase.tsx
HeroSection.tsx

// Functions: camelCase
formatDate()
handleSubmit()

// Constants: UPPER_SNAKE_CASE
const MAX_CARDS = 3
const API_ENDPOINT = '/api/cards'

// CSS Classes: kebab-case (Tailwind는 자동)
// 커스텀 CSS 작성 시만:
.card-showcase-container { }
```

---

## Useful Commands

```bash
# 개발
npm run dev                 # 개발 서버 시작
npm run build               # 프로덕션 빌드
npm run start               # 프로덕션 서버 시작 (빌드 후)

# 코드 품질
npm run lint                # ESLint 실행
npm run lint -- --fix       # ESLint 자동 수정
npm run type-check          # TypeScript 타입 체크
npm run format              # Prettier 포맷팅

# 테스트 (설정되어 있다면)
npm run test                # Jest 테스트 실행
npm run test:e2e            # Playwright E2E 테스트

# Git
git status                  # 변경 파일 확인
git add .                   # 모든 변경사항 스테이징
git commit -m "message"     # 커밋
git push                    # 푸시
```

---

## Performance Checklist

구현 완료 후 다음을 확인하세요:

### 이미지 최적화
- [ ] 모든 3D 이미지가 WebP 형식 (PNG 폴백 제공)
- [ ] Next.js `<Image>` 컴포넌트 사용
- [ ] width/height 명시 (CLS 방지)
- [ ] priority 플래그 설정 (LCP 이미지)
- [ ] loading="lazy" 설정 (below-fold 이미지)

### CSS 최적화
- [ ] Tailwind 유틸리티 클래스 사용 (커스텀 CSS 최소화)
- [ ] 불필요한 CSS 제거
- [ ] 중복 스타일 통합

### 번들 최적화
- [ ] 사용하지 않는 import 제거
- [ ] 동적 import 사용 (필요 시)
- [ ] Framer Motion import 최소화

---

## Getting Help

### 문서
- [Next.js 15 문서](https://nextjs.org/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Framer Motion 문서](https://www.framer.com/motion/)

### 내부 문서
- `specs/001-website-ui-refinement/spec.md` - 기능 명세
- `specs/001-website-ui-refinement/plan.md` - 구현 계획
- `specs/001-website-ui-refinement/research.md` - 기술 리서치
- `specs/001-website-ui-refinement/tasks.md` - 작업 목록 (생성 예정)

### Constitution
- `.specify/memory/constitution.md` - 프로젝트 헌법 (코딩 원칙)

---

## Next Steps

1. **이미지 에셋 준비**
   - Homepage 3D 카드 이미지
   - Wallet 보안 3D 이미지
   - Wallet 오묘한 배경 이미지

2. **작업 목록 생성**
   ```bash
   # /speckit.tasks 명령 실행
   # → specs/001-website-ui-refinement/tasks.md 생성
   ```

3. **구현 시작**
   - tasks.md의 우선순위에 따라 작업
   - P1 (Homepage, Card) → P2 (Reward, Wallet, About) → P3 (Earn, Footer)

4. **테스트 및 검증**
   - 각 페이지 수동 테스트
   - Lighthouse 성능/접근성 검증
   - ESLint/TypeScript 에러 0개 확인

5. **PR 생성**
   - 커밋 메시지: feat, fix, style 등 conventional commits
   - PR 설명에 Before/After 스크린샷 포함
   - Vercel 프리뷰 링크 확인

---

**Ready to Code!** 🚀

이제 개발을 시작할 준비가 완료되었습니다. 궁금한 점이 있으면 위의 문서를 참고하거나 팀원에게 문의하세요.
