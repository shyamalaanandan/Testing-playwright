import { BrowserContext,Page,expect } from "@playwright/test";
import { IBrowseractions } from "./actions";
import{test} from "@playwright/test";
import { BaseTest } from "./BaseTest";

export class BrowserAC extends BaseTest implements IBrowseractions {

    constructor(page:Page)
{    super(page)
     
    }

    async open(url:string){

        await this.page.goto(url)
    }

    async getTittle(): Promise<any> {
        return await this.page.title()
        
    }

    async verifyTitle(title: string | RegExp): Promise<void> {
        await test.step(`title validation': ${title}` ,async()=>{
            await expect(this.page).toHaveTitle(title)

        })
         
        
    }
    async getUrl(): Promise<any> {
        return await this.page.url();
        
    }
    async verifyUrl(title: string | RegExp): Promise<void> {
        
        await expect(this.page).toHaveURL(title);
    }

    



}