Feature: Checkout

  Background:
    Given the user is on the login page
    When the user submit credentials "demo01@demo.com" and "Welcome1"

  Scenario: User able to add product to cart
    Given the user adds product "Apple Watch" to cart
    # When the user proceeds to checkout
    # And the user submits payment with credit card details
    #  | cardholderName | John Doe         |
    #  | cardNumber     | 4242424242424242 |
    #  | expiryDate     | 12/2026          |
    #  | cvv            | 123              |
