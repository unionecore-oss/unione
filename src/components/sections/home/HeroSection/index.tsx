'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import AnimatedHeadline from './AnimatedHeadline'
import GradientSphere from './GradientSphere'
import Button from '@/components/common/Button'

export default function HeroSection() {
  return (
    <section className="hero-gradient section-padding min-h-[90vh] flex items-center overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <AnimatedHeadline />

            <motion.p
              className="text-xl mb-8 max-w-xl"
              style={{ color: 'var(--color-text-secondary)' }}
              variants={fadeInUp}
            >
              UNIONE의 인프라는 더 유동적인 금융 시스템을 지원합니다.
              <br />
              엔드투엔드 플랫폼으로 스피드, 유연성, 글로벌 확장성의 이점을 누리세요.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
            >
              <Button variant="primary" size="lg">
                Let&apos;s Talk
              </Button>
              <Button variant="secondary" size="lg">
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: 3D Gradient Sphere */}
          <div className="hidden lg:block relative h-[600px]">
            <GradientSphere />
          </div>
        </div>
      </div>
    </section>
  )
}
