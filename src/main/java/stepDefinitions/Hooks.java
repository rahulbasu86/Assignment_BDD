package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import cucumber.api.java.Before;

public class Hooks extends TestBase{
	
	@Before
	public void setup()
	{
		
		TestBase.initilization();
		driver.get("https://www.phptravels.net/"); 
		WebElement loc1 = driver.findElement(By.xpath("//li[@id ='li_myaccount']/a"));
		 WebElement loc2 = driver.findElement(By.xpath("//a[@href='https://www.phptravels.net/login']"));
		 JavascriptExecutor js = (JavascriptExecutor)driver;
		 js.executeScript("arguments[0].click();", loc1);
		 js.executeScript("arguments[0].click();", loc2);
		
	}
	
	/*@After
	public void teardown()
	{
		driver.close();
	}*/

}
