import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Practice Software Testing/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login/');

  // Click the get started link.
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();

  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
