class ReviewAndCheckoutSelectors {
    // Element
    public static productOption(expectedProductName: string): string {
        return `//span[@class='item-title' and contains(., '${expectedProductName}')]`};
};

export{ ReviewAndCheckoutSelectors };