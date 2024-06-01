export default {
  DEPARTURE_INPUT: '//input[@placeholder="Chọn điểm đi"]',
  DESTINATION_INPUT:
    '//div[contains(@class, "flight_to_popup")]//input[@data-id="flight_to"and@type="text"]',
  DEPARTURE_HANOI: '//span[@class="tt-suggestions"]/div[1]/p',
  DESTINATION_HCM: '//span[@class="tt-suggestions"]/div[1]/p',
  FLIGHT_TO_POPUP: '//div[contains(@class, "flight_to_popup")]',
  DEPARTURE_SEARCH_INPUT:
    '//div[contains(@class, "flight_from_popup")]//input[@data-id="flight_from"and@type="text"]',
  DESTINATION_SEARCH_INPUT:
    '//div[contains(@class, "flight_to_popup")]//input[@data-id="flight_to"and@type="text"]',
  DEPARTURE_DATE: '//input[@id="departure_date_flight"]',
  RETURNING_DATE: '//input[@id="returning_date_flight"]',
  PASSENGER_INPUT:
    '//div[@id="tab_search_ve-may-bay"]//input[@id="flight_passenger"]',
  SEARCH_BUTTON:
    '//button[@id="search_button"and@onclick="return validate_flight_search()"]',
  ADULT_MINUS_BUTTON:
    '//div[contains(@class, "pop-flight-passenger")]//div[@data-field="nb_adults"]/i[@class="ico-minus"]',
  CHILDREN_PLUS_BUTTON:
    '//div[contains(@class, "pop-flight-passenger")]//div[@data-field="nb_children"and@data-type="plus"]',
  ADULT_NUMBER:
    '//div[@class="popover-content"]//input[@data-name="nb_adults"]',
  FLIGHT: '//a[@title="Vé máy bay Hà Nội - Sài Gòn (TP.HCM)"]',
};
