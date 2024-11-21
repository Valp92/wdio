import loginPage from "../../test/specs/pages/login.page";
import productsPage from "../../test/specs/pages/products.page";

    it('Positive login test', async () => {
        await loginPage.open()
        await loginPage.setUsername('standard_user');
        await loginPage.setPassword('secret_sauce');
        await loginPage.clickLoginButton(), 3000
        await expect(productsPage.cartIcon).toBeDisplayed();
    })