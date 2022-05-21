import {expect, test} from '@playwright/test';


test.describe('Landing Page', () => {
  test('should have valid UI', async ({ page }) => {
    await page.goto('http://localhost:1234');
    await expect(page).toHaveScreenshot();
  });
});
