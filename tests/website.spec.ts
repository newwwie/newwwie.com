import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('localhost:9000');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Newie | an open community of digital creators in newcastle nsw.");
});
