class ConfigureOrderSelectors {
    // Containers
    public static orderSummaryContainer: string = "//div[@class='summary-container']";
    public static cartItemsContainer: string = "//div[@class='view-cart-items']";

    // Button
    public static cloudLinusAddToCartButton: string = "//div[@id='fas fa-plus']";

    // Field
    public static ipAddressField: string = "//input[@name='customfield[11]']";
    public static productPrice: string = "//span[@class='price']";

    public static addToCartAddonButton(value: string): string {
        return `//label[contains(., '${value}')]//..//..//div[@class='panel-add']`};

    public static addonPrice(addonName: string): string {
        return `//label[contains(., '${addonName}')]//ancestor::div[@class='panel card panel-default panel-addon']//div[@class='panel-price']`};
    
};

export{ ConfigureOrderSelectors };