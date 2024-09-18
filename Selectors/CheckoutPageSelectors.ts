class CheckoutPageSelectors {
    public static productValue(expectedProductName: string, expectedValue: string): string {
        return `//tr//td[contains(., '${expectedProductName}')]//..//td[contains(., '${expectedValue}')]`};
    
    public static totalDueTodayPrice: string = "//div[@id='totalCartPrice']";

    public static checkoutSectionName(sectionName: string): string {
        return `//span[contains(., '${sectionName}')]`};
    
    public static completeOrderButton: string = "//button[@type='submit' and contains(., 'Complete Order')]"

}

export{ CheckoutPageSelectors };