'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import Hero from '@/components/ui/neural-network-hero'

export default function EarnPage() {
  return (
    <main className="min-h-screen">
      {/* Hero - Normal flow positioning */}
      <Hero
        title="User-friendly staking service backed by institutional security, delivering real-time yields."
        description=""
        badgeText=""
        badgeLabel=""
        ctaButtons={[
          { text: "Download on App Store", href: "#", primary: true },
          { text: "Get it on Google Play", href: "#" }
        ]}
        microDetails={[]}
      />

      {/* Features Grid */}
      <section className="py-0 bg-white">
        <div className="w-full">
          <div className="space-y-0">
            {/* Row 1: Flexible Entry and Exit Anytime */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center group cursor-pointer"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="px-12 md:px-20 py-16 bg-white"
                variants={fadeInUp}
              >
                <h2 className="text-4xl font-bold mb-4 text-gray-900 transition-all duration-300 group-hover:text-purple-600">
                  Flexible Entry and Exit Anytime
                </h2>
                <p className="text-gray-600 text-lg">Total control of your wealth with instant access and management</p>
              </motion.div>
              <motion.div
                className="bg-gray-50 p-16 flex items-center justify-center min-h-[400px] relative overflow-hidden transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-purple-50 group-hover:to-cyan-50"
                variants={fadeInUp}
              >
                {/* Animated Gradient Accent */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-green-400 to-cyan-400"
                  animate={{
                    height: ["32px", "40px", "32px"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                {/* Arrow Icon with Animation */}
                <motion.svg
                  className="w-48 h-48"
                  viewBox="0 0 200 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.path
                    d="M20 30 L80 30 L80 20 L100 35 L80 50 L80 40 L20 40 Z"
                    animate={{
                      x: [0, 10, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.path
                    d="M180 70 L120 70 L120 80 L100 65 L120 50 L120 60 L180 60 Z"
                    animate={{
                      x: [0, -10, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.svg>
              </motion.div>
            </motion.div>

            {/* Row 2: Make your idle money work for you */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center group cursor-pointer"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="bg-gray-50 p-16 flex items-center justify-center min-h-[400px] relative overflow-hidden transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-green-50 group-hover:to-cyan-50"
                variants={fadeInUp}
              >
                {/* Animated Gradient Accent */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-green-400 to-cyan-400"
                  animate={{
                    height: ["32px", "40px", "32px"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                ></motion.div>
                {/* Venn Diagram Icon with Animation */}
                <motion.svg
                  className="w-48 h-48"
                  viewBox="0 0 200 150"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.circle
                    cx="70"
                    cy="60"
                    r="45"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.circle
                    cx="100"
                    cy="90"
                    r="45"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.7
                    }}
                  />
                  <motion.circle
                    cx="130"
                    cy="60"
                    r="45"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.4
                    }}
                  />
                </motion.svg>
              </motion.div>
              <motion.div
                className="px-12 md:px-20 py-16 bg-white"
                variants={fadeInUp}
              >
                <h2 className="text-4xl font-bold mb-4 text-gray-900 transition-all duration-300 group-hover:text-green-600">
                  Make your idle money work for you
                </h2>
                <p className="text-gray-600 text-lg">Begin your journey with only $1 Unlock unlimited growth</p>
              </motion.div>
            </motion.div>

            {/* Row 3: Rewards paid out every hour */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center group cursor-pointer"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="px-12 md:px-20 py-16 bg-white"
                variants={fadeInUp}
              >
                <h2 className="text-4xl font-bold mb-4 text-gray-900 transition-all duration-300 group-hover:text-cyan-600">
                  Rewards paid out every hour
                </h2>
                <p className="text-gray-600 text-lg">Calculated accurately, down to the very minute</p>
              </motion.div>
              <motion.div
                className="bg-gray-50 p-16 flex items-center justify-center min-h-[400px] relative overflow-hidden transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-cyan-50 group-hover:to-blue-50"
                variants={fadeInUp}
              >
                {/* Animated Gradient Accent */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-green-400 to-cyan-400"
                  animate={{
                    height: ["32px", "40px", "32px"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                ></motion.div>
                {/* Concentric Circles Icon with Animation */}
                <motion.svg
                  className="w-48 h-48"
                  viewBox="0 0 200 200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  whileHover={{
                    scale: 1.2,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="70"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="50"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.9, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="30"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                </motion.svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
