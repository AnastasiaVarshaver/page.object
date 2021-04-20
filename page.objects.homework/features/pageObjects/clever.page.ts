import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { OnlinerRepository } from "../objectRepository/onliner.obj";

const defaultTimeout = browser.params.defaultTimeout;

export class OnlinerPage {
    onlinerRepo: OnlinerRepository;

    constructor(){
        this.onlinerRepo = new OnlinerRepository;
    }


    public async Open (){
        await browser.navigate().to(browser.params.onlinerByURL);
    }

    public async Loaded() {
        

        await browser.wait(ExpectedConditions.presenceOf(await this.onlinerRepo.cleverLink), defaultTimeout, "Baraholka link wasn't loaded or has incorrect locator");
        await this.onlinerRepo.cleverLink.click();
    }

    public async Logo(){
        await browser.wait(ExpectedConditions.visibilityOf(await this.onlinerRepo.cleverLogo), defaultTimeout, "Clever Logo wasn't loaded or has incorrect locator");
    }

}