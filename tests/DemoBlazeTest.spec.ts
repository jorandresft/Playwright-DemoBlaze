import { BasePage } from "../pages/BasePage";
import { HomeDemoBlazePage } from "../pages/HomeDemoBlazePage";
import { test, expect, Page } from "@playwright/test";

test.describe('Test suite DemoBlaze', async ( ) => {

    test.beforeEach(async ({ page }) => {
        const base = new BasePage(page);
        await base.loadWeb('https://www.demoblaze.com/');
      });
    
    test('Validate Home menu', async ({ page }) => {
        const demoBlaze = new HomeDemoBlazePage(page);

        await test.step('validate Home menu', async() => {
            await demoBlaze.confirmationHomeMenu();
        });
    });

    test('Validate Contact menu', async ({ page }) => {
        const demoBlaze = new HomeDemoBlazePage(page);

        await test.step('validate Contact menu', async() => {
            await demoBlaze.confirmationContactMenu();
        });
    });

    test('Validate About Us menu', async ({ page }) => {
        const demoBlaze = new HomeDemoBlazePage(page);

        await test.step('validate About Us menu', async() => {
            await demoBlaze.confirmationContactMenu();
        });
    });

    test('Validate Cart menu', async ({ page }) => {
        const demoBlaze = new HomeDemoBlazePage(page);

        await test.step('validate Cart menu', async() => {
            await demoBlaze.confirmationContactMenu();
        });
    });

    test('Validate Log In menu', async ({ page }) => {
        const demoBlaze = new HomeDemoBlazePage(page);

        await test.step('validate Log In menu', async() => {
            await demoBlaze.confirmationContactMenu();
        });
    });

    test('Validate Sign Up menu', async ({ page }) => {
        const demoBlaze = new HomeDemoBlazePage(page);

        await test.step('validate Sign Up menu', async() => {
            await demoBlaze.confirmationContactMenu();
        });
    });

    test('Validate Phones category', async ({ page }) => {
        const demoBlaze = new HomeDemoBlazePage(page);

        await test.step('Validate Phones category', async() => {
            await demoBlaze.confirmationContactMenu();
        });
    });

    test('Validate Laptops category', async ({ page }) => {
        const demoBlaze = new HomeDemoBlazePage(page);

        await test.step('Validate Laptops category', async() => {
            await demoBlaze.confirmationContactMenu();
        });
    });

    test('Validate Monitors category', async ({ page }) => {
        const demoBlaze = new HomeDemoBlazePage(page);

        await test.step('Validate Monitors category', async() => {
            await demoBlaze.confirmationContactMenu();
        });
    });
});