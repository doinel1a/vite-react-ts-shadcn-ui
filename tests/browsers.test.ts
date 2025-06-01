import { expect, test } from '@playwright/test';

import config from '../_config';

test('Test browsers', async ({ page }) => {
  await page.goto(`http://${config.server.host}:${config.server.port}`);

  await expect(page).toHaveTitle(config.metadata.title);
});
