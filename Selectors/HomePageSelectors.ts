class HomePageSelectors {
    // Button
    public static orderNowLicense(expectedLicenseName: string): string {
        return `//span[contains(., '${expectedLicenseName}')]//ancestor::div[@class='product clearfix']//a[contains(@class, 'btn-order-now')]`};
    
    public static addToCartAddonButton(value: string): string {
        return `//label[contains(., '${value}')]//..//..//div[@class='panel-add']`};
    
    // UI Elements
    public static licensePrice(licenseName: string): string {
        return `//span[contains(., '${licenseName}')]//..//..//span[@class='price']`};

}

export{ HomePageSelectors };
