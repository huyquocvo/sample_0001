// lib/pages/loginPage.ts

import { Locator, Page,expect } from "@playwright/test";

export class LoginPage {
  readonly txtUsername:Locator;
  readonly txtPassword:Locator;
  readonly btnLogin:Locator;

constructor(private readonly page: Page) 
    {
    this.txtUsername = this.page.getByTestId("username");
    this.txtPassword = this.page.getByTestId("password");
    this.btnLogin = this.page.getByTestId("login-button");
    }
  async goto() 
  {
      await this.page.goto("/");
  }
  async login(email: string, password: string) {
   // await this.goto();
    await this.txtUsername.fill(email);
    await this.txtPassword.fill(password);
    await this.btnLogin.click();
  }
}