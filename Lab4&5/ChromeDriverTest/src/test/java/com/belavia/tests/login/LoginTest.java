package com.belavia.tests.login;

import com.belavia.pages.login.LoginPage;
import com.belavia.pages.home.HomePage;
import com.belavia.tests.FunctionalTest;
import org.testng.annotations.Test;

import static com.thoughtworks.selenium.SeleneseTestBase.assertEquals;
import static com.thoughtworks.selenium.SeleneseTestBase.assertTrue;

public class HomePageTest extends FunctionalTest {
    
    private static final String  USER_ID = "100114162345679";
    private static final String PASSWORD = "12345678912345";
    private static final String PASSPORT_ID = "MC2099742";
    private Steps steps;
    private static final String COUNTRY = "RUSSIA";

    @BeforeMethod(description = "Init browser")
    public void setUp()
    {
        steps = new Steps();
        steps.initBrowser();
    }

        @Test(description = "change passport id")
    public void changePassportDataTest() {
        String username = steps.login(USER_ID,PASSWORD);
        Assert.assertEquals(steps.changePassportId(PASSPORT_ID),PASSPORT_ID);
    }

    @Test(description = "change country")
    public void changeCountry() {
        steps.login(USER_ID,PASSWORD);
        Assert.assertEquals(steps.changeCountry(COUNTRY),COUNTRY);
    }

    @Test(description = "change place of employment")
    public void changePlaceOfEmployment() {
        steps.login(USER_ID,PASSWORD);
        Assert.assertEquals(steps.changePlaceOfEmpl(PLACE_OF_EMPLOYMENT),PLACE_OF_EMPLOYMENT);
    }


    @AfterMethod(description = "Stop Browser")
    public void stopBrowser()
    {
        steps.closeDriver();
    }

}

   
