'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/lib/i18n/navigation'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer
      style={{
        backgroundColor: '#1a1a1a',
        color: '#a0a0a0',
      }}
    >
      <div className="container-custom py-12 md:py-14 lg:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-11 lg:gap-12 mb-12 md:mb-14 lg:mb-16">
          {/* Logo */}
          <div>
            <h3
              className="text-2xl md:text-3xl font-bold"
              style={{
                color: '#ffffff',
                letterSpacing: '-0.02em',
              }}
            >
              {t('brand')}
            </h3>
          </div>

          {/* Card */}
          <div>
            <Link href="/card">
              <h4 className="text-sm md:text-base font-medium mb-5 md:mb-6 transition-colors hover:text-white cursor-pointer" style={{ color: '#808080' }}>
                {t('card.title')}
              </h4>
            </Link>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-sm md:text-base font-medium mb-5 md:mb-6" style={{ color: '#808080' }}>
              {t('platform.title')}
            </h4>
            <ul className="space-y-2.5 md:space-y-3">
              <li>
                <Link
                  href="/platform/reward"
                  className="min-h-touch flex items-center text-sm md:text-base transition-colors hover:text-white"
                  style={{ color: '#a0a0a0' }}
                >
                  {t('platform.reward')}
                </Link>
              </li>
              <li>
                <Link
                  href="/platform/wallet"
                  className="min-h-touch flex items-center text-sm md:text-base transition-colors hover:text-white"
                  style={{ color: '#a0a0a0' }}
                >
                  {t('platform.wallet')}
                </Link>
              </li>
              <li>
                <Link
                  href="/platform/earn"
                  className="min-h-touch flex items-center text-sm md:text-base transition-colors hover:text-white"
                  style={{ color: '#a0a0a0' }}
                >
                  {t('platform.earn')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <Link href="/about-us">
              <h4 className="text-sm md:text-base font-medium mb-5 md:mb-6 transition-colors hover:text-white cursor-pointer" style={{ color: '#808080' }}>
                {t('company.title')}
              </h4>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="pt-6 md:pt-7 lg:pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{
            borderTop: '1px solid #2a2a2a',
          }}
        >
          {/* Copyright & Legal */}
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-xs md:text-sm">
            <p style={{ color: '#808080' }}>
              {t('copyright')}
            </p>
            <div className="flex gap-5 md:gap-6">
              <Link
                href="/privacy"
                prefetch={false}
                className="min-h-touch flex items-center text-xs md:text-sm transition-colors hover:text-white"
                style={{ color: '#808080' }}
              >
                {t('legal.privacy')}
              </Link>
              <Link
                href="/terms"
                prefetch={false}
                className="min-h-touch flex items-center text-xs md:text-sm transition-colors hover:text-white"
                style={{ color: '#808080' }}
              >
                {t('legal.terms')}
              </Link>
            </div>
          </div>

          {/* Social Icons - Touch Optimized (44x44px) */}
          <div className="flex gap-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-touch min-h-touch flex items-center justify-center rounded transition-colors"
              style={{ backgroundColor: '#2a2a2a', color: '#808080' }}
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-touch min-h-touch flex items-center justify-center rounded transition-colors"
              style={{ backgroundColor: '#2a2a2a', color: '#808080' }}
              aria-label="Twitter (X)"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-touch min-h-touch flex items-center justify-center rounded transition-colors"
              style={{ backgroundColor: '#2a2a2a', color: '#808080' }}
              aria-label="Telegram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
