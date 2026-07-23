import { When } from "@cucumber/cucumber";
import { CheckoutPage } from "../pages/checkout-page";
import { CustomWorld } from "../support/world";


When('the user submits payment with credit card details', async function (this: CustomWorld, dataTable) {
  const paymentDetails = dataTable.rowsHash();
  const checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.submitPayment(
    paymentDetails.cardholderName,
    paymentDetails.cardNumber,
    paymentDetails.expiryDate,
    paymentDetails.cvv
  );
}); 
