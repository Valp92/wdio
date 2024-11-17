import { expect, browser, $ } from '@wdio/globals'

describe('Test 1: Login, add to basket, check badge icon', () => {
    it('should login with provided creds', async () => {
        await browser.url('https://www.saucedemo.com')

        await $('#user-name').setValue('visual_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()
        await $('#add-to-cart-sauce-labs-backpack').click()
        await $('#shopping-cart-badge').isDisplayed, true
    });
})


describe('Test 2: Login, add to card, remove from basket, check badge icon', () => {
    it('should login with provided creds', async () => {
        await browser.url('https://www.saucedemo.com')

        await $('#user-name').setValue('visual_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()
        await $('#remove-sauce-labs-backpack').click()
        await $('#shopping-cart-badge').isDisplayed, false
    });
})


describe('Test 3: Login, add to card, check badge icon, complete purchase', () => {
    it('should login with provided creds', async () => {
        await browser.url('https://www.saucedemo.com')

        await $('#user-name').setValue('visual_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()
        await $('#add-to-cart-sauce-labs-backpack').click()
        await $('#shopping-cart-badge').isDisplayed, true
        await $('#shopping_cart_container').click()
        await $('#checkout').click()
        await $('#first-name').setValue('Test')
        await $('#last-name').setValue('SurnameTest')
        await $('#postal-code').setValue('12345')
        await $('#continue').click()
        await $('#finish').click()
        await $('#shopping-cart-badge').isDisplayed, false
    });
})



describe('Test 4: Login, add to card, check badge icon, back to the purchase list', () => {
    it('should login with provided creds', async () => {
        await browser.url('https://www.saucedemo.com')

        await $('#user-name').setValue('visual_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()
        await $('#add-to-cart-sauce-labs-backpack').click()
        await $('#shopping-cart-badge').isDisplayed, true
        await $('#shopping_cart_container').click()   
        await $('#continue-shopping').click()
    });
})


