'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" stroke="#A855F7" strokeWidth="1.2" fill="none"/>
        <circle cx="16" cy="16" r="1.5" fill="#A855F7"/>
        <circle cx="16" cy="4" r="1.5" fill="#A855F7"/>
        <circle cx="25" cy="7" r="1.5" fill="#A855F7"/>
        <circle cx="28" cy="16" r="1.5" fill="#A855F7"/>
        <circle cx="25" cy="25" r="1.5" fill="#A855F7"/>
        <circle cx="16" cy="28" r="1.5" fill="#A855F7"/>
        <circle cx="7" cy="25" r="1.5" fill="#A855F7"/>
        <circle cx="4" cy="16" r="1.5" fill="#A855F7"/>
        <circle cx="7" cy="7" r="1.5" fill="#A855F7"/>
      </svg>
    ),
    title: 'Maximize Your Rewards',
    description: 'Boost your mining speed with friends, and maximize your earnings by unlocking tiered rewards through friend invitations.'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="4" width="12" height="24" rx="2" stroke="#A855F7" strokeWidth="1.2" fill="none"/>
        <line x1="13" y1="6.5" x2="19" y2="6.5" stroke="#A855F7" strokeWidth="1" strokeLinecap="round"/>
        <circle cx="16" cy="25.5" r="1" stroke="#A855F7" strokeWidth="0.8" fill="none"/>
        <path d="M16 12 L16 18 M13 15 L16 18 L19 15" stroke="#A855F7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Mobile First',
    description: 'Designed for your phone mine and manage crypto effortlessly.'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="12" stroke="#A855F7" strokeWidth="1.2" fill="none"/>
        <ellipse cx="16" cy="16" rx="4.5" ry="12" stroke="#A855F7" strokeWidth="1.2" fill="none"/>
        <line x1="4" y1="16" x2="28" y2="16" stroke="#A855F7" strokeWidth="1.2"/>
        <ellipse cx="16" cy="16" rx="10.5" ry="6" stroke="#A855F7" strokeWidth="1.2" fill="none"/>
      </svg>
    ),
    title: 'User Friendly',
    description: 'Easy for everyone and eco-friendly combining accessibility, security, and sustainability.'
  }
]

export default function RewardCalculator() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: '#f9fafb' }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center text-center"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
