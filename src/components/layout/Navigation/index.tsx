'use client'

import { useTranslations } from 'next-intl'
import { useState, useMemo } from 'react'
import { Link } from '@/lib/i18n/navigation'
import Dropdown from './Dropdown'

interface NavigationProps {
  className?: string
}

export default function Navigation({ className = '' }: NavigationProps) {
  const t = useTranslations('header.navigation')
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const navigationLinks = useMemo(() => [
    { label: t('card'), href: '/card' },
    {
      label: t('platform'),
      href: '/platform',
      dropdown: [
        { label: t('reward'), href: '/platform/reward' },
        { label: t('wallet'), href: '/platform/wallet' },
        { label: t('earn'), href: '/platform/earn' },
      ],
    },
    { label: t('aboutUs'), href: '/about-us' },
  ], [t])

  return (
    <nav className={`flex items-center gap-8 lg:gap-12 ${className}`}>
      {navigationLinks.map((link) => {
        if ('dropdown' in link && link.dropdown) {
          return (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className="text-lg lg:text-xl font-medium transition-colors flex items-center gap-1"
                style={{
                  color: '#000000',
                }}
              >
                {link.label}
                <svg
                  className="w-5 h-5 transition-transform"
                  style={{
                    transform: openDropdown === link.label ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <Dropdown items={link.dropdown} isOpen={openDropdown === link.label} />
            </div>
          )
        }

        return (
          <Link
            key={link.label}
            href={link.href}
            className="text-lg lg:text-xl font-medium transition-all hover:opacity-100 relative group"
            style={{
              color: '#000000',
              opacity: 0.85,
            }}
          >
            {link.label}
            <span
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 group-hover:w-full"
              style={{
                width: '0',
              }}
            />
          </Link>
        )
      })}
    </nav>
  )
}
