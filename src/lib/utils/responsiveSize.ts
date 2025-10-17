import type { ResponsiveSize } from '@/types/images.types'

/**
 * 반응형 크기 유틸리티 (T013)
 * Tailwind 클래스명 생성 및 크기 계산
 */

/**
 * ResponsiveSize 객체를 Tailwind 클래스 문자열로 변환
 * @param size - 반응형 크기 객체 (픽셀 단위)
 * @param property - CSS 속성명 (width, height, text 등)
 * @returns Tailwind 클래스 문자열
 * @example
 * buildResponsiveClasses({ base: 16, md: 20, lg: 24 }, 'text')
 * // Returns: "text-base md:text-xl lg:text-2xl"
 */
export const buildResponsiveClasses = (
  size: ResponsiveSize,
  property: 'width' | 'height' | 'text' | 'padding' | 'gap'
): string => {
  const classes: string[] = []

  // Base size
  classes.push(getSizeClass(property, size.base))

  // md breakpoint
  if (size.md !== undefined) {
    classes.push(`md:${getSizeClass(property, size.md)}`)
  }

  // lg breakpoint
  if (size.lg !== undefined) {
    classes.push(`lg:${getSizeClass(property, size.lg)}`)
  }

  // xl breakpoint
  if (size.xl !== undefined) {
    classes.push(`xl:${getSizeClass(property, size.xl)}`)
  }

  return classes.join(' ')
}

/**
 * 속성과 크기 값을 Tailwind 클래스로 변환
 * @param property - CSS 속성명
 * @param value - 픽셀 단위 크기 값
 * @returns Tailwind 클래스명
 */
const getSizeClass = (
  property: 'width' | 'height' | 'text' | 'padding' | 'gap',
  value: number
): string => {
  // Tailwind 기본 스케일로 변환 (4px 단위)
  const remValue = value / 16 // px to rem

  switch (property) {
    case 'text':
      return getTextSizeClass(value)
    case 'width':
    case 'height':
    case 'padding':
    case 'gap':
      // rem 단위로 변환하여 arbitrary value 사용
      return `${property}-[${remValue}rem]`
    default:
      return ''
  }
}

/**
 * 텍스트 크기를 Tailwind 클래스로 변환
 * @param pixelSize - 픽셀 단위 크기
 * @returns Tailwind 텍스트 크기 클래스
 */
const getTextSizeClass = (pixelSize: number): string => {
  // Tailwind 텍스트 크기 매핑
  if (pixelSize <= 12) return 'text-xs'
  if (pixelSize <= 14) return 'text-sm'
  if (pixelSize <= 16) return 'text-base'
  if (pixelSize <= 18) return 'text-lg'
  if (pixelSize <= 20) return 'text-xl'
  if (pixelSize <= 24) return 'text-2xl'
  if (pixelSize <= 30) return 'text-3xl'
  if (pixelSize <= 36) return 'text-4xl'
  if (pixelSize <= 48) return 'text-5xl'
  if (pixelSize <= 60) return 'text-6xl'
  if (pixelSize <= 72) return 'text-7xl'
  if (pixelSize <= 96) return 'text-8xl'
  return 'text-9xl'
}

/**
 * 크기에 배율 적용
 * @param baseSize - 기본 크기
 * @param scale - 배율 (1.5 = 150%)
 * @returns 배율 적용된 크기
 */
export const applyScale = (baseSize: number, scale: number): number => {
  return Math.round(baseSize * scale)
}

/**
 * ResponsiveSize 객체에 배율 적용
 * @param size - 반응형 크기 객체
 * @param scale - 배율
 * @returns 배율 적용된 반응형 크기 객체
 */
export const scaleResponsiveSize = (
  size: ResponsiveSize,
  scale: number
): ResponsiveSize => {
  return {
    base: applyScale(size.base, scale),
    md: size.md !== undefined ? applyScale(size.md, scale) : undefined,
    lg: size.lg !== undefined ? applyScale(size.lg, scale) : undefined,
    xl: size.xl !== undefined ? applyScale(size.xl, scale) : undefined,
  }
}
