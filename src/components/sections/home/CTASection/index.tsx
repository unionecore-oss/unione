'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import Button from '@/components/common/Button'
import GradientText from '@/components/common/GradientText'

export default function CTASection() {
  return (
    <section className="section-padding hero-gradient">
      <div className="container-custom">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Ready to <GradientText>transform</GradientText> your fintech?
          </h2>
          <p className="text-xl mb-8" style={{ color: 'var(--color-text-secondary)' }}>
            지금 바로 UNIONE과 함께 시작하세요
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="secondary" size="lg">
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
