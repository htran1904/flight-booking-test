Feature: Booking

  Scenario Outline: Something

    Given I am on the booking page
    When Enter han as the departure city 
    And Enter Ho c as the destination city
    And Select departure date as 2024-06-23
    And Select return date as 2024-06-24
    And Enter the number of passengers
    And Click on the search button
    Then I should see the booking page
