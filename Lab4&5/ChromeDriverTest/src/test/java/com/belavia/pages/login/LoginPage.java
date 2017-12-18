package com.belavia.pages.login;

import com.belavia.pages.BasePage;
import com.belavia.pages.home.HomePage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends BasePage {
    
    private static final Logger logger = LogManager.getRootLogger();
    public final String BASE_URL = "https://belavia.by/leader/profile/";

    @FindBy(xpath = "//*[@id=\"Document_number\"]")
    private WebElement passportIdInp;
    
    @FindBy(css = "form .ui-corner-all span")
    private WebElement countryInp;
    
    @FindBy(css = ".first-txt button")
    private WebElement submitChangesBtn;
    private String currentCountry;
    
    @FindBy(xpath = "//*[@id=\"Appellation\"]")
    private WebElement placeInp;
    private String placeOfEmpl;

    public LoginPage(WebDriver driver) {
        super(driver);
        PageFactory.initElements(driver, this);
    }


    @Override
    public void openPage() {
        logger.info("openned profile");
        driver.navigate().to(BASE_URL);
    }


    public void changePassportId(String passportId) {

        ((JavascriptExecutor)driver).executeScript("window.scrollBy(0,"+countryInp.getLocation().getY()+");");


        Actions actions = new Actions(driver);
        actions
                .click(passportIdInp)
                .keyDown(Keys.CONTROL)
                .sendKeys(Keys.chord("a"))
                .keyUp(Keys.CONTROL)
                .pause(1000)
                .sendKeys(passportId)
                .pause(2000)
                .moveToElement(countryInp)
                .pause(2000)
                .click(submitChangesBtn)
                .build()
                .perform();
    }

    public String getPassportId() {
        System.out.println("getId");
        return passportIdInp.getAttribute("value");
    }

    public void changeCountry(String country) {

        Actions actions = new Actions(driver);
        actions
                .pause(4000)
                .click(countryInp)
                .pause(4000)
                .click(driver.findElement(By.tagName("option")).findElement(By.xpath(country)))
                .pause(2000)
                .click(submitChangesBtn)
                .build()
                .perform();
    }


    public String getCountry() {
        return countryInp.getText();
    }

    public void changePlaceOfEmpl(String placeOfEmployment) {
        Actions actions = new Actions(driver);

        actions
                .click(placeInp)
                .keyDown(Keys.CONTROL)
                .sendKeys(Keys.chord("a"))
                .keyUp(Keys.CONTROL)
                .pause(1000)
                .sendKeys(placeInp,placeOfEmployment)
                .pause(2000)
                .click(submitChangesBtn)
                .build()
                .perform();
    }

    public String getPlaceOfEmpl() {
        return placeInp.getText();
    }
}

   
