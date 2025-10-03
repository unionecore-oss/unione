'use client'

import { Suspense } from 'react'
import Spline from '@splinetool/react-spline'

export default function Premium3DLogo() {
  const onLoad = (spline: any) => {
    // 배경을 투명하게 설정
    if (spline?.scene) {
      spline.scene.background = null
    }
    // canvas 배경도 투명하게
    const canvas = document.querySelector('canvas')
    if (canvas) {
      canvas.style.background = 'transparent'
      // 색감 추가: 채도와 밝기 증가
      canvas.style.filter = 'saturate(1.5) brightness(1.2) contrast(1.1)'
    }
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <Suspense fallback={
        <div className="flex items-center justify-center w-full h-full">
          <div className="text-gray-400">Loading 3D...</div>
        </div>
      }>
        <div className="w-full h-full" style={{
          background: 'transparent'
        }}>
          <style jsx global>{`
            canvas {
              background: transparent !important;
            }
          `}</style>
          <Spline
            scene="https://prod.spline.design/lqmNSQiSpnTrWJS5/scene.splinecode"
            className="w-full h-full"
            onLoad={onLoad}
          />
        </div>
      </Suspense>
    </div>
  )
}
