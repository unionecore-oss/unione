'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import GradientText from '@/components/common/GradientText'
import Button from '@/components/common/Button'
import EarnOpportunities from '@/components/sections/platform/earn/EarnOpportunities'
import APYCalculator from '@/components/sections/platform/earn/APYCalculator'
import ComparisonTable from '@/components/sections/platform/earn/ComparisonTable'
import CTASection from '@/components/sections/home/CTASection'

export default function EarnPage() {
  return (
    <main className="min-h-screen pt-16" style={{ backgroundColor: 'var(--color-background-primary)' }}>
      {/* Hero */}
      <section
        className="section-padding relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        }}
      >
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="container-custom relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-8 text-white"
              variants={fadeInUp}
            >
              User-friendly staking service backed by institutional security, delivering real-time yields.
            </motion.h1>

            {/* App Store Badges */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
              <a href="#" className="inline-block transition-transform hover:scale-105">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-14"
                />
              </a>

              <a href="#" className="inline-block transition-transform hover:scale-105">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-14"
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-0 bg-white">
        <div className="w-full">
          <div className="space-y-0">
            {/* Row 1: Flexible Entry and Exit Anytime */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
              <div className="px-12 md:px-20 py-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Flexible Entry and Exit Anytime</h2>
                <p className="text-gray-600 text-lg">Total control of your wealth with instant access and management</p>
              </div>
              <div className="bg-gray-50 p-16 flex items-center justify-center min-h-[400px] relative overflow-hidden">
                {/* Gradient Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-green-400 to-cyan-400"></div>
                {/* Arrow Icon */}
                <svg className="w-48 h-48" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 30 L80 30 L80 20 L100 35 L80 50 L80 40 L20 40 Z" />
                  <path d="M180 70 L120 70 L120 80 L100 65 L120 50 L120 60 L180 60 Z" />
                </svg>
              </div>
            </div>

            {/* Row 2: Make your idle money work for you */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
              <div className="bg-gray-50 p-16 flex items-center justify-center min-h-[400px] relative overflow-hidden">
                {/* Gradient Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-green-400 to-cyan-400"></div>
                {/* Venn Diagram Icon */}
                <svg className="w-48 h-48" viewBox="0 0 200 150" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="70" cy="60" r="45" />
                  <circle cx="100" cy="90" r="45" />
                  <circle cx="130" cy="60" r="45" />
                </svg>
              </div>
              <div className="px-12 md:px-20 py-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Make your idle money work for you</h2>
                <p className="text-gray-600 text-lg">Begin your journey with only $1 Unlock unlimited growth</p>
              </div>
            </div>

            {/* Row 3: Rewards paid out every hour */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
              <div className="px-12 md:px-20 py-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Rewards paid out every hour</h2>
                <p className="text-gray-600 text-lg">Calculated accurately, down to the very minute</p>
              </div>
              <div className="bg-gray-50 p-16 flex items-center justify-center min-h-[400px] relative overflow-hidden">
                {/* Gradient Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-green-400 to-cyan-400"></div>
                {/* Concentric Circles Icon */}
                <svg className="w-48 h-48" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="100" cy="100" r="70" />
                  <circle cx="100" cy="100" r="50" />
                  <circle cx="100" cy="100" r="30" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
