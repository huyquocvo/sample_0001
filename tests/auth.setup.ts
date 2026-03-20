// tests/auth.setup.ts

// Save your storage state to a file in the .auth directory via setup test
import { test as setup, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

let standard_user = process.env.STANDARD_USER as string;
let standard_user_password = process.env.STANDARD_PASSWORD as string;
const standard_user_File = ".auth/standard_user.json";

 let problem_user = process.env.PROBLEM_USER as string;
 let problem_password = process.env.PROBLEM_PASSWORD as string;
 const problem_user_File = ".auth/problem_user.json";

 let performance_glitch_user = process.env.PERFORMANCE_GLITCH_USER as string;
 let performance_glitch_password = process.env.PERFORMANCE_GLITCH_PASSWORD as string;
 const performance_glitch_user_File = ".auth/performance_glitch_user.json";

 let error_user = process.env.ERROR_USER as string;
 let error_password = process.env.ERROR_PASSWORD as string;
 const error_user_File = ".auth/error_user.json";

 let visual_user = process.env.ERROR_USER as string;
 let visual_password = process.env.ERROR_PASSWORD as string;
 const visual_user_File = ".auth/visual_user.json";

setup("Create standard user Auth", async ({ page, context }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  await loginPage.login(standard_user, standard_user_password);
  await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();
  await context.storageState({ path: standard_user_File });
});

setup("Create problem user Auth", async ({ page, context }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  await loginPage.login(problem_user, problem_password);
  await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();

  await context.storageState({ path: problem_user_File });
});

setup("Create performance glitch user Auth", async ({ page, context }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  await loginPage.login(performance_glitch_user, performance_glitch_password);
  await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();
  await context.storageState({ path: performance_glitch_user_File });
});
setup("Create error user Auth", async ({ page, context }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  await loginPage.login(error_user, error_password);
  await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();
  await context.storageState({ path: error_user_File });
});

setup("Create visual user Auth", async ({ page, context }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  await loginPage.login(visual_user, visual_password);
  await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();
  await context.storageState({ path: visual_user_File });
});