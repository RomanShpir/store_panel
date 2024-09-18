import { Page, expect, Locator } from "playwright/test";
import { OrderSummaryWidgetSelectors } from "../Selectors/OrderSummaryWidgetSelectors";

class OrderSummaryWidget {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifyTotalPrice(expectedPrice: string): Promise<void> {
        let actualPrise: string = await this.page.locator(`xpath=${OrderSummaryWidgetSelectors.getTotalPrice}`).innerText();
        expect(actualPrise.trim()).toBe(expectedPrice.trim());
    }
    async getTotalPrice(): Promise<string> {
        return await this.page.locator(`xpath=${OrderSummaryWidgetSelectors.getTotalPrice}`).innerText();
    }

    async clickContinueButton(): Promise<void> {
        await this.page.locator(`xpath=${OrderSummaryWidgetSelectors.continueButton}`).click()
    }
    
    async clickCheckoutButton(): Promise<void> {
        await this.page.locator(`xpath=${OrderSummaryWidgetSelectors.checkoutButton}`).click()
    }

    async getMonhlyPrice(): Promise<string> {
        return await this.page.locator(`xpath=${OrderSummaryWidgetSelectors.widgetToatlPrice}`).innerText();
    }

} 

export{ OrderSummaryWidget }