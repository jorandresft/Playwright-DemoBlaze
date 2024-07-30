import { BasePage } from "./BasePage";

export class ProductMonitorPage extends BasePage{

    get elements () {
        return {
            details: {
                title: '//h2[text()="Apple monitor 24"]',
                price: '//h3[text()="$400"]',
            },
            buttons: {
                addTocart: '.btn-success'
            }
        }
    }

    async confirmationTitleVisible () {
        await this.expectVisible(this.elements.details.title);
    }

    async validateTitleToEqual (textExpected: string) {
        await this.toEquals(this.elements.details.title, textExpected);
    }

    async confirmationPriceVisible () {
        await this.expectVisible(this.elements.details.title);
    }

    async validatePriceToEqual (priceExpected: string) {
        await this.toEquals(this.elements.details.price, priceExpected);
    }

    async clickOnAddToCart () {
        await this.clicOn(this.elements.buttons.addTocart);
    }
}