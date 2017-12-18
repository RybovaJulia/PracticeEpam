package com.belavia.pages.home;

import com.belavia.pages.BasePage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends BasePage {
    private static final Logger logger = LogManager.getRootLogger();
    public final String BASE_URL = "https://belavia.by/";

    
    @FindBy(xpath = "//*[@id=\"select-main-menu\"]")
    private WebElement menu;
    
    @FindBy(css = "menu-content a")
    private WebElement menuItem;
    
    @FindBy(css = "№select-member")
    private WebElement usernameElement;
    
    @FindBy(xpath = "//li[2]/a/span[2]")
    private WebElement loginDropdownShowBtn;
    
    @FindBy(xpath = "//*[@id=\"MemberId\"]")
    private WebElement loginInp;
    
    @FindBy(xpath = "//*[@id=\"Password\"]")
    private WebElement passwordInp;
    
    @FindBy(css = ".form-horizontal .btn-b2-login")
    private WebElement submitLoginBtn;

    public HomePage(WebDriver driver) {
        super(driver);
        PageFactory.initElements(driver, this);
    }

    @Override
    public void openPage() {
        logger.info("main page opened");
        driver.navigate().to(BASE_URL);
    }


    public boolean isLogoAvailable() {

        return logo.isDisplayed();
    }

    public boolean isMenuDisplayed() {

        Actions actions = new Actions(driver);
        actions
                .click(menu)
                .pause(1000)
                .moveToElement(menuItem)
                .build()
                .perform();

        return menuItem.isDisplayed();
    }

    public void login(String userId, String password) {
        Actions actions = new Actions(driver);

        actions
                .click(loginDropdownShowBtn)
                .sendKeys(loginInp,userId)
                .sendKeys(passwordInp, password)
                .moveToElement(submitLoginBtn)
                .click(submitLoginBtn)
                .build()
                .perform();

        System.out.println("test");

    }


    public String getUsername() {
        logger.info("getting username");

        return usernameElement.getText();
    }
}
  
