import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    card: {
      title: 'Card',
    },
    platform: {
      title: 'Platform',
      links: [
        { label: 'Reward', href: '/platform/reward' },
        { label: 'Wallet', href: '/platform/wallet' },
        { label: 'Earn', href: '/platform/earn' },
      ],
    },
    company: {
      title: 'Company',
    },
  }

  return (
    <footer
      style={{
        backgroundColor: '#1a1a1a',
        color: '#a0a0a0',
      }}
    >
      <div className="container-custom py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo */}
          <div>
            <h3
              className="text-3xl font-bold"
              style={{
                color: '#ffffff',
                letterSpacing: '-0.02em',
              }}
            >
              UNIONE
            </h3>
          </div>

          {/* Card */}
          <div>
            <Link href="/card">
              <h4 className="text-base font-medium mb-6 transition-colors hover:text-white cursor-pointer" style={{ color: '#808080' }}>
                {footerLinks.card.title}
              </h4>
            </Link>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-base font-medium mb-6" style={{ color: '#808080' }}>
              {footerLinks.platform.title}
            </h4>
            <ul className="space-y-3">
              {footerLinks.platform.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base transition-colors hover:text-white"
                    style={{ color: '#a0a0a0' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <Link href="/company">
              <h4 className="text-base font-medium mb-6 transition-colors hover:text-white cursor-pointer" style={{ color: '#808080' }}>
                {footerLinks.company.title}
              </h4>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{
            borderTop: '1px solid #2a2a2a',
          }}
        >
          {/* Copyright & Legal */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
            <p style={{ color: '#808080' }}>
              © {currentYear} UNIONE Technology Limited All Rights Reserved
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="transition-colors hover:text-white"
                style={{ color: '#808080' }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="transition-colors hover:text-white"
                style={{ color: '#808080' }}
              >
                Terms and Conditions
              </Link>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded transition-colors"
              style={{ backgroundColor: '#2a2a2a', color: '#808080' }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded transition-colors"
              style={{ backgroundColor: '#2a2a2a', color: '#808080' }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded transition-colors"
              style={{ backgroundColor: '#2a2a2a', color: '#808080' }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded transition-colors"
              style={{ backgroundColor: '#2a2a2a', color: '#808080' }}
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
