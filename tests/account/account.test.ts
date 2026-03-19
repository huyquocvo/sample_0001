// tests/account/account.spec.ts

import { test, expect } from "@playwright/test";

test.describe("validate standard user account", () => {
  test.use({ storageState: ".auth/standard_user.json" });
  test("validate standard user account", async ({ page }) => {
    await page.goto('/inventory.html');
    await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();
    
  });
});

test.describe("validate with problem user account", () => {
  test.use({ storageState: ".auth/problem_user.json" });
  test("validate with problem user account", async ({ page }) => {
    await page.goto('/inventory.html');
    await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();
  });
});

test.describe("Validate with performance glitch account", () => {
  test.use({ storageState: ".auth/performance_glitch_user.json" });
  test("Validate with performance glitch account", async ({ page }) => {
    await page.goto('/inventory.html');
    await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();
  });
});