$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ManageQuestion.feature");
formatter.feature({
  "line": 1,
  "name": "Verification of SalesForce Manage Question",
  "description": "",
  "id": "verification-of-salesforce-manage-question",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13988106989,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Salesforce Manage question",
  "description": "",
  "id": "verification-of-salesforce-manage-question;salesforce-manage-question;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@ManageQuestion"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Enter SalesForce UserName pritam.survey@aress.com",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter SalesForce password Aress12345$",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Click on SalesForce Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on Home",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click on Survey launcher",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on Manage questions",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on Create New Tab",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Enter New Question for FreeText type rate your day",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Select Required checkbox",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Click on Save button to save the question",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click on Create new",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Enter New Question for Radio type rate your week",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Select Type of Question as Radio",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Select Required checkbox",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Select Weightage value as 2 from dropdown 2",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click on Add Options",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Set option name1 as good Good",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Select Score as 4 from dropdown 4",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Click on Add Options",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Set option name2 as better Better",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Select Score as 5 from dropdown 5",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Click on Save button to save the question",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Click on Create new",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Enter New Question as Slider rate your month",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Select Type of Question as Slider",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Select Weightage value as 2 from dropdown 2",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Click on Save button to save the question",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": " pritam.survey@aress.com",
      "offset": 25
    }
  ],
  "location": "SalesForce.enterUserName(String)"
});
formatter.result({
  "duration": 399766358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aress12345$",
      "offset": 26
    }
  ],
  "location": "SalesForce.enterPassword(String)"
});
formatter.result({
  "duration": 225399928,
  "status": "passed"
});
formatter.match({
  "location": "SalesForce.clickOnLoginButton()"
});
formatter.result({
  "duration": 7888715441,
  "status": "passed"
});
formatter.match({
  "location": "ManageQuestion.click_Home()"
});
formatter.result({
  "duration": 11793413155,
  "status": "passed"
});
formatter.match({
  "location": "SalesForce.clickonSurveylauncher()"
});
formatter.result({
  "duration": 147476035,
  "status": "passed"
});
formatter.match({
  "location": "ManageQuestion.click_Manage_questions()"
});
formatter.result({
  "duration": 13460392902,
  "status": "passed"
});
formatter.match({
  "location": "SalesForce.ClickonCreateNewTab()"
});
formatter.result({
  "duration": 32939355407,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//iframe[@allowfullscreen\u003d\u0027true\u0027]\"}\n  (Session info: chrome\u003d72.0.3626.81)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 30.03 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027Machine-102\u0027, ip: \u0027192.168.5.102\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:62732}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387), userDataDir\u003dC:\\Users\\user\\AppData\\Local\\Temp\\scoped_dir4608_7878}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d72.0.3626.81, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 90a431930fe51e14c9d1ed8581bbe58b\n*** Element info: {Using\u003dxpath, value\u003d//iframe[@allowfullscreen\u003d\u0027true\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat com.face.pageFactory.SalesForceLoginPage.clickOnCreateNewTab(SalesForceLoginPage.java:209)\r\n\tat com.face.stepDefinitions.SalesForce.ClickonCreateNewTab(SalesForce.java:66)\r\n\tat ✽.Then Click on Create New Tab(ManageQuestion.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "rate your day",
      "offset": 37
    }
  ],
  "location": "ManageQuestion.enter_New_Question_FreeText_Type(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ManageQuestion.select_Required_Checkbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ManageQuestion.click_On_Save_Button_To_Save_The_Question()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ManageQuestion.click_Create_new()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "rate your week",
      "offset": 34
    }
  ],
  "location": "ManageQuestion.enter_New_Question_Radio_Type(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ManageQuestion.select_Type_Of_Question_As_Radio()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ManageQuestion.select_Required_Checkbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 42
    }
  ],
  "location": "ManageQuestion.select_Weightage_Value_As_2_From_Dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ManageQuestion.click_On_Add_Options()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Good",
      "offset": 25
    }
  ],
  "location": "ManageQuestion.enter_Option_Name1_As_Good(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 32
    }
  ],
  "location": "ManageQuestion.Select_Score_As_4_From_Dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ManageQuestion.click_On_Add_Options()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Better",
      "offset": 27
    }
  ],
  "location": "ManageQuestion.enter_Option_Name2_As_Better(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 32
    }
  ],
  "location": "ManageQuestion.Select_Score_As_5_From_Dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ManageQuestion.click_On_Save_Button_To_Save_The_Question()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ManageQuestion.click_Create_new()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "rate your month",
      "offset": 29
    }
  ],
  "location": "ManageQuestion.enter_New_Question_Slider_Type(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ManageQuestion.select_Type_Of_Question_As_Slider()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 42
    }
  ],
  "location": "ManageQuestion.select_Weightage_Value_As_2_From_Dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ManageQuestion.click_On_Save_Button_To_Save_The_Question()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 3014408501,
  "status": "passed"
});
formatter.uri("ManageSurvey.feature");
formatter.feature({
  "line": 1,
  "name": "Verification of SalesForce Manage Survey",
  "description": "",
  "id": "verification-of-salesforce-manage-survey",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14844692965,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Salesforce Manage survey module",
  "description": "",
  "id": "verification-of-salesforce-manage-survey;salesforce-manage-survey-module;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@ManageSurvey"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Enter SalesForce UserName pritam.survey@aress.com",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter SalesForce password Aress12345$",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Click on SalesForce Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on Home",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click on Survey launcher",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on Manage Survey",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on Create New Tab",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Enter title for the survey Testing",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Enter description qwertyuiui",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Enter expiration days 1",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Select date",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Click on Next button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Click on select questions from library",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Enter text to search the question from library rate your",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Click on filter",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Select first question",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Select second question",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Select third question",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Click on assign question",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Click on Create new question",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Enter question title rate your year",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Select type of question multiselect",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Click on add options",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Enter option name GOOD",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Select Score as 4 from dropdown 3",
  "matchedColumns": [
    11
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Click on create question",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Click on Back to Survey question List",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Click on Next button",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Navigate to custom email tab",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Enter email ID rutuja.gaikwad@aressindia.net",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Click on Next to send survey page",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Click on send survey button",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "verify the success response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": " pritam.survey@aress.com",
      "offset": 25
    }
  ],
  "location": "SalesForce.enterUserName(String)"
});
formatter.result({
  "duration": 290284543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aress12345$",
      "offset": 26
    }
  ],
  "location": "SalesForce.enterPassword(String)"
});
formatter.result({
  "duration": 205154276,
  "status": "passed"
});
formatter.match({
  "location": "SalesForce.clickOnLoginButton()"
});
formatter.result({
  "duration": 7957775668,
  "status": "passed"
});
formatter.match({
  "location": "ManageQuestion.click_Home()"
});
formatter.result({
  "duration": 9773834950,
  "status": "passed"
});
formatter.match({
  "location": "SalesForce.clickonSurveylauncher()"
});
formatter.result({
  "duration": 111752409,
  "status": "passed"
});
formatter.match({
  "location": "SalesForce.clickOnManageSurvey()"
});
formatter.result({
  "duration": 13181783725,
  "status": "passed"
});
formatter.match({
  "location": "SalesForce.ClickonCreateNewTab()"
});
formatter.result({
  "duration": 32061065375,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//iframe[@allowfullscreen\u003d\u0027true\u0027]\"}\n  (Session info: chrome\u003d72.0.3626.81)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 30.00 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027Machine-102\u0027, ip: \u0027192.168.5.102\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:62813}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387), userDataDir\u003dC:\\Users\\user\\AppData\\Local\\Temp\\scoped_dir5508_28343}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d72.0.3626.81, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 60245d14d5e221fb1ddade7e50cd222b\n*** Element info: {Using\u003dxpath, value\u003d//iframe[@allowfullscreen\u003d\u0027true\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat com.face.pageFactory.SalesForceLoginPage.clickOnCreateNewTab(SalesForceLoginPage.java:209)\r\n\tat com.face.stepDefinitions.SalesForce.ClickonCreateNewTab(SalesForce.java:66)\r\n\tat ✽.Then Click on Create New Tab(ManageSurvey.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": " Testing",
      "offset": 26
    }
  ],
  "location": "SalesForce.EntertitleForTheSurvey(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": " qwertyuiui",
      "offset": 17
    }
  ],
  "location": "SalesForce.EnterDescription(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": " 1",
      "offset": 21
    }
  ],
  "location": "SalesForce.EnterExpirationDays(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForce.SelectDate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForce.ClickonNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForce.ClickonSelectQuestionsFromLibrary()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": " rate your",
      "offset": 46
    }
  ],
  "location": "SalesForce.EnterTextToSearchTheQuestion(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForce.ClickonFilter()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForce.SelectFirstQuestion()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForce.SelectSecondQuestion()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForce.SelectThirdQuestion()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForce.ClickonAssignQuestion()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForce.ClickonCreatenewQuestion()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": " rate your year",
      "offset": 20
    }
  ],
  "location": "SalesForce.EnterQuestionTitle(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForce.SelectTypeOfQuestionMultiSelect()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForce.ClickOnAddOptions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": " GOOD",
      "offset": 17
    }
  ],
  "location": "SalesForce.EnterOptionName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 32
    }
  ],
  "location": "ManageQuestion.Select_Score_As_4_From_Dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForce.ClickOnCreateQuestion()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForce.ClickOnBackToSurveyQuestionList()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForce.ClickonNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForce.NavigateToCustomEmailTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": " rutuja.gaikwad@aressindia.net",
      "offset": 14
    }
  ],
  "location": "SalesForce.EnterEmailID(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForce.ClickonNexttoSendSurveypage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForce.ClickOnSendSurveyButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForce.verifyTheSuccessResponse()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 3156579642,
  "status": "passed"
});
});