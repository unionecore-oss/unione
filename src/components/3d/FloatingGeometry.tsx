'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// 프리미엄 3D 도형 컴포넌트
function FloatingShape({
  position,
  geometry,
  speed,
  color,
  materialType = 'glass'
}: {
  position: [number, number, number]
  geometry: 'sphere' | 'torus' | 'icosahedron' | 'octahedron' | 'dodecahedron'
  speed: number
  color: string
  materialType?: 'glass' | 'crystal' | 'metallic'
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return

    const time = state.clock.elapsedTime

    // 변화하는 회전 속도 (더 유기적)
    const rotationVariation = Math.sin(time * 0.2) * 0.5 + 1
    meshRef.current.rotation.x += speed * 0.008 * rotationVariation
    meshRef.current.rotation.y += speed * 0.012 * rotationVariation
    meshRef.current.rotation.z += speed * 0.005

    // 복합적인 위아래 움직임
    const floatAmplitude = 0.5
    const floatSpeed = speed * 0.4
    const float1 = Math.sin(time * floatSpeed) * floatAmplitude
    const float2 = Math.sin(time * floatSpeed * 1.3 + 2) * 0.15
    meshRef.current.position.y = position[1] + float1 + float2

    // 3D 공간에서의 움직임 (x, z 추가)
    meshRef.current.position.x = position[0] + Math.sin(time * floatSpeed * 0.7) * 0.15
    meshRef.current.position.z = position[2] + Math.cos(time * floatSpeed * 0.5) * 0.1

    // 살짝 커졌다 작아지는 펄스 효과
    const pulseAmount = 0.03
    const pulse = Math.sin(time * speed * 0.6) * pulseAmount + 1
    meshRef.current.scale.setScalar(pulse)
  })

  const renderGeometry = () => {
    switch (geometry) {
      case 'sphere':
        return <sphereGeometry args={[1.2, 128, 128]} />
      case 'torus':
        return <torusGeometry args={[2.5, 0.65, 64, 200]} />
      case 'icosahedron':
        return <icosahedronGeometry args={[1.5, 5]} />
      case 'octahedron':
        return <octahedronGeometry args={[1.5, 4]} />
      case 'dodecahedron':
        return <dodecahedronGeometry args={[1.3, 4]} />
    }
  }

  const getMaterialProps = () => {
    const baseColor = new THREE.Color(color)

    switch (materialType) {
      case 'glass':
        return {
          color: baseColor,
          metalness: 0,
          roughness: 0.02,
          transmission: 0.95,
          thickness: 0.8,
          envMapIntensity: 2.0,
          clearcoat: 1.0,
          clearcoatRoughness: 0.05,
          ior: 1.55,
          reflectivity: 0.7,
          iridescence: 0.3,
          iridescenceIOR: 1.3,
          sheen: 0.5,
          sheenColor: new THREE.Color(color).multiplyScalar(0.5),
          specularIntensity: 1.0,
          specularColor: new THREE.Color('#ffffff'),
        }
      case 'crystal':
        return {
          color: baseColor,
          metalness: 0,
          roughness: 0.05,
          transmission: 0.92,
          thickness: 1.2,
          envMapIntensity: 2.5,
          clearcoat: 1.0,
          clearcoatRoughness: 0.1,
          ior: 2.2,
          reflectivity: 0.8,
          iridescence: 0.6,
          iridescenceIOR: 1.8,
          sheen: 0.8,
          sheenColor: new THREE.Color(color).multiplyScalar(0.6),
          specularIntensity: 1.2,
          specularColor: new THREE.Color('#ffffff'),
        }
      case 'metallic':
        return {
          color: baseColor,
          metalness: 1.0,
          roughness: 0.15,
          envMapIntensity: 2.8,
          clearcoat: 1.0,
          clearcoatRoughness: 0.15,
          iridescence: 0.4,
          iridescenceIOR: 1.5,
          sheen: 0.6,
          sheenColor: new THREE.Color(color).multiplyScalar(0.5),
          specularIntensity: 1.0,
          specularColor: new THREE.Color(color).offsetHSL(0, 0, 0.2),
        }
    }
  }

  return (
    <mesh ref={meshRef} position={position} castShadow>
      {renderGeometry()}
      <meshPhysicalMaterial {...getMaterialProps()} />
    </mesh>
  )
}

// 정적 링 그룹
function StaticRingGroup({
  children,
  position,
  baseRotation,
}: {
  children: React.ReactNode
  position: [number, number, number]
  baseRotation: [number, number, number]
}) {
  return (
    <group position={position} rotation={baseRotation}>
      {children}
    </group>
  )
}

export default function FloatingGeometry() {
  return (
    <group>
      {/* 인터로킹 링 - "Unione" (하나로 통합) 시각화 */}

      {/* Ring 1 - 보라 크리스탈 (Web3) */}
      <StaticRingGroup
        position={[-0.9, 1.0, -3]}
        baseRotation={[0.4, 0.2, 0.1]}
      >
        <FloatingShape
          position={[0, 0, 0]}
          geometry="torus"
          speed={0.2}
          color="#8b5cf6"
          materialType="crystal"
        />
      </StaticRingGroup>

      {/* Ring 2 - 황금 메탈 (Real World) */}
      <StaticRingGroup
        position={[0.9, 0.0, -3.3]}
        baseRotation={[-0.3, -0.2, -0.15]}
      >
        <FloatingShape
          position={[0, 0, 0]}
          geometry="torus"
          speed={-0.18}
          color="#fbbf24"
          materialType="metallic"
        />
      </StaticRingGroup>
    </group>
  )
}
