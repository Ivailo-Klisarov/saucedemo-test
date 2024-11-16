class BasePage {
    /**
     * Opens a specified URL path in the browser.
     * 
     * This method navigates the browser to the specified path. The path parameter should be a string representing
     * the relative or absolute URL paths
     * 
     * // Opens a full URL
     * await this.open('https://www.saucedemo.com');
     */
    async open(path) {
        await browser.url(path);
    }
    
}
module.exports = BasePage;