// tests/auth.setup.ts

// Save your storage state to a file in the .auth directory via setup test


import { test as setup, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

let standard_user = process.env.STANDARD_USER as string;
let standard_user_password = process.env.STANDARD_PASSWORD as string;
// let adminEmail = "standard_user";
// let adminPassword = "secret_sauce";

const adminAuthFile = ".auth/standard_user.json";


 let problem_user = process.env.PROBLEM_USER as string;
 let problem_password = process.env.PROBLEM_PASSWORD as string;
// const customer01AuthFile = ".auth/problem_user.json";

// let customer02Email = process.env.CUSTOMER_02_USERNAME as string;
// let customer02Password = process.env.CUSTOMER_02_PASSWORD as string;
// const customer02AuthFile = ".auth/customer02.json";

setup("Create Admin Auth", async ({ page, context }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  await loginPage.login(standard_user, standard_user_password);
  await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();
 // expect(await loginPage.navAdminMenu.innerText()).toContain("John Doe");
  await context.storageState({ path: adminAuthFile });
});

// setup("Create Customer 01 Auth", async ({ page, context }) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.goto();

//   await loginPage.login(customer01Email, customer01Password);
//   expect(await loginPage.navUserMenu.innerText()).toContain("abc ac");

//   await context.storageState({ path: customer01AuthFile });
// });

// setup("Create Customer 02 Auth", async ({ page, context }) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.goto();

//   await loginPage.login(customer02Email, customer02Password);
//   expect(await loginPage.navUserMenu.innerText()).toContain("Jack Howe");

//   await context.storageState({ path: customer02AuthFile });
// });
