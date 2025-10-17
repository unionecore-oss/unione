# Research: Website UI Refinement

**Feature**: 001-website-ui-refinement | **Date**: 2025-10-16 | **Phase**: 0

## Purpose

이 문서는 구현 계획에서 식별된 기술적 불확실성을 해결하고, 구현에 필요한 구체적인 전략과 접근 방식을 문서화합니다.

## Technical Context Review

**주요 기술 스택**:
- Next.js 15.5.4 (App Router) - 모든 의존성 이미 설치됨
- TypeScript 5 - 설정 완료
- Tailwind CSS 4 - 유틸리티 클래스 사용 가능
- Framer Motion 12.23 - 애니메이션 라이브러리 준비됨
- React 19.1 - 최신 React 기능 사용 가능

**결론**: 모든 핵심 기술 스택이 이미 프로젝트에 설치되어 있으며, 추가 의존성 설치가 필요하지 않습니다.

## Research Areas

### 1. 3D Image Asset Strategy

#### 1.1 Homepage Card Showcase - 3D Floating Card Image

**요구사항**: 가로로 누워있는 핸드폰 위에 카드가 떠있는 3D 이미지

**Research Findings**:

**Option A: 실제 3D 렌더링 생성**
- Three.js + React Three Fiber 사용 (이미 프로젝트에 있음)
- 장점: 인터랙티브, 애니메이션 가능, 브랜드 일관성
- 단점: 초기 로딩 시간 증가, 복잡도 높음
- 예상 구현 시간: 8-12시간

**Option B: 정적 3D 이미지 사용 (권장)**
- 3D 렌더링 소프트웨어로 제작된 이미지 사용
- 장점: 빠른 로딩, 간단한 구현, 높은 품질
- 단점: 정적이며 인터랙션 불가
- 예상 구현 시간: 2-3시간 (이미지 확보 시)
- **추천 형식**: WebP (메인) + PNG (폴백)
- **최적 해상도**: 1200x800px @2x (2400x1600px 원본)
- **압축**: WebP 85% 품질, PNG TinyPNG 압축

**결정**: Option B 선택 - 성능과 구현 속도를 고려하여 정적 3D 이미지 사용

**구현 전략**:
```typescript
// src/components/sections/home/CardShowcase/index.tsx
import Image from 'next/image'

<div className="relative w-full max-w-2xl">
  <Image
    src="/images/card-phone-3d.webp"
    alt="Unione card floating above smartphone"
    width={1200}
    height={800}
    priority
    className="w-full h-auto"
  />
</div>
```

**이미지 최적화 체크리스트**:
- [ ] WebP 형식 (85% 품질)
- [ ] PNG 폴백 제공
- [ ] `priority` 플래그 사용 (LCP 최적화)
- [ ] 적절한 alt 텍스트 (접근성)
- [ ] width/height 명시 (CLS 방지)

#### 1.2 Wallet Page Security Section - Security-themed 3D Image

**요구사항**: 보안과 관련된 3D 이미지

**Research Findings**:

**이미지 테마 옵션**:
1. 🔒 **보안 잠금 장치**: 3D 자물쇠, 금고, 방패
2. 🛡️ **보호막/실드**: 홀로그래픽 보호막, 에너지 실드
3. 🔐 **디지털 보안**: 암호화 키, 지문 인식, 얼굴 인식
4. 💎 **보안 카드**: 카드 주변에 보호막이 둘러싸인 형태

**결정**: **디지털 보안 + 보호막** 조합 - 현대적이고 핀테크 브랜드와 일치

**구현 전략**:
```typescript
// src/components/sections/platform/wallet/SecuritySection/index.tsx
<div className="grid md:grid-cols-2 gap-8">
  <div className="relative aspect-square">
    <Image
      src="/images/security-3d.webp"
      alt="Digital security protection for your wallet"
      width={600}
      height={600}
      className="w-full h-auto"
    />
  </div>
  <div className="flex flex-col justify-center">
    {/* Security messaging text */}
  </div>
</div>
```

