import { BasePage } from "./BasePage";

export class MonitorsPage extends BasePage{

    get elements () {
        return {
            products: {
                productMonitor: '//a[text()="Apple monitor 24"]'
            }
        }
    }

    async clickOnProductMonitor () {
        await this.clicOn(this.elements.products.productMonitor);
    }
}