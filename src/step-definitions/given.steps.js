// Import necessary functions and page objects
const { Given } = require('@wdio/cucumber-framework');  // Given step definition from Cucumber framework
const LoginPage = require('../po/LoginPage');  // Import the LoginPage object to interact with the login page

// Step definition for opening the Swag Labs login page
Given('I open the Swag Labs login page', async () => {
    // Log the action being performed
    console.log('Navigating to the Swag Labs login page...');
    
    // Navigate the browser to the Swag Labs login page URL
    await browser.url('https://www.saucedemo.com/');
    
    // Log confirmation that the page was opened
    console.log('Swag Labs login page opened successfully.');
});
