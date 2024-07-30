import { title } from "process";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {

    get elements () {
        return {
            buttons: {
                placeOrder: '.btn-success',
                purchase: '//button[contains(text(),"Purchase")]'

            },
            fields: {
                name: '#name',
                country: '#country',
                city: '#city',
                card: '#card',
                month: '#month',
                year: '#year'
            },
            headings: {
                title: '//h2[text()="Thank you for your purchase!"]'
            }
        }
    }

    async clickOnPlaceOrder () {
        await this.clicOn(this.elements.buttons.placeOrder);
    }

    async clickOnPurchase () {
        await this.clicOn(this.elements.buttons.purchase);
    }

    async fillFieldPlaceOrderName (value: string) {
        await this.fillField(this.elements.fields.name, value);
    }

    async fillFieldPlaceOrderCountry (value: string) {
        await this.fillField(this.elements.fields.country, value);
    }

    async fillFieldPlaceOrderCity (value: string) {
        await this.fillField(this.elements.fields.city, value);
    }

    async fillFieldPlaceOrderCard (value: string) {
        await this.fillField(this.elements.fields.card, value);
    }

    async fillFieldPlaceOrderMonth (value: string) {
        await this.fillField(this.elements.fields.month, value);
    }

    async fillFieldPlaceOrderYear (value: string) {
        await this.fillField(this.elements.fields.year, value);
    }

    async confirmationMessageVisible () {
        await this.expectVisible(this.elements.headings.title);
    }

    async validateMessageToEqual (titleExpected: string) {
        await this.toEquals(this.elements.headings.title, titleExpected);
    }
}