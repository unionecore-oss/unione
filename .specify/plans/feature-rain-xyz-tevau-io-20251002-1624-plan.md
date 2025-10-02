# Implementation Plan: UNIONE 회사소개 사이트

**Feature**: UNIONE 회사소개 사이트
**Status**: PLANNING
**Created**: 2025-10-02
**Last Updated**: 2025-10-02
**Spec Reference**: [feature-rain-xyz-tevau-io-20251002-1624.md](../specs/feature-rain-xyz-tevau-io-20251002-1624.md)
**Constitution Reference**: [constitution.md](../memory/constitution.md)

## Executive Summary
Rain.xyz와 Tevau.io 스타일의 밝고 모던한 iOS 느낌의 프리미엄 회사소개 웹사이트를 구축합니다. Next.js 14+와 TypeScript를 기반으로 하며, Tailwind CSS와 Framer Motion을 활용한 세련된 Light Theme UI/UX를 구현합니다. 클린 코드 원칙과 재사용 가능한 컴포넌트 아키텍처를 통해 유지보수 가능한 시스템을 구축합니다.

## Architecture Overview

### Technology Stack
- **Frontend Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v3+
- **Animation**: Framer Motion
- **State Management**: React Context API + React Query
- **Form Handling**: React Hook Form + Zod validation
- **Icons**: Phosphor Icons
- **Fonts**: Inter (영문), Pretendard (한글)

### Project Structure
```
/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Home page
│   │   ├── card/                # Card service pages
│   │   │   └── page.tsx
│   │   ├── platform/            # Platform pages
│   │   │   ├── page.tsx
│   │   │   ├── reward/
│   │   │   ├── wallet/
│   │   │   └── earn/
│   │   ├── company/             # Company page
│   │   │   └── page.tsx
│   │   ├── contact/             # Contact page
│   │   │   └── page.tsx
│   │   └── not-found.tsx        # 404 page
│   ├── components/              # Reusable components
│   │   ├── common/              # Common components
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   └── ...
│   │   ├── layout/              # Layout components
│   │   └── sections/            # Page sections
│   ├── lib/                     # Utility functions
│   │   ├── utils.ts
│   │   ├── constants.ts
│   │   └── animations.ts
│   ├── hooks/                   # Custom React hooks
│   ├── types/                   # TypeScript types
│   ├── styles/                  # Global styles
│   │   └── globals.css
│   └── public/                  # Static assets
│       ├── images/
│       ├── fonts/
│       └── icons/
├── .env.local                   # Environment variables
├── .eslintrc.json              # ESLint config
├── .prettierrc                 # Prettier config
├── tailwind.config.ts          # Tailwind config
├── tsconfig.json               # TypeScript config
└── next.config.js              # Next.js config
```

### Design System

#### Color Palette
```typescript
// Background Colors (Light Theme)
background: {
  primary: '#FFFFFF',      // 메인 배경 (순수 흰색)
  secondary: '#F5F5F7',    // 서브 배경 (밝은 회색)
  accent: '#E5E5EA',       // 액센트 배경 (rain.xyz 스타일)
  card: '#FFFFFF',         // 카드 배경
  overlay: 'rgba(255, 255, 255, 0.8)', // 블러 오버레이
}

// Text Colors
text: {
  primary: '#1D1D1F',      // 메인 텍스트 (진한 회색)
  secondary: '#86868B',    // 서브 텍스트 (중간 회색)
  tertiary: '#C7C7CC',     // 보조 텍스트 (연한 회색)
  inverse: '#FFFFFF',      // 반전 텍스트 (버튼용)
}

// Accent Colors (rain.xyz 스타일)
accent: {
  pink: '#FF006E',         // 메인 핑크
  purple: '#8B00FF',       // 메인 퍼플
  gradient: 'linear-gradient(135deg, #FF006E 0%, #8B00FF 100%)', // 그래디언트
  hover: '#E5007A',        // 호버 상태
}

// UI Elements
ui: {
  border: '#E5E5E7',       // 테두리 색상
  shadow: 'rgba(0, 0, 0, 0.04)', // 그림자 색상
  buttonPrimary: '#000000', // 기본 버튼 배경
  buttonSecondary: '#F5F5F7', // 보조 버튼 배경
}
```

