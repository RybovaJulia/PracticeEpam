package com.belavia.pages.departures.DeparturesPage;
        import com.belavia.pages.BasePage;
        import org.openqa.selenium.WebDriver;
        import org.openqa.selenium.WebElement;
        import org.openqa.selenium.support.FindBy;
        import org.openqa.selenium.Keys;

public class Steps {

    private WebDriver driver;
	

	    private final Logger logger = LogManager.getRootLogger();

	    public void initBrowser()
	    {
	        driver = DriverTest.getDriver();
	    }
	
	    public void closeDriver() {
	        driver.quit();
	    }
	
	    public boolean accessToHomePage() {
	        HomePage homePage = new HomePage(driver);
	        homePage.openPage();
	

	        return homePage.isLogoAvailable();
	    }
	

	    public boolean checkMenu() {
	        HomePage homePage = new HomePage(driver);
	        homePage.openPage();
	

	        return homePage.isMenuDisplayed();
	    }
	

	    public String login(String userId, String password) {
	        HomePage homePage = new HomePage(driver);
	        homePage.openPage();
	

	        homePage.login(userId,password);
	

	        return homePage.getUsername();
	    }
	

	    public String changePassportId(String passportId) {
	        LoginPage loginPage = new LoginPage(driver);
	        loginPage.openPage();
	
	         loginPage.changePassportId(passportId);

	         return loginPage.getPassportId();
	    }
	

	    public String changeCountry(String country) {
	        LoginPage loginPage = new LoginPage(driver);
	        loginPage.openPage();
	
	        loginPage.changeCountry(country);

	        return loginPage.getCountry();

	    }
	
	    public String changePlaceOfEmpl(String placeOfEmployment) {
	        LoginPage loginPage = new loginPage(driver);
	        loginPage.openPage();
	

	        loginPage.changePlaceOfEmpl(placeOfEmployment);
	
	        return loginPage.getPlaceOfEmpl();
	    }
	
	    public boolean checkAccessToTte() {
	        RoutePage routePage = new RoutePage(driver);
	        routePage.openPage();
	

	        return routePage.isPageOpened();
	    }

	    public boolean bookFlights(String flyFrom, String flyTo) {
	        RoutePage routePage = new RoutePage(driver);
	        routePage.openPage();
	

	        routePage.book(flyFrom, flyTo);
	

	        return routePage.isFlightsBooked();
	    }
	

	    public boolean canCheckBooking() {
	        RoutePage routePage = new RoutePage(driver);
	        routePage.openPage();
	

	        return routePage.bookingCheck();
	

	    }
	}

