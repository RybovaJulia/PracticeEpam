package com.thetrainline.tests;

import org.junit.After;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

import java.util.concurrent.TimeUnit;

public class DriverTest {


    protected static WebDriver driver;

    @BeforeTest
    public void openPage() {
        System.setProperty("webdriver.chrome.driver","src/test/res/chromedriver.exe");
        
        driver = new ChromeDriver();
        
        driver.manage().timeouts().pageLoadTimeout(25, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(25, TimeUnit.SECONDS);
    }

    @After
    public void cleanUp() {
        driver.manage().deleteAllCookies();
    }

    @AfterTest(description = "Stop browser")
    public void stopBrowser() {
        driver.quit();
    }

}

 
