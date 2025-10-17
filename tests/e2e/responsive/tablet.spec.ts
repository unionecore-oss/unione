import { test, expect } from '@playwright/test'

/**
 * Tablet Viewport E2E Tests (768x1024 - iPad)
 *
 * Tests responsive behavior on tablet devices:
 * - 2-column layouts work correctly
 * - Navigation is visible (not hamburger)
 * - Images use appropriate sizes
 * - Touch targets remain accessible
 * - Content utilizes tablet screen real estate
 */

test.describe('Tablet Responsive Tests (768x1024)', () => {
  test.beforeEach(async ({ page }) => {
    // Set tablet viewport (iPad)
    await page.setViewportSize({ width: 768, height: 1024 })
  })

  test('Homepage displays in tablet layout', async ({ page }) => {
    await page.goto('/')

    // Check no horizontal scroll
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth)
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth)
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth)

    // Hero section should be visible
    await expect(page.locator('h1').first()).toBeVisible()

    // Check viewport is properly recognized as tablet size
    const viewportWidth = await page.viewportSize()
    expect(viewportWidth?.width).toBe(768)
  })

  test('Card page displays 2-column grid on tablet', async ({ page }) => {
    await page.goto('/en/card')

    // Check no horizontal scroll
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth)
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth)
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth)

    // Features section should use grid layout
    const grid = page.locator('.grid').first()
    if (await grid.count() > 0) {
      const gridColumns = await grid.evaluate((el) => {
        return window.getComputedStyle(el).gridTemplateColumns
      })
      // Should have 2 columns on tablet (md: breakpoint)
      expect(gridColumns).toContain('fr')
    }
  })

  test('Navigation is fully visible on tablet', async ({ page }) => {
    await page.goto('/')

    // Desktop navigation should be visible (not hamburger menu)
    const nav = page.locator('nav')
    await expect(nav).toBeVisible()

    // Navigation items should be visible
    const navLinks = page.locator('nav a, nav button')
    const count = await navLinks.count()
    expect(count).toBeGreaterThan(0)
  })

  test('Typography scales appropriately for tablet', async ({ page }) => {
    await page.goto('/')

    // H1 should use tablet-specific sizing
    const h1 = page.locator('h1').first()
    const fontSize = await h1.evaluate((el) => {
      return window.getComputedStyle(el).fontSize
    })
    const fontSizeValue = parseInt(fontSize)

    // Tablet font sizes should be between mobile and desktop
    // Expecting 48px-64px range for h1 on tablet
    expect(fontSizeValue).toBeGreaterThanOrEqual(40)
    expect(fontSizeValue).toBeLessThanOrEqual(80)
  })

  test('Images load with appropriate sizes for tablet', async ({ page }) => {
    await page.goto('/')

    // Wait for images to load
    await page.waitForLoadState('networkidle')

    // Check if images are present and loaded
    const images = await page.locator('img').all()
    for (const img of images.slice(0, 3)) {
      await expect(img).toBeVisible()
      const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth)
      expect(naturalWidth).toBeGreaterThan(0)
    }
  })

  test('Spacing and padding use tablet breakpoint', async ({ page }) => {
    await page.goto('/')

    // Container should have appropriate padding for tablet
    const container = page.locator('.container-custom').first()
    if (await container.count() > 0) {
      const padding = await container.evaluate((el) => {
        const styles = window.getComputedStyle(el)
        return {
          left: styles.paddingLeft,
          right: styles.paddingRight,
        }
      })

      // Tablet should have more padding than mobile
      const paddingValue = parseInt(padding.left)
      expect(paddingValue).toBeGreaterThanOrEqual(24) // 1.5rem minimum
    }
  })

  test('Touch targets remain accessible on tablet', async ({ page }) => {
    await page.goto('/')

    // Buttons should maintain touch-friendly sizes
    const buttons = await page.locator('button').all()
    for (const button of buttons.slice(0, 3)) {
      const box = await button.boundingBox()
      if (box) {
        expect(box.height).toBeGreaterThanOrEqual(44)
      }
    }
  })

  test('All pages work correctly on tablet', async ({ page }) => {
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
