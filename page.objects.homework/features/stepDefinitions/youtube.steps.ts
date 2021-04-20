import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { OnlinerPage3 } from "../pageObjects/youtube.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;

    let onliner = new OnlinerPage3;

  
    this.Before(async () => {
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^I am on Onliner page$/, async () => {
        await onliner.Open();
    });

    this.Then(/^I click Youtube icon in the footer$/, async () => {
        await onliner.Loaded();
    
     });

     this.Then(/^I am redirected to Onliner Youtube page$/, async () => {
        await onliner.Name();
     });



}
