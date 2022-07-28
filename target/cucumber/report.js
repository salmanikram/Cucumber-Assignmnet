$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/BankAndCash.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters the \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters the\"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on\"\u003clogin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "techfios-bank-and-cash-new-account-functionality;;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123"
      ],
      "line": 15,
      "id": "techfios-bank-and-cash-new-account-functionality;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3194097400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters the \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters the\"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on\"\u003clogin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 1564607800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 17
    }
  ],
  "location": "LoginStepDefination.user_enters_the(String)"
});
formatter.result({
  "duration": 2185500,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat pages.LoginPage.enterusername(LoginPage.java:27)\r\n\tat steps.LoginStepDefination.user_enters_the(LoginStepDefination.java:37)\r\n\tat ✽.When User enters the \"demo@techfios.com\"(features/BankAndCash.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 16
    }
  ],
  "location": "LoginStepDefination.user_enters_th(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003clogin\u003e",
      "offset": 15
    }
  ],
  "location": "LoginStepDefination.user_clicks_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "status": "skipped"
});
});