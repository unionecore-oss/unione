'use client'

import { useEffect, useState } from 'react'
import { useBreakpoint, type Breakpoint } from './useBreakpoint'

/**
 * 뷰포트 크기 타입
 */
export interface ViewportSize {
  /** 뷰포트 너비 (px) */
  width: number
  
  /** 뷰포트 높이 (px) */
  height: number
  
  /** 현재 활성 브레이크포인트 */
  breakpoint: Breakpoint
  
  /** 디바이스 픽셀 비율 (Retina 감지) */
  pixelRatio: number
}

/**
 * useViewportSize Hook
 * Feature: 003-responsive-optimization
 * 
 * 뷰포트 크기와 디바이스 픽셀 비율을 실시간으로 추적하는 React Hook
 * 
 * @returns 뷰포트 크기 정보 객체
 * 
 * @example
 * const { width, height, breakpoint, pixelRatio } = useViewportSize()
 * 
 * // 뷰포트 너비에 따라 그리드 열 수 결정
 * const columns = width < 768 ? 1 : width < 1024 ? 2 : 3
 * 
 * // Retina 디스플레이 감지
 * const isRetina = pixelRatio >= 2
 */
export function useViewportSize(): ViewportSize {
  const breakpoint = useBreakpoint()
  
  const [viewport, setViewport] = useState<ViewportSize>({
    width: 0,
    height: 0,
    breakpoint,
    pixelRatio: 1,
  })

  useEffect(() => {
    // SSR 환경에서는 실행하지 않음
    if (typeof window === 'undefined') return

    // 뷰포트 크기 업데이트 함수
    const updateViewport = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
        breakpoint,
        pixelRatio: window.devicePixelRatio || 1,
      })
    }

    // 초기값 설정
    updateViewport()

    // 리사이즈 이벤트 리스너 등록
    window.addEventListener('resize', updateViewport)

    // cleanup 함수
    return () => {
      window.removeEventListener('resize', updateViewport)
    }
  }, [breakpoint])

  return viewport
}
