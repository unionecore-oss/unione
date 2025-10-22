'use client'

import { m } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import AnimatedGradientBackground from '@/components/ui/animated-gradient-background'

export default function RewardSection() {
  const t = useTranslations('pages.reward.hero')

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Animated Gradient Background */}
      <AnimatedGradientBackground />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <m.div
          className="max-w-4xl mx-auto"
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
            className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto"
            variants={fadeInUp}
          >
            {t('subtitle')}
          </m.p>
        </m.div>
      </div>
    </section>
  )
}
