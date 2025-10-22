'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { useEffect, useState } from 'react'

export default function HowItWorks() {
  const t = useTranslations('pages.card.howItWorks')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const features = [
    {
      key: 'realTimeConversion',
      image: 'url(https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80)',
    },
    {
      key: 'lowFees',
      image: 'url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80)',
    },
    {
      key: 'globalUsage',
      image: 'url(https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&q=80)',
    },
    {
      key: 'easyApp',
      image: 'url(https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80)',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-0">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 items-stretch"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              variants={fadeInUp}
              className="overflow-hidden flex flex-col"
              style={{
                marginTop: isMobile ? '0px' : `${index * 60}px`,
              }}
            >
              <div
                className="w-full h-[216px] lg:h-[432px] relative flex-shrink-0"
                style={{
                  background: feature.image,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-4 bg-white/5 backdrop-blur-sm flex-grow flex flex-col">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {t(`${feature.key}.title`)}
                </h3>
                <p className="text-xs flex-grow" style={{ color: 'var(--color-text-secondary)' }}>
                  {t(`${feature.key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
