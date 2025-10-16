'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import ContactForm from './ContactForm'

export default function ContactCTA() {
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
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Let&apos;s talk
            </h2>
            <p className="text-xl" style={{ color: 'var(--color-text-secondary)' }}>
              Whether you&apos;re interested in partnering with us or joining the team shaping the future of finance, we&apos;d be delighted to connect with you.
            </p>
          </motion.div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
