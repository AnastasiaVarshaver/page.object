@smoke
Feature: Footer feature    

    Footer check

    Scenario: Check that once user opens Onliner he can see
    Given I am on Onliner page
    When I press 'Все разделы барахолки' in the footer of the page
    Then new 'Барахолка' page is opened