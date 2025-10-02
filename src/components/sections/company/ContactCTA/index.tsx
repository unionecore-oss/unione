'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import GradientText from '@/components/common/GradientText'
import ContactForm from './ContactForm'

export default function ContactCTA() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Get in <GradientText>Touch</GradientText>
          </h2>
          <p className="text-xl" style={{ color: 'var(--color-text-secondary)' }}>
            궁금한 점이 있으신가요? 언제든지 문의해 주세요.
          </p>
        </motion.div>

        <ContactForm />
      </div>
    </section>
  )
}
