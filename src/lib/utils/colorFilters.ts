import type { FilterConfig } from '@/types/images.types'

/**
 * 색상 필터 유틸리티 (T012)
 * CSS filter 문자열 생성
 */

/**
 * FilterConfig 객체를 CSS filter 문자열로 변환
 * @param config - 필터 설정 객체
 * @returns CSS filter 문자열
 * @example
 * buildFilterString({ saturate: 150, contrast: 110, brightness: 105 })
 * // Returns: "saturate(150%) contrast(110%) brightness(105%)"
 */
export const buildFilterString = (config: FilterConfig): string => {
  const filters: string[] = []

  if (config.saturate !== undefined) {
    filters.push(`saturate(${config.saturate}%)`)
  }

  if (config.contrast !== undefined) {
    filters.push(`contrast(${config.contrast}%)`)
  }

  if (config.brightness !== undefined) {
    filters.push(`brightness(${config.brightness}%)`)
  }

  if (config.blur !== undefined) {
    filters.push(`blur(${config.blur}px)`)
  }

  return filters.join(' ')
}

/**
 * CSS filter 문자열을 인라인 스타일 객체로 변환
 * @param filterString - CSS filter 문자열
 * @returns React 인라인 스타일 객체
 */
export const filterToStyle = (
  filterString: string
): React.CSSProperties => {
  return {
    filter: filterString,
    WebkitFilter: filterString, // Safari 호환성
  }
}

/**
 * FilterConfig를 인라인 스타일 객체로 변환 (단축 헬퍼)
 * @param config - 필터 설정 객체
 * @returns React 인라인 스타일 객체
 */
export const configToStyle = (
  config: FilterConfig
): React.CSSProperties => {
  return filterToStyle(buildFilterString(config))
}
