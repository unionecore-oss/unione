'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import Button from '@/components/common/Button'

export default function WalletPage() {
  return (
    <main className="min-h-screen pt-16" style={{ backgroundColor: 'var(--color-background-primary)' }}>
      {/* Hero Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #f5f7f0 0%, #e8f5e9 100%)' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={fadeInUp}>
                <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
                  <span className="block text-gray-900">ALL YOUR</span>
                  <span className="block text-gray-900">DIGITAL ASSETS,</span>
                  <span className="block text-gray-900">YOUR SMART</span>
                  <span className="block text-gray-900">WALLET</span>
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

            {/* Right: Phone Mockups */}
            <motion.div
              className="relative flex justify-center items-center h-[600px] -mr-20"
              variants={fadeInUp}
            >
              {/* Main Phone */}
              <div className="absolute left-0 z-10 w-72 h-[580px] bg-white rounded-[3rem] shadow-2xl border-[12px] border-gray-900 overflow-hidden">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-20"></div>

                {/* Screen Content */}
                <div className="bg-gray-50 h-full pt-8 px-4">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center mb-6 text-xs text-gray-600">
                    <span className="font-medium">12:30</span>
                    <div className="flex gap-1 items-center">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="flex gap-4 mb-6 text-sm">
                    <button className="font-semibold text-gray-900 border-b-2 border-green-500 pb-2">Assets</button>
                    <button className="text-gray-500 pb-2">Earn</button>
                  </div>

                  {/* Total Value */}
                  <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">Total Value (USD)</div>
                    <div className="text-3xl font-bold text-gray-900">$ 45,670,345.60</div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mb-6">
                    <button className="flex-1 flex flex-col items-center justify-center py-3 bg-white rounded-lg shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mb-1">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                      </div>
                      <span className="text-xs text-gray-600">Deposit</span>
                    </button>
                    <button className="flex-1 flex flex-col items-center justify-center py-3 bg-white rounded-lg shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mb-1">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                      </div>
                      <span className="text-xs text-gray-600">Withdraw</span>
                    </button>
                    <button className="flex-1 flex flex-col items-center justify-center py-3 bg-white rounded-lg shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mb-1">
                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                      </div>
                      <span className="text-xs text-gray-600">Transfer</span>
                    </button>
                    <button className="flex-1 flex flex-col items-center justify-center py-3 bg-white rounded-lg shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mb-1">
                        <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>
                      </div>
                      <span className="text-xs text-gray-600">Convert</span>
                    </button>
                  </div>

                  {/* Assets List */}
                  <div className="bg-white rounded-xl p-3 shadow-sm">
                    <div className="text-sm font-semibold mb-3 text-gray-900">Assets</div>
                    <div className="space-y-3">
                      {/* USD */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">$</span>
                          </div>
                          <span className="text-sm font-medium text-gray-900">USD</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">8,645.69</span>
                      </div>
                      {/* IDR */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">Rp</span>
                          </div>
                          <span className="text-sm font-medium text-gray-900">IDR</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-gray-900">2,000,000.00</div>
                          <div className="text-xs text-gray-400">≈122.80 USD</div>
                        </div>
                      </div>
                      {/* EUR */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">€</span>
                          </div>
                          <span className="text-sm font-medium text-gray-900">EUR</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">8,645.69</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Phone (Partial, Background) */}
              <div className="absolute left-80 z-0 w-72 h-[580px] bg-white rounded-[3rem] shadow-xl border-[12px] border-gray-900 overflow-hidden">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-20"></div>

                {/* Screen Content */}
                <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 h-full pt-8 px-4">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center mb-6 text-xs text-gray-600">
                    <span className="font-medium">12:30</span>
                    <div className="flex gap-1 items-center">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                    </div>
                  </div>

                  {/* Security Header */}
                  <div className="text-center mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Secure Wallet</h3>
                    <p className="text-xs text-gray-600">Protected by multi-layer security</p>
                  </div>

                  {/* Security Features */}
                  <div className="space-y-3">
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-900">Biometric Lock</p>
                          <p className="text-xs text-gray-500">Enabled</p>
                        </div>
                        <div className="w-8 h-5 bg-green-500 rounded-full relative">
                          <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-900">2FA Authentication</p>
                          <p className="text-xs text-gray-500">Active</p>
                        </div>
                        <div className="w-8 h-5 bg-green-500 rounded-full relative">
                          <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-900">Cloud Backup</p>
                          <p className="text-xs text-gray-500">Last: Today 11:30</p>
                        </div>
                        <div className="w-8 h-5 bg-green-500 rounded-full relative">
                          <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Message */}
                  <div className="mt-6 text-center">
                    <p className="text-sm font-bold text-gray-900">Next generation of</p>
                    <p className="text-sm font-bold text-gray-900">payment infrastructure</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security You Can Trust */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-20 tracking-tight">
            SECURITY YOU CAN TRUST
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Custodian Protection */}
            <div className="rounded-3xl p-12 min-h-[700px] flex flex-col" style={{ backgroundColor: 'rgb(246, 251, 243)' }}>
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"></path>
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Custodian Protection</h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-auto">
                Your assets, secured with trusted custodial solutions.
              </p>

              {/* 3D Image */}
              <div className="flex justify-center mt-8">
                <img
                  src="https://tevau.io/_nuxt/wallet2.BbivZ_Jb.png"
                  alt="Custodian Protection Shield"
                  className="w-full max-w-[442px] h-auto object-contain drop-shadow-2xl"
                  style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))' }}
                />
              </div>
            </div>

            {/* Wallet Security */}
            <div className="rounded-3xl p-12 min-h-[700px] flex flex-col" style={{ backgroundColor: 'rgb(246, 251, 243)' }}>
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"></path>
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Wallet Security</h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-auto">
                Enhanced safety with separate hot and cold wallets.
              </p>

              {/* 3D Image */}
              <div className="flex justify-center mt-8">
                <img
                  src="https://tevau.io/_nuxt/wallet4.F-0KELP3.png"
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
          <h2 className="text-5xl font-bold mb-16">
            Protect your value with next-gen wallets
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: 3D Cube Image */}
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-pink-400 via-purple-400 to-cyan-400 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-white text-2xl">3D Cube</div>
              </div>
            </div>

            {/* Right: Text + Button */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <p className="text-gray-700 mb-4">
                  Unione wallets integrate seamlessly with your platform, enabling card functionality, holding balances within the ecosystem, and offering compliant U.S. dollar accounts with optional earning potential.
                </p>
              </div>
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
