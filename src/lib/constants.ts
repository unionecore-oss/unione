/**
 * 디자인 상수 정의
 */

export const COLORS = {
  background: {
    primary: '#FFFFFF',
    secondary: '#F5F5F7',
    accent: '#E5E5EA',
  },
  text: {
    primary: '#1D1D1F',
    secondary: '#86868B',
    tertiary: '#C7C7CC',
  },
  accent: {
    pink: '#FF006E',
    purple: '#8B00FF',
  },
  brand: {
    purple600: '#9333ea', // Primary brand color for accents
    purple50: '#faf5ff',  // Light background for sections
    pink600: '#ec4899',   // Secondary accent color
  },
  stripe: {
    purple: '#635bff',
    pink: '#a960ee',
    blue: '#90e0ff',
    yellow: '#ffcb57',
    red: '#ff333d',
  },
} as const

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

export const CONTAINER_MAX_WIDTH = '1280px'

export const SECTION_PADDING = {
  sm: '80px',
  lg: '120px',
} as const

export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
} as const

export const NAVIGATION_LINKS = [
  { label: 'Card', href: '/card' },
  {
    label: 'Platform',
    href: '/platform',
    dropdown: [
      { label: 'Reward', href: '/platform/reward' },
      { label: 'Wallet', href: '/platform/wallet' },
      { label: 'Earn', href: '/platform/earn' },
    ],
  },
  { label: 'About Us', href: '/about-us' }, // FR-020: Changed from "Company" to "About Us"
] as const

/**
 * 이미지 경로 상수 (T006)
 */
export const IMAGE_PATHS = {
  homepage: {
    cardPhone3D: '/images/card-phone-3d-placeholder.svg', // T001: Will be replaced with actual image
  },
  wallet: {
    security3D: '/images/security-3d-placeholder.svg', // T002
    mysticBg: '/images/mystic-bg-placeholder.svg', // T003
  },
} as const

/**
 * CSS 필터 프리셋 (T007)
 */
export const CSS_FILTERS = {
  cardPage: {
    heroBackground: 'saturate(150%) contrast(110%) brightness(105%)', // FR-004
  },
} as const

/**
 * 반응형 크기 배율 (T008)
 */
export const RESPONSIVE_SCALE = {
  cardFooter: 1.5, // FR-005: Card footer section scale
  aboutUsText: 2.0, // FR-021: About Us page text scale
} as const

/**
 * 반응형 디자인 상수 정의
 * Feature: 003-responsive-optimization
 */

export const IMAGE_CONFIG = {
  formats: ['image/avif', 'image/webp', 'image/jpeg'] as const,
  deviceSizes: [320, 420, 640, 768, 1024, 1280, 1536, 2048, 2560],
  quality: { default: 75, mobile: 65, desktop: 85 },
  loading: { strategy: 'lazy' as const, eager: ['hero', 'above-fold'] },
  loader: 'default' as const,
} as const

export const TYPOGRAPHY_SCALE = {
  display: { min: '2rem', preferred: '5vw', max: '4.5rem', clamp: 'clamp(2rem, 5vw, 4.5rem)' },
  h1: { min: '1.75rem', preferred: '4vw', max: '3rem', clamp: 'clamp(1.75rem, 4vw, 3rem)' },
  h2: { min: '1.5rem', preferred: '3vw', max: '2.25rem', clamp: 'clamp(1.5rem, 3vw, 2.25rem)' },
  h3: { min: '1.25rem', preferred: '2.5vw', max: '1.875rem', clamp: 'clamp(1.25rem, 2.5vw, 1.875rem)' },
  bodyLarge: { min: '1rem', preferred: '2vw', max: '1.25rem', clamp: 'clamp(1rem, 2vw, 1.25rem)' },
  body: { min: '0.875rem', preferred: '1.5vw', max: '1rem', clamp: 'clamp(0.875rem, 1.5vw, 1rem)' },
  small: { min: '0.75rem', preferred: '1.2vw', max: '0.875rem', clamp: 'clamp(0.75rem, 1.2vw, 0.875rem)' },
} as const

export const TOUCH_CONFIG = {
  minTouchTarget: { width: 44, height: 44 },
  recommendedTouchTarget: { width: 48, height: 48 },
  minSpacing: 8,
  hoverQuery: '(hover: hover) and (pointer: fine)',
  touchQuery: '(pointer: coarse)',
} as const

export const PERFORMANCE_THRESHOLDS = {
  lcp: { good: 2500, needsImprovement: 4000 },
  fid: { good: 100, needsImprovement: 300 },
  cls: { good: 0.1, needsImprovement: 0.25 },
  fcp: { good: 1800, needsImprovement: 3000 },
  tti: { good: 3800, needsImprovement: 7300 },
  lighthouse: { mobile: 90, desktop: 95 },
} as const

export const RENDER_CONFIG = {
  targetFPS: { desktop: 60, mobile: 30 },
  antialias: { desktop: true, mobile: false },
  maxPixelRatio: { desktop: 2, mobile: 1.5 },
  shadows: { desktop: 'high' as const, mobile: 'low' as const },
  lodDistances: { high: 50, medium: 100, low: 200 },
} as const
