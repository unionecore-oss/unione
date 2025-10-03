'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null)

  // 10,000개 파티클 생성
  const particlesCount = 10000
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3

      // 구형으로 분포
      const radius = 15
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)
    }

    return positions
  }, [particlesCount])

  // 색상 배열 (Purple/Pink/Blue gradient)
  const colors = useMemo(() => {
    const colors = new Float32Array(particlesCount * 3)
    const color1 = new THREE.Color('#635bff')
    const color2 = new THREE.Color('#a960ee')
    const color3 = new THREE.Color('#90e0ff')

    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3
      const mixedColor = new THREE.Color()

      // 랜덤하게 3가지 색상 중 하나 선택
      const random = Math.random()
      if (random < 0.33) {
        mixedColor.copy(color1)
      } else if (random < 0.66) {
        mixedColor.copy(color2)
      } else {
        mixedColor.copy(color3)
      }

      colors[i3] = mixedColor.r
      colors[i3 + 1] = mixedColor.g
      colors[i3 + 2] = mixedColor.b
    }

    return colors
  }, [particlesCount])

  // 애니메이션: 천천히 회전
  useFrame((state) => {
    if (!particlesRef.current) return

    particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
    particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
