import Link from 'next/link'
import { NAVIGATION_LINKS } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: 'var(--color-background-card)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--color-text-primary)' }}
            >
              UNIONE
            </h3>
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>
              더 유동적인 금융 시스템을 위한 프리미엄 핀테크 솔루션
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4
              className="text-sm font-semibold mb-4"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Product
            </h4>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link) => {
                if ('dropdown' in link && link.dropdown) {
                  return link.dropdown.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm transition-colors"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))
                }
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4
              className="text-sm font-semibold mb-4"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/company"
                  className="text-sm transition-colors"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
            © {currentYear} UNIONE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
