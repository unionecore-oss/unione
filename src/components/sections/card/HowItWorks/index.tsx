'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function HowItWorks() {
  const t = useTranslations('pages.card.howItWorks')

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
    <section className="py-20">
      <div className="w-full px-0">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 items-start"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              variants={fadeInUp}
              className="overflow-hidden"
              style={{
                marginTop: `${index * 60}px`,
              }}
            >
              <div
                className="w-full h-[432px] relative"
                style={{
                  background: feature.image,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-9 bg-white/5 backdrop-blur-sm">
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {t(`${feature.key}.title`)}
                </h3>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
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
