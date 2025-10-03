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
  { label: 'Company', href: '/company' },
] as const
