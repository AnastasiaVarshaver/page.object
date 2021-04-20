import { by, element, ElementFinder } from "protractor";

export class OnlinerRepository {
    readonly cleverLink:ElementFinder = element(by.xpath("//*[@class='b-top-navigation-clover' and contains(text(), 'Onliner Клевер')]"));;
    readonly cleverLogo:ElementFinder = element(by.xpath("//*[@class='intro-subtitle' and contains(text(), 'КЛЕВЕР')]"));
    readonly searchField:ElementFinder = element(by.xpath("//*[@class='fast-search__input']"));
    readonly searchModal:ElementFinder = element(by.xpath("//*[@id='fast-search-modal']"));
    readonly youtubeButton:ElementFinder = element(by.xpath("//a[@href='https://youtube.com/onlinerby']")); 
    readonly youtubeName:ElementFinder = element(by.xpath("//*[@id='channel-name' ]")); 
    readonly baraholkaButton:ElementFinder = element(by.xpath("//a[@href='http://baraholka.onliner.by']")); 
    readonly baraholkaLogo:ElementFinder = element(by.xpath("//*[@class='m-title-i']")); 
}