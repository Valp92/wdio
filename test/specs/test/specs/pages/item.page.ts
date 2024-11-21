import { HomePage } from "./home.page";


class ItemPage extends HomePage {
    get itemContainers() { return $('div.inventory_item') }
    get itemName() { return $('div.inventory_item_name') }
    get itemPrice() { return $('div.inventory_item_price') }
    get itemDescription() { return $('div.inventory_item_desc') }
    get itemImage() { return $('img.inventory_item_img') }
    get BackToProducts() { return $('button.btn_secondary')} 

    async clickBackToProducts() {
        await this.BackToProducts.click();
    }
}

export default new ItemPage();