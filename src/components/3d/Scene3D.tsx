'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import { Environment, ContactShadows } from '@react-three/drei'
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import FloatingGeometry from './FloatingGeometry'
import ParticleField from './ParticleField'

export default function Scene3D() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
        toneMapping: 2, // ACESFilmicToneMapping
        toneMappingExposure: 1.2,
      }}
      dpr={[1, 2]}
      style={{
        width: '100%',
        height: '100%'
      }}
      onCreated={({ gl }) => {
        gl.setClearColor('#000000', 0)
      }}
    >
      <Suspense fallback={null}>
        {/* Premium Lighting Setup - Cinematic 3-Point Lighting */}
        <ambientLight intensity={0.3} />

        {/* Key Light (Main) */}
        <directionalLight
          position={[10, 10, 5]}
          intensity={2.5}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        {/* Fill Light (Softens shadows) */}
        <directionalLight position={[-8, 5, 3]} intensity={1.2} color="#e0e7ff" />

        {/* Back/Rim Lights (Edge highlighting) */}
        <spotLight
          position={[0, -10, -8]}
          angle={0.5}
          penumbra={1}
          intensity={3}
          color="#a78bfa"
          distance={30}
        />
        <spotLight
          position={[8, 8, -5]}
          angle={0.4}
          penumbra={1}
          intensity={2.5}
          color="#fbbf24"
          distance={25}
        />

        {/* Colorful Accent Lights */}
        <pointLight position={[-6, 6, -4]} intensity={3} color="#8b5cf6" distance={15} decay={2} />
        <pointLight position={[6, -6, -4]} intensity={3} color="#ec4899" distance={15} decay={2} />
        <pointLight position={[0, 0, 6]} intensity={2.5} color="#60a5fa" distance={12} decay={2} />
        <pointLight position={[-4, -4, -2]} intensity={2} color="#34d399" distance={10} decay={2} />
        <pointLight position={[4, 4, -6]} intensity={2} color="#f472b6" distance={10} decay={2} />

        {/* HDR Environment for Ultra-Realistic Reflections */}
        <Environment preset="sunset" background={false} />

        {/* 3D Elements */}
        <FloatingGeometry />
        <ParticleField />

        {/* Neon Post-Processing */}
        <EffectComposer multisampling={8}>
          {/* Enhanced Neon Bloom */}
          <Bloom
            intensity={2.5}
            luminanceThreshold={0.25}
            luminanceSmoothing={0.9}
            height={300}
            blendFunction={BlendFunction.ADD}
            radius={0.6}
          />
          {/* Stronger Chromatic Aberration */}
          <ChromaticAberration
            offset={[0.001, 0.001]}
            blendFunction={BlendFunction.NORMAL}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
}
