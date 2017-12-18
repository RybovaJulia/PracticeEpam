package com.belavia.pages.route;

import com.belavia.pages.BasePage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class RoutePage extends BasePage {
    
    private final String BASE_URL = "https://belavia.by/time-table/";

    private final Logger logger   = LogManager.getRootLogger();

    public TimetablePage(WebDriver webDriver) {
        super(webDriver);
        PageFactory.initElements(this.webDriver, this);
    }

    @FindBy(id = "origin_Combobox")
    private WebElement inputOrigin;

    @FindBy(id = "destination_Combobox")
    private WebElement inputDestination;

    @FindBy(id = "getTimeTable")
    private WebElement getTimeTableBtn;

    @Override
    public void open() {
        webDriver.navigate().to(BASE_URL);
        logger.info("Time Table page opened");
    }

    public void searchTimetable(String origin, String destination){
        inputOrigin.sendKeys(origin);
        inputDestination.sendKeys(destination);
        searchBtn.click();
        logger.info("search time table performed");
    }

}
  

   
