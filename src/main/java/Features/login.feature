Feature:  Login

 

  Scenario: Login

    Given the user has navigated to the login page

    When they provide the correct credentials

    Then the user is logged in 

    And they will be directed to their account page
    
    
    Scenario: Login - bad password 

    Given the user has navigated to the login page

    When they provide the incorrect password for their account

    Then an error will be provided stating "Invvalid Email or Password"