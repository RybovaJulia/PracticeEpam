package com.belavia.tests.route;

import com.belavia.pages.route.RoutePage;
import com.belavia.tests.DriverTest;
import org.testng.annotations.Test;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Locale;

import static com.thoughtworks.selenium.SeleneseTestBase.assertEquals;
import static com.thoughtworks.selenium.SeleneseTestBase.assertTrue;

public class RouteTest extends DriverTest {

   private static final String FLY_FROM = "Moscow";
    private static final String FLY_TO = "Minsk";
    private Steps steps;

    @BeforeMethod(description = "Init browser")
    public void setUp()
    {
        steps = new Steps();
        steps.initBrowser();
    }


    @Test(description = "timetable access test")
    public void timetableAccessTest() {
        Assert.assertTrue(steps.checkAccessToTte());
    }

    @Test(description = "booking flights test")
    public void bookingOfFlightsTest() {
        Assert.assertTrue(steps.bookFlights(FLY_FROM,FLY_TO));
    }

    @Test(description = "booking status checking test")
    public void bookingStatusCheckingTestt() {
        Assert.assertTrue(steps.canCheckBooking());
    }


    @AfterMethod(description = "Stop Browser")
    public void stopBrowser()
    {
        steps.closeDriver();
    }
}
