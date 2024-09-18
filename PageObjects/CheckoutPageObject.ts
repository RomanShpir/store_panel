import { Page, expect } from "playwright/test";
import { CheckoutPageSelectors } from "../Selectors/CheckoutPageSelectors";

class CheckoutPageObject {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    
    async verifyExpectedOrderValue(expectedProductName: string, expectedValue: string): Promise<void> {
        expect(this.page.locator(`xpath=${CheckoutPageSelectors.productValue(expectedProductName, expectedValue)}`));
    }
    async getTotalPriceToday(expectedPrice: string): Promise<void> {
        const totalPriceToday = await this.page.locator(`xpath=${CheckoutPageSelectors.totalDueTodayPrice}`).innerText();
        expect(totalPriceToday.trim()).toBe(expectedPrice.trim());
    }
    async verifySectionIsVisible(sectionName: string): Promise<void> {
        await this.page.locator(`xpath=${CheckoutPageSelectors.checkoutSectionName(sectionName)}`).isVisible()
    }
    async completeOrderButtonIsVisible(): Promise<void> {
        await this.page.locator(`xpath=${CheckoutPageSelectors.completeOrderButton}`).isDisabled()
    }
} 

export{ CheckoutPageObject }