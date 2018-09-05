package MyRunner;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import stepDefinitions.TestBase;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:/Users/rahul.basu/eclipse-workspace/Cucumber_Selenium1/src/main/java/Features/", //the path of the feature files
		glue={"stepDefinitions"}, 
		format= {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"},
		plugin = {"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"},
		monochrome = true, 
		dryRun = false 
		//tags = {"~@SmokeTest" , "~@RegressionTest", "~@End2End"}			
		)


public class TestRunner extends TestBase {
	
	@AfterClass
	public static void writeExtentReport() {
		Reporter.loadXMLConfig(new File(prop.getProperty("reportConfigPath")));
	}

}
