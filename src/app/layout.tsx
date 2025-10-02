import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'UNIONE - Premium Fintech Solutions',
    template: '%s | UNIONE',
  },
  description:
    'UNIONE은 프리미엄 카드, 디지털 지갑, 리워드 프로그램을 제공하는 모던 핀테크 플랫폼입니다. 전 세계 어디서나 안전하고 편리한 금융 서비스를 경험하세요.',
  keywords: [
    'fintech',
    'digital wallet',
    'premium card',
    'cryptocurrency',
    'rewards',
    'UNIONE',
    '핀테크',
    '디지털 지갑',
    '프리미엄 카드',
  ],
  authors: [{ name: 'UNIONE' }],
  creator: 'UNIONE',
  publisher: 'UNIONE',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://unione.com',
    title: 'UNIONE - Premium Fintech Solutions',
    description:
      'UNIONE은 프리미엄 카드, 디지털 지갑, 리워드 프로그램을 제공하는 모던 핀테크 플랫폼입니다.',
    siteName: 'UNIONE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UNIONE - Premium Fintech Solutions',
    description:
      'UNIONE은 프리미엄 카드, 디지털 지갑, 리워드 프로그램을 제공하는 모던 핀테크 플랫폼입니다.',
    creator: '@unione',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={inter.variable}>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
