package stepDefinitions;

import java.text.ParseException;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.sourceforge.htmlunit.corejs.javascript.ast.ThrowStatement;
import util.date_conversion;

public class SearchStepDefinition extends TestBase {

	WebDriverWait wait;
	JavascriptExecutor js = (JavascriptExecutor) driver;

	@Given("^the userr is logged in$")
	public void the_userr_is_logged_in() throws Throwable {

		driver.findElement(By.name("username")).sendKeys("user@phptravels.com");
		driver.findElement(By.name("password")).sendKeys("demouser");
		driver.findElement(By.xpath("//button[starts-with(text(),'Login')]")).click();

	}

	@Given("^the user has clicked Home to access the search page$")
	public void the_user_has_clicked_Home_to_access_the_search_page() throws InterruptedException {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.titleContains("My Account"));
		WebElement loc1 = driver.findElement(By.xpath("//a[starts-with(text(),'Home')]"));
		js.executeScript("arguments[0].click();", loc1);
		wait.until(ExpectedConditions.titleContains("PHPTRAVELS | Travel Technology Partner"));

	}

	@And("^they have chosen the Hotels option$")
	public void they_have_chosen_the_Hotels_option() throws Throwable {
		WebElement loc2 = driver.findElement(By.xpath("//span[text() = 'Hotels   ']"));
		// loc2.click();
		js.executeScript("arguments[0].click();", loc2);
	}

	@And("^they have chosen a hotel for \"([^\"]*)\"$")
	public void they_have_chosen_a_hotel_for_city(String input_city) {

		// String input_city = "Montreal";
		driver.findElement(By.xpath("//*[@id = 's2id_autogen8']/a/span[1]")).click();
		driver.findElement(By.xpath("//*[@id = 'select2-drop']/div/input")).sendKeys(input_city);
		List<WebElement> data = driver.findElements(By.xpath("//ul[@class = 'select2-result-sub']/li"));
		for (int i = 0; i < data.size(); i++) {
			WebElement element = data.get(i);
			System.out.println(element.getText());
			if (element.getText().contains(input_city)) {
				element.click();
				break;
			}
		}
	}

	/*
	 * driver.findElement(By.
	 * xpath("//div[@class = 'datepicker dropdown-menu'][1]/div[1]/table/thead/tr[1]/th[2]"
	 * )).click(); driver.findElement(By.
	 * xpath("//div[@class = 'datepicker dropdown-menu'][1]/div[2]/table/thead/tr[1]/th[2]"
	 * )).click(); List<WebElement>years = driver.findElements(By.
	 * xpath("//div[@class = 'datepicker dropdown-menu'][1]/div[3]/table/tbody/tr/td/span"
	 * )); for(int i=0;i<years.size();i++) {
	 * if(years.get(i).getText().contains("2017")) { years.get(i).click(); } }
	 */

	@And("^they have chosen with dates \"([^\"]*)\" to \"([^\"]*)\"$")
	public void they_have_chosen_with_dates_checkin_to_checkout(String check_In, String check_Out)
			throws InterruptedException, ParseException {
		// String checkIN_month = "November 2018";
		// String checkIN_date = "22";
		String check_Indate = date_conversion.date_conversionn("yyyy/dd/MM", "MMMMMMM yyyy-dd", check_In);
		String[] output = check_Indate.split("-");

		String checkIN_month = output[0];
		String checkIN_date = output[1];
		System.out.println(checkIN_month);
		System.out.println(checkIN_date);
		driver.findElement(By.xpath("//*[@id='dpd1']/div/input")).click();
		WebElement checkINmonth_actual = driver
				.findElement(By.xpath("//div[@class = 'datepicker dropdown-menu'][1]/div[1]/table/thead/tr[1]/th[2]"));
		while (true) {
			if (checkINmonth_actual.getText().equalsIgnoreCase(checkIN_month)) {
				break;
			}

			else {
				driver.findElement(
						By.xpath("//div[@class = 'datepicker dropdown-menu'][1]/div[1]/table/thead/tr[1]/th[3]"))
						.click();
				Thread.sleep(1000);
			}
		}

		List<WebElement> checkIN_days = driver
				.findElements(By.xpath("//div[@class = 'datepicker dropdown-menu'][1]/div[1]/table/tbody/tr/td"));
		for (int i = 0; i < checkIN_days.size(); i++) {
			WebElement element = checkIN_days.get(i);
			//System.out.println(element.getText());
			if (element.getText().contains(checkIN_date)) {
				element.click();
				break;
			}
		}

		// String checkOUT_month = "November 2018";
		// String checkOUT_date = "24";
		String check_Outdate = date_conversion.date_conversionn("yyyy/dd/MM", "MMMMMMM yyyy-dd", check_Out);
		String[] output1 = check_Outdate.split("-");

		String checkOUT_month = output1[0];
		String checkOUT_date = output1[1];
		System.out.println(checkOUT_month);
		System.out.println(checkOUT_date);
		WebElement checkOUTmonth_actual = driver
				.findElement(By.xpath("//div[@class = 'datepicker dropdown-menu'][2]/div[1]/table/thead/tr[1]/th[2]"));
		while (true) {
			if (checkOUTmonth_actual.getText().equalsIgnoreCase(checkOUT_month)) {
				break;
			}

			else {
				driver.findElement(
						By.xpath("//div[@class = 'datepicker dropdown-menu'][2]/div[1]/table/thead/tr[1]/th[3]"))
						.click();
				Thread.sleep(1000);
			}
		}

		List<WebElement> checkOUT_days = driver
				.findElements(By.xpath("//div[@class = 'datepicker dropdown-menu'][2]/div[1]/table/tbody/tr/td"));
		for (int i = 0; i < checkOUT_days.size(); i++) {
			WebElement element = checkOUT_days.get(i);
			//System.out.println(element.getText());
			if (element.getText().contains(checkOUT_date)) {
				element.click();
				break;
			}
		}

	}

	@And("^they have selected \"([^\"]*)\", \"([^\"]*)\"$")
	public void they_have_selected_num_adults_num_children(String input_adults,String input_child) {
		int adults =Integer.parseInt(input_adults);
		System.out.println(adults);
		int child = Integer.parseInt(input_child);
		System.out.println(child);
		driver.findElement(By.id("travellersInput")).click();
		if (adults> 2) {
			for (int i = 0; i < adults- 2; i++) {
				driver.findElement(By.xpath("//*[@id='adultPlusBtn']")).click();

			}
		} else if (adults < 2) {
			driver.findElement(By.xpath("//*[@id='adultMinusBtn']")).click();
		}

		//int input_child = 1;

		if (child > 0) {
			for (int i = 0; i < child; i++) {
				driver.findElement(By.xpath("//*[@id='childPlusBtn']")).click();

			}
		}
	}

	@When("^they click search$")
	public void they_click_search() throws Throwable {

		driver.findElement(By.xpath("//form[@name='fCustomHotelSearch']/div[5]/button")).click();

	}

	@Then("^matching results are displayed$")
	public void matching_results_are_displayed() throws Throwable {
		System.out.println("Results are displayed");
	}

}