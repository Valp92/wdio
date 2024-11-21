import productsPage from "../../test/specs/pages/products.page";
import itemPage from "../../test/specs/pages/item.page";


    it('Check that the "Back to Products" button is displayed via selected item cart', async () => {
        await productsPage.open, 3000;
        await productsPage.clickAddToCartButton
        await expect(itemPage.clickBackToProducts).toBeDisplayed
    });