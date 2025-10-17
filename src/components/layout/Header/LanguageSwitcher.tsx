'use client'

import { useState, useRef, useEffect, useTransition } from 'react'
import { useLocale } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter, usePathname } from '@/lib/i18n/navigation'
import { setStoredLocale } from '@/lib/utils/localStorage'
import type { LocaleCode } from '@/lib/i18n/constants'

const languages = [
  { code: 'en' as LocaleCode, label: 'English' },
  { code: 'ko' as LocaleCode, label: '한국어' },
]

export default function LanguageSwitcher() {
  const locale = useLocale() as LocaleCode
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const switchLocale = (newLocale: LocaleCode) => {
    // Save to localStorage
    setStoredLocale(newLocale)

    // Navigate to new locale using next-intl router
    startTransition(() => {
      router.replace(pathname, { locale: newLocale })
      setIsOpen(false)
    })
  }

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0]

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-base font-medium transition-colors flex items-center gap-1"
        style={{
          color: '#000000',
          opacity: isPending ? 0.5 : 0.85,
        }}
        disabled={isPending}
        aria-label={`Current language: ${currentLanguage.label}. Click to change language`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {currentLanguage.code.toUpperCase()}
        <svg
          className="w-5 h-5 transition-transform"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
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
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="absolute right-0 mt-2 w-32 rounded-lg overflow-hidden backdrop-blur-xl"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
              border: '1px solid rgba(0, 255, 255, 0.3)',
            }}
          >
            {languages.map((lang, index) => (
              <motion.button
                key={lang.code}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  backgroundColor: locale === lang.code ? 'rgba(0, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                  scale: 1.02
                }}
                onClick={() => switchLocale(lang.code)}
                disabled={isPending}
                className="w-full text-left px-4 py-2.5 text-base font-medium transition-all flex items-center justify-between"
                style={{
                  color: locale === lang.code ? '#00ffff' : '#ffffff',
                  backgroundColor: locale === lang.code ? 'rgba(0, 255, 255, 0.1)' : 'transparent',
                  opacity: isPending ? 0.5 : 1,
                }}
                aria-current={locale === lang.code ? 'true' : 'false'}
                aria-label={`Switch to ${lang.label}`}
              >
                <span>{lang.label}</span>
                {locale === lang.code && (
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-label="Currently selected language"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
