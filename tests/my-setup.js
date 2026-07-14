const { test, expect } = require('@playwright/test');
import { RegisterPage } from '../pages/RegisterPage';

exports.expect = expect;
exports.test = test.extend({

    homePage: async ({page}, use ) =>{
    await page.goto('https://demowebshop.tricentis.com/');
    await use(page)
    },

    RegisterPage: async ({page}, use) => {
        await use(new RegisterPage(page));
    },

})