**이미지 사양**:
- 형식: WebP + PNG 폴백
- 해상도: 600x600px @2x (1200x1200px 원본)
- 배경: 투명 또는 흰색 배경
- 색상 테마: 보라색 계열 (브랜드 색상 일치)

#### 1.3 Wallet Page Mystic Section - Ethereal/Mystical Image

**요구사항**: 오묘한 이미지

**Research Findings**:

**"오묘한" 비주얼 특성**:
- 추상적이고 신비로운 느낌
- 그라데이션, 블러, 글로우 효과
- 우주, 은하, 빛의 입자, 에너지 흐름
- 색상: 보라-파랑-분홍 그라데이션

**이미지 소스 옵션**:
1. **AI 생성 이미지** (Midjourney, DALL-E)
2. **스톡 이미지** (Unsplash, Pexels - 무료)
3. **직접 제작** (Blender, Cinema 4D)

**결정**: **AI 생성 이미지** 또는 **고품질 스톡 이미지** - 빠른 확보 가능

**구현 전략**:
```typescript
// src/components/sections/platform/wallet/MysticSection/index.tsx
<div className="grid md:grid-cols-2 gap-12 items-center">
  <div className="relative aspect-[4/3]">
    <Image
      src="/images/mystic-bg.webp"
      alt="Abstract ethereal visualization"
      width={800}
      height={600}
      className="w-full h-auto rounded-2xl"
    />
  </div>
  <div className="space-y-6">
    {/* Descriptive text content */}
  </div>
</div>
```

**이미지 사양**:
- 형식: WebP + PNG 폴백
- 해상도: 800x600px @2x (1600x1200px 원본)
- 색상: 보라-파랑-분홍 그라데이션
- 스타일: 추상적, 부드러운 블러, 글로우 효과

---

### 2. Color Enhancement Strategy

#### 2.1 Card Page Hero - Enhanced Color Saturation

**요구사항**: 배경 이미지에 카드색을 좀 진하고 선명하게 만들기

**Research Findings**:

**CSS 필터 옵션**:
```css
/* Option A: CSS Filter */
filter: saturate(1.5) contrast(1.2) brightness(1.05);

/* Option B: Hue-Rotate + Saturate */
filter: saturate(1.8) hue-rotate(-5deg);

/* Option C: backdrop-filter (오버레이 방식) */
backdrop-filter: saturate(1.6) contrast(1.15);
```

**Tailwind CSS 구현**:
```typescript
// src/components/sections/card/CardHero/index.tsx
<div className="relative">
  <div
    className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"
    style={{ mixBlendMode: 'multiply' }}
  />
  <Image
    src="/images/card-hero-bg.jpg"
    alt="Card background"
    className="saturate-150 contrast-110 brightness-105"
  />
</div>
```

**결정**: **CSS Filter 방식 (Option A)** - 간단하고 성능 우수

**구현 체크리스트**:
- [ ] `saturate(1.5)` - 채도 50% 증가
- [ ] `contrast(1.2)` - 대비 20% 증가
- [ ] `brightness(1.05)` - 밝기 5% 증가 (과도한 어두움 방지)
- [ ] WCAG AA 대비 비율 검증 (4.5:1 이상)

#### 2.2 Reward Page - Background Color Separation

**요구사항**: 히어로 섹션과 구분되게 배경색 바꾸기 (현재 연한 회색)

**Research Findings**:

**색상 옵션**:
```css
/* Option A: 약간 더 진한 회색 */
background: #f3f4f6; /* gray-100 */

/* Option B: 매우 연한 보라색 (브랜드 색상) */
background: #faf5ff; /* purple-50 */

/* Option C: 연한 그라데이션 */
background: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);

/* Option D: 흰색 + 미세한 텍스처 */
background: #ffffff;
box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.05);
```

**대비 테스트**:
| 옵션 | 히어로 배경 | 카드 쇼케이스 배경 | 시각적 구분도 |
|------|-------------|-------------------|--------------|
| A    | white       | gray-100          | ⭐⭐⭐ 중간    |
| B    | white       | purple-50         | ⭐⭐⭐⭐ 좋음   |
| C    | white       | gradient          | ⭐⭐ 약함      |
| D    | white       | white+shadow      | ⭐ 매우 약함   |

