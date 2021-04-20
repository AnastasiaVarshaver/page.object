import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { OnlinerPage2 } from "../pageObjects/search.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;

    let onliner = new OnlinerPage2;

  
    this.Before(async () => {
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^I am on Onliner page$/, async () => {
        await onliner.Open();
    });

    this.Then(/^I enter "iPhone" in search bar$/, async () => {
        await onliner.Loaded();
    
     });

     this.Then(/^pop-up with all matching results is opened$/, async () => {
        await onliner.Result();
     });



}
