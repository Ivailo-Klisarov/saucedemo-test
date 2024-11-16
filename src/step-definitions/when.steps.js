// Import necessary functions and page objects
const { When } = require('@wdio/cucumber-framework');  // Import the "When" step definition from the Cucumber framework
const LoginPage = require('../po/LoginPage');  // Import the LoginPage object to interact with login page elements

// Step definition for entering a value into a specific text field (e.g., username or password)
When('I enter {string} into the {string} field', async (input, textbox) => {
  // Log the action being performed
  console.log(`Entering "${input}" into the "${textbox}" field...`);
  
  // Switch based on the textbox name to decide which input field to fill
  switch (textbox) {
    case 'Username':  // If the textbox is 'Username'
      
      await LoginPage.usernameInput.setValue(input);  // Set the input value for the username field
      
      console.log('Entered value into Username field.');
      break;
    case 'Password':  // If the textbox is 'Password'
    
      await LoginPage.passwordInput.setValue(input);  // Set the input value for the password field
      
      console.log('Entered value into Password field.');
      break;
    // If the textbox is neither 'Username' nor 'Password', throw an error
    default:
      throw new Error(`Unknown textbox: ${textbox}`);
  }
});

// Step definition for clearing a value from a specific text field (e.g., username or password)
When('I clear the {string} field', async (textbox) => {
  // Log the action being performed
  console.log(`Clearing the value from the "${textbox}" field...`);
  
  // Switch based on the textbox name to decide which input field to clear
  switch (textbox) {
    case 'Username':  // If the textbox is 'Username'
    
    await LoginPage.usernameInput.setValue('');  // Sets the value to an empty string
    
      // Clear the username field
      console.log('Cleared value from Username field.');
      break;
    case 'Password':  // If the textbox is 'Password'
    
        LoginPage.passwordInput.click();
        
        
        await LoginPage.passwordInput.setValue('');  // Sets the value to an empty string
        await browser.refresh(); //had to stay till 4 am to figure out why do my values reappear when clicking the 
        //login button even after they are cleared. I don't if that was intended but I cant figure it out. just used refresh to pevent it.
        //Try removing the refresh and doing UC-1 with browser.pause(). When the values clear they reappear when clicking on login.
        
        // Clear the password field
        console.log('Cleared value from Password field.');
      break;
    // If the textbox is neither 'Username' nor 'Password', throw an error
    default:
      throw new Error(`Unknown textbox: ${textbox}`);


  

  }
});

// Step definition for clicking on the "Login" button
When('I click on the "Login" button', async () => {
  // Log the action being performed
  // Refresh the browser



// Clear localStorage and sessionStorage

  console.log('Clicking on the "Login" button...');
 
  // Click on the login button on the page
 
await LoginPage.loginButton.click();
   
  // Log after the button click

  console.log('Login button clicked.');
});
