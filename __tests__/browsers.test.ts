import { expect, test } from '@playwright/test';

test('Test browsers', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Vite React.js TypeScript & Shadcn/ui — Template');
});
