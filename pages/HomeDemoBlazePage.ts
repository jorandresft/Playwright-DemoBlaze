import { BasePage } from "./BasePage";

export class HomeDemoBlazePage extends BasePage{

    get elements(){
        return{
            topMenu: {
                home: '//a[text()="Home "]',
                contact: '//a[text()="Contact"]',
                aboutUs: '//a[text()="About us"]',
                cart: '//a[text()="Cart"]',
                logIn: '//a[text()="Log in"]',
                signUp: '//a[text()="Sign up"]',
            },
            category: {
                phones: '//a[text()="Phones"]',
                laptops: '//a[text()="Laptops"]',
                monitors: '//a[text()="Monitors"]',
            }
        }
    }

    async confirmationHomeMenu () {
        await this.expectVisible(this.elements.topMenu.home);
    }

    async confirmationContactMenu () {
        await this.expectVisible(this.elements.topMenu.contact);
    }

    async confirmationAboutUsMenu () {
        await this.expectVisible(this.elements.topMenu.contact);
    }

    async confirmationCartMenu () {
        await this.expectVisible(this.elements.topMenu.contact);
    }
    
    async confirmationLogintMenu () {
        await this.expectVisible(this.elements.topMenu.contact);
    }

    async confirmationSignUptMenu () {
        await this.expectVisible(this.elements.topMenu.contact);
    }

    async confirmationPhonesCategory () {
        await this.expectVisible(this.elements.category.phones);
    }

    async confirmationlaptopsCategory () {
        await this.expectVisible(this.elements.category.laptops);
    }

    async confirmationMonitorsCategory () {
        await this.expectVisible(this.elements.category.monitors);
    }

    async clickOnMonitorsCategory () {
        await this.clicOn(this.elements.category.monitors);
    }

    async clickOnCartMenu () {
        await this.clicOn(this.elements.topMenu.cart);
    }
}