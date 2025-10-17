"use client"

import * as React from "react"

const cards = [
  {
    title: "Maximize Your Rewards",
    description: "Boost your mining speed with friends, and maximize your earnings by unlocking tiered rewards through friend invitations.",
    gradientFrom: "from-violet-500",
    gradientTo: "to-purple-700",
    delay: "0s",
  },
  {
    title: "Mobile First",
    description: "Designed for your phone mine and manage crypto effortlessly.",
    gradientFrom: "from-amber-500",
    gradientTo: "to-orange-600",
    delay: "0.2s",
  },
  {
    title: "User Friendly",
    description: "Easy for everyone and eco-friendly combining accessibility, security, and sustainability.",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-green-600",
    delay: "0.4s",
  },
]

export const GlassCardsFeatures = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Gradient overlay for smooth transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <GlassCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface GlassCardProps {
  title: string
  description: string
  gradientFrom: string
  gradientTo: string
  delay: string
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ title, description, gradientFrom, gradientTo, delay }, ref) => {
    return (
      <div
        ref={ref}
        className="group h-[350px] w-full [perspective:1000px]"
        style={{ animationDelay: delay }}
      >
        <div className="relative h-full rounded-[30px] bg-gradient-to-br from-zinc-900/80 to-black/80 shadow-2xl transition-all duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[box-shadow:rgba(59,130,246,0.3)_30px_50px_25px_-40px,rgba(139,92,246,0.2)_0px_25px_30px_0px] group-hover:[transform:rotate3d(1,1,0,15deg)]">
          {/* Gradient glow on hover */}
          <div className={`absolute inset-0 rounded-[30px] bg-gradient-to-br ${gradientFrom}/0 ${gradientTo}/0 group-hover:${gradientFrom}/20 group-hover:${gradientTo}/10 transition-all duration-500 blur-xl`}></div>

          {/* Glass overlay with gradient tint */}
          <div className="absolute inset-2 rounded-[35px] border-b border-l border-white/20 bg-gradient-to-b from-blue-500/20 via-purple-500/10 to-white/5 backdrop-blur-sm [transform-style:preserve-3d] [transform:translate3d(0,0,25px)]"></div>

          {/* Content */}
          <div className="absolute [transform:translate3d(0,0,26px)] w-full h-full p-8">
            <div className="flex flex-col h-full justify-center">
              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug transition-all duration-300 group-hover:[transform:translate3d(0,0,10px)] group-hover:text-shadow-lg">
                {title}
              </h3>

              {/* Description */}
              <p className="text-zinc-200 text-base md:text-lg leading-normal">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
)

GlassCard.displayName = "GlassCard"
