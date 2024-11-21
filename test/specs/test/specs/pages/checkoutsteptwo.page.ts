import { HomePage } from "./home.page";

class CheckoutStepTwoPage extends HomePage  {
    get finish() { return $('#finish') }
    get cancel() { return $('#finish') }


    async clickfinish() {
        await this.finish.click();
    }


    async clickcancel() {
        await this.cancel.click();
    }
   
}

export default new CheckoutStepTwoPage();