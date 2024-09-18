import { Page, expect, Locator } from "playwright/test";
import { ReviewAndCheckoutSelectors } from "../Selectors/ReviewAndCheckoutSelectors";

class ReviewAndCheckoutPageObject {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifyProductOption(expectedProductName: string): Promise<void> {
        const actualProductName =  await this.page.locator(`xpath=${ReviewAndCheckoutSelectors.productOption(expectedProductName)}`).innerText()
        expect(actualProductName.trim()).toBe(expectedProductName.trim());
    }

} 

export{ ReviewAndCheckoutPageObject }