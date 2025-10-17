'use client'

/**
 * MotionProvider - Framer Motion LazyMotion Wrapper
 * Feature: 003-responsive-optimization
 * 
 * LazyMotion을 사용하여 Framer Motion 번들 크기를 85% 감소
 * domAnimation features만 로드하여 성능 최적화
 */

import { LazyMotion, domAnimation } from 'framer-motion'

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  )
}
