package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition extends TestBase {

	WebDriverWait wait;

	// WebDriver driver;

	@Given("^the user has navigated to the login page$")
	public void the_user_has_navigated_to_the_login_page() {

		wait = new WebDriverWait(driver, 10);
		boolean flag = wait.until(ExpectedConditions.titleContains("Login"));

		String title = driver.getTitle();
		Assert.assertTrue(flag);

	}

	@When("^they provide the correct credentials$")
	public void they_provide_the_correct_credentials() {

		driver.findElement(By.name("username")).sendKeys("user@phptravels.com");
		driver.findElement(By.name("password")).sendKeys("demouser");

	}

	@Then("^the user is logged in$")
	public void the_user_is_logged_in() {
		driver.findElement(By.xpath("//button[starts-with(text(),'Login')]")).click();
		// return new SearchStepDefinition();

	}

	@Then("^they will be directed to their account page$")
	public void they_will_be_directed_to_their_account_page() {

		wait = new WebDriverWait(driver, 10);
		boolean flag = wait.until(ExpectedConditions.titleContains("My Account"));
		// String title = driver.getTitle();
		Assert.assertTrue(flag);
	}

	@When("^they provide the incorrect password for their account$")
	public void they_provide_the_incorrect_credentials() {

		driver.findElement(By.name("username")).sendKeys("user@phptravels.com");
		driver.findElement(By.name("password")).sendKeys("demouser1");

	}

	@Then("^an error will be provided stating \"([^\"]*)\"$")
	public void an_error_will_be_provided_stating(String message) {

		driver.findElement(By.xpath("//button[starts-with(text(),'Login')]")).click();
		String actualMessage = driver.findElement(By.xpath("//div[text()='Invalid Email or Password']")).getText();
		Assert.assertEquals(actualMessage, message);

	}

}
