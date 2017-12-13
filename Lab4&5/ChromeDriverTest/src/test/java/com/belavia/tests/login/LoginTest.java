package com.belavia.tests.login;

import com.belavia.pages.login.LoginPage;
import com.belavia.pages.home.HomePage;
import com.belavia.tests.FunctionalTest;
import org.testng.annotations.Test;

import static com.thoughtworks.selenium.SeleneseTestBase.assertEquals;
import static com.thoughtworks.selenium.SeleneseTestBase.assertTrue;

public class LoginTest extends FunctionalTest {

    private static final String PATH = "https://belavia.by/leader/registration";
    private static final String USER_VALID_EMAIL = "rybova.julia98@gmail.com";
    private static final String USER_VALID_PASSWORD = "december1795";
    private static final String USER_INVALID_EMAIL = "12345tru6@gmail.com";
    private static final String LOGIN_FAILED_EXPECTED_MASSAGE = "Invalid email or password.";
    private static final String LOGIN_EXPECTED_MASSAGE = "Sign out";

 @Test(priority = 0)
    public void loginFailed(){
        driver.get(PATH);

        LoginPage loginPage = new LoginPage(driver);
        assertTrue(loginPage.isInitialized());

        loginPage.enterName(USER_UNVALID_EMAIL, USER_VALID_PASSWORD);

        loginPage.submit();
        assertTrue(loginPage.isNotifictionEnable());

        assertEquals(LOGINFAILED_EXPECTED_MASSAGE, loginPage.getNotificationMassage());
    }

    @Test (priority = 1)
    public void login(){
        driver.get(PATH);

        LoginPage loginPage = new LoginPage(driver);
        assertTrue(loginPage.isInitialized());

        loginPage.enterName(USER_VALID_EMAIL, USER_VALID_PASSWORD);

        HomePage homePage = loginPage.submit();
        assertTrue(homePage.isPageOpened());

        assertEquals(LOGIN_EXPECTED_MASSAGE, homePage.confirmationTitle());
    }
    
    @Test(priority = 2)
    public void screeningPage(){
        ScreeningPage screeningPage = new ScreeningPage(driver);
        assertTrue(screeningPage.isClientsListExist());
    }
}

   
