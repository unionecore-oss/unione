'use client'

import { Canvas } from '@react-three/fiber'
import { useDeviceType } from '@/hooks/useBreakpoint'
import { useViewportSize } from '@/hooks/useViewportSize'
import { ReactNode } from 'react'

interface OptimizedCanvasProps {
  children: ReactNode
  /** 추가 CSS 클래스 */
  className?: string
  /** 그림자 활성화 여부 (데스크톱만) */
  shadows?: boolean
}

/**
 * 3D 렌더링 최적화 Canvas 컴포넌트
 * 모바일과 데스크톱에서 성능 최적화된 설정 제공
 *
 * @example
 * <OptimizedCanvas>
 *   <mesh>
 *     <boxGeometry />
 *     <meshStandardMaterial />
 *   </mesh>
 * </OptimizedCanvas>
 */
export default function OptimizedCanvas({
  children,
  className = '',
  shadows = true,
}: OptimizedCanvasProps) {
  const { isMobile } = useDeviceType()
  const { pixelRatio } = useViewportSize()

  return (
    <Canvas
      className={className}
      // 모바일에서 픽셀 비율 제한 (성능 향상)
      dpr={isMobile ? Math.min(pixelRatio, 1.5) : Math.min(pixelRatio, 2)}
      // 모바일에서 안티앨리어싱 비활성화
      gl={{
        antialias: !isMobile,
        alpha: true,
        powerPreference: isMobile ? 'low-power' : 'high-performance',
      }}
      // 모바일에서 그림자 비활성화
      shadows={shadows && !isMobile}
      // 프레임레이트 제한 (demand 모드)
      frameloop="demand"
    >
      {children}
    </Canvas>
  )
}
