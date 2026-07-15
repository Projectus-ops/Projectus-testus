
const { test, expect } = require('./my-setup');
//const { RegisterPage } = require('../pages/RegisterPage');

const randomString = Math.random().toString(36).substring(2);

test('register', async ({ homePage, RegisterPage }) => {
  // Expect a title "to contain" a substring.
  await RegisterPage.gotoRegisterPage();
  await RegisterPage.FillUpRegister('John', 'Doe', `john.doe${randomString}@example.com`, 'Password123!');
});

test('login', async ({ homePage, RegisterPage }) => {
  await expect(homePage).toHaveTitle(/Demo/);

});

test('login', async ({ homePage, RegisterPage }) => {
  await expect(homePage).toHaveTitle(/Demo/);

});

test('has title', async ({ homePage }) => {
  // Expect a title "to contain" a substring.
  await expect(homePage).toHaveTitle(/Demo/);
});