#### Typography Scale
- **Display**: 4xl-6xl (Hero sections)
- **Heading**: 2xl-3xl (Section titles)
- **Body**: base-lg (Content)
- **Small**: sm-xs (Captions, labels)

#### Spacing System
- Base unit: 4px (Tailwind default)
- Container max-width: 1280px
- Section padding: 80px-120px (y-axis)

#### Light Theme Design Guidelines
```css
/* Navigation Bar */
.navbar {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid #E5E5E7;
}

/* Primary Button (iOS Style) */
.btn-primary {
  background: #000000;
  color: #FFFFFF;
  border-radius: 40px;
  padding: 12px 32px;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-primary:hover {
  background: #1D1D1F;
  transform: scale(1.02);
}

/* Card Component */
.card {
  background: #FFFFFF;
  border: 1px solid #E5E5E7;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
}
.card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

/* Hero Gradient Background */
.hero-gradient {
  background: linear-gradient(135deg,
    rgba(255, 0, 110, 0.1) 0%,
    rgba(139, 0, 255, 0.1) 100%);
}

/* 3D Elements (rain.xyz style) */
.sphere-3d {
  background: linear-gradient(135deg, #FF006E, #8B00FF);
  filter: blur(100px);
  opacity: 0.6;
}
```

## Implementation Phases

### Phase 1: Project Setup & Configuration (Week 2)

#### 1.1 Initial Setup
**Constitution Principles**: 클린 코드 원칙, 일관된 코딩 스타일

**Tasks**:
1. Next.js 14+ 프로젝트 초기화 (App Router)
   ```bash
   npx create-next-app@latest unione-website --typescript --tailwind --app
   ```

2. 필수 패키지 설치
   ```bash
   npm install framer-motion clsx tailwind-merge
   npm install @phosphor-icons/react
   npm install react-hook-form @hookform/resolvers zod
   npm install @tanstack/react-query
   ```

3. 개발 도구 설정
   ```bash
   npm install -D eslint-config-airbnb-typescript
   npm install -D prettier prettier-plugin-tailwindcss
   npm install -D @typescript-eslint/eslint-plugin
   ```

**Deliverables**:
- 프로젝트 기본 구조
- ESLint + Prettier 설정 파일
- TypeScript strict 모드 설정
- Tailwind CSS 커스텀 설정

#### 1.2 Design System Setup
**Constitution Principles**: 일관된 코딩 스타일, 함수 재사용성

**Tasks**:
1. Tailwind 커스텀 테마 설정
   - 색상 팔레트 정의
   - 타이포그래피 스케일
   - 커스텀 애니메이션 키프레임

2. 글로벌 스타일 설정
   - CSS 변수 정의
   - 폰트 로딩 최적화
   - 기본 리셋 스타일

3. 공통 유틸리티 함수 작성
   ```typescript
   // lib/utils.ts
   export function cn(...inputs: ClassValue[]) {
     return twMerge(clsx(inputs))
   }
   ```

**Deliverables**:
- `tailwind.config.ts` (커스텀 테마)
- `src/styles/globals.css` (글로벌 스타일)
- `src/lib/utils.ts` (유틸리티 함수)
- `src/lib/constants.ts` (상수 정의)

#### 1.3 CI/CD Pipeline
**Constitution Principles**: 유지보수 가능한 아키텍처

**Tasks**:
1. GitHub Actions 워크플로우 설정
   - Linting & Type checking
   - Build verification
   - Lighthouse CI (성능 모니터링)

2. Vercel 배포 설정
   - 환경 변수 설정
   - 프리뷰 배포 자동화

**Deliverables**:
- `.github/workflows/ci.yml`
- Vercel 프로젝트 연동

### Phase 2: Core Components Development (Week 3)

#### 2.1 Layout Components
**Constitution Principles**: 클린 코드 원칙, 함수 재사용성

**Header Component** (`components/layout/Header`)
```typescript
// 구조
- Logo (좌측)
- Navigation Menu (중앙/우측)
  - Card (단일 링크)
  - Platform (드롭다운: Reward, Wallet, Earn)
  - Company (단일 링크)
- Mobile Menu (햄버거)
```

