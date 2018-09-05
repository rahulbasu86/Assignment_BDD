$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10366027383,
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
  "duration": 146637275,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.they_provide_the_correct_credentials()"
});
formatter.result({
  "duration": 279470918,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_user_is_logged_in()"
});
formatter.result({
  "duration": 111977158,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.they_will_be_directed_to_their_account_page()"
});
formatter.result({
  "duration": 2830968728,
  "status": "passed"
});
formatter.after({
  "duration": 111386,
  "status": "passed"
});
formatter.after({
  "duration": 283787809,
  "status": "passed"
});
formatter.before({
  "duration": 8823801848,
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
  "name": "an error will be provided stating \"Invvalid Email or Password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.the_user_has_navigated_to_the_login_page()"
});
formatter.result({
  "duration": 52174626,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.they_provide_the_incorrect_credentials()"
});
formatter.result({
  "duration": 305332247,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invvalid Email or Password",
      "offset": 35
    }
  ],
  "location": "LoginStepDefinition.an_error_will_be_provided_stating(String)"
});
formatter.result({
  "duration": 404072899,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cInv[]alid Email or Passwo...\u003e but was:\u003cInv[v]alid Email or Passwo...\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinitions.LoginStepDefinition.an_error_will_be_provided_stating(LoginStepDefinition.java:75)\r\n\tat ✽.Then an error will be provided stating \"Invvalid Email or Password\"(login.feature:22)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 433050788,
  "status": "passed"
});
formatter.after({
  "duration": 272964806,
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
  "duration": 8982281976,
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
  "duration": 373816139,
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
  "duration": 4783094758,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.they_have_chosen_the_Hotels_option()"
});
formatter.result({
  "duration": 102017683,
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
  "duration": 1363410741,
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
  "duration": 4092550954,
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
  "duration": 312876331,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.they_click_search()"
});
formatter.result({
  "duration": 1329883746,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.matching_results_are_displayed()"
});
formatter.result({
  "duration": 67588,
  "status": "passed"
});
formatter.after({
  "duration": 42667,
  "status": "passed"
});
formatter.after({
  "duration": 268286945,
  "status": "passed"
});
formatter.before({
  "duration": 9797704151,
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
  "duration": 512371655,
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
  "duration": 6458231717,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.they_have_chosen_the_Hotels_option()"
});
formatter.result({
  "duration": 134108735,
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
  "duration": 1350597127,
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
  "duration": 3720634428,
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
  "duration": 635720443,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.they_click_search()"
});
formatter.result({
  "duration": 1460974093,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.matching_results_are_displayed()"
});
formatter.result({
  "duration": 74383,
  "status": "passed"
});
formatter.after({
  "duration": 37003,
  "status": "passed"
});
formatter.after({
  "duration": 318749616,
  "status": "passed"
});
});