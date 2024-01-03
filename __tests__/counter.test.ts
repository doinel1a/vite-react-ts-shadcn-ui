import config from '_config';
import test, { expect } from '@playwright/test';

test.describe('Test counter', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`http://${config.server.host}:${config.server.port}`);
  });

  test('It should start count at zero', async ({ page }) => {
    const count = page.getByTestId('count');

    await expect(count).toHaveText('0');
  });

  test('It should increase count by one', async ({ page }) => {
    const count = page.getByTestId('count');
    const increaseCountButton = page.getByTestId('increase-count');

    await increaseCountButton.click();

    await expect(count).toHaveText('1');
  });

  test('It should decrease count by one', async ({ page }) => {
    const count = page.getByTestId('count');
    const decreaseCountButton = page.getByTestId('decrease-count');

    await decreaseCountButton.click();

    await expect(count).toHaveText('-1');
  });
});
