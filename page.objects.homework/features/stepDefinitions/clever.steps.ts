import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { OnlinerPage } from "../pageObjects/clever.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;

    let onliner = new OnlinerPage;
   
    this.Before(async () => {
      
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^I am on Onliner page$/, async () => {
        await onliner.Open();
    });

    this.Then(/^I click "Onliner Clever" button$/, async () => {
        await onliner.Loaded();
    
    });

    this.Then(/^I am redirected to "Onliner Clever" page$/, async () => {
        await onliner.Logo();
       
    });


}
