'use client'

import { m } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { FluidGradient } from '@/components/ui/fluid-gradient'
import { useRef, useState, useEffect } from 'react'

export default function RewardSection() {
  const t = useTranslations('pages.reward.hero')
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const currentRef = sectionRef.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      {
        threshold: 0,
        rootMargin: '100px 0px 100px 0px',
      }
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden min-h-screen">
      {/* Fluid Gradient Background */}
      {isVisible && (
        <div className="absolute inset-0">
          <FluidGradient />
        </div>
      )}

      {/* Content */}
      <div className="container-custom relative z-10">
        <m.div
          className="max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <m.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-white"
            variants={fadeInUp}
          >
            {t('title')}
          </m.h1>

          <m.p
            className="text-2xl md:text-3xl text-white/90"
            variants={fadeInUp}
          >
            {t('subtitle')}
          </m.p>
        </m.div>
      </div>
    </section>
  )
}