**Features**:
- Sticky header with blur background
- Smooth scroll animations
- Dropdown menu with Framer Motion
- Mobile responsive hamburger menu
- Active route highlighting

**Footer Component** (`components/layout/Footer`)
```typescript
// 섹션
- Company Info & Logo
- Quick Links
- Social Media Icons
- Newsletter Subscription
- Legal Links (Privacy, Terms)
```

**Deliverables**:
- `src/components/layout/Header/index.tsx`
- `src/components/layout/Footer/index.tsx`
- `src/components/layout/Navigation/index.tsx`
- `src/components/layout/MobileMenu/index.tsx`

#### 2.2 Common Components
**Constitution Principles**: 명확한 변수명, 함수 재사용성

**Button Component** (`components/common/Button`)
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost'
  size: 'sm' | 'md' | 'lg'
  children: ReactNode
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  isLoading?: boolean
  // ... other props
}
```

**Card Component** (`components/common/Card`)
- Glass morphism effect
- Hover animations
- Customizable padding and border radius

**Section Component** (`components/common/Section`)
- Consistent section spacing
- Container width control
- Background variants

**Deliverables**:
- `src/components/common/Button/index.tsx`
- `src/components/common/Card/index.tsx`
- `src/components/common/Section/index.tsx`
- `src/components/common/Container/index.tsx`
- `src/components/common/GradientText/index.tsx`

#### 2.3 Animation Utilities
**Constitution Principles**: 함수 재사용성

**Tasks**:
1. Framer Motion 공통 variants 정의
   ```typescript
   // lib/animations.ts
   export const fadeInUp = {
     initial: { opacity: 0, y: 60 },
     animate: { opacity: 1, y: 0 },
     transition: { duration: 0.6 }
   }

   export const staggerContainer = {
     animate: {
       transition: {
         staggerChildren: 0.1
       }
     }
   }
   ```

2. Scroll-triggered animations hook
   ```typescript
   // hooks/useScrollAnimation.ts
   export function useScrollAnimation() {
     // Intersection Observer logic
   }
   ```

**Deliverables**:
- `src/lib/animations.ts` (애니메이션 variants)
- `src/hooks/useScrollAnimation.ts`
- `src/hooks/useMediaQuery.ts`

### Phase 3: Page Development (Week 4-7)

#### 3.1 Home Page (Week 4)
**Constitution Principles**: 클린 코드 원칙, 명확한 변수명

**Sections**:
1. **Hero Section**
   - Full-screen gradient background
   - Animated headline with gradient text
   - CTA buttons (Get Started, Learn More)
   - Floating card preview (3D tilt effect)

2. **Features Overview**
   - Card, Platform, Company 미리보기
   - Scroll-triggered animations
   - Interactive hover effects

3. **Value Proposition**
   - 3-column layout
   - Icon + Title + Description
   - Fade-in animations

4. **Call to Action**
   - Email subscription form
   - Gradient background
   - Social proof elements

**Component Structure**:
```
src/components/sections/home/
├── HeroSection/
│   ├── index.tsx
│   ├── AnimatedHeadline.tsx
│   └── FloatingCard.tsx
├── FeaturesSection/
├── ValuePropositionSection/
└── CTASection/
```

**Deliverables**:
- `src/app/page.tsx`
- Home page section components
- Responsive design for all sections

#### 3.2 Card Service Page (Week 5)
**Constitution Principles**: 함수 재사용성, 유지보수 가능한 아키텍처

**Sections**:
1. **Card Hero**
   - 3D card visualization
   - Interactive tilt effect (react-tilt)
   - Key benefits highlight

2. **Features Breakdown**
   - 6-8 main features
   - Icon-based cards
   - Hover animations

3. **How It Works**
   - Step-by-step process (1-2-3-4)
   - Visual indicators
   - Progress animation

4. **Security & Trust**
   - Security features
   - Compliance badges
   - Trust indicators

**Deliverables**:
- `src/app/card/page.tsx`
- Card-specific components
- 3D card visualization component

#### 3.3 Platform Pages (Week 6-7)
**Constitution Principles**: 클린 코드 원칙, 함수 재사용성

**Platform Overview** (`/platform`)
- Tabbed interface for Reward/Wallet/Earn
- Unified design system
- Smooth tab transitions

**Reward Page** (`/platform/reward`)
- Rewards mechanism explanation
- Visual reward tiers
- Earning calculator (interactive)

**Wallet Page** (`/platform/wallet`)
- Wallet features showcase
- Security highlights
- Multi-currency support visual

**Earn Page** (`/platform/earn`)
- Earning opportunities
- APY calculator
- Comparison table

**Component Sharing Strategy**:
```typescript
// components/sections/platform/
├── PlatformLayout.tsx       // Shared layout
├── FeatureCard.tsx          // Reusable feature card
├── StatsDisplay.tsx         // Metrics display
└── [service]/               // Service-specific components
    ├── reward/
    ├── wallet/
    └── earn/
