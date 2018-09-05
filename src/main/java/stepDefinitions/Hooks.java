package stepDefinitions;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;

import com.cucumber.listener.Reporter;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import gherkin.formatter.model.Result;

public class Hooks extends TestBase{
	
	public static TestBase obj1;
	
	@Before
	public void setup()
	{
		
		obj1 = new TestBase();
		obj1.initilization();
		driver.get(prop.getProperty("url"));
		WebElement loc1 = driver.findElement(By.xpath("//li[@id ='li_myaccount']/a"));
		 WebElement loc2 = driver.findElement(By.xpath("//a[@href='https://www.phptravels.net/login']"));
		 JavascriptExecutor js = (JavascriptExecutor)driver;
		 js.executeScript("arguments[0].click();", loc1);
		 js.executeScript("arguments[0].click();", loc2);
		
	}
	
	@After(order=1)
	public void afterScenario(Scenario scenario) {
		if (scenario.getStatus().equals(Result.FAILED)) {
			String screenshotName = scenario.getName().replaceAll(" ", "_");
			try {
				File sourcePath = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
				File destinationPath = new File("C://Users//rahul.basu//eclipse-workspace//Cucumber_Selenium1//target//cucumber-reports//screenshots" + screenshotName + ".png");
				FileUtils.copyFile(sourcePath, destinationPath);  
				Reporter.addScreenCaptureFromPath(destinationPath.toString());
			} catch (IOException e) {
			} 
		}
	}
	
	@After(order =0)
	public void teardown()
	{
		driver.close();
	}

}
