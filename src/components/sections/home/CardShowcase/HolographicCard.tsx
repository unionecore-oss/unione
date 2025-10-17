'use client'

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface HolographicCardProps {
  className?: string
}

export const HolographicCard: React.FC<HolographicCardProps> = ({
  className = ""
}) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      setMousePosition({ x, y })
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePosition({ x: 0, y: 0 })
  }

  const rotateX = -(mousePosition.y / 400) * 3
  const rotateY = (mousePosition.x / 400) * 3

  return (
    <div className={className}>
      <div
        ref={containerRef}
        className="relative w-full h-full"
        style={{ perspective: "1200px" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{
            rotateX: rotateX,
            rotateY: rotateY,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          {/* Phone mockup - horizontal */}
          <motion.div
            className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-[48px] shadow-2xl overflow-hidden mx-auto"
            style={{
              width: "min(700px, 100%)",
              height: "min(360px, 50vw)",
              transformStyle: "preserve-3d",
              border: "12px solid #1e293b",
            }}
            animate={{
              boxShadow: isHovered
                ? "0 30px 80px -10px rgba(0, 0, 0, 0.8), 0 0 60px rgba(139, 92, 246, 0.3)"
                : "0 20px 60px -10px rgba(0, 0, 0, 0.6)",
            }}
          >
            {/* Phone screen */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 to-black">
              {/* Screen content with grid */}
              <div className="absolute inset-0 opacity-20">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>

              {/* Ambient glow on screen */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `
                    radial-gradient(ellipse at 50% 60%, rgba(139, 92, 246, 0.15) 0%, transparent 60%),
                    radial-gradient(ellipse at 30% 40%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)
                  `,
                }}
                animate={{
                  opacity: isHovered ? 0.8 : 0.6,
                }}
              />
            </div>

            {/* Phone notch/camera */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-950 rounded-full flex items-center justify-center">
              <div className="w-12 h-3 bg-slate-800 rounded-full" />
            </div>
          </motion.div>

          {/* Floating credit card */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              transformStyle: "preserve-3d",
            }}
            animate={{
              y: isHovered ? [-10, -15, -10] : [-10, -5, -10],
              rotateX: isHovered ? -rotateX * 0.5 : 0,
              rotateY: isHovered ? -rotateY * 0.5 : 0,
              z: 80,
            }}
            transition={{
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotateX: {
                type: "spring",
                stiffness: 100,
                damping: 20,
              },
              rotateY: {
                type: "spring",
                stiffness: 100,
                damping: 20,
              },
            }}
          >
            {/* Card container with glass effect */}
            <div className="relative">
              {/* Holographic glow layers */}
              <motion.div
                className="absolute inset-0 rounded-2xl blur-3xl"
                style={{
                  background: `
                    radial-gradient(ellipse at 50% 50%, rgba(139, 92, 246, 0.6) 0%, transparent 70%),
                    radial-gradient(ellipse at 30% 30%, rgba(6, 182, 212, 0.5) 0%, transparent 60%)
                  `,
                  transform: "scale(1.3)",
                }}
                animate={{
                  opacity: isHovered ? 0.9 : 0.7,
                  scale: isHovered ? 1.4 : 1.3,
                }}
              />

              {/* Purple/cyan animated glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl blur-2xl"
                animate={{
                  background: [
                    "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.8) 0%, rgba(6, 182, 212, 0.6) 50%, transparent 100%)",
                    "radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.8) 0%, rgba(139, 92, 246, 0.6) 50%, transparent 100%)",
                    "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.8) 0%, rgba(6, 182, 212, 0.6) 50%, transparent 100%)",
                  ],
                  scale: isHovered ? [1.2, 1.3, 1.2] : [1.1, 1.15, 1.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Credit card image */}
              <motion.div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  width: "min(384px, 80vw)",
                  height: "min(224px, 46.7vw)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                }}
                animate={{
                  boxShadow: isHovered
                    ? "0 20px 60px rgba(139, 92, 246, 0.4), 0 0 40px rgba(6, 182, 212, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                    : "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                }}
              >
                <Image
                  src="/images/card.jpeg"
                  alt="UNIONE Visa Platinum Card"
                  fill
                  sizes="(max-width: 768px) 80vw, 384px"
                  className="object-cover"
                  priority
                />

                {/* Glass reflection overlay */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.1) 100%)",
                  }}
                  animate={{
                    opacity: isHovered ? 0.8 : 0.6,
                  }}
                />

                {/* Holographic shine effect */}
                <motion.div
                  className="absolute inset-0 opacity-40"
                  style={{
                    background: `
                      repeating-linear-gradient(
                        0deg,
                        hsl(280, 100%, 70%) calc(5% * 1),
                        hsl(200, 100%, 70%) calc(5% * 2),
                        hsl(280, 100%, 70%) calc(5% * 3)
                      )
                    `,
                    backgroundSize: "200% 200%",
                    mixBlendMode: "color-dodge",
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Bottom edge glow */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{
                    background: "linear-gradient(90deg, rgba(139, 92, 246, 0.8) 0%, rgba(6, 182, 212, 0.8) 100%)",
                  }}
                  animate={{
                    boxShadow: isHovered
                      ? "0 0 20px rgba(139, 92, 246, 0.8), 0 0 40px rgba(6, 182, 212, 0.6)"
                      : "0 0 10px rgba(139, 92, 246, 0.5), 0 0 20px rgba(6, 182, 212, 0.3)",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Additional ambient light effects */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[800px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
            animate={{
              opacity: isHovered ? 0.6 : 0.4,
              scale: isHovered ? 1.1 : 1,
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}
