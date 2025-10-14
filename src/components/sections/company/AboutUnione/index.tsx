'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function AboutUnione() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-background-secondary)' }}
    >
      <div className="container-custom">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12"
            style={{ color: 'var(--color-text-primary)' }}
            variants={fadeInUp}
          >
            About Unione
          </motion.h2>

          <motion.div className="space-y-8 text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            <motion.p variants={fadeInUp}>
              Unione is building the next generation of financial infrastructure by offering innovative crypto payment solutions and global card services. Our mission is to overcome the barriers of traditional finance slow transactions, high fees, and limited accessibility and create a seamless experience for everyone.
            </motion.p>

            <motion.p variants={fadeInUp}>
              Inspired by the vision of connecting digital assets with real-world usability, Unione is more than just a fintech company; it's a movement toward a new era of financial freedom and empowerment. We believe that everyone should have the opportunity to participate and prosper in the global financial ecosystem.
            </motion.p>

            <motion.p variants={fadeInUp}>
              With a commitment to innovation, accessibility, and simplicity, Unione is redefining how people use and grow their digital assets empowering users to spend, stake, and manage crypto effortlessly anytime, anywhere.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
