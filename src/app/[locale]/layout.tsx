import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Inter } from 'next/font/google'
import { routing } from '@/i18n/routing'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MotionProvider from '@/components/providers/MotionProvider'
import ScrollToTop from '@/components/providers/ScrollToTop'
import '../../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  // T057: Translated metadata for each locale
  const metadata = {
    en: {
      title: 'UNIONE - Premium Fintech Solutions',
      description:
        'UNIONE is a modern fintech platform offering premium cards, digital wallets, and reward programs. Experience secure and convenient financial services worldwide.',
    },
    ko: {
      title: 'UNIONE - 프리미엄 핀테크 솔루션',
      description:
        'UNIONE은 프리미엄 카드, 디지털 지갑, 리워드 프로그램을 제공하는 모던 핀테크 플랫폼입니다. 전 세계 어디서나 안전하고 편리한 금융 서비스를 경험하세요.',
    },
  }

  const currentMetadata = metadata[locale as keyof typeof metadata] || metadata.en

  // T058: Canonical URLs for language variants
  const baseUrl = 'https://unione.com'
  const canonicalUrl = `${baseUrl}/${locale}`

  return {
    title: {
      default: currentMetadata.title,
      template: '%s | UNIONE',
    },
    description: currentMetadata.description,
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
    // T058: Add canonical URL
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en`,
        ko: `${baseUrl}/ko`,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
        { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    openGraph: {
      type: 'website',
      locale: locale === 'ko' ? 'ko_KR' : 'en_US',
      url: canonicalUrl,
      title: currentMetadata.title,
      description: currentMetadata.description,
      siteName: 'UNIONE',
    },
    twitter: {
      card: 'summary_large_image',
      title: currentMetadata.title,
      description: currentMetadata.description,
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
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  // Validate locale
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  // Fetch messages for the locale
  const messages = await getMessages()

  return (
    <html lang={locale} className={inter.variable}>
      <body className="antialiased">
        <ScrollToTop />
        <MotionProvider>
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </MotionProvider>
      </body>
    </html>
  )
}
