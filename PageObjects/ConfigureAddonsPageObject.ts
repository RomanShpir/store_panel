import { Page, expect } from "playwright/test";
import { ConfigureOrderSelectors } from "../Selectors/ConfigureOrderSelectors";

class ConfigureAddonsPageObject {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async setRequiredIpAdress(ipAddress: string): Promise<void> {
        // Fill IP Address field with expected Ip address.
        // :param ipAddress: mandatory, expected ip address.
        // :return: None
        await this.page.locator(`xpath=${ConfigureOrderSelectors.ipAddressField}`).fill(ipAddress);
    }

    async verifyIpAdressField_is_Visible(): Promise<void> {
        // Verify Ip Address is visible on a page.
        // :return: None
        const ipAddressField = this.page.locator(`xpath=${ConfigureOrderSelectors.ipAddressField}`);
        await ipAddressField.waitFor({ state: 'visible', timeout: 100000 });
    }

    async addAddonToCart(addonName: string): Promise<void> {
        await this.page.locator(`xpath=${ConfigureOrderSelectors.addToCartAddonButton(addonName)}`).click();
    }

    async getExpectedAddonPrice(addonName: string): Promise<string> {
        return this.page.locator(`xpath=${ConfigureOrderSelectors.addonPrice(addonName)}`).innerText()
    }

} 

export{ ConfigureAddonsPageObject }