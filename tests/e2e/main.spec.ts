import { expect, test } from "@playwright/test";

test.describe("Landing page tests", () => {
    test(`should add to basket selected bikes`, async ({ page }) => {
        await page.goto("/");

        const cards = page.locator(dataTestId("bike-card"));

        await cards.first().click();
        await cards.nth(4).click();

        await expect(page.locator(dataTestId("items-in-cart"))).toHaveText("2");
    });
});

function dataTestId(testId: string): string {
    return `[data-testid='${testId}']`;
}
