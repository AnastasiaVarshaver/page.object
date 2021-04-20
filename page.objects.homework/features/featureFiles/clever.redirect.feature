@smoke
Feature: Clever button   

    Check that header contains Onliner Clever button

    Scenario: Check that URL is changed on URL of chosen page
    Given I am on Onliner page
    When I click "Onliner Clever" button
    Then I am redirected to "Onliner Clever" page