```

**Deliverables**:
- `src/app/platform/page.tsx`
- `src/app/platform/reward/page.tsx`
- `src/app/platform/wallet/page.tsx`
- `src/app/platform/earn/page.tsx`
- Shared platform components

#### 3.4 Company Page (Week 7)
**Constitution Principles**: 명확한 변수명, 클린 코드 원칙

**Sections**:
1. **Company Vision**
   - Mission statement
   - Vision and values
   - Animated text reveal

2. **Team** (Optional - Could Have)
   - Team member cards
   - Role-based filtering
   - LinkedIn integration

3. **Milestones**
   - Timeline visualization
   - Key achievements
   - Scroll-triggered reveals

4. **Contact CTA**
   - Contact form
   - Office locations (if applicable)
   - Social links

**Deliverables**:
- `src/app/company/page.tsx`
- Company section components
- Timeline visualization component

### Phase 4: Responsive & Optimization (Week 8)

#### 4.1 Mobile Optimization
**Constitution Principles**: 유지보수 가능한 아키텍처

**Tasks**:
1. Mobile-first responsive design verification
   - Breakpoints: 640px, 768px, 1024px, 1280px
   - Touch-friendly interactions
   - Mobile navigation menu

2. Performance optimization
   - Image optimization (WebP, lazy loading)
   - Code splitting by route
   - Dynamic imports for heavy components

3. Mobile-specific enhancements
   - Bottom navigation (optional)
   - Swipe gestures
   - Touch feedback animations

**Deliverables**:
- Fully responsive layouts
- Mobile-optimized animations
- Touch interaction enhancements

#### 4.2 Animations & Interactions
**Constitution Principles**: 함수 재사용성

**Tasks**:
1. Scroll-triggered animations
   - Fade-in effects
   - Slide-in elements
   - Parallax backgrounds

2. Micro-interactions
   - Button hover states
   - Card hover effects
   - Form input focus states

3. Page transitions
   - Route change animations
   - Loading states
   - Skeleton screens

**Deliverables**:
- Polished animation system
- Smooth page transitions
- Micro-interaction library

#### 4.3 Accessibility (WCAG 2.1 AA)
**Constitution Principles**: 유지보수 가능한 아키텍처

**Tasks**:
1. Semantic HTML structure
2. ARIA labels and roles
3. Keyboard navigation
4. Focus management
5. Color contrast verification
6. Screen reader testing

**Deliverables**:
- Accessibility audit report
- WCAG 2.1 AA compliance
- Keyboard navigation support

### Phase 5: Testing & Deployment (Week 9-10)

#### 5.1 Testing Strategy
**Constitution Principles**: 유지보수 가능한 아키텍처

**Unit Testing**:
- Component testing (Jest + React Testing Library)
- Utility function testing
- Hook testing

**Integration Testing**:
- Page rendering tests
- Navigation flow tests
- Form submission tests

**E2E Testing**:
- Critical user journeys
- Cross-browser testing
- Mobile device testing

**Performance Testing**:
- Lighthouse CI
- Core Web Vitals monitoring
- Load time analysis

**Deliverables**:
- Test suite (>80% coverage)
- E2E test scenarios
- Performance benchmarks

#### 5.2 SEO Optimization
**Constitution Principles**: 클린 코드 원칙

**Tasks**:
1. Metadata optimization
   ```typescript
   // app/layout.tsx
   export const metadata: Metadata = {
     title: 'UNIONE - Premium Fintech Solutions',
     description: '...',
     openGraph: { ... },
     twitter: { ... }
   }
   ```

2. Structured data (JSON-LD)
   - Organization schema
   - Product schema
   - BreadcrumbList schema

3. Sitemap & robots.txt
   ```typescript
   // app/sitemap.ts
   export default function sitemap() { ... }
   ```

4. Performance optimization
   - Image optimization
   - Font preloading
   - Critical CSS inlining

**Deliverables**:
- Complete SEO metadata
- Structured data implementation
- Sitemap and robots.txt
- Lighthouse SEO score 95+

#### 5.3 Deployment & Monitoring
**Constitution Principles**: 유지보수 가능한 아키텍처

**Tasks**:
1. Production build optimization
   - Environment variables setup
   - Build size analysis
   - Bundle optimization

2. Vercel deployment
   - Production deployment
   - Custom domain setup
   - SSL certificate

3. Analytics integration
   - Google Analytics 4
   - Event tracking setup
   - Conversion tracking

4. Error monitoring
   - Sentry integration (optional)
   - Error boundary implementation
   - Logging strategy

**Deliverables**:
- Production deployment
- Analytics dashboard
- Error monitoring setup
- Deployment documentation

## Component Specifications

### 1. Header Component
```typescript
// components/layout/Header/index.tsx

