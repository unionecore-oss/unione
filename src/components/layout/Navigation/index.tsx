'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAVIGATION_LINKS } from '@/lib/constants'
import { useState } from 'react'
import Dropdown from './Dropdown'

interface NavigationProps {
  className?: string
}

export default function Navigation({ className = '' }: NavigationProps) {
  const pathname = usePathname()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const isActivePath = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className={`flex items-center gap-8 ${className}`}>
      {NAVIGATION_LINKS.map((link) => {
        const isActive = isActivePath(link.href)

        if ('dropdown' in link && link.dropdown) {
          return (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className="text-sm font-medium transition-colors flex items-center gap-1"
                style={{
                  color: isActive
                    ? 'var(--color-text-primary)'
                    : 'var(--color-text-secondary)',
                }}
              >
                {link.label}
                <svg
                  className="w-4 h-4 transition-transform"
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
            className="text-sm font-medium transition-colors"
            style={{
              color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
            }}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}
