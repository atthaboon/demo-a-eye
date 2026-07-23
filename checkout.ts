import { Given } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";
import { ProductListPage } from "../pages/product-list-page";

Given('the user adds product {string} to cart', async function (this: CustomWorld, productName: string) {
  const productListPage = new ProductListPage(this.page);
  await productListPage.addProductByName(productName);
});
