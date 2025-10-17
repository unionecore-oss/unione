import { test, expect } from '@playwright/test'
import { playAudit } from 'playwright-lighthouse'
import lighthouse from 'lighthouse'
import * as chromeLauncher from 'chrome-launcher'

/**
 * Lighthouse Performance Tests
 *
 * Target Scores (Mobile):
 * - Performance: 90+
 * - Accessibility: 90+
 * - Best Practices: 90+
 * - SEO: 90+
 *
 * Core Web Vitals:
 * - LCP (Largest Contentful Paint): < 2.5s
 * - FID (First Input Delay): < 100ms
 * - CLS (Cumulative Layout Shift): < 0.1
 */

test.describe('Lighthouse Performance Audits', () => {
  test('Homepage should meet mobile performance targets', async ({ page }) => {
    await page.goto('/')

    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle')

    // Basic performance check using Playwright
    const performanceMetrics = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const paint = performance.getEntriesByType('paint')

      return {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        firstPaint: paint.find((entry) => entry.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: paint.find((entry) => entry.name === 'first-contentful-paint')?.startTime || 0,
      }
    })

    // Check basic performance metrics
    console.log('Performance Metrics:', performanceMetrics)

    // DOM Content Loaded should be under 3 seconds
    expect(performanceMetrics.domContentLoaded).toBeLessThan(3000)

    // First Contentful Paint should be under 2.5 seconds
    expect(performanceMetrics.firstContentfulPaint).toBeLessThan(2500)
  })

  test('Card page should have good performance', async ({ page }) => {
    await page.goto('/en/card')

    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle')

    const performanceMetrics = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const paint = performance.getEntriesByType('paint')

      return {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstContentfulPaint: paint.find((entry) => entry.name === 'first-contentful-paint')?.startTime || 0,
      }
    })

    console.log('Card Page Performance:', performanceMetrics)

    // Check performance targets
    expect(performanceMetrics.domContentLoaded).toBeLessThan(3000)
    expect(performanceMetrics.firstContentfulPaint).toBeLessThan(2500)
  })

  test('Check for layout shifts (CLS)', async ({ page }) => {
    await page.goto('/')

    // Monitor layout shifts
    const cls = await page.evaluate(() => {
      return new Promise<number>((resolve) => {
        let clsScore = 0

        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if ((entry as any).hadRecentInput) continue
            clsScore += (entry as any).value
          }
        })

        observer.observe({ type: 'layout-shift', buffered: true })

        // Wait a bit for layout shifts to occur
        setTimeout(() => {
          observer.disconnect()
          resolve(clsScore)
        }, 3000)
      })
    })

    console.log('Cumulative Layout Shift:', cls)

    // CLS should be less than 0.1 for good user experience
    expect(cls).toBeLessThan(0.1)
  })

  test('Images should load efficiently', async ({ page }) => {
    await page.goto('/')

    // Get all images
    const images = await page.locator('img').all()

    // Check that images are loading
    for (const img of images.slice(0, 5)) {
      // Check first 5 images
      const isVisible = await img.isVisible()
      if (isVisible) {
        const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth)
        const naturalHeight = await img.evaluate((el: HTMLImageElement) => el.naturalHeight)

        // Images should be loaded (naturalWidth > 0)
        expect(naturalWidth).toBeGreaterThan(0)
        expect(naturalHeight).toBeGreaterThan(0)
      }
    }
  })

  test('Check resource loading performance', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Get resource timing data
    const resourceMetrics = await page.evaluate(() => {
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[]

      return {
        totalResources: resources.length,
        images: resources.filter((r) => r.initiatorType === 'img').length,
        scripts: resources.filter((r) => r.initiatorType === 'script').length,
        stylesheets: resources.filter((r) => r.initiatorType === 'link' || r.initiatorType === 'css').length,
        averageLoadTime:
          resources.reduce((sum, r) => sum + r.duration, 0) / resources.length,
      }
    })

    console.log('Resource Metrics:', resourceMetrics)

    // Average resource load time should be reasonable
    expect(resourceMetrics.averageLoadTime).toBeLessThan(1000) // Less than 1 second average
  })

  test('Check Core Web Vitals availability', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Check if Web Vitals are available
    const webVitals = await page.evaluate(() => {
      return {
        hasPerformanceObserver: typeof PerformanceObserver !== 'undefined',
        hasLayoutShift: PerformanceObserver.supportedEntryTypes?.includes('layout-shift'),
        hasLargestContentfulPaint: PerformanceObserver.supportedEntryTypes?.includes('largest-contentful-paint'),
        hasFirstInput: PerformanceObserver.supportedEntryTypes?.includes('first-input'),
      }
    })

    console.log('Web Vitals Support:', webVitals)

    // Modern browsers should support these
    expect(webVitals.hasPerformanceObserver).toBe(true)
    expect(webVitals.hasLayoutShift).toBe(true)
    expect(webVitals.hasLargestContentfulPaint).toBe(true)
  })

  test('Mobile viewport performance', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const mobileMetrics = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const paint = performance.getEntriesByType('paint')

      return {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstContentfulPaint: paint.find((entry) => entry.name === 'first-contentful-paint')?.startTime || 0,
        transferSize: navigation.transferSize,
      }
    })

    console.log('Mobile Performance Metrics:', mobileMetrics)

    // Mobile should still have good performance
    expect(mobileMetrics.domContentLoaded).toBeLessThan(3000)
    expect(mobileMetrics.firstContentfulPaint).toBeLessThan(2500)
  })
})

/**
 * USAGE NOTES:
 *
 * To run full Lighthouse audits (requires lighthouse package):
 *
 * 1. Install lighthouse:
 *    npm install -D lighthouse chrome-launcher
 *
 * 2. Run the command:
 *    npx lighthouse http://localhost:3000 --view --preset=desktop
 *    npx lighthouse http://localhost:3000 --view --emulated-form-factor=mobile
 *
 * 3. For CI/CD integration:
 *    npx lighthouse http://localhost:3000 --output=json --output-path=./lighthouse-report.json
 *
 * Target Scores:
 * - Performance: 90-100 (Good)
 * - Accessibility: 90-100 (Good)
 * - Best Practices: 90-100 (Good)
 * - SEO: 90-100 (Good)
 */
