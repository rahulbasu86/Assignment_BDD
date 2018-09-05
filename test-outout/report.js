$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7701086564,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Login",
  "description": "",
  "id": "login;login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "the user has navigated to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "they provide the correct credentials",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the user is logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "they will be directed to their account page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.the_user_has_navigated_to_the_login_page()"
});
formatter.result({
  "duration": 171772882,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.they_provide_the_correct_credentials()"
});
formatter.result({
  "duration": 217844549,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_user_is_logged_in()"
});
formatter.result({
  "duration": 84759362,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.they_will_be_directed_to_their_account_page()"
});
formatter.result({
  "duration": 2498127010,
  "status": "passed"
});
formatter.before({
  "duration": 7070476232,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login - bad password",
  "description": "",
  "id": "login;login---bad-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "the user has navigated to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "they provide the incorrect password for their account",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "an error will be provided stating \"Invalid Email or Password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.the_user_has_navigated_to_the_login_page()"
});
formatter.result({
  "duration": 21065239,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.they_provide_the_incorrect_credentials()"
});
formatter.result({
  "duration": 234800197,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid Email or Password",
      "offset": 35
    }
  ],
  "location": "LoginStepDefinition.an_error_will_be_provided_stating(String)"
});
formatter.result({
  "duration": 345952842,
  "status": "passed"
});
formatter.uri("search.feature");
formatter.feature({
  "line": 1,
  "name": "Search",
  "description": "",
  "id": "search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Basic hotel search",
  "description": "",
  "id": "search;basic-hotel-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "the user has clicked Home to access the search page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "they have chosen the Hotels option",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "they have chosen a hotel for \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "they have chosen with dates \"\u003ccheckin\u003e\" to \"\u003ccheckout\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "they have selected \"\u003cnum-adults\u003e\", \"\u003cnum-children\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "they click search",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "matching results are displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "search;basic-hotel-search;",
  "rows": [
    {
      "cells": [
        "city",
        "checkin",
        "checkout",
        "num-adults",
        "num-children"
      ],
      "line": 27,
      "id": "search;basic-hotel-search;;1"
    },
    {
      "cells": [
        "Montreal",
        "2018/22/11",
        "2018/24/11",
        "1",
        "0"
      ],
      "line": 28,
      "id": "search;basic-hotel-search;;2"
    },
    {
      "cells": [
        "New York",
        "2018/11/11",
        "2018/20/11",
        "5",
        "1"
      ],
      "line": 29,
      "id": "search;basic-hotel-search;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6752217061,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "the userr is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchStepDefinition.the_userr_is_logged_in()"
});
formatter.result({
  "duration": 361206356,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Basic hotel search",
  "description": "",
  "id": "search;basic-hotel-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "the user has clicked Home to access the search page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "they have chosen the Hotels option",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "they have chosen a hotel for \"Montreal\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "they have chosen with dates \"2018/22/11\" to \"2018/24/11\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "they have selected \"1\", \"0\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "they click search",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "matching results are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepDefinition.the_user_has_clicked_Home_to_access_the_search_page()"
});
formatter.result({
  "duration": 4026670427,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.they_have_chosen_the_Hotels_option()"
});
formatter.result({
  "duration": 56176865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Montreal",
      "offset": 30
    }
  ],
  "location": "SearchStepDefinition.they_have_chosen_a_hotel_for_city(String)"
});
formatter.result({
  "duration": 1000848802,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2018/22/11",
      "offset": 29
    },
    {
      "val": "2018/24/11",
      "offset": 45
    }
  ],
  "location": "SearchStepDefinition.they_have_chosen_with_dates_checkin_to_checkout(String,String)"
});
formatter.result({
  "duration": 3973885372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 20
    },
    {
      "val": "0",
      "offset": 25
    }
  ],
  "location": "SearchStepDefinition.they_have_selected_num_adults_num_children(String,String)"
});
formatter.result({
  "duration": 359781744,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.they_click_search()"
});
formatter.result({
  "duration": 1268382621,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.matching_results_are_displayed()"
});
formatter.result({
  "duration": 75894,
  "status": "passed"
});
formatter.before({
  "duration": 6716567004,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "the userr is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchStepDefinition.the_userr_is_logged_in()"
});
formatter.result({
  "duration": 387607568,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Basic hotel search",
  "description": "",
  "id": "search;basic-hotel-search;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "the user has clicked Home to access the search page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "they have chosen the Hotels option",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "they have chosen a hotel for \"New York\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "they have chosen with dates \"2018/11/11\" to \"2018/20/11\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "they have selected \"5\", \"1\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "they click search",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "matching results are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepDefinition.the_user_has_clicked_Home_to_access_the_search_page()"
});
formatter.result({
  "duration": 4624375340,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.they_have_chosen_the_Hotels_option()"
});
formatter.result({
  "duration": 53593079,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New York",
      "offset": 30
    }
  ],
  "location": "SearchStepDefinition.they_have_chosen_a_hotel_for_city(String)"
});
formatter.result({
  "duration": 984104976,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2018/11/11",
      "offset": 29
    },
    {
      "val": "2018/20/11",
      "offset": 45
    }
  ],
  "location": "SearchStepDefinition.they_have_chosen_with_dates_checkin_to_checkout(String,String)"
});
formatter.result({
  "duration": 3665185039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 20
    },
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "SearchStepDefinition.they_have_selected_num_adults_num_children(String,String)"
});
formatter.result({
  "duration": 573580513,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.they_click_search()"
});
formatter.result({
  "duration": 1226503612,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.matching_results_are_displayed()"
});
formatter.result({
  "duration": 58903,
  "status": "passed"
});
});