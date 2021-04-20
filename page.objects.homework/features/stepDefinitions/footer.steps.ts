import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { OnlinerPage4 } from "../pageObjects/footer.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;

    let onliner = new OnlinerPage4;

  
    this.Before(async () => {
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^I am on Onliner page$/, async () => {
        await onliner.Open();
    });

    this.Then(/^I press 'Все разделы барахолки' in the footer of the page$/, async () => {
        await onliner.Click();
    
     });

     this.Then(/^new 'Барахолка' page is opened$/, async () => {
        await onliner.Logo();
     });



}
