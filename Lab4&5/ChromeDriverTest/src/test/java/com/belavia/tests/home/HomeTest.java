package com.belavia.tests.departures;

import com.belavia.pages.departures.DeparturesPage;
import com.belavia.tests.DriverTest;
import org.testng.annotations.Test;

import static com.thoughtworks.selenium.SeleneseTestBase.assertEquals;
import static com.thoughtworks.selenium.SeleneseTestBase.assertTrue;

public class HomeTest extends DriverTest {

    private static final String  USER_ID = "10011416192";
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
