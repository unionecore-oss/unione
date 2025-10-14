'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import Button from '@/components/common/Button'

export default function WalletPage() {
  return (
    <main className="min-h-screen pt-16" style={{ backgroundColor: 'var(--color-background-primary)' }}>
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={fadeInUp}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight text-gray-900">
                  All Your Digital Assets, Your Smart Wallet
                </h1>

                <div className="h-1.5 w-80 bg-gradient-to-r from-green-400 to-green-500 mb-8 rounded-full"></div>

                <p className="text-xl mb-10 text-gray-700 max-w-xl leading-relaxed">
                  Manage your assets with ease, protected by industry-leading security.
                </p>

                <button className="px-10 py-4 bg-black text-white text-lg font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Get Your Wallet
                </button>
              </motion.div>
            </motion.div>

            {/* Right: Phone Mockup */}
            <motion.div
              className="relative flex justify-center items-center"
              variants={fadeInUp}
            >
              <img
                src="/wallet-phones.png"
                alt="UNIONE Wallet App"
                className="w-full h-auto max-w-[800px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security You Can Trust */}
      <section
        className="section-padding"
        style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 50%, #6d28d9 100%)' }}
      >
        <div className="container-custom">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-20 tracking-tight text-white">
            SECURITY YOU CAN TRUST
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* UNIONE Logo Card */}
            <div className="rounded-3xl p-12 min-h-[700px] flex flex-col bg-white/10 backdrop-blur-sm">
              {/* Logo */}
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <span className="text-4xl font-black text-white">U</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 text-white">Custodian Protection</h3>

              {/* Description */}
              <p className="text-white/80 leading-relaxed mb-auto">
                Your assets, secured with trusted custodial solutions.
              </p>

              {/* 3D Image */}
              <div className="flex justify-center mt-8">
                <img
                  src="/card-showcase-phones.jpeg"
                  alt="Custodian Protection Shield"
                  className="w-full max-w-[442px] h-auto object-contain drop-shadow-2xl"
                  style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))' }}
                />
              </div>
            </div>

            {/* UNIONE Company Name Card */}
            <div className="rounded-3xl p-12 min-h-[700px] flex flex-col bg-white/10 backdrop-blur-sm">
              {/* Company Name */}
              <div className="mb-6">
                <h2 className="text-5xl font-black text-white tracking-tight">UNIONE</h2>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 text-white">Wallet Security</h3>

              {/* Description */}
              <p className="text-white/80 leading-relaxed mb-auto">
                Enhanced safety with separate hot and cold wallets.
              </p>

              {/* 3D Image */}
              <div className="flex justify-center mt-8">
                <img
                  src="/card-showcase-phones.jpeg"
                  alt="Wallet Security Box"
                  className="w-full max-w-[442px] h-auto object-contain drop-shadow-2xl"
                  style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wallets that secure assets */}
      <section className="section-padding bg-cyan-100">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Protect your value with next-gen wallets
          </h2>

          <p className="text-xl text-gray-700 mb-16 max-w-4xl leading-relaxed">
            Unione wallets integrate seamlessly with your platform, enabling card functionality, holding balances within the ecosystem, and offering compliant U.S. dollar accounts with optional earning potential.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: 3D Cube Image */}
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-pink-400 via-purple-400 to-cyan-400 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-white text-2xl">3D Cube</div>
              </div>
            </div>

            {/* Right: Button */}
            <div className="flex justify-center lg:justify-start">
              <Button variant="primary" size="lg" className="bg-black text-white hover:bg-gray-800">
                Start with Wallet
              </Button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
