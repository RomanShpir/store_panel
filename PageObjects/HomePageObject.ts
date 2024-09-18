import { Page } from "playwright/test";
import { HomePageSelectors } from "../Selectors/HomePageSelectors";

class HomePageObject {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getLicensePrice(licenseName: string): Promise<string> {
        return await this.page.locator(`xpath=${HomePageSelectors.licensePrice(licenseName)}`).innerText()
    }

    async clickOrderLicenseButton(expectedLicenseName: string): Promise<void> {
        await this.page.locator(`xpath=${HomePageSelectors.orderNowLicense(expectedLicenseName)}`).click({ clickCount: 2 });
    }

} 

export{ HomePageObject }