'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { NAVIGATION_LINKS } from '@/lib/constants'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null)

  const isActivePath = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  const toggleDropdown = (label: string) => {
    setExpandedDropdown(expandedDropdown === label ? null : label)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-full md:hidden"
            style={{
              backgroundColor: 'var(--color-background-card)',
              boxShadow: 'var(--shadow-soft-lg)',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between p-6 border-b"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <span
                className="text-xl font-bold"
                style={{ color: 'var(--color-text-primary)' }}
              >
                UNIONE
              </span>
              <button
                onClick={onClose}
                className="p-2"
                aria-label="Close menu"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col p-6">
              {NAVIGATION_LINKS.map((link) => {
                const isActive = isActivePath(link.href)

                if ('dropdown' in link && link.dropdown) {
                  return (
                    <div key={link.label} className="mb-2">
                      <button
                        onClick={() => toggleDropdown(link.label)}
                        className="flex items-center justify-between w-full py-3 text-left"
                        style={{
                          color: isActive
                            ? 'var(--color-text-primary)'
                            : 'var(--color-text-secondary)',
                        }}
                      >
                        <span className="font-medium">{link.label}</span>
                        <svg
                          className="w-5 h-5 transition-transform"
                          style={{
                            transform:
                              expandedDropdown === link.label ? 'rotate(180deg)' : 'rotate(0deg)',
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

                      <AnimatePresence>
                        {expandedDropdown === link.label && link.dropdown && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4"
                          >
                            {link.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.href}
                                href={dropdownItem.href}
                                onClick={onClose}
                                className="block py-2 text-sm"
                                style={{
                                  color: isActivePath(dropdownItem.href)
                                    ? 'var(--color-text-primary)'
                                    : 'var(--color-text-secondary)',
                                }}
                              >
                                {dropdownItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={onClose}
                    className="py-3 font-medium"
                    style={{
                      color: isActive
                        ? 'var(--color-text-primary)'
                        : 'var(--color-text-secondary)',
                    }}
                  >
                    {link.label}
                  </Link>
                )
              })}

              {/* CTA Button */}
              <button className="btn-primary mt-6 text-center">Get Started</button>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