interface HeaderProps {
  transparent?: boolean
  fixed?: boolean
}

const Header: React.FC<HeaderProps> = ({ transparent, fixed }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Scroll detection for blur effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      'w-full transition-all duration-300',
      fixed && 'fixed top-0 z-50',
      isScrolled && 'bg-neutral-900/80 backdrop-blur-lg border-b border-neutral-800',
      transparent && !isScrolled && 'bg-transparent'
    )}>
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Mobile Menu Button */}
          <MobileMenuButton
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </nav>
      </Container>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  )
}
```

**Styling Guidelines**:
- Height: 80px (desktop), 64px (mobile)
- Blur backdrop when scrolled
- Smooth transitions (300ms)
- Z-index: 50

### 2. Navigation Dropdown
```typescript
// components/layout/Navigation/Dropdown.tsx

interface DropdownProps {
  label: string
  items: { href: string; label: string; description?: string }[]
}

const Dropdown: React.FC<DropdownProps> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-2">
        {label}
        <CaretDown weight="bold" className={cn(
          'transition-transform duration-200',
          isOpen && 'rotate-180'
        )} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 mt-2 w-64 bg-neutral-800 rounded-lg border border-neutral-700 shadow-xl"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 hover:bg-neutral-700 transition-colors"
              >
                <div className="font-medium">{item.label}</div>
                {item.description && (
                  <div className="text-sm text-neutral-400 mt-1">{item.description}</div>
                )}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
```

### 3. Button Component
```typescript
// components/common/Button/index.tsx

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:shadow-lg hover:shadow-primary-500/50',
        secondary: 'bg-neutral-700 text-white hover:bg-neutral-600',
        outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
        ghost: 'text-neutral-300 hover:bg-neutral-800',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  isLoading?: boolean
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  leftIcon,
  rightIcon,
  isLoading,
  children,
  className,
  disabled,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <CircleNotch className="animate-spin" size={20} />
      ) : (
        <>
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </>
      )}
    </button>
  )
}
```

## Performance Targets

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Lighthouse Scores
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

### Loading Performance
- First Contentful Paint: < 1.5s
- Time to Interactive: < 5s
- Total Bundle Size: < 200KB (gzipped)

## Code Quality Standards

### TypeScript
- Strict mode enabled
- No `any` types (except justified cases)
- Proper interface definitions
- Generic types where applicable

### Code Style
```typescript
// ✅ Good - Clear naming, single responsibility
const calculateTotalRewards = (transactions: Transaction[]): number => {
  return transactions.reduce((sum, tx) => sum + tx.rewardAmount, 0)
}

