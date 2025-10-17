import type { ImageAsset } from '@/types/images.types'

/**
 * 이미지 로더 유틸리티 (T011)
 * WebP 지원 브라우저는 WebP, 미지원 브라우저는 PNG 반환
 */

/**
 * 브라우저의 WebP 지원 여부 확인
 * @returns WebP 지원 여부
 */
export const supportsWebP = (): boolean => {
  if (typeof window === 'undefined') return false

  const canvas = document.createElement('canvas')
  if (!canvas.getContext || !canvas.getContext('2d')) return false

  // WebP 지원 여부 확인 (data URI 테스트)
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
}

/**
 * ImageAsset 객체에서 적절한 이미지 경로 선택
 * @param asset - ImageAsset 객체
 * @returns 최적 이미지 경로
 */
export const getOptimalImagePath = (asset: ImageAsset): string => {
  if (typeof window === 'undefined') {
    // SSR 환경에서는 WebP 우선 사용 (Next.js Image가 자동으로 처리)
    return asset.webp
  }

  return supportsWebP() ? asset.webp : asset.png
}

/**
 * 이미지 프리로드 (성능 최적화)
 * @param src - 이미지 경로
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

/**
 * 여러 이미지 프리로드
 * @param sources - 이미지 경로 배열
 */
export const preloadImages = async (sources: string[]): Promise<void> => {
  await Promise.all(sources.map(preloadImage))
}
