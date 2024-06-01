import { Given, When, Then } from "@wdio/cucumber-framework";

import BookingPage from "../pageobjects/booking.page.js";

const pages = {
  booking: BookingPage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

When(/^Enter (\w+) as the departure city$/, async (searchText: string) => {
  await pages.booking.selectDeparture(searchText);
});

When(
  /^Enter ([\w\s]+) as the destination city$/,
  async (searchText: string) => {
    await pages.booking.selectDestination(searchText);
  }
);

When(/^Select departure date as (.+)$/, async (date: string) => {
  const [year, month, day] = date.split("-");
  await pages.booking.selectDepartureDate(
    Number(year),
    Number(month),
    Number(day)
  );
});

When(/^Select return date as (.+)$/, async (date: string) => {
  const [year, month, day] = date.split("-");
  await pages.booking.selectDestinationDate(
    Number(year),
    Number(month),
    Number(day)
  );
});

When(/^Enter the number of passengers$/, async () => {
  await pages.booking.selectPassengers();
});

When(/^Click on the search button$/, async () => {
  await pages.booking.clickSearchButton();
});

Then(/^I should see the booking page$/, async () => {
  await pages.booking.expectSearchResultShouldBeDisplayed();
  browser.pause(30000);
});
