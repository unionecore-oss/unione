'use client'

import { useMediaQuery } from './useMediaQuery'
import { TOUCH_CONFIG } from '@/lib/constants'

/**
 * useTouchDevice Hook
 * Feature: 003-responsive-optimization
 * 
 * 터치 디바이스 여부와 호버 지원 여부를 감지하는 React Hook
 * 
 * @returns 터치 디바이스 정보 객체
 * 
 * @example
 * const { isTouchDevice, hasHover, hasCoarsePointer } = useTouchDevice()
 * 
 * // 터치 디바이스에서만 스와이프 제스처 활성화
 * if (isTouchDevice) {
 *   enableSwipeGesture()
 * }
 * 
 * // 호버 지원 디바이스에서만 호버 효과 표시
 * if (hasHover) {
 *   showHoverEffect()
 * }
 */
export function useTouchDevice() {
  // 터치 디바이스 감지: (pointer: coarse)
  const hasCoarsePointer = useMediaQuery(TOUCH_CONFIG.touchQuery)
  
  // 정밀한 포인터 디바이스 감지: (hover: hover) and (pointer: fine)
  const hasHover = useMediaQuery(TOUCH_CONFIG.hoverQuery)
  
  return {
    /** 터치 디바이스 여부 (손가락으로 조작) */
    isTouchDevice: hasCoarsePointer,
    
    /** 호버 지원 여부 (마우스, 트랙패드 등) */
    hasHover,
    
    /** 거친 포인터 (손가락) 사용 여부 */
    hasCoarsePointer,
    
    /** 정밀한 포인터 (마우스, 스타일러스) 사용 여부 */
    hasFinePointer: hasHover,
  }
}
