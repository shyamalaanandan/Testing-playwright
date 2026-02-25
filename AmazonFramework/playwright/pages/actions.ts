import{Page,Browser,test, Locator,expect} from "@playwright/test"

export interface IBrowseractions{

    open(url:string):Promise<void>;
    getTittle():Promise<string>;
    verifyTitle(title:string | RegExp): Promise<void>;
    getUrl():Promise<string>;
    verifyUrl(title:string|RegExp):Promise<void>

}