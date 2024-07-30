import { BasePage } from "../pages/BasePage";
import { HomeDemoBlazePage } from "../pages/HomeDemoBlazePage";
import { test, expect, Page } from "@playwright/test";
import { MonitorsPage } from "../pages/MonitorsPage";
import { ProductMonitorPage } from "../pages/ProductMonitorsPage";
import { CartPage } from "../pages/CartPage";

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

    test('Select product of Monitors category', async ({ page }) => {
        const demoBlaze = new HomeDemoBlazePage(page);
        const monitorPage = new MonitorsPage(page);

        await test.step('Click on Monitors category', async() => {
            await demoBlaze.clickOnMonitorsCategory();
        });

        await test.step('Select product of monitors category', async() => {
            await monitorPage.clickOnProductMonitor();
        });
    });

    test('Validate that the product title text is the same', async ({ page }) => {
        const demoBlaze = new HomeDemoBlazePage(page);
        const monitorPage = new MonitorsPage(page);
        const productMonitorPage = new ProductMonitorPage(page);

        await test.step('Click on Monitors category', async() => {
            await demoBlaze.clickOnMonitorsCategory();
        });

        await test.step('Select product of monitors category', async() => {
            await monitorPage.clickOnProductMonitor();
        });

        await test.step('Validation title of product', async() => {
            await productMonitorPage.confirmationTitleVisible();
        });

        await test.step('Validate text is equal', async() => {
            await productMonitorPage.validateTitleToEqual('Apple monitor 24');
        });
    });

    test('Validate that the product priece is the same', async ({ page }) => {
        const demoBlaze = new HomeDemoBlazePage(page);
        const monitorPage = new MonitorsPage(page);
        const productMonitorPage = new ProductMonitorPage(page);

        await test.step('Click on Monitors category', async() => {
            await demoBlaze.clickOnMonitorsCategory();
        });

        await test.step('Select product of monitors category', async() => {
            await monitorPage.clickOnProductMonitor();
        });

        await test.step('Validation priece of product', async() => {
            await productMonitorPage.confirmationPriceVisible();
        });

        await test.step('Validate text is equal', async() => {
            await productMonitorPage.validatePriceToEqual('$400 *includes tax');
        });
    });

    test('Validate your purchase', async ({ page }) => {
        const demoBlaze = new HomeDemoBlazePage(page);
        const monitorPage = new MonitorsPage(page);
        const productMonitorPage = new ProductMonitorPage(page);
        const cartPage = new CartPage(page);

        await test.step('Click on Monitors category', async() => {
            await demoBlaze.clickOnMonitorsCategory();
        });

        await test.step('Select product of monitors category', async() => {
            await monitorPage.clickOnProductMonitor();
        });

        await test.step('Click on Add to cart and Cart menu', async() => {
            await productMonitorPage.clickOnAddToCart();
            await demoBlaze.clickOnCartMenu();
        });

        await test.step('Click on Place Order', async() => {
            await cartPage.clickOnPlaceOrder();
        });

        await test.step('Complete purchase', async() => {
            await cartPage.fillFieldPlaceOrderName('Cosme');
            await cartPage.fillFieldPlaceOrderCountry('Colombia');
            await cartPage.fillFieldPlaceOrderCity('Medellín');
            await cartPage.fillFieldPlaceOrderCard('5555 5555 5555 5555');
            await cartPage.fillFieldPlaceOrderMonth('1');
            await cartPage.fillFieldPlaceOrderYear('12');
            await cartPage.clickOnPurchase();
        });

        await test.step('Confirmation message for purchase', async() => {
            await cartPage.confirmationMessageVisible();
            await cartPage.validateMessageToEqual('Thank you for your purchase!');
        });
    });
});