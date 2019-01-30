$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SalesForce.feature");
formatter.feature({
  "line": 1,
  "name": "SalesForceLogin",
  "description": "",
  "id": "salesforcelogin",
  "keyword": "Feature"
});
formatter.before({
  "duration": 29720931508,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login",
  "description": "",
  "id": "salesforcelogin;login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Enter SalesForce UserName digvijay.dusane@aress1.com",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter SalesForce password Aressqa123",
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
  "name": "Navigate to HomeTab",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Navigate to ChatterTab",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": " digvijay.dusane@aress1.com",
      "offset": 25
    }
  ],
  "location": "SalesForce.enterUserName(String)"
});
formatter.result({
  "duration": 478084719,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aressqa123",
      "offset": 26
    }
  ],
  "location": "SalesForce.enterPassword(String)"
});
formatter.result({
  "duration": 160360398,
  "status": "passed"
});
formatter.match({
  "location": "SalesForce.clickOnLoginButton()"
});
formatter.result({
  "duration": 9119071549,
  "status": "passed"
});
formatter.match({
  "location": "SalesForce.clickOnHomeTab()"
});
formatter.result({
  "duration": 60124113215,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@title\u003d\u0027Home Tab\u0027]\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 30.04 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027Machine-100\u0027, ip: \u0027192.168.5.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\user\\AppData\\Local\\Temp\\scoped_dir5452_31609}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d71.0.3578.98, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 356a93dea5b517422a4128d9a690e22b\n*** Element info: {Using\u003dxpath, value\u003d//a[@title\u003d\u0027Home Tab\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat core.generic.WrapperFunctions.click(WrapperFunctions.java:114)\r\n\tat com.face.pageFactory.SalesForceLoginPage.clickHomeTab(SalesForceLoginPage.java:46)\r\n\tat com.face.stepDefinitions.SalesForce.clickOnHomeTab(SalesForce.java:52)\r\n\tat ✽.Then Navigate to HomeTab(SalesForce.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SalesForce.clickOnChatterTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 3702124180,
  "status": "passed"
});
formatter.before({
  "duration": 5334545206,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Add New Tab",
  "description": "",
  "id": "salesforcelogin;add-new-tab;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Enter SalesForce UserName digvijay.dusane@aress1.com",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Enter SalesForce password Aressqa123",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click on SalesForce Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Navigate to HomeTab",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Navigate To All Tabs",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Click On Add A Tab Link",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Select Custom App Value Site.com",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Select from Available Tabs Ideas",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Click On Add Button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Click On Save Button",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Click On Add A Tab Link",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Go To Selected Tabs Ideas",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Click On Remove Button",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Click On Save Button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": " digvijay.dusane@aress1.com",
      "offset": 25
    }
  ],
  "location": "SalesForce.enterUserName(String)"
});
formatter.result({
  "duration": 210915066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aressqa123",
      "offset": 26
    }
  ],
  "location": "SalesForce.enterPassword(String)"
});
formatter.result({
  "duration": 145171702,
  "status": "passed"
});
formatter.match({
  "location": "SalesForce.clickOnLoginButton()"
});
formatter.result({
  "duration": 9312601968,
  "status": "passed"
});
formatter.match({
  "location": "SalesForce.clickOnHomeTab()"
});
formatter.result({
  "duration": 60077966021,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@title\u003d\u0027Home Tab\u0027]\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 30.03 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027Machine-100\u0027, ip: \u0027192.168.5.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\user\\AppData\\Local\\Temp\\scoped_dir5976_7654}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d71.0.3578.98, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 9e214ebd8e7bdc9bef1fc73758a34981\n*** Element info: {Using\u003dxpath, value\u003d//a[@title\u003d\u0027Home Tab\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat core.generic.WrapperFunctions.click(WrapperFunctions.java:114)\r\n\tat com.face.pageFactory.SalesForceLoginPage.clickHomeTab(SalesForceLoginPage.java:46)\r\n\tat com.face.stepDefinitions.SalesForce.clickOnHomeTab(SalesForce.java:52)\r\n\tat ✽.Then Navigate to HomeTab(SalesForce.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SalesForceMenu.clickOnAllTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForceMenu.clickOnAddTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Site.com",
      "offset": 24
    }
  ],
  "location": "SalesForceMenu.selectCustomAppValue(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ideas",
      "offset": 27
    }
  ],
  "location": "SalesForceMenu.selectFromAvailableTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForceMenu.clickOnAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForceMenu.clickOnSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForceMenu.clickOnAddTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ideas",
      "offset": 20
    }
  ],
  "location": "SalesForceMenu.SelectedTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForceMenu.clickOnRemoveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForceMenu.clickOnSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 3931837727,
  "status": "passed"
});
formatter.before({
  "duration": 5108193006,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Create New Task",
  "description": "",
  "id": "salesforcelogin;create-new-task;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "Enter SalesForce UserName digvijay.dusane@aress1.com",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "Enter SalesForce password Aressqa123",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Click on SalesForce Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Navigate to HomeTab",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Click on Create New Menu",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Enter Subject Email",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Enter Due Date 4/10/2018",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Select Priority Normal",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Enter Comments Test123",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Select CheckBox For Reminder",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Click On Save",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": " digvijay.dusane@aress1.com",
      "offset": 25
    }
  ],
  "location": "SalesForce.enterUserName(String)"
});
formatter.result({
  "duration": 208702127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aressqa123",
      "offset": 26
    }
  ],
  "location": "SalesForce.enterPassword(String)"
});
formatter.result({
  "duration": 155376773,
  "status": "passed"
});
formatter.match({
  "location": "SalesForce.clickOnLoginButton()"
});
formatter.result({
  "duration": 13893273204,
  "status": "passed"
});
formatter.match({
  "location": "SalesForce.clickOnHomeTab()"
});
formatter.result({
  "duration": 60078568714,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@title\u003d\u0027Home Tab\u0027]\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 30.03 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027Machine-100\u0027, ip: \u0027192.168.5.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\user\\AppData\\Local\\Temp\\scoped_dir1908_10501}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d71.0.3578.98, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: eac0f1551be71221a417e4c0fab921cc\n*** Element info: {Using\u003dxpath, value\u003d//a[@title\u003d\u0027Home Tab\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat core.generic.WrapperFunctions.click(WrapperFunctions.java:114)\r\n\tat com.face.pageFactory.SalesForceLoginPage.clickHomeTab(SalesForceLoginPage.java:46)\r\n\tat com.face.stepDefinitions.SalesForce.clickOnHomeTab(SalesForce.java:52)\r\n\tat ✽.Then Navigate to HomeTab(SalesForce.feature:43)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SalesForceMenu.clickOnCreateNew()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 14
    }
  ],
  "location": "SalesForceMenu.enterSubjectTask(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4/10/2018",
      "offset": 15
    }
  ],
  "location": "SalesForceMenu.enterDate(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Normal",
      "offset": 16
    }
  ],
  "location": "SalesForceMenu.selectPriority(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Test123",
      "offset": 15
    }
  ],
  "location": "SalesForceMenu.enterComments(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForceMenu.clickOnReminderCheckBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForceMenu.clickOnSave()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 3446964844,
  "status": "passed"
});
formatter.before({
  "duration": 5172417429,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "Create Campaign",
  "description": "",
  "id": "salesforcelogin;create-campaign;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 55,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "Enter SalesForce UserName digvijay.dusane@aress1.com",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "Enter SalesForce password Aressqa123",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "Click on SalesForce Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "Navigate to HomeTab",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Navigate To All Tabs",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "Click On Campaign Link",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "Click On Create New View",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "Enter View Name Test123",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "Enter View Unique Name",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "Select RadioButton To Specify Filter Criteria",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "Select Field DropDown To Filter By Additional Details Campaign Name",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "Select Operator DropDown contains",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "Enter Value Social Work",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "Select Field From Available Field Parent Campaign",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "Click On Add Button To Add The Field",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "Select Field From Selected Field Parent Campaign",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "Click On Remove Button To remove added field",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "Select RadioButton To Restrict Visibility",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "Save The View",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": " digvijay.dusane@aress1.com",
      "offset": 25
    }
  ],
  "location": "SalesForce.enterUserName(String)"
});
formatter.result({
  "duration": 219771423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aressqa123",
      "offset": 26
    }
  ],
  "location": "SalesForce.enterPassword(String)"
});
formatter.result({
  "duration": 151877406,
  "status": "passed"
});
formatter.match({
  "location": "SalesForce.clickOnLoginButton()"
});
formatter.result({
  "duration": 12669337435,
  "status": "passed"
});
formatter.match({
  "location": "SalesForce.clickOnHomeTab()"
});
formatter.result({
  "duration": 60111394388,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@title\u003d\u0027Home Tab\u0027]\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 30.04 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027Machine-100\u0027, ip: \u0027192.168.5.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\user\\AppData\\Local\\Temp\\scoped_dir5840_23352}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d71.0.3578.98, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: f06cfacfc9505231cb736c25f2795728\n*** Element info: {Using\u003dxpath, value\u003d//a[@title\u003d\u0027Home Tab\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat core.generic.WrapperFunctions.click(WrapperFunctions.java:114)\r\n\tat com.face.pageFactory.SalesForceLoginPage.clickHomeTab(SalesForceLoginPage.java:46)\r\n\tat com.face.stepDefinitions.SalesForce.clickOnHomeTab(SalesForce.java:52)\r\n\tat ✽.Then Navigate to HomeTab(SalesForce.feature:61)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SalesForceMenu.clickOnAllTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForceMenu.clickOnCampaignLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForceMenu.clickOnCreateNewView()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Test123",
      "offset": 16
    }
  ],
  "location": "SalesForceMenu.enterViewName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForceMenu.enterOnViewUniqueName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForceMenu.clickOnCampaignRadio()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Campaign Name",
      "offset": 54
    }
  ],
  "location": "SalesForceMenu.selectField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "contains",
      "offset": 25
    }
  ],
  "location": "SalesForceMenu.selectOperator(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Social Work",
      "offset": 12
    }
  ],
  "location": "SalesForceMenu.enterValue(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Parent Campaign",
      "offset": 34
    }
  ],
  "location": "SalesForceMenu.selectAvailableList(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForceMenu.clickOnClickaddButtonAvailableField()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Parent Campaign",
      "offset": 33
    }
  ],
  "location": "SalesForceMenu.selectFromSelectedList(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForceMenu.clickOnRemoveButtonAvailableField()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForceMenu.clickOnRadioButtonRestrict()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForceMenu.clickOnSaveButtonCampaign()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 3904578905,
  "status": "passed"
});
formatter.before({
  "duration": 5190677981,
  "status": "passed"
});
formatter.scenario({
  "line": 107,
  "name": "Create New Event",
  "description": "",
  "id": "salesforcelogin;create-new-event;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 86,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 89,
  "name": "Enter SalesForce UserName digvijay.dusane@aress1.com",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "Enter SalesForce password Aressqa123",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "Click on SalesForce Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "Navigate to HomeTab",
  "keyword": "Then "
});
formatter.step({
  "line": 93,
  "name": "Click on Create New",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "Enter a subject in Text Field Email",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "Enter the Location Pune",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "Click on Start Date Text Field 3/10/2019",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "Click on Start Time Text Field 12:10 AM",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "Click on End Date Text Field 10/10/2019",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "Click on End Time Text Field 5:30 PM",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "Enter the Description asykswfdjfgfsdgytrbsdrfgybhretbrgurbvyib yunb4456yti4bny 5yiunb4i5y5 4o5byn5hkv5trjkhg",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "Select Drop Down Value 5 hours",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "Click on Sales Save Button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": " digvijay.dusane@aress1.com",
      "offset": 25
    }
  ],
  "location": "SalesForce.enterUserName(String)"
});
formatter.result({
  "duration": 231020500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aressqa123",
      "offset": 26
    }
  ],
  "location": "SalesForce.enterPassword(String)"
});
formatter.result({
  "duration": 154674281,
  "status": "passed"
});
formatter.match({
  "location": "SalesForce.clickOnLoginButton()"
});
formatter.result({
  "duration": 14208235332,
  "status": "passed"
});
formatter.match({
  "location": "SalesForce.clickOnHomeTab()"
});
formatter.result({
  "duration": 60130089176,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@title\u003d\u0027Home Tab\u0027]\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 30.06 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027Machine-100\u0027, ip: \u0027192.168.5.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\user\\AppData\\Local\\Temp\\scoped_dir5712_7603}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d71.0.3578.98, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: ef9adaac6e6e62b3b093048101acf456\n*** Element info: {Using\u003dxpath, value\u003d//a[@title\u003d\u0027Home Tab\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat core.generic.WrapperFunctions.click(WrapperFunctions.java:114)\r\n\tat com.face.pageFactory.SalesForceLoginPage.clickHomeTab(SalesForceLoginPage.java:46)\r\n\tat com.face.stepDefinitions.SalesForce.clickOnHomeTab(SalesForce.java:52)\r\n\tat ✽.Then Navigate to HomeTab(SalesForce.feature:92)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SalesForceMenu.clickcreatenew()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 30
    }
  ],
  "location": "SalesForceMenu.enterSubject(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pune",
      "offset": 19
    }
  ],
  "location": "SalesForceMenu.enterLocation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3/10/2019",
      "offset": 31
    }
  ],
  "location": "SalesForceMenu.clickstartdate(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12:10 AM",
      "offset": 31
    }
  ],
  "location": "SalesForceMenu.clickstarttime(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10/10/2019",
      "offset": 29
    }
  ],
  "location": "SalesForceMenu.clickenddate(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5:30 PM",
      "offset": 29
    }
  ],
  "location": "SalesForceMenu.clickendtime(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "asykswfdjfgfsdgytrbsdrfgybhretbrgurbvyib yunb4456yti4bny 5yiunb4i5y5 4o5byn5hkv5trjkhg",
      "offset": 22
    }
  ],
  "location": "SalesForceMenu.enterDescription(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5 hours",
      "offset": 23
    }
  ],
  "location": "SalesForceMenu.selectdropdownvalue(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SalesForceMenu.clicksavebutton()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 3391232614,
  "status": "passed"
});
});