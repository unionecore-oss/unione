'use client'

import { motion } from 'framer-motion'
import { fadeInUp, buttonHover } from '@/lib/animations'

export default function CTAButtons() {
  return (
    <motion.div
      className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      transition={{ delay: 1.0 }}
    >
      {/* Primary Button */}
      <motion.button
        className="px-8 py-4 bg-black text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2 min-w-[200px] justify-center"
        variants={buttonHover}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
      >
        Get Started
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 10H16M16 10L11 5M16 10L11 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>

      {/* Secondary Button */}
      <motion.button
        className="px-8 py-4 bg-transparent text-gray-700 rounded-full font-medium text-lg border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors flex items-center gap-2 min-w-[200px] justify-center"
        variants={buttonHover}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 5L15 10L8 15V5Z"
            fill="currentColor"
          />
        </svg>
        Watch Demo
      </motion.button>
    </motion.div>
  )
}
