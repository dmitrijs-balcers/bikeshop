import { expect, test } from "@playwright/test";
import { storiesNames } from "../../stories/stories";

test.describe("Components tests", () => {
    storiesNames.map((story) => {
        test(`should render ${story} story`, async ({ page }) => {
            await page.goto(
                `/?fullscreen=true&story=${encodeURIComponent(story)}`,
            );
            await expect(page).toHaveScreenshot();
        });
    });
});
