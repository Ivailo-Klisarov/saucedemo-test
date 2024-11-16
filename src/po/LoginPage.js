const BasePage = require('./BasePage');

class LoginPage extends BasePage {
    /**
     * Selector for the username input field
     * @returns {WebdriverIO.Element} - The username input field element
     */
    get usernameInput() {
        return $('//input[@id="user-name"]');
    }

    /**
     * Selector for the password input field
     * @returns {WebdriverIO.Element} - The password input field element
     */
    get passwordInput() {
        return $('//input[@id="password"]');
    }

    /**
     * Selector for the login button
     * @returns {WebdriverIO.Element} - The login button element
     */
    get loginButton() {
        return $('//input[@id="login-button"]');
    }

    /**
     * Selector for the error message element
     * @returns {WebdriverIO.Element} - The error message element displayed on failed login
     */
    get errorMessage() { 
        return $('//h3[@data-test="error"]'); 
    }
}


module.exports = new LoginPage();