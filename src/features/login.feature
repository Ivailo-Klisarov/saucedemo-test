Feature: Login functionality for Swag Labs application

  # UC-1: Test Login form with empty credentials
  Scenario: Login with empty credentials
    Given I open the Swag Labs login page
    When I enter "<username>" into the "Username" field
    And I enter "<password>" into the "Password" field
    And I clear the "Username" field
    And I clear the "Password" field
    And I click on the "Login" button
    Then I should see the error message "<errorMessage>" 

  # UC-2: Test Login form with credentials by passing only Username
  Scenario: Login with username only
    Given I open the Swag Labs login page
    When I enter "<username>" into the "Username" field
    And I click on the "Login" button
    Then I should see the error message "<errorMessage>"

  # UC-3: Test Login form with credentials by passing Username & Password
  Scenario: Login with valid credentials
    Given I open the Swag Labs login page
    When I enter "<username>" into the "Username" field
    And I enter "<password>" into the "Password" field
   And I click on the "Login" button
   Then  the "Swag Labs" web page should open

#for some reason it uses <username> and <password> as examples the first time even though i dont't
   Examples:
  | username              | password     | errorMessage                                           |
  | testuser              | wrongpass    | Epic sadface: Username and password do not match any user in this service |
  | emptyuser             |              | Epic sadface: Username is required                                    |
  | standard_user         | secret_sauce | Epic sadface: Username is required                          |
  | locked_out_user       | secret_sauce | Epic sadface: Sorry, this user has been locked out      |
  | problem_user          | secret_sauce | Epic sadface: Username is required                          |
  | performance_glitch_user | secret_sauce | Epic sadface: Password is required                         |
  | error_user            | secret_sauce | Epic sadface: Username and password do not match any user in this service |
  | visual_user           | secret_sauce | Epic sadface: Password is required                         |
