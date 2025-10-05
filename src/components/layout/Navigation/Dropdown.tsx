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
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          className="absolute top-full left-0 mt-2 py-2 rounded-2xl backdrop-blur-xl"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            border: '1px solid rgba(0, 255, 255, 0.3)',
            minWidth: '200px',
            zIndex: 50,
            boxShadow: '0 0 30px rgba(0, 255, 255, 0.3), 0 0 60px rgba(255, 0, 128, 0.2)',
          }}
        >
          {items.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={item.href}
                className="block px-4 py-2.5 text-base font-medium transition-all rounded-lg mx-2 hover:scale-[1.02]"
                style={{
                  color: isActivePath(item.href) ? '#00ffff' : '#ffffff',
                  backgroundColor: isActivePath(item.href)
                    ? 'rgba(0, 255, 255, 0.1)'
                    : 'transparent',
                }}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
