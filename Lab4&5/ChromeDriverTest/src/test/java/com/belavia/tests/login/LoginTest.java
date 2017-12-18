package com.belavia.tests.login;

import com.belavia.pages.login.LoginPage;
import com.belavia.pages.home.HomePage;
import com.belavia.tests.FunctionalTest;
import org.testng.annotations.Test;

import static com.thoughtworks.selenium.SeleneseTestBase.assertEquals;
import static com.thoughtworks.selenium.SeleneseTestBase.assertTrue;

public class HomePageTest extends FunctionalTest {

    private static final String  USER_ID = "10011526537623843456678";
    private static final String PASSWORD = "123456789";
    public static final String EXPECTED_NAME = "JULIA RYBOVA";
        
    private Steps steps;
        
    @BeforeMethod(description = "Init browser")
    public void setUp()
    {
        steps = new Steps();
        steps.initBrowser();
    }

    @Test
    public void accessToMainPageTest() {
        Assert.assertTrue(steps.accessToMainPage());
    }

    @Test
    public void menuTest() {
        Assert.assertTrue(steps.checkMenu());
    }

    @Test(description = "auth test")
    public void authTest() {

        String username = steps.login(USER_ID,PASSWORD);
        Assert.assertEquals(username, EXPECTED_NAME);
    }



    @AfterMethod(description = "Stop Browser")
    public void stopBrowser()
    {
        steps.closeDriver();
    }
}

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
}

   
