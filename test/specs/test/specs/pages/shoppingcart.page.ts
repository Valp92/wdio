import { HomePage } from "./home.page";

class ShoppingCartPage extends HomePage  {
    get Checkout() { return $('#checkout') }
    get Basket() { return $('#shopping_cart_container') }
    get continueshopping() { return $('#continue-shopping') }

    async clickCheckout() {
        await this.Checkout.click();
    }

    async clickBasket() {
        await this.Basket.click();
    }

    async clickcontinueshopping() {
        await this.continueshopping.click();
    }
}

export default new ShoppingCartPage();