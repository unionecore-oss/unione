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
