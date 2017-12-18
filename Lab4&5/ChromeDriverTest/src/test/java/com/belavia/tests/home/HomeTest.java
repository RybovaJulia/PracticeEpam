package com.belavia.tests.departures;

import com.belavia.pages.departures.DeparturesPage;
import com.belavia.tests.DriverTest;
import org.testng.annotations.Test;

import static com.thoughtworks.selenium.SeleneseTestBase.assertEquals;
import static com.thoughtworks.selenium.SeleneseTestBase.assertTrue;

public class DeparturesTest extends DriverTest {

    private static final String PATH = "https://booking.belavia.by";
    private static final String FROM_STATION = "Minsk National Airport";
    private static final String TO_STATION = "Sheremetyevo International Airport";
    private static final String EXPECTED_DEPARTURES_MESSAGE = "Departures from Minsk National Airport to Sheremetyevo International Airport";
    private static final String EXPECTED_ARRIVALS_MESSAGE = "Arrivals at Minsk National Airport via Sheremetyevo International Airport";
    
    @Test(priority = 0)
    public void departuresMinskMoscow(){
        driver.get(PATH);

        DeparturesPage departuresPage = new DeparturesPage(driver);
        assertTrue(departuresPage.isInitialized());

        departuresPage.enterRoute(FROM_STATION, TO_STATION);
        departuresPage.submit();

        assertEquals(EXPECTED_DEPARTURES_MESSAGE, departuresPage.confirmationDeparturesArrivalsTitle());
    }

    @Test (priority = 1)
    public void arrivalsMinskMoscow(){
        driver.get(PATH);

        DeparturesPage departuresPage = new DeparturesPage(driver);
        assertTrue(departuresPage.isInitialized());

        departuresPage.arrivals();
        departuresPage.enterRoute(FROM_STATION, TO_STATION);
        departuresPage.submit();

        assertEquals(EXPECTED_ARRIVALS_MESSAGE, departuresPage.confirmationDeparturesArrivalsTitle());
    }
}
