
import { test as base } from '@playwright/test';

MyFixture = {

    GoToPage: any
}
export const test = base.extend<MyFixture>({

    GoToPage: async ({page}, use ) =>{

    console.log("start")
    await page.goto('https://playwright.dev/');
    await use(page)
    
    }

})