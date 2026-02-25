import {test} from '../playwright/fixture/page.fixtures';

import{expect} from "@playwright/test"
import { BrowserAC } from '../playwright/pages/browserAC';
import { readJSON } from "../utils/jsonReader";


const scenarios = readJSON("scenarios.json");


for (const s of scenarios) {
test(s.scenario2, async ({ loginPage,browserAc }) => {
  
 await loginPage.load("https://www.saucedemo.com/");
 await loginPage.wait();
 await loginPage.homepage(s.username, s.password);
 await loginPage.alertBox();
 const title1= await browserAc.getTittle();
 console.log(title1);
 await browserAc.verifyUrl(/inventory/);
 await browserAc.verifyTitle(/Swag Labs/);
 console.log("test")
});


}


 



 //await expect(loginPage.errorMesage).toHaveText("There was a problem");




 ////test('clciking on mouse hover and submenu', async({orderPage})=>{
   
    //await orderPage.hoverOnMenu();
      //  await orderPage.clickOnSubmenu();

 // });

