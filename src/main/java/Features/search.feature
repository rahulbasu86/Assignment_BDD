Feature:  Search

Background:

    
    Given the userr is logged in

 

  Scenario Outline: Basic hotel search

    Given the user has clicked Home to access the search page

    And they have chosen the Hotels option

    And they have chosen a hotel for "<city>"
    
    And they have chosen with dates "<checkin>" to "<checkout>"

    And they have selected "<num-adults>", "<num-children>"
    
    When they click search
    
    Then matching results are displayed
    
    Examples:
    | city | checkin | checkout | num-adults | num-children |
    | Montreal | 2018/22/11 | 2018/24/11 | 1 | 0 |
    | New York | 2018/11/11 | 2018/20/11 | 5 | 1 |