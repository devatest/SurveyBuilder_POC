package com.face.pageFactory;

import java.util.Hashtable;
import java.util.Map;
import java.util.Set;

import org.openqa.selenium.By;

import core.generic.Utilities;
import core.generic.WrapperFunctions;

public class SalesForceLoginPage
{
	// Local variables
	private WrapperFunctions objWrapperFunctions = new WrapperFunctions();
	private Utilities objUtilities = new Utilities();

	    //Login
	    By inpUserName = By.xpath("//input[@class='input r4 wide mb16 mt8 username']");
	    By inpUserPassword = By.xpath("//input[@class='input r4 wide mb16 mt8 password']");
	    By btnLogin = By.xpath("//input[@class='button r4 wide primary']");
	  
	    //Tabs
	    By homeTab  = By.xpath("//a[@title='Home Tab']");
	    By chatterTab =By.xpath("//a[@title='Chatter Tab']");
	  	    
	    
	    //Login
	   	public boolean setUserName(String userName){
			return objWrapperFunctions.setText(inpUserName, userName);
		}
	   
		/** Set SalesForce password*/
		public boolean setUserPassword(String password){
			return objWrapperFunctions.setText(inpUserPassword, password);
		}
		
		/** Click Login button*/
		public boolean clickLoginButton(){
			return objWrapperFunctions.click(btnLogin);	
		}
		
		
		//Home Tab
		public boolean clickHomeTab(){
			return objWrapperFunctions.click(homeTab);	
		}
		
		//Chatter Tab
		public boolean clickChatterTab(){
			return objWrapperFunctions.click(chatterTab);	
		}
		
		
		
		
}
