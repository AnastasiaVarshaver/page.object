@smoke
Feature: Search feature    

    Check for proper searching 

    Scenario: Check that once user types a word in search field, all matching results are shown
    Given I am on Onliner page
    When I enter "iPhone" in search bar
    Then pop-up with all matching results is opened