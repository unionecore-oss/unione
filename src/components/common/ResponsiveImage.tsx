'use client'

import Image from 'next/image'
import { useBreakpoint } from '@/hooks/useBreakpoint'

interface ResponsiveImageProps {
  /** 모바일 이미지 경로 */
  mobileSrc: string
  /** 태블릿 이미지 경로 (선택) */
  tabletSrc?: string
  /** 데스크톱 이미지 경로 */
  desktopSrc: string
  /** 대체 텍스트 */
  alt: string
  /** 우선 순위 (LCP 이미지는 true) */
  priority?: boolean
  /** 이미지 품질 (1-100) */
  quality?: number
  /** 추가 CSS 클래스 */
  className?: string
  /** 너비 */
  width?: number
  /** 높이 */
  height?: number
  /** fill 레이아웃 사용 여부 */
  fill?: boolean
  /** object-fit 스타일 */
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
}

/**
 * 반응형 이미지 컴포넌트
 * 브레이크포인트에 따라 최적화된 이미지 로드
 *
 * @example
 * <ResponsiveImage
 *   mobileSrc="/images/mobile/hero.jpg"
 *   desktopSrc="/images/desktop/hero.jpg"
 *   alt="Hero image"
 *   priority
 * />
 */
export default function ResponsiveImage({
  mobileSrc,
  tabletSrc,
  desktopSrc,
  alt,
  priority = false,
  quality = 75,
  className = '',
  width,
  height,
  fill = false,
  objectFit = 'cover',
}: ResponsiveImageProps) {
  const breakpoint = useBreakpoint()

  // 브레이크포인트에 따른 이미지 소스 선택
  let src = mobileSrc
  if (breakpoint === 'md' && tabletSrc) {
    src = tabletSrc
  } else if (['lg', 'xl', '2xl', '3xl'].includes(breakpoint)) {
    src = desktopSrc
  }

  const imageProps = {
    src,
    alt,
    priority,
    quality,
    className,
    sizes: `
      (max-width: 767px) 100vw,
      (max-width: 1023px) 80vw,
      1200px
    `,
  }

  if (fill) {
    return (
      <Image
        {...imageProps}
        fill
        style={{ objectFit }}
      />
    )
  }

  return (
    <Image
      {...imageProps}
      width={width}
      height={height}
      style={{ objectFit }}
    />
  )
}
