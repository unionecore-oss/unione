'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

export default function SocialProof() {
  return (
    <motion.div
      className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mt-16 text-sm text-gray-600"
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      transition={{ delay: 1.2 }}
    >
      {/* Users Count */}
      <div className="flex items-center gap-2">
        {/* Avatar Group */}
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 border-2 border-white"
            />
          ))}
        </div>
        <span className="font-medium">Trusted by 10,000+ users</span>
      </div>

      {/* Divider */}
      <div className="hidden sm:block w-px h-4 bg-gray-300" />

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <svg
              key={i}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1L10.163 5.37607L15 6.11803L11.5 9.52786L12.326 14.382L8 12.1L3.674 14.382L4.5 9.52786L1 6.11803L5.837 5.37607L8 1Z"
                fill="#FBBF24"
              />
            </svg>
          ))}
        </div>
        <span className="font-medium">4.9/5.0 App Store</span>
      </div>

      {/* Divider */}
      <div className="hidden sm:block w-px h-4 bg-gray-300" />

      {/* Security Badge */}
      <div className="flex items-center gap-1.5">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1L2 3.5V7.5C2 11 4 14 8 15C12 14 14 11 14 7.5V3.5L8 1Z"
            fill="#10B981"
            fillOpacity="0.2"
          />
          <path
            d="M8 1L2 3.5V7.5C2 11 4 14 8 15C12 14 14 11 14 7.5V3.5L8 1Z"
            stroke="#10B981"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 8L7.5 9.5L10 6.5"
            stroke="#10B981"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-medium">SOC 2 Certified</span>
      </div>
    </motion.div>
  )
}
