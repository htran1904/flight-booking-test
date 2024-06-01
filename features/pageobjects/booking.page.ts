import { $ } from "@wdio/globals";
import LOCATOR from "../locators/booking-page.locator.js";

class BookingPage {
  public open() {
    return browser.url("https://www.bestprice.vn/");
  }

  public async selectDeparture(searchText: string) {
    await $(LOCATOR.DEPARTURE_INPUT).click();
    await $(LOCATOR.DEPARTURE_SEARCH_INPUT).setValue(searchText);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const element = await $(LOCATOR.DEPARTURE_HANOI);
    await browser.execute((el: any) => {
      el.onclick();
    }, element);
    await $(LOCATOR.FLIGHT_TO_POPUP).isDisplayed();
  }

  public async selectDestination(searchText: string) {
    await $(LOCATOR.DESTINATION_INPUT).setValue(searchText);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const element = await $(LOCATOR.DESTINATION_HCM);
    await browser.execute((el: any) => {
      el.onclick();
    }, element);
  }

  async selectDepartureDate(year: number, month: number, day: number) {
    await $(LOCATOR.DEPARTURE_DATE).click();
    const element = await $(
      `//td[@data-month="${month}"and@data-year="${year}"]//span[text()="${day}"]`
    );
    await element.click();
  }

  async selectDestinationDate(year: number, month: number, day: number) {
    await $(LOCATOR.RETURNING_DATE).click();
    const element = await $(
      `//td[@data-month="${month}"and@data-year="${year}"]//span[text()="${day}"]`
    );
    await element.click();
  }

  async selectPassengers() {
    await $(LOCATOR.PASSENGER_INPUT).click();
    await $(LOCATOR.ADULT_MINUS_BUTTON).waitForStable();
    await $(LOCATOR.ADULT_MINUS_BUTTON).click();
    expect(await $(LOCATOR.ADULT_NUMBER).getValue()).toBe("1");
    await $(LOCATOR.CHILDREN_PLUS_BUTTON).waitForStable();
    await $(LOCATOR.CHILDREN_PLUS_BUTTON).click();
  }

  async clickSearchButton() {
    await $(LOCATOR.SEARCH_BUTTON).click();
  }

  async expectSearchResultShouldBeDisplayed() {
    expect(await $(LOCATOR.FLIGHT).isDisplayed()).toBe(true);
  }
}

export default new BookingPage();
