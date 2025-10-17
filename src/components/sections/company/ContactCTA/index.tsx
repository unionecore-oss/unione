'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { fadeInUp } from '@/lib/animations'
import ContactForm from './ContactForm'

export default function ContactCTA() {
  const t = useTranslations('pages.aboutUs.contact')

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2
              className="text-6xl md:text-7xl font-bold mb-8"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {t('title')}
            </h2>
            <p className="text-3xl leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              {t('description')}
            </p>
          </motion.div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
