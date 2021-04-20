import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { OnlinerRepository } from "../objectRepository/onliner.obj";

const defaultTimeout = browser.params.defaultTimeout;

export class OnlinerPage2 {
    onlinerRepo2: OnlinerRepository;

    constructor(){
        this.onlinerRepo2 = new OnlinerRepository;
    }


    public async Open (){
        await browser.navigate().to(browser.params.onlinerByURL);
    }

    public async Loaded(){
        

        await browser.wait(ExpectedConditions.visibilityOf(await this.onlinerRepo2.searchField), defaultTimeout, "Search Field wasn't loaded or has incorrect locator");
        await this.onlinerRepo2.searchField.sendKeys("iPhone");
    }

    public async Result(){
        await browser.wait(ExpectedConditions.visibilityOf(await this.onlinerRepo2.searchModal), defaultTimeout, "Modal wasn't loaded or has incorrect locator");
    }

}