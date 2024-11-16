// Import necessary functions and modules
const { Then } = require('@wdio/cucumber-framework');  // Import the "Then" step definition from Cucumber
const LoginPage = require('../po/LoginPage');  // Import the LoginPage object to interact with the login page
const { expect } = require('chai');  // Import Chai assertion library

// Step definition for checking if the error message contains the expected text
Then('I should see the error message {string}', async (errorMessage) => {
    
  // Log the expected error message
  console.log(`Checking if the error message contains: "${errorMessage}"`);
  
 

  const actualError = await LoginPage.errorMessage.getText();  // Get the actual error message from the page
  console.log(`Actual error message: "${actualError}"`);

  // Assert that the error message contains the first word of the expected error message
  expect(actualError.trim()).to.equal(errorMessage.trim());
  
  
});

// Step definition for verifying the page title after login
Then('the {string} web page should open', async (title) => {
   
  const currentUrl = await browser.getUrl();
    console.log(currentUrl);  // Prints the current URL
    expect(currentUrl).to.equal('https://www.saucedemo.com/inventory.html'); //Assert that checks URLs
 
    
 
 });
