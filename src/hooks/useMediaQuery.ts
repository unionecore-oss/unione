'use client'

import { useEffect, useState } from 'react'

/**
 * useMediaQuery Hook
 * Feature: 003-responsive-optimization
 * 
 * 미디어 쿼리 매칭 여부를 실시간으로 추적하는 React Hook
 * 
 * @param query - CSS 미디어 쿼리 문자열 (예: '(min-width: 768px)')
 * @returns 미디어 쿼리가 현재 매칭되는지 여부
 * 
 * @example
 * const isMobile = useMediaQuery('(max-width: 640px)')
 * const isDesktop = useMediaQuery('(min-width: 1024px)')
 * const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
 */
export function useMediaQuery(query: string): boolean {
  // SSR에서는 항상 false 반환 (hydration mismatch 방지)
  const [matches, setMatches] = useState<boolean>(false)

  useEffect(() => {
    // 클라이언트 사이드에서만 실행
    if (typeof window === 'undefined') return

    // MediaQueryList 객체 생성
    const mediaQueryList = window.matchMedia(query)

    // 초기 상태 설정
    setMatches(mediaQueryList.matches)

    // 미디어 쿼리 변경 감지 이벤트 핸들러
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // 이벤트 리스너 등록 (modern API)
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', handleChange)
    } else {
      // fallback for older browsers
      mediaQueryList.addListener(handleChange)
    }

    // cleanup 함수
    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', handleChange)
      } else {
        // fallback for older browsers
        mediaQueryList.removeListener(handleChange)
      }
    }
  }, [query])

  return matches
}
