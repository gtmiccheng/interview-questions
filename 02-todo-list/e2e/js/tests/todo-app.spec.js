// @ts-check
const { test, expect } = require('@playwright/test');

const testHost = '/';

test('has title', async ({ page }) => {
  await page.goto(testHost);

  // Expect a title "to contain" a substring.
  const locator = page.locator('h1');
  await expect(locator).toHaveText(/To Do List/);
});
