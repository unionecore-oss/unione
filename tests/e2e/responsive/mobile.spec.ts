import { test, expect } from '@playwright/test'

/**
 * Mobile Viewport E2E Tests (375x667 - iPhone SE)
 *
 * Tests responsive behavior on mobile devices:
 * - Layout stacks vertically
 * - Touch targets are 44x44px minimum
 * - Text is readable (16px+ for body)
 * - No horizontal scrolling
 * - Hamburger menu works
 */

test.describe('Mobile Responsive Tests (375x667)', () => {
  test.beforeEach(async ({ page }) => {
    // Set mobile viewport (iPhone SE)
    await page.setViewportSize({ width: 375, height: 667 })
  })

  test('Homepage loads and displays correctly on mobile', async ({ page }) => {
    await page.goto('/')

    // Check no horizontal scroll
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth)
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth)
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth)

    // Hero section should be visible
    await expect(page.locator('h1').first()).toBeVisible()

    // Check text is readable (minimum 16px for body text)
    const bodyFontSize = await page.locator('p').first().evaluate((el) => {
      return window.getComputedStyle(el).fontSize
    })
    const fontSizeValue = parseInt(bodyFontSize)
    expect(fontSizeValue).toBeGreaterThanOrEqual(16)
  })

  test('Card page displays correctly on mobile', async ({ page }) => {
    await page.goto('/en/card')

    // Check no horizontal scroll
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth)
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth)
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth)

    // Page should load
    await expect(page).toHaveTitle(/Card/i)
  })

  test('Navigation works on mobile', async ({ page }) => {
    await page.goto('/')

    // Mobile navigation should be present
    const nav = page.locator('nav')
    await expect(nav).toBeVisible()

    // Check if language switcher is present
    const langButton = page.locator('button').filter({ hasText: /EN|KO/i })
    if (await langButton.count() > 0) {
      await expect(langButton.first()).toBeVisible()
    }
  })

  test('Touch targets meet minimum size (44x44px)', async ({ page }) => {
    await page.goto('/')

    // Get all interactive elements (buttons, links)
    const interactiveElements = await page.locator('button, a[href]').all()

    for (const element of interactiveElements.slice(0, 5)) {
      // Check first 5 elements
      const box = await element.boundingBox()
      if (box) {
        // Touch targets should be at least 44x44px
        expect(box.height).toBeGreaterThanOrEqual(44)
        // Width can be flexible for links, but check common patterns
        if (await element.evaluate((el) => el.tagName === 'BUTTON')) {
          expect(box.width).toBeGreaterThanOrEqual(44)
        }
      }
    }
  })

  test('Images load on mobile', async ({ page }) => {
    await page.goto('/')

    // Wait for images to load
    await page.waitForLoadState('networkidle')

    // Check if images are present and loaded
    const images = await page.locator('img').all()
    for (const img of images.slice(0, 3)) {
      // Check first 3 images
      await expect(img).toBeVisible()
      const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth)
      expect(naturalWidth).toBeGreaterThan(0)
    }
  })

  test('Footer displays correctly on mobile', async ({ page }) => {
    await page.goto('/')

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))

    // Footer should be visible
    const footer = page.locator('footer')
    await expect(footer).toBeVisible()
  })

  test('All pages are accessible on mobile', async ({ page }) => {
    const pages = ['/', '/en/card']

    for (const path of pages) {
      await page.goto(path)

      // Check page loads
      await expect(page).not.toHaveTitle('')

      // Check no horizontal scroll
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth)
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth)
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth)
    }
  })
})
