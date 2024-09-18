import { chromium, test, expect } from '@playwright/test';
import { HomePageObject } from '../PageObjects/HomePageObject';
import { ConfigureAddonsPageObject } from '../PageObjects/ConfigureAddonsPageObject';
import { ReviewAndCheckoutPageObject } from '../PageObjects/ReviewAndCheckoutPageObject';
import { OrderSummaryWidget } from '../PageObjects/OrderSummaryWidget';
import { CheckoutPageObject } from '../PageObjects/CheckoutPageObject';


test('e2e test', async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    const homePage = new HomePageObject(page);
    const configAddons = new ConfigureAddonsPageObject(page);
    const reviewCheckout = new ReviewAndCheckoutPageObject(page);
    const orderSummaryWidget = new OrderSummaryWidget(page);
    const checkoutPage = new CheckoutPageObject(page);

    /* Open License page. */
    await page.goto('https://store.cpanel.net/store/cpanel-licenses');

    const expectedLicense = `cPanel Solo® Cloud (1 Account)`
    const expectedAddon = `Monthly CloudLinux for cPanel License`
    const billingCycle = `Monthly`
    const expectedIpAddress = `2.2.2.2`
    /* Verify License price. */
    const licensePrice = await homePage.getLicensePrice(expectedLicense);
    expect(licensePrice.trim()).toBe(`$17.49 USD`.trim());
    /* Order expected License option. */
    await homePage.clickOrderLicenseButton(expectedLicense);
    /* 
    Order Addon page:
    - Verify IP field is visible.
    - Set expected IP address.
    - Add expected addon to the cart.
    - Verify total Prise with addon.
    */
    await configAddons.verifyIpAdressField_is_Visible();
    await configAddons.setRequiredIpAdress(expectedIpAddress);
    await orderSummaryWidget.verifyTotalPrice('$7.58 USD');
    /* Add expected addon to cart. */
    const expectedAddonPrice = await configAddons.getExpectedAddonPrice(expectedAddon);

    await configAddons.addAddonToCart(expectedAddon);
    await page.waitForTimeout(2000);
    const monhlyPrice = await orderSummaryWidget.getMonhlyPrice()

    /* Time sleep to wai for total prise update. */
    await page.waitForTimeout(3000);
    const subTotalPrice = `$14.51 USD`
    await orderSummaryWidget.verifyTotalPrice(subTotalPrice);

    const totalPrice = await orderSummaryWidget.getTotalPrice();
    await page.waitForTimeout(3000);
    await orderSummaryWidget.clickContinueButton();
    //await reviewCheckout.verifyProductOption(expectedLicense);
    await reviewCheckout.verifyProductOption(expectedAddon);
    await orderSummaryWidget.verifyTotalPrice(totalPrice);

    await orderSummaryWidget.clickCheckoutButton();

    await checkoutPage.verifyExpectedOrderValue(expectedLicense, billingCycle);
    await checkoutPage.verifyExpectedOrderValue(expectedLicense, expectedIpAddress);
    await checkoutPage.verifyExpectedOrderValue(expectedLicense, monhlyPrice);

    await checkoutPage.verifyExpectedOrderValue(expectedAddon, billingCycle);
    await checkoutPage.verifyExpectedOrderValue(expectedAddon, expectedIpAddress);
    await checkoutPage.verifyExpectedOrderValue(expectedAddon, expectedAddonPrice);

    await checkoutPage.getTotalPriceToday(subTotalPrice);

    //‘Personal Information', 'Billing Address', 'Account Security', 'Terms & Conditions' and 'Payment Details’ are visible.
    await checkoutPage.verifySectionIsVisible(`Personal Information`);
    await checkoutPage.verifySectionIsVisible(`Billing Address`);
    await checkoutPage.verifySectionIsVisible(`Account Security`);
    await checkoutPage.verifySectionIsVisible(`Terms & Conditions`);
    await checkoutPage.verifySectionIsVisible(`Payment Details`);

    await checkoutPage.completeOrderButtonIsVisible();

    await browser.close();
});