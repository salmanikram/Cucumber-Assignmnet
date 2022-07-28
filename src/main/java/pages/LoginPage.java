package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;


public class LoginPage {
	
public WebDriver driver;
	
	public LoginPage (WebDriver  driver) {
		this.driver= driver;
		
	}
	
	@FindBy(how=How.XPATH,using ="//*[@id=\"username\"]") WebElement UserName;
	@FindBy(how=How.XPATH,using ="//*[@id=\"password\"]") WebElement Password;
	@FindBy(how=How.XPATH,using="/html/body/div[1]/div/div/form/div[3]/button") WebElement SignInButton;
	@FindBy(how=How.XPATH,using="//*[@id=\"side-menu\"]/li[10]/a/span[1]") WebElement BankCashMenu;
	@FindBy(how=How.XPATH,using="//*[@id=\"side-menu\"]/li[10]/ul/li[1]/a") WebElement NewAccount;
	@FindBy(how=How.XPATH,using="//*[@id=\"account\"]") WebElement AccountTitle;
	
	
	public void enterusername(String username) {
		UserName.sendKeys(username);
		
		
		try {
			Thread.sleep(3000);
		}catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public void password(String password) {
		Password.sendKeys(password);
		try {
			Thread.sleep(3000);
		}catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public void signInButton() {
		SignInButton.click();
		try {
			Thread.sleep(3000);
		}catch (InterruptedException e) {
			e.printStackTrace();
		}
		
	}

	public String getTitle() {
		return driver.getTitle();
		
	}
	
//	public void bankAndCashMenu() {
//		BankCashMenu.click();
//		try {
//			Thread.sleep(3000);
//		}catch (InterruptedException e) {
//			e.printStackTrace();
//		} 
//	}
//		
//	
//	public void newAccountMenu() {
//		NewAccount.click();
//		try {
//			Thread.sleep(3000);
//		}catch (InterruptedException e) {
//			e.printStackTrace();
//}
//
//	}
//	public void accountTitle(String accounttitle) {
//		AccountTitle.sendKeys(accounttitle);
//		try {
//			Thread.sleep(3000);
//		}catch (InterruptedException e) {
//			e.printStackTrace();
//	
//}
//	}
//	
	}



