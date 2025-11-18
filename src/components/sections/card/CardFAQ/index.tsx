'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Plus } from '@phosphor-icons/react'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { useState } from 'react'

export default function CardFAQ() {
  const t = useTranslations('pages.card.faq')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqKeys = [
    'whatIsUnione',
    'cardTypes',
    'whereToUse',
    'appAvailability',
    'lostCard',
    'features',
    'usageProcedure',
    'support',
    'precautions'
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const titleWords = t('title').split('\n')

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      {/* Mobile Title */}
      <div className="container-custom mb-12 lg:hidden">
        <motion.h2
          className="text-5xl md:text-6xl font-bold leading-[0.9]"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          style={{
            color: 'rgba(200, 200, 200, 0.4)',
            letterSpacing: '-0.02em',
          }}
        >
          {titleWords.map((word, i) => (
            <span key={i}>
              {word}
              {i < titleWords.length - 1 && <br />}
            </span>
          ))}
        </motion.h2>
      </div>

      {/* FAQ List - full width */}
      <div className="lg:relative">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          {faqKeys.map((key, index) => (
            <motion.div
              key={key}
              variants={fadeInUp}
              className="w-full border-b border-gray-200/60"
            >
              <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                  {/* Left Column - Title Word (first 3 items only) */}
                  <div className="lg:col-span-5 hidden lg:flex lg:items-center lg:justify-start">
                    {index < titleWords.length && (
                      <h2
                        className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] -ml-12"
                        style={{
                          color: 'rgba(200, 200, 200, 0.4)',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {titleWords[index]}
                      </h2>
                    )}
                  </div>
                  <div className="lg:col-span-7">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full py-5 md:py-6 flex items-center justify-between gap-8 text-left group transition-colors"
                      aria-expanded={openIndex === index}
                    >
                      <span
                        className="text-sm md:text-base font-normal pr-4 transition-colors"
                        style={{ color: '#1a1a1a' }}
                      >
                        {t(`items.${key}.question`)}
                      </span>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="flex-shrink-0"
                      >
                        <Plus
                          size={20}
                          weight="regular"
                          style={{ color: '#1a1a1a' }}
                          className="transition-all"
                        />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                            opacity: { duration: 0.25, ease: 'easeInOut' }
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pb-5 pr-12">
                            <p
                              className="text-sm md:text-base leading-relaxed whitespace-pre-line"
                              style={{ color: '#666' }}
                            >
                              {t(`items.${key}.answer`)}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
