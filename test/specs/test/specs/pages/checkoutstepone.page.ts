import { HomePage } from "./home.page";

class CheckoutStepOnePage extends HomePage  {
    get continue() { return $('#continue') }
    get firstnameInput() { return $('#first-name') }
    get lastnameInput() { return $('#last-name') }
    get postalcodeInput() { return $('#postal-code') }


    async clickcontinue() {
        await this.continue.click();
    }

    async setfirstname(firstname: string): Promise<void> {
        await this.firstnameInput.setValue(firstname);
    }

    async setlastname(lastname:string): Promise<void> {
        await this.lastnameInput.setValue(lastname);
    }

    async setpostalcode(postalcode:string): Promise<void> {
        await this.postalcodeInput.setValue(postalcode);
    }


}

export default new CheckoutStepOnePage();