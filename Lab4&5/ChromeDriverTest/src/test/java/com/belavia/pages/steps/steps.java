package com.belavia.pages.departures.DeparturesPage;
        import com.belavia.pages.BasePage;
        import org.openqa.selenium.WebDriver;
        import org.openqa.selenium.WebElement;
        import org.openqa.selenium.support.FindBy;
        import org.openqa.selenium.Keys;

public class DeparturesPage extends BasePage{
        
    private final String BASE_URL = "https://booking.belavia.by/";

    private final Logger logger   = LogManager.getRootLogger();

    public BookFlightsPage(WebDriver webDriver) {
        super(webDriver);
        PageFactory.initElements(this.webDriver, this);
    }

    @FindBy(id = "OriginLocation_Combobox")
    private WebElement originLocationInput;

    @FindBy(id = "DestinationLocation_Combobox")
    private WebElement destinationLocationInput;

    @FindBy(className = "DepartureDate_Datepicker")
    private WebElement departureDateInput;
    
    @FindBy(className = "ReturnDate_Datepicker")
    private WebElement returnDateInput;
    
    @FindBy(className = "btn-b2-green")
    private WebElement searchBtn;
    
    @FindBy(linkText = "Журнал OnAir")
    private WebElement onAirBtn;
    

    public void searchDestination(String originLocation, String destinationLocation, String departureDate, String returnDate){
        originLocationInput.sendKeys(originLocation);
        destinationLocationInput.sendKeys(destinationLocation);
        departureDateInput.sendKeys(departureDate);
        returnDateInput.sendKeys(returnDate);
        searchBtn.click();
        logger.info("search destination performed");
    }
    
    public void openOnAirPage(){
        onAirBtn.click();
    }

}
