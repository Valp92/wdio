import checkoutsteponePage from "./pages/checkoutstepone.page";
import loginPage from "./pages/login.page";
import productsPage from "./pages/products.page";
import checkoutsteptwoPage from "./pages/checkoutsteptwo.page";
import shoppingcartPage from "./pages/shoppingcart.page";



describe('WDIO, page objects', () => {

    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com')
        await loginPage.setUsername('standard_user');
        await loginPage.setPassword('secret_sauce');
        await loginPage.clickLoginButton(), 3000
    });

    it('test1: purchase 1 item', async () => {
        await productsPage.clickAddToCartButton('Sauce Labs Backpack')
        await $('#shopping_cart_container').click()
        await $('#checkout').click()
        await checkoutsteponePage.setfirstname('Test')
        await checkoutsteponePage.setlastname('SurnameTest')
        await checkoutsteponePage.setpostalcode('12345')
        await checkoutsteponePage.clickcontinue
        await checkoutsteptwoPage.clickfinish
        expect: $('#back-to-products').isDisplayed, 5000
    })

    it('test2: add 2 items to the basket, remove one from the basket, complete purchase', async () => {
        await productsPage.clickAddToCartButton('Sauce Labs Backpack'), 3000
        await productsPage.clickAddToCartButton('Sauce Labs Fleece Jacket')
        await $('#shopping_cart_container').click()
        await $('#remove-sauce-labs-backpack').click()
        await $('#checkout').click()
        await checkoutsteponePage.setfirstname('Test')
        await checkoutsteponePage.setlastname('SurnameTest')
        await checkoutsteponePage.setpostalcode('12345'),3000
        await checkoutsteponePage.clickcontinue, 3000
        await checkoutsteptwoPage.clickfinish
        expect: $('#shopping-cart-empty').isDisplayed, true

    })

    it('test3: add 2 items to the basket, back, add one more, complete purchase', async () => {
        await productsPage.clickAddToCartButton('Sauce Labs Backpack'), 3000
        await productsPage.clickAddToCartButton('Sauce Labs Fleece Jacket'), 300
        await $('#shopping_cart_container').click()
        await $('#continue-shopping').click()
        await productsPage.clickAddToCartButton('Sauce Labs Bolt T-Shirt'), 3000
        await $('#shopping_cart_container').click(), 3000
        await $('#checkout').click()
        await checkoutsteponePage.setfirstname('Test')
        await checkoutsteponePage.setlastname('SurnameTest')
        await checkoutsteponePage.setpostalcode('12345'),3000
        await checkoutsteponePage.clickcontinue, 3000
        await checkoutsteptwoPage.clickfinish
        expect: $('#shopping-cart-empty').isDisplayed, true

    })


    it('test4: add 2 items to basket, try to proceed with empty checkout page, check the error', async () => {
        await productsPage.clickAddToCartButton('Sauce Labs Backpack'), 3000
        await productsPage.clickAddToCartButton('Sauce Labs Fleece Jacket'), 300
        await $('#shopping_cart_container').click()
        await $('#checkout').click()
        await checkoutsteponePage.clickcontinue, 3000
        expect: $('#Error: First Name is required').isDisplayed, true

    })


    it('test5: ', async () => {
        await productsPage.clickAddToCartButton('Sauce Labs Backpack'), 3000
        await $('#shopping_cart_container').click()
        await $('#checkout').click()
        await checkoutsteponePage.setfirstname('Test')
        await checkoutsteponePage.setlastname('SurnameTest')
        await checkoutsteponePage.setpostalcode('12345')
        await checkoutsteponePage.clickcontinue, 3000
        await $('#shopping_cart_container').click()
        await $('#remove-sauce-labs-backpack').click()
        await $('#checkout').click()
        await checkoutsteponePage.setfirstname('Test')
        await checkoutsteponePage.setlastname('SurnameTest')
        await checkoutsteponePage.setpostalcode('12345'),3000
        await checkoutsteponePage.clickcontinue, 3000
        await checkoutsteptwoPage.clickfinish
        expect: $('#shopping-cart-empty').isDisplayed, true


    })})