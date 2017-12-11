package com.belavia.pages.login;

import com.belavia.pages.BasePage;
import com.belavia.pages.home.HomePage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends BasePage {

    @FindBy(id="email")
    WebElement email;

    @FindBy(id="password")
    WebElement password;

    @FindBy(name="login")
    WebElement login;


    @FindBy(xpath = "//*[@id=\"ContentPanel\"]/form/div[1]/div/div/div[1]/strong")
    private WebElement massage;

    public LoginPage(WebDriver driver) {

        super(driver);
    }
    public boolean isInitialized() {
        return email.isDisplayed();
    }

    public void enterName(String firstName, String lastName){
        this.email.clear();
        this.email.sendKeys(firstName);

        this.password.clear();
        this.password.sendKeys(lastName);
    }

    public HomePage submit(){
        login.click();
        return new HomePage(driver);
    }

    public boolean isNotifictionEnable(){
        return massage.isEnabled(); }
    public String getNotificationMassage() {
        return  massage.getText();}
}