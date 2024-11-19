import { expect, browser, $ } from '@wdio/globals';
import * as fs from 'fs';
import * as path from 'path';
import { DOWNLOADS_DIR } from '../../../../wdio.conf';


describe('Test 1: Check that the basket is empty after a succsessfull purchase', () => {
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
        expect: $('#shopping-cart-badge').isDisplayed, false
        expect: $('#shopping-cart-empty').isDisplayed, true

    });
})


describe('Test 2: Check before proceeding checkout than both selected items are in teh basket', () => {
    it('should login with provided creds', async () => {
        await browser.url('https://www.saucedemo.com')
        await $('#user-name').setValue('visual_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()
        await $('#add-to-cart-sauce-labs-backpack').click()
        await $('#add-to-cart-sauce-labs-bike-light').click()
        await $('#shopping_cart_container').click()
        expect: ($$('#item_4_title_link,#item_0_title_link')).getElements, true
    });
})


describe('Test 3: Check the basket is empty after an item has been deleted from the basket', () => {
    it('should login with provided creds', async () => {
        await browser.url('https://www.saucedemo.com')

        await $('#user-name').setValue('visual_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()
        await $('#remove-sauce-labs-backpack').click()
        expect: $('#shopping-cart-badge').isDisplayed, false
        expect: $('#shopping-cart-empty').isDisplayed, true
    });
})


describe('Test 4: Check that the error message is displayed after an attempt to login with invalid password', () => {
    it('should login with provided creds', async () => {
        await browser.url('https://www.saucedemo.com')

        await $('#user-name').setValue('visual_user')
        await $('#password').setValue('secret')
        await $('#login-button').click()
        expect: $('#Epic sadface: Username and password do not match any user in this service').isDisplayed, true
        expect: $('#Products').isDisplayed, false
    });
})