**결정**: **Option B (purple-50)** - 브랜드 색상 일관성 + 명확한 구분

**구현 전략**:
```typescript
// src/components/sections/platform/reward/CardShowcase/index.tsx
<section className="py-24 bg-purple-50">
  {/* Card showcase content */}
</section>
```

#### 2.3 Wallet Page - Purple Accent Line

**요구사항**: 초록색 선을 보라색으로 변경

**Research Findings**:

**보라색 옵션**:
```css
/* Option A: Tailwind purple-500 */
#a855f7

/* Option B: Tailwind purple-600 */
#9333ea

/* Option C: Custom brand purple */
#8b5cf6
```

**현재 초록색 값 확인 필요**: 코드에서 현재 색상 확인 후 교체

**구현 전략**:
```typescript
// src/components/sections/platform/wallet/WalletHero/index.tsx
// BEFORE:
<div className="w-1 h-16 bg-green-500" />

// AFTER:
<div className="w-1 h-16 bg-purple-600" />
```

**결정**: **purple-600 (#9333ea)** - 충분한 대비 + 브랜드 일관성

---

### 3. Size Scaling Strategy

#### 3.1 Card Page - 1.5x Card Size Increase

**요구사항**: 풋터 위 섹션 카드 크기를 1.5배로 키우기

**Research Findings**:

**Scaling 방식**:
```typescript
// Option A: Transform scale (권장하지 않음 - 레이아웃 영향)
transform: scale(1.5);

// Option B: Width/Height 직접 조정 (권장)
// BEFORE:
width: 320px;
height: 200px;

// AFTER:
width: 480px;  // 320 * 1.5
height: 300px; // 200 * 1.5

// Option C: Tailwind 클래스 변경
// BEFORE: w-80 h-50
// AFTER: w-[480px] h-[300px]
```

**반응형 고려사항**:
```typescript
// 모바일에서는 1.5배가 너무 클 수 있음
<div className="
  w-80 h-50           // Mobile: 기본 크기
  md:w-[400px] md:h-[250px]  // Tablet: 1.25배
  lg:w-[480px] lg:h-[300px]  // Desktop: 1.5배
">
```

**결정**: **Option B + 반응형 조정** - 레이아웃 안정성 + 유연성

**구현 체크리스트**:
- [ ] 데스크톱: 1.5배 크기 적용
- [ ] 태블릿: 1.25배 크기 (중간 단계)
- [ ] 모바일: 기본 크기 유지 (화면 너비 제약)
- [ ] aspect-ratio 유지 확인
- [ ] 그리드 레이아웃 조정 (필요 시)

#### 3.2 About Us Page - 2x Text Size Increase

**요구사항**: 모든 텍스트 크기를 2배로 키우기

**Research Findings**:

**텍스트 크기 증가 전략**:
```typescript
// Option A: 각 요소별 개별 조정 (권장)
// BEFORE -> AFTER
text-base   (16px) -> text-3xl  (30px)  // Body text
text-lg     (18px) -> text-4xl  (36px)  // Large text
text-xl     (20px) -> text-5xl  (48px)  // Section titles
text-2xl    (24px) -> text-6xl  (60px)  // Page title
text-3xl    (30px) -> text-7xl  (72px)  // Hero

// Option B: CSS transform (권장하지 않음)
transform: scale(2);  // 레이아웃 깨짐 위험

// Option C: 커스텀 CSS 변수
--text-scale: 2;
font-size: calc(var(--base-size) * var(--text-scale));
```

**반응형 고려사항**:
```typescript
// 데스크톱에서만 2배, 모바일은 적절히 조정
<h1 className="
  text-4xl        // Mobile: 36px
  md:text-6xl     // Tablet: 60px
  lg:text-7xl     // Desktop: 72px (약 2배)
">
```

**레이아웃 조정 필요사항**:
- 행간(line-height) 조정: `leading-tight` 사용
- 여백(spacing) 증가: `space-y-8` → `space-y-16`
- 컨테이너 너비: `max-w-4xl` → `max-w-6xl`

**결정**: **Option A + 반응형 조정** - 가독성 유지 + 레이아웃 안정성

**구현 체크리스트**:
- [ ] 모든 텍스트 요소 식별 (h1, h2, p, li 등)
- [ ] 각 요소별 Tailwind 클래스 2배 크기로 조정
- [ ] 행간 조정 (leading-tight 또는 leading-snug)
- [ ] 섹션 여백 증가 (py-16 → py-32)
- [ ] 컨테이너 너비 조정
- [ ] 모바일 반응형 검증

---

### 4. Animation Removal Strategy

#### 4.1 Earn Page - Remove Green Bar Animation

**요구사항**: 카드 그리드 이미지에 초록색 바가 움직이는 인터랙션 제거

**Research Findings**:

**애니메이션 식별**:
1. Framer Motion `<motion.div>` 컴포넌트 확인
2. CSS 애니메이션 클래스 확인 (`animate-*`)
3. JavaScript setInterval/requestAnimationFrame 확인

**제거 방법**:
```typescript
// Option A: Framer Motion animate 제거
// BEFORE:
<motion.div
  animate={{
    x: [0, 100, 0],
  }}
  transition={{
    repeat: Infinity,
    duration: 2,
  }}
>
  <div className="h-2 bg-green-500" />
</motion.div>

// AFTER:
<div>
  {/* 초록색 바 완전 제거 */}
</div>

// Option B: 애니메이션만 비활성화 (바는 유지)
<motion.div
  animate={false}  // 애니메이션 비활성화
>
  <div className="h-2 bg-green-500" />
</motion.div>
```

**결정**: **Option A (완전 제거)** - 요구사항이 "인터랙션 없애기"이므로 바 자체 제거

**구현 전략**:
1. 해당 컴포넌트 파일 식별: `src/components/sections/platform/earn/CardGrid/index.tsx`
2. 초록색 바 관련 JSX 요소 제거
3. 관련 Framer Motion import 정리 (사용하지 않으면)
4. CSS 클래스 정리

**prefers-reduced-motion 고려**:
```typescript
// 만약 다른 애니메이션이 남아있다면
import { useReducedMotion } from 'framer-motion'

const shouldReduceMotion = useReducedMotion()

<motion.div
  animate={shouldReduceMotion ? false : { /* animation */ }}
>
```

---

### 5. Form Design Strategy

#### 5.1 About Us Page - Refined Contact Form

**요구사항**: 세련된 디자인 찾아서 바꾸기

**Research Findings**:

**현대적인 폼 디자인 트렌드**:
1. **Floating Labels**: 입력 시 레이블이 위로 올라감
2. **Subtle Borders**: 얇고 연한 테두리, 포커스 시 진해짐
3. **Soft Shadows**: 미세한 그림자 효과
4. **Spacious Layout**: 넉넉한 여백
5. **Gradient Accents**: 제출 버튼에 그라데이션

**디자인 옵션**:

**Option A: Minimal Clean (권장)**
```typescript
<div className="space-y-6">
  <div className="relative">
    <input
      type="text"
      placeholder="Your name"
      className="
        w-full px-6 py-4
        bg-white
        border border-gray-200
        rounded-2xl
        focus:border-purple-400
        focus:ring-2 focus:ring-purple-100
        transition-all
        text-lg
      "
    />
  </div>
  <button className="
    w-full px-8 py-4
    bg-gradient-to-r from-purple-600 to-pink-600
    text-white text-lg font-semibold
    rounded-2xl
    shadow-lg shadow-purple-500/30
    hover:shadow-xl hover:shadow-purple-500/40
    transition-all
  ">
    Send Message
  </button>
</div>
```

**Option B: Glassmorphism**
```typescript
<input className="
  backdrop-blur-xl
  bg-white/80
  border border-white/40
  shadow-lg
  ...
" />
```

**결정**: **Option A (Minimal Clean)** - 프로페셔널하고 접근성 우수

**구현 체크리스트**:
- [ ] 둥근 모서리 (rounded-2xl)
- [ ] 넉넉한 패딩 (px-6 py-4)
- [ ] 부드러운 포커스 효과 (ring)
- [ ] 그라데이션 버튼
- [ ] 그림자 효과 (shadow-lg)
- [ ] 접근성 검증 (label, aria-label)
- [ ] 에러 상태 스타일링

---

### 6. Footer Social Media Update

#### 6.1 Social Media Button Reduction

**요구사항**: 인스타, X, 텔레그램만 남기기

**Research Findings**:

**현재 푸터 구조 확인 필요**: `src/components/layout/Footer/index.tsx`

**구현 전략**:
```typescript
// src/lib/constants.ts
export const SOCIAL_MEDIA_LINKS = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/unione',
    icon: InstagramIcon,
  },
  {
    name: 'X',
    href: 'https://x.com/unione',
    icon: XIcon,
  },
  {
    name: 'Telegram',
    href: 'https://t.me/unione',
    icon: TelegramIcon,
  },
  // LinkedIn, Facebook, YouTube 등 제거
]
```

**아이콘 확인**:
- React Icons 사용 중인지 확인
- 커스텀 SVG인지 확인
- 일관된 스타일 유지 (크기, 색상, 호버 효과)

**구현 체크리스트**:
- [ ] 상수 파일에서 배열 업데이트
- [ ] 불필요한 아이콘 import 제거
- [ ] 버튼 간격 조정 (3개로 줄어들었으므로)
- [ ] 모바일 레이아웃 검증
- [ ] 호버 효과 일관성 확인

---

## Implementation Priority

### Phase 1: High Priority (P1)
1. ✅ Homepage - 3D 이미지 교체
2. ✅ Card Page - 색상 향상 + 카드 크기 증가

### Phase 2: Medium Priority (P2)
3. ✅ Reward Page - 카드 디자인 + 배경색
4. ✅ Wallet Page - 보라색 선 + 흰색 배경 + 3D 이미지 + 오묘한 레이아웃
5. ✅ About Us Page - 페이지명 + 텍스트 2배 + 카드 디자인 + 폼 디자인

### Phase 3: Low Priority (P3)
6. ✅ Earn Page - 텍스트 정렬 + 애니메이션 제거
7. ✅ Footer - 소셜미디어 3개로 축소

---

## Performance Considerations

### Image Optimization Checklist

**필수 사항**:
- [ ] WebP 형식 사용 (85% 품질)
- [ ] PNG 폴백 제공
- [ ] Next.js Image 컴포넌트 사용
- [ ] width/height 명시 (CLS 방지)
- [ ] priority 플래그 (LCP 중요 이미지)
- [ ] loading="lazy" (below-fold 이미지)
- [ ] 적절한 sizes 속성 (반응형)

**목표**:
- LCP < 2.5초 유지
- CLS < 0.1 유지
- 이미지 로딩 시간 < 200ms 증가

### CSS Performance

**최적화 전략**:
- Tailwind CSS 유틸리티 클래스 사용 (빌드 타임 최적화)
- 불필요한 CSS 제거 (PurgeCSS)
- CSS-in-JS 최소화 (성능 오버헤드)
- Critical CSS 인라인 (Next.js 자동 처리)

### Animation Performance

**애니메이션 제거로 인한 성능 향상**:
- Framer Motion 번들 사이즈 감소 (사용하지 않는 컴포넌트 제거)
- JavaScript 실행 시간 감소
- 리렌더링 횟수 감소

---

## Accessibility Compliance

### Color Contrast Validation

**WCAG 2.1 Level AA 요구사항**:
- 일반 텍스트: 4.5:1 이상
- 큰 텍스트 (18pt 이상 또는 14pt bold): 3:1 이상

**검증 도구**:
- Chrome DevTools Lighthouse
- WebAIM Contrast Checker
- axe DevTools

**검증 대상**:
- [ ] Card Page - 색상 향상 후 텍스트 대비
- [ ] Reward Page - purple-50 배경에서 텍스트 대비
- [ ] Wallet Page - 보라색 선 주변 텍스트 대비
- [ ] About Us Page - 2배 크기 텍스트 대비

### Image Alt Text

**모든 이미지에 적절한 alt 텍스트 필수**:
```typescript
// Good examples:
alt="Unione card floating above smartphone showcasing 3D design"
alt="Digital security shield protecting your wallet"
alt="Abstract ethereal visualization of digital finance"

// Bad examples:
alt="image"
alt="3d"
alt=""  // 장식용 이미지가 아니라면 절대 안 됨
```

### Keyboard Navigation

**폼 접근성**:
- [ ] Tab 순서 논리적 흐름
- [ ] Focus 스타일 명확히 표시
- [ ] Enter 키로 폼 제출 가능
- [ ] Escape 키로 드롭다운 닫기 (있다면)

---

## Testing Strategy

### Visual Regression Testing

**반응형 테스트**:
```bash
# 3가지 뷰포트에서 스크린샷 비교
playwright test --project=chromium --grep=visual-regression

# 테스트 대상 뷰포트:
# - Mobile: 375x667
# - Tablet: 768x1024
# - Desktop: 1440x900
```

### Performance Testing

**Lighthouse CI 실행**:
```bash
# 7개 페이지 모두 Lighthouse 실행
npm run lighthouse

# 목표 점수:
# - Performance: 90+
# - Accessibility: 100
# - Best Practices: 100
# - SEO: 100
```

### Manual Testing Checklist

**각 페이지별 검증**:
- [ ] Homepage - 3D 이미지 로드 확인
- [ ] Card Page - 색상 변화 확인, 카드 크기 측정
- [ ] Reward Page - 배경색 구분 확인
- [ ] Wallet Page - 보라색 선, 흰색 배경, 이미지 배치 확인
- [ ] Earn Page - 텍스트 정렬, 애니메이션 제거 확인
- [ ] About Us Page - 페이지명, 텍스트 크기 측정, 폼 디자인 확인
- [ ] Footer - 소셜미디어 3개만 표시 확인

---

## Risk Assessment

### High Risk

**❌ 이미지 에셋 확보 지연**
- **Impact**: 구현 완료 지연
- **Mitigation**: 임시 플레이스홀더 이미지 사용, 병렬 작업 진행

### Medium Risk

**⚠️ 텍스트 크기 2배 증가로 인한 레이아웃 깨짐**
- **Impact**: 모바일에서 텍스트 오버플로우
- **Mitigation**: 반응형 크기 조정, 컨테이너 너비 증가

**⚠️ 색상 변경 후 대비 비율 미달**
- **Impact**: 접근성 기준 위반
- **Mitigation**: 색상 선택 시 대비 검증 도구 사용

### Low Risk

**✅ 애니메이션 제거로 인한 페이지 밋밋함**
- **Impact**: 사용자 경험 저하 우려
- **Mitigation**: 다른 인터랙션 요소로 보완 (호버 효과 등)

---

## Next Steps

### Immediate Actions

1. **이미지 에셋 확보** (우선순위 1)
   - Homepage: 3D 카드 이미지
   - Wallet: 보안 3D 이미지
   - Wallet: 오묘한 배경 이미지

2. **quickstart.md 생성** (Phase 1)
   - 개발자 온보딩 가이드
   - 로컬 환경 설정
   - 개발 워크플로우

3. **tasks.md 생성** (`/speckit.tasks` 실행)
   - 구체적인 구현 작업 목록
   - 의존성 순서 정의
   - 예상 작업 시간 산정

### Phase 1 Completion Criteria

- [x] research.md 작성 완료
- [ ] quickstart.md 작성 완료
- [ ] agent context 업데이트 완료

---

**Research Completed**: 2025-10-16
**Next Phase**: Phase 1 (Quickstart + Agent Context)
