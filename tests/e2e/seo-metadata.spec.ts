import { test, expect } from '@playwright/test'

/**
 * E2E Tests for SEO & Metadata (T060-T061)
 * Tests hreflang tags and HTML lang attribute for proper SEO configuration
 */

test.describe('SEO & Metadata Tests', () => {
  test('T060: should have correct hreflang tags on all pages', async ({ page }) => {
    const pages = [
      '/en',
      '/en/card',
      '/en/platform/wallet',
      '/en/platform/earn',
      '/en/platform/reward',
      '/en/about-us',
    ]

    for (const path of pages) {
      await page.goto(`http://localhost:3003${path}`)

      // Check for hreflang alternate links in the page head
      const hreflangLinks = await page.locator('link[rel="alternate"][hreflang]').all()

      // Should have at least English and Korean alternates
      expect(hreflangLinks.length).toBeGreaterThanOrEqual(2)

      // Verify English alternate exists
      const enLink = await page.locator('link[rel="alternate"][hreflang="en"]').getAttribute('href')
      expect(enLink).toContain('/en')

      // Verify Korean alternate exists
      const koLink = await page.locator('link[rel="alternate"][hreflang="ko"]').getAttribute('href')
      expect(koLink).toContain('/ko')

      // Verify canonical URL exists
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href')
      expect(canonical).toBeTruthy()
      expect(canonical).toContain('/en')
    }
  })

  test('T060: should have correct hreflang tags on Korean pages', async ({ page }) => {
    const pages = [
      '/ko',
      '/ko/card',
      '/ko/platform/wallet',
      '/ko/platform/earn',
      '/ko/platform/reward',
      '/ko/about-us',
    ]

    for (const path of pages) {
      await page.goto(`http://localhost:3003${path}`)

      // Check for hreflang alternate links
      const hreflangLinks = await page.locator('link[rel="alternate"][hreflang]').all()
      expect(hreflangLinks.length).toBeGreaterThanOrEqual(2)

      // Verify alternates point to correct locales
      const enLink = await page.locator('link[rel="alternate"][hreflang="en"]').getAttribute('href')
      expect(enLink).toContain('/en')

      const koLink = await page.locator('link[rel="alternate"][hreflang="ko"]').getAttribute('href')
      expect(koLink).toContain('/ko')

      // Verify canonical URL for Korean
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href')
      expect(canonical).toBeTruthy()
      expect(canonical).toContain('/ko')
    }
  })

  test('T061: should update HTML lang attribute correctly for English', async ({ page }) => {
    // Navigate to English homepage
    await page.goto('http://localhost:3003/en')

    // Get the html element's lang attribute
    const htmlLang = await page.locator('html').getAttribute('lang')
    expect(htmlLang).toBe('en')

    // Navigate to English Card page
    await page.goto('http://localhost:3003/en/card')
    const cardLang = await page.locator('html').getAttribute('lang')
    expect(cardLang).toBe('en')

    // Navigate to English Wallet page
    await page.goto('http://localhost:3003/en/platform/wallet')
    const walletLang = await page.locator('html').getAttribute('lang')
    expect(walletLang).toBe('en')
  })

  test('T061: should update HTML lang attribute correctly for Korean', async ({ page }) => {
    // Navigate to Korean homepage
    await page.goto('http://localhost:3003/ko')

    // Get the html element's lang attribute
    const htmlLang = await page.locator('html').getAttribute('lang')
    expect(htmlLang).toBe('ko')

    // Navigate to Korean Card page
    await page.goto('http://localhost:3003/ko/card')
    const cardLang = await page.locator('html').getAttribute('lang')
    expect(cardLang).toBe('ko')

    // Navigate to Korean Wallet page
    await page.goto('http://localhost:3003/ko/platform/wallet')
    const walletLang = await page.locator('html').getAttribute('lang')
    expect(walletLang).toBe('ko')
  })

  test('T061: should update lang attribute when switching languages', async ({ page }) => {
    // Start with English
    await page.goto('http://localhost:3003/en')
    let htmlLang = await page.locator('html').getAttribute('lang')
    expect(htmlLang).toBe('en')

    // Switch to Korean
    await page.locator('button:has-text("EN")').click()
    await page.locator('button:has-text("한국어")').click()
    await expect(page).toHaveURL('http://localhost:3003/ko')

    // Verify lang attribute updated to Korean
    htmlLang = await page.locator('html').getAttribute('lang')
    expect(htmlLang).toBe('ko')

    // Switch back to English
    await page.locator('button:has-text("KO")').click()
    await page.locator('button:has-text("English")').click()
    await expect(page).toHaveURL('http://localhost:3003/en')

    // Verify lang attribute updated back to English
    htmlLang = await page.locator('html').getAttribute('lang')
    expect(htmlLang).toBe('en')
  })

  test('Should have translated metadata (title and description) for each locale', async ({ page }) => {
    // Check English metadata
    await page.goto('http://localhost:3003/en')

    let title = await page.title()
    expect(title).toContain('UNIONE - Premium Fintech Solutions')

    let metaDescription = await page.locator('meta[name="description"]').getAttribute('content')
    expect(metaDescription).toContain('UNIONE is a modern fintech platform')

    // Switch to Korean
    await page.goto('http://localhost:3003/ko')

    title = await page.title()
    expect(title).toContain('UNIONE - 프리미엄 핀테크 솔루션')

    metaDescription = await page.locator('meta[name="description"]').getAttribute('content')
    expect(metaDescription).toContain('UNIONE은 프리미엄 카드')
  })

  test('Should have Open Graph locale metadata for each language', async ({ page }) => {
    // Check English Open Graph locale
    await page.goto('http://localhost:3003/en')
    let ogLocale = await page.locator('meta[property="og:locale"]').getAttribute('content')
    expect(ogLocale).toBe('en_US')

    // Check Korean Open Graph locale
    await page.goto('http://localhost:3003/ko')
    ogLocale = await page.locator('meta[property="og:locale"]').getAttribute('content')
    expect(ogLocale).toBe('ko_KR')
  })

  test('Should have canonical URL on all pages', async ({ page }) => {
    const testPages = [
      { path: '/en', expected: '/en' },
      { path: '/ko', expected: '/ko' },
      { path: '/en/card', expected: '/en' },
      { path: '/ko/card', expected: '/ko' },
    ]

    for (const { path, expected } of testPages) {
      await page.goto(`http://localhost:3003${path}`)
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href')
      expect(canonical).toContain(expected)
    }
  })
})
