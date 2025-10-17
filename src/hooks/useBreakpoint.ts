'use client'

import { useMediaQuery } from './useMediaQuery'

/**
 * 브레이크포인트 타입 정의
 */
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'

/**
 * useBreakpoint Hook
 * Feature: 003-responsive-optimization
 * 
 * 현재 활성 브레이크포인트를 반환하는 React Hook
 * tailwind.config.ts의 breakpoint 설정과 일치
 * 
 * @returns 현재 활성 브레이크포인트 (xs | sm | md | lg | xl | 2xl | 3xl)
 * 
 * @example
 * const breakpoint = useBreakpoint()
 * if (breakpoint === 'xs' || breakpoint === 'sm') {
 *   // 모바일 UI 렌더링
 * }
 */
export function useBreakpoint(): Breakpoint {
  // 브레이크포인트 확인 (큰 것부터 작은 순서로 체크)
  const is3xl = useMediaQuery('(min-width: 2560px)')
  const is2xl = useMediaQuery('(min-width: 1536px)')
  const isXl = useMediaQuery('(min-width: 1280px)')
  const isLg = useMediaQuery('(min-width: 1024px)')
  const isMd = useMediaQuery('(min-width: 768px)')
  const isSm = useMediaQuery('(min-width: 640px)')
  
  // 가장 큰 매칭되는 브레이크포인트 반환
  if (is3xl) return '3xl'
  if (is2xl) return '2xl'
  if (isXl) return 'xl'
  if (isLg) return 'lg'
  if (isMd) return 'md'
  if (isSm) return 'sm'
  
  // 기본값: xs (320px ~ 639px)
  return 'xs'
}

/**
 * useDeviceType Hook
 * Feature: 003-responsive-optimization
 * 
 * 현재 디바이스 타입(모바일/태블릿/데스크톱)을 반환하는 React Hook
 * 
 * @returns 디바이스 타입 정보 객체
 * 
 * @example
 * const { isMobile, isTablet, isDesktop } = useDeviceType()
 * return isMobile ? <MobileNav /> : <DesktopNav />
 */
export function useDeviceType() {
  const breakpoint = useBreakpoint()
  
  return {
    isMobile: breakpoint === 'xs' || breakpoint === 'sm',
    isTablet: breakpoint === 'md',
    isDesktop: breakpoint === 'lg' || breakpoint === 'xl' || breakpoint === '2xl' || breakpoint === '3xl',
    breakpoint,
  }
}
