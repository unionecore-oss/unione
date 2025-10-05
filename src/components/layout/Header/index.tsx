'use client'

import { useState, useEffect } from 'react'
import Logo from './Logo'
import Navigation from '../Navigation'
import MobileMenu from '../MobileMenu'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
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
        className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-xl bg-white/95' : 'backdrop-blur-md bg-white/90'
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
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <Navigation className="hidden md:flex" />

            {/* Language Switcher & CTA */}
            <div className="hidden md:flex items-center gap-6">
              <LanguageSwitcher />
              <a
                href="/app"
                className="px-6 py-2.5 rounded-full font-medium transition-all duration-300 relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #00ffff 0%, #ff0080 100%)',
                  color: '#000000',
                  boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.8), 0 0 60px rgba(255, 0, 128, 0.6)'
                  e.currentTarget.style.transform = 'scale(1.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.5)'
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                Launch App
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
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
