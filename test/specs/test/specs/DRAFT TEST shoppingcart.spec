import productsPage from "../../test/specs/pages/products.page";
import checkoutsteponePage from "./pages/checkoutstepone.page";
import shoppingcartPage from "./pages/shoppingcart.page";


    it('Check that the "Checkout" button is displayed on the shopping cart', async () => {
        await productsPage.open, 3000;
        await productsPage.clickAddToCartButton, 3000
        await expect(shoppingcartPage.clickCheckout).toBeDisplayed, 3000
        await shoppingcartPage.clickCheckout, 3000
        await checkoutsteponePage.open, 3000

    })