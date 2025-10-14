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

            {/* Visual Break - Core Values */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-12"
            >
              {[
                {
                  icon: '🛡️',
                  title: 'Security First',
                  description: 'Bank-level encryption and multi-layer protection',
                  gradient: 'from-cyan-500/20 to-blue-500/20'
                },
                {
                  icon: '⚡',
                  title: 'Lightning Fast',
                  description: 'Instant transactions with minimal fees',
                  gradient: 'from-purple-500/20 to-pink-500/20'
                },
                {
                  icon: '🌍',
                  title: 'Global Access',
                  description: 'Available in 50+ countries worldwide',
                  gradient: 'from-green-500/20 to-teal-500/20'
                },
                {
                  icon: '💎',
                  title: 'Premium Experience',
                  description: 'Best-in-class features and support',
                  gradient: 'from-yellow-500/20 to-orange-500/20'
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="relative group"
                >
                  <div className={`
                    relative p-6 rounded-2xl
                    bg-gradient-to-br ${value.gradient}
                    border border-white/10
                    backdrop-blur-sm
                    transition-all duration-300
                    group-hover:border-cyan-400/50
                    group-hover:shadow-lg group-hover:shadow-cyan-500/20
                  `}>
                    {/* Icon */}
                    <div className="text-5xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
                      {value.icon}
                    </div>

                    {/* Title */}
                    <h3
                      className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-cyan-400"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm opacity-80">
                      {value.description}
                    </p>

                    {/* Animated background gradient */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.p variants={fadeInUp}>
              With a commitment to innovation, accessibility, and simplicity, Unione is redefining how people use and grow their digital assets empowering users to spend, stake, and manage crypto effortlessly anytime, anywhere.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
