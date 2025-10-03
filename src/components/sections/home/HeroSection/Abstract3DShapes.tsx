'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const shapes = [
  {
    src: '/3d-shapes/shape1.png',
    size: 200,
    initialX: '10%',
    initialY: '15%',
    duration: 18,
    rotationDuration: 25,
    delay: 0,
    color: 'rgba(139, 92, 246, 0.6)',
  },
  {
    src: '/3d-shapes/shape2.png',
    size: 170,
    initialX: '75%',
    initialY: '12%',
    duration: 20,
    rotationDuration: 30,
    delay: 2,
    color: 'rgba(236, 72, 153, 0.5)',
  },
  {
    src: '/3d-shapes/shape3.png',
    size: 140,
    initialX: '20%',
    initialY: '65%',
    duration: 22,
    rotationDuration: 28,
    delay: 1,
    color: 'rgba(99, 102, 241, 0.55)',
  },
  {
    src: '/3d-shapes/shape4.png',
    size: 180,
    initialX: '85%',
    initialY: '70%',
    duration: 16,
    rotationDuration: 32,
    delay: 3,
    color: 'rgba(168, 85, 247, 0.5)',
  },
  {
    src: '/3d-shapes/shape5.png',
    size: 160,
    initialX: '45%',
    initialY: '25%',
    duration: 24,
    rotationDuration: 27,
    delay: 1.5,
    color: 'rgba(139, 92, 246, 0.55)',
  },
  {
    src: '/3d-shapes/shape6.png',
    size: 130,
    initialX: '60%',
    initialY: '80%',
    duration: 19,
    rotationDuration: 26,
    delay: 2.5,
    color: 'rgba(236, 72, 153, 0.6)',
  },
]

export default function Abstract3DShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Overlay for Color Unity */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.05) 0%, transparent 70%)',
        }}
      />

      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: shape.initialX,
            top: shape.initialY,
            width: shape.size,
            height: shape.size,
            willChange: 'transform, opacity',
          }}
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: [0, 0.5, 0.5, 0],
            scale: [0.8, 1.1, 1.1, 0.8],
            y: [0, -40, -80, -40, 0],
            x: [0, 20, -20, 20, 0],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: [0.45, 0, 0.55, 1],
            delay: shape.delay,
          }}
        >
          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle, ${shape.color} 0%, transparent 70%)`,
              filter: 'blur(30px)',
            }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: shape.rotationDuration * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Shape */}
          <motion.div
            animate={{
              rotateZ: [0, 360],
              rotateY: [0, 180, 360],
            }}
            transition={{
              rotateZ: {
                duration: shape.rotationDuration,
                repeat: Infinity,
                ease: 'linear',
              },
              rotateY: {
                duration: shape.rotationDuration * 1.5,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
            style={{
              filter: `drop-shadow(0 0 20px ${shape.color}) blur(0.5px)`,
            }}
          >
            <Image
              src={shape.src}
              alt=""
              width={shape.size}
              height={shape.size}
              className="w-full h-full object-contain"
              style={{
                mixBlendMode: 'screen',
              }}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
