import { test, expect } from '@playwright/test';

test('has title', async ({ page,context }) => {

  const username = process.env.USER_NAME as string;
  const password = process.env.PASSWORD as string;

  await page.goto('/auth/login/');
  await page.getByTestId("email").fill(username);
  await page.getByTestId("password").fill(password);
  await page.getByTestId("login-submit").click();
  await page
    .getByRole('listitem')
    .filter({ hasText: 'Home' }).isVisible();
    const adminAuthFile = ".auth/admin.json";
    await context.storageState({ path: adminAuthFile });
  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Practice Software Testing/);
  expect(username).toBe("admin@practicesoftwaretesting.com");
  expect(password).toBe("welcome01");

});

test('get started link', async ({ page }) => {
  
  await page.goto('/auth/login/');

  // Click the get started link.
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();

  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
