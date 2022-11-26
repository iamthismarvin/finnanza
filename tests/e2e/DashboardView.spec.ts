import { test, expect } from '@playwright/test'

test.describe('DashboardView.vue', () => {
  test('has title and link.', async ({ page }) => {
    // Verify title exists.
    await page.goto('/')
    await expect(page).toHaveTitle(/Finnanza/)

    // Verify link exists and works.
    const goToPlaywright = page.getByRole('link', { name: 'Go to Playwright' })
    await goToPlaywright.click()
    await expect(page).toHaveURL(/.*playwright/)
  })
})
