import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { OnlinerRepository } from "../objectRepository/onliner.obj";

const defaultTimeout = browser.params.defaultTimeout;

export class OnlinerPage4 {
    onlinerRepo4: OnlinerRepository;

    constructor(){
        this.onlinerRepo4 = new OnlinerRepository;
    }


    public async Open (){
        await browser.navigate().to(browser.params.onlinerByURL);
    }

    public async Click() {
        

        await browser.wait(ExpectedConditions.presenceOf(await this.onlinerRepo4.baraholkaButton), defaultTimeout, "Baraholka link wasn't loaded or has incorrect locator");
        await this.onlinerRepo4.baraholkaButton.click();
    }

    public async Logo(){
        await browser.wait(ExpectedConditions.visibilityOf(await this.onlinerRepo4.baraholkaLogo), defaultTimeout, "Clever Logo wasn't loaded or has incorrect locator");
    }

}