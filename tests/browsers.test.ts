import { test } from '@playwright/test';

test('Test browsers', async ({ page }) => {
  await page.goto('http://127.0.0.1:5173/');
  await page.pause();
});
