package steps;

import org.junit.Assert;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepDefination extends TestBase {

	LoginPage loginPageObj;

	@Before
	public void beforeRun() {
		loginPageObj = PageFactory.initElements(driver, LoginPage.class);
		init();
	}
	
	
	@Given ("^User is on the techfios login page$")
	public void user_is_on_the_techfios_login_page() {
		driver.get("https://techfios.com/billing/?ng=admin/");
	} 
		
		
	
	    


	@When ("^User enters the \"([^\"]*)\"$") 
	public void user_enters_the(String username) {
		loginPageObj.enterusername(username);
	
		
	}
	

	@When("^User enters the\"([^\"]*)\"$")
	public void user_enters_th(String password) {
		loginPageObj.password(password);
		
	}

	@When("^User clicks on\"([^\"]*)\"$")
	public void user_clicks_on(String signinbutton) {
		loginPageObj.signInButton();

	}
	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() {
		Assert.assertEquals("Dashboard- iBilling", loginPageObj.getTitle());
	

}
}
