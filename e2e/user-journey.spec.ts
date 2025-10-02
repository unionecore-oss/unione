import { test, expect } from '@playwright/test'

test.describe('Critical User Journeys', () => {
  test('should complete card application journey', async ({ page }) => {
    await page.goto('/')

    // Navigate to Card page
    await page.getByRole('link', { name: 'Card', exact: true }).click()
    await expect(page).toHaveURL('/card')

    // Verify card features are visible
    await expect(page.getByRole('heading', { name: /Card Features/i })).toBeVisible()
    await expect(page.getByText(/Global Acceptance/i)).toBeVisible()
    await expect(page.getByText(/Premium Rewards/i)).toBeVisible()

    // Verify "How It Works" section
    await expect(page.getByRole('heading', { name: /How It Works/i })).toBeVisible()
    await expect(page.getByText(/Apply Online/i)).toBeVisible()

    // Click Apply Now button
    const applyButton = page.getByRole('button', { name: /Apply Now/i })
    await expect(applyButton).toBeVisible()
    await applyButton.click()
  })

  test('should explore platform features', async ({ page }) => {
    await page.goto('/')

    // Hover over Platform to see dropdown
    await page.getByRole('button', { name: 'Platform' }).hover()

    // Navigate to Reward page
    await page.getByRole('link', { name: 'Reward' }).click()
    await expect(page).toHaveURL('/platform/reward')
    await expect(page.getByRole('heading', { name: /Reward/i })).toBeVisible()

    // Hover over Platform again to see dropdown
    await page.getByRole('button', { name: 'Platform' }).hover()

    // Navigate to Wallet page
    await page.getByRole('link', { name: 'Wallet' }).click()
    await expect(page).toHaveURL('/platform/wallet')
    await expect(page.getByRole('heading', { name: /Digital Wallet/i })).toBeVisible()

    // Hover over Platform again
    await page.getByRole('button', { name: 'Platform' }).hover()

    // Navigate to Earn page
    await page.getByRole('link', { name: 'Earn' }).click()
    await expect(page).toHaveURL('/platform/earn')
    await expect(page.getByRole('heading', { name: /Earn/i })).toBeVisible()
  })

  test('should interact with company page form', async ({ page }) => {
    await page.goto('/company')

    // Verify company info
    await expect(page.getByRole('heading', { name: /Building the Future/i })).toBeVisible()

    // Verify stats
    await expect(page.getByText(/1M\+/)).toBeVisible()
    await expect(page.getByText(/200\+/)).toBeVisible()
    await expect(page.getByText(/\$5B\+/)).toBeVisible()

    // Verify timeline
    await expect(page.getByRole('heading', { name: /Our Journey/i })).toBeVisible()
    await expect(page.getByText(/2020/)).toBeVisible()
    await expect(page.getByText(/Company Founded/i)).toBeVisible()

    // Scroll to contact form
    await page.getByRole('heading', { name: /Get in Touch/i }).scrollIntoViewIfNeeded()

    // Fill out contact form
    await page.getByRole('textbox', { name: /Name/i }).fill('Test User')
    await page.getByRole('textbox', { name: /Email/i }).fill('test@example.com')
    await page.getByRole('textbox', { name: /Message/i }).fill('This is a test message.')

    // Click send button
    const sendButton = page.getByRole('button', { name: /Send Message/i })
    await expect(sendButton).toBeVisible()
  })

  test('should display all CTAs correctly', async ({ page }) => {
    await page.goto('/')

    // Home page CTAs
    await expect(page.getByRole('button', { name: /Let's Talk/i })).toBeVisible()
    await expect(page.getByRole('button', { name: /Learn More/i })).toBeVisible()
    await expect(page.getByRole('button', { name: /Get Started/i }).first()).toBeVisible()

    // Go to card page and check CTAs
    await page.goto('/card')
    await expect(page.getByRole('button', { name: /Apply Now/i })).toBeVisible()

    // Go to wallet page and check CTAs
    await page.goto('/platform/wallet')
    await expect(page.getByRole('button', { name: /Create Wallet/i })).toBeVisible()
  })

  test('should have consistent header and footer across pages', async ({ page }) => {
    const pages = ['/', '/card', '/company', '/platform/wallet']

    for (const url of pages) {
      await page.goto(url)

      // Check header exists
      await expect(page.getByRole('banner')).toBeVisible()
      await expect(page.getByRole('link', { name: 'UNIONE' }).first()).toBeVisible()

      // Check footer exists
      await expect(page.getByRole('contentinfo')).toBeVisible()
      await expect(page.locator('footer').getByText(/UNIONE/)).toBeVisible()
    }
  })
})
