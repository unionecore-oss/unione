import { test, expect } from '@playwright/test'

/**
 * E2E Tests for Page Translations (T050-T054)
 * Tests all pages to verify proper translation in both English and Korean
 */

test.describe('Pages Translation Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Clear localStorage before each test
    await page.goto('http://localhost:3003/en')
    await page.evaluate(() => localStorage.clear())
  })

  test('T050: Card page should display proper translations in both languages', async ({ page }) => {
    // Test English version
    await page.goto('http://localhost:3003/en/card')

    // Verify English content
    await expect(page.locator('h1')).toContainText('Unione Card opens the door to borderless payments')
    await expect(page.locator('text=Enjoy the convenience of instant')).toBeVisible()
    await expect(page.locator('button:has-text("EN")')).toBeVisible()

    // Verify Features Breakdown section
    await expect(page.locator('text=Where Unione Card is used')).toBeVisible()
    await expect(page.locator('text=Countries Worldwide')).toBeVisible()

    // Switch to Korean
    await page.locator('button:has-text("EN")').click()
    await page.locator('button:has-text("한국어")').click()
    await expect(page).toHaveURL('http://localhost:3003/ko/card')

    // Verify Korean content
    await expect(page.locator('h1')).toContainText('Unione 카드가 국경 없는 결제의 문을 엽니다')
    await expect(page.locator('text=전 세계 어디서든')).toBeVisible()
    await expect(page.locator('button:has-text("KO")')).toBeVisible()

    // Verify Features Breakdown section in Korean
    await expect(page.locator('text=Unione 카드 사용처')).toBeVisible()
    await expect(page.locator('text=개국 이상')).toBeVisible()
  })

  test('T051: Wallet page should display proper translations in both languages', async ({ page }) => {
    // Test English version
    await page.goto('http://localhost:3003/en/platform/wallet')

    // Verify English content
    await expect(page.locator('h1')).toContainText('Your Digital Safe. Your Gateway to Financial Freedom.')
    await expect(page.locator('button:has-text("EN")')).toBeVisible()

    // Verify Security section
    await expect(page.locator('h2:has-text("Custodian Protection")')).toBeVisible()
    await expect(page.locator('text=Assets are securely held')).toBeVisible()

    // Switch to Korean
    await page.locator('button:has-text("EN")').click()
    await page.locator('button:has-text("한국어")').click()
    await expect(page).toHaveURL('http://localhost:3003/ko/platform/wallet')

    // Verify Korean content
    await expect(page.locator('h1')).toContainText('당신의 디지털 금고. 금융 자유로의 관문.')
    await expect(page.locator('button:has-text("KO")')).toBeVisible()

    // Verify Security section in Korean
    await expect(page.locator('h2:has-text("수탁자 보호")')).toBeVisible()
    await expect(page.locator('text=자산은 규제를 받는')).toBeVisible()
  })

  test('T052: Earn page should display proper translations in both languages', async ({ page }) => {
    // Test English version
    await page.goto('http://localhost:3003/en/platform/earn')

    // Verify English content
    await expect(page.locator('h1')).toContainText('Earn More with Unione')
    await expect(page.locator('button:has-text("EN")')).toBeVisible()

    // Verify features section
    await expect(page.locator('h2:has-text("Flexible Entry Amounts")')).toBeVisible()
    await expect(page.locator('text=Start earning with any amount')).toBeVisible()

    // Switch to Korean
    await page.locator('button:has-text("EN")').click()
    await page.locator('button:has-text("한국어")').click()
    await expect(page).toHaveURL('http://localhost:3003/ko/platform/earn')

    // Verify Korean content
    await expect(page.locator('h1')).toContainText('Unione과 함께 더 많이 적립하세요')
    await expect(page.locator('button:has-text("KO")')).toBeVisible()

    // Verify features section in Korean
    await expect(page.locator('h2:has-text("유연한 입금 금액")')).toBeVisible()
    await expect(page.locator('text=어떤 금액으로든 시작하세요')).toBeVisible()
  })

  test('T053: Reward page should display proper translations in both languages', async ({ page }) => {
    // Test English version
    await page.goto('http://localhost:3003/en/platform/reward')

    // Verify English content
    await expect(page.locator('h1')).toContainText('Join the Reward Program')
    await expect(page.locator('button:has-text("EN")')).toBeVisible()

    // Verify features cards
    await expect(page.locator('text=Maximize Your Rewards')).toBeVisible()
    await expect(page.locator('text=Mobile-First Experience')).toBeVisible()
    await expect(page.locator('text=User-Friendly Interface')).toBeVisible()

    // Switch to Korean
    await page.locator('button:has-text("EN")').click()
    await page.locator('button:has-text("한국어")').click()
    await expect(page).toHaveURL('http://localhost:3003/ko/platform/reward')

    // Verify Korean content
    await expect(page.locator('h1')).toContainText('리워드 프로그램에 참여하세요')
    await expect(page.locator('button:has-text("KO")')).toBeVisible()

    // Verify features cards in Korean
    await expect(page.locator('text=리워드 극대화')).toBeVisible()
    await expect(page.locator('text=모바일 우선 경험')).toBeVisible()
    await expect(page.locator('text=사용자 친화적 인터페이스')).toBeVisible()
  })

  test('T054: About Us page should display proper translations in both languages', async ({ page }) => {
    // Test English version
    await page.goto('http://localhost:3003/en/about-us')

    // Verify English content
    await expect(page.locator('h1')).toContainText('Our Vision')
    await expect(page.locator('text=A world where financial freedom is accessible')).toBeVisible()
    await expect(page.locator('button:has-text("EN")')).toBeVisible()

    // Verify About Unione section
    await expect(page.locator('h2:has-text("About Unione")')).toBeVisible()
    await expect(page.locator('text=At Unione, we believe in building bridges')).toBeVisible()

    // Verify Core Values
    await expect(page.locator('h3:has-text("Security First")')).toBeVisible()
    await expect(page.locator('h3:has-text("Lightning Fast")')).toBeVisible()
    await expect(page.locator('h3:has-text("Global Access")')).toBeVisible()
    await expect(page.locator('h3:has-text("Premium Experience")')).toBeVisible()

    // Switch to Korean
    await page.locator('button:has-text("EN")').click()
    await page.locator('button:has-text("한국어")').click()
    await expect(page).toHaveURL('http://localhost:3003/ko/about-us')

    // Verify Korean content
    await expect(page.locator('h1')).toContainText('우리의 비전')
    await expect(page.locator('text=모두가 금융 자유에 접근할 수 있는 세상')).toBeVisible()
    await expect(page.locator('button:has-text("KO")')).toBeVisible()

    // Verify About Unione section in Korean
    await expect(page.locator('h2:has-text("Unione 소개")')).toBeVisible()
    await expect(page.locator('text=Unione은 전통 금융과 분산 금융 사이에 다리를 놓는다')).toBeVisible()

    // Verify Core Values in Korean
    await expect(page.locator('h3:has-text("보안 우선")')).toBeVisible()
    await expect(page.locator('h3:has-text("초고속 처리")')).toBeVisible()
    await expect(page.locator('h3:has-text("글로벌 접근성")')).toBeVisible()
    await expect(page.locator('h3:has-text("프리미엄 경험")')).toBeVisible()
  })

  test('All pages should maintain Korean locale during navigation', async ({ page }) => {
    // Start with Korean homepage
    await page.goto('http://localhost:3003/ko')
    await expect(page.locator('button:has-text("KO")')).toBeVisible()

    // Navigate to Card page
    await page.locator('a[href="/ko/card"]').first().click()
    await expect(page).toHaveURL(/\/ko\/card/)
    await expect(page.locator('button:has-text("KO")')).toBeVisible()
    await expect(page.locator('h1')).toContainText('Unione 카드')

    // Navigate to Wallet page
    await page.locator('button:has-text("플랫폼")').click()
    await page.locator('a[href="/ko/platform/wallet"]').first().click()
    await expect(page).toHaveURL(/\/ko\/platform\/wallet/)
    await expect(page.locator('button:has-text("KO")')).toBeVisible()
    await expect(page.locator('h1')).toContainText('디지털 금고')

    // Navigate to Earn page
    await page.locator('button:has-text("플랫폼")').click()
    await page.locator('a[href="/ko/platform/earn"]').first().click()
    await expect(page).toHaveURL(/\/ko\/platform\/earn/)
    await expect(page.locator('button:has-text("KO")')).toBeVisible()
    await expect(page.locator('h1')).toContainText('더 많이 적립하세요')

    // Navigate to Reward page
    await page.locator('button:has-text("플랫폼")').click()
    await page.locator('a[href="/ko/platform/reward"]').first().click()
    await expect(page).toHaveURL(/\/ko\/platform\/reward/)
    await expect(page.locator('button:has-text("KO")')).toBeVisible()
    await expect(page.locator('h1')).toContainText('리워드 프로그램')

    // Navigate to About Us page
    await page.locator('a[href="/ko/about-us"]').first().click()
    await expect(page).toHaveURL(/\/ko\/about-us/)
    await expect(page.locator('button:has-text("KO")')).toBeVisible()
    await expect(page.locator('h1')).toContainText('우리의 비전')
  })
})
