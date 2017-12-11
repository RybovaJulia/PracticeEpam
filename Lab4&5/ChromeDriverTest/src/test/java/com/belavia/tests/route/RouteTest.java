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

    private static final String PATH = "https://www.belavia.com/";
    private static final String ORIGIN_STATION = "Minsk";
    private static final String DESTINATION_STATION = "Moscow";
    private static final String TODAY_EXPECTED_DATE = new SimpleDateFormat("E dd'th' MMM yyyy", Locale.US).format(Calendar.getInstance().getTime());
    private static final String RETURN_ROUTE = "RETURN";
    private static final String EXPECTED_SWAP = "Moscow (Any) to Minsk  (Any)";


    @Test (priority = 1)
    public void oneWayRouteMinskMoscowToday(){
        driver.get(PATH);

        RoutePage routePage = new RoutePage(driver);
        assertTrue(routePage.isInitialized());

        routePage.enterRoute(ORIGIN_STATION, DESTINATION_STATION);
        routePage.setOneWayRatioTicket();
        routePage.submit();

        assertEquals(TODAY_EXPECTED_DATE, routePage.confirmationOneWayTitle());
    }

    @Test (priority = 0)
    public void returnRouteMinskMoscowToday(){
        driver.get(PATH);

        RoutePage routePage = new RoutePage(driver);
        assertTrue(routePage.isInitialized());

        routePage.enterRoute(ORIGIN_STATION, DESTINATION_STATION);
        routePage.returnTicket();
        routePage.submit();

        assertEquals(RETURN_ROUTE, routePage.confirmationReturnTitle());
    }

    @Test (priority = 2)
    public void routeMinskMoscowSwap(){
        driver.get(PATH);

        RoutePage routePage = new RoutePage(driver);
        assertTrue(routePage.isInitialized());

        routePage.enterRoute(ORIGIN_STATION, DESTINATION_STATION);

        routePage.swap();
        routePage.submit();

        assertEquals(EXPECTED_SWAP, routePage.swapTitle());
    }
}
