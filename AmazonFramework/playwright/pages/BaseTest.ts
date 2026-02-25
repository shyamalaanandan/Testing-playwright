
import{Page,Browser,test,expect} from "@playwright/test"

export abstract class BaseTest{

   readonly page: Page;


constructor(page:Page){
this.page =page
}




}