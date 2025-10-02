import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('should navigate to all pages from home', async ({ page }) => {
    await page.goto('/')

    // Verify home page loaded
    await expect(page).toHaveTitle(/UNIONE/)
    await expect(page.getByRole('heading', { name: /full stack for the/i })).toBeVisible()

    // Navigate to Card page
    await page.getByRole('link', { name: 'Card', exact: true }).click()
    await expect(page).toHaveURL('/card')
    await expect(page.getByRole('heading', { name: /Card for the Modern Era/i })).toBeVisible()

    // Navigate to Company page
    await page.getByRole('link', { name: 'Company' }).click()
    await expect(page).toHaveURL('/company')
    await expect(page.getByRole('heading', { name: /Building the Future/i })).toBeVisible()

    // Navigate back to home
    await page.getByRole('link', { name: 'UNIONE' }).first().click()
    await expect(page).toHaveURL('/')
  })

  test('should navigate to platform pages via dropdown', async ({ page }) => {
    await page.goto('/')

    // Open Platform dropdown
    await page.getByRole('button', { name: 'Platform' }).hover()

    // Wait for dropdown to appear and click Wallet
    const walletLink = page.getByRole('link', { name: 'Wallet' })
    await expect(walletLink).toBeVisible()
    await walletLink.click()

    await expect(page).toHaveURL('/platform/wallet')
    await expect(page.getByRole('heading', { name: /Digital Wallet/i })).toBeVisible()
  })

  test('should work with browser navigation', async ({ page }) => {
    await page.goto('/')

    await page.getByRole('link', { name: 'Card', exact: true }).click()
    await expect(page).toHaveURL('/card')

    await page.getByRole('link', { name: 'Company' }).click()
    await expect(page).toHaveURL('/company')

    // Go back
    await page.goBack()
    await expect(page).toHaveURL('/card')

    // Go forward
    await page.goForward()
    await expect(page).toHaveURL('/company')
  })

  test('should have working footer links', async ({ page }) => {
    await page.goto('/')

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))

    // Click a footer link
    const footerCardLink = page.locator('footer').getByRole('link', { name: 'Card' })
    await footerCardLink.click()
    await expect(page).toHaveURL('/card')
  })
})
