import { test, expect } from '@playwright/test'

test.describe('Language Switching', () => {
  test.beforeEach(async ({ page }) => {
    // Clear localStorage before each test
    await page.goto('http://localhost:3003/en')
    await page.evaluate(() => localStorage.clear())
  })

  test('T024: should switch language from English to Korean', async ({ page }) => {
    // Navigate to English homepage
    await page.goto('http://localhost:3003/en')

    // Verify English content is displayed
    await expect(page.locator('h1')).toContainText('A new Web3 payment')
    await expect(page.locator('a[href="/en/card"]').first()).toContainText('Card')
    await expect(page.locator('button:has-text("EN")')).toBeVisible()

    // Click language switcher to open dropdown
    await page.locator('button:has-text("EN")').click()

    // Wait for dropdown to appear
    await expect(page.locator('button:has-text("한국어")')).toBeVisible()

    // Click Korean option
    await page.locator('button:has-text("한국어")').click()

    // Wait for URL to change to Korean
    await expect(page).toHaveURL('http://localhost:3003/ko')

    // Verify Korean content is displayed
    await expect(page.locator('h1')).toContainText('하나의 플랫폼에서')
    await expect(page.locator('a[href="/ko/card"]').first()).toContainText('카드')
    await expect(page.locator('button:has-text("KO")')).toBeVisible()

    // Verify Hero section translation
    await expect(page.locator('h1')).toContainText('새로운 Web3 결제')
    await expect(page.locator('a:has-text("시작하기")')).toBeVisible()

    // Verify CardShowcase section translation
    await expect(page.locator('h2:has-text("Unione은 글로벌 카드로")')).toBeVisible()

    // Verify ProductGrid section translation
    await expect(page.locator('h2:has-text("카드")').first()).toBeVisible()
    await expect(page.locator('h2:has-text("적립")')).toBeVisible()
    await expect(page.locator('h2:has-text("리워드")')).toBeVisible()
    await expect(page.locator('h2:has-text("지갑")')).toBeVisible()

    // Verify Footer translation
    await expect(page.locator('footer')).toContainText('플랫폼')
    await expect(page.locator('footer')).toContainText('회사 소개')
    await expect(page.locator('a:has-text("개인정보 처리방침")')).toBeVisible()
    await expect(page.locator('a:has-text("이용약관")')).toBeVisible()

    // Verify localStorage contains Korean preference
    const storedData = await page.evaluate(() => localStorage.getItem('UNIONE_LOCALE_PREFERENCE'))
    const storedPreference = JSON.parse(storedData || '{}')
    expect(storedPreference.locale).toBe('ko')
  })

  test('T025: should persist locale preference across page refresh', async ({ page }) => {
    // Navigate to English homepage
    await page.goto('http://localhost:3003/en')

    // Switch to Korean
    await page.locator('button:has-text("EN")').click()
    await page.locator('button:has-text("한국어")').click()

    // Wait for URL change
    await expect(page).toHaveURL('http://localhost:3003/ko')

    // Verify Korean content
    await expect(page.locator('h1')).toContainText('하나의 플랫폼에서')

    // Refresh the page
    await page.reload()

    // Verify still on Korean locale
    await expect(page).toHaveURL('http://localhost:3003/ko')
    await expect(page.locator('h1')).toContainText('하나의 플랫폼에서')
    await expect(page.locator('button:has-text("KO")')).toBeVisible()

    // Verify localStorage contains Korean preference
    const storedData = await page.evaluate(() => localStorage.getItem('UNIONE_LOCALE_PREFERENCE'))
    const storedPreference = JSON.parse(storedData || '{}')
    expect(storedPreference.locale).toBe('ko')
  })

  test('T026: should persist locale preference across page navigation', async ({ page }) => {
    // Navigate to English homepage
    await page.goto('http://localhost:3003/en')

    // Switch to Korean
    await page.locator('button:has-text("EN")').click()
    await page.locator('button:has-text("한국어")').click()

    // Wait for URL change
    await expect(page).toHaveURL('http://localhost:3003/ko')

    // Navigate to different pages
    await page.locator('a[href="/ko/card"]').first().click()
    await expect(page).toHaveURL(/\/ko\/card/)

    // Verify Korean content on Card page
    await expect(page.locator('button:has-text("KO")')).toBeVisible()

    // Navigate to Platform/Wallet page
    await page.locator('button:has-text("플랫폼")').click()
    await page.locator('a[href="/ko/platform/wallet"]').first().click()
    await expect(page).toHaveURL(/\/ko\/platform\/wallet/)

    // Verify Korean content on Wallet page
    await expect(page.locator('button:has-text("KO")')).toBeVisible()

    // Navigate back to homepage
    await page.locator('a[href="/ko"]').first().click()
    await expect(page).toHaveURL('http://localhost:3003/ko')

    // Verify still in Korean
    await expect(page.locator('h1')).toContainText('하나의 플랫폼에서')
    await expect(page.locator('button:has-text("KO")')).toBeVisible()
  })

  test('should switch back from Korean to English', async ({ page }) => {
    // Navigate to Korean homepage
    await page.goto('http://localhost:3003/ko')

    // Verify Korean content
    await expect(page.locator('h1')).toContainText('하나의 플랫폼에서')

    // Click language switcher
    await page.locator('button:has-text("KO")').click()

    // Click English option
    await page.locator('button:has-text("English")').click()

    // Wait for URL change
    await expect(page).toHaveURL('http://localhost:3003/en')

    // Verify English content
    await expect(page.locator('h1')).toContainText('A new Web3 payment')
    await expect(page.locator('button:has-text("EN")')).toBeVisible()

    // Verify localStorage updated
    const storedData = await page.evaluate(() => localStorage.getItem('UNIONE_LOCALE_PREFERENCE'))
    const storedPreference = JSON.parse(storedData || '{}')
    expect(storedPreference.locale).toBe('en')
  })

  test('T032: should handle bidirectional switching (EN → KO → EN)', async ({ page }) => {
    // Start with English
    await page.goto('http://localhost:3003/en')
    await expect(page.locator('h1')).toContainText('A new Web3 payment')

    // Switch to Korean
    await page.locator('button:has-text("EN")').click()
    await page.locator('button:has-text("한국어")').click()
    await expect(page).toHaveURL('http://localhost:3003/ko')
    await expect(page.locator('h1')).toContainText('하나의 플랫폼에서')

    // Verify localStorage is Korean
    let storedData = await page.evaluate(() => localStorage.getItem('UNIONE_LOCALE_PREFERENCE'))
    let storedPreference = JSON.parse(storedData || '{}')
    expect(storedPreference.locale).toBe('ko')

    // Switch back to English
    await page.locator('button:has-text("KO")').click()
    await page.locator('button:has-text("English")').click()
    await expect(page).toHaveURL('http://localhost:3003/en')
    await expect(page.locator('h1')).toContainText('A new Web3 payment')

    // Verify localStorage is English
    storedData = await page.evaluate(() => localStorage.getItem('UNIONE_LOCALE_PREFERENCE'))
    storedPreference = JSON.parse(storedData || '{}')
    expect(storedPreference.locale).toBe('en')

    // Verify checkmark is visible on selected language
    await page.locator('button:has-text("EN")').click()
    await expect(page.locator('button:has-text("English") svg')).toBeVisible()
  })
})
