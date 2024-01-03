import type { Locator } from '@playwright/test';

import { expect, test } from '@playwright/test';

import config from '../_config';

test.describe('Test theme toggle', () => {
  let isDarkMode = false;
  let html: Locator;
  let themeDropdownContent: Locator;

  test.beforeEach(async ({ page }) => {
    await page.goto(`http://${config.server.host}:${config.server.port}`);

    html = page.locator('html');
    isDarkMode = (await html.getAttribute('class')) === 'dark' ? true : false;

    const themeToggleButton = page.getByTestId('theme-toggle');
    await themeToggleButton.click();

    themeDropdownContent = page.getByTestId('theme-dropdown-content');
  });

  test('It should turn light mode on', async () => {
    const lightThemeButton = themeDropdownContent.getByTestId('theme-light');
    await lightThemeButton.click();

    await expect(html).toHaveClass('light');
  });

  test('It should turn dark mode on', async () => {
    const darkThemeButton = themeDropdownContent.getByTestId('theme-dark');
    await darkThemeButton.click();

    await expect(html).toHaveClass('dark');
  });

  test('It should turn system mode on', async () => {
    const systemThemeButton = themeDropdownContent.getByTestId('theme-system');
    await systemThemeButton.click();

    await expect(html).toHaveClass(isDarkMode ? 'dark' : 'light');
  });
});
