'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

interface DropdownItem {
  readonly label: string
  readonly href: string
}

interface DropdownProps {
  items: readonly DropdownItem[]
  isOpen: boolean
}

export default function Dropdown({ items, isOpen }: DropdownProps) {
  const pathname = usePathname()

  const isActivePath = (href: string) => {
    return pathname.startsWith(href)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="absolute top-full left-0 mt-2 py-2 rounded-xl shadow-soft-lg"
          style={{
            backgroundColor: 'var(--color-background-card)',
            border: '1px solid var(--color-border)',
            minWidth: '200px',
            zIndex: 50,
          }}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-sm font-medium transition-colors"
              style={{
                color: isActivePath(item.href)
                  ? 'var(--color-text-primary)'
                  : 'var(--color-text-secondary)',
                backgroundColor: isActivePath(item.href)
                  ? 'var(--color-background-secondary)'
                  : 'transparent',
              }}
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
