// Description: Get data from an API mocked using MSW

import { expect, test } from 'playwright-test-coverage';

test('receives a mocked response to a REST API request', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const greetingText = page.getByTestId('greeting');
  await greetingText.isVisible();

  await expect(greetingText).toHaveText('Hello, John Maverick !');
});

test('receives a mocked response to a GraphQL API request', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const moviesList = page.getByTestId('graphql-response');
  await moviesList.isVisible();
  const movieItems = await moviesList.locator('li').getByLabel('Movie title').allTextContents();
  expect(movieItems).toEqual([
    'The Lord of The Rings',
    'The Matrix',
    'Star Wars: Empire Strikes Back'
  ]);
});
