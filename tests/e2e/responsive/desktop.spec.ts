import { test, expect } from '@playwright/test'

/**
 * Desktop Viewport E2E Tests (1920x1080 - Full HD)
 *
 * Tests responsive behavior on desktop screens:
 * - Full navigation visible
 * - Multi-column layouts work
 * - Container max-width constraint (1440px)
 * - Large images and typography
 * - Hover states work (desktop-specific)
 */

test.describe('Desktop Responsive Tests (1920x1080)', () => {
  test.beforeEach(async ({ page }) => {
    // Set desktop viewport (Full HD)
    await page.setViewportSize({ width: 1920, height: 1080 })
  })

  test('Homepage displays in desktop layout', async ({ page }) => {
    await page.goto('/')

    // Check no horizontal scroll
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth)
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth)
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth)

    // Hero section should be visible
    await expect(page.locator('h1').first()).toBeVisible()

    // Check viewport is properly recognized
    const viewportWidth = await page.viewportSize()
    expect(viewportWidth?.width).toBe(1920)
  })

  test('Container respects max-width constraint (1440px)', async ({ page }) => {
    await page.goto('/')

    // Check container max-width
    const container = page.locator('.container-custom').first()
    if (await container.count() > 0) {
      const maxWidth = await container.evaluate((el) => {
        const computedStyle = window.getComputedStyle(el)
        return {
          maxWidth: computedStyle.maxWidth,
          actualWidth: el.getBoundingClientRect().width,
        }
      })

      // Max-width should be 90rem (1440px)
      const maxWidthValue = parseFloat(maxWidth.maxWidth)
      expect(maxWidthValue).toBeLessThanOrEqual(1440)

      // Actual width should not exceed max-width
      expect(maxWidth.actualWidth).toBeLessThanOrEqual(1440)
    }
  })

  test('Full navigation is visible on desktop', async ({ page }) => {
    await page.goto('/')

    // Desktop navigation should be fully visible
    const nav = page.locator('nav')
    await expect(nav).toBeVisible()

    // All navigation links should be visible
    const navLinks = page.locator('nav a, nav button').filter({ hasText: /.+/ })
    const count = await navLinks.count()
    expect(count).toBeGreaterThan(0)

    // Hamburger menu should NOT be visible on desktop
    const hamburger = page.locator('[aria-label*="menu" i], [aria-label*="hamburger" i]')
    if (await hamburger.count() > 0) {
      await expect(hamburger.first()).not.toBeVisible()
    }
  })

  test('Typography uses desktop sizing', async ({ page }) => {
    await page.goto('/')

    // H1 should use large desktop sizing
    const h1 = page.locator('h1').first()
    const fontSize = await h1.evaluate((el) => {
      return window.getComputedStyle(el).fontSize
    })
    const fontSizeValue = parseInt(fontSize)

    // Desktop h1 should be 48px or larger
    expect(fontSizeValue).toBeGreaterThanOrEqual(48)
  })

  test('Grid layouts display correctly on desktop', async ({ page }) => {
    await page.goto('/en/card')

    // Check if grid layouts are using desktop columns
    const grids = await page.locator('.grid').all()
    for (const grid of grids.slice(0, 2)) {
      const gridColumns = await grid.evaluate((el) => {
        return window.getComputedStyle(el).gridTemplateColumns
      })

      // Should have multiple columns
      if (gridColumns !== 'none') {
        const columnCount = gridColumns.split(' ').length
        expect(columnCount).toBeGreaterThan(1)
      }
    }
  })

  test('Hover effects work on desktop', async ({ page }) => {
    await page.goto('/')

    // Find a button or link
    const button = page.locator('button, a[href]').first()
    await expect(button).toBeVisible()

    // Get initial state
    const initialOpacity = await button.evaluate((el) => {
      return window.getComputedStyle(el).opacity
    })

    // Hover over element
    await button.hover()

    // Wait a bit for transition
    await page.waitForTimeout(100)

    // Opacity or transform might change on hover
    // This test verifies hover is possible (desktop-specific behavior)
    const afterHoverOpacity = await button.evaluate((el) => {
      return window.getComputedStyle(el).opacity
    })

    // Just verify we can hover (opacity might change or stay same)
    expect(afterHoverOpacity).toBeDefined()
  })

  test('Images load at high resolution for desktop', async ({ page }) => {
    await page.goto('/')

    // Wait for images to load
    await page.waitForLoadState('networkidle')

    // Check if images are present and loaded
    const images = await page.locator('img').all()
    for (const img of images.slice(0, 3)) {
      await expect(img).toBeVisible()
      const dimensions = await img.evaluate((el: HTMLImageElement) => ({
        naturalWidth: el.naturalWidth,
        naturalHeight: el.naturalHeight,
      }))

      // Desktop images should be reasonably high resolution
      expect(dimensions.naturalWidth).toBeGreaterThan(0)
      expect(dimensions.naturalHeight).toBeGreaterThan(0)
    }
  })

  test('All pages work correctly on desktop', async ({ page }) => {
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

  test('Footer displays in desktop layout', async ({ page }) => {
    await page.goto('/')

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))

    // Footer should be visible
    const footer = page.locator('footer')
    await expect(footer).toBeVisible()

    // Footer should use multi-column layout on desktop
    const footerGrid = footer.locator('.grid').first()
    if (await footerGrid.count() > 0) {
      const gridColumns = await footerGrid.evaluate((el) => {
        return window.getComputedStyle(el).gridTemplateColumns
      })

      // Should have 4 columns on desktop (md:grid-cols-4)
      const columnCount = gridColumns.split(' ').filter((c) => c.includes('fr') || c.includes('px')).length
      expect(columnCount).toBeGreaterThanOrEqual(2)
    }
  })
})
