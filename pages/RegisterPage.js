const { test, expect } = require('@playwright/test');
//const { test, expect } = require('./my-setup');

  
  export class RegisterPage {

    constructor(page) {
    this.page = page;
    this.maleRadio = page.getByRole('radio', { name: 'Male', exact: true });
    this.femaleRadio = page.getByRole('radio', { name: 'Female' });
    this.firstNameInput = page.getByRole('textbox', { name: 'First name:' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last name:' });
    this.emailInput = page.getByRole('textbox', { name: 'Email:' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password:', exact: true });
    this.confirmPasswordInput = page.getByRole('textbox', { name: 'Confirm password:' });
    }

    async gotoRegisterPage() {
    await this.page.getByRole('link', { name: 'Register' }).click();
    await expect(this.page).toHaveTitle(/Demo Web Shop/);
    }

    async FillUpRegister(firstName, lastName, email, password) {
    await expect(this.page.getByRole('heading', { name: 'Register' })).toBeVisible();
    await this.maleRadio.check();
    await this.femaleRadio.check();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(password);
    await this.page.getByRole('button', { name: 'Register' }).click();
    await this.page.getByText('Your registration completed').click();
    await this.page.getByRole('button', { name: 'Continue' }).click();
}

}
