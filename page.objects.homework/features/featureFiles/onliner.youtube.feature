@smoke
Feature: Youtube redirection feature    

    Check for proper Youtube redirection

    Scenario: Check that once user clicks youtube icon in the footer, he is redirected to the related page
    Given I am on Onliner page
    When I click Youtube icon in the footer
    Then I am redirected to Onliner Youtube page