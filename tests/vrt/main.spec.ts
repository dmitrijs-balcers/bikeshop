import {expect, test} from '@playwright/test';


test.describe('Landing Page', () => {
  test('should have valid UI', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveScreenshot();
  });
});
