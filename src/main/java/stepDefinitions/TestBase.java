package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestBase {

	protected static WebDriver driver;
	public static void initilization()
	{
	System.setProperty("webdriver.chrome.driver","C://Users//rahul.basu//Downloads//chromedriver_win32//chromedriver.exe");
	 driver = new ChromeDriver();
	 driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	 
	}

}
