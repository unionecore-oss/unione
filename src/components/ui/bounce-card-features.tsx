"use client"

import React from "react"
import { motion } from "framer-motion"

export const BouncyCardsFeatures = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 bg-black">
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Maximize Your Rewards</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="h-full flex items-center justify-center">
              <p className="text-center text-sm text-indigo-50">
                Boost your mining speed with friends, and maximize your earnings by unlocking tiered rewards through friend invitations.
              </p>
            </div>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Mobile First</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="h-full flex items-center justify-center">
              <p className="text-center text-sm text-orange-50">
                Designed for your phone mine and manage crypto effortlessly.
              </p>
            </div>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>User Friendly</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="h-full flex items-center justify-center">
              <p className="text-center text-sm text-emerald-50">
                Easy for everyone and eco-friendly combining accessibility, security, and sustainability.
              </p>
            </div>
          </div>
        </BounceCard>
      </div>
    </section>
  )
}

const BounceCard = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  )
}

const CardTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold text-slate-800">{children}</h3>
  )
}
