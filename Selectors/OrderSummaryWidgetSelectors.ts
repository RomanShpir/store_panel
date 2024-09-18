class OrderSummaryWidgetSelectors {
    // Element
    public static getTotalPrice: string = "//div[contains(@class, 'total-due-today')]//span[@class='amt']";
    // Button
    public static continueButton: string = "//button[@id='btnCompleteProductConfig']";
    public static checkoutButton: string = "//a[contains(@class, 'btn-checkout') and @id='checkout']";

    public static widgetToatlPrice: string = "//span[contains(text(), 'Monthly:')]//..//span[@class='pull-right float-right']"

}

export{ OrderSummaryWidgetSelectors };