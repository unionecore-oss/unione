'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/lib/i18n/navigation'
import Logo from './Logo'
import Navigation from '../Navigation'
import MobileMenu from '../MobileMenu'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const t = useTranslations('header.cta')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
          isScrolled ? 'backdrop-blur-xl' : 'backdrop-blur-md'
        }`}
        style={{
          boxShadow: isScrolled
            ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            : '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          borderBottom: isScrolled
            ? '1px solid rgba(0, 0, 0, 0.1)'
            : '1px solid rgba(0, 0, 0, 0.05)',
        }}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-18 md:h-19 lg:h-20">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <Navigation className="hidden md:flex" />

            {/* Language Switcher & CTA */}
            <div className="hidden md:flex items-center gap-5 lg:gap-6">
              {/* Temporarily hidden - Korean feature on hold */}
              {/* <LanguageSwitcher /> */}
              <Link
                href="/app"
                className="px-5 md:px-6 py-2.5 min-h-touch flex items-center rounded-full font-medium text-sm md:text-base transition-all duration-300"
                style={{
                  background: '#ffffff',
                  color: '#000000',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f5f5f5'
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#ffffff'
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)'
                }}
              >
                {t('launchApp')}
              </Link>
            </div>

            {/* Mobile Menu Button - Touch Optimized (44x44px) */}
            <button
              className="md:hidden min-w-touch min-h-touch flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              style={{ color: '#000000' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
