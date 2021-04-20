import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { OnlinerRepository } from "../objectRepository/onliner.obj";

const defaultTimeout = browser.params.defaultTimeout;

export class OnlinerPage3 {
    onlinerRepo3: OnlinerRepository;

    constructor(){
        this.onlinerRepo3 = new OnlinerRepository;
    }


    public async Open (){
        await browser.navigate().to(browser.params.onlinerByURL);
    }

    public async Loaded() {
        

        await browser.wait(ExpectedConditions.presenceOf(await this.onlinerRepo3.youtubeButton), defaultTimeout, "Baraholka link wasn't loaded or has incorrect locator");
        await this.onlinerRepo3.youtubeButton.click();
    }

    public async Name(){
        await browser.wait(ExpectedConditions.visibilityOf(await this.onlinerRepo3.youtubeName), defaultTimeout, "Clever Logo wasn't loaded or has incorrect locator");
    }

}