// ❌ Bad - Unclear naming, multiple responsibilities
const calc = (data: any[]): any => {
  let s = 0
  data.forEach(d => {
    s += d.amt
    // ... other logic
  })
  return s
}
```

### Component Structure
```typescript
// ✅ Good - Well organized, typed props
interface CardProps {
  title: string
  description: string
  icon?: ReactNode
  onClick?: () => void
}

export const Card: React.FC<CardProps> = ({ title, description, icon, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      {icon && <div className="card-icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

// ❌ Bad - No types, unclear structure
export const Card = ({ title, desc, ico, fn }) => {
  return <div onClick={fn}>
    {ico}
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
}
```

### File Organization
- One component per file
- Index files for re-exports
- Colocate related files
- Clear naming conventions

```
components/common/Button/
├── index.tsx           # Main component
├── Button.test.tsx     # Tests
├── Button.stories.tsx  # Storybook (optional)
└── types.ts           # Type definitions
```

## Testing Strategy

### Unit Tests
```typescript
// Button.test.tsx
describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    fireEvent.click(screen.getByText('Click'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('shows loading state', () => {
    render(<Button isLoading>Click</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
```

### Integration Tests
```typescript
// Navigation.test.tsx
describe('Navigation', () => {
  it('opens dropdown on hover', async () => {
    render(<Navigation />)
    const platformLink = screen.getByText('Platform')

    fireEvent.mouseEnter(platformLink)

    await waitFor(() => {
      expect(screen.getByText('Reward')).toBeVisible()
      expect(screen.getByText('Wallet')).toBeVisible()
      expect(screen.getByText('Earn')).toBeVisible()
    })
  })
})
```

### E2E Tests (Playwright)
```typescript
// home.spec.ts
test('hero section loads correctly', async ({ page }) => {
  await page.goto('/')

  // Check hero headline
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()

  // Check CTA buttons
  await expect(page.getByRole('button', { name: 'Get Started' })).toBeVisible()

  // Verify animations
  await expect(page.locator('.hero-card')).toHaveClass(/animate-float/)
})
```

## Security Considerations

### Content Security Policy
```javascript
// next.config.js
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com;
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https:;
      font-src 'self' data:;
      connect-src 'self' https://www.google-analytics.com;
    `.replace(/\s{2,}/g, ' ').trim()
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  }
]
```

### Environment Variables
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://unione.io
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Private (server-side only)
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=
EMAIL_SERVER_PASSWORD=
```

### Form Validation
```typescript
// Using Zod + React Hook Form
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    // XSS protection via sanitization
    const sanitizedData = {
      name: DOMPurify.sanitize(data.name),
      email: data.email, // Already validated
      message: DOMPurify.sanitize(data.message),
    }

    // Submit to API
  }

  return <form onSubmit={handleSubmit(onSubmit)}>...</form>
}
```

## Deployment Checklist

### Pre-deployment
- [ ] All tests passing (unit, integration, E2E)
- [ ] Lighthouse scores meeting targets (90+)
- [ ] Accessibility audit completed (WCAG 2.1 AA)
- [ ] Cross-browser testing done (Chrome, Firefox, Safari, Edge)
- [ ] Mobile device testing completed
- [ ] SEO metadata verified
- [ ] Security headers configured
- [ ] Environment variables set
- [ ] Analytics integration tested
- [ ] Error boundaries in place

### Deployment
- [ ] Build production bundle
- [ ] Verify bundle size < 200KB
- [ ] Deploy to Vercel
- [ ] Configure custom domain
- [ ] SSL certificate active
- [ ] CDN configured
- [ ] Sitemap submitted to search engines
- [ ] robots.txt configured

### Post-deployment
- [ ] Smoke tests on production
- [ ] Monitor Core Web Vitals
- [ ] Check error tracking
- [ ] Verify analytics data
- [ ] Performance monitoring setup
- [ ] Uptime monitoring configured

## Risk Mitigation

### Technical Risks
1. **Browser Compatibility Issues**
   - Mitigation: Use Babel for transpilation, PostCSS for vendor prefixes
   - Automated testing on multiple browsers via Playwright

2. **Performance Degradation**
   - Mitigation: Lighthouse CI in pipeline, bundle size monitoring
   - Code splitting and lazy loading implementation

3. **Mobile Responsiveness**
   - Mitigation: Mobile-first development approach
   - Real device testing (iOS, Android)

### Content Risks
1. **Content Delay**
   - Mitigation: Use placeholder content for development
   - CMS integration ready for easy content updates

2. **Design Asset Quality**
   - Mitigation: SVG for icons, optimized WebP for images
   - Fallback images in multiple formats

## Success Criteria

### Technical Metrics
- ✅ Lighthouse Performance: 90+
- ✅ Lighthouse Accessibility: 95+
- ✅ WCAG 2.1 AA Compliance
- ✅ Core Web Vitals: All green
- ✅ Test Coverage: >80%
- ✅ Bundle Size: <200KB gzipped

### User Experience Metrics
- ✅ Page load time: <3s
- ✅ Time to Interactive: <5s
- ✅ Smooth 60fps animations
- ✅ Mobile-friendly navigation
- ✅ Keyboard navigation support

### Business Metrics
- ✅ SEO Score: 95+
- ✅ Mobile responsive: 100%
- ✅ Cross-browser support: Chrome, Firefox, Safari, Edge
- ✅ Zero critical security vulnerabilities

## Constitution Compliance

This implementation plan strictly adheres to the UNIONE Constitution:

### I. 클린 코드 원칙
- 모든 함수는 단일 책임 원칙 준수
- 명확한 추상화와 자체 문서화된 코드
- '왜'를 설명하는 주석

### II. 일관된 코딩 스타일
- ESLint + Prettier 자동화
- TypeScript strict mode
- 통일된 파일 구조 및 명명 규칙

### III. 명확한 변수명
- 서술적이고 의도를 전달하는 이름
- 약어 최소화
- 매직 넘버를 명명된 상수로 대체

### IV. 함수 재사용성
- DRY 원칙 엄격 적용
- 공통 컴포넌트 라이브러리
- 유틸리티 함수 모듈화

### V. 유지보수 가능한 아키텍처
- 모듈화된 컴포넌트 구조
- 명확한 관심사 분리
- 의존성 최소화
- 정기적인 리팩토링

## Next Steps

1. **Immediate Actions**
   - Project initialization (Day 1)
   - Development environment setup (Day 1-2)
   - Design system configuration (Day 2-3)

2. **Week 1 Focus**
   - Core component development
   - Header/Footer implementation
   - Navigation system

3. **Weekly Sync Points**
   - Monday: Week planning & task allocation
   - Wednesday: Progress review & blocker resolution
   - Friday: Demo & retrospective

## References & Resources

### Design References
- [Rain.xyz](https://rain.xyz) - Card design inspiration
- [Tevau.io](https://tevau.io) - Layout and navigation reference
- [Framer Motion Examples](https://www.framer.com/motion/examples/)

### Technical Documentation
- [Next.js 14 Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Query](https://tanstack.com/query/latest)

### Tools & Libraries
- [Phosphor Icons](https://phosphoricons.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Validation](https://zod.dev/)
- [class-variance-authority](https://cva.style/)

## Appendix

### Environment Variables Template
```bash
# .env.local.example

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=UNIONE

# Analytics
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_MIXPANEL_TOKEN=

# Contact Form
EMAIL_SERVER_HOST=
EMAIL_SERVER_PORT=
EMAIL_SERVER_USER=
EMAIL_SERVER_PASSWORD=
EMAIL_FROM=

# Optional: CMS
CMS_API_URL=
CMS_API_KEY=
```

### Package.json Scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "format": "prettier --write \"**/*.{ts,tsx,json,md}\"",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "e2e": "playwright test",
    "e2e:ui": "playwright test --ui"
  }
}
```

### Recommended VS Code Extensions
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Error Translator
- GitLens

---

**Plan Version**: 1.0.0
**Last Updated**: 2025-10-02
**Status**: READY FOR IMPLEMENTATION
