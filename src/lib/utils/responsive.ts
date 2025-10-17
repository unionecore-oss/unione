/**
 * Responsive Utility Functions
 * Feature: 003-responsive-optimization
 * 
 * 반응형 디자인을 위한 유틸리티 함수 모음
 */

import type { Breakpoint } from '@/hooks/useBreakpoint'
import type { ResponsiveImageSource } from '@/types/responsive.types'
import { IMAGE_CONFIG } from '@/lib/constants'

/**
 * 브레이크포인트 값을 픽셀 단위로 변환
 */
export const breakpointValues: Record<Breakpoint, number> = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 2560,
}

/**
 * 현재 브레이크포인트가 특정 브레이크포인트보다 큰지 확인
 * 
 * @param current - 현재 브레이크포인트
 * @param target - 비교 대상 브레이크포인트
 * @returns 현재 브레이크포인트가 더 크면 true
 * 
 * @example
 * isBreakpointUp('lg', 'sm') // true
 * isBreakpointUp('sm', 'lg') // false
 */
export function isBreakpointUp(current: Breakpoint, target: Breakpoint): boolean {
  return breakpointValues[current] >= breakpointValues[target]
}

/**
 * 현재 브레이크포인트가 특정 브레이크포인트보다 작은지 확인
 * 
 * @param current - 현재 브레이크포인트
 * @param target - 비교 대상 브레이크포인트
 * @returns 현재 브레이크포인트가 더 작으면 true
 * 
 * @example
 * isBreakpointDown('sm', 'lg') // true
 * isBreakpointDown('lg', 'sm') // false
 */
export function isBreakpointDown(current: Breakpoint, target: Breakpoint): boolean {
  return breakpointValues[current] < breakpointValues[target]
}

/**
 * 반응형 이미지 소스에서 현재 디바이스에 맞는 이미지 경로 반환
 * 
 * @param source - 반응형 이미지 소스 객체
 * @param breakpoint - 현재 브레이크포인트
 * @param isRetina - Retina 디스플레이 여부 (pixelRatio >= 2)
 * @returns 최적의 이미지 경로
 * 
 * @example
 * const imageSrc = getResponsiveImageSrc({
 *   mobile: '/mobile.jpg',
 *   desktop: '/desktop.jpg',
 *   retina: {
 *     mobile: '/mobile@2x.jpg',
 *     desktop: '/desktop@2x.jpg',
 *   }
 * }, 'lg', true) // '/desktop@2x.jpg'
 */
export function getResponsiveImageSrc(
  source: ResponsiveImageSource,
  breakpoint: Breakpoint,
  isRetina: boolean = false
): string {
  const isMobile = breakpoint === 'xs' || breakpoint === 'sm'
  const isTablet = breakpoint === 'md'
  
  // Retina 이미지가 있고 Retina 디스플레이인 경우
  if (isRetina && source.retina) {
    if (isMobile) return source.retina.mobile
    if (isTablet && source.retina.tablet) return source.retina.tablet
    return source.retina.desktop
  }
  
  // 일반 이미지 반환
  if (isMobile) return source.mobile
  if (isTablet && source.tablet) return source.tablet
  return source.desktop
}

/**
 * 뷰포트 너비에 맞는 이미지 크기 선택
 * 
 * @param viewportWidth - 뷰포트 너비 (px)
 * @returns 최적의 이미지 크기 (px)
 * 
 * @example
 * const imageSize = getOptimalImageSize(768) // 768
 */
export function getOptimalImageSize(viewportWidth: number): number {
  return IMAGE_CONFIG.deviceSizes.find(size => size >= viewportWidth) 
    || IMAGE_CONFIG.deviceSizes[IMAGE_CONFIG.deviceSizes.length - 1]
}

/**
 * srcset 문자열 생성
 * 
 * @param basePath - 기본 이미지 경로 (예: '/images/hero.jpg')
 * @param sizes - 생성할 이미지 크기 배열
 * @returns srcset 문자열
 * 
 * @example
 * generateSrcSet('/hero.jpg', [640, 1024, 1920])
 * // '/hero.jpg?w=640 640w, /hero.jpg?w=1024 1024w, /hero.jpg?w=1920 1920w'
 */
export function generateSrcSet(basePath: string, sizes?: number[]): string {
  const imageSizes = sizes || IMAGE_CONFIG.deviceSizes
  return imageSizes
    .map(size => `${basePath}?w=${size} ${size}w`)
    .join(', ')
}

/**
 * sizes 속성 문자열 생성
 * 
 * @param rules - 브레이크포인트별 크기 규칙
 * @returns sizes 속성 문자열
 * 
 * @example
 * generateSizesAttr([
 *   { breakpoint: 'sm', size: '100vw' },
 *   { breakpoint: 'lg', size: '50vw' },
 * ])
 * // '(min-width: 1024px) 50vw, (min-width: 640px) 100vw, 100vw'
 */
export function generateSizesAttr(
  rules: Array<{ breakpoint: Breakpoint; size: string }>
): string {
  const sorted = [...rules].sort(
    (a, b) => breakpointValues[b.breakpoint] - breakpointValues[a.breakpoint]
  )
  
  return sorted
    .map(rule => `(min-width: ${breakpointValues[rule.breakpoint]}px) ${rule.size}`)
    .join(', ') + ', 100vw'
}

/**
 * CSS clamp() 함수 생성
 * 
 * @param min - 최소값 (rem 단위)
 * @param preferred - 선호값 (vw 단위)
 * @param max - 최대값 (rem 단위)
 * @returns clamp() CSS 문자열
 * 
 * @example
 * createClamp('1rem', '5vw', '3rem') // 'clamp(1rem, 5vw, 3rem)'
 */
export function createClamp(min: string, preferred: string, max: string): string {
  return `clamp(${min}, ${preferred}, ${max})`
}

/**
 * rem을 픽셀로 변환 (기본 16px 기준)
 * 
 * @param rem - rem 값
 * @param baseFontSize - 기본 폰트 크기 (기본값: 16)
 * @returns 픽셀 값
 * 
 * @example
 * remToPx(2) // 32
 */
export function remToPx(rem: number, baseFontSize: number = 16): number {
  return rem * baseFontSize
}

/**
 * 픽셀을 rem으로 변환 (기본 16px 기준)
 * 
 * @param px - 픽셀 값
 * @param baseFontSize - 기본 폰트 크기 (기본값: 16)
 * @returns rem 값
 * 
 * @example
 * pxToRem(32) // 2
 */
export function pxToRem(px: number, baseFontSize: number = 16): number {
  return px / baseFontSize
}
