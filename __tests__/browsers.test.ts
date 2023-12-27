import { expect, test } from '@playwright/test';

import _config from '../_config';

test('Test browsers', async ({ page }) => {
  await page.goto(`http://${_config.server.host}:${_config.server.port}`);

  await expect(page).toHaveTitle(_config.metadata.title);
});
