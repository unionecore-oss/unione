/**
 * 모션 선호도 유틸리티 (T013a, T013b)
 * prefers-reduced-motion 미디어 쿼리 처리 (NFR-006)
 */

/**
 * 사용자가 reduced motion을 선호하는지 확인
 * @returns reduced motion 선호 여부
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  return mediaQuery.matches
}

/**
 * 모션 선호도에 따라 애니메이션 duration 조정
 * @param normalDuration - 일반 duration (ms)
 * @param reducedDuration - reduced motion일 때 duration (ms), 기본값 0
 * @returns 적절한 duration 값
 */
export const getMotionDuration = (
  normalDuration: number,
  reducedDuration: number = 0
): number => {
  return prefersReducedMotion() ? reducedDuration : normalDuration
}

/**
 * 모션 선호도에 따라 Framer Motion transition 설정 반환
 * @param normalTransition - 일반 transition 설정
 * @returns 적절한 transition 설정
 */
export const getMotionTransition = (
  normalTransition: Record<string, unknown>
): Record<string, unknown> => {
  if (prefersReducedMotion()) {
    return {
      duration: 0,
      delay: 0,
    }
  }
  return normalTransition
}

/**
 * 모션 선호도에 따라 조건부 애니메이션 적용
 * @param animation - 애니메이션 설정
 * @returns reduced motion일 경우 undefined, 아니면 원본 애니메이션
 */
export const conditionalAnimation = <T>(
  animation: T
): T | undefined => {
  return prefersReducedMotion() ? undefined : animation
}

/**
 * prefers-reduced-motion 변경 감지 리스너 등록
 * @param callback - 변경 시 실행할 콜백
 * @returns cleanup 함수
 */
export const watchMotionPreference = (
  callback: (prefersReduced: boolean) => void
): (() => void) => {
  if (typeof window === 'undefined') return () => {}

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

  const handleChange = (e: MediaQueryListEvent) => {
    callback(e.matches)
  }

  mediaQuery.addEventListener('change', handleChange)

  return () => {
    mediaQuery.removeEventListener('change', handleChange)
  }
}
