package com.face.stepDefinitions;

import org.junit.Assert;


import com.face.pageFactory.SalesForceLoginPage;

import core.generic.Utilities;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
/**
 * @ScriptName    : SuiteSteps
 * @Description   : This class contains   
 * @Author: Digvijay Dusane(Aress) @Creation Date : 08 Jan 2018   @Modified Date:                    
 */
public class SalesForce 
{
	// Local variables
	
	private Utilities objUtilities = new Utilities();
	private SalesForceLoginPage objSalesForceLoginPage = new SalesForceLoginPage();
	
	
	//Login
	@Given("^Enter SalesForce UserName(.*)$")
	public void enterUserName(String userName)  
	{
		objUtilities.waitForPageLoad();
		Assert.assertTrue(objSalesForceLoginPage.setUserName(userName));
		
	}

	@Then("^Enter SalesForce password (.*)$")
	public void enterPassword(String password)  
	{
		objUtilities.waitForPageLoad();
		Assert.assertTrue(objSalesForceLoginPage.setUserPassword(password));
	}
	
	@Then("^Click on SalesForce Login button$")
	public void clickOnLoginButton()  
	{
		objUtilities.waitForPageLoad();
		Assert.assertTrue(objSalesForceLoginPage.clickLoginButton());
	}
	
	//Home Tab
	@Then("^Navigate to HomeTab$")
	public void clickOnHomeTab()  
	{
		objUtilities.waitForPageLoad();
		Assert.assertTrue(objSalesForceLoginPage.clickHomeTab());
	}
	
	//Chatter Tab
	@Then("^Navigate to ChatterTab$")
	public void clickOnChatterTab()  
	{
		objUtilities.waitForPageLoad();
		Assert.assertTrue(objSalesForceLoginPage.clickChatterTab());
	}
	
	
	
	
	
		
	
	